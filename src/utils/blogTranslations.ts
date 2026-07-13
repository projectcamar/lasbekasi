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
