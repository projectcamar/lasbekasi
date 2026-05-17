import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import { getPostsByPage, getTotalPages, getAllBlogPosts } from '../data/blog'
import { generateLanguageSpecificMeta, generateLocalizedUrls, truncateTitle, truncateMetaDescription } from '../utils/seo'
import { getCurrentLanguage, getLinkWithLanguage, type LanguageCode } from '../utils/languageManager'
import { BLOG_INTRO_TRANSLATIONS, BLOG_PAGINATION_TRANSLATIONS } from '../utils/blogTranslations'
import './Blog.css'

const heroImage = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920"

const Blog: React.FC = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const [language, setLanguage] = useState<LanguageCode>(() => {
    return getCurrentLanguage(location.pathname, location.search)
  })

  const [isArchiveExpanded, setIsArchiveExpanded] = useState(false)

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    if (currentLang !== language) {
      setLanguage(currentLang)
    }
  }, [location.pathname, location.search, language])

  const isIndonesian = language === 'id'
  const postsPerPage = 8
  const rawPage = Number.parseInt(searchParams.get('page') || '1', 10)
  const totalPages = getTotalPages(postsPerPage)
  const currentPage = Number.isNaN(rawPage) ? 1 : Math.min(Math.max(rawPage, 1), totalPages || 1)
  const posts = getPostsByPage(currentPage, postsPerPage)
  const allBlogPosts = getAllBlogPosts()

  const buildPageUrl = (page: number) => (page <= 1 ? '/blog' : `/blog?page=${page}`)
  const prevUrl = currentPage > 1 ? buildPageUrl(currentPage - 1) : null
  const nextUrl = currentPage < totalPages ? buildPageUrl(currentPage + 1) : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)
  const intro = BLOG_INTRO_TRANSLATIONS[language] ?? BLOG_INTRO_TRANSLATIONS.en
  const paginationTexts = BLOG_PAGINATION_TRANSLATIONS[language] ?? BLOG_PAGINATION_TRANSLATIONS.en
  const formatPageNumber = (value: number) =>
    new Intl.NumberFormat(paginationTexts.numberLocale).format(value)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'id' ? "Beranda" : "Home",
        "item": "https://lasbekasi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://lasbekasi.com/blog"
      }
    ]
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Mandiri Steel Blog",
    "description": "Tips Konstruksi & Inspirasi Desain Las Bekasi",
    "url": "https://lasbekasi.com/blog",
    "publisher": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bengkel Las Mandiri",
      "url": "https://lasbekasi.com/"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author || "Bapak Maman Toha"
      },
      "url": `https://lasbekasi.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="mandiri-blog">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{truncateTitle('Mandiri Steel Blog: Tips Konstruksi & Inspirasi Desain Las Bekasi')}</title>
        <meta name="description" content={truncateMetaDescription('Dapatkan inspirasi desain kanopi, pagar minimalis, dan tips perawatan konstruksi besi dari ahli las berpengalaman 25 tahun di Bekasi.')} />
        <meta name="keywords" content="blog bengkel las bekasi, tips kanopi tahan lama, inspirasi pagar minimalis, konstruksi baja bekasi, bengkel las maman toha" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`blog-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        {prevUrl && <link rel="prev" href={localizedUrls.canonical + `?page=${currentPage - 1}`} />}
        {nextUrl && <link rel="next" href={localizedUrls.canonical + `?page=${currentPage + 1}`} />}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      {/* Hero Section */}
      <section className="mandiri-blog__hero">
        <div className="mandiri-blog__hero-image">
          <img
            src={heroImage}
            alt="Mandiri Steel Construction Blog"
            loading="eager"
            fetchPriority="high"
          />
          <div className="mandiri-blog__hero-overlay"></div>
        </div>
        <div className="mandiri-blog__hero-content">
          <h1 className="mandiri-blog__hero-title">Blog & Inspirasi</h1>
          <p className="mandiri-blog__hero-subtitle">Wawasan Profesional dari Workshop Las Mandiri Bekasi</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mandiri-blog__intro">
        <div className="mandiri-blog__container">
          <div className="mandiri-blog__intro-grid">
            <div className="mandiri-blog__intro-text">
              <h2 className="mandiri-blog__intro-title">{intro.mainTitle}</h2>
              <p className="mandiri-blog__intro-paragraph">{intro.introParagraph}</p>
            </div>
            <div className="mandiri-blog__intro-bullets">
              {intro.bullets.map((bullet: any, idx: number) => (
                <div key={idx} className="mandiri-blog__bullet">
                  <div className="mandiri-blog__bullet-dot"></div>
                  <div className="mandiri-blog__bullet-content">
                    <h4 className="mandiri-blog__bullet-title">{bullet.title}</h4>
                    <p className="mandiri-blog__bullet-desc">{bullet.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="mandiri-blog__feed">
        <div className="mandiri-blog__container">
          <div className="mandiri-blog__grid">
            {posts.map((post) => (
              <article key={post.id} className="mandiri-blog__card" itemScope itemType="https://schema.org/BlogPosting">
                <Link to={getLinkWithLanguage(`/blog/${post.slug}`, language)} className="mandiri-blog__card-image-link">
                  <div className="mandiri-blog__card-image">
                    <img src={post.image} alt={post.title} loading="lazy" itemProp="image" />
                    <div className="mandiri-blog__card-category">{post.category}</div>
                  </div>
                </Link>
                <div className="mandiri-blog__card-body">
                  <div className="mandiri-blog__card-meta">
                    <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
                  </div>
                  <h3 className="mandiri-blog__card-title" itemProp="headline">
                    <Link to={getLinkWithLanguage(`/blog/${post.slug}`, language)}>{post.title}</Link>
                  </h3>
                  <p className="mandiri-blog__card-excerpt" itemProp="description">{post.excerpt}</p>
                  <Link to={getLinkWithLanguage(`/blog/${post.slug}`, language)} className="mandiri-blog__card-link">
                    Baca Selengkapnya
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mandiri-blog__pagination">
              {prevUrl ? (
                <Link to={prevUrl} className="mandiri-blog__pagination-btn">
                  {paginationTexts.prev}
                </Link>
              ) : (
                <span className="mandiri-blog__pagination-btn disabled">{paginationTexts.prev}</span>
              )}

              <div className="mandiri-blog__pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <Link
                    key={num}
                    to={buildPageUrl(num)}
                    className={`mandiri-blog__pagination-num ${currentPage === num ? 'active' : ''}`}
                  >
                    {formatPageNumber(num)}
                  </Link>
                ))}
              </div>

              {nextUrl ? (
                <Link to={nextUrl} className="mandiri-blog__pagination-btn">
                  {paginationTexts.next}
                </Link>
              ) : (
                <span className="mandiri-blog__pagination-btn disabled">{paginationTexts.next}</span>
              )}
            </div>
          )}

          {/* Archive Toggle */}
          <div className="mandiri-blog__archive">
            <button
              className="mandiri-blog__archive-toggle"
              onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
              aria-expanded={isArchiveExpanded}
            >
              <h3 className="mandiri-blog__archive-title">{paginationTexts.archiveTitle}</h3>
              {isArchiveExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isArchiveExpanded && (
              <div className="mandiri-blog__archive-grid">
                {allBlogPosts.map((post) => (
                  <Link
                    key={`archive-${post.id}`}
                    to={getLinkWithLanguage(`/blog/${post.slug}`, language)}
                    className="mandiri-blog__archive-item"
                  >
                    <span className="mandiri-blog__archive-date">{post.date}</span>
                    <span className="mandiri-blog__archive-link-title">{post.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default Blog
