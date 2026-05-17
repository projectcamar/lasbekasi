import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import type { Product } from '../data/products'
import { convertIDRToUSD, convertIDRToCurrency } from '../utils/currencyConverter'
import { generateImageObjectSchema } from '../utils/structuredData'
import type { LanguageCode } from '../utils/languageManager'
import './BlogProductShowcase.css'
import './DualLanguage.css'

interface BlogProductShowcaseProps {
  products: Product[]
  heading?: string
  description?: string
  language?: LanguageCode
}

const BLOG_PRODUCT_SHOWCASE_TRANSLATIONS: Record<LanguageCode, {
  defaultHeading: string
  defaultDescription: string
  ourProduct: string
  ourCommodity: string
  viewProductDetails: string
  viewAllProducts: string
  viewAllProductsTitle: string
  viewAllProductsAria: string
}> = {
  id: {
    defaultHeading: 'Layanan Bengkel Las Terkait',
    defaultDescription: 'Berikut adalah layanan bengkel las kustom dari Mandiri Steel yang relevan dengan topik artikel ini. Semua pengerjaan menggunakan material SNI dengan garansi struktur.',
    ourProduct: 'PRODUK KAMI',
    ourCommodity: 'LAYANAN KAMI',
    viewProductDetails: 'Lihat Detail Layanan',
    viewAllProducts: 'Lihat Semua Layanan',
    viewAllProductsTitle: 'Lihat Semua Layanan Bengkel Las Mandiri Steel',
    viewAllProductsAria: 'Lihat semua layanan bengkel las dan kanopi'
  },
  en: {
    defaultHeading: 'Related Welding Services',
    defaultDescription: 'Below are our custom metal works and welding services by Mandiri Steel relevant to this topic. All projects are built with SNI certified steel and full warranty.',
    ourProduct: 'OUR PRODUCT',
    ourCommodity: 'OUR SERVICES',
    viewProductDetails: 'View Service Details',
    viewAllProducts: 'View All Services',
    viewAllProductsTitle: 'View All Custom Metal Works & Welding Services',
    viewAllProductsAria: 'View all custom metal works and welding services'
  },
  ar: {
    defaultHeading: 'خدمات اللحام ذات الصلة',
    defaultDescription: 'فيما يلي خدمات تشكيل المعادن واللحام المخصصة من مانديري ستيل ذات الصلة بهذا الموضوع. جميع المشاريع تُصنع بمعايير SNI مع ضمان كامل.',
    ourProduct: 'منتجنا',
    ourCommodity: 'خدماتنا',
    viewProductDetails: 'عرض تفاصيل الخدمة',
    viewAllProducts: 'عرض جميع الخدمات',
    viewAllProductsTitle: 'عرض جميع خدمات أعمال المعادن واللحام من مانديري ستيل',
    viewAllProductsAria: 'عرض جميع خدمات اللحام والمظلات'
  },
  zh: {
    defaultHeading: '相关电焊与铁艺服务',
    defaultDescription: '以下是与本文主题相关的 Mandiri Steel 精选金属定制及电焊服务。所有项目均使用 SNI 认证钢材，并提供完整结构保修。',
    ourProduct: '我们的产品',
    ourCommodity: '我们的服务',
    viewProductDetails: '查看服务详情',
    viewAllProducts: '查看所有服务',
    viewAllProductsTitle: '查看 Mandiri Steel 所有金属制造与电焊服务',
    viewAllProductsAria: '查看所有雨棚及焊接服务'
  },
  ja: {
    defaultHeading: '関連する溶接・メタルワーク施工',
    defaultDescription: '以下は、この記事に関連する Mandiri Steel のカスタム金属製作・溶接サービスです。すべての施工でSNI規格材を使用し、安心の構造保証付きです。',
    ourProduct: '当社の製品',
    ourCommodity: '当社のサービス',
    viewProductDetails: '施工詳細を見る',
    viewAllProducts: 'すべてのサービスを見る',
    viewAllProductsTitle: 'Mandiri Steel のすべての金属製作・溶接施工を見る',
    viewAllProductsAria: 'すべてのキャノピーおよび溶接施工を見る'
  },
  es: {
    defaultHeading: 'Servicios de Herrería Relacionados',
    defaultDescription: 'A continuación se muestran nuestros servicios de herrería y estructuras de acero de Mandiri Steel. Todos los proyectos se fabrican con acero SNI y garantía estructural.',
    ourProduct: 'NUESTRO PRODUCTO',
    ourCommodity: 'NUESTROS SERVICIOS',
    viewProductDetails: 'Ver Detalles del Servicio',
    viewAllProducts: 'Ver Todos los Servicios',
    viewAllProductsTitle: 'Ver Todos los Servicios de Herrería y Estructuras Metálicas',
    viewAllProductsAria: 'Ver todos los servicios de herrería y marquesinas'
  },
  fr: {
    defaultHeading: 'Prestations de Ferronnerie Associées',
    defaultDescription: 'Voici nos ouvrages métalliques et travaux de soudure sur mesure de Mandiri Steel associés à ce sujet. Tous les projets utilisent de l\'acier SNI avec garantie décennale.',
    ourProduct: 'NOTRE PRODUIT',
    ourCommodity: 'NOS PRESTATIONS',
    viewProductDetails: 'Voir les Détails de la Prestation',
    viewAllProducts: 'Voir Toutes les Prestations',
    viewAllProductsTitle: 'Voir Toutes les Prestations de Ferronnerie et Ouvrages Métalliques',
    viewAllProductsAria: 'Voir tous les services de soudure et d\'auvents'
  },
  ko: {
    defaultHeading: '관련 용접 및 금속 제작 서비스',
    defaultDescription: '다음은 이 기사의 내용과 관련된 Mandiri Steel의 맞춤형 금속 구조물 제작 및 용접 서비스입니다. 모든 프로젝트는 SNI 강재와 보증서로 견고하게 시공됩니다.',
    ourProduct: '우리의 제품',
    ourCommodity: '우리의 서비스',
    viewProductDetails: '시공 상세 보기',
    viewAllProducts: '모든 서비스 보기',
    viewAllProductsTitle: 'Mandiri Steel의 모든 금속 구조물 및 용접 서비스 보기',
    viewAllProductsAria: '모든 캐노피 및 용접 서비스 보기'
  }
};

