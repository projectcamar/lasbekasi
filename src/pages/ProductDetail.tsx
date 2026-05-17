import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { X, Play } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailAIContent from '../components/ProductDetailAIContent'
import { ALL_PRODUCTS } from '../data/products'
import { ALL_PRODUCT_TRANSLATIONS } from '../data/productTranslations'
import { PRODUCT_DESCRIPTIONS, getProductDescription, getProductImageAlt, getProductImageCaption, getProductName } from '../data/productDescriptions'
import { generateLanguageSpecificMeta, generateLocalizedUrls, getProductImageUrl, truncateTitle, truncateMetaDescription } from '../utils/seo'
import { DEFAULT_IMAGE_RIGHTS_METADATA } from '../utils/structuredData'
import { sendBackgroundEmail } from '../utils/emailHelpers'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { getCategorySlug } from '../utils/categoryHelpers'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import './ProductDetail.css'

interface ProductDetail {
  id: number
  slug: string
  name: string
  categories: string[]
  price: string
  images: string[]
  details: string
  description: string
  video?: string
  variants?: { name: string, price: string, dimensions?: string }[]
}

// Generate product description
// Helper to get localized product description from modular translations
const getLocalizedProductDescription = (slug: string, language: LanguageCode, defaultName: string) => {
  const t = ALL_PRODUCT_TRANSLATIONS[language] || ALL_PRODUCT_TRANSLATIONS.en
  return t[slug]?.description || `Jasa pembuatan ${defaultName} berkualitas tinggi dari Mandiri Steel.`
}

// Generate product details based on categories
const generateProductDetails = (categories: string[]) => {
  const details: string[] = []

  if (categories.some(c => c.toLowerCase() === 'kanopi')) {
    details.push('Bahan Anti Karat Premium')
    details.push('Garansi Kebocoran & Struktur')
    details.push('Pengerjaan Rapi & Presisi')
  }

  if (categories.some(c => c.toLowerCase() === 'pagar')) {
    details.push('Besi Tebal Standar SNI')
    details.push('Cat Finishing Anti Karat')
    details.push('Desain Kustom Elegan')
  }

  if (categories.some(c => c.toLowerCase() === 'konstruksi')) {
    details.push('Baja WF / H-Beam Standar SNI')
    details.push('Kekuatan Struktur Maksimal')
    details.push('Tim Konstruksi Profesional')
  }

  if (details.length === 0) {
    details.push('Bahan Berkualitas Standar SNI')
    details.push('Garansi Pekerjaan & Struktur')
    details.push('Harga Terjangkau & Bersaing')
    details.push('Pengerjaan Cepat & Rapi')
  }

  return details.join(', ')
}

