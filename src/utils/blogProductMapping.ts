import type { Product } from '../data/products'
import { ALL_PRODUCTS } from '../data/products'

/**
 * Mapping keywords dari artikel blog ke produk yang relevan
 * Sistem ini akan mendeteksi keyword di title, slug, atau content artikel
 * dan menampilkan produk yang sesuai
 */
export interface ProductKeywordMapping {
  keywords: string[]  // Keyword yang muncul di artikel
  productIds: number[]  // ID produk yang relevan
  category?: string  // Kategori produk (optional)
}

// Mapping keyword artikel ke produk
const PRODUCT_KEYWORD_MAPPINGS: ProductKeywordMapping[] = [
  // KANOPI
  {
    keywords: ['kanopi', 'canopy', 'awning', 'atap', 'alderon', 'polikarbonat', 'spandek', 'kaca tempered'],
    productIds: [1, 2], // Kanopi Minimalis Alderon, Kanopi Kaca Tempered
    category: 'kanopi'
  },
  // PAGAR
  {
    keywords: ['pagar', 'fence', 'gate', 'gerbang', 'tempa', 'laser cutting', 'slat', 'pintu dorong'],
    productIds: [3, 4], // Pagar Minimalis Modern, Pagar Besi Tempa Klasik
    category: 'pagar'
  },
  // TERALIS
  {
    keywords: ['teralis', 'trellis', 'nako', 'jendela', 'pengaman', 'anti maling', 'grill'],
    productIds: [5], // Teralis Jendela Minimalis
    category: 'teralis'
  },
  // RAILING
  {
    keywords: ['railing', 'pegangan', 'tangga', 'balkon', 'balustrade', 'handrail'],
    productIds: [6], // Railing Tangga Minimalis
    category: 'railing'
  },
  // KONSTRUKSI
  {
    keywords: ['konstruksi', 'baja', 'wf', 'h-beam', 'rangka', 'gudang', 'pabrik', 'atap baja ringan'],
    productIds: [7], // Konstruksi Baja WF
    category: 'konstruksi'
  },
  // STAINLESS
  {
    keywords: ['stainless', 'sus 304', 'anti karat', 'stainless steel', 'pintu stainless'],
    productIds: [8], // Pintu Pagar Stainless Steel
    category: 'stainless'
  }
]

/**
 * Mendapatkan produk yang relevan berdasarkan artikel blog
 * @param slug - Slug artikel blog
 * @param title - Judul artikel
 * @param excerpt - Excerpt artikel (optional)
 * @returns Array produk yang relevan
 */
export const getRelevantProductsForBlog = (
  slug: string,
  title: string,
  excerpt?: string
): Product[] => {
  // Kombinasi semua teks untuk searching
  const searchText = `${slug} ${title} ${excerpt || ''}`.toLowerCase()

  // Collect semua product IDs yang relevan
  const relevantProductIds = new Set<number>()

  // Loop melalui setiap mapping
  for (const mapping of PRODUCT_KEYWORD_MAPPINGS) {
    // Cek apakah ada keyword yang match
    const hasKeyword = mapping.keywords.some(keyword => {
      const keywordLower = keyword.toLowerCase()
      return searchText.includes(keywordLower)
    })

    // Jika ada keyword match, tambahkan product IDs
    if (hasKeyword) {
      mapping.productIds.forEach(id => relevantProductIds.add(id))
    }
  }

  // Convert Set ke Array dan dapatkan produk
  const productIds = Array.from(relevantProductIds)

  if (productIds.length === 0) {
    // Fallback: tampilkan best sellers jika tidak ada match
    return ALL_PRODUCTS.slice(0, 6)
  }

  // Ambil produk berdasarkan IDs, maksimal 6 produk
  const products = productIds
    .map(id => ALL_PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 6)

  return products
}

/**
 * Mendapatkan heading yang relevan untuk showcase produk
 * @param slug - Slug artikel
 * @param title - Judul artikel
 * @param language - Kode bahasa (id, en, ar, etc.)
 * @returns Heading text untuk showcase section
 */
