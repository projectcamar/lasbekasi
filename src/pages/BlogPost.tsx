import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ServiceAreasSection from '../components/ServiceAreasSection'
import AuthorCard from '../components/AuthorCard'
import { getPostBySlug, BLOG_POSTS } from '../data/blog'
import { ALL_PRODUCTS } from '../data/products'
import { getBlogPostContentLocalized, type BlogSection } from '../data/blogContent'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { generateBlogPostingSchema } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls, truncateTitle, truncateMetaDescription } from '../utils/seo'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { 
    BLOG_POST_TRANSLATIONS, 
    MENTIONED_PRODUCT_LABEL, 
    VIEW_PRODUCT_LABEL,
    CTA_TRANSLATIONS 
} from '../utils/blogTranslations'
import './Blog.css'
import './BlogPost.css'

const ProductMentionPrice: React.FC<{ price: string; language: LanguageCode }> = ({ price, language }) => {
  const [highlightedPrice, setHighlightedPrice] = useState<string>(price)
  const [secondaryPrice, setSecondaryPrice] = useState<string | null>(null)

  useEffect(() => {
    const convert = async () => {
      if (language === 'id') {
        const usdVal = await convertIDRToUSD(price);
        setHighlightedPrice(price);
        setSecondaryPrice(usdVal);
        return;
      }

      const currencyMap: Record<string, 'USD' | 'SAR' | 'CNY' | 'JPY' | 'EUR' | 'KRW'> = {
        'en': 'USD', 'ar': 'SAR', 'zh': 'CNY', 'ja': 'JPY', 'es': 'EUR', 'fr': 'EUR', 'ko': 'KRW'
      };

      const targetCurrency = currencyMap[language] || 'USD';

      try {
        const converted = await convertIDRToCurrency(price, targetCurrency);
        setHighlightedPrice(converted);
        if (targetCurrency !== 'USD') {
          const usdVal = await convertIDRToUSD(price);
          setSecondaryPrice(usdVal);
        } else {
          setSecondaryPrice(price);
        }
      } catch (error) {
        console.error('Price conversion error:', error);
      }
    };
    convert();
  }, [price, language]);

  return (
    <div className="mandiri-post__mention-price">
      <span className="mandiri-post__mention-price-primary">{highlightedPrice}</span>
      {secondaryPrice && <span className="mandiri-post__mention-price-secondary">{secondaryPrice}</span>}
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [language, setLanguage] = useState<LanguageCode>('en')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  
  const post = slug ? getPostBySlug(slug) : undefined
  const isIndonesian = language === 'id'

  const hasCustomContent = post?.customContent && (
    post.customContent.introduction ||
    (post.customContent.sections && post.customContent.sections.length > 0) ||
    post.customContent.conclusion
  )

  const content = slug ? (hasCustomContent ? {
    sections: [
      ...(post.customContent?.introduction ? [{ heading: '', paragraphs: [post.customContent.introduction] }] : []),
      ...(post.customContent?.sections?.map((section: any) => ({
        heading: section.heading, paragraphs: [section.content], image: section.image, imageAlt: section.imageAlt, productId: section.productId
      })) || []),
      ...(post.customContent?.conclusion ? [{ heading: '', paragraphs: [post.customContent.conclusion] }] : [])
    ]
  } : getBlogPostContentLocalized(slug, language)) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (post?.customContent?.language) {
      setLanguage(post.customContent.language)
    } else {
      setLanguage(getCurrentLanguage(location.pathname, location.search))
    }
  }, [location.pathname, location.search, post?.customContent?.language])

  if (!post || !content) return <Navigate to="/404-not-found" replace />

  const otherArticles = BLOG_POSTS.filter(p => p.slug !== slug).sort(() => Math.random() - 0.5).slice(0, 5)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const t = BLOG_POST_TRANSLATIONS[language] || BLOG_POST_TRANSLATIONS.en

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 3000)
    } catch (err) {}
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${currentUrl}`)}`
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim() || newsletterLoading) return
    setNewsletterLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, blogPost: post.title, language })
      })
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 5000)
    } catch (error) {} finally { setNewsletterLoading(false) }
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path: `/blog/${post.slug}` }
  ]

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)
  const blogSchema = generateBlogPostingSchema(post)

  return (
    <div className="mandiri-post">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction }}>
        <title>{truncateTitle(`${post.title} - Mandiri Steel`)}</title>
        <meta name="description" content={truncateMetaDescription(post.excerpt || post.title)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        {localizedUrls.alternates.map(alt => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <div className="mandiri-post__hero">
        <img src={post.image} alt={post.title} className="mandiri-post__hero-img" />
        <div className="mandiri-post__hero-overlay"></div>
        <div className="mandiri-post__hero-content">
          <div className="mandiri-post__container">
            <span className="mandiri-post__category">{post.category}</span>
            <h1 className="mandiri-post__title">{post.title}</h1>
            <div className="mandiri-post__meta">
              <span>{post.author}</span> • <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mandiri-post__breadcrumb">
        <div className="mandiri-post__container">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main className="mandiri-post__main">
        <div className="mandiri-post__container mandiri-post__layout">
          <div className="mandiri-post__content">
            {content.sections.map((section: BlogSection, idx: number) => (
              <section key={idx} className="mandiri-post__section">
                {section.heading && <h2 className="mandiri-post__heading">{section.heading}</h2>}
                {section.paragraphs?.map((p: string, pi: number) => (
                  <p key={pi} className="mandiri-post__text" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                {section.image && (
                  <figure className="mandiri-post__figure">
                    <img src={section.image} alt={section.imageAlt || post.title} />
                    {section.imageAlt && <figcaption>{section.imageAlt}</figcaption>}
                  </figure>
                )}
                {section.productId && (() => {
                  const product = ALL_PRODUCTS.find(p => p.id === section.productId);
                  if (!product) return null;
                  return (
                    <div className="mandiri-post__mention">
                      <img src={product.image} alt={product.name} />
                      <div className="mandiri-post__mention-info">
                        <span className="mandiri-post__mention-label">{MENTIONED_PRODUCT_LABEL[language]}</span>
                        <h4>{product.name}</h4>
                        <ProductMentionPrice price={product.price} language={language} />
                        <Link to={`/product/${product.slug}?ref=blog`} className="mandiri-post__mention-btn">
                          {VIEW_PRODUCT_LABEL[language]}
                        </Link>
                      </div>
                    </div>
                  );
                })()}
                {section.list && (
                  <ul className="mandiri-post__list">
                    {section.list.map((item: string, li: number) => <li key={li} dangerouslySetInnerHTML={{ __html: item }} />)}
                  </ul>
                )}
              </section>
            ))}

            <div className="mandiri-post__author-wrap">
              <AuthorCard 
                name="Maman Toha" 
                title="Master Welder & Founder" 
                language={language} 
                experience={language === 'id' ? [
                  'Spesialis Pengelasan Kanopi & Pagar Minimalis',
                  'Konstruksi Struktur Baja WF & H-Beam',
                  'Pengalaman Pengelasan Profesional sejak 1999',
                  'Ahli Fabrikasi Besi Tempa & Stainless Steel'
                ] : [
                  'Minimalist Canopy & Gate Welding Specialist',
                  'WF Steel & H-Beam Structural Construction',
                  'Professional Welding Experience since 1999',
                  'Wrought Iron & Stainless Steel Fabrication Expert'
                ]}
              />
            </div>

            <div className="mandiri-post__cta">
                <h3>{CTA_TRANSLATIONS[language].title}</h3>
                <p>{CTA_TRANSLATIONS[language].subtitle}</p>
                <div className="mandiri-post__cta-btns">
                    <Link to="/products" className="mandiri-post__cta-btn mandiri-post__cta-btn--primary">
                        {CTA_TRANSLATIONS[language].viewAllProducts}
                    </Link>
                    <a href={`https://wa.me/6281210000000?text=${encodeURIComponent("Halo Mandiri Steel, saya tertarik dengan layanan Anda setelah membaca artikel: " + post.title)}`} className="mandiri-post__cta-btn mandiri-post__cta-btn--secondary">
                        {CTA_TRANSLATIONS[language].contactUs}
                    </a>
                </div>
            </div>
          </div>

          <aside className="mandiri-post__sidebar">
            <div className="mandiri-post__sidebar-box">
              <h4 className="mandiri-post__sidebar-title">{t.newsletter.title}</h4>
              <p>{t.newsletter.description}</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder={t.newsletter.placeholder} 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required 
                />
                <button type="submit" disabled={newsletterLoading}>
                  {newsletterLoading ? '...' : t.newsletter.button}
                </button>
              </form>
              {newsletterSubmitted && <p className="mandiri-post__success">{t.newsletter.success}</p>}
            </div>

            <div className="mandiri-post__sidebar-box">
              <h4 className="mandiri-post__sidebar-title">{t.share.title}</h4>
              <div className="mandiri-post__share">
                <a href={shareUrls.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /></a>
                <a href={shareUrls.twitter} target="_blank" rel="noreferrer"><Twitter size={18} /></a>
                <a href={shareUrls.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                <button onClick={handleCopyLink}>{linkCopied ? <Check size={18} /> : <Copy size={18} />}</button>
              </div>
            </div>

            <div className="mandiri-post__sidebar-box mandiri-post__sidebar-box--cta">
              <h4 className="mandiri-post__sidebar-title">{t.consultation.title}</h4>
              <p>{t.consultation.description}</p>
              <button className="mandiri-post__consult-btn" onClick={() => trackWhatsAppClick('blog_sidebar')}>
                {t.consultation.button}
              </button>
            </div>

            <div className="mandiri-post__sidebar-box">
                <h4 className="mandiri-post__sidebar-title">Artikel Terkait</h4>
                <div className="mandiri-post__related">
                    {otherArticles.map(p => (
                        <Link key={p.id} to={`/blog/${p.slug}`} className="mandiri-post__related-item">
                            <img src={p.image} alt={p.title} />
                            <span>{p.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default BlogPost
