import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import NaturraFooter from '../components/NaturraFooter'
import { getPostsByPage, getTotalPages, getAllBlogPosts } from '../data/blog'
import { generateLanguageSpecificMeta, generateLocalizedUrls, truncateTitle, truncateMetaDescription } from '../utils/seo'
import { getCurrentLanguage, getLinkWithLanguage, type LanguageCode } from '../utils/languageManager'
import './NaturraBlog.css'

const heroImage = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop"

const BLOG_INTRO_TRANSLATIONS: Record<
  LanguageCode,
  {
    mainTitle: string
    introParagraph: string
    bullets: {
      title: string
      description: string
    }[]
  }
> = {
  id: {
    mainTitle: 'Tips & Panduan Bengkel Las: Solusi Konstruksi dari Mandiri Steel',
    introParagraph:
      'Temukan wawasan mendalam tentang dunia pengelasan dan konstruksi besi di Bekasi. Artikel kami disusun berdasarkan pengalaman lebih dari 25 tahun dalam mengerjakan kanopi, pagar, dan konstruksi baja berkualitas.',
    bullets: [
      {
        title: 'Tips Perawatan Besi',
        description:
          'Cara merawat pagar dan kanopi agar tetap kokoh dan bebas karat selama bertahun-tahun'
      },
      {
        title: 'Panduan Desain Minimalis',
        description:
          'Inspirasi model kanopi dan pagar terbaru yang cocok untuk rumah minimalis modern di Bekasi'
      },
      {
        title: 'Mengenal Material SNI',
        description:
          'Informasi tentang jenis-jenis besi hollow, atap UPVC Alderon, dan kualitas kawat las standar industri'
      },
      {
        title: 'Estimasi Biaya Proyek',
        description:
          'Cara menghitung budget pembuatan kanopi, pagar, dan konstruksi baja sesuai spesifikasi'
      }
    ]
  },
  en: {
    mainTitle: 'Welding & Steel Tips: Construction Insights from Mandiri Steel',
    introParagraph:
      'Discover in-depth insights into the world of welding and iron construction in Bekasi. Our articles are based on over 25 years of experience in crafting quality canopies, fences, and steel structures.',
    bullets: [
      {
        title: 'Iron Maintenance Tips',
        description:
          'How to maintain your fences and canopies to keep them sturdy and rust-free for years'
      },
      {
        title: 'Minimalist Design Guides',
        description:
          'Latest canopy and fence design inspiration suitable for modern minimalist homes in Bekasi'
      },
      {
        title: 'Knowing SNI Materials',
        description:
          'Information on types of hollow iron, Alderon UPVC roofs, and industrial standard welding quality'
      },
      {
        title: 'Project Cost Estimation',
        description:
          'How to calculate the budget for canopy, fence, and steel construction based on specifications'
      }
    ]
  },
  ar: {
    mainTitle: 'نصائح وأدلة ورشة اللحام: حلول البناء من Mandiri Steel',
    introParagraph:
      'اكتشف رؤى متعمقة حول عالم اللحام والمنشآت الحديدية في بيكاسي. مقالاتنا مبنية على خبرة تزيد عن 25 عاماً في تنفيذ المظلات والأسوار والمنشآت الفولاذية عالية الجودة.',
    bullets: [
      {
        title: 'نصائح صيانة الحديد',
        description:
          'كيفية الحفاظ على الأسوار والمظلات لتبقى متينة وخالية من الصدأ لسنوات'
      },
      {
        title: 'أدلة التصميم البسيط',
        description:
          'إلهام لأحدث موديلات المظلات والأسوار المناسبة للمنازل الحديثة في بيكاسي'
      },
      {
        title: 'معرفة مواد SNI',
        description:
          'معلومات حول أنواع الحديد المجوف، وأسقف Alderon UPVC، وجودة اللحام الصناعي'
      },
      {
        title: 'تقدير تكلفة المشروع',
        description:
          'كيفية حساب ميزانية تنفيذ المظلات والأسوار والمنشآت الفولاذية'
      }
    ]
  },
  zh: {
    mainTitle: '焊接与钢结构贴士：Mandiri Steel 的建筑见解',
    introParagraph:
      '深入了解勿加泗的焊接和铁艺建筑世界。我们的文章基于超过 25 年制作高品质雨棚、围栏和钢结构的经验。',
    bullets: [
      {
        title: '铁艺维护贴士',
        description:
          '如何维护您的围栏和雨棚，使其多年保持坚固且不生锈'
      },
      {
        title: '简约设计指南',
        description:
          '适用于勿加泗现代简约家居的最新雨棚和围栏设计灵感'
      },
      {
        title: '了解 SNI 材料',
        description:
          '关于方管铁、Alderon UPVC 屋顶和工业标准焊接质量的信息'
      },
      {
        title: '项目成本估算',
        description:
          '如何根据规格计算雨棚、围栏和钢结构的预算'
      }
    ]
  },
  ja: {
    mainTitle: '溶接と鉄骨のヒント：Mandiri Steel からの建築の洞察',
    introParagraph:
      'ブカシにおける溶接と鉄骨構造の世界についての深い洞察を発見してください。私たちの記事は、高品質なキャノピー、フェンス、鉄骨構造の製作における 25 年以上の経験に基づいています。',
    bullets: [
      {
        title: '鉄のメンテナンスのヒント',
        description:
          'フェンスやキャノピーを長年頑丈で錆びない状態に保つためのメンテナンス方法'
      },
      {
        title: 'ミニマリストデザインガイド',
        description:
          'ブカシのモダンなミニマリスト住宅に適した最新のキャノピーとフェンスのデザイン案'
      },
      {
        title: 'SNI 材料について',
        description:
          '角パイプ、Alderon UPVC 屋根、工業標準の溶接品質に関する情報'
      },
      {
        title: 'プロジェクトコストの見積もり',
        description:
          '仕様に基づいたキャノピー、フェンス、鉄骨構造の予算計算方法'
      }
    ]
  },
  es: {
    mainTitle: 'Consejos de Soldadura y Acero: Perspectivas de Mandiri Steel',
    introParagraph:
      'Descubra perspectivas profundas sobre el mundo de la soldadura y la construcción en hierro en Bekasi. Nuestros artículos se basan en más de 25 años de experiencia fabricando toldos, vallas y estructuras de acero de calidad.',
    bullets: [
      {
        title: 'Consejos de Mantenimiento de Hierro',
        description:
          'Cómo mantener sus vallas y toldos para que sigan siendo resistentes y libres de óxido por años'
      },
      {
        title: 'Guías de Diseño Minimalista',
        description:
          'Inspiración para los últimos diseños de toldos y vallas para casas modernas en Bekasi'
      },
      {
        title: 'Conociendo Materiales SNI',
        description:
          'Información sobre tipos de hierro hueco, techos Alderon UPVC y calidad de soldadura industrial'
      },
      {
        title: 'Estimación de Costos de Proyecto',
        description:
          'Cómo calcular el presupuesto para toldos, vallas y estructuras de acero según especificaciones'
      }
    ]
  },
  fr: {
    mainTitle: 'Conseils en Soudure et Acier : Expertise de Mandiri Steel',
    introParagraph:
      'Découvrez des analyses approfondies sur l\'univers de la soudure et de la construction métallique à Bekasi. Nos articles s\'appuient sur plus de 25 ans d\'expérience dans la réalisation d\'auvents, de clôtures et de structures en acier.',
    bullets: [
      {
        title: 'Conseils d\'Entretien du Fer',
        description:
          'Comment entretenir vos clôtures et auvents pour qu\'ils restent robustes et sans rouille pendant des années'
      },
      {
        title: 'Guides de Design Minimaliste',
        description:
          'Inspiration pour les derniers modèles d\'auvents et de clôtures adaptés aux maisons modernes à Bekasi'
      },
      {
        title: 'Connaître les Matériaux SNI',
        description:
          'Informations sur les types de fer creux, les toitures Alderon UPVC et la qualité de soudure industrielle'
      },
      {
        title: 'Estimation des Coûts de Projet',
        description:
          'Comment calculer le budget pour un auvent, une clôture ou une structure en acier selon les spécifications'
      }
    ]
  },
  ko: {
    mainTitle: '용접 및 철강 팁: Mandiri Steel의 건축 인사이트',
    introParagraph:
      '브카시의 용접 및 철제 구조물 세계에 대한 심층적인 인사이트를 발견하세요. 당사의 아티클은 고품질 캐노피, 펜스, 철골 구조물을 제작한 25년 이상의 경험을 바탕으로 작성되었습니다.',
    bullets: [
      {
        title: '철제 유지보수 팁',
        description:
          '펜스와 캐노피를 수년간 튼튼하고 녹 없이 유지하는 방법'
      },
      {
        title: '미니멀 디자인 가이드',
        description:
          '브카시의 현대적인 미니멀 하우스에 적합한 최신 캐노피 및 펜스 디자인 영감'
      },
      {
        title: 'SNI 자재 알기',
        description:
          '사각 파이프 철제, Alderon UPVC 지붕 및 산업 표준 용접 품질에 대한 정보'
      },
      {
        title: '프로젝트 비용 산정',
        description:
          '사양에 따른 캐노피, 펜스 및 철골 구조물의 예산 계산 방법'
      }
    ]
  }
}