const DETAIL_FEATURE_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Bahan Anti Karat Premium': {
    id: 'Bahan Anti Karat Premium',
    en: 'Premium Anti-Rust Materials',
    ar: 'مواد ممتازة مضادة للصدأ',
    zh: '优质防锈材料',
    ja: 'プレミアム防錆素材',
    es: 'Materiales antioxidantes premium',
    fr: 'Matériaux antirouille haut de gamme',
    ko: '프리미엄 방청 소재'
  },
  'Garansi Kebocoran & Struktur': {
    id: 'Garansi Kebocoran & Struktur',
    en: 'Leak & Structural Warranty',
    ar: 'ضمان التسرب والهيكل',
    zh: '防漏与结构保修',
    ja: '漏水＆構造保証',
    es: 'Garantía estructural y contra filtraciones',
    fr: 'Garantie décennale fuite & structure',
    ko: '누수 및 구조적 보증'
  },
  'Pengerjaan Rapi & Presisi': {
    id: 'Pengerjaan Rapi & Presisi',
    en: 'Neat & Precise Workmanship',
    ar: 'صنع أنيق ودقيق',
    zh: '精细与精准的工艺',
    ja: '丁寧で精密な仕上がり',
    es: 'Mano de obra pulcra y precisa',
    fr: 'Finition soignée & précise',
    ko: '깔끔하고 정밀한 작업 공정'
  },
  'Besi Tebal Standar SNI': {
    id: 'Besi Tebal Standar SNI',
    en: 'Thick Steel with SNI Standards',
    ar: 'حديد سميك بمعايير SNI',
    zh: '符合印尼国家标准（SNI）的厚钢材',
    ja: 'SNI規格の厚手のスチール',
    es: 'Acero grueso con estándares SNI',
    fr: 'Acier épais aux normes SNI',
    ko: 'SNI 규격의 두꺼운 철강재'
  },
  'Cat Finishing Anti Karat': {
    id: 'Cat Finishing Anti Karat',
    en: 'Anti-Rust Paint Finishing',
    ar: 'طلاء نهائي مضاد للصدأ',
    zh: '防锈漆面处理',
    ja: '防錆塗装仕上げ',
    es: 'Pintura de acabado antioxidante',
    fr: 'Finition peinture antirouille',
    ko: '방청 도장 마감'
  },
  'Desain Kustom Elegan': {
    id: 'Desain Kustom Elegan',
    en: 'Elegant Custom Designs',
    ar: 'تصاميم مخصصة أنيقة',
    zh: '优雅的定制设计',
    ja: 'エレガントなカスタムデザイン',
    es: 'Diseños personalizados elegantes',
    fr: 'Modèles personnalisés élégants',
    ko: '우아한 맞춤형 디자인'
  },
  'Baja WF / H-Beam Standar SNI': {
    id: 'Baja WF / H-Beam Standar SNI',
    en: 'WF Steel / H-Beam SNI Standard',
    ar: 'فولاذ WF / H-Beam معايير SNI',
    zh: '符合印尼标准（SNI）的 WF 钢 / H型钢',
    ja: 'SNI規格のWF鋼 / H形鋼',
    es: 'Acero WF / H-Beam estándar SNI',
    fr: 'Acier WF / H-Beam aux normes SNI',
    ko: 'SNI 규격의 WF강 / H빔'
  },
  'Kekuatan Struktur Maksimal': {
    id: 'Kekuatan Struktur Maksimal',
    en: 'Maximum Structural Strength',
    ar: 'أقصى قوة هيكلية',
    zh: '最大结构强度',
    ja: '最大限の構造強度',
    es: 'Fuerza estructural máxima',
    fr: 'Résistance structurelle maximale',
    ko: '극대화된 구조적 강도'
  },
  'Tim Konstruksi Profesional': {
    id: 'Tim Konstruksi Profesional',
    en: 'Professional Construction Team',
    ar: 'فريق بناء محترف',
    zh: '专业施工团队',
    ja: 'プロの施工チーム',
    es: 'Equipo de construcción profesional',
    fr: 'Équipe de pose professionnelle',
    ko: '전문 시공 기술팀'
  },
  'Bahan Berkualitas Standar SNI': {
    id: 'Bahan Berkualitas Standar SNI',
    en: 'Quality Materials with SNI Standards',
    ar: 'مواد عالية الجودة بمعايير SNI',
    zh: '高品质国标（SNI）材料',
    ja: 'SNI規格の高品質素材',
    es: 'Materiales de calidad con estándares SNI',
    fr: 'Matériaux de qualité aux normes SNI',
    ko: 'SNI 규격의 고품질 소재'
  },
  'Garansi Pekerjaan & Struktur': {
    id: 'Garansi Pekerjaan & Struktur',
    en: 'Workmanship & Structural Warranty',
    ar: 'ضمان الصنع والهيكل',
    zh: '工艺与结构保修',
    ja: '施工および構造保証',
    es: 'Garantía estructural y de mano de obra',
    fr: 'Garantie de structure et de finition',
    ko: '시공 및 구조적 품질 보증'
  },
  'Harga Terjangkau & Bersaing': {
    id: 'Harga Terjangkau & Bersaing',
    en: 'Affordable & Competitive Pricing',
    ar: 'أسعار معقولة ومنافسة',
    zh: '实惠且有竞争力的价格',
    ja: '手頃で競争力のある価格',
    es: 'Precios asequibles y competitivos',
    fr: 'Tarifs abordables & compétitifs',
    ko: '합리적이고 경쟁력 있는 가격'
  },
  'Pengerjaan Cepat & Rapi': {
    id: 'Pengerjaan Cepat & Rapi',
    en: 'Fast & Clean Execution',
    ar: 'تنفيذ سريع ونظيف',
    zh: '快速且整洁的执行',
    ja: '迅速で丁寧な施工',
    es: 'Ejecución rápida y limpia',
    fr: 'Exécution rapide & propre',
    ko: '신속하고 깔끔한 마감'
  }
}

const UI_TRANSLATIONS: Record<
  LanguageCode,
  {
    priceNote: string
    orderNow: string
    productDetails: string
    about: string
    youMightBeInterested: string
    clickToConvertUsd: string
    clickToConvertIdr: string
    loading: string
    productNotFound: string
    browseAllProducts: string
    home: string
    priceLabel: string
    priceLabelUsd: string
    priceLabelIdr: string
    selectSize: string
    dimensions: string
  }
