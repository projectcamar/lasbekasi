import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryAIContent from '../components/CategoryAIContent'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORY_MAP } from '../data/categories'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { getProductName } from '../data/productDescriptions'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { translateCategories } from '../utils/categoryTranslations'
import './ProductCategory.css'

const CATEGORY_NAME_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Kanopi': {
    id: 'Kanopi',
    en: 'Canopy',
    ar: 'المظلات',
    zh: '雨棚',
    ja: 'キャノピー',
    es: 'Marquesinas',
    fr: 'Auvents',
    ko: '캐노피'
  },
  'Pagar': {
    id: 'Pagar Besi',
    en: 'Iron Fence',
    ar: 'الأسوار الحديدية',
    zh: '铁艺围栏',
    ja: 'フェンス・門扉',
    es: 'Cercas y Portones',
    fr: 'Clôtures et Portails',
    ko: '펜스 및 대문'
  },
  'Teralis': {
    id: 'Teralis Jendela',
    en: 'Window Trellis',
    ar: 'تعريشة نافذة',
    zh: '窗户护栏',
    ja: '窓格子',
    es: 'Rejas de Ventana',
    fr: 'Grilles de Fenêtre',
    ko: '창문 방범창'
  },
  'Railing': {
    id: 'Railing Tangga',
    en: 'Stair Railing',
    ar: 'درابزين درج',
    zh: '楼梯扶手',
    ja: '階段手すり',
    es: 'Pasamanos de Escalera',
    fr: 'Garde-corps d\'Escalier',
    ko: '계단 난간'
  },
  'Konstruksi Baja': {
    id: 'Konstruksi Baja',
    en: 'Steel Construction',
    ar: 'الإنشاءات الفولاذية',
    zh: '钢结构',
    ja: '鉄骨構造',
    es: 'Estructuras de Acero',
    fr: 'Structures en Acier',
    ko: '철골 구조물'
  },
  'Stainless Steel': {
    id: 'Stainless Steel',
    en: 'Stainless Steel',
    ar: 'الستانلس ستيل',
    zh: '不锈钢',
    ja: 'ステンレス',
    es: 'Acero Inoxidable',
    fr: 'Acier Inoxydable',
    ko: '스테인리스 스틸'
  },
  'Premium': {
    id: 'Layanan Premium',
    en: 'Premium Services',
    ar: 'خدمات متميزة',
    zh: '优质服务',
    ja: 'プレミアムサービス',
    es: 'Servicios Premium',
    fr: 'Services Premium',
    ko: '프리미엄 서비스'
  },
  'Keamanan Jendela & Pintu': {
    id: 'Keamanan',
    en: 'Security',
    ar: 'الأمن والحلول الأمنية',
    zh: '安全保障',
    ja: '防犯ソリューション',
    es: 'Soluciones de Seguridad',
    fr: 'Sécurité Maximale',
    ko: '보안 솔루션'
  },
  'Railing Interior': {
    id: 'Interior',
    en: 'Interior',
    ar: 'الديكور الداخلي',
    zh: '室内装饰',
    ja: 'インテリア',
    es: 'Decoración de Interiores',
    fr: 'Aménagement Intérieur',
    ko: '인테리어'
  },
  'Konstruksi Industri': {
    id: 'Industri',
    en: 'Industrial',
    ar: 'الصناعية',
    zh: '工业级',
    ja: '工业向け',
    es: 'Uso Industrial',
    fr: 'Solutions Industrielles',
    ko: '산업용'
  },
  'Layanan Utama': {
    id: 'Layanan Utama',
    en: 'Core Services',
    ar: 'الخدمات الأساسية',
    zh: '核心服务',
    ja: '主要サービス',
    es: 'Servicios Principales',
    fr: 'Services Principaux',
    ko: '핵심 서비스'
  },
  'Best Seller': {
    id: 'Paling Laris',
    en: 'Best Sellers',
    ar: 'الأكثر مبيعاً',
    zh: '畅销产品',
    ja: 'ベストセラー',
    es: 'Más Vendidos',
    fr: 'Meilleures Ventes',
    ko: '베스트셀러'
  },
  'Products': {
    id: 'Layanan',
    en: 'Services',
    ar: 'الخدمات',
    zh: '服务',
    ja: 'サービス',
    es: 'Servicios',
    fr: 'Services',
    ko: '서비스'
  }
}