const BLOG_PAGINATION_TRANSLATIONS: Record<
  LanguageCode,
  {
    prev: string
    next: string
    numberLocale: string
  }
> = {
  id: { prev: 'Sebelumnya', next: 'Selanjutnya', numberLocale: 'id-ID' },
  en: { prev: 'Prev', next: 'Next', numberLocale: 'en-US' },
  ar: { prev: 'السابق', next: 'التالي', numberLocale: 'ar-EG' },
  zh: { prev: '上一页', next: '下一页', numberLocale: 'zh-CN' },
  ja: { prev: '前へ', next: '次へ', numberLocale: 'ja-JP' },
  es: { prev: 'Anterior', next: 'Siguiente', numberLocale: 'es-ES' },
  fr: { prev: 'Précédent', next: 'Suivant', numberLocale: 'fr-FR' },
  ko: { prev: '이전', next: '다음', numberLocale: 'ko-KR' }
}

const NaturraBlog: React.FC = () => {
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

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)
  const intro = BLOG_INTRO_TRANSLATIONS[language] ?? BLOG_INTRO_TRANSLATIONS.id
  const paginationTexts = BLOG_PAGINATION_TRANSLATIONS[language] ?? BLOG_PAGINATION_TRANSLATIONS.id
  const formatPageNumber = (value: number) =>
    new Intl.NumberFormat(paginationTexts.numberLocale).format(value)

  return (
    <div className="blog-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{truncateTitle('Blog Bengkel Las Bekasi & Tips Konstruksi Besi - Mandiri Steel')}</title>
        <meta name="description" content={truncateMetaDescription('Panduan lengkap konstruksi besi, kanopi, dan pagar untuk wilayah Bekasi. Tips memilih material, inspirasi desain minimalis, dan estimasi biaya dari Bengkel Las Mandiri.')} />
        <meta name="keywords" content="blog bengkel las bekasi, tips las kanopi, inspirasi pagar minimalis, jasa las cikarang, harga kanopi alderon bekasi, mandiri steel blog, material besi sni, konstruksi baja wf bekasi, cara merawat pagar besi" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href="https://lasbekasi.com/blog" />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`blog-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        {prevUrl && <link rel="prev" href={`https://lasbekasi.com${prevUrl}`} />}
        {nextUrl && <link rel="next" href={`https://lasbekasi.com${nextUrl}`} />}

        {/* AI Search Optimization: Clear article purpose */}
        <meta property="og:title" content="Blog Bengkel Las Bekasi - Tips & Inspirasi Konstruksi Besi" />
        <meta property="og:description" content="Kumpulan artikel seputar dunia pengelasan: tips perawatan besi, inspirasi desain kanopi & pagar, serta informasi material konstruksi dari Bengkel Las Mandiri Bekasi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
      </Helmet>

      <NaturraHeader />

      {/* Hero Section */}
      <section className="naturra-blog-hero">
        <div className="naturra-blog-hero-image">
          <img
            src={heroImage}
            alt="Blog Bengkel Las Bekasi & Tips Konstruksi Besi - Mandiri Steel"
            title="Blog Mandiri Steel - Panduan Lengkap Jasa Las"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="blog-hero"
            data-category="blog"
          />
          <div className="naturra-blog-hero-overlay"></div>
        </div>
        <div className="naturra-blog-hero-content">
          <h1 className="naturra-blog-hero-title">Blog & Tips Las</h1>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="naturra-blog-content-section">
        <div className="blog-container">
          {/* AI Search Optimized: Clear intent and value proposition */}
          <h2 className="naturra-blog-main-title">{intro.mainTitle}</h2>

          <div className="naturra-blog-intro">
            <div className="naturra-blog-intro-bg">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200" alt="Welding Background" loading="lazy" />
              <div className="naturra-blog-intro-overlay"></div>
            </div>
            <div className="naturra-blog-intro-content">
              <p className="naturra-blog-intro-text">
                {intro.introParagraph}
              </p>
              <ul className="naturra-blog-intro-list">
                {intro.bullets.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="naturra-blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="naturra-blog-card">
                <Link to={`/blog/${post.slug}`} className="naturra-blog-card-link">
                  <div className="naturra-blog-card-image">
                    <img
                      src={post.image}
                      alt={`${post.title} - ${post.category} Welding Blog Mandiri Steel`}
                      title={`${post.title} - ${post.category} Welding Article`}
                      loading="lazy"
                      width="400"
                      height="250"
                      itemProp="image"
                      data-image-type="blog-post"
                      data-post-slug={post.slug}
                      data-category={post.category}
                    />
                    <div className="naturra-blog-card-badge">Mandiri Steel</div>
                  </div>
                  <div className="naturra-blog-card-content">
                    <span className="naturra-blog-card-category">{post.category.toUpperCase()}</span>
                    <h3 className="naturra-blog-card-title">{post.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination - Compact Version */}
          {totalPages > 1 && (
            <nav className="naturra-blog-pagination" aria-label="Blog pagination">
              {currentPage > 1 && (
                <Link
                  to={buildPageUrl(currentPage - 1)}
                  className="naturra-pagination-btn naturra-pagination-prev"
                  aria-label="Previous page"
                >
                  {paginationTexts.prev}
                </Link>
              )}

              {/* Smart Pagination with Ellipsis */}
              {(() => {
                const pages: (number | string)[] = []
                const showEllipsis = totalPages > 7

                if (!showEllipsis) {
                  // Show all pages if 7 or less
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i)
                  }
                } else {
                  // Always show first page
                  pages.push(1)

                  if (currentPage <= 3) {
                    // Near the beginning
                    pages.push(2, 3, 4, 5, '...', totalPages)
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    pages.push('...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
                  } else {
                    // In the middle
                    pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
                  }
                }

                return pages.map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="naturra-pagination-ellipsis" aria-hidden="true">
                        ...
                      </span>
                    )
                  }

                  const pageNumber = page as number
                  return (
                    <Link
                      key={pageNumber}
                      to={buildPageUrl(pageNumber)}
                      className={`naturra-pagination-btn naturra-pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                      aria-current={currentPage === pageNumber ? 'page' : undefined}
                    >
                      {formatPageNumber(pageNumber)}
                    </Link>
                  )
                })
              })()}

              {currentPage < totalPages && (
                <Link
                  to={buildPageUrl(currentPage + 1)}
                  className="naturra-pagination-btn naturra-pagination-next"
                  aria-label="Next page"
                >
                  {paginationTexts.next}
                </Link>
              )}
            </nav>
          )}

          {/* Complete Blog Archive - Collapsible for SEO */}
          <div className="blog-archive-section">
            <button
              className="blog-archive-toggle"
              onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
              aria-expanded={isArchiveExpanded}
            >
              <span>
                {language === 'id' ? "Arsip Blog Lengkap (Semua Artikel)" :
                  language === 'ar' ? "أرشيف المدونة الكامل (جميع المقالات)" :
                    language === 'zh' ? "完整博客存档（所有文章）" :
                      language === 'ja' ? "完全なブログアーカイブ（全記事）" :
                        language === 'es' ? "Archivo Completo del Blog (Todos los Artículos)" :
                          language === 'fr' ? "Archives Complètes du Blog (Tous les Articles)" :
                            language === 'ko' ? "완전한 블로그 아카이브 (모든 기사)" :
                              "Complete Blog Archive (All Articles)"}
              </span>
              {isArchiveExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            <nav
              className={`blog-archive-links ${isArchiveExpanded ? 'expanded' : 'collapsed'}`}
              aria-label="All blog posts"
              aria-hidden={!isArchiveExpanded}
            >
              {allBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={getLinkWithLanguage(`/blog/${post.slug}`, language)}
                  className="blog-archive-link"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>


      <NaturraFooter />
    </div>
  )
}

export default NaturraBlog
