import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { Mail, MessageCircle, Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ServiceAreasSection from '../components/ServiceAreasSection'
import AuthorCard from '../components/AuthorCard'
import { getPostBySlug, BLOG_POSTS, type BlogPost } from '../data/blog'
import { ALL_PRODUCTS } from '../data/products'
import { getBlogPostContentLocalized, type BlogSection } from '../data/blogContent'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { generateBlogPostingSchema, generateFAQSchema } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls, truncateTitle, truncateMetaDescription } from '../utils/seo'
import BlogProductShowcase from '../components/BlogProductShowcase'
import { getRelevantProductsForBlog, getProductShowcaseHeading } from '../utils/blogProductMapping'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import {
  BLOG_POST_TRANSLATIONS,
  BLOG_PRODUCT_SHOWCASE_DESCRIPTION,
  MENTIONED_PRODUCT_LABEL,
  VIEW_PRODUCT_LABEL,
  CTA_TRANSLATIONS
} from '../utils/blogTranslations'
import './NaturraBlog.css'
import './NaturraBlogPost.css'
import '../components/DualLanguage.css'

/**
 * Component to handle localized currency display for mentioned products
 */
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
        'en': 'USD',
        'ar': 'SAR',
        'zh': 'CNY',
        'ja': 'JPY',
        'es': 'EUR',
        'fr': 'EUR',
        'ko': 'KRW'
      };

      const targetCurrency = currencyMap[language] || 'USD';

      try {
        const converted = await convertIDRToCurrency(price, targetCurrency);
        setHighlightedPrice(converted);

        if (targetCurrency !== 'USD') {
          const usdVal = await convertIDRToUSD(price);
          setSecondaryPrice(usdVal);
        } else {
          // For English/others where USD is primary, show IDR as secondary
          setSecondaryPrice(price);
        }
      } catch (error) {
        console.error('Price conversion error:', error);
      }
    };

    convert();
  }, [price, language]);

  return (
    <div className="mentioned-product-price-container">
      <span className="mentioned-product-price-primary">{highlightedPrice}</span>
      {secondaryPrice && <span className="mentioned-product-price-secondary">{secondaryPrice}</span>}
    </div>
  );
};

const parseParagraphs = (text: string | undefined): string[] => {
  if (!text) return []
  return text
    .split(/<br\s*\/?>|\n+/)
    .map(p => p.trim())
    .filter(Boolean)
}

const NaturraBlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLanguageLoading, setIsLanguageLoading] = useState(true)
  const [language, setLanguage] = useState<LanguageCode>('en')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const post = slug ? getPostBySlug(slug) : undefined

  // Check if post has custom content, otherwise use AI-generated content
  const hasCustomContent = post?.customContent && (
    post.customContent.introduction ||
    (post.customContent.sections && post.customContent.sections.length > 0) ||
    post.customContent.conclusion
  )

  const content = slug ? (hasCustomContent ? {
    sections: [
      // Introduction section
      ...(post.customContent?.introduction ? [{
        heading: '',
        paragraphs: parseParagraphs(post.customContent.introduction)
      }] : []),
      // Custom sections
      ...(post.customContent?.sections?.map(section => ({
        heading: section.heading,
        paragraphs: parseParagraphs(section.content),
        image: section.image,
        imageAlt: section.imageAlt,
        productId: section.productId
      } as BlogSection)) || []),
      // Conclusion section
      ...(post.customContent?.conclusion ? [{
        heading: '',
        paragraphs: parseParagraphs(post.customContent.conclusion)
      }] : [])
    ]
  } : getBlogPostContentLocalized(slug, language)) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    // If the post has custom content with an explicit language set, use it.
    // Otherwise, fall back to URL/browser detection.
    if (post?.customContent?.language) {
      const explicitLang = post.customContent.language
      setLanguage(explicitLang)
      setIsIndonesian(explicitLang === 'id')
      setIsLanguageLoading(false)
    } else {
      const detectedLang = getCurrentLanguage(location.pathname, location.search)
      setLanguage(detectedLang)
      setIsIndonesian(detectedLang === 'id')
      setIsLanguageLoading(false)
    }
  }, [location.pathname, location.search, post?.customContent?.language])

  if (isLanguageLoading) {
    return (
      <div className="blog-page blog-post-page">
        <NaturraHeader />
        <main className="blog-post-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #333',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            <p>Loading...</p>
          </div>
        </main>
        <Footer isIndonesian={isIndonesian} language={language} />
      </div>
    )
  }

  // Redirect to NotFound page if blog post doesn't exist to prevent Soft 404
  if (!post || !content) {
    return <Navigate to="/404-not-found" replace />
  }

  // Get other articles (exclude current)
  const otherArticles = BLOG_POSTS
    .filter(p => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)

  // Share article functions
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const articleTitle = post?.title || ''

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${articleTitle} ${currentUrl}`)}`
  }

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim() || newsletterLoading) return

    setNewsletterLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Blog Visitor',
          email: newsletterEmail,
          notificationType: 'newsletter_subscription',
          blogPost: post?.title || '',
          blogPostUrl: window.location.href,
          language: language
        }),
      })
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 5000)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setNewsletterLoading(false)
    }
  }

  // Get translations for sidebar features
  const sidebarFeatures = BLOG_POST_TRANSLATIONS[language] ?? BLOG_POST_TRANSLATIONS.en

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: post.category, path: '/blog' },
    { label: post.title, path: `/blog/${post.slug}` }
  ]

  // Generate SEO-optimized keywords based on post slug
  const generateKeywords = (slug: string, title: string) => {
    const keywordMap: { [key: string]: string } = {
      'desain-kanopi-minimalis-alderon': 'kanopi minimalis alderon, model kanopi terbaru, pasang kanopi bekasi, bengkel las kanopi',
      'tips-merawat-pagar-besi-anti-karat': 'merawat pagar besi, cat anti karat pagar, pagar minimalis tahan lama, tips pagar besi',
      'keunggulan-konstruksi-baja-wf': 'konstruksi baja wf, baja berat vs beton, pasang baja wf bekasi, kelebihan struktur baja'
    }
    return keywordMap[slug] || `${title}, bengkel las bekasi, kanopi minimalis, pagar besi, konstruksi baja, Mandiri Steel`
  }

  // Generate BlogPosting Schema
  const blogSchema = generateBlogPostingSchema(post)
  const metaDescription = (post.excerpt && post.excerpt.trim().length > 0)
    ? post.excerpt
    : (post.category === 'Tips & Inspirasi'
      ? `Baca: ${post.title} — Panduan praktis, FAQ, dan inspirasi pengerjaan las dari Mandiri Steel.`
      : `Read: ${post.title} — Practical guide, FAQs, and steel structure insights from Mandiri Steel.`)

  // Extract FAQ from content for AI Search Optimization
  const extractFAQFromContent = () => {
    if (!content?.sections) return []

    const faqSection = content.sections.find(section =>
      section.heading?.toLowerCase().includes('faq') ||
      section.heading?.toLowerCase().includes('pertanyaan')
    )

    if (!faqSection?.list) return []

    // Parse FAQ list items (format: <strong>Question</strong><br/>Answer)
    return faqSection.list.map(item => {
      const parts = item.split(/<br\s*\/?>|:\s*/)

      if (parts.length >= 2) {
        return {
          question: parts[0].replace(/<[^>]*>/g, '').trim(),
          answer: parts.slice(1).join(' ').replace(/<[^>]*>/g, '').trim()
        }
      }
      return null
    }).filter(Boolean) as Array<{ question: string; answer: string }>
  }

  const faqData = extractFAQFromContent()
  const faqSchema = faqData.length > 0 ? generateFAQSchema(faqData) : null

  // Check if this blog post should show Service Areas Section
  const shouldShowServiceAreas = true

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="blog-page blog-post-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{truncateTitle(`${post.title} - Mandiri Steel`)}</title>
        <meta name="description" content={truncateMetaDescription(metaDescription)} />
        <meta name="keywords" content={generateKeywords(post.slug, post.title)} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        {/* Robots meta - allow indexing, follow links, point to canonical */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`blog-post-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author || 'Mandiri Steel'} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        {post.author === 'Helmi Ramdan' && (
          <>
            <meta name="author" content="Helmi Ramdan" />
            <meta name="article:author" content="Helmi Ramdan" />
            <meta name="article:author:role" content="Infrastructure Engineer & Commercial Space Specialist" />
            <meta name="article:author:expertise" content="Commercial Space Design, Construction Management, Infrastructure Engineering, Architectural Drafting, Furniture Design Consultation" />
            <meta name="article:author:experience" content="8+ years total: 3+ years Infrastructure Engineering at Damai Putra Group, 5+ years Design Engineering & Architectural Drafting" />
            <meta name="article:author:education" content="Universitas Diponegoro" />
            <meta name="article:author:specialization" content="Commercial Space Design & Construction" />
            <link rel="author" href="https://www.linkedin.com/in/helmi-ramdan-067912118/" />
          </>
        )}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.image} />

        {/* BlogPosting Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>

        {/* FAQ Structured Data for AI Search Optimization */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <section className="blog-post-hero" aria-labelledby="blog-post-title">
        <div className="blog-post-hero-image">
          <img
            src={post.image}
            alt={`${post.title} - ${post.category} Jasa Las Article by Mandiri Steel`}
            title={`${post.title} | Mandiri Steel`}
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="blog-post-hero-overlay" />
        </div>
        <div className="blog-post-hero-content">
          <div className="blog-post-hero-inner">
            <span className="blog-post-category-tag">{post.category}</span>
            <h1 id="blog-post-title" className="blog-post-title">
              {post.title}
            </h1>
            <p className="blog-post-meta">
              {post.author || 'Mandiri Steel'} · {formattedDate}
            </p>
          </div>
        </div>
      </section>

      <div className="blog-breadcrumb-container">
        <div className="blog-post-container">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main className="blog-post-main" aria-labelledby="blog-post-title">
        <section className="blog-content-section">
          <div className="blog-post-container">

            <div className="blog-post-layout">
              <article className="blog-post-article" aria-labelledby="blog-post-title">
                {content.sections.map((section: BlogSection, index: number) => (
                  <React.Fragment key={index}>
                    <section className="blog-post-section">
                      {section.heading && <h2 className="blog-post-section-heading">{section.heading}</h2>}

                      {section.paragraphs?.map((para: string, pIndex: number) => (
                        <p
                          key={pIndex}
                          className="blog-post-paragraph"
                          dangerouslySetInnerHTML={{ __html: para }}
                        />
                      ))}

                      {section.image && (
                        <figure className="blog-post-figure">
                          <img
                            src={section.image}
                            alt={section.imageAlt || `${post.title} - ${section.heading || 'Steel Fabrication Article'} - Mandiri Steel`}
                            title={section.imageAlt || `${post.title} - ${section.heading || 'steel fabrication Guide'} by Mandiri Steel`}
                            loading="lazy"
                            width="800"
                            height="500"
                            itemProp="image"
                            data-image-type="blog-content"
                            data-post-slug={post.slug}
                            data-section-heading={section.heading || ''}
                          />
                          {section.imageAlt && <figcaption className="blog-post-figcaption">{section.imageAlt}</figcaption>}
                        </figure>
                      )}

                      {/* Mentioned Product Card */}
                      {section.productId && (() => {
                        const product = ALL_PRODUCTS.find(p => p.id === section.productId);
                        if (!product) return null;

                        return (
                          <div className="blog-post-mentioned-product">
                            <div className="mentioned-product-image">
                              <img src={product.image} alt={product.name} />
                            </div>
                            <div className="mentioned-product-info">
                              <span className="mentioned-product-label">
                                {MENTIONED_PRODUCT_LABEL[language] || MENTIONED_PRODUCT_LABEL.en}
                              </span>
                              <h4 className="mentioned-product-name">{product.name}</h4>
                              <ProductMentionPrice price={product.price} language={language} />
                            </div>
                            <Link
                              to={`/product/${product.slug}?ref=blog_mention&language=${language}`}
                              className="mentioned-product-action"
                            >
                              {VIEW_PRODUCT_LABEL[language] || VIEW_PRODUCT_LABEL.en}
                            </Link>
                          </div>
                        );
                      })()}

                      {section.list && (
                        <ul className="blog-post-list">
                          {section.list.map((item: string, lIndex: number) => (
                            <li key={lIndex} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      )}
                    </section>

                    {index === 2 && (() => {
                      const relevantProducts = getRelevantProductsForBlog(post.slug, post.title, post.excerpt)
                      if (relevantProducts.length > 0) {
                        const showcaseHeading = getProductShowcaseHeading(post.slug, post.title, language)
                        const showcaseDescription = BLOG_PRODUCT_SHOWCASE_DESCRIPTION[language] || BLOG_PRODUCT_SHOWCASE_DESCRIPTION.en

                        return (
                          <div className="blog-post-product-showcase">
                            <BlogProductShowcase
                              products={relevantProducts}
                              heading={showcaseHeading}
                              description={showcaseDescription}
                              language={language}
                            />
                          </div>
                        )
                      }
                      return null
                    })()}
                  </React.Fragment>
                ))}

                {post.author === 'Helmi Ramdan' && (
                  <div className="blog-post-author-card">
                    <AuthorCard
                      name="Helmi Ramdan"
                      title={post.category === 'Tips & Inspirasi'
                        ? "Associate at Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta"
                        : "Associate at Housing and Settlement Department, DKI Jakarta Province"}
                      experience={post.category === 'Tips & Inspirasi'
                        ? [
                          'Infrastructure Engineer at Damai Putra Group (3+ tahun)',
                          'Design Engineer & Architectural Drafter (5+ tahun)',
                          'Alumni Universitas Diponegoro',
                          'Spesialis Commercial Space Design & Construction'
                        ]
                        : [
                          'Infrastructure Engineer at Damai Putra Group (3+ years)',
                          'Design Engineer & Architectural Drafter (5+ years)',
                          'Alumni of Diponegoro University',
                          'Commercial Space Design & Construction Specialist'
                        ]}
                      linkedIn="https://www.linkedin.com/in/helmi-ramdan-067912118/"
                      language={language}
                    />
                  </div>
                )}

                {(() => {
                  const showcaseAlreadyShown = content.sections.length > 3

                  if (!showcaseAlreadyShown) {
                    const relevantProducts = getRelevantProductsForBlog(post.slug, post.title, post.excerpt)
                    if (relevantProducts.length > 0) {
                      const showcaseHeading = getProductShowcaseHeading(post.slug, post.title, language)
                      const showcaseDescription = BLOG_PRODUCT_SHOWCASE_DESCRIPTION[language] || BLOG_PRODUCT_SHOWCASE_DESCRIPTION.en

                      return (
                        <div className="blog-post-product-showcase">
                          <BlogProductShowcase
                            products={relevantProducts}
                            heading={showcaseHeading}
                            description={showcaseDescription}
                            language={language}
                          />
                        </div>
                      )
                    }
                  }
                  return null
                })()}

                {post.customContent?.keyPoints && post.customContent.keyPoints.length > 0 && (
                  <div className="key-takeaways-box">
                    <h3 className="key-takeaways-title">
                      🔑 Poin Penting
                    </h3>
                    <ul className="key-takeaways-list">
                      {post.customContent.keyPoints.map((point: string, idx: number) => (
                        <li key={idx} className="key-takeaway-item">
                          <div className="key-takeaway-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="blog-post-cta-v2">
                  <div className="cta-v2-container">
                    <div className="cta-v2-content">
                      <div className="cta-v2-badge">Jasa Survey & Konsultasi Gratis</div>
                      <h2 className="cta-v2-title">
                        {language === 'id' ? 'Siap Mewujudkan Kanopi & Pagar Impian Anda?' : 'Ready to Build Your Dream Canopy & Gate?'}
                      </h2>
                      <p className="cta-v2-subtitle">
                        {language === 'id' 
                          ? 'Hubungi kami sekarang untuk konsultasi desain kustom dan survey lokasi gratis tanpa biaya di area Bekasi dan sekitarnya.' 
                          : 'Contact us now for a custom design consultation and free on-site survey in Bekasi and Jabodetabek areas.'}
                      </p>
                    </div>
                    <div className="cta-v2-actions">
                      <Link to="/products" className="btn-v2-primary">
                        {language === 'id' ? 'Lihat Semua Layanan' : 'Browse All Services'}
                      </Link>
                      <a
                        href="https://wa.me/6285212078467"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-v2-secondary"
                        onClick={() => trackWhatsAppClick('blog_post_cta_whatsapp', {
                          blogPost: post?.title || '',
                        })}
                      >
                        {language === 'id' ? 'Hubungi WhatsApp' : 'Contact WhatsApp'}
                      </a>
                    </div>
                  </div>
                  <div className="cta-v2-decorator" />
                </div>
              </article>

              {otherArticles.length > 0 && (
                <aside className="blog-post-sidebar" aria-labelledby="blog-post-sidebar-title">
                  <div className="blog-post-sidebar-card card">
                    <h2 id="blog-post-sidebar-title" className="blog-post-sidebar-title">Artikel Lainnya</h2>
                    <ul className="blog-post-sidebar-list">
                      {otherArticles.map((article: BlogPost) => (
                        <li key={article.id}>
                          <Link to={`/blog/${article.slug}`} className="blog-post-sidebar-link">
                            <span className="blog-post-sidebar-link-title">{article.title}</span>
                            <span className="blog-post-sidebar-link-category">{article.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature 1: Newsletter Subscription */}
                  <div className="blog-post-sidebar-feature card">
                    <div className="sidebar-feature-icon">
                      <Mail size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{language === 'id' ? 'Berlangganan Tips' : 'Subscribe to Tips'}</h3>
                    <p className="sidebar-feature-description">
                      {language === 'id' 
                        ? 'Dapatkan tips perawatan besi, inspirasi desain kanopi & pagar terbaru langsung ke email Anda.' 
                        : 'Get iron maintenance tips, canopy & fence design inspiration straight to your inbox.'}
                    </p>
                    {!newsletterSubmitted ? (
                      <form onSubmit={handleNewsletterSubmit} className="sidebar-newsletter-form">
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="Email Anda"
                          required
                          className="sidebar-newsletter-input"
                          disabled={newsletterLoading}
                        />
                        <button
                          type="submit"
                          className="sidebar-newsletter-btn"
                          disabled={newsletterLoading || !newsletterEmail.trim()}
                        >
                          {newsletterLoading ? '...' : (language === 'id' ? 'Berlangganan' : 'Subscribe')}
                        </button>
                      </form>
                    ) : (
                      <div className="sidebar-newsletter-success">
                        <p>{language === 'id' ? 'Terima kasih telah berlangganan!' : 'Thanks for subscribing!'}</p>
                      </div>
                    )}
                  </div>

                  {/* Feature 2: Share Article */}
                  <div className="blog-post-sidebar-feature card">
                    <div className="sidebar-feature-icon">
                      <Share2 size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{language === 'id' ? 'Bagikan Artikel' : 'Share Article'}</h3>
                    <p className="sidebar-feature-description">
                      {language === 'id' 
                        ? 'Bagikan artikel bermanfaat ini kepada teman atau keluarga yang sedang merenovasi rumah.' 
                        : 'Share this helpful article with friends or family who are planning a home renovation.'}
                    </p>
                    <div className="share-buttons-grid">
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-facebook"
                        onClick={() => trackWhatsAppClick('blog_post_share_facebook', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Facebook size={18} />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-twitter"
                        onClick={() => trackWhatsAppClick('blog_post_share_twitter', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Twitter size={18} />
                        <span>Twitter</span>
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-linkedin"
                        onClick={() => trackWhatsAppClick('blog_post_share_linkedin', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={shareUrls.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-whatsapp"
                        onClick={() => trackWhatsAppClick('blog_post_share_whatsapp', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className={`share-button share-copy ${linkCopied ? 'copied' : ''}`}
                      >
                        {linkCopied ? <Check size={18} /> : <Copy size={18} />}
                        <span>{linkCopied ? 'Tersalin' : 'Salin Tautan'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Feature 3: Free Consultation CTA */}
                  <div className="blog-post-sidebar-feature card sidebar-consultation">
                    <div className="sidebar-feature-icon">
                      <MessageCircle size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{language === 'id' ? 'Konsultasi Gratis Pak Maman' : 'Free Consultation with Pak Maman'}</h3>
                    <p className="sidebar-feature-description">
                      {language === 'id' 
                        ? 'Hubungi Pak Maman via WhatsApp untuk berkonsultasi mengenai kebutuhan las rumah Anda.' 
                        : 'Contact Pak Maman via WhatsApp to consult about your home steel fabrication needs.'}
                    </p>
                    <a
                      href={`https://wa.me/6285212078467?text=${encodeURIComponent(
                        language === 'id'
                          ? `Halo Bengkel Las Mandiri,\n\nSaya baru membaca artikel Anda: "${post?.title}". Saya ingin berkonsultasi mengenai pemesanan kanopi/pagar rumah.\n\nArtikel: ${window.location.href}\n\nTerima kasih!`
                          : `Hello Bengkel Las Mandiri,\n\nI just read your article: "${post?.title}". I would like to consult about ordering a canopy/gate for my home.\n\nArticle: ${window.location.href}\n\nThank you!`
                      )}`}
                      className="sidebar-consultation-btn"
                      onClick={() => trackWhatsAppClick('blog_post_consultation_sidebar', {
                        blogPost: post?.title || '',
                        blogPostSlug: slug || '',
                        blogPostCategory: post?.category || ''
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={16} />
                      {language === 'id' ? 'Hubungi WhatsApp' : 'Contact WhatsApp'}
                    </a>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>
      </main>

      {shouldShowServiceAreas && <ServiceAreasSection isIndonesian={isIndonesian} language={language} />}

      <Footer isIndonesian={isIndonesian} language={language} />
    </div >
  )
}

export default NaturraBlogPost