const getLocalizedCategoryName = (category: string, language: LanguageCode) => {
  const translations = CATEGORY_NAME_TRANSLATIONS[category] ?? CATEGORY_NAME_TRANSLATIONS['Products']
  if (!translations) return category
  return translations[language] ?? translations.en ?? category
}

const CATEGORY_UI_TRANSLATIONS: Record<
  LanguageCode,
  {
    loading: string
    showingResults: (count: number) => string
    resultsCount: (count: number) => string
    sortByLabel: string
    defaultSort: string
    priceLow: string
    priceHigh: string
    noResults: string
    home: string
    pageTitle: (category: string) => string
    metaDescription: (category: string, count: number) => string
    metaKeywords: (category: string) => string
    ogTitle: (category: string) => string
    ogDescription: (category: string) => string
    twitterTitle: (category: string) => string
    twitterDescription: (category: string, count: number) => string
    collectionName: (category: string) => string
    collectionDescription: (category: string, count: number) => string
  }
> = {
  id: {
    loading: 'Memuat...',
    showingResults: (count) => `Menampilkan 1-${count} dari ${count} hasil`,
    resultsCount: (count) => `${count} layanan ditemukan`,
    sortByLabel: 'Urutkan:',
    defaultSort: 'Default',
    priceLow: 'Harga: Rendah ke Tinggi',
    priceHigh: 'Harga: Tinggi ke Rendah',
    noResults: 'Tidak ada produk ditemukan',
    home: 'Beranda',
    pageTitle: (category) => `Jasa Pasang ${category} Bekasi - Bengkel Las Mandiri Steel`,
    metaDescription: (category, count) =>
      `Jasa pasang ${category.toLowerCase()} kustom berkualitas tinggi dari Bengkel Las Mandiri Bekasi (Mandiri Steel). Rangka tebal standar SNI, finishing rapi, garansi kebocoran & struktur. Tersedia ${count} pilihan terbaik.`,
    metaKeywords: (category) =>
      `jasa ${category.toLowerCase()} bekasi, pasang ${category.toLowerCase()} murah, bengkel las ${category.toLowerCase()}, mandiri steel, las besi bekasi, custom ${category.toLowerCase()}`,
    ogTitle: (category) => `Jasa Pasang ${category} Bekasi - Mandiri Steel`,
    ogDescription: (category) => `Layanan fabrikasi kustom ${category} berkualitas tinggi di Bekasi. Bahan tebal standar SNI, pengerjaan rapi, dan bergaransi resmi.`,
    twitterTitle: (category) => `Jasa ${category} Bekasi - Mandiri Steel`,
    twitterDescription: (category, count) => `Dapatkan ${count} pilihan kustom ${category} berkualitas terbaik dari Mandiri Steel Bekasi.`,
    collectionName: (category) => `Kategori Layanan ${category} - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Koleksi jasa pembuatan dan pemasangan ${category} dari Mandiri Steel. Kualitas premium, pengerjaan presisi, garansi kebocoran dan struktur untuk area Bekasi. Tersedia ${count} jenis.`
  },
  en: {
    loading: 'Loading...',
    showingResults: (count) => `Showing 1-${count} of ${count} results`,
    resultsCount: (count) => `${count} results found`,
    sortByLabel: 'Sort by:',
    defaultSort: 'Default',
    priceLow: 'Price: Low to High',
    priceHigh: 'Price: High to Low',
    noResults: 'No products found',
    home: 'Home',
    pageTitle: (category) => `Custom ${category} Services Bekasi - Mandiri Steel`,
    metaDescription: (category, count) =>
      `High-quality custom ${category.toLowerCase()} services by Mandiri Steel Bekasi. Heavy-duty SNI materials, anti-rust coating, and full structural warranty. ${count} premium designs available.`,
    metaKeywords: (category) =>
      `custom ${category.toLowerCase()} bekasi, welding ${category.toLowerCase()} services, iron work ${category.toLowerCase()}, mandiri steel, bekasi canopy gate`,
    ogTitle: (category) => `Custom ${category} Fabrication - Mandiri Steel Bekasi`,
    ogDescription: (category) => `Premium custom ${category} fabrication in Bekasi. Heavy-duty steel, clean finishes, and official warranty by Mandiri Steel.`,
    twitterTitle: (category) => `${category} Services Bekasi - Mandiri Steel`,
    twitterDescription: (category, count) => `Explore ${count} custom ${category} styles by Mandiri Steel Bekasi.`,
    collectionName: (category) => `${category} Fabrication Category - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Collection of premium ${category} designs and installations by Mandiri Steel. Precision fabrication and warranty for residential & commercial properties in Bekasi. ${count} styles.`
  },
  ar: {
    loading: 'جارٍ التحميل...',
    showingResults: (count) => `عرض 1-${count} من ${count} نتيجة`,
    resultsCount: (count) => `${count} نتيجة`,
    sortByLabel: 'فرز حسب:',
    defaultSort: 'افتراضي',
    priceLow: 'السعر: من الأقل إلى الأعلى',
    priceHigh: 'السعر: من الأعلى إلى الأقل',
    noResults: 'لم يتم العثور على منتجات',
    home: 'الصفحة الرئيسية',
    pageTitle: (category) => `خدمات ${category} في بيكاسي - مانديري ستيل`,
    metaDescription: (category, count) =>
      `خدمات تصنيع ${category} مخصصة عالية الجودة من مانديري ستيل في بيكاسي. هياكل فولاذية متينة بمعايير SNI وضمان هيكلي. يتوفر ${count} تصميم ممتاز.`,
    metaKeywords: (category) =>
      `${category} بيكاسي، تركيب ${category}، ورشة لحام ${category}، مانديري ستيل، حدادة بيكاسي`,
    ogTitle: (category) => `تصنيع ${category} مخصص - مانديري ستيل بيكاسي`,
    ogDescription: (category) => `تصنيع وتركيب ${category} مخصص بجودة عالية في بيكاسي. إطارات متينة وتشطيبات دقيقة بضمان رسمي من مانديري ستيل.`,
    twitterTitle: (category) => `خدمات ${category} بيكاسي - مانديري ستيل`,
    twitterDescription: (category, count) => `استكشف ${count} تصميم مخصص لـ ${category} بجودة ممتازة من مانديري ستيل بيكاسي.`,
    collectionName: (category) => `فئة تصنيع ${category} - مانديري ستيل`,
    collectionDescription: (category, count) =>
      `مجموعة تصاميم وتركيبات ${category} الفاخرة من مانديري ستيل. دقة في التصنيع والتركيب وضمان هيكلي كامل لخدمة بيكاسي وجاكرتا الكبرى. ${count} تصميم.`
  },
  zh: {
    loading: '加载中...',
    showingResults: (count) => `显示第 1-${count} 条，共 ${count} 条结果`,
    resultsCount: (count) => `共找到 ${count} 个结果`,
    sortByLabel: '排序：',
    defaultSort: '默认',
    priceLow: '价格：从低到高',
    priceHigh: '价格：从高到低',
    noResults: '未找到产品',
    home: '首页',
    pageTitle: (category) => `勿加泗定制${category}安装服务 - Mandiri Steel`,
    metaDescription: (category, count) =>
      `勿加泗 Mandiri Steel 提供的优质定制${category}制造服务。采用符合 SNI 标准的加厚钢材与防锈漆面，提供结构保修。共有 ${count} 款设计可供选择。`,
    metaKeywords: (category) =>
      `勿加泗${category}, ${category}定制安装, ${category}电焊工坊, Mandiri Steel, 勿加泗铁艺`,
    ogTitle: (category) => `定制${category}制造 - Mandiri Steel Bekasi`,
    ogDescription: (category) => `勿加泗高品质定制${category}制造与安装服务。坚固框架，精细工艺，Mandiri Steel 官方品质保修。`,
    twitterTitle: (category) => `勿加泗${category}安装服务 - Mandiri Steel`,
    twitterDescription: (category, count) => `探索 ${count} 款由勿加泗 Mandiri Steel 制造的定制${category}服务。`,
    collectionName: (category) => `${category}定制制造类别 - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Mandiri Steel 提供的优质${category}定制设计与安装系列。精细的电焊工艺，为勿加泗及雅加达地区住宅和商业物业提供品质保障。共 ${count} 款。`
  },
  ja: {
    loading: '読み込み中...',
    showingResults: (count) => `${count} 件中 1-${count} 件を表示`,
    resultsCount: (count) => `${count} 件が見つかりました`,
    sortByLabel: '並び替え:',
    defaultSort: 'デフォルト',
    priceLow: '価格: 低い順',
    priceHigh: '価格: 高い順',
    noResults: '商品が見つかりません',
    home: 'ホーム',
    pageTitle: (category) => `ブカシのカスタム${category}製作・施工 - Mandiri Steel`,
    metaDescription: (category, count) =>
      `ブカシの Mandiri Steel が提供する高品質カスタム${category}製作サービス。SNI規格スチール材使用、丁寧な防錆塗装仕上げ、構造保証付き。現在 ${count} デザイン公開中。`,
    metaKeywords: (category) =>
      `ブカシ ${category}, ${category} 施工, 溶接工務店 ${category}, Mandiri Steel, ブカシ アイアンワーク`,
    ogTitle: (category) => `カスタム${category}製作 - Mandiri Steel ブカシ`,
    ogDescription: (category) => `ブカシで高品質なカスタム${category}を製作・設置します。頑丈なフレームと丁寧な仕上げ、Mandiri Steel による公式保証付き。`,
    twitterTitle: (category) => `ブカシの${category}施工 - Mandiri Steel`,
    twitterDescription: (category, count) => `ブカシの Mandiri Steel が手掛ける ${count} 点のカスタム${category}コレクションをご覧ください。`,
    collectionName: (category) => `${category}製作カテゴリー - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Mandiri Steel が手掛けるプレミアムな${category}の設計・施工コレクション。ブカシ全域およびジャボデタベック地域の住宅・店舗向け。高品質${category}を ${count} スタイルご用意。`
  },
  es: {
    loading: 'Cargando...',
    showingResults: (count) => `Mostrando 1-${count} de ${count} resultados`,
    resultsCount: (count) => `${count} resultados encontrados`,
    sortByLabel: 'Ordenar por:',
    defaultSort: 'Predeterminado',
    priceLow: 'Precio: de menor a mayor',
    priceHigh: 'Precio: de mayor a menor',
    noResults: 'No se encontraron productos',
    home: 'Inicio',
    pageTitle: (category) => `Servicios de ${category} a Medida en Bekasi - Mandiri Steel`,
    metaDescription: (category, count) =>
      `Servicios de fabricación e instalación de ${category.toLowerCase()} a medida por Mandiri Steel Bekasi. Materiales gruesos SNI, pintura antioxidante y garantía estructural. ${count} opciones disponibles.`,
    metaKeywords: (category) =>
      `${category.toLowerCase()} bekasi, instalar ${category.toLowerCase()}, taller de soldadura ${category.toLowerCase()}, mandiri steel, herrería bekasi`,
    ogTitle: (category) => `Fabricación de ${category} a Medida - Mandiri Steel Bekasi`,
    ogDescription: (category) => `Servicios de ${category} a medida y de alta calidad en Bekasi. Estructuras sólidas, acabados limpios y garantía de Mandiri Steel.`,
    twitterTitle: (category) => `Servicios de ${category} Bekasi - Mandiri Steel`,
    twitterDescription: (category, count) => `Explore ${count} estilos personalizados de ${category} por Mandiri Steel Bekasi.`,
    collectionName: (category) => `Categoría de Fabricación de ${category} - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Colección de diseños e instalaciones premium de ${category} por Mandiri Steel. Fabricación de precisión y garantía para residencias y comercios en Bekasi. ${count} estilos.`
  },
  fr: {
    loading: 'Chargement...',
    showingResults: (count) => `Affichage de 1-${count} sur ${count} résultats`,
    resultsCount: (count) => `${count} résultats trouvés`,
    sortByLabel: 'Trier par :',
    defaultSort: 'Par défaut',
    priceLow: 'Prix : du plus bas au plus élevé',
    priceHigh: 'Prix : du plus élevé au plus bas',
    noResults: 'Aucun produit trouvé',
    home: 'Accueil',
    pageTitle: (category) => `Services de ${category} Sur Mesure à Bekasi - Mandiri Steel`,
    metaDescription: (category, count) =>
      `Services de fabrication et d'installation d'${category.toLowerCase()} sur mesure par Mandiri Steel Bekasi. Matériaux robustes SNI, traitement antirouille et garantie de structure. ${count} modèles disponibles.`,
    metaKeywords: (category) =>
      `${category.toLowerCase()} sur mesure bekasi, soudure ${category.toLowerCase()}, ferronnerie d'art ${category.toLowerCase()}, mandiri steel, auvents barrières bekasi`,
    ogTitle: (category) => `Fabrication d'${category} Sur Mesure - Mandiri Steel Bekasi`,
    ogDescription: (category) => `Services de conception d'${category} sur mesure de qualité supérieure à Bekasi. Finitions soignées et garantie décennale Mandiri Steel.`,
    twitterTitle: (category) => `Services de ${category} Bekasi - Mandiri Steel`,
    twitterDescription: (category, count) => `Découvrez ${count} styles d'${category} sur mesure par Mandiri Steel Bekasi.`,
    collectionName: (category) => `Catégorie Fabrication d'${category} - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Sélection de modèles haut de gamme d'${category} par Mandiri Steel. Pose soignée et garantie robuste pour projets résidentiels et commerciaux à Bekasi. ${count} types disponibles.`
  },
  ko: {
    loading: '로딩 중...',
    showingResults: (count) => `총 ${count}개 중 1-${count}개 표시`,
    resultsCount: (count) => `${count}개의 결과`,
    sortByLabel: '정렬:',
    defaultSort: '기본값',
    priceLow: '가격: 낮은 순',
    priceHigh: '가격: 높은 순',
    noResults: '상품을 찾을 수 없습니다',
    home: '홈',
    pageTitle: (category) => `베카시 맞춤형 ${category} 제작 및 설치 - Mandiri Steel`,
    metaDescription: (category, count) =>
      `베카시 Mandiri Steel의 프리미엄 맞춤형 ${category} 제작 서비스. SNI 규격 강재 사용, 방청 도장 처리, 확실한 품질 보증. 현재 ${count}개 서비스 이용 가능.`,
    metaKeywords: (category) =>
      `베카시 ${category}, ${category} 설치, 용접 전문 공방 ${category}, Mandiri Steel, 철제 구조물 제작`,
    ogTitle: (category) => `맞춤형 ${category} 제작 - Mandiri Steel Bekasi`,
    ogDescription: (category) => `베카시 최고의 맞춤형 ${category} 제작 및 설치 서비스. 튼튼한 프레임, 정밀 시공 및 Mandiri Steel 정식 품질 보증.`,
    twitterTitle: (category) => `베카시 ${category} 시공 - Mandiri Steel`,
    twitterDescription: (category, count) => `베카시 Mandiri Steel이 설계 및 시공한 ${count}개의 맞춤형 ${category} 컬렉션을 확인해 보세요.`,
    collectionName: (category) => `${category} 맞춤 제작 카테고리 - Mandiri Steel`,
    collectionDescription: (category, count) =>
      `Mandiri Steel의 고품격 ${category} 설계 및 시공 컬렉션. 베카시 및 자카르타 수도권 지역의 주택 및 상업용 프로젝트 지원. 총 ${count}개 스타일.`
  }
}