> = {
  id: {
    priceNote: '*Harga dapat bervariasi berdasarkan dimensi dan kustomisasi',
    orderNow: 'PESAN SEKARANG',
    productDetails: 'Detail Produk',
    about: 'Tentang',
    youMightBeInterested: 'Anda Mungkin Tertarik',
    clickToConvertUsd: 'Klik untuk konversi ke USD',
    clickToConvertIdr: 'Klik untuk kembali ke IDR',
    loading: 'Memuat...',
    productNotFound: 'Produk tidak ditemukan',
    browseAllProducts: 'Lihat semua produk',
    home: 'Beranda',
    priceLabel: 'Harga Mulai',
    priceLabelUsd: 'Harga USD',
    priceLabelIdr: 'Harga IDR',
    selectSize: 'Pilih Ukuran / Harga:',
    dimensions: 'Dimensi:'
  },
  en: {
    priceNote: '*Price may vary based on dimensions and customization',
    orderNow: 'ORDER NOW',
    productDetails: 'Product Details',
    about: 'About',
    youMightBeInterested: 'You Might be Interested',
    clickToConvertUsd: 'Click to convert to USD',
    clickToConvertIdr: 'Click to convert back to IDR',
    loading: 'Loading...',
    productNotFound: 'Product not found',
    browseAllProducts: 'Browse all products',
    home: 'Home',
    priceLabel: 'Starting Price',
    priceLabelUsd: 'Price (USD)',
    priceLabelIdr: 'Price (IDR)',
    selectSize: 'Select Size / Price:',
    dimensions: 'Dimensions:'
  },
  ar: {
    priceNote: '*قد يختلف السعر بناءً على المقاس والتخصيص',
    orderNow: 'اطلب الآن',
    productDetails: 'مواصفات المنتج',
    about: 'نبذة عن',
    youMightBeInterested: 'قد يهمك أيضًا',
    clickToConvertUsd: 'اضغط للتحويل إلى الدولار الأمريكي',
    clickToConvertIdr: 'اضغط للعودة إلى الروبية الإندونيسية',
    loading: 'جارٍ التحميل...',
    productNotFound: 'المنتج غير موجود',
    browseAllProducts: 'تصفح جميع المنتجات',
    home: 'الصفحة الرئيسية',
    priceLabel: 'يبدأ السعر من',
    priceLabelUsd: 'السعر (دولار أمريكي)',
    priceLabelIdr: 'السعر (روبية إندونيسية)',
    selectSize: 'اختر المقاس / السعر:',
    dimensions: 'الأبعاد:'
  },
  zh: {
    priceNote: '*价格可能会因尺寸和定制而有所变化',
    orderNow: '立即下单',
    productDetails: '产品详情',
    about: '关于',
    youMightBeInterested: '您可能感兴趣',
    clickToConvertUsd: '点击转换为美元',
    clickToConvertIdr: '点击切换回印尼盾',
    loading: '加载中...',
    productNotFound: '未找到产品',
    browseAllProducts: '查看所有产品',
    home: '首页',
    priceLabel: '起步价格',
    priceLabelUsd: '价格 (美元)',
    priceLabelIdr: '价格 (印尼盾)',
    selectSize: '选择尺寸 / 价格:',
    dimensions: '尺寸:'
  },
  ja: {
    priceNote: '※サイズやカスタマイズ内容により価格が変動します',
    orderNow: '今すぐ注文',
    productDetails: '商品詳細',
    about: 'について',
    youMightBeInterested: 'こちらもおすすめ',
    clickToConvertUsd: 'クリックしてUSDに変換',
    clickToConvertIdr: 'クリックしてIDRに戻す',
    loading: '読み込み中...',
    productNotFound: '商品が見つかりません',
    browseAllProducts: 'すべての商品を見る',
    home: 'ホーム',
    priceLabel: '初期価格',
    priceLabelUsd: '価格（USD）',
    priceLabelIdr: '価格（IDR）',
    selectSize: 'サイズ / 価格を選択:',
    dimensions: 'サイズ:'
  },
スペイン语: {
    priceNote: '*El precio puede variar según las dimensiones y la personalización',
    orderNow: 'ORDENAR AHORA',
    productDetails: 'Detalles del Producto',
    about: 'Acerca de',
    youMightBeInterested: 'También te puede interesar',
    clickToConvertUsd: 'Haz clic para convertir a USD',
    clickToConvertIdr: 'Haz clic para volver a IDR',
    loading: 'Cargando...',
    productNotFound: 'Producto no encontrado',
    browseAllProducts: 'Ver todos los productos',
    home: 'Inicio',
    priceLabel: 'Precio inicial',
    priceLabelUsd: 'Precio (USD)',
    priceLabelIdr: 'Precio (IDR)',
    selectSize: 'Seleccionar tamaño / precio:',
    dimensions: 'Dimensiones:'
  },
  fr: {
    priceNote: '*Le prix peut varier en fonction des dimensions et de la personnalisation',
    orderNow: 'COMMANDER',
    productDetails: 'Détails du produit',
    about: 'À propos de',
    youMightBeInterested: 'Vous pourriez être intéressé',
    clickToConvertUsd: 'Cliquez pour convertir en USD',
    clickToConvertIdr: 'Cliquez pour revenir en IDR',
    loading: 'Chargement...',
    productNotFound: 'Produit introuvable',
    browseAllProducts: 'Voir tous les produits',
    home: 'Accueil',
    priceLabel: 'Prix de départ',
    priceLabelUsd: 'Prix (USD)',
    priceLabelIdr: 'Prix (IDR)',
    selectSize: 'Choisir la taille / le prix :',
    dimensions: 'Dimensions :'
  },
  ko: {
    priceNote: '*규격 및 맞춤 제작에 따라 가격이 달라질 수 있습니다',
    orderNow: '지금 주문하기',
    productDetails: '제품 상세정보',
    about: '소개',
    youMightBeInterested: '이 제품도 추천합니다',
    clickToConvertUsd: '클릭하여 USD로 변환',
    clickToConvertIdr: '클릭하여 IDR로 전환',
    loading: '로딩 중...',
    productNotFound: '상품을 찾을 수 없습니다',
    browseAllProducts: '전체 상품 보기',
    home: '홈',
    priceLabel: '시작 가격',
    priceLabelUsd: '가격 (USD)',
    priceLabelIdr: '가격 (IDR)',
    selectSize: '크기 / 가격 선택:',
    dimensions: '치수:'
  }
}

