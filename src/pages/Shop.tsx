import React, { useState, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryAIContent from '../components/CategoryAIContent'
import CurrencyHighlight from '../components/CurrencyHighlight'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORIES } from '../data/categories'
import { generateMerchantStructuredData } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls, getProductImageUrl } from '../utils/seo'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { getProductName } from '../data/productDescriptions'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { translateCategories } from '../utils/categoryTranslations'
import './ProductCategory.css'
import './Shop.css'

const PRODUCTS_PER_PAGE = 24

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

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 60000000])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>('en')
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})
  const [highlightedPrices, setHighlightedPrices] = useState<{ [key: number]: string }>({})
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // Language detection - instant, no async needed!
  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    setLanguage(currentLang)
    setIsIndonesian(currentLang === 'id')
  }, [location.pathname, location.search])

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
    setCurrentPage(1)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange]
    const newValue = parseInt(e.target.value)

    if (index === 0) {
      // Min slider - ensure it doesn't exceed max
      newRange[0] = Math.min(newValue, priceRange[1])
    } else {
      // Max slider - ensure it doesn't go below min
      newRange[1] = Math.max(newValue, priceRange[0])
    }

    setPriceRange(newRange as [number, number])
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 60000000])
    setCurrentPage(1)
  }

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS]

    // Filter by category
    if (selectedCategories.length > 0) {
      products = products.filter(product =>
        product.categories.some(cat => selectedCategories.includes(cat))
      )
    }

    // Filter by price
    products = products.filter(product => {
      const price = parseInt(product.price.replace(/\D/g, ''))
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Sort
    if (sortBy === 'price-low') {
      products = products.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceA - priceB
      })
    } else if (sortBy === 'price-high') {
      products = products.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceB - priceA
      })
    }

    return products
  }, [sortBy, selectedCategories, priceRange])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex)

  const getPaginationRange = () => {
    const range: (number | string)[] = []
    const showEllipsis = totalPages > 7

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) range.push(i)
        range.push('...')
        range.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        range.push(1)
        range.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) range.push(i)
      } else {
        range.push(1)
        range.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) range.push(i)
        range.push('...')
        range.push(totalPages)
      }
    }

    return range
  }

  // Translations for Shop page
  const shopTranslations = {
    id: {
      home: 'Beranda',
      shop: 'Toko',
      allProduct: 'Semua Produk',
      categories: 'Kategori',
      price: 'Harga',
      clearAll: 'Hapus Semua',
      filters: 'Filter',
      sortBy: 'Urutkan',
      default: 'Default',
      priceLow: 'Harga: Rendah ke Tinggi',
      priceHigh: 'Harga: Tinggi ke Rendah',
      showing: 'Menampilkan',
      of: 'dari',
      results: 'hasil',
      prev: 'Sebelumnya',
      next: 'Selanjutnya',
      page: 'Halaman',
      pageTitle: 'Katalog Layanan & Produk Fabrikasi Besi - Bengkel Las Mandiri',
      metaDescription: 'Telusuri katalog lengkap layanan Bengkel Las Mandiri Bekasi (Mandiri Steel). Kami menyediakan kanopi, pagar besi, teralis jendela, railing tangga, stainless steel, dan konstruksi baja berkualitas premium.',
      metaKeywords: 'katalog bengkel las, jasa las bekasi, pasang kanopi bekasi, pagar besi minimalis, teralis jendela kustom, railing tangga bekasi, konstruksi baja wf, mandiri steel',
      ogTitle: 'Katalog Layanan & Produk Bengkel Las Mandiri Bekasi',
      ogDescription: 'Katalog lengkap jasa pembuatan kanopi, pagar, teralis, railing, dan konstruksi baja bergaransi resmi dari Mandiri Steel Bekasi.',
      twitterTitle: 'Katalog Layanan Bengkel Las Mandiri - Bekasi',
      twitterDescription: 'Katalog lengkap jasa pasang kanopi, pagar besi, teralis, railing tangga berkualitas premium di Bekasi.',
      collectionName: 'Katalog Layanan Bengkel Las Mandiri',
      collectionDescription: 'Browse katalog lengkap layanan pengelasan dan fabrikasi logam kustom dari Bengkel Las Mandiri Bekasi. Kami melayani area Jabodetabek sejak 1999.',
      productDescription: (name: string) => `Jasa pembuatan dan pemasangan ${name} berkualitas tinggi dari Bengkel Las Mandiri Bekasi (Mandiri Steel). Rangka tebal standar SNI, pengerjaan rapi, dan bergaransi resmi.`,
      sellerDescription: 'Bengkel Las Mandiri (Mandiri Steel) adalah spesialis pembuatan kanopi minimalis, pagar besi, teralis jendela, railing tangga, dan konstruksi baja WF berkualitas di Bekasi sejak 1999.'
    },
    en: {
      home: 'Home',
      shop: 'Shop',
      allProduct: 'All Product',
      categories: 'Categories',
      price: 'Price',
      clearAll: 'Clear All',
      filters: 'Filters',
      sortBy: 'Sort by',
      default: 'Default',
      priceLow: 'Price: Low to High',
      priceHigh: 'Price: High to Low',
      showing: 'Showing',
      of: 'of',
      results: 'results',
      prev: 'Prev',
      next: 'Next',
      page: 'Page',
      pageTitle: 'Custom Metal Works & Welding Catalog - Mandiri Steel Bekasi',
      metaDescription: 'Browse the complete catalog of custom steel fabrication and welding services by Mandiri Steel Bekasi. We offer canopies, fences, trellises, railings, stainless steel, and structural steel structures.',
      metaKeywords: 'welding services catalog, custom metal fabrication, canopy installation bekasi, iron gates fences, window security trellis, stair railing, structural steel contractor, mandiri steel',
      ogTitle: 'Welding & Metal Fabrication Catalog - Mandiri Steel Bekasi',
      ogDescription: 'Complete catalog of premium canopy, gate, fence, trellis, and steel construction services with official warranty by Mandiri Steel Bekasi.',
      twitterTitle: 'Metal Fabrication & Welding Catalog - Mandiri Steel',
      twitterDescription: 'Discover high-quality custom metal fabrication and welding solutions for residential and commercial spaces in Bekasi.',
      collectionName: 'Mandiri Steel Custom Metal Works Catalog',
      collectionDescription: 'Browse the complete catalog of custom metal works and professional welding services by Mandiri Steel Bekasi. Serving Jabodetabek since 1999.',
      productDescription: (name: string) => `Premium custom ${name} design and installation by Mandiri Steel Bekasi. Built with thick structural steel, anti-rust coating, and full warranty.`,
      sellerDescription: 'Mandiri Steel is a premium welding and custom steel fabrication specialist in Bekasi. Delivering durable canopies, fences, railings, and structural steel works since 1999.'
    },
    ar: {
      home: 'الرئيسية',
      shop: 'المتجر',
      allProduct: 'جميع المنتجات',
      categories: 'الفئات',
      price: 'السعر',
      clearAll: 'مسح الكل',
      filters: 'المرشحات',
      sortBy: 'ترتيب حسب',
      default: 'افتراضي',
      priceLow: 'السعر: من الأقل إلى الأعلى',
      priceHigh: 'السعر: من الأعلى إلى الأقل',
      showing: 'عرض',
      of: 'من',
      results: 'نتيجة',
      prev: 'السابق',
      next: 'التالي',
      page: 'صفحة',
      pageTitle: 'كتالوج أعمال المعادن واللحام المخصصة - مانديري ستيل بيكاسي',
      metaDescription: 'تصفح الكتالوج الكامل لخدمات تصنيع الفولاذ واللحام المخصصة من مانديري ستيل في بيكاسي. نقدم المظلات، الأسوار، الحواجز، الدرابزين، الفولاذ المقاوم للصدأ، والمنشآت المعدنية.',
      metaKeywords: 'كتالوج خدمات اللحام، تصنيع المعادن المخصصة، تركيب المظلات بيكاسي، بوابات حديدية، حواجز حماية النوافذ، درابزين الدرج، مقاول هياكل حديدية، مانديري ستيل',
      ogTitle: 'كتالوج اللحام وتصنيع المعادن - مانديري ستيل بيكاسي',
      ogDescription: 'كتالوج كامل لخدمات المظلات، البوابات، الأسوار، الحواجز، والإنشاءات الفولاذية بضمان رسمي من مانديري ستيل بيكاسي.',
      twitterTitle: 'كتالوج تصنيع المعادن واللحام - مانديري ستيل',
      twitterDescription: 'اكتشف حلول تصنيع المعادن المخصصة واللحام عالية الجودة للمساحات السكنية والتجارية في بيكاسي.',
      collectionName: 'كتالوج أعمال المعادن المخصصة من مانديري ستيل',
      collectionDescription: 'تصفح الكتالوج الكامل لأعمال المعادن المخصصة وخدمات اللحام الاحترافية من مانديري ستيل بيكاسي. نخدم جاكرتا الكبرى منذ عام 1999.',
      productDescription: (name: string) => `تصميم وتركيب مخصص ممتاز لـ ${name} من مانديري ستيل بيكاسي. مبني بفولاذ هيكلي سميك، طلاء مضاد للصدأ، وضمان كامل.`,
      sellerDescription: 'مانديري ستيل هي ورشة لحام وتصنيع فولاذ مخصصة ممتازة في بيكاسي. نقدم مظلات، أسوار، درابزين، وأعمال فولاذية هيكلية متينة منذ عام 1999.'
    },
    zh: {
      home: '首页',
      shop: '商店',
      allProduct: '所有产品',
      categories: '类别',
      price: '价格',
      clearAll: '清除全部',
      filters: '筛选',
      sortBy: '排序',
      default: '默认',
      priceLow: '价格：从低到高',
      priceHigh: '价格：从高到低',
      showing: '显示',
      of: '共',
      results: '个结果',
      prev: '上一页',
      next: '下一页',
      page: '页',
      pageTitle: '定制铁艺与焊接服务目录 - 勿加泗 Mandiri Steel',
      metaDescription: '浏览勿加泗 Mandiri Steel 提供的完整定制钢结构制造与电焊服务目录。我们提供高品质雨棚、铁艺围栏、防盗网、楼梯扶手、不锈钢工程及建筑钢结构。',
      metaKeywords: '焊接服务目录, 定制金属制造, 勿加泗雨棚安装, 铁艺大门围栏, 窗户防盗网, 楼梯扶手, 钢结构工程承包商, Mandiri Steel',
      ogTitle: '焊接与金属制造服务目录 - Mandiri Steel Bekasi',
      ogDescription: '勿加泗 Mandiri Steel 提供的雨棚、大门、围栏、窗网和钢结构制造安装服务完整目录，附带官方品质保修。',
      twitterTitle: '金属制造与焊接工程目录 - Mandiri Steel',
      twitterDescription: '为您在勿加泗的住宅和商业空间发现高品质的定制金属制造与焊接解决方案。',
      collectionName: 'Mandiri Steel 定制金属制品目录',
      collectionDescription: '浏览勿加泗 Mandiri Steel 提供的完整定制金属制品与专业电焊服务目录。自1999年以来服务雅加达大都市区。',
      productDescription: (name: string) => `由勿加泗 Mandiri Steel 提供的优质定制${name}设计与安装。采用加厚钢结构、防锈图层，并提供完整品质保修。`,
      sellerDescription: 'Mandiri Steel 是勿加泗优质电焊与定制钢结构制造专家。自1999年以来，致力于提供耐用的雨棚、围栏、楼梯扶手及建筑钢结构工程。'
    },
    ja: {
      home: 'ホーム',
      shop: 'ショップ',
      allProduct: 'すべての商品',
      categories: 'カテゴリー',
      price: '価格',
      clearAll: 'すべてクリア',
      filters: 'フィルター',
      sortBy: '並び替え',
      default: 'デフォルト',
      priceLow: '価格：安い順',
      priceHigh: '価格：高い順',
      showing: '表示中',
      of: '/',
      results: '件',
      prev: '前へ',
      next: '次へ',
      page: 'ページ',
      pageTitle: 'カスタムメタルワーク＆溶接サービスカタログ - Mandiri Steel ブカシ',
      metaDescription: 'ブカシの Mandiri Steel が手掛けるカスタムスチール製作・溶接サービスの総合カタログ。キャノピー、門扉、フェンス、面格子、手すり、ステンレス製品、各種鉄骨構造に対応。',
      metaKeywords: '溶接サービスカタログ, 金属カスタム製作, ブカシキャノピー施工, 鉄製門扉フェンス, 窓防犯格子, 階段手すり, 鉄骨建築請負, Mandiri Steel',
      ogTitle: '溶接＆金属カスタム製作カタログ - Mandiri Steel ブカシ',
      ogDescription: 'ブカシの Mandiri Steel が提供するプレミアムなキャノピー、門扉、フェンス、面格子、鉄骨構造施工の総合カタログ（公式製品保証付き）。',
      twitterTitle: '金属製作＆溶接施工カタログ - Mandiri Steel',
      twitterDescription: 'ブカシの住宅や商業スペースに最適な、高品質カスタム金属製作＆プロ仕様の溶接ソリューション。',
      collectionName: 'Mandiri Steel カスタム金属製品カタログ',
      collectionDescription: 'ブカシの Mandiri Steel が提供するカスタム金属製品とプロの溶接サービスの全カタログ。1999年よりジャボデタベック対応。',
      productDescription: (name: string) => `ブカシの Mandiri Steel によるプレミアムカスタム${name}の設計・施工。肉厚スチール構造、防錆塗装、安心の製品保証付き。`,
      sellerDescription: 'Mandiri Steel はブカシでプレミアムな溶接とカスタムスチール製作を専門としています。1999年より、高耐久キャノピー、フェンス、手すり、鉄骨構造物の施工を提供。'
    },
    es: {
      home: 'Inicio',
      shop: 'Tienda',
      allProduct: 'Todos los Productos',
      categories: 'Categorías',
      price: 'Precio',
      clearAll: 'Limpiar Todo',
      filters: 'Filtros',
      sortBy: 'Ordenar por',
      default: 'Predeterminado',
      priceLow: 'Precio: Menor a Mayor',
      priceHigh: 'Precio: Mayor a Menor',
      showing: 'Mostrando',
      of: 'de',
      results: 'resultados',
      prev: 'Anterior',
      next: 'Siguiente',
      page: 'Página',
      pageTitle: 'Catálogo de Herrería y Fabricación Metálica - Mandiri Steel Bekasi',
      metaDescription: 'Explore el catálogo completo de servicios de herrería y fabricación de estructuras de acero a medida por Mandiri Steel Bekasi. Ofrecemos marquesinas, portones, rejas, pasamanos, acero inoxidable y estructuras pesadas.',
      metaKeywords: 'catálogo de herrería, fabricación metálica a medida, instalar marquesinas bekasi, portones y cercas de hierro, rejas de seguridad, pasamanos de escalera, estructuras de acero, mandiri steel',
      ogTitle: 'Catálogo de Herrería y Fabricación de Acero - Mandiri Steel Bekasi',
      ogDescription: 'Catálogo completo de servicios premium de marquesinas, portones, cercas, rejas y construcciones de acero con garantía oficial de Mandiri Steel Bekasi.',
      twitterTitle: 'Catálogo de Fabricación Metálica y Herrería - Mandiri Steel',
      twitterDescription: 'Descubra soluciones de herrería y estructuras de acero personalizadas de alta calidad para residencias y comercios en Bekasi.',
      collectionName: 'Catálogo de Estructuras Metálicas de Mandiri Steel',
      collectionDescription: 'Consulte el catálogo completo de estructuras metálicas a medida y servicios profesionales de herrería de Mandiri Steel Bekasi. Desde 1999 en Jabodetabek.',
      productDescription: (name: string) => `Diseño e instalación premium a medida de ${name} por Mandiri Steel Bekasi. Construido con acero estructural grueso, revestimiento antioxidante y garantía completa.`,
      sellerDescription: 'Mandiri Steel es especialista en herrería premium y fabricación de estructuras de acero a medida en Bekasi. Entregando marquesinas, portones, pasamanos y construcciones de metal duraderas desde 1999.'
    },
    fr: {
      home: 'Accueil',
      shop: 'Boutique',
      allProduct: 'Tous les Produits',
      categories: 'Catégories',
      price: 'Prix',
      clearAll: 'Tout Effacer',
      filters: 'Filtres',
      sortBy: 'Trier par',
      default: 'Par Défaut',
      priceLow: 'Prix: Croissant',
      priceHigh: 'Prix: Décroissant',
      showing: 'Affichage',
      of: 'sur',
      results: 'résultats',
      prev: 'Précédent',
      next: 'Suivant',
      page: 'Page',
      pageTitle: 'Catalogue de Ferronnerie et Métallurgie sur Mesure - Mandiri Steel Bekasi',
      metaDescription: 'Consultez le catalogue complet de nos prestations de ferronnerie et de charpente métallique sur mesure par Mandiri Steel Bekasi : auvents, portails, garde-corps, grilles, acier inoxydable et structures.',
      metaKeywords: 'catalogue ferronnerie, métallurgie sur mesure, pose auvent bekasi, portails grilles en fer, grilles de sécurité fenêtres, garde-corps escalier, charpente métallique, mandiri steel',
      ogTitle: 'Catalogue de Ferronnerie et Soudure Professionnelle - Mandiri Steel Bekasi',
      ogDescription: 'Prestations haut de gamme d\'auvents, portails, clôtures, grilles et charpentes métalliques sur mesure avec garantie décennale officielle de Mandiri Steel Bekasi.',
      twitterTitle: 'Ferronnerie et Charpente Métallique - Catalogue Mandiri Steel',
      twitterDescription: 'Découvrez des solutions de ferronnerie sur mesure et de structures métalliques de qualité supérieure pour espaces résidentiels et professionnels à Bekasi.',
      collectionName: 'Catalogue d\'Ouvrages Métalliques Mandiri Steel',
      collectionDescription: 'Découvrez le catalogue complet d\'ouvrages métalliques sur mesure et de soudure professionnelle par Mandiri Steel Bekasi. Au service du Grand Jakarta depuis 1999.',
      productDescription: (name: string) => `Conception et pose premium sur mesure de ${name} par Mandiri Steel Bekasi. Fabriqué en acier de forte épaisseur, avec peinture antirouille et garantie totale.`,
      sellerDescription: 'Mandiri Steel est le spécialiste de la ferronnerie premium et de la charpente métallique sur mesure à Bekasi. Réalisation d\'auvents, portails, escaliers et structures robustes depuis 1999.'
    },
    ko: {
      home: '홈',
      shop: '쇼핑',
      allProduct: '모든 제품',
      categories: '카테고리',
      price: '가격',
      clearAll: '모두 지우기',
      filters: '필터',
      sortBy: '정렬',
      default: '기본',
      priceLow: '가격: 낮은순',
      priceHigh: '가격: 높은순',
      showing: '표시 중',
      of: '/',
      results: '개',
      prev: '이전',
      next: '다음',
      page: '페이지',
      pageTitle: '맞춤형 금속 가공 및 용접 서비스 카탈로그 - Mandiri Steel Bekasi',
      metaDescription: '베카시 Mandiri Steel의 맞춤형 철골 구조물 제작 및 용접 서비스 종합 카탈로그를 확인해 보세요. 캐노피, 대문, 방범창, 난간, 스테인리스 스틸 및 대형 구조물 제작 지원.',
      metaKeywords: '용접 서비스 카탈로그, 맞춤 금속 가공, 베카시 캐노피 설치, 철제 대문 펜스, 창문 방범창, 계단 난간, 철골 구조 전문 업체, Mandiri Steel',
      ogTitle: '용접 및 금속 구조물 제작 카탈로그 - Mandiri Steel Bekasi',
      ogDescription: 'Mandiri Steel Bekasi의 프리미엄 캐노피, 대문, 펜스, 방범창 및 철골 구조물 제작 서비스에 대한 공식 보증서가 포함된 종합 카탈로그.',
      twitterTitle: '금속 제작 및 용접 공사 카탈로그 - Mandiri Steel',
      twitterDescription: '베카시 지역의 주택 및 상업용 공간을 위한 최고 품질의 맞춤형 금속 구조물 제작 및 전문 용접 솔루션.',
      collectionName: 'Mandiri Steel 맞춤형 금속 제품 카탈로그',
      collectionDescription: '베카시 Mandiri Steel이 제공하는 맞춤형 금속 제품 및 전문 용접 서비스의 전체 카탈로그. 1999년부터 자코데타벡 지역 지원.',
      productDescription: (name: string) => `Mandiri Steel Bekasi가 제공하는 최고급 맞춤형 ${name} 설계 및 시공. 두꺼운 프레임 구조 강재 사용, 확실한 방청 마감 및 완벽한 품질 보증 제공.`,
      sellerDescription: 'Mandiri Steel은 베카시의 프리미엄 용접 및 맞춤형 철강 구조물 제작 전문 기업입니다. 1999년부터 내구성이 뛰어난 캐노피, 대문, 난간 및 건설 철골 구조물을 전문 시공해 왔습니다.'
    }
  }

  const t = shopTranslations[language] || shopTranslations.en

  const breadcrumbItems = [
    { label: t.home, path: '/' },
    { label: t.shop, path: '/shop' }
  ]

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="product-category-page shop-page-layout">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`shop-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t.twitterTitle} />
        <meta name="twitter:description" content={t.twitterDescription} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": t.collectionName,
            "description": t.collectionDescription,
            "url": "https://lasbekasi.com/shop",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ALL_PRODUCTS.length,
              "itemListElement": ALL_PRODUCTS.map((product, index) => {
                const imageUrl = getProductImageUrl(product.image, product.slug)
                const priceNumeric = product.price.replace(/[^\d]/g, '')
                const description = t.productDescription(product.name)

                return {
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": product.name,
                    "description": description,
                    "url": `https://lasbekasi.com/product/${product.slug}`,
                    "image": imageUrl,
                    "brand": {
                      "@type": "Brand",
                      "name": "Mandiri Steel"
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": priceNumeric,
                      "priceCurrency": "IDR",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31",
                      "url": `https://lasbekasi.com/product/${product.slug}`,
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 30,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn",
                        "applicableCountry": "ID"
                      },
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingRate": {
                          "@type": "MonetaryAmount",
                          "value": "0",
                          "currency": "IDR"
                        },
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "ID"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "businessDays": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                          },
                          "cutoffTime": "14:00",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 3,
                            "maxValue": 5,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "seller": {
                        "@type": "Organization",
                        "name": "Mandiri Steel",
                        "url": "https://lasbekasi.com",
                        "logo": "https://lasbekasi.com/logo.png",
                        "image": "https://lasbekasi.com/og-image.jpg",
                        "description": t.sellerDescription
                      }
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "127",
                      "reviewCount": "127",
                      "bestRating": "5",
                      "worstRating": "1"
                    }
                  }
                }
              })
            }
          })}
        </script>

        {/* Merchant Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateMerchantStructuredData())}
        </script>
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />
      <CurrencyHighlight isIndonesian={isIndonesian} language={language} />

      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="category-page-title">{t.allProduct}</h1>

          {/* Mobile Filter Toggle */}
          <div className="mobile-filter-toggle">
            <button
              className="filter-toggle-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span>{t.filters}</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="shop-layout">
            {/* Sidebar */}
            <aside className={`shop-sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <div className="filter-section">
                <h3 className="filter-title">{t.categories}</h3>
                <div className="filter-options">
                  {CATEGORIES.map(category => (
                    <label key={category} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span>{translateCategories([category], language)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">{t.price}</h3>
                <div className="price-range">
                  <div className="dual-range-slider">
                    <input
                      type="range"
                      min="0"
                      max="60000000"
                      step="100000"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="price-slider price-slider-min"
                    />
                    <input
                      type="range"
                      min="0"
                      max="60000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="price-slider price-slider-max"
                    />
                  </div>
                  <div className="price-labels">
                    <span>Rp{priceRange[0].toLocaleString('id-ID')}</span>
                    <span>Rp{priceRange[1].toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>

              <button className="clear-filters-btn" onClick={clearFilters}>
                {t.clearAll}
              </button>
            </aside>

            {/* Main Content */}
            <div className="shop-content">
              <div className="category-controls">
                <p className="showing-results">
                  {t.showing} {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} {t.of} {filteredAndSortedProducts.length} {t.results}
                </p>

                <div className="sort-dropdown">
                  <button
                    className="sort-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {t.sortBy}: {sortBy === 'default' ? t.default : sortBy === 'price-low' ? t.priceLow : t.priceHigh}
                    <ChevronDown size={16} />
                  </button>

                  {isDropdownOpen && (
                    <div className="sort-options">
                      <button onClick={() => { setSortBy('default'); setIsDropdownOpen(false); }}>{t.default}</button>
                      <button onClick={() => { setSortBy('price-low'); setIsDropdownOpen(false); }}>{t.priceLow}</button>
                      <button onClick={() => { setSortBy('price-high'); setIsDropdownOpen(false); }}>{t.priceHigh}</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="category-products-grid">
                {currentProducts.map((product) => {
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
                          alt={`${translatedName} - Jasa Bengkel Las Mandiri Steel Bekasi`}
                          title={`${translatedName} - Custom Steel Fabrication Mandiri Steel`}
                          loading="lazy"
                          width="300"
                          height="200"
                          itemProp="image"
                          data-image-type="shop-product"
                          data-product-name={translatedName}
                          data-product-slug={product.slug}
                          data-category={product.categories.join(',')}
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-btn pagination-prev"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    {t.prev}
                  </button>

                  {getPaginationRange().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">&hellip;</span>
                    ) : (
                      <button
                        key={page}
                        className={`pagination-btn pagination-number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page as number)}
                      >
                        {t.page} {page}
                      </button>
                    )
                  ))}

                  <button
                    className="pagination-btn pagination-next"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    {t.next}
                  </button>
                </div>
              )}

              {/* AI-Optimized Content for Shop Page */}
              <CategoryAIContent
                category="All Products"
                productCount={ALL_PRODUCTS.length}
                isIndonesian={isIndonesian}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default Shop

