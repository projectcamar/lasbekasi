import type { LanguageCode } from './languageManager'

export const BLOG_POST_TRANSLATIONS: Record<LanguageCode, any> = {
    id: {
        newsletter: {
            title: 'Dapatkan Inspirasi Desain',
            description: 'Berlangganan untuk menerima update artikel desain kanopi, pagar, dan tips perawatan konstruksi besi.',
            placeholder: 'Masukkan email Anda',
            button: 'Berlangganan',
            success: 'Terima kasih! Silakan cek email Anda untuk konfirmasi.'
        },
        share: {
            title: 'Bagikan Artikel',
            description: 'Bagikan inspirasi desain ini kepada teman atau keluarga Anda',
            copied: 'Tautan berhasil disalin!',
            shareOn: 'Bagikan di'
        },
        consultation: {
            title: 'Konsultasi Gratis',
            description: 'Butuh bantuan untuk desain kanopi atau pagar rumah Anda? Chat langsung dengan tim kami.',
            button: 'Chat via WhatsApp'
        }
    },
    en: {
        newsletter: {
            title: 'Get Design Inspiration',
            description: 'Subscribe to receive updates on canopy designs, fences, and iron construction maintenance tips.',
            placeholder: 'Enter your email',
            button: 'Subscribe',
            success: 'Thank you! Please check your email for confirmation.'
        },
        share: {
            title: 'Share Article',
            description: 'Share this design inspiration with your friends or family',
            copied: 'Link copied successfully!',
            shareOn: 'Share on'
        },
        consultation: {
            title: 'Free Consultation',
            description: 'Need help with your home canopy or fence design? Chat directly with our team.',
            button: 'Chat via WhatsApp'
        }
    }
};

export const BLOG_INTRO_TRANSLATIONS: Record<LanguageCode, any> = {
    id: {
        mainTitle: 'Inspirasi & Tips Bengkel Las',
        introParagraph: 'Temukan berbagai inspirasi desain dan tips perawatan untuk kanopi, pagar, teralis, dan konstruksi besi lainnya.',
        bullets: [
            { title: 'Desain Minimalis', description: 'Ide desain terkini yang cocok untuk rumah tropis modern.' },
            { title: 'Perawatan Mudah', description: 'Tips menjaga material besi agar awet dan anti karat.' }
        ]
    },
    en: {
        mainTitle: 'Welding Workshop Inspiration & Tips',
        introParagraph: 'Discover various design inspirations and maintenance tips for canopies, gates, trellises, and other steel constructions.',
        bullets: [
            { title: 'Minimalist Design', description: 'Latest design ideas suitable for modern tropical homes.' },
            { title: 'Easy Maintenance', description: 'Tips to keep your steel materials durable and rust-free.' }
        ]
    }
};

export const BLOG_PAGINATION_TRANSLATIONS: Record<LanguageCode, any> = {
    id: {
        numberLocale: 'id-ID',
        prev: 'Sebelumnya',
        next: 'Selanjutnya',
        archiveTitle: 'Arsip Artikel'
    },
    en: {
        numberLocale: 'en-US',
        prev: 'Previous',
        next: 'Next',
        archiveTitle: 'Article Archive'
    }
};

export const MENTIONED_PRODUCT_LABEL: Record<LanguageCode, string> = {
    id: 'Produk Terkait',
    en: 'Related Product'
};

export const VIEW_PRODUCT_LABEL: Record<LanguageCode, string> = {
    id: 'Lihat Produk',
    en: 'View Product'
};

export const CTA_TRANSLATIONS: Record<LanguageCode, any> = {
    id: {
        title: 'Butuh Layanan Las Profesional?',
        subtitle: 'Dapatkan penawaran terbaik untuk pembuatan kanopi, pagar, dan konstruksi besi lainnya.',
        viewAllProducts: 'Lihat Semua Layanan',
        contactUs: 'Hubungi Kami via WhatsApp'
    },
    en: {
        title: 'Need Professional Welding Services?',
        subtitle: 'Get the best quote for canopies, gates, and other steel constructions.',
        viewAllProducts: 'View All Services',
        contactUs: 'Contact Us via WhatsApp'
    }
};
