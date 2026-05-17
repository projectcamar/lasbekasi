import { DEFAULT_IMAGE_RIGHTS_METADATA } from './structuredData'

// Advanced SEO Enhancement Utilities for Mandiri Steel (Bengkel Las Mandiri)
// Optimized for Google Page 1 Ranking in Bekasi Welding Market

/**
 * Generate comprehensive LocalBusiness schema with E-E-A-T signals
 * E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
 */
export const generateEnhancedOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bengkel Las Mandiri",
    "alternateName": [
      "Mandiri Steel",
      "Bengkel Las Bekasi",
      "Mandiri Steel Bekasi",
      "Jasa Las Kanopi Pagar Bekasi"
    ],
    "url": "https://lasbekasi.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
      "width": 250,
      "height": 60,
      ...DEFAULT_IMAGE_RIGHTS_METADATA
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
      "width": 1200,
      "height": 630,
      ...DEFAULT_IMAGE_RIGHTS_METADATA
    },
    "description": "Bengkel Las Mandiri (Mandiri Steel) adalah spesialis konstruksi baja dan jasa las terpercaya di Bekasi sejak 1999. Melayani pembuatan kanopi, pagar, teralis, dan konstruksi baja berat dengan material SNI dan garansi kualitas.",
    "foundingDate": "1999-01-01",
    "foundingLocation": {
      "@type": "Place",
      "name": "Bekasi, Indonesia"
    },
    "founder": {
      "@type": "Person",
      "name": "Bapak Maman Toha",
      "jobTitle": "Owner & Master Welder"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 15,
      "minValue": 10,
      "maxValue": 20
    },
    "slogan": "Kualitas Las Terpercaya Sejak 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
      "addressLocality": "Bekasi",
      "addressRegion": "Jawa Barat",
      "postalCode": "17320",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.3120,
      "longitude": 107.0515
    },
    "telephone": "6285212078467",
    "email": "info@lasbekasi.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "6285212078467",
        "contactType": "customer service",
        "email": "info@lasbekasi.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "21:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "6285212078467",
        "contactType": "sales",
        "email": "info@lasbekasi.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID"]
      }
    ],
    "sameAs": [
      "https://wa.me/6285212078467"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Bekasi",
      "geo": {
        "@type": "GeoShape",
        "addressCountry": "ID"
      }
    },
    "knowsAbout": [
      "Welding Services",
      "Canopy Installation",
      "Iron Gate Fabrication",
      "Steel Construction WF",
      "Home Security Trellis",
      "Stainless Steel Work",
      "Fence Repair & New Build",
      "Industrial Steel Structure",
      "Custom Metal Fabrication"
    ],
    "award": [
      "1000+ Proyek Selesai Sejak 1999",
      "25+ Tahun Pengalaman Industri Las",
      "Material Standar SNI Bergaransi"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Mandiri Steel",
      "logo": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
      "slogan": "Kualitas Las Terpercaya Sejak 1999"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Jasa Pembuatan Kanopi Minimalis & Alderon",
          "description": "Pembuatan kanopi dengan berbagai pilihan atap (Alderon, Kaca, Polycarbonate) menggunakan rangka hollow galvanis anti karat.",
          "serviceType": "Fabrication",
          "provider": {
            "@type": "Organization",
            "name": "Bengkel Las Mandiri"
          }
        }
      },
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "itemOffered": {
          "@type": "Service",
          "name": "Konsultasi & Survei Lokasi Gratis",
          "description": "Layanan survei dan pengukuran gratis untuk wilayah Bekasi dan sekitarnya.",
          "serviceType": "Consultation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Konstruksi Baja WF & Mezanin",
          "description": "Pembangunan struktur baja berat untuk gudang, pabrik, dan mezanin ruko.",
          "serviceType": "Construction",
          "areaServed": {
            "@type": "City",
            "name": "Bekasi"
          }
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Katalog Jasa Las 2025",
      "description": "Daftar lengkap layanan las: Kanopi, Pagar, Teralis, dan Konstruksi Baja"
    }
  }
}

/**
 * Generate BreadcrumbList schema for better navigation
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://lasbekasi.com${item.url}`
    }))
  }
}

/**
 * Generate WebPage schema with comprehensive metadata
 */
export const generateWebPageSchema = (page: {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": `https://lasbekasi.com${page.url}`,
    "inLanguage": "id-ID",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Bengkel Las Mandiri",
      "url": "https://lasbekasi.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    ...(page.image && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        "url": page.image,
        "width": 1200,
        "height": 630,
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    })
  }
}

/**
 * Generate HowTo schema for tutorial content
 */
export const generateHowToSchema = (howto: {
  name: string
  description: string
  totalTime?: string
  steps: Array<{ name: string; text: string; image?: string }>
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howto.name,
    "description": howto.description,
    ...(howto.totalTime && { totalTime: howto.totalTime }),
    "step": howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          "url": step.image,
          ...DEFAULT_IMAGE_RIGHTS_METADATA
        }
      })
    }))
  }
}

/**
 * Generate optimized meta description with CTA
 */
export const generateMetaDescription = (params: {
  product?: string
  service?: string
  location?: string
  type: 'product' | 'service' | 'blog' | 'page'
  cta?: string
}) => {
  const { product, service, location, type, cta } = params

  const descriptions = {
    product: `${product} dari Mandiri Steel - Kualitas las premium dengan material SNI. Hasil rapi, kuat, dan tahan lama. Melayani area ${location || 'Bekasi'}. ${cta || 'Hubungi kami!'}`,
    service: `${service} oleh Bengkel Las Mandiri. Pengalaman 25+ tahun spesialis besi dan baja di Bekasi. ${location || 'Cikarang & Bekasi'}. ${cta || 'Konsultasi gratis!'}`,
    blog: `Tips & Informasi ${product || service}. Wawasan dari ahli las Mandiri Steel dengan 25+ tahun pengalaman. ${cta || 'Baca selengkapnya!'}`,
    page: `${product || service} - Bengkel Las Mandiri spesialis jasa las Bekasi sejak 1999. Hasil bergaransi & harga bersaing. ${cta || 'Hubungi kami!'}`
  }

  return descriptions[type].substring(0, 160) // Google truncates at ~160 chars
}

