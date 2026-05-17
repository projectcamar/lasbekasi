import type { BlogPost } from './blog'
import { BLOG_POSTS } from './blog'

export interface BlogSection {
  heading?: string
  paragraphs?: string[]
  image?: string
  imageAlt?: string
  imageSearchQuery?: string
  list?: string[]
  productId?: number
}

export interface BlogContent {
  slug: string
  sections: BlogSection[]
}

const STOP_WORDS = new Set([
  '', 'dan', 'yang', 'untuk', 'dengan', 'atau', 'para', 'dari', 'pada', 'kami', 'anda',
  'bengkel', 'las', 'mandiri', 'steel', 'bekasi', 'terpercaya', '2026'
])

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

const detectLocationSentence = (post: BlogPost, isEnglish = false) => {
  const regions = ['Cikarang', 'Cibitung', 'Tambun', 'Setu', 'Bekasi', 'Jakarta', 'Karawang']
  const found = post.slug.split('-').find(token => regions.some(r => r.toLowerCase() === token.toLowerCase()))

  if (!found) {
    return isEnglish
      ? 'Mandiri Steel serves premium welding and custom steel fabrication services across Bekasi, Cikarang, and the Greater Jakarta region.'
      : 'Mandiri Steel melayani jasa bengkel las premium dan fabrikasi baja kustom di wilayah Bekasi, Cikarang, dan seluruh area Jabodetabek.'
  }
  return isEnglish
    ? `We have successfully completed multiple residential and industrial metal work projects in the ${capitalize(found)} area.`
    : `Kami telah sukses menyelesaikan berbagai proyek kanopi, pagar, dan konstruksi besi di wilayah ${capitalize(found)}.`
}

const generateAIOptimizedFAQ = (post: BlogPost, isEnglish = false): string[] => {
  const categoryFAQs: { [key: string]: { id: string[]; en: string[] } } = {
    'Tips and Trick': {
      id: [
        '<strong>Berapa ketebalan besi hollow standar yang digunakan Mandiri Steel?</strong><br/>Kami selalu menggunakan besi hollow standar SNI dengan ketebalan minimal 1.2mm hingga 1.8mm atau lebih sesuai dengan kesepakatan spesifikasi proyek.',
        '<strong>Apakah ada garansi untuk sambungan las dan kekuatan struktur?</strong><br/>Ya, Mandiri Steel memberikan garansi las struktural tertulis selama 3 bulan hingga 1 tahun untuk menjamin kekuatan sambungan las dan ketahanan konstruksi kami.',
        '<strong>Berapa lama proses pembuatan kanopi rumah standar?</strong><br/>Proses fabrikasi di workshop biasanya memakan waktu 3-7 hari kerja, dilanjutkan dengan proses instalasi di lokasi yang selesai dalam 1-2 hari.'
      ],
      en: [
        '<strong>What is the standard hollow iron thickness used by Mandiri Steel?</strong><br/>We consistently use SNI standard hollow iron pipes with thicknesses ranging from 1.2mm to 1.8mm or more, strictly adhering to agreed project specifications.',
        '<strong>Is there a warranty for welding joints and structural strength?</strong><br/>Yes, Mandiri Steel provides a written structural welding warranty of 3 months to 1 year, ensuring joint integrity and heavy-duty structural durability.',
        '<strong>How long does it take to fabricate a standard residential canopy?</strong><br/>Workshop fabrication typically takes 3-7 business days, followed by on-site installation which is fully completed in 1-2 days.'
      ]
    }
  }

  const defaultFAQ = {
    id: [
      '<strong>Mengapa memilih Bengkel Las Mandiri Steel?</strong><br/>Kami memiliki pengalaman lebih dari 25 tahun (sejak 1999) dipimpin langsung oleh Bapak Maman Toha, menggunakan material berstandar SNI, dan memberikan survei serta konsultasi gratis.',
      '<strong>Bagaimana sistem pembayaran untuk proyek custom las?</strong><br/>Sistem pembayaran kami menggunakan uang muka (DP) sebesar 40% - 50% untuk memulai proses belanja bahan dan fabrikasi, dengan pelunasan dilakukan setelah pemasangan selesai.'
    ],
    en: [
      '<strong>Why choose Mandiri Steel Workshop?</strong><br/>We possess over 25 years of hands-on welding experience (established 1999) led directly by Mr. Maman Toha, utilizing high-quality SNI materials with transparent thickness and offering free site surveys.',
      '<strong>What is the payment structure for custom welding projects?</strong><br/>We operate on a standard 40% - 50% down payment to initiate material sourcing and workshop fabrication, with the remaining balance due upon successful on-site installation.'
    ]
  }

  const categoryEntry = categoryFAQs[post.category] || defaultFAQ
  return isEnglish ? categoryEntry.en : categoryEntry.id
}