export const getProductShowcaseHeading = (
  slug: string,
  title: string,
  language: string = 'id'
): string => {
  const searchText = `${slug} ${title}`.toLowerCase()
  const lang = (language || 'id').toLowerCase()

  const translations: Record<string, {
    kanopi: string
    pagar: string
    teralis: string
    railing: string
    konstruksi: string
    stainless: string
    general: string
    default: string
  }> = {
    id: {
      kanopi: 'Layanan Kanopi Minimalis & Premium',
      pagar: 'Jasa Pembuatan Pagar & Pintu Gerbang',
      teralis: 'Teralis Jendela & Pengaman Besi',
      railing: 'Railing Tangga & Balkon Minimalis',
      konstruksi: 'Konstruksi Baja WF & Rangka Besi',
      stainless: 'Pekerjaan Stainless Steel Anti Karat',
      general: 'Layanan Fabrikasi Logam Pilihan',
      default: 'Layanan Las Terkait yang Mungkin Anda Butuhkan'
    },
    en: {
      kanopi: 'Our Featured Canopy Services',
      pagar: 'Custom Fences & Gates Fabrication',
      teralis: 'Premium Window Trellises & Grills',
      railing: 'Modern Stairs & Balustrade Railings',
      konstruksi: 'Heavy-Duty Steel Construction Solutions',
      stainless: 'Premium Stainless Steel Welding',
      general: 'Featured Custom Metal Works',
      default: 'Related Services You May Need'
    },
    ar: {
      kanopi: 'خدمات مظلات ومظلات الكانوبي المميزة لدينا',
      pagar: 'تصنيع البوابات والأسوار المخصصة',
      teralis: 'شبابيك حديد حماية وحواجز فاخرة',
      railing: 'درابزين سلالم وشرفات حديث',
      konstruksi: 'حلول ومشاريع الإنشاءات الحديدية الثقيلة',
      stainless: 'لحام وتصنيع الفولاذ المقاوم للصدأ (الستانلس)',
      general: 'أعمال وتشكيل المعادن المخصصة',
      default: 'خدمات الحدادة واللحام ذات الصلة التي قد تحتاجها'
    },
    zh: {
      kanopi: '精选雨棚和遮阳篷服务',
      pagar: '定制铁艺围栏与门禁大门',
      teralis: '优质防盗窗网与铁艺花格',
      railing: '现代楼梯扶手与阳台护栏',
      konstruksi: '重型钢结构与厂房骨架工程',
      stainless: '高端不锈钢防锈焊接定制',
      general: '特色定制五金金属加工',
      default: '您可能需要的相关金属焊接服务'
    },
    ja: {
      kanopi: '厳選されたキャノピー・庇（ひさし）施工',
      pagar: 'カスタムフェンス＆門扉（ゲート）製作',
      teralis: 'プレミアム防犯面格子（窓格子）',
      railing: 'モダン階段手すり＆バルコニーフェンス',
      konstruksi: '重量鉄骨建築・鉄骨フレーム構造物',
      stainless: '高級ステンレス防錆溶接・加工',
      general: '厳選カスタム金属製品加工サービス',
      default: '関連する溶接・金属加工サービス'
    },
    es: {
      kanopi: 'Servicios Destacados de Toldos y Marquesinas',
      pagar: 'Fabricación de Cercas y Portones a Medida',
      teralis: 'Rejas y Protectores de Ventana Premium',
      railing: 'Barandillas Modernas para Escaleras y Balcones',
      konstruksi: 'Soluciones de Construcción en Acero Pesado',
      stainless: 'Soldadura de Acero Inoxidable Premium',
      general: 'Trabajos de Herrería y Metalúrgica Premium',
      default: 'Servicios de Soldadura Relacionados que Pueda Necesitar'
    },
    fr: {
      kanopi: 'Nos Prestations d\'Auvents et Pergolas Vedettes',
      pagar: 'Fabrication de Clôtures et Portails Sur Mesure',
      teralis: 'Grilles de Défense et Sécurité Fenêtres Premium',
      railing: 'Garde-corps Modernes pour Escaliers et Balcons',
      konstruksi: 'Solutions de Charpente et Construction Métallique',
      stainless: 'Soudure et Façonnage Inox Anti-Corrosion',
      general: 'Ouvrages de Métallerie et Ferronnerie d\'Art',
      default: 'Prestations de Soudure Similaires Successibles de Vous Intéresser'
    },
    ko: {
      kanopi: '주요 캐노피 및 차양 맞춤 제작',
      pagar: '고급 대문 및 울타리 펜스 제작',
      teralis: '프리미엄 방범창 및 창문 격자쇠',
      railing: '현대식 계단 및 발코니 난간대',
      konstruksi: 'H빔 철골 및 중량 구조물 건설 솔루션',
      stainless: '고품격 스테인리스 내부식 용접',
      general: '엄선 맞춤 금속 제작 서비스',
      default: '고객님께 필요한 맞춤 용접 관련 서비스'
    }
  }

  const t = translations[lang] || translations.en

  if (searchText.includes('kanopi') || searchText.includes('canopy') || searchText.includes('awning') || searchText.includes('atap') || searchText.includes('alderon')) {
    return t.kanopi
  }
  if (searchText.includes('pagar') || searchText.includes('fence') || searchText.includes('gate') || searchText.includes('gerbang') || searchText.includes('tempa') || searchText.includes('pintu dorong')) {
    return t.pagar
  }
  if (searchText.includes('teralis') || searchText.includes('trellis') || searchText.includes('nako') || searchText.includes('jendela')) {
    return t.teralis
  }
  if (searchText.includes('railing') || searchText.includes('balkon') || searchText.includes('pegangan') || searchText.includes('handrail')) {
    return t.railing
  }
  if (searchText.includes('konstruksi') || searchText.includes('baja') || searchText.includes('wf') || searchText.includes('h-beam') || searchText.includes('rangka')) {
    return t.konstruksi
  }
  if (searchText.includes('stainless') || searchText.includes('anti karat') || searchText.includes('sus 304')) {
    return t.stainless
  }

  return t.default
}