// Fallback logic for Spanish translation due to uppercase issue
UI_TRANSLATIONS['es'] = UI_TRANSLATIONS['es'] || UI_TRANSLATIONS['id'];

const OG_LOCALES = ['id_ID', 'en_US', 'ar_SA', 'zh_CN', 'ja_JP', 'es_ES', 'fr_FR', 'ko_KR'] as const

const formatPriceBlock = (language: LanguageCode, priceIDR: string, priceUSD?: string | null) => {
  const t = UI_TRANSLATIONS[language] ?? UI_TRANSLATIONS.en
  if (priceUSD) {
    if (language === 'id') {
      return `${t.priceLabel}: ${priceIDR}\n${t.priceLabelUsd}: ${priceUSD}`
    }
    return `${t.priceLabelUsd}: ${priceUSD}\n${t.priceLabelIdr}: ${priceIDR}`
  }
  const label = language === 'id' ? t.priceLabel : t.priceLabelIdr
  return `${label}: ${priceIDR}`
}

const getWhatsappMessage = (
  language: LanguageCode,
  params: {
    productName: string
    categories: string
    priceIDR: string
    priceUSD?: string | null
    url: string
  }
) => {
  const { productName, categories, priceIDR, priceUSD, url } = params
  const priceBlock = formatPriceBlock(language, priceIDR, priceUSD)

  switch (language) {
    case 'id':
      return `Halo Bengkel Las Mandiri,

Saya tertarik dengan produk:
*${productName}*

Kategori: ${categories}
${priceBlock}

Link Produk: ${url}

Mohon informasi lebih lanjut mengenai penjadwalan survey lokasi dan estimasi biaya pemasangannya.

Terima kasih!`
    case 'ar':
      return `مرحباً Bengkel Las Mandiri،

أنا مهتم بالمنتج:
*${productName}*

الفئة: ${categories}
${priceBlock}

رابط المنتج: ${url}

يرجى تزويدي بمزيد من المعلومات وطريقة الطلب.

شكراً لكم!`
    case 'zh':
      return `您好 Bengkel Las Mandiri，

我对以下产品感兴趣：
*${productName}*

类别：${categories}
${priceBlock}

产品链接：${url}

请提供更多信息和订购方式。

谢谢！`
    case 'ja':
      return `Bengkel Las Mandiri 様

こちらの製品に興味があります：
*${productName}*

カテゴリー：${categories}
${priceBlock}

製品リンク：${url}

詳細情報と注文方法を教えてください。

よろしくお願いいたします。`
    case 'es':
      return `Hola Bengkel Las Mandiri,

Estoy interesado en el producto:
*${productName}*

Categoría: ${categories}
${priceBlock}

Enlace del producto: ${url}

Por favor envíenme más información y cómo realizar el pedido.

¡Gracias!`
    case 'fr':
      return `Bonjour Bengkel Las Mandiri,

Je suis intéressé par le produit :
*${productName}*

Catégorie : ${categories}
${priceBlock}

Lien du produit : ${url}

Merci de me communiquer plus d'informations et la procédure de commande.

Merci !`
    case 'ko':
      return `안녕하세요 Bengkel Las Mandiri,

다음 제품에 관심이 있습니다:
*${productName}*

카테고리: ${categories}
${priceBlock}

제품 링크: ${url}

자세한 정보와 주문 방법을 알려주세요.

감사합니다!`
    case 'en':
    default:
      return `Hello Bengkel Las Mandiri,

I'm interested in the product:
*${productName}*

Category: ${categories}
${priceBlock}

Product Link: ${url}

Please provide more information and how to order.

Thank you!`
  }
}

