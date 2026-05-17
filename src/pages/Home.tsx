import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { Mail, MessageCircle, Globe, Building2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../utils/languageContext'
import { MANDIRI_HOME_TRANSLATIONS } from '../utils/homeTranslations'
import { detectLanguageFromIP, getStoredLanguage, getCurrentLanguage } from '../utils/languageManager'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './Home.css'

const OG_LOCALES = ['id_ID', 'en_US', 'ar_SA', 'zh_CN', 'ja_JP', 'es_ES', 'fr_FR', 'ko_KR'] as const

const Home: React.FC = () => {
    const location = useLocation()
    const { language, setLanguage } = useLanguage()
    const videoRef = useRef<HTMLVideoElement>(null)

    // IP detection for first visit
    useEffect(() => {
        const stored = getStoredLanguage()
        const urlLang = getCurrentLanguage(location.pathname, location.search)

        if (stored || urlLang !== 'en') {
            return
        }

        const detectIP = async () => {
            const ipLang = await detectLanguageFromIP()
            if (ipLang && !stored) {
                setLanguage(ipLang)
            }
        }

        detectIP()
    }, [location.pathname, location.search, setLanguage])

    // Robust video playback trigger
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.warn("Home hero video play failed:", err))
        }
    }, [])

    const t = MANDIRI_HOME_TRANSLATIONS[language] ?? MANDIRI_HOME_TRANSLATIONS.en
    const localeMeta = generateLanguageSpecificMeta(language)
    const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

    const socialImage = '/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'

    // SEO Helper
    const pageTitle = language === 'id' 
        ? "Bengkel Las Bekasi #1 - Bengkel Las Mandiri | Jasa Las Terpercaya Sejak 1999"
        : `${t.heroTitle.replace(/<br\/>/g, ' ')} | Mandiri Steel Bekasi`;
    
    const pageDesc = language === 'id'
        ? "Bengkel Las Bekasi terpercaya sejak 1999. Jasa las pagar, kanopi, tralis & konstruksi baja. Harga murah, material SNI, garansi. Hubungi Bapak Maman Toha."
        : t.heroDesc;

    return (
        <div className="mandiri-home">

            <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
                <meta httpEquiv="content-language" content={localeMeta.lang} />
                <link rel="canonical" href={localizedUrls.canonical} />
                {localizedUrls.alternates.map((alternate) => (
                    <link key={`home-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
                ))}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={localizedUrls.canonical} />
                <meta property="og:image" content={socialImage} />
                <meta property="twitter:image" content={socialImage} />
                <meta property="og:locale" content={localeMeta.locale} />
                {OG_LOCALES.filter(altLocale => altLocale !== localeMeta.locale).map((altLocale) => (
                    <meta key={`home-og-${altLocale}`} property="og:locale:alternate" content={altLocale} />
                ))}
            </Helmet>

            <Header />

            {/* ===== HERO SECTION ===== */}
            <section className="mandiri-home__hero">
                <div className="mandiri-home__hero-bg">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="mandiri-home__hero-video"
                    >
                        <source src="/video-hero-mainlandingpage.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mandiri-home__hero-overlay" />
                <div className="mandiri-home__hero-content">
                    <div className="mandiri-home__hero-text">
                        <span className="mandiri-home__hero-eyebrow">{t.heroEyebrow}</span>
                        <h1 className="mandiri-home__hero-title" dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
                        <p className="mandiri-home__hero-desc">
                            {t.heroDesc}
                        </p>
                        <div className="mandiri-home__hero-actions">
                            <Link to="/products" className="mandiri-home__hero-btn mandiri-home__hero-btn--primary">
                                {t.btnProducts}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                            <Link to="/about" className="mandiri-home__hero-btn mandiri-home__hero-btn--secondary">
                                {t.btnLearn}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className="mandiri-home__stats">
                <div className="mandiri-home__stats-inner">
                    <div className="mandiri-home__stat">
                        <div className="mandiri-home__stat-number">25+</div>
                        <div className="mandiri-home__stat-label">{t.stat1}</div>
                    </div>
                    <div className="mandiri-home__stat">
                        <div className="mandiri-home__stat-number">1000+</div>
                        <div className="mandiri-home__stat-label">{t.stat2}</div>
                    </div>
                    <div className="mandiri-home__stat">
                        <div className="mandiri-home__stat-number">100%</div>
                        <div className="mandiri-home__stat-label">{t.stat3}</div>
                    </div>
                    <div className="mandiri-home__stat">
                        <div className="mandiri-home__stat-number">Murah</div>
                        <div className="mandiri-home__stat-label">{t.stat4}</div>
                    </div>
                </div>
            </section>

            {/* ===== HERITAGE SECTION ===== */}
            <section className="mandiri-home__heritage">
                <div className="mandiri-home__heritage-inner">
                    <div className="mandiri-home__heritage-image">
                        <img
                            src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
                            alt="Workshop Bengkel Las Mandiri di Bekasi"
                            loading="lazy"
                        />
                        <div className="mandiri-home__heritage-image-accent" />
                    </div>
                    <div className="mandiri-home__heritage-text">
                        <span className="mandiri-home__heritage-eyebrow">{t.heritageEyebrow}</span>
                        <h2 className="mandiri-home__heritage-title" dangerouslySetInnerHTML={{ __html: t.heritageTitle }} />
                        <p className="mandiri-home__heritage-desc">
                            {t.heritageDesc}
                        </p>
                        <div className="mandiri-home__heritage-features">
                            <div className="mandiri-home__heritage-feature">
                                <div className="mandiri-home__heritage-feature-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <span className="mandiri-home__heritage-feature-text" dangerouslySetInnerHTML={{ __html: t.feat1 }} />
                            </div>
                            <div className="mandiri-home__heritage-feature">
                                <div className="mandiri-home__heritage-feature-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <span className="mandiri-home__heritage-feature-text" dangerouslySetInnerHTML={{ __html: t.feat2 }} />
                            </div>
                            <div className="mandiri-home__heritage-feature">
                                <div className="mandiri-home__heritage-feature-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <span className="mandiri-home__heritage-feature-text" dangerouslySetInnerHTML={{ __html: t.feat3 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHO WE ARE GRID ===== */}
            <section className="mandiri-home__grid">
                <div className="mandiri-home__grid-inner">
                    <span className="mandiri-home__section-eyebrow">{t.whoEyebrow}</span>
                    <h2 className="mandiri-home__section-title">
                        <strong>{t.whoWeAre}</strong>
                    </h2>

                    <div className="mandiri-home__product-grid">
                        {/* Kanopi */}
                        <Link to="/products" className="mandiri-home__product-card">
                            <img
                                className="mandiri-home__product-card-image"
                                src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
                                alt="Kanopi Minimalis Bekasi - Bengkel Las Mandiri"
                                loading="lazy"
                            />
                            <div className="mandiri-home__product-card-body">
                                <span className="mandiri-home__product-card-tag">{t.cocoaCategory}</span>
                                <h3 className="mandiri-home__product-card-name">{t.cocoaTitle}</h3>
                                <p className="mandiri-home__product-card-desc">
                                    {t.cocoaDesc}
                                </p>
                                <span className="mandiri-home__product-card-link">
                                    {t.btnLearn}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Pagar */}
                        <Link to="/products" className="mandiri-home__product-card">
                            <img
                                className="mandiri-home__product-card-image"
                                src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
                                alt="Pagar Besi Bekasi - Bengkel Las Mandiri"
                                loading="lazy"
                            />
                            <div className="mandiri-home__product-card-body">
                                <span className="mandiri-home__product-card-tag">{t.clovesCategory}</span>
                                <h3 className="mandiri-home__product-card-name">{t.clovesTitle}</h3>
                                <p className="mandiri-home__product-card-desc">
                                    {t.clovesDesc}
                                </p>
                                <span className="mandiri-home__product-card-link">
                                    {t.btnLearn}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Konstruksi Baja */}
                        <Link to="/products" className="mandiri-home__product-card">
                            <img
                                className="mandiri-home__product-card-image"
                                src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
                                alt="Konstruksi Baja Bekasi - Bengkel Las Mandiri"
                                loading="lazy"
                            />
                            <div className="mandiri-home__product-card-body">
                                <span className="mandiri-home__product-card-tag">{t.cocopeatCategory}</span>
                                <h3 className="mandiri-home__product-card-name">{t.cocopeatTitle}</h3>
                                <p className="mandiri-home__product-card-desc">
                                    {t.cocopeatDesc}
                                </p>
                                <span className="mandiri-home__product-card-link">
                                    {t.btnLearn}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES SECTION ===== */}
            <section className="mandiri-home__sustainability">
                <div className="mandiri-home__sustainability-inner">
                    <div className="mandiri-home__sustainability-image">
                        <img
                            src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
                            alt="Keunggulan Bengkel Las Mandiri Bekasi"
                            loading="lazy"
                        />
                        <span className="mandiri-home__sustainability-badge">{t.sustainBadge}</span>
                    </div>
                    <div className="mandiri-home__sustainability-content">
                        <h3 dangerouslySetInnerHTML={{ __html: t.sustainTitle }} />
                        <p>
                            {t.sustainDesc}
                        </p>
                        <ul className="mandiri-home__sustainability-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                {t.sustainList1}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                {t.sustainList2}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                {t.sustainList3}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                {t.sustainList4}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== CTA / CONTACT SECTION ===== */}
            <section className="mandiri-home__cta">
                <div className="mandiri-home__cta-inner">
                    <div>
                        <span className="mandiri-home__cta-eyebrow">{t.ctaEyebrow}</span>
                        <h2 className="mandiri-home__cta-title" dangerouslySetInnerHTML={{ __html: t.ctaTitle }} />
                        <p className="mandiri-home__cta-desc">
                            {t.ctaDesc}
                        </p>
                        <div className="mandiri-home__cta-actions">
                            <a
                                href="https://wa.me/6285212078467"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mandiri-home__cta-btn mandiri-home__cta-btn--primary"
                            >
                                {t.ctaBtn1}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </a>
                            <a
                                href="mailto:info@lasbekasi.com"
                                className="mandiri-home__cta-btn mandiri-home__cta-btn--secondary"
                            >
                                {t.ctaBtn2}
                            </a>
                        </div>
                    </div>

                    <div className="mandiri-home__cta-cards">
                        <div className="mandiri-home__cta-card">
                            <div className="mandiri-home__cta-card-icon">
                                <Mail size={24} />
                            </div>
                            <h4 className="mandiri-home__cta-card-title">{t.emailTitle}</h4>
                            <p className="mandiri-home__cta-card-desc">info@lasbekasi.com</p>
                        </div>
                        <div className="mandiri-home__cta-card">
                            <div className="mandiri-home__cta-card-icon">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="mandiri-home__cta-card-title">{t.waTitle}</h4>
                            <p className="mandiri-home__cta-card-desc">+62 852-1207-8467</p>
                        </div>
                        <div className="mandiri-home__cta-card">
                            <div className="mandiri-home__cta-card-icon">
                                <Globe size={24} />
                            </div>
                            <h4 className="mandiri-home__cta-card-title">{t.globalTitle}</h4>
                            <p className="mandiri-home__cta-card-desc">{t.globalDesc}</p>
                        </div>
                        <div className="mandiri-home__cta-card">
                            <div className="mandiri-home__cta-card-icon">
                                <Building2 size={24} />
                            </div>
                            <h4 className="mandiri-home__cta-card-title">{t.corpTitle}</h4>
                            <p className="mandiri-home__cta-card-desc">Bengkel Las Mandiri</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