/**
 * Generate SEO-optimized keywords
 */
export const generateKeywords = (primary: string[], secondary: string[], location: string[] = []) => {
  const baseKeywords = [
    'bengkel las bekasi',
    'jasa las cikarang',
    'kanopi minimalis bekasi',
    'pagar besi murah',
    'Bengkel Las Mandiri'
  ]

  return [...baseKeywords, ...primary, ...secondary, ...location].join(', ')
}

/**
 * Generate Open Graph tags
 */
export const generateOGTags = (params: {
  title: string
  description: string
  image?: string
  url: string
  type?: 'website' | 'article' | 'product'
}) => {
  return {
    'og:type': params.type || 'website',
    'og:title': params.title,
    'og:description': params.description,
    'og:image': params.image || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:url': `https://lasbekasi.com${params.url}`,
    'og:site_name': 'Bengkel Las Mandiri',
    'og:locale': 'id_ID'
  }
}

/**
 * Generate Twitter Card tags
 */
export const generateTwitterTags = (params: {
  title: string
  description: string
  image?: string
}) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': params.title,
    'twitter:description': params.description,
    'twitter:image': params.image || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    'twitter:site': '@mandiristeel'
  }
}

/**
 * Image optimization helper with SEO-friendly alt tags
 */
export const generateImageAlt = (params: {
  productName?: string
  category?: string
  action?: string
  location?: string
}) => {
  const { productName, category, action, location } = params

  const parts = [
    productName,
    category && `${category} kualitas SNI`,
    action || 'jasa las profesional',
    'Bengkel Las Mandiri',
    location && `${location}`
  ].filter(Boolean)

  return parts.join(' - ')
}

/**
 * Generate Video schema for YouTube embeds
 */
export const generateVideoSchema = (video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  embedUrl: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    "embedUrl": video.embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    }
  }
}

/**
 * Generate ItemList schema for category pages
 */
export const generateItemListSchema = (params: {
  name: string
  description: string
  items: Array<{ name: string; url: string; image?: string; position: number }>
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": params.name,
    "description": params.description,
    "numberOfItems": params.items.length,
    "itemListElement": params.items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "url": `https://lasbekasi.com${item.url}`,
      ...(item.image && { image: item.image })
    }))
  }
}

/**
 * Generate Review schema
 */
export const generateReviewSchema = (review: {
  author: string
  reviewBody: string
  rating: number
  datePublished: string
  itemReviewed: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": review.datePublished,
    "itemReviewed": {
      "@type": "Product",
      "name": review.itemReviewed,
      "brand": {
        "@type": "Brand",
        "name": "Mandiri Steel"
      }
    }
  }
}

/**
 * Calculate reading time for blog posts (SEO signal)
 */
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `PT${minutes}M`
}

/**
 * Generate Article schema for blog posts with E-E-A-T signals
 */
export const generateArticleSchema = (article: {
  title: string
  description: string
  content: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  category: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": "Welding Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Bengkel Las Mandiri"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        "width": 250,
        "height": 60,
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lasbekasi.com${article.url}`
    },
    "articleSection": article.category,
    "inLanguage": "id-ID",
    "wordCount": article.content.trim().split(/\s+/).length,
    "timeRequired": calculateReadingTime(article.content),
    "about": {
      "@type": "Thing",
      "name": "Welding & Steel Construction",
      "sameAs": "https://en.wikipedia.org/wiki/Welding"
    }
  }
}

/**
 * Enhanced LocalBusiness schema with more E-E-A-T signals
 */
export const generateEnhancedLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "name": "Bengkel Las Mandiri - Jasa Las & Konstruksi Baja Bekasi",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      },
      {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    ],
    "@id": "https://lasbekasi.com",
    "url": "https://lasbekasi.com",
    "telephone": "6285212078467",
    "priceRange": "Rp 450.000 - Rp 100.000.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
      "addressLocality": "Bekasi",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "21:00"
      }
    ],
    "paymentAccepted": "Cash, Bank Transfer",
    "currenciesAccepted": "IDR",
    "hasMap": "https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7"
  }
}

/**
 * Performance hints for image loading
 */
export const getImageLoadingStrategy = (position: 'hero' | 'above-fold' | 'below-fold') => {
  const strategies = {
    'hero': {
      loading: 'eager' as const,
      fetchPriority: 'high' as const,
      decoding: 'sync' as const
    },
    'above-fold': {
      loading: 'eager' as const,
      fetchPriority: 'high' as const,
      decoding: 'async' as const
    },
    'below-fold': {
      loading: 'lazy' as const,
      fetchPriority: 'low' as const,
      decoding: 'async' as const
    }
  }

  return strategies[position]
}

/**
 * Get optimal image dimensions for different contexts
 */
export const getImageDimensions = (context: 'hero' | 'product' | 'thumbnail' | 'og-image') => {
  const dimensions = {
    hero: { width: 1920, height: 1080, aspectRatio: '16/9' },
    product: { width: 800, height: 600, aspectRatio: '4/3' },
    thumbnail: { width: 400, height: 300, aspectRatio: '4/3' },
    'og-image': { width: 1200, height: 630, aspectRatio: '1.91/1' }
  }

  return dimensions[context]
}
