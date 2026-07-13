import type { LanguageCode } from './languageManager';
type CustomOrderTranslations = Record<string, any>;

export const MANDIRI_CUSTOM_ORDER_TRANSLATIONS: Record<LanguageCode, CustomOrderTranslations> = {
    en: {
        meta: { title: "Custom Design & Order - Mandiri Steel Bekasi", description: "Request custom designs for canopies, fences, trellises, and steel construction in Bekasi." },
        hero: { title: "Custom Design & Order", imageAlt: "Mandiri Steel Custom Design", imageTitle: "Custom Welding Projects" },
        message: {
            title: "Tailored to Your Home & Business",
            paragraphs: [
                "Every building has its own character and needs. We offer custom welding services to ensure your canopy, fence, or steel structure perfectly matches your architectural style and functional requirements.",
                "We don't just weld iron. We understand your vision and translate it into a sturdy, aesthetic, and durable construction that enhances the value of your property."
            ],
            imageAlt: "Custom Welding Specifications"
        },
        ideas: {
            title: "From Concept to Reality",
            intro: "Have a specific design in mind for your minimalist fence? Need a unique shape for your balcony railing? Or a heavy-duty mezzanine for your warehouse? Tell us your ideas.",
            description: "At Mandiri Steel, custom sizing, intricate designs, and specialized material combinations are our expertise. Our team routinely handles unique requests for residential, commercial, and industrial projects in Bekasi."
        },
        process: {
            title: "Our Seamless Custom Process",
            steps: [
                { title: "Design Consultation", description: "Discuss your ideas, materials, and target budget with our experts." },
                { title: "Site Measurement", description: "Our team visits your location in Bekasi for precise measurements and feasibility checks." },
                { title: "Quotation & Deal", description: "We provide a transparent cost breakdown. Production starts upon approval and deposit." },
                { title: "Fabrication & Install", description: "We craft your order in our workshop and perform professional installation at your site." }
            ]
        },
        cta: {
            title: "Request a Custom Quote",
            intro: "Ready to start your custom project? Contact Mr. Maman Toha for a free consultation and site survey:",
            workshopHeading: "Workshop Facility",
            workshopLabel: "Location:",
            workshopParagraph: "Our workshop in Cikarang Barat, Bekasi is fully equipped for custom iron, stainless steel, and steel construction projects.",
            button: "Request Quote"
        }
    },
    id: {
        meta: { title: "Custom Desain & Pemesanan - Bengkel Las Mandiri", description: "Pesan desain custom untuk kanopi, pagar, teralis, dan konstruksi baja di Bekasi." },
        hero: { title: "Custom Desain & Order", imageAlt: "Bengkel Las Mandiri Custom Desain", imageTitle: "Proyek Las Custom" },
        message: {
            title: "Disesuaikan Untuk Rumah & Bisnis Anda",
            paragraphs: [
                "Setiap bangunan memiliki karakter dan kebutuhan yang berbeda. Kami menawarkan jasa las custom untuk memastikan kanopi, pagar, atau konstruksi baja Anda sesuai dengan gaya arsitektur dan kebutuhan fungsional Anda.",
                "Kami tidak sekadar mengelas besi. Kami memahami visi Anda dan menerjemahkannya ke dalam konstruksi yang kokoh, estetik, dan tahan lama yang meningkatkan nilai properti Anda."
            ],
            imageAlt: "Spesifikasi Las Khusus"
        },
        ideas: {
            title: "Dari Konsep Menjadi Kenyataan",
            intro: "Punya desain khusus untuk pagar minimalis Anda? Butuh bentuk unik untuk railing balkon? Atau mezanin berat untuk gudang Anda? Beritahu kami ide Anda.",
            description: "Di Bengkel Las Mandiri, ukuran custom, desain rumit, dan kombinasi material khusus adalah keahlian kami. Tim kami rutin menangani permintaan unik untuk proyek perumahan, komersial, dan industri di Bekasi."
        },
        process: {
            title: "Proses Custom Kami",
            steps: [
                { title: "Konsultasi Desain", description: "Diskusikan ide, material, dan target anggaran Anda dengan ahli kami." },
                { title: "Pengukuran Lokasi", description: "Tim kami mengunjungi lokasi Anda di Bekasi untuk pengukuran presisi dan pengecekan teknis." },
                { title: "Penawaran & Kesepakatan", description: "Kami berikan rincian biaya transparan. Produksi dimulai setelah persetujuan dan DP." },
                { title: "Fabrikasi & Pasang", description: "Kami kerjakan pesanan Anda di workshop dan lakukan pemasangan profesional di lokasi." }
            ]
        },
        cta: {
            title: "Minta Penawaran Custom",
            intro: "Siap memulai proyek custom Anda? Hubungi Bapak Maman Toha untuk konsultasi gratis dan survei lokasi:",
            workshopHeading: "Fasilitas Workshop",
            workshopLabel: "Lokasi:",
            workshopParagraph: "Workshop kami di Cikarang Barat, Bekasi dilengkapi peralatan lengkap untuk proyek besi, stainless steel, dan konstruksi baja.",
            button: "Dapatkan Harga"
        }
    }
};
