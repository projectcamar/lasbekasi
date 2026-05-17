import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NaturraHeader from '../components/NaturraHeader'
import NaturraFooter from '../components/NaturraFooter'
import './NaturraProducts.css'

import { NATURRA_PRODUCTS } from '../data/naturraProducts'
import { useLanguage } from '../utils/languageContext'
import { NATURRA_PRODUCTS_TRANSLATIONS } from '../utils/productsTranslations'
import { ALL_PRODUCT_TRANSLATIONS } from '../data/productTranslations'
import type { LanguageCode } from '../utils/languageManager'

const NaturraProducts: React.FC = () => {
    const { language } = useLanguage() as { language: LanguageCode }
    const t = NATURRA_PRODUCTS_TRANSLATIONS[language] || NATURRA_PRODUCTS_TRANSLATIONS.id
    const detailTranslations = ALL_PRODUCT_TRANSLATIONS[language] || ALL_PRODUCT_TRANSLATIONS.id
    const [activeCategory, setActiveCategory] = useState('all')

    const CATEGORIES = [
        { key: 'all', label: t.allProducts || 'Semua Layanan' },
        { key: 'kanopi', label: t.cocoaProducts || 'Kanopi' },
        { key: 'pagar', label: t.clovesProducts || 'Pagar & Gerbang' },
        { key: 'teralis', label: t.cocopeatProducts || 'Teralis & Railing' },
        { key: 'konstruksi', label: t.cocopeatDetailTitle || 'Konstruksi Baja' },
    ]

    const filteredProducts = activeCategory === 'all'
        ? NATURRA_PRODUCTS
        : NATURRA_PRODUCTS.filter(p => p.category === activeCategory)

    // Helper to get localized product name/desc from modular translations
    const getLocalizedName = (product: any) => {
        return detailTranslations[product.id]?.name || product.name
    }
    const getLocalizedDesc = (product: any) => {
        return detailTranslations[product.id]?.description || product.description
    }

    const getLocalizedSpec = (_product: any, spec: string, _index: number) => {
        return spec
    }

    return (
        <div className="naturra-products">
            <Helmet>
                <title>{t.pageTitle || 'Katalog Jasa Las Bekasi - Bengkel Las Mandiri'}</title>
                <meta name="description" content={t.metaDescription || 'Lihat katalog hasil pengerjaan kanopi, pagar, teralis, dan konstruksi baja dari Bengkel Las Mandiri Bekasi.'} />
                <link rel="canonical" href="https://lasbekasi.com/products" />
            </Helmet>

            <NaturraHeader />

            {/* ===== HERO ===== */}
            <section className="naturra-products__hero">
                <div className="naturra-products__hero-inner">
                    <h1 className="naturra-products__hero-title">{t.heroTitle || 'Katalog Layanan & Produk'}</h1>
                    <p className="naturra-products__hero-subtitle">
                        {t.heroSubtitle || 'Kami menyediakan berbagai solusi konstruksi besi dan stainless steel berkualitas untuk keindahan dan keamanan hunian Anda.'}
                    </p>
                </div>
            </section>

            {/* ===== CATEGORY TABS ===== */}
            <div className="naturra-products__tabs">
                <div className="naturra-products__tabs-inner">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.key}
                            className={`naturra-products__tab ${activeCategory === cat.key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="naturra-products__content">
                {/* Sidebar Filters */}
                <aside className="naturra-products__sidebar">
                    <div className="naturra-products__filter-group">
                        <h3 className="naturra-products__filter-title">{t.filterTitleCategory || 'Kategori Jasa'}</h3>
                        {CATEGORIES.map(cat => (
                            <label
                                key={cat.key}
                                className={`naturra-products__filter-option ${activeCategory === cat.key ? 'active' : ''}`}
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

                    <div className="naturra-products__filter-group">
                        <h3 className="naturra-products__filter-title">{t.qualityTitle || 'Material Unggulan'}</h3>
                        <div className="naturra-products__filter-option">
                            <span>Besi Hollow SNI</span>
                        </div>
                        <div className="naturra-products__filter-option">
                            <span>Alderon UPVC</span>
                        </div>
                        <div className="naturra-products__filter-option">
                            <span>Stainless Steel 304</span>
                        </div>
                    </div>

                    <div className="naturra-products__filter-group">
                        <h3 className="naturra-products__filter-title">{t.originTitle || 'Area Layanan'}</h3>
                        <div className="naturra-products__filter-option"><span>Bekasi Kota</span></div>
                        <div className="naturra-products__filter-option"><span>Cikarang</span></div>
                        <div className="naturra-products__filter-option"><span>Tambun</span></div>
                        <div className="naturra-products__filter-option"><span>Cibitung</span></div>
                        <div className="naturra-products__filter-option"><span>Setu</span></div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="naturra-products__grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="naturra-products__card">
                            <div className="naturra-products__card-image-wrapper">
                                <img
                                    className="naturra-products__card-image"
                                    src={product.image}
                                    alt={getLocalizedName(product)}
                                    loading="lazy"
                                />
                                <span className="naturra-products__card-badge">{product.badge}</span>
                            </div>
                            <div className="naturra-products__card-body">
                                <h3 className="naturra-products__card-name">{getLocalizedName(product)}</h3>
                                <p className="naturra-products__card-desc">{getLocalizedDesc(product)}</p>
                                <div className="naturra-products__card-specs">
                                    {product.specs.map((spec, i) => (
                                        <span key={i} className="naturra-products__card-spec">{getLocalizedSpec(product, spec, i)}</span>
                                    ))}
                                </div>
                                <div className="naturra-products__card-actions">
                                    <a
                                        href="https://wa.me/6285212078467"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="naturra-products__card-btn naturra-products__card-btn--primary"
                                    >
                                        {t.inquire || 'Tanya Harga'}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                    </a>
                                    <a
                                        href="mailto:info@lasbekasi.com"
                                        className="naturra-products__card-btn naturra-products__card-btn--secondary"
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
            <section className="naturra-products__detail-section">
                <div className="naturra-products__detail-inner">
                    <div className="naturra-products__detail-image">
                        <img
                            src="https://images.unsplash.com/photo-1628744448839-497746416629?w=800&q=80"
                            alt="Spesialis Kanopi Bekasi"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <span className="naturra-products__detail-eyebrow">{t.productFocus}</span>
                        <h2 className="naturra-products__detail-title">{t.cocoaDetailTitle}</h2>
                        <p className="naturra-products__detail-text">
                            {t.cocoaDetailText}
                        </p>
                        <ul className="naturra-products__detail-specs-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Kanopi Alderon Double & Single Layer
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Kanopi Kaca Tempered & Polycarbonate
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Rangka Hollow Galvanis Anti Karat
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Garansi Kebocoran dan Kekuatan Struktur
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pagar Detail */}
            <section className="naturra-products__detail-section">
                <div className="naturra-products__detail-inner reverse">
                    <div className="naturra-products__detail-image">
                        <img
                            src="https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=800&q=80"
                            alt="Pagar Besi Bekasi"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <span className="naturra-products__detail-eyebrow">{t.productFocus}</span>
                        <h2 className="naturra-products__detail-title">{t.clovesDetailTitle}</h2>
                        <p className="naturra-products__detail-text">
                            {t.clovesDetailText}
                        </p>
                        <ul className="naturra-products__detail-specs-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Material Besi Hollow SNI & Besi Tempa
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Finishing Cat Spray dengan Warna Custom
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Pilihan Pintu Geser, Lipat, atau Ayun
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Kualitas Pengelasan Halus dan Presisi
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Konstruksi Detail */}
            <section className="naturra-products__detail-section">
                <div className="naturra-products__detail-inner">
                    <div className="naturra-products__detail-image">
                        <img
                            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                            alt="Konstruksi Baja Bekasi"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <span className="naturra-products__detail-eyebrow">{t.productFocus}</span>
                        <h2 className="naturra-products__detail-title">{t.cocopeatDetailTitle}</h2>
                        <p className="naturra-products__detail-text">
                            {t.cocopeatDetailText}
                        </p>
                        <ul className="naturra-products__detail-specs-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Pengerjaan Struktur Baja WF (Wide Flange)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Mezanin Besi untuk Ruko dan Kantor
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Lapangan Futsal & Canopy Area Parkir Luas
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Tim Ahli Berpengalaman di Bekasi
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="naturra-products__cta">
                <div className="naturra-products__cta-inner">
                    <h2 className="naturra-products__cta-title">
                        {t.ctaTitle || 'Tertarik dengan Layanan Kami?'}
                    </h2>
                    <p className="naturra-products__cta-desc">
                        {t.ctaDesc || 'Hubungi kami untuk konsultasi gratis dan survei lokasi di wilayah Bekasi dan sekitarnya.'}
                    </p>
                    <div className="naturra-products__cta-actions">
                        <a
                            href="https://wa.me/6285212078467"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="naturra-products__cta-btn naturra-products__cta-btn--white"
                        >
                            {t.whatsappUs || 'WhatsApp Kami'}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </a>
                        <a
                            href="mailto:info@lasbekasi.com"
                            className="naturra-products__cta-btn naturra-products__cta-btn--outline"
                        >
                            {t.emailUs || 'Email Kami'}
                        </a>
                    </div>
                </div>
            </section>

            <NaturraFooter />
        </div>
    )
}

export default NaturraProducts
