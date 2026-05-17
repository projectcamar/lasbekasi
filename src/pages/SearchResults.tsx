import { useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import NaturraHeader from '../components/NaturraHeader'
import CurrencyHighlight from '../components/CurrencyHighlight'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { getProductName } from '../data/productDescriptions'
import { getCurrentLanguage, getStoredLanguage, detectLanguageFromIP, type LanguageCode } from '../utils/languageManager'
import './SearchResults.css'
import '../components/DualLanguage.css'

const SUPPORTED_LANGUAGES: LanguageCode[] = ['id', 'en', 'ar', 'zh', 'ja', 'es', 'fr', 'ko']

const SEARCH_TRANSLATIONS: Record<
  LanguageCode,
  {
    loading: string
    headingWithQuery: (query: string) => string
    headingWithoutQuery: string
    subtitle: string
    languageAdjusting: string
    resultsCount: (count: number) => string
    noResultsWithQuery: (query: string) => string
    noResultsWithoutQuery: string
    sortDefault: string
    sortPriceLow: string
    sortPriceHigh: string
    home: string
    pageTitle: (query?: string) => string
    metaDescription: (query: string, hasQuery: boolean) => string
  }
> = {
  id: {
    loading: 'Memuat...',
    headingWithQuery: (query) => `Hasil Pencarian untuk "${query}"`,
    headingWithoutQuery: 'Hasil Pencarian',
    subtitle: 'Cari dan temukan layanan las, kanopi, pagar, dan konstruksi besi kustom dari Mandiri Steel Bekasi.',
    languageAdjusting: 'Menyesuaikan preferensi bahasa…',
    resultsCount: (count) => `${count} hasil ditemukan`,
    noResultsWithQuery: (query) => `Tidak ada layanan ditemukan untuk "${query}". Coba kata kunci lain.`,
    noResultsWithoutQuery: 'Tidak ada produk atau layanan ditemukan.',
    sortDefault: 'Urutkan: Relevansi',
    sortPriceLow: 'Harga: Rendah ke Tinggi',
    sortPriceHigh: 'Harga: Tinggi ke Rendah',
    home: 'Beranda',
    pageTitle: (query) => (query ? `Pencarian: ${query} - Mandiri Steel` : 'Pencarian - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `Hasil pencarian untuk "${query}" - Mandiri Steel` : 'Cari layanan pengelasan & fabrikasi baja berkualitas di Mandiri Steel.'
  },
  en: {
    loading: 'Loading...',
    headingWithQuery: (query) => `Search Results for "${query}"`,
    headingWithoutQuery: 'Search Results',
    subtitle: 'Search and find custom welding, canopy, gate, and structural steel fabrication services by Mandiri Steel Bekasi.',
    languageAdjusting: 'Adjusting language preference…',
    resultsCount: (count) => `${count} results found`,
    noResultsWithQuery: (query) => `No services found for "${query}". Try a different search term.`,
    noResultsWithoutQuery: 'No services found.',
    sortDefault: 'Sort by: Relevance',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    home: 'Home',
    pageTitle: (query) => (query ? `Search: ${query} - Mandiri Steel` : 'Search - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `Search results for "${query}" - Mandiri Steel` : 'Search premium welding and custom steel fabrication services by Mandiri Steel.'
  },
  ar: {
    loading: 'جارٍ التحميل...',
    headingWithQuery: (query) => `نتائج البحث عن "${query}"`,
    headingWithoutQuery: 'نتائج البحث',
    subtitle: 'ابحث واعثر على خدمات اللحام المخصصة، المظلات، البوابات، وتصنيع الفولاذ الهيكلي من مانديري ستيل.',
    languageAdjusting: 'جارٍ ضبط تفضيل اللغة…',
    resultsCount: (count) => `${count} نتيجة`,
    noResultsWithQuery: (query) => `لم يتم العثور على خدمات لـ "${query}". جرّب مصطلحاً آخر.`,
    noResultsWithoutQuery: 'لم يتم العثور على خدمات.',
    sortDefault: 'ترتيب: الصلة',
    sortPriceLow: 'السعر: من الأقل إلى الأعلى',
    sortPriceHigh: 'السعر: من الأعلى إلى الأقل',
    home: 'الصفحة الرئيسية',
    pageTitle: (query) => (query ? `بحث: ${query} - مانديري ستيل` : 'بحث - مانديري ستيل'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `نتائج البحث عن ${query} - مانديري ستيل` : 'ابحث عن خدمات اللحام الممتازة وتصنيع الفولاذ المخصص من مانديري ستيل.'
  },
  zh: {
    loading: '加载中...',
    headingWithQuery: (query) => `搜索 “${query}” 的结果`,
    headingWithoutQuery: '搜索结果',
    subtitle: '搜索并查找勿加泗 Mandiri Steel 提供的定制焊接、雨棚、大门和钢结构制造服务。',
    languageAdjusting: '正在调整语言偏好…',
    resultsCount: (count) => `共找到 ${count} 个结果`,
    noResultsWithQuery: (query) => `未找到与 “${query}” 匹配的定制服务。请尝试其他关键词。`,
    noResultsWithoutQuery: '未找到定制服务。',
    sortDefault: '排序：相关度',
    sortPriceLow: '价格：从低到高',
    sortPriceHigh: '价格：从高到低',
    home: '首页',
    pageTitle: (query) => (query ? `搜索: ${query} - Mandiri Steel` : '搜索 - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `关于 ${query} 的搜索结果 - Mandiri Steel` : '搜索勿加泗 Mandiri Steel 提供的定制焊接与钢结构制造服务。'
  },
  ja: {
    loading: '読み込み中...',
    headingWithQuery: (query) => `「${query}」の検索結果`,
    headingWithoutQuery: '検索結果',
    subtitle: 'Bekasi の Mandiri Steel が提供するカスタム溶接、キャノピー、ゲート、鉄骨構造物製造サービスを検索して見つけましょう。',
    languageAdjusting: '言語設定を調整しています…',
    resultsCount: (count) => `${count} 件が見つかりました`,
    noResultsWithQuery: (query) => `「${query}」に一致するサービスは見つかりませんでした。別のキーワードでお試しください。`,
    noResultsWithoutQuery: 'サービスが見つかりません。',
    sortDefault: '並び替え: 関連度',
    sortPriceLow: '価格: 低い順',
    sortPriceHigh: '価格: 高い順',
    home: 'ホーム',
    pageTitle: (query) => (query ? `検索: ${query} - Mandiri Steel` : '検索 - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `${query} の検索結果 - Mandiri Steel` : 'Bekasi の Mandiri Steel が提供するプレミアム溶接およびカスタム鋼構造物製造サービス。'
  },
  es: {
    loading: 'Cargando...',
    headingWithQuery: (query) => `Resultados de búsqueda para "${query}"`,
    headingWithoutQuery: 'Resultados de búsqueda',
    subtitle: 'Busque y encuentre servicios de soldadura personalizada, doseles, portones y fabricación de acero estructural de Mandiri Steel Bekasi.',
    languageAdjusting: 'Ajustando la preferencia de idioma…',
    resultsCount: (count) => `${count} resultados encontrados`,
    noResultsWithQuery: (query) => `No se encontraron servicios para "${query}". Intenta con otro término.`,
    noResultsWithoutQuery: 'No se encontraron servicios.',
    sortDefault: 'Ordenar por: Relevancia',
    sortPriceLow: 'Precio: de menor a mayor',
    sortPriceHigh: 'Precio: de mayor a menor',
    home: 'Inicio',
    pageTitle: (query) => (query ? `Búsqueda: ${query} - Mandiri Steel` : 'Búsqueda - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `Resultados de búsqueda para ${query} - Mandiri Steel` : 'Busque servicios premium de soldadura y fabricación de acero de Mandiri Steel.'
  },
  fr: {
    loading: 'Chargement...',
    headingWithQuery: (query) => `Résultats de recherche pour « ${query} »`,
    headingWithoutQuery: 'Résultats de recherche',
    subtitle: 'Recherchez et trouvez des services de soudage sur mesure, d\'auvents, de portails et de fabrication d\'acier de Mandiri Steel Bekasi.',
    languageAdjusting: 'Ajustement de la langue…',
    resultsCount: (count) => `${count} résultats trouvés`,
    noResultsWithQuery: (query) => `Aucun service trouvé pour « ${query} ». Essayez un autre terme de recherche.`,
    noResultsWithoutQuery: 'Aucun service trouvé.',
    sortDefault: 'Trier par : Pertinence',
    sortPriceLow: 'Prix : du plus bas au plus élevé',
    sortPriceHigh: 'Prix : du plus élevé au plus bas',
    home: 'Accueil',
    pageTitle: (query) => (query ? `Recherche : ${query} - Mandiri Steel` : 'Recherche - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `Résultats de recherche pour ${query} - Mandiri Steel` : 'Recherchez des services de soudure personnalisés et de fabrication d\'acier de Mandiri Steel.'
  },
  ko: {
    loading: '로딩 중...',
    headingWithQuery: (query) => `"${query}" 검색 결과`,
    headingWithoutQuery: '검색 결과',
    subtitle: 'Bekasi의 Mandiri Steel이 제공하는 맞춤형 용접, 캐노피, 대문 및 철골 구조물 제작 서비스를 검색해 보세요.',
    languageAdjusting: '언어 환경을 조정하는 중…',
    resultsCount: (count) => `${count}개의 결과`,
    noResultsWithQuery: (query) => `"${query}"에 대한 서비스가 없습니다. 다른 검색어를 시도해 주세요.`,
    noResultsWithoutQuery: '서비스를 찾을 수 없습니다.',
    sortDefault: '정렬: 관련도',
    sortPriceLow: '가격: 낮은 순',
    sortPriceHigh: '가격: 높은 순',
    home: '홈',
    pageTitle: (query) => (query ? `검색: ${query} - Mandiri Steel` : '검색 - Mandiri Steel'),
    metaDescription: (query, hasQuery) =>
      hasQuery ? `${query} 검색 결과 - Mandiri Steel` : 'Bekasi Mandiri Steel의 프리미엄 맞춤형 용접 및 철강 제조 서비스 검색 결과.'
  }
}

const OG_LOCALES = ['id_ID', 'en_US', 'ar_SA', 'zh_CN', 'ja_JP', 'es_ES', 'fr_FR', 'ko_KR'] as const

const resolveLanguage = (value: string | null): LanguageCode =>
  value && SUPPORTED_LANGUAGES.includes(value as LanguageCode) ? (value as LanguageCode) : 'id'

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  slug: string
}

interface ScoredProduct extends Product {
  score: number
  tokenMatches: number
}

const allProducts: Product[] = ALL_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.categories.join(', '),
  price: p.price,
  image: p.image,
  slug: p.slug
}))

// Language to currency mapping (only non-IDR highlight currencies)
const LANGUAGE_CURRENCY_MAP: { [key in LanguageCode]: 'KRW' | 'JPY' | 'CNY' | 'SAR' | 'EUR' | 'USD' | null } = {
  'ko': 'KRW',
  'ja': 'JPY',
  'zh': 'CNY',
  'ar': 'SAR',
  'es': 'EUR',
  'fr': 'EUR',
  'en': 'USD', // English highlights USD
  'id': null   // Indonesian highlights IDR (original price)
}

function SearchResults() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q') || ''
  const langParam = searchParams.get('lang')
  const [language, setLanguage] = useState<LanguageCode>(resolveLanguage(langParam))
  const [sortBy, setSortBy] = useState('default')
  const [usdPrices, setUsdPrices] = useState<Record<number, string>>({})
  const [highlightedPrices, setHighlightedPrices] = useState<Record<number, string>>({})
  const [isDetectingLanguage, setIsDetectingLanguage] = useState(true)

  // Language detection - instant, no async needed!
  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    setLanguage(currentLang)
    setIsDetectingLanguage(false)
  }, [location.pathname, location.search])

  // IP detection for first visit (only if no stored preference)
  useEffect(() => {
    const stored = getStoredLanguage()
    const urlLang = getCurrentLanguage(location.pathname, location.search)

    if (stored || urlLang !== 'en') {
      return
    }

    const detectIP = async () => {
      const ipLang = await detectLanguageFromIP()
      if (ipLang && !stored) {
        setLanguage(ipLang)
      }
    }

    detectIP()
  }, [])

  const isIndonesian = language === 'id'
  const uiTranslations = SEARCH_TRANSLATIONS[language] ?? SEARCH_TRANSLATIONS.en

  useEffect(() => {
    let isMounted = true

    const convertPrices = async () => {
      const usdPriceMap: Record<number, string> = {}
      const highlightedPriceMap: Record<number, string> = {}

      const targetCurrency = LANGUAGE_CURRENCY_MAP[language]

      for (const product of allProducts) {
        try {
          // Always convert to USD
          const usdPrice = await convertIDRToUSD(product.price)

          let primaryPrice = usdPrice
          let secondaryUsdLabel = usdPrice

          if (language === 'id') {
            // Indonesian: highlight IDR, show USD as secondary
            primaryPrice = product.price
            secondaryUsdLabel = usdPrice
          } else if (language === 'en') {
            // English: highlight USD, show IDR as secondary
            primaryPrice = usdPrice
            secondaryUsdLabel = product.price
          } else if (targetCurrency && targetCurrency !== 'USD') {
            // Other languages with local highlight currency
            const highlightedPrice = await convertIDRToCurrency(product.price, targetCurrency)
            primaryPrice = highlightedPrice
            secondaryUsdLabel = usdPrice
          }

          usdPriceMap[product.id] = secondaryUsdLabel
          highlightedPriceMap[product.id] = primaryPrice
        } catch (error) {
          console.error(`Failed to convert price for product ${product.slug}:`, error)
        }
      }

      if (isMounted) {
        setUsdPrices(usdPriceMap)
        setHighlightedPrices(highlightedPriceMap)
      }
    }

    convertPrices()

    return () => {
      isMounted = false
    }
  }, [language])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const hasQuery = normalizedQuery.length > 0

  const queryTokens = useMemo(() => {
    return hasQuery
      ? Array.from(
        new Set(
          normalizedQuery
            .split(/[\s\-_,.]+/)
            .map(token => token.trim())
            .filter(token => token.length > 1)
        )
      )
      : []
  }, [hasQuery, normalizedQuery])

  const matchedProducts = useMemo<ScoredProduct[]>(() => {
    if (!hasQuery) {
      return allProducts
        .map(product => ({
          ...product,
          score: 0,
          tokenMatches: 0
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    }

    return allProducts
      .map(product => {
        const nameLower = product.name.toLowerCase()
        const categoryLower = product.category.toLowerCase()
        const combinedText = `${nameLower} ${categoryLower}`

        const matched = queryTokens.filter(token => combinedText.includes(token))
        const tokenMatches = matched.length
        const containsAllTokens = queryTokens.length > 0 && tokenMatches === queryTokens.length
        const nameTokenMatches = matched.filter(token => nameLower.includes(token)).length
        const categoryTokenMatches = matched.filter(token => categoryLower.includes(token)).length
        const exactNameMatch = nameLower === normalizedQuery
        const phraseInName = nameLower.includes(normalizedQuery)

        let score = 0
        if (exactNameMatch) score += 200
        if (phraseInName) score += 120
        if (containsAllTokens) score += 80
        score += tokenMatches * 18
        score += nameTokenMatches * 12
        score += categoryTokenMatches * 6

        if (queryTokens.some(token => nameLower.startsWith(token))) {
          score += 25
        }

        const nameWords = nameLower.split(/\s+/)
        const wordMatchBonus = queryTokens.filter(token => nameWords.includes(token)).length * 10
        score += wordMatchBonus

        return {
          ...product,
          score,
          tokenMatches
        }
      })
      .filter(product => product.tokenMatches > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score
        if (b.tokenMatches !== a.tokenMatches) return b.tokenMatches - a.tokenMatches
        return a.name.localeCompare(b.name)
      })
  }, [hasQuery, normalizedQuery, queryTokens])

  const sortedProducts = useMemo<Product[]>(() => {
    if (sortBy === 'price-low') {
      return [...matchedProducts].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''), 10)
        const priceB = parseInt(b.price.replace(/\D/g, ''), 10)
        return priceA - priceB
      })
    }

    if (sortBy === 'price-high') {
      return [...matchedProducts].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''), 10)
        const priceB = parseInt(b.price.replace(/\D/g, ''), 10)
        return priceB - priceA
      })
    }

    return matchedProducts
  }, [matchedProducts, sortBy])

  const resultsCount = sortedProducts.length
  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const searchPath = hasQuery ? `/search?q=${encodeURIComponent(query)}` : '/search'
  const headingText = hasQuery ? uiTranslations.headingWithQuery(query) : uiTranslations.headingWithoutQuery

  const breadcrumbItems = [
    { label: uiTranslations.home, path: '/' },
    { label: headingText, path: searchPath }
  ]

  return (
    <div className="search-results-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{uiTranslations.pageTitle(hasQuery ? query : undefined)}</title>
        <meta
          name="description"
          content={uiTranslations.metaDescription(query, hasQuery)}
        />
        {/* Add noindex for empty search results to prevent Soft 404 */}
        <meta name="robots" content={hasQuery && resultsCount === 0 ? "noindex, follow" : "index, follow"} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`search-results-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        {OG_LOCALES.filter(altLocale => altLocale !== localeMeta.locale).map((altLocale) => (
          <meta key={`search-results-og-${altLocale}`} property="og:locale:alternate" content={altLocale} />
        ))}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />
      <CurrencyHighlight isIndonesian={isIndonesian} language={language} />

      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="search-results-header">
          <div className="search-results-heading">
            <h1 className="search-results-title">{headingText}</h1>
            <p className="search-results-subtitle">
              {uiTranslations.subtitle}
            </p>
            {isDetectingLanguage && (
              <span className="search-language-indicator">{uiTranslations.languageAdjusting}</span>
            )}
          </div>
          <div className="search-results-controls">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">{uiTranslations.sortDefault}</option>
              <option value="price-low">{uiTranslations.sortPriceLow}</option>
              <option value="price-high">{uiTranslations.sortPriceHigh}</option>
            </select>
          </div>
        </div>

        <p className="results-count">{uiTranslations.resultsCount(resultsCount)}</p>

        {sortedProducts.length > 0 ? (
          <div className="products-grid">
            {sortedProducts.map((product) => {
              const translatedName = getProductName(product.slug, language) || product.name
              return (
                <Link
                  key={product.id}
                  to="/products"
                  className="product-card"
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={`${translatedName} - Jasa Las & Konstruksi ${product.category} Mandiri Steel Bekasi`}
                      title={`${translatedName} - ${product.category} Mandiri Steel Bekasi`}
                      loading="lazy"
                      width="300"
                      height="200"
                      itemProp="image"
                      data-image-type="search-result"
                      data-product-name={translatedName}
                      data-category={product.category}
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{translatedName}</h3>
                    <p className="product-category">{product.category}</p>
                    {usdPrices[product.id] && highlightedPrices[product.id] && usdPrices[product.id] !== 'N/A' ? (
                      <div className="product-price-stack">
                        <span className="product-price-primary">
                          {highlightedPrices[product.id]}
                        </span>
                        <span className="product-price-secondary">
                          {usdPrices[product.id]}
                        </span>
                      </div>
                    ) : (
                      <p className="product-price">{product.price}</p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-message">
              {hasQuery ? uiTranslations.noResultsWithQuery(query) : uiTranslations.noResultsWithoutQuery}
            </p>
          </div>
        )}
      </div>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default SearchResults