// Create product details from ALL_PRODUCTS
const products: { [key: string]: ProductDetail } = {}
ALL_PRODUCTS.forEach(p => {
  const baseImage = p.image
  const secondaryImage = p.image
  const videoOrFallback = p.video || p.image

  products[p.slug] = {
    id: p.id,
    slug: p.slug,
    name: p.name,
    categories: p.categories,
    price: p.price,
    images: [baseImage, secondaryImage, videoOrFallback],
    details: generateProductDetails(p.categories),
    description: getLocalizedProductDescription(p.slug, 'en', p.name),
    video: p.video,
    variants: p.variants
  } as ProductDetail
})

// Related products - random 4 products
const getRelatedProducts = (currentSlug: string) => {
  return ALL_PRODUCTS
    .filter(p => p.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map(p => ({
      slug: p.slug,
      name: p.name,
      category: p.categories[0],
      price: p.price,
      image: p.image
    }))
}

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

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const product = products[slug || '']

  const [selectedImage, setSelectedImage] = useState(0)
  const [language, setLanguage] = useState<LanguageCode>('id')
  const [isLoading, setIsLoading] = useState(true)
  const [usdPrice, setUsdPrice] = useState<string | null>(null)
  const [highlightedPrice, setHighlightedPrice] = useState<string | null>(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0)

  const currentPrice = product?.variants && product.variants[selectedVariantIndex]
    ? product.variants[selectedVariantIndex].price
    : product?.price || ''

  const currentDimensions = product?.variants && product.variants[selectedVariantIndex]
    ? product.variants[selectedVariantIndex].dimensions
    : null

  const isIndonesian = language === 'id'
  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  // Language detection - instant, no async needed!
  useEffect(() => {
    const detectedLanguage = getCurrentLanguage(location.pathname, location.search)
    setLanguage(prev => (prev === detectedLanguage ? prev : detectedLanguage))
    setIsLoading(false)
  }, [location.pathname, location.search])

  // Convert price to USD and highlighted currency based on language
  useEffect(() => {
    const convertPrice = async () => {
      if (product) {
        // Always convert to USD
        const usdConverted = await convertIDRToUSD(currentPrice)
        setUsdPrice(usdConverted)

        const targetCurrency = LANGUAGE_CURRENCY_MAP[language]

        if (language === 'id') {
          // Indonesian: highlight IDR, show USD as secondary
          setHighlightedPrice(currentPrice)
        } else if (targetCurrency && targetCurrency !== 'USD') {
          // Other languages with specific local currency highlight
          const highlightedConverted = await convertIDRToCurrency(currentPrice, targetCurrency)
          setHighlightedPrice(highlightedConverted)
        } else {
          // Fallback: highlight USD
          setHighlightedPrice(usdConverted)
        }
      }
    }
    convertPrice()
  }, [product, language, currentPrice])

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Localized related products (name + prices aligned with language)
  // MUST be declared BEFORE early returns to follow Rules of Hooks
  const [localizedRelated, setLocalizedRelated] = useState<Array<{
    slug: string
    image: string
    name: string
    category: string
    pricePrimary: string
    priceSecondary?: string | null
  }>>([])

  // Memoize related products to prevent infinite loop - only recalculate when slug changes
  const relatedProducts = useMemo(() => {
    if (!slug) return []
    return getRelatedProducts(slug)
  }, [slug])

  useEffect(() => {
    if (!product || !slug || relatedProducts.length === 0) return

    const buildLocalizedRelated = async () => {
      const targetCurrency = LANGUAGE_CURRENCY_MAP[language]

      const items = await Promise.all(relatedProducts.map(async (relatedProduct) => {
        // Localized name from descriptions if available
        const desc = getProductDescription(relatedProduct.slug, language)
        const nameLocalized = desc ? (getProductName(relatedProduct.slug, language) || relatedProduct.name) : relatedProduct.name

        // Currency conversion aligned with main product rules
        const usdConverted = await convertIDRToUSD(relatedProduct.price)
        let primary = usdConverted
        let secondary: string | null = null

        if (targetCurrency && targetCurrency !== 'USD') {
          const highlightedConverted = await convertIDRToCurrency(relatedProduct.price, targetCurrency)
          primary = highlightedConverted
          secondary = usdConverted
        } else {
          // For en/id, USD is primary; keep IDR as secondary for extra context
          secondary = relatedProduct.price
        }

        return {
          slug: relatedProduct.slug,
          image: relatedProduct.image,
          name: nameLocalized,
          category: relatedProduct.category,
          pricePrimary: primary,
          priceSecondary: secondary
        }
      }))

      setLocalizedRelated(items)
    }

    buildLocalizedRelated()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, slug])

  // Translations
  const uiTranslations = UI_TRANSLATIONS[language] ?? UI_TRANSLATIONS.en

  // Translate product details based on language
  const translateProductDetails = (details: string): string => {
    if (!details) return details
    const tokens = details.split(',').map(item => item.trim()).filter(Boolean)
    const localizedTokens = tokens.map(token => {
      const translationMap = DETAIL_FEATURE_TRANSLATIONS[token]
      if (translationMap) {
        return translationMap[language] ?? translationMap.en ?? token
      }
      return token
    })
    return localizedTokens.join(', ')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="product-detail-page">
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

  // Redirect to NotFound page if product doesn't exist to prevent Soft 404
  if (!product) {
    return <Navigate to="/404-not-found" replace />
  }

  // Get translated product name and description
  const productTranslations = PRODUCT_DESCRIPTIONS[product.slug]
  const translatedProductName = productTranslations
    ? getProductName(product.slug, language)
    : product.name
  const translatedDescription = productTranslations
    ? (productTranslations[language]?.description || productTranslations.en.description)
    : product.description

  // Build breadcrumb with proper category slug mapping
  const primaryCategory = product.categories[0]
  const categorySlug = getCategorySlug(primaryCategory)
  const breadcrumbItems = [
    { label: uiTranslations.home, path: '/' },
    { label: primaryCategory, path: `/product-category/${categorySlug}` },
    { label: translatedProductName, path: `/product/${product.slug}` }
  ]

  // Generate structured data for the product
  const generateStructuredData = () => {
    const price = product.price.replace(/[^\d]/g, '') // Extract numeric price
    const numericPrice = parseInt(price) || 0
    // Convert all images to full URLs
    const imageUrls = product.images.map((img: string) => getProductImageUrl(img, product.slug))

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": translatedProductName,
      "description": translatedDescription,
      "image": imageUrls,
      "brand": {
        "@type": "Brand",
        "name": "Mandiri Steel"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Bengkel Las Mandiri",
        "url": "https://lasbekasi.com",
        "logo": "https://lasbekasi.com/logo.png",
        "image": "https://lasbekasi.com/og-image.jpg"
      },
      "category": product.categories.join(", "),
      "sku": product.slug,
      "mpn": `ML-${product.id}`,
      "offers": {
        "@type": "Offer",
        "price": numericPrice,
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
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
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
          "name": "Bengkel Las Mandiri",
          "url": "https://lasbekasi.com",
          "logo": "https://lasbekasi.com/logo.png",
          "description": "Spesialis jasa pembuatan kanopi minimalis, pagar besi, teralis, railing tangga, dan konstruksi baja berkualitas tinggi di Bekasi.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Raya Setu Cibitung.",
            "addressLocality": "Bekasi",
            "addressRegion": "Jawa Barat",
            "postalCode": "17320",
            "addressCountry": "ID"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+6285212078467",
            "contactType": "customer service",
            "email": "info@lasbekasi.com",
            "availableLanguage": ["Indonesian", "English"]
          }
        },
        "url": `https://lasbekasi.com/product/${product.slug}`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "184",
        "reviewCount": "184",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Budi Hartono"
          },
          "datePublished": "2025-10-15",
          "reviewBody": "Sangat puas dengan pemasangan kanopi alderon di rumah saya. Rangka besi tebal dan kokoh, pengerjaan cepat dan sangat rapi. Harganya bersaing!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahmad R."
          },
          "datePublished": "2025-10-20",
          "reviewBody": "Hasil las pintu pagar besi minimalis sangat halus dan presisi. Dilapisi cat anti karat dengan rapi. Rekomended untuk area Bekasi.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Lisa K."
          },
          "datePublished": "2025-10-25",
          "reviewBody": "Layanan luar biasa dari Pak Maman. Survey lokasi gratis dan pengerjaan teralis jendela minimalis selesai tepat waktu.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ]
    }
  }

  return (
    <div className="product-detail-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{truncateTitle(`${translatedProductName} - Jasa Las Berkualitas - Mandiri Steel`)}</title>
        <meta name="description" content={truncateMetaDescription(
          (() => {
            const productTranslations = PRODUCT_DESCRIPTIONS[product.slug]
            return productTranslations ? (productTranslations[language]?.metaDescription || productTranslations.en.metaDescription) : `${product.name} - ${product.details}`
          })())} />
        <meta name="keywords" content={
          product.slug === 'kanopi-minimalis-alderon'
            ? 'jasa kanopi bekasi, kanopi minimalis alderon, pasang kanopi murah, bengkel las kanopi, mandiri steel kanopi'
            : product.slug === 'pagar-minimalis-modern'
              ? 'pagar besi minimalis, pagar modern bekasi, pembuatan pintu gerbang, bengkel las pagar besi, pagar rumah bekasi'
              : product.slug === 'konstruksi-baja-wf'
                ? 'konstruksi baja wf bekasi, pasang baja berat, jasa konstruksi h-beam, bengkel las konstruksi, struktur baja bekasi'
                : `${product.name}, Bengkel Las Bekasi, jasa las besi, ${product.categories.join(', ')}, Mandiri Steel`
        } />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`product-detail-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={`${translatedProductName} - Mandiri Steel`} />
        <meta property="og:description" content={`${translatedProductName} - ${translateProductDetails(product.details)}`} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content={localeMeta.locale} />
        {OG_LOCALES.filter(altLocale => altLocale !== localeMeta.locale).map((altLocale) => (
          <meta key={`product-detail-og-${altLocale}`} property="og:locale:alternate" content={altLocale} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${translatedProductName} - Mandiri Steel`} />
        <meta name="twitter:description" content={`${translatedProductName} - ${translateProductDetails(product.details)}`} />
        <meta name="twitter:image" content={product.images[0]} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>

        {/* ImageObject Structured Data for Image SEO */}
        {product.images.map((img, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "url": getProductImageUrl(img, product.slug),
              "contentUrl": getProductImageUrl(img, product.slug),
              "caption": `${translatedProductName} - Image ${index + 1} - ${isIndonesian ? 'jasa las kanopi pagar' : 'welding steel canopy gate'} ${product.categories.join(' ')} Mandiri Steel`,
              "description": `${translatedProductName} - ${isIndonesian ? 'jasa las dan konstruksi besi berkualitas dari' : 'premium welding and iron works from'} Mandiri Steel Workshop Bekasi - ${product.price}`,
              "width": 800,
              "height": 600,
              "creditText": "Mandiri Steel",
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Mandiri Steel"
              },
              ...DEFAULT_IMAGE_RIGHTS_METADATA,
              "publisher": {
                "@type": "Organization",
                "name": "Mandiri Steel",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://lasbekasi.com/logo.png",
                  ...DEFAULT_IMAGE_RIGHTS_METADATA
                }
              }
            })}
          </script>
        ))}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <main className="product-detail-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />

          <div className="product-detail-content">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="gallery-thumbnails">
                {product.images.map((image, index) => {
                  const isVideo = index === 2 && product.video
                  return (
                    <button
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View ${product.name} ${isVideo ? 'video' : 'image'} ${index + 1}`}
                      style={{ position: 'relative' }}
                    >
                      {isVideo ? (
                        <>
                          <video
                            src={image}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            muted
                            playsInline
                          />
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none'
                          }}>
                            <Play size={16} color="white" fill="white" />
                          </div>
                        </>
                      ) : (
                        <img
                          src={image}
                          alt={getProductImageAlt(product.slug, language) + (index > 0 ? ` - Image ${index + 1}` : '')}
                          title={getProductImageCaption(product.slug, language) + (index > 0 ? ` - View ${index + 1}` : '')}
                          loading={index === 0 ? "eager" : "lazy"}
                          width="100"
                          height="100"
                          itemProp="image"
                          data-image-type="product-thumbnail"
                          data-product-name={product.name}
                          data-image-index={index + 1}
                        />
                      )}
                    </button>
                  )
                })}
              </div>
              <div className="gallery-main" onClick={() => selectedImage === 2 && product.video ? null : setIsImageModalOpen(true)} style={{ cursor: 'pointer' }}>
                {selectedImage === 2 && product.video ? (
                  <video
                    src={product.images[selectedImage]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                  />
                ) : (
                  <img
                    src={product.images[selectedImage]}
                    alt={getProductImageAlt(product.slug, language)}
                    title={getProductImageCaption(product.slug, language)}
                    className={selectedImage === 1 ? 'flipped' : ''}
                    loading="eager"
                    fetchPriority="high"
                    width="800"
                    height="600"
                    itemProp="image"
                    data-image-type="product-main"
                    data-product-name={product.name}
                    data-product-slug={product.slug}
                    data-selected-index={selectedImage}
                  />
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <h1 className="product-detail-title">{translatedProductName}</h1>
              <p className="product-detail-categories">{product.categories.join(' & ')}</p>

              {/* Price with dual display - highlighted currency based on language, USD always non-highlighted */}
              <div className="product-price-wrapper">
                {usdPrice && highlightedPrice ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {/* Primary price - highlighted currency based on language */}
                    <p
                      className="product-detail-price"
                      style={{
                        margin: 0,
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#333'
                      }}
                    >
                      {highlightedPrice}
                    </p>
                    {/* Secondary price - contextual: ID shows USD; EN shows IDR; others show USD */}
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        color: '#999',
                        lineHeight: 1.2
                      }}
                    >
                      {language === 'id' ? usdPrice : language === 'en' ? product.price : usdPrice}
                    </p>
                  </div>
                ) : (
                  <p
                    className="product-detail-price"
                    style={{
                      margin: 0,
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#333'
                    }}
                  >
                    {product.price}
                  </p>
                )}
              </div>

              <p className="product-price-note">{uiTranslations.priceNote}</p>

              {/* Variant Selection */}
              {product.variants && product.variants.length > 0 && (
                <div className="variant-selection" style={{ marginBottom: '24px' }}>
                  <p style={{ fontWeight: 600, marginBottom: '12px', fontSize: '14px' }}>
                    {uiTranslations.selectSize}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.variants.map((variant: { name: string, price: string }, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariantIndex(index)}
                        style={{
                          padding: '10px 16px',
                          border: `1.5px solid ${selectedVariantIndex === index ? '#8B7355' : '#ddd'}`,
                          borderRadius: '6px',
                          background: selectedVariantIndex === index ? '#F9F7F4' : '#fff',
                          color: selectedVariantIndex === index ? '#8B7355' : '#666',
                          fontSize: '13px',
                          fontWeight: selectedVariantIndex === index ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="order-now-btn"
                onClick={() => {
                  // Send background email notification
                  sendBackgroundEmail('order_now', {
                    productName: translatedProductName,
                    productSlug: product.slug,
                    productPrice: product.price,
                    productCategory: product.categories.join(', '),
                    productUrl: window.location.href,
                  })

                  // Track WhatsApp click
                  trackWhatsAppClick('product_order_now', {
                    productName: translatedProductName,
                    productSlug: product.slug,
                    productPrice: currentPrice,
                    productCategory: product.categories.join(', '),
                    variant: currentDimensions || 'Standard'
                  })

                  const whatsappMessage = getWhatsappMessage(language, {
                    productName: `${translatedProductName}${currentDimensions ? ` (${currentDimensions})` : ''}`,
                    categories: product.categories.join(', '),
                    priceIDR: currentPrice,
                    priceUSD: usdPrice,
                    url: window.location.href
                  })

                  const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
                  window.location.href = whatsappUrl
                }}
              >
                {uiTranslations.orderNow}
              </button>

              <div className="product-details-box">
                <h3>{uiTranslations.productDetails}</h3>
                <div style={{ fontSize: '14px', color: '#555' }}>
                  {currentDimensions && (
                    <p style={{ marginBottom: '8px' }}>
                      <strong>{uiTranslations.dimensions} </strong>
                      {currentDimensions}
                    </p>
                  )}
                  <p>{translateProductDetails(product.details)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Product */}
          <div className="about-product-section">
            <h2>{uiTranslations.about} {translatedProductName}</h2>
            <div className="about-product-content">
              {translatedDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products-section">
            <h2>{uiTranslations.youMightBeInterested}</h2>
            <div className="related-products-grid">
              {localizedRelated.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  to={`/product/${relatedProduct.slug}`}
                  className="related-product-card"
                >
                  <div className="related-product-image">
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} - Related Jasa Las ${relatedProduct.category} Mandiri Steel`}
                      title={`${relatedProduct.name} - Premium Iron Works ${relatedProduct.category} by Mandiri Steel`}
                      loading="lazy"
                      width="300"
                      height="200"
                      itemProp="image"
                      data-image-type="related-product"
                      data-product-name={relatedProduct.name}
                      data-category={relatedProduct.category}
                    />
                  </div>
                  <div className="related-product-info">
                    <h3>{relatedProduct.name}</h3>
                    <p className="related-product-category">{relatedProduct.category}</p>
                    <p className="related-product-price" style={{ marginBottom: relatedProduct.priceSecondary ? 2 : 0 }}>
                      {relatedProduct.pricePrimary}
                    </p>
                    {relatedProduct.priceSecondary ? (
                      <p className="related-product-price" style={{ color: '#888', fontSize: '0.85rem', marginTop: 0 }}>
                        {relatedProduct.priceSecondary}
                      </p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI-Optimized Content for Search Engines */}
          <ProductDetailAIContent
            product={{
              name: translatedProductName,
              price: product.price,
              categories: product.categories,
              slug: product.slug
            }}
            isIndonesian={isIndonesian}
          />
        </div>
      </main>

      {/* Image Modal Popup */}
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={() => setIsImageModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setIsImageModalOpen(false)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={product.images[selectedImage]}
              alt={getProductImageAlt(product.slug, language)}
              title={getProductImageCaption(product.slug, language)}
              className={selectedImage === 1 ? 'flipped' : ''}
            />
            <div className="image-modal-title">{translatedProductName}</div>
          </div>
        </div>
      )}

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default ProductDetail
