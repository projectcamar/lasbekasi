export interface NaturraProduct {
    id: string
    name: string
    category: string
    badge: string
    image: string
    description: string
    specs: string[]
    hsCode?: string
}

export const NATURRA_PRODUCTS: NaturraProduct[] = [
    // === KANOPI ===
    {
        id: 'kanopi-minimalis-alderon',
        name: 'Kanopi Minimalis Alderon',
        category: 'kanopi',
        badge: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1628744448839-497746416629?w=800&q=80',
        description: 'Kanopi minimalis dengan atap Alderon yang sejuk dan tahan lama. Cocok untuk cuaca Bekasi yang panas, meredam suara hujan dan panas matahari.',
        specs: ['Atap Alderon UPVC', 'Rangka Hollow 40x60', 'Anti Karat & Bocor'],
    },
    {
        id: 'kanopi-kaca-tempered',
        name: 'Kanopi Kaca Tempered',
        category: 'kanopi',
        badge: 'Premium',
        image: 'https://images.unsplash.com/photo-1628744448839-497746416629?w=800&q=80',
        description: 'Desain kanopi modern dengan kaca tempered yang kuat dan mewah. Memberikan pencahayaan alami dan estetika tinggi pada hunian Anda.',
        specs: ['Kaca Tempered 8mm/10mm', 'Rangka WF/Hollow Tebal', 'Desain Mewah Modern'],
    },

    // === PAGAR ===
    {
        id: 'pagar-minimalis-modern',
        name: 'Pagar Minimalis Modern',
        category: 'pagar',
        badge: 'Paling Populer',
        image: 'https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=800&q=80',
        description: 'Pagar besi minimalis dengan material hollow galvanis tahan karat. Desain simpel dan elegan yang menambah keamanan sekaligus keindahan rumah.',
        specs: ['Besi Hollow SNI', 'Cat Dasar Anti Karat', 'Pemasangan Presisi'],
    },
    {
        id: 'pagar-besi-tempa-klasik',
        name: 'Pagar Besi Tempa Klasik',
        category: 'pagar',
        badge: 'Premium Klasik',
        image: 'https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=800&q=80',
        description: 'Pagar dengan ornamen besi tempa yang artistik dan mewah. Cocok untuk rumah bergaya klasik dengan detail ukiran yang megah.',
        specs: ['Besi Solid 16mm', 'Ornamen Tempa Custom', 'Finishing Cat Mewah'],
    },

    // === TERALIS & RAILING ===
    {
        id: 'teralis-jendela-minimalis',
        name: 'Teralis Jendela Minimalis',
        category: 'teralis',
        badge: 'Keamanan',
        image: 'https://images.unsplash.com/photo-1527202814041-944f33190886?w=800&q=80',
        description: 'Pengaman jendela dengan desain minimalis. Melindungi rumah dari gangguan luar dengan material besi yang kokoh namun tetap terlihat estetik.',
        specs: ['Besi Nako 10mm/12mm', 'Model Minimalis/Kotak', 'Pemasangan Kuat'],
    },
    {
        id: 'railing-tangga-minimalis',
        name: 'Railing Tangga & Balkon',
        category: 'railing',
        badge: 'Interior/Eksterior',
        image: 'https://images.unsplash.com/photo-1523315535310-85f0c39f75ec?w=800&q=80',
        description: 'Railing tangga dan balkon untuk keamanan dan dekorasi. Tersedia berbagai pilihan material mulai dari besi hollow hingga stainless steel.',
        specs: ['Handrail Besi/Kayu', 'Besi Hollow/Stainless', 'Desain Modern'],
    },

    // === KONSTRUKSI & LAINNYA ===
    {
        id: 'konstruksi-baja-wf',
        name: 'Konstruksi Baja WF',
        category: 'konstruksi',
        badge: 'Proyek Besar',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
        description: 'Jasa konstruksi baja untuk gudang, pabrik, atau dak mezanin. Dikerjakan dengan perhitungan teknis yang akurat dan tim profesional.',
        specs: ['Baja WF & H-Beam', 'Pengerjaan Cepat', 'Standar Keamanan Tinggi'],
    },
    {
        id: 'pintu-pagar-stainless-steel',
        name: 'Pintu Stainless Steel',
        category: 'stainless',
        badge: 'Anti Karat',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        description: 'Layanan pengerjaan stainless steel untuk pagar dan railing. Material grade 304 yang tahan karat selamanya dengan tampilan mengkilap.',
        specs: ['Stainless Steel 304', 'Las Argon Rapi', 'Awet & Tanpa Karat'],
    },
]
