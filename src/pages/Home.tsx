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
import FAQSection from '../components/HomepageFAQ'

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

    // === RICH SCHEMAS ===
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Bengkel Las Mandiri",
        "url": "https://lasbekasi.com/",
        "description": pageDesc,
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lasbekasi.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const compositeBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "GeneralContractor"],
        "@id": "https://lasbekasi.com/#business",
        "name": "Bengkel Las Mandiri",
        "alternateName": [
            "Mandiri Steel",
            "Bengkel Las Bekasi",
            "Mandiri Steel Bekasi",
            "Jasa Las Bekasi"
        ],
        "url": "https://lasbekasi.com/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
            "width": 250,
            "height": 60
        },
        "image": {
            "@type": "ImageObject",
            "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
            "width": 1200,
            "height": 630
        },
        "description": pageDesc,
        "foundingDate": "1999-01-01",
        "foundingLocation": {
            "@type": "Place",
            "name": "Bekasi, Indonesia"
        },
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 15
        },
        "slogan": language === 'id' ? "Kualitas Las Kokoh & Terpercaya Sejak 1999" : "Trusted Welding Quality Since 1999",
        "telephone": "+6285212078467",
        "email": "info@lasbekasi.com",
        "priceRange": "Rp 450.000 - Rp 100.000.000",
        "paymentAccepted": ["Cash", "Bank Transfer"],
        "currenciesAccepted": "IDR",
        "hasMap": "https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
            "addressLocality": "Cikarang Barat",
            "addressRegion": "Jawa Barat",
            "postalCode": "17320",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.3120,
            "longitude": 107.0515
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
            }
        ],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+6285212078467",
                "contactType": "customer service",
                "areaServed": "Bekasi dan sekitarnya",
                "availableLanguage": ["Indonesian", "English"]
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250",
            "reviewCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
        },
        "founder": {
            "@type": "Person",
            "name": "Bapak Maman Toha",
            "jobTitle": language === 'id' ? "Pemilik & Kepala Bengkel" : "Owner & Workshop Head"
        },
        "sameAs": [
            "https://www.instagram.com/bengkellasmandiri",
            "https://www.facebook.com/bengkellasmandiri",
            "https://wa.me/6285212078467"
        ],
        "knowsAbout": [
            "Jasa Las Listrik",
            "Konstruksi Baja",
            "Kanopi Minimalis",
            "Pagar Besi Tempa",
            "Teralis Jendela",
            "Railing Tangga Stainless",
            "Railing Balkon",
            "Pintu Dorong",
            "Pintu Kayu Ulin",
            "Bike Rack"
        ],
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": language === 'id' ? "Jasa Las Kanopi Bekasi" : "Bekasi Canopy Welding Service",
                    "description": language === 'id' ? "Pembuatan kanopi minimalis dan berbagai jenis kanopi dengan bahan berkualitas." : "Fabrication of minimalist canopies and various canopy types with quality materials."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": language === 'id' ? "Jasa Las Pagar Besi Bekasi" : "Bekasi Iron Fence Welding Service",
                    "description": language === 'id' ? "Pembuatan pagar besi tempa dan pagar minimalis untuk rumah dan bangunan." : "Fabrication of wrought iron and minimalist fences for houses and buildings."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": language === 'id' ? "Jasa Las Teralis Bekasi" : "Bekasi Window Trellis Welding Service",
                    "description": language === 'id' ? "Pembuatan teralis jendela anti maling dengan desain custom." : "Fabrication of anti-theft window trellises with custom designs."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": language === 'id' ? "Jasa Konstruksi Baja Bekasi" : "Bekasi Steel Construction Service",
                    "description": language === 'id' ? "Konstruksi baja ringan dan berat untuk bangunan komersial dan residensial." : "Light and heavy steel construction for commercial and residential buildings."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": language === 'id' ? "Jasa Las Railing Tangga Bekasi" : "Bekasi Stair Railing Welding Service",
                    "description": language === 'id' ? "Pembuatan railing tangga stainless steel dan besi dengan desain modern." : "Fabrication of stainless steel and iron stair railings with modern designs."
                }
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": language === 'id' ? "Katalog Layanan Bengkel Las Mandiri" : "Mandiri Steel Service Catalog",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": language === 'id' ? "Layanan Las Utama" : "Core Welding Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Kanopi Minimalis Bekasi" : "Minimalist Canopy Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Pagar Besi Bekasi" : "Iron Fence Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Teralis Jendela Bekasi" : "Window Trellis Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Konstruksi Baja Bekasi" : "Steel Construction Bekasi" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": language === 'id' ? "Layanan Las Tambahan" : "Additional Welding Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Railing Tangga Stainless Bekasi" : "Stainless Stair Railing Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Railing Balkon Bekasi" : "Balcony Railing Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Pintu Dorong Bekasi" : "Sliding Gate Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Pintu Kayu Ulin Bekasi" : "Ironwood Gate Bekasi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === 'id' ? "Bike Rack Bekasi" : "Bike Rack Bekasi" } }
                    ]
                }
            ]
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": language === 'id' ? "Beranda" : "Home",
                "item": "https://lasbekasi.com/"
            }
        ]
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": language === 'id' ? "Layanan Bengkel Las Mandiri" : "Mandiri Steel Services",
        "description": language === 'id' ? "Daftar layanan las besi dan baja custom di Bekasi" : "List of custom iron and steel welding services in Bekasi",
        "numberOfItems": 5,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Product",
                    "name": language === 'id' ? "Kanopi Minimalis & Alderon" : "Minimalist & Alderon Canopy",
                    "description": language === 'id' ? "Kanopi hollow tebal berkualitas dengan atap Alderon, Spandek, atau Polycarbonate." : "Premium thick hollow canopy with Alderon, Spandek, or Polycarbonate roof.",
                    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                    "url": "https://lasbekasi.com/products",
                    "brand": {
                        "@type": "Brand",
                        "name": "Bengkel Las Mandiri"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Product",
                    "name": language === 'id' ? "Pagar & Gerbang Besi" : "Iron Fence & Gate",
                    "description": language === 'id' ? "Pagar minimalis modern, besi tempa klasik, atau stainless steel custom." : "Modern minimalist, classic wrought iron, or custom stainless steel fence.",
                    "image": "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
                    "url": "https://lasbekasi.com/products",
                    "brand": {
                        "@type": "Brand",
                        "name": "Bengkel Las Mandiri"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Product",
                    "name": language === 'id' ? "Konstruksi Baja WF & Mezanin" : "WF Steel Construction & Mezzanine",
                    "description": language === 'id' ? "Rangka baja WF/H-Beam untuk gudang, pabrik, lapangan futsal, atau dak mezanin." : "WF/H-Beam steel frame for warehouses, factories, futsal courts, or mezzanine decks.",
                    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                    "url": "https://lasbekasi.com/products",
                    "brand": {
                        "@type": "Brand",
                        "name": "Bengkel Las Mandiri"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Product",
                    "name": language === 'id' ? "Teralis Pengaman Jendela" : "Window Security Trellis",
                    "description": language === 'id' ? "Pengaman jendela dari besi solid behel atau ulir dengan motif estetik." : "Solid iron window security grills with aesthetic motifs.",
                    "image": "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
                    "url": "https://lasbekasi.com/products",
                    "brand": {
                        "@type": "Brand",
                        "name": "Bengkel Las Mandiri"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Product",
                    "name": language === 'id' ? "Railing Tangga & Balkon" : "Stair & Balkony Railing",
                    "description": language === 'id' ? "Railing tangga besi, kayu, dan railing balkon pengaman stainless steel." : "Iron, wood stair railings and stainless steel safety balcony railings.",
                    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                    "url": "https://lasbekasi.com/products",
                    "brand": {
                        "@type": "Brand",
                        "name": "Bengkel Las Mandiri"
                    }
                }
            }
        ]
    };

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


                {/* Structured JSON-LD Schemas */}
                <script type="application/ld+json">
                    {JSON.stringify(websiteSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(compositeBusinessSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(itemListSchema)}
                </script>
            </Helmet>

            <Header />

            {/* ===== HERO SECTION ===== */}
            <section className="mandiri-home__hero">
                <div className="mandiri-home__hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920"
                        alt="Bengkel Las Mandiri Jasa Las Bekasi"
                        className="mandiri-home__hero-image"
                        loading="eager"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
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
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
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
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
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
                                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80"
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
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
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
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
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

            {/* ===== FAQ SECTION ===== */}
            <FAQSection isIndonesian={language === 'id'} language={language} />

            <Footer />
        </div>
    )
}

export default Home
