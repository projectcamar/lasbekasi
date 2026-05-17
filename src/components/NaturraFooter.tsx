import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blog'
import { useLanguage } from '../utils/languageContext'
import './NaturraFooter.css'

const SEO_LINKS = BLOG_POSTS.map(post => post.title).concat([
    "Jasa Las Bekasi Terpercaya",
    "Bengkel Las Bekasi Harga Murah",
    "Kanopi Minimalis Bekasi",
    "Pagar Besi Tempa Bekasi",
    "Konstruksi Baja Bekasi",
    "Bengkel Las Mandiri: Mitra Las Terpercaya"
]);

const footerTranslations = {
    en: {
        desc: "High-quality steel construction and home accessories specialist since 1999. Serving with professionalism and the best quality.",
        menu: "Menu",
        services: "Services",
        contact: "Contact",
        contactUs: "Contact Us",
        subscribeDesc: "Consult your welding needs and get the best price offer from Mandiri Steel.",
        namePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        sending: "Sending...",
        sent: "Sent!",
        sendBtn: "Send Message",
        seoSummary: "View Bekasi Welding Services & Articles",
        copyright: "All rights reserved.",
        terms: "Terms of Service",
        shipping: "Shipping Info",
        license: "Image License",
        about: "About",
        blog: "Blog",
        home: "Home"
    },
    id: {
        desc: "Spesialis konstruksi baja dan aksesori rumah berkualitas tinggi sejak tahun 1999. Melayani dengan profesionalisme dan kualitas terbaik.",
        menu: "Menu",
        services: "Layanan",
        contact: "Kontak",
        contactUs: "Hubungi Kami",
        subscribeDesc: "Konsultasikan kebutuhan las Anda dan dapatkan penawaran harga terbaik dari Bengkel Las Mandiri.",
        namePlaceholder: "Nama Lengkap",
        emailPlaceholder: "Alamat Email",
        sending: "Mengirim...",
        sent: "Terkirim!",
        sendBtn: "Kirim Pesan",
        seoSummary: "Lihat Layanan & Artikel Bengkel Las Bekasi",
        copyright: "Semua hak dilindungi undang-undang.",
        terms: "Ketentuan Layanan",
        shipping: "Info Pengiriman",
        license: "Lisensi Gambar",
        about: "Tentang",
        blog: "Blog",
        home: "Beranda"
    },
    ar: {
        desc: "متخصص في الإنشاءات الفولاذية وإكسسوارات المنازل عالية الجودة منذ عام 1999. نخدم باحترافية وأفضل جودة.",
        menu: "القائمة",
        services: "الخدمات",
        contact: "اتصال",
        contactUs: "اتصل بنا",
        subscribeDesc: "استشر احتياجات اللحام الخاصة بك واحصل على أفضل عرض سعر من مانديري ستيل.",
        namePlaceholder: "الاسم الكامل",
        emailPlaceholder: "عنوان البريد الإلكتروني",
        sending: "جاري الإرسال...",
        sent: "تم الإرسال!",
        sendBtn: "إرسال الرسالة",
        seoSummary: "عرض خدمات ومقالات لحام بيكاسي",
        copyright: "جميع الحقوق محفوظة.",
        terms: "شروط الخدمة",
        shipping: "معلومات الشحن",
        license: "ترخيص الصور",
        about: "من نحن",
        blog: "مدونة",
        home: "الرئيسية"
    },
    zh: {
        desc: "自 1999 年以来专注于高质量钢铁建筑和家居装饰。以专业的态度和最优质的服务为您服务。",
        menu: "菜单",
        services: "服务项目",
        contact: "联系方式",
        contactUs: "联系我们",
        subscribeDesc: "咨询您的焊接需求，获取 Mandiri Steel 的最佳报价。",
        namePlaceholder: "姓名",
        emailPlaceholder: "电子邮件地址",
        sending: "发送中...",
        sent: "已发送！",
        sendBtn: "发送消息",
        seoSummary: "查看勿加泗焊接服务与文章",
        copyright: "版权所有。",
        terms: "服务条款",
        shipping: "配送信息",
        license: "图片许可",
        about: "关于",
        blog: "博客",
        home: "首页"
    },
    ja: {
        desc: "1999年以来、高品質な鉄骨構造とホームアクセサリーのスペシャリスト。プロフェッショナリズムと最高の品質で奉仕します。",
        menu: "メニュー",
        services: "サービス",
        contact: "連絡先",
        contactUs: "お問い合わせ",
        subscribeDesc: "溶接のニーズをご相談ください。Mandiri Steelから最適な価格を提案します。",
        namePlaceholder: "氏名",
        emailPlaceholder: "メールアドレス",
        sending: "送信中...",
        sent: "送信完了！",
        sendBtn: "メッセージを送信",
        seoSummary: "ブカシの溶接サービスと記事を見る",
        copyright: "著作権所有。",
        terms: "利用規約",
        shipping: "配送情報",
        license: "画像ライセンス",
        about: "私たちについて",
        blog: "ブログ",
        home: "ホーム"
    },
    es: {
        desc: "Especialista en construcción de acero y accesorios para el hogar de alta calidad desde 1999. Sirviendo con profesionalismo y la mejor calidad.",
        menu: "Menú",
        services: "Servicios",
        contact: "Contacto",
        contactUs: "Contáctenos",
        subscribeDesc: "Consulte sus necesidades de soldadura y obtenga la mejor oferta de precio de Mandiri Steel.",
        namePlaceholder: "Nombre Completo",
        emailPlaceholder: "Correo Electrónico",
        sending: "Enviando...",
        sent: "¡Enviado!",
        sendBtn: "Enviar Mensaje",
        seoSummary: "Ver Servicios y Artículos de Soldadura en Bekasi",
        copyright: "Todos los derechos reservados.",
        terms: "Términos de Servicio",
        shipping: "Información de Envío",
        license: "Licencia de Imagen",
        about: "Sobre Nosotros",
        blog: "Blog",
        home: "Inicio"
    },
    fr: {
        desc: "Spécialiste de la construction métallique et des accessoires de maison de haute qualité depuis 1999. Au service du professionnalisme et de la meilleure qualité.",
        menu: "Menu",
        services: "Services",
        contact: "Contact",
        contactUs: "Contactez-nous",
        subscribeDesc: "Consultez vos besoins en soudure et obtenez la meilleure offre de prix de Mandiri Steel.",
        namePlaceholder: "Nom Complet",
        emailPlaceholder: "Adresse Email",
        sending: "Envoi...",
        sent: "Envoyé !",
        sendBtn: "Envoyer le Message",
        seoSummary: "Voir les Services et Articles de Soudure à Bekasi",
        copyright: "Tous droits réservés.",
        terms: "Conditions de Service",
        shipping: "Infos de Livraison",
        license: "Licence d'Image",
        about: "À Propos",
        blog: "Blog",
        home: "Accueil"
    },
    ko: {
        desc: "1999년부터 고품질 강구조물 및 홈 액세서리 전문. 전문성과 최고의 품질로 고객을 모십니다.",
        menu: "메뉴",
        services: "서비스",
        contact: "연락처",
        contactUs: "문의하기",
        subscribeDesc: "용접 관련 상담을 받으시고 Mandiri Steel의 최적 견적을 확인하세요.",
        namePlaceholder: "성함",
        emailPlaceholder: "이메일 주소",
        sending: "보내는 중...",
        sent: "전송 완료!",
        sendBtn: "메시지 보내기",
        seoSummary: "브카시 용접 서비스 및 게시글 보기",
        copyright: "모든 권리 보유.",
        terms: "이용 약관",
        shipping: "배송 정보",
        license: "이미지 라이선스",
        about: "회사 소개",
        blog: "블로그",
        home: "홈"
    }
};