// Language to currency mapping (only non-IDR highlight currencies)
const LANGUAGE_CURRENCY_MAP: { [key: string]: 'KRW' | 'JPY' | 'CNY' | 'SAR' | 'EUR' | 'USD' | null } = {
  'ko': 'KRW',
  'ja': 'JPY',
  'zh': 'CNY',
  'ar': 'SAR',
  'es': 'EUR',
  'fr': 'EUR',
  'en': 'USD', // English highlights USD
  'id': null   // Indonesian highlights IDR (original price)
}

/**
 * Komponen Product Showcase untuk Artikel Blog
 * Menampilkan produk yang relevan dengan konten artikel
 * dengan desain yang menarik dan hard-selling
 */
const BlogProductShowcase: React.FC<BlogProductShowcaseProps> = ({
  products,
  heading,
  description,
  language = 'en'
}) => {
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})
  const [highlightedPrices, setHighlightedPrices] = useState<{ [key: number]: string }>({})

  const translations = BLOG_PRODUCT_SHOWCASE_TRANSLATIONS[language] || BLOG_PRODUCT_SHOWCASE_TRANSLATIONS.en

  useEffect(() => {
    const convertPrices = async () => {
      const usdPriceMap: { [key: number]: string } = {}
      const highlightedPriceMap: { [key: number]: string } = {}

      const targetCurrency = LANGUAGE_CURRENCY_MAP[language] || 'USD'

      for (const product of products) {
        // Always convert to USD
        const usdPrice = await convertIDRToUSD(product.price)
        usdPriceMap[product.id] = usdPrice

        // Determine highlighted price based on language
        if (language === 'id') {
          // Indonesian: highlight IDR (original price), show USD as secondary
          highlightedPriceMap[product.id] = product.price
        } else if (language === 'en') {
          // English: highlight USD, show IDR as secondary
          highlightedPriceMap[product.id] = usdPrice
        } else if (targetCurrency && targetCurrency !== 'USD') {
          // Other languages with local highlight currency
          const highlightedPrice = await convertIDRToCurrency(product.price, targetCurrency)
          highlightedPriceMap[product.id] = highlightedPrice
        } else {
          // Fallback: use USD
          highlightedPriceMap[product.id] = usdPrice
        }
      }

      setUsdPrices(usdPriceMap)
      setHighlightedPrices(highlightedPriceMap)
    }
    convertPrices()
  }, [products, language])

  if (!products || products.length === 0) {
    return null
  }

  // Tampilkan maksimal 3 produk untuk compact view
  const displayProducts = products.slice(0, 3)

  // Generate Product schema untuk setiap produk
  const generateProductSchema = (product: Product) => {
    const priceValue = product.price.replace(/[^0-9]/g, '')
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": `Jasa pasang ${product.name} berkualitas tinggi dari Bengkel Las Mandiri Bekasi (Mandiri Steel). Rangka kokoh, finishing rapi, tahan karat, dan bergaransi resmi.`,
      "image": product.image,
      "category": product.categories.join(', '),
      "brand": {
        "@type": "Brand",
        "name": "Mandiri Steel"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Mandiri Steel",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bekasi",
          "addressRegion": "Jawa Barat",
          "addressCountry": "ID"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": `https://lasbekasi.com/product/${product.slug}`,
        "priceCurrency": "IDR",
        "price": priceValue,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Mandiri Steel",
          "url": "https://lasbekasi.com",
          "logo": "https://lasbekasi.com/logo.png",
          "image": "https://lasbekasi.com/og-image.jpg",
          "description": "Bengkel Las Mandiri Bekasi (Mandiri Steel) melayani jasa pembuatan kanopi, pagar besi, teralis, railing tangga, stainless steel, dan konstruksi baja berkualitas SNI sejak 1999."
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  }

  // Generate ItemList schema untuk showcase collection
  const generateItemListSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": heading || translations.defaultHeading,
      "description": description || "Koleksi layanan bengkel las dan kanopi kustom berkualitas premium dari Mandiri Steel Bekasi",
      "itemListElement": displayProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": generateProductSchema(product)
      }))
    }
  }

  // Generate image schemas untuk semua produk
  const productImageSchemas = displayProducts.map(product => {
    return generateImageObjectSchema({
      url: product.image,
      alt: `${product.name} - Layanan Bengkel Las Mandiri Steel Bekasi`,
      title: `${product.name} - Premium Custom Metal Works Bekasi`,
      width: 350,
      height: 250,
      description: `Pemasangan ${product.name} oleh tim spesialis Bengkel Las Mandiri Steel Bekasi. Menggunakan bahan SNI tebal dan kokoh.`,
      caption: `${product.name} - Mandiri Steel Bekasi`
    })
  })

  const itemListSchema = generateItemListSchema()

  return (
    <>
      {/* Structured Data for SEO */}
      <Helmet>
        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>

        {/* Product Schemas */}
        {displayProducts.map((product) => (
          <script key={`product-schema-${product.id}`} type="application/ld+json">
            {JSON.stringify(generateProductSchema(product))}
          </script>
        ))}

        {/* Image Schemas */}
        {productImageSchemas.map((imgSchema, imgIndex) => (
          <script key={`image-schema-${imgIndex}`} type="application/ld+json">
            {JSON.stringify(imgSchema)}
          </script>
        ))}
      </Helmet>

      <section className="blog-product-showcase" itemScope itemType="https://schema.org/ItemList">
        <div className="blog-product-showcase-container">
          <div className="blog-product-showcase-header">
            <h2 className="blog-product-showcase-heading" itemProp="name">
              {heading || translations.defaultHeading}
            </h2>
            {description && (
              <p className="blog-product-showcase-description">
                {description || translations.defaultDescription}
              </p>
            )}
          </div>

          <div className="blog-product-showcase-grid" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
            {displayProducts.map((product, index) => {
              const fullAlt = `${product.name} - Layanan Bengkel Las Mandiri Steel Bekasi. Menggunakan bahan SNI tebal dan kokoh.`
              const fullTitle = `${product.name} - Premium Custom Metal Works Bekasi dari Mandiri Steel.`

              return (
                <article
                  key={product.id}
                  itemScope
                  itemType="https://schema.org/Product"
                  className="blog-product-showcase-item"
                  data-item-position={index + 1}
                >
                  <Link
                    to="/products"
                    className="blog-product-showcase-card"
                    title={fullTitle}
                    itemProp="url"
                    rel="nofollow sponsored"
                    aria-label={`${translations.viewProductDetails}: ${product.name}`}
                  >
                    <div className="blog-product-showcase-image-wrapper" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                      <img
                        src={product.image}
                        alt={fullAlt}
                        title={fullTitle}
                        className="blog-product-showcase-image"
                        loading="lazy"
                        width="350"
                        height="250"
                        itemProp="contentUrl"
                        data-image-type="blog-product-showcase"
                        data-product-name={product.name}
                        data-product-id={product.id}
                        data-product-slug={product.slug}
                        data-category={product.categories.join(',')}
                        data-image-index={index + 1}
                        decoding="async"
                        fetchPriority={index < 2 ? "high" : "low"}
                      />
                      <meta itemProp="caption" content={`${product.name} - Mandiri Steel Bekasi`} />
                      <meta itemProp="description" content={`Jasa pembuatan dan pemasangan ${product.name} berkualitas tinggi dari Mandiri Steel Bekasi`} />
                      <meta itemProp="url" content={product.image} />
                      <div className="blog-product-showcase-badge">
                        <span className="blog-product-badge-text">{translations.ourProduct}</span>
                      </div>
                    </div>

                    <div className="blog-product-showcase-info">
                      <h3 className="blog-product-showcase-name" itemProp="name">
                        {product.name}
                      </h3>
                      <meta itemProp="description" content={`Jasa pasang ${product.name} minimalis premium dari Mandiri Steel Bekasi. Pengerjaan rapi, kokoh, dan bergaransi.`} />

                      <div className="blog-product-showcase-categories">
                        {product.categories.map((cat, idx) => (
                          <span key={idx} className="blog-product-category-tag" itemProp="category">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <div className="blog-product-showcase-price-container" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="priceCurrency" content="IDR" />
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        <meta itemProp="price" content={product.price.replace(/[^0-9]/g, '')} />
                        {usdPrices[product.id] && highlightedPrices[product.id] ? (
                          <>
                            <p className="blog-product-showcase-price-primary" itemProp="price">
                              {highlightedPrices[product.id]}
                            </p>
                            <p className="blog-product-showcase-price-secondary">
                              {language === 'en' ? product.price : usdPrices[product.id]}
                            </p>
                          </>
                        ) : (
                          <p className="blog-product-showcase-price-primary" itemProp="price">
                            {product.price}
                          </p>
                        )}
                      </div>

                      <div className="blog-product-showcase-cta">
                        <span className="blog-product-showcase-link">
                          {translations.viewProductDetails}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>

          <div className="blog-product-showcase-footer">
            <Link
              to="/products"
              className="blog-product-showcase-all-products-btn"
              title={translations.viewAllProductsTitle}
              rel="nofollow"
              aria-label={translations.viewAllProductsAria}
            >
              {translations.viewAllProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogProductShowcase

