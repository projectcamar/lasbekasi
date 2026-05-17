// Product image URLs (Unsplash – Welding/Construction placeholders)
const kanopiImage = 'https://images.unsplash.com/photo-1628744448839-497746416629?w=800&q=80'
const pagarImage = 'https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=800&q=80'
const teralisImage = 'https://images.unsplash.com/photo-1527202814041-944f33190886?w=800&q=80'
const railingImage = 'https://images.unsplash.com/photo-1523315535310-85f0c39f75ec?w=800&q=80'
const konstruksiImage = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80'
const stainlessImage = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80'

export interface ProductVariant {
  name: string
  price: string
  dimensions?: string
  specification?: string
}

export interface Product {
  id: number
  slug: string
  name: string
  categories: string[]
  price: string
  image: string
  video?: string
  variants?: ProductVariant[]
}

export const ALL_PRODUCTS: Product[] = [
  // Kanopi
  {
    id: 1,
    slug: 'kanopi-minimalis-alderon',
    name: 'Kanopi Minimalis Alderon',
    categories: ['Best Seller', 'Kanopi', 'Layanan Utama'],
    price: 'Hubungi untuk Harga',
    image: kanopiImage,
    variants: [
      { name: 'Alderon Double Layer', price: 'Mulai Rp 650rb/m2', specification: 'Rangka Hollow 40x60, Atap Alderon RS' },
      { name: 'Alderon Single Layer', price: 'Mulai Rp 450rb/m2', specification: 'Rangka Hollow 40x40' }
    ]
  },
  {
    id: 2,
    slug: 'kanopi-kaca-tempered',
    name: 'Kanopi Kaca Tempered',
    categories: ['Premium', 'Kanopi'],
    price: 'Hubungi untuk Harga',
    image: kanopiImage,
    variants: [
      { name: 'Kaca Tempered 8mm', price: 'Mulai Rp 1.2jt/m2', specification: 'Rangka WF atau Hollow Tebal' }
    ]
  },

  // Pagar
  {
    id: 3,
    slug: 'pagar-minimalis-modern',
    name: 'Pagar Minimalis Modern',
    categories: ['Pagar', 'Layanan Utama'],
    price: 'Hubungi untuk Harga',
    image: pagarImage,
    variants: [
      { name: 'Pagar Hollow Galvanis', price: 'Mulai Rp 550rb/m2', specification: 'Anti Karat, Cat Semprot' },
      { name: 'Pagar Cutting Laser', price: 'Mulai Rp 950rb/m2', specification: 'Plat Besi, Desain Custom' }
    ]
  },
  {
    id: 4,
    slug: 'pagar-besi-tempa-klasik',
    name: 'Pagar Besi Tempa Klasik',
    categories: ['Pagar', 'Premium'],
    price: 'Hubungi untuk Harga',
    image: pagarImage,
    variants: [
      { name: 'Desain Klasik Mewah', price: 'Mulai Rp 1.5jt/m2', specification: 'Besi Solid, Ornamen Klasik' }
    ]
  },

  // Teralis
  {
    id: 5,
    slug: 'teralis-jendela-minimalis',
    name: 'Teralis Jendela Minimalis',
    categories: ['Teralis', 'Keamanan'],
    price: 'Hubungi untuk Harga',
    image: teralisImage,
    variants: [
      { name: 'Model Nako', price: 'Mulai Rp 350rb/lubang', specification: 'Besi Nako 10mm/12mm' },
      { name: 'Model Kotak Minimalis', price: 'Mulai Rp 400rb/lubang', specification: 'Besi Hollow 20x20' }
    ]
  },

  // Railing
  {
    id: 6,
    slug: 'railing-tangga-minimalis',
    name: 'Railing Tangga Minimalis',
    categories: ['Railing', 'Interior'],
    price: 'Hubungi untuk Harga',
    image: railingImage,
    variants: [
      { name: 'Railing Hollow & Kayu', price: 'Mulai Rp 500rb/m1', specification: 'Handrail Kayu Kamper/Meranti' },
      { name: 'Railing Stainless Glass', price: 'Mulai Rp 1.1jt/m1', specification: 'Stainless 304, Kaca 8mm' }
    ]
  },

  // Konstruksi Baja
  {
    id: 7,
    slug: 'konstruksi-baja-wf',
    name: 'Konstruksi Baja WF',
    categories: ['Konstruksi', 'Industri'],
    price: 'Hubungi untuk Harga',
    image: konstruksiImage,
    variants: [
      { name: 'Gudang & Pabrik', price: 'Hubungi Kami', specification: 'Baja WF/H-Beam, Atap Zincalume' }
    ]
  },

  // Stainless Steel
  {
    id: 8,
    slug: 'pintu-pagar-stainless-steel',
    name: 'Pintu Pagar Stainless Steel',
    categories: ['Stainless Steel', 'Premium'],
    price: 'Hubungi untuk Harga',
    image: stainlessImage,
    variants: [
      { name: 'Stainless Grade 304', price: 'Mulai Rp 1.8jt/m2', specification: 'Tahan Karat Selamanya' }
    ]
  }
]