const NaturraFooter: React.FC = () => {
    const { language } = useLanguage();
    const t = footerTranslations[language as keyof typeof footerTranslations] || footerTranslations.en;

    const [subName, setSubName] = useState('')
    const [subEmail, setSubEmail] = useState('')
    const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!subName || !subEmail) return

        setSubStatus('loading')
        // Simulate API call
        setTimeout(() => {
            setSubStatus('success')
            setSubName('')
            setSubEmail('')
        }, 1000)
    }

    return (
        <footer className="naturra-footer">
            <div className="naturra-footer__main">
                {/* Brand Column */}
                <div className="naturra-footer__brand">
                    <div className="naturra-footer__brand-logo">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="22" fill="#004D2C" />
                            <path d="M24 8C24 8 16 14 16 22C16 26 18 30 22 32L22 38H26L26 32C30 30 32 26 32 22C32 14 24 8 24 8Z" fill="#fff" opacity="0.9" />
                            <path d="M24 12C24 12 19 17 19 23C19 26 20.5 28.5 23 30L23 36H25L25 30C27.5 28.5 29 26 29 23C29 17 24 12 24 12Z" fill="#004D2C" opacity="0.4" />
                            <circle cx="24" cy="20" r="2.5" fill="#fff" />
                        </svg>
                        <span className="naturra-footer__brand-name">BENGKEL LAS MANDIRI</span>
                    </div>
                    <p className="naturra-footer__brand-desc">
                        {t.desc}
                    </p>
                    <span className="naturra-footer__brand-legal">Bengkel Las Mandiri</span>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="naturra-footer__col-title">{t.menu}</h4>
                    <div className="naturra-footer__col-links">
                        <Link to="/">{t.home}</Link>
                        <Link to="/about">{t.about}</Link>
                        <Link to="/products">{t.services}</Link>
                        <Link to="/blog">{t.blog}</Link>
                        <Link to="/partnership">{t.contact}</Link>
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h4 className="naturra-footer__col-title">{t.services}</h4>
                    <div className="naturra-footer__col-links">
                        <Link to="/products">Kanopi</Link>
                        <Link to="/products">Pagar</Link>
                        <Link to="/products">Tralis</Link>
                        <Link to="/products">Konstruksi Baja</Link>
                        <Link to="/products">Railing Tangga</Link>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="naturra-footer__col-title">{t.contact}</h4>
                    <div className="naturra-footer__contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <a href="mailto:info@lasbekasi.com">info@lasbekasi.com</a>
                    </div>
                    <div className="naturra-footer__contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer">+62 852-1207-8467</a>
                    </div>
                    <div className="naturra-footer__contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</span>
                    </div>
                </div>

                {/* Newsletter Subscribe */}
                <div className="naturra-footer__subscribe">
                    <h4 className="naturra-footer__col-title">{t.contactUs}</h4>
                    <p className="naturra-footer__subscribe-desc">{t.subscribeDesc}</p>
                    <form className="naturra-footer__form" onSubmit={handleSubscribe}>
                        <div className="naturra-footer__form-group">
                            <input
                                type="text"
                                placeholder={t.namePlaceholder}
                                required
                                value={subName}
                                onChange={e => setSubName(e.target.value)}
                            />
                        </div>
                        <div className="naturra-footer__form-group">
                            <input
                                type="email"
                                placeholder={t.emailPlaceholder}
                                required
                                value={subEmail}
                                onChange={e => setSubEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" disabled={subStatus === 'loading'} className={`naturra-footer__submit ${subStatus}`}>
                            {subStatus === 'loading' ? t.sending : subStatus === 'success' ? t.sent : t.sendBtn}
                        </button>
                    </form>
                </div>
            </div>

            {/* SEO Archive Accordion */}
            <div className="naturra-footer__seo">
                <div className="naturra-footer__seo-inner">
                    <details className="naturra-footer__seo-details">
                        <summary>{t.seoSummary}</summary>
                        <div className="naturra-footer__seo-grid">
                            {SEO_LINKS.map((link, idx) => {
                                // Find if this link is a real blog post title
                                const post = BLOG_POSTS.find(p => p.title === link);
                                const targetUrl = post ? `/blog/${post.slug}` : `/blog?tag=${encodeURIComponent(link)}`;

                                return (
                                    <Link key={idx} to={targetUrl} className="naturra-footer__seo-link">
                                        {link}
                                    </Link>
                                );
                            })}
                        </div>
                    </details>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="naturra-footer__bottom">
                <span className="naturra-footer__copyright">
                    © {new Date().getFullYear()} Bengkel Las Mandiri. {t.copyright}
                </span>
                <div className="naturra-footer__bottom-links">
                    <Link to="/terms-of-service">{t.terms}</Link>
                    <Link to="/shipping-information">{t.shipping}</Link>
                    <Link to="/image-license">{t.license}</Link>
                </div>
            </div>
        </footer>
    )
}

export default NaturraFooter