const OG_LOCALES = ['id_ID', 'en_US', 'ar_SA', 'zh_CN', 'ja_JP', 'es_ES', 'fr_FR', 'ko_KR'] as const

// Language to currency mapping
const LANGUAGE_CURRENCY_MAP: { [key in LanguageCode]: 'KRW' | 'JPY' | 'CNY' | 'SAR' | 'EUR' | 'USD' | null } = {
  'ko': 'KRW',
  'ja': 'JPY',
  'zh': 'CNY',
  'ar': 'SAR',
  'es': 'EUR',
  'fr': 'EUR',
  'en': 'USD',
  'id': 'USD'
}

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const location = useLocation()
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [language, setLanguage] = useState<LanguageCode>(() => {
    return getCurrentLanguage(location.pathname, location.search)
  })
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})
  const [highlightedPrices, setHighlightedPrices] = useState<{ [key: number]: string }>({})

  // Check if category exists in CATEGORY_MAP - if not, redirect to 404 to prevent Soft 404
  const categoryName = category ? CATEGORY_MAP[category] : null
  const localizedCategoryName = categoryName ? getLocalizedCategoryName(categoryName, language) : ''

  // Language detection - instant, no async needed!
  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    if (currentLang !== language) {
      setLanguage(currentLang)
    }
  }, [location.pathname, location.search, language])

  const isIndonesian = language === 'id'
  const isLoading = false
  const uiTranslations = CATEGORY_UI_TRANSLATIONS[language] ?? CATEGORY_UI_TRANSLATIONS.en

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

  // Convert prices to USD and highlighted currency based on language
  useEffect(() => {
    const convertPrices = async () => {
      const usdPriceMap: { [key: number]: string } = {}
      const highlightedPriceMap: { [key: number]: string } = {}

      const targetCurrency = LANGUAGE_CURRENCY_MAP[language]

      for (const product of ALL_PRODUCTS) {
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
      }

      setUsdPrices(usdPriceMap)
      setHighlightedPrices(highlightedPriceMap)
    }
    convertPrices()
  }, [language])

  const filteredProducts = useMemo(() => {
    if (!categoryName) return []
    let products = ALL_PRODUCTS.filter(product =>
      product.categories.some(cat => cat.toLowerCase() === categoryName.toLowerCase())
    )

    // Sort products
    if (sortBy === 'price-low') {
      products = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceA - priceB
      })
    } else if (sortBy === 'price-high') {
      products = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceB - priceA
      })
    }

    return products
  }, [categoryName, sortBy])

  const breadcrumbItems = [
    { label: uiTranslations.home, path: '/' },
    { label: localizedCategoryName, path: `/product-category/${category}` }
  ]

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  if (isLoading) {
    return (
      <div className="product-category-page">
        <NaturraHeader isIndonesian={isIndonesian} language={language} />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          background: '#f8f9fa'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #8B7355',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p style={{ color: '#666', margin: 0 }}>
              {uiTranslations.loading}
            </p>
          </div>
        </div>
        <Footer isIndonesian={isIndonesian} language={language} />
      </div>
    )
  }

  if (!category || !categoryName) {
    return <Navigate to="/404-not-found" replace />
  }

  return (
    <div className="product-category-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{uiTranslations.pageTitle(localizedCategoryName)}</title>
        <meta name="description" content={uiTranslations.metaDescription(localizedCategoryName, filteredProducts.length)} />
        <meta name="keywords" content={uiTranslations.metaKeywords(localizedCategoryName)} />
        {/* Add noindex if category has no products to prevent Soft 404 */}
        <meta name="robots" content={filteredProducts.length > 0 ? "index, follow" : "noindex, follow"} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`product-category-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={uiTranslations.ogTitle(localizedCategoryName)} />
        <meta property="og:description" content={uiTranslations.ogDescription(localizedCategoryName)} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={localeMeta.locale} />
        {OG_LOCALES.filter(altLocale => altLocale !== localeMeta.locale).map((altLocale) => (
          <meta key={`product-category-og-${altLocale}`} property="og:locale:alternate" content={altLocale} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={uiTranslations.twitterTitle(localizedCategoryName)} />
        <meta name="twitter:description" content={uiTranslations.twitterDescription(localizedCategoryName, filteredProducts.length)} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": uiTranslations.home,
                "item": "https://lasbekasi.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": localizedCategoryName,
                "item": `https://lasbekasi.com/product-category/${category}`
              }
            ]
          })}
        </script>

        {/* CollectionPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": uiTranslations.collectionName(localizedCategoryName),
            "description": uiTranslations.collectionDescription(localizedCategoryName, filteredProducts.length),
            "url": `https://lasbekasi.com/product-category/${category}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredProducts.length,
              "itemListElement": filteredProducts.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "url": `https://lasbekasi.com/product/${product.slug}`,
                  "image": product.image,
                  "offers": {
                    "@type": "Offer",
                    "price": product.price.replace(/[^\d]/g, ''),
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock"
                  }
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="category-page-title">{localizedCategoryName}</h1>

          <div className="category-controls">
            {filteredProducts.length > 0 ? (
              <p className="showing-results">
                {uiTranslations.showingResults(filteredProducts.length)}
              </p>
            ) : (
              <p className="showing-results">{uiTranslations.noResults}</p>
            )}

            {filteredProducts.length > 0 && (
              <div className="sort-dropdown">
                <button
                  className="sort-button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {uiTranslations.sortByLabel} {sortBy === 'default' ? uiTranslations.defaultSort : sortBy === 'price-low' ? uiTranslations.priceLow : uiTranslations.priceHigh}
                  <ChevronDown size={16} />
                </button>

                {isDropdownOpen && (
                  <div className="sort-options">
                    <button onClick={() => { setSortBy('default'); setIsDropdownOpen(false); }}>{uiTranslations.defaultSort}</button>
                    <button onClick={() => { setSortBy('price-low'); setIsDropdownOpen(false); }}>{uiTranslations.priceLow}</button>
                    <button onClick={() => { setSortBy('price-high'); setIsDropdownOpen(false); }}>{uiTranslations.priceHigh}</button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="category-products-grid">
            {filteredProducts.map((product) => {
              const translatedName = getProductName(product.slug, language) || product.name
              return (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="category-product-card"
                >
                  <div className="category-product-image">
                    <img
                      src={product.image}
                      alt={`${translatedName} - Jasa Bengkel Las ${localizedCategoryName} Mandiri Steel Bekasi`}
                      title={`${translatedName} - Custom ${localizedCategoryName} Fabrication Mandiri Steel`}
                      loading="lazy"
                      width="300"
                      height="200"
                      itemProp="image"
                      data-image-type="category-product"
                      data-product-name={translatedName}
                      data-product-slug={product.slug}
                      data-category={categoryName}
                    />
                  </div>
                  <div className="category-product-info">
                    <h3 className="category-product-name">{translatedName}</h3>
                    <p className="category-product-cats">{translateCategories(product.categories, language)}</p>
                    {usdPrices[product.id] && highlightedPrices[product.id] ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {/* Highlighted currency based on language */}
                        <p
                          className="category-product-price"
                          style={{
                            margin: 0,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#333'
                          }}
                        >
                          {highlightedPrices[product.id]}
                        </p>
                        {/* USD always non-highlighted */}
                        <p
                          style={{
                            margin: 0,
                            fontSize: '0.75rem',
                            fontWeight: 400,
                            color: '#999'
                          }}
                        >
                          {usdPrices[product.id]}
                        </p>
                      </div>
                    ) : (
                      <p className="category-product-price">{product.price}</p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* AI-Optimized Category Content */}
          <CategoryAIContent
            category={categoryName}
            productCount={filteredProducts.length}
            isIndonesian={isIndonesian}
          />
        </div>
      </main>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default ProductCategory