const generateDataDrivenSection = (isEnglish = false): BlogSection => {
  return {
    heading: isEnglish ? 'Mandiri Steel Structural Integrity & Materials Standards' : 'Standar Material & Integritas Struktur Mandiri Steel',
    paragraphs: isEnglish
      ? ['Mandiri Steel leverages top-tier engineering standards and certified steel materials to deliver durable products:']
      : ['Mandiri Steel menerapkan standar teknik tinggi dan bahan baja bersertifikat untuk menghasilkan produk berdaya tahan maksimal:'],
    list: isEnglish
      ? [
        '<strong>SNI Certified Steel:</strong> 100% of our hollow, pipe, and wide flange (WF) structures utilize SNI standardized steel.',
        '<strong>Double Anti-Rust Coat:</strong> All metal works receive a premium epoxy zinc chromate primer undercoat to prevent rust.',
        '<strong>Experienced Welders:</strong> Over 25 years of structural integrity under the supervision of head welder Bapak Maman Toha.'
      ]
      : [
        '<strong>Baja Bersertifikat SNI:</strong> 100% struktur hollow, pipa, siku, dan baja WF kami menggunakan material berstandar SNI.',
        '<strong>Lapisan Cat Anti Karat Ganda:</strong> Semua pekerjaan besi dilapisi cat dasar primer epoxy zinc chromate bermutu tinggi.',
        '<strong>Welder Berpengalaman:</strong> Lebih dari 25 tahun menjaga integritas struktural di bawah pengawasan Bapak Maman Toha.'
      ]
  }
}

const createFallbackContent = (post: BlogPost): BlogContent => {
  const isEnglishPost = post.title.split(' ').length > 3 && !/[aiueo]/.test(post.title.toLowerCase())
  const introExcerpt = post.excerpt || (isEnglishPost ? 'Professional welding and custom steel fabrication insights in Bekasi.' : 'Wawasan profesional bengkel las dan fabrikasi baja kustom di Bekasi.')

  return {
    slug: post.slug,
    sections: [
      {
        paragraphs: [
          introExcerpt,
          isEnglishPost
            ? `<strong>Overview:</strong> This expert guide explores ${post.title.toLowerCase()} from the perspective of an Indonesian welding workshop and steel fabrication specialist.`
            : `<strong>Tinjauan:</strong> Panduan ahli ini mengeksplorasi ${post.title.toLowerCase()} dari perspektif bengkel las dan spesialis fabrikasi baja Bekasi.`,
          detectLocationSentence(post, isEnglishPost)
        ]
      },
      generateDataDrivenSection(isEnglishPost),
      {
        heading: isEnglishPost ? 'Key FAQ' : 'Pertanyaan Umum',
        list: generateAIOptimizedFAQ(post, isEnglishPost)
      }
    ]
  }
}

export const BLOG_CONTENTS: BlogContent[] = BLOG_POSTS.map(post => createFallbackContent(post))

export const getBlogPostContentLocalized = (slug: string, _language: string) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return undefined;
  return createFallbackContent(post);
};
