import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Products.css'

import { ALL_PRODUCTS } from '../data/products'
import { useLanguage } from '../utils/languageContext'
import { MANDIRI_PRODUCTS_TRANSLATIONS } from '../utils/productsTranslations'
import type { LanguageCode } from '../utils/languageManager'

const Products: React.FC = () => {
    const { language } = useLanguage() as { language: LanguageCode }
    const t = MANDIRI_PRODUCTS_TRANSLATIONS[language] || MANDIRI_PRODUCTS_TRANSLATIONS.id
    const [activeCategory, setActiveCategory] = useState('all')

    const CATEGORIES = [
        { key: 'all', label: t.allProducts || 'Semua Layanan' },
        { key: 'Kanopi', label: t.cocoaProducts || 'Kanopi' },
        { key: 'Pagar', label: t.clovesProducts || 'Pagar & Gerbang' },
        { key: 'Teralis', label: t.cocopeatProducts || 'Teralis & Railing' },
        { key: 'Konstruksi', label: t.cocopeatDetailTitle || 'Konstruksi Baja' },
    ]

    const filteredProducts = activeCategory === 'all'
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter(p => p.categories.some(cat => cat.includes(activeCategory)))

    return (
        <div className="mandiri-products">
            <Helmet>
                <title>{t.pageTitle || 'Katalog Jasa Las Bekasi - Mandiri Steel'}</title>
                <meta name="description" content={t.metaDescription || 'Lihat katalog hasil pengerjaan kanopi, pagar, teralis, dan konstruksi baja dari Mandiri Steel Bekasi.'} />
                <link rel="canonical" href="https://lasbekasi.com/products" />
            </Helmet>

            <Header />

            {/* ===== HERO ===== */}
            <section className="mandiri-products__hero">
                <div className="mandiri-products__hero-inner">
                    <h1 className="mandiri-products__hero-title">{t.heroTitle || 'Katalog Layanan & Produk'}</h1>
                    <p className="mandiri-products__hero-subtitle">
                        {t.heroSubtitle || 'Kami menyediakan berbagai solusi konstruksi besi dan stainless steel berkualitas untuk keindahan dan keamanan hunian Anda.'}
                    </p>
                </div>
            </section>

            {/* ===== CATEGORY TABS ===== */}
            <div className="mandiri-products__tabs">
                <div className="mandiri-products__tabs-inner">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.key}
                            className={`mandiri-products__tab ${activeCategory === cat.key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="mandiri-products__content">
                {/* Sidebar Filters */}
                <aside className="mandiri-products__sidebar">
                    <div className="mandiri-products__filter-group">
                        <h3 className="mandiri-products__filter-title">{t.filterTitleCategory || 'Kategori Jasa'}</h3>
                        {CATEGORIES.map(cat => (
                            <label
                                key={cat.key}
                                className={`mandiri-products__filter-option ${activeCategory === cat.key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.key)}
                            >
                                <input
                                    type="checkbox"
                                    checked={activeCategory === cat.key}
                                    onChange={() => setActiveCategory(cat.key)}
                                />
                                {cat.label}
                            </label>
                        ))}
                    </div>

                    <div className="mandiri-products__filter-group">
                        <h3 className="mandiri-products__filter-title">{t.qualityTitle || 'Material Unggulan'}</h3>
                        <div className="mandiri-products__filter-option"><span>Besi Hollow SNI</span></div>
                        <div className="mandiri-products__filter-option"><span>Alderon UPVC</span></div>
                        <div className="mandiri-products__filter-option"><span>Stainless Steel 304</span></div>
                    </div>

                    <div className="mandiri-products__filter-group">
                        <h3 className="mandiri-products__filter-title">{t.originTitle || 'Area Layanan'}</h3>
                        <div className="mandiri-products__filter-option"><span>Bekasi Kota</span></div>
                        <div className="mandiri-products__filter-option"><span>Cikarang</span></div>
                        <div className="mandiri-products__filter-option"><span>Tambun</span></div>
                        <div className="mandiri-products__filter-option"><span>Cibitung</span></div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="mandiri-products__grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="mandiri-products__card">
                            <div className="mandiri-products__card-image-wrapper">
                                <img
                                    className="mandiri-products__card-image"
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                />
                                <span className="mandiri-products__card-badge">{product.categories[0]}</span>
                            </div>
                            <div className="mandiri-products__card-body">
                                <h3 className="mandiri-products__card-name">{product.name}</h3>
                                <p className="mandiri-products__card-desc">{product.price}</p>
                                <div className="mandiri-products__card-specs">
                                    {product.variants?.map((v, i) => (
                                        <span key={i} className="mandiri-products__card-spec">{v.name}</span>
                                    ))}
                                </div>
                                <div className="mandiri-products__card-actions">
                                    <a
                                        href="https://wa.me/6285212078467"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mandiri-products__card-btn mandiri-products__card-btn--primary"
                                    >
                                        {t.inquire || 'Tanya Harga'}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                    </a>
                                    <a
                                        href="mailto:info@lasbekasi.com"
                                        className="mandiri-products__card-btn mandiri-products__card-btn--secondary"
                                    >
                                        {t.email || 'Email'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== DETAILED PRODUCT SECTIONS ===== */}

            {/* Kanopi Detail */}
            <section className="mandiri-products__detail-section">
                <div className="mandiri-products__detail-inner">
                    <div className="mandiri-products__detail-image">
                        <img src="https://images.unsplash.com/photo-1628744448839-497746416629?w=800&q=80" alt="Spesialis Kanopi Bekasi" loading="lazy" />
                    </div>
                    <div>
                        <span className="mandiri-products__detail-eyebrow">{t.productFocus}</span>
                        <h2 className="mandiri-products__detail-title">{t.cocoaDetailTitle}</h2>
                        <p className="mandiri-products__detail-text">{t.cocoaDetailText}</p>
                        <ul className="mandiri-products__detail-specs-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Kanopi Alderon Double & Single Layer</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Kanopi Kaca Tempered & Polycarbonate</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Rangka Hollow Galvanis Anti Karat</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pagar Detail */}
            <section className="mandiri-products__detail-section">
                <div className="mandiri-products__detail-inner reverse">
                    <div className="mandiri-products__detail-image">
                        <img src="https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=800&q=80" alt="Pagar Besi Bekasi" loading="lazy" />
                    </div>
                    <div>
                        <span className="mandiri-products__detail-eyebrow">{t.productFocus}</span>
                        <h2 className="mandiri-products__detail-title">{t.clovesDetailTitle}</h2>
                        <p className="mandiri-products__detail-text">{t.clovesDetailText}</p>
                        <ul className="mandiri-products__detail-specs-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Material Besi Hollow SNI & Besi Tempa</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Finishing Cat Spray dengan Warna Custom</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="mandiri-products__cta">
                <div className="mandiri-products__cta-inner">
                    <h2 className="mandiri-products__cta-title">{t.ctaTitle}</h2>
                    <p className="mandiri-products__cta-desc">{t.ctaDesc}</p>
                    <div className="mandiri-products__cta-actions">
                        <a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer" className="mandiri-products__cta-btn mandiri-products__cta-btn--white">{t.whatsappUs}</a>
                        <a href="mailto:info@lasbekasi.com" className="mandiri-products__cta-btn mandiri-products__cta-btn--outline">{t.emailUs}</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Products
