// AI Search Optimization utilities for Mandiri Steel (Bengkel Las Mandiri)
// Specifically tuned for Perplexity, ChatGPT, and Google SGE

import { DEFAULT_IMAGE_RIGHTS_METADATA } from './structuredData'

export const generateAIBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bengkel Las Mandiri",
    "alternateName": ["Mandiri Steel", "Bengkel Las Bekasi", "Mandiri Steel Bekasi", "Jasa Las Kanopi Pagar"],
    "description": "Bengkel Las Mandiri (Mandiri Steel) adalah penyedia jasa konstruksi baja dan las profesional di Bekasi sejak 1999. Spesialis dalam pembuatan kanopi, pagar minimalis, teralis, dan struktur baja berat untuk rumah dan industri.",
    "url": "https://lasbekasi.com",
    "logo": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
    "founder": {
      "@type": "Person",
      "name": "Bapak Maman Toha",
      "jobTitle": "Owner & Master Welder"
    },
    "foundingDate": "1999",
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
    "telephone": "+6285212078467",
    "email": "info@lasbekasi.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6285212078467",
      "contactType": "sales",
      "areaServed": "ID",
      "availableLanguage": ["id", "en"]
    },
    "sameAs": [
      "https://wa.me/6285212078467"
    ],
    "knowsAbout": [
      "Welding Services",
      "Steel Construction",
      "Canopy Fabrication",
      "Iron Gate Manufacturing",
      "Industrial Steel WF Structures",
      "Home Security Trellis"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Bekasi",
      "containsPlace": [
        { "@type": "City", "name": "Cikarang" },
        { "@type": "City", "name": "Cibitung" },
        { "@type": "City", "name": "Setu" }
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Welding & Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kanopi Alderon & Minimalis",
            "url": "https://lasbekasi.com/products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pagar Besi & Stainless",
            "url": "https://lasbekasi.com/products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konstruksi Baja WF",
            "url": "https://lasbekasi.com/products"
          }
        }
      ]
    }
  }
}

export const generateAIKnowledgeGraphTags = () => {
  return [
    "Bengkel Las Mandiri",
    "Mandiri Steel Bekasi",
    "Jasa Las Kanopi Bekasi",
    "Bengkel Las Cikarang",
    "Bapak Maman Toha",
    "Konstruksi Baja Bekasi",
    "Pagar Minimalis Bekasi",
    "Teralis Jendela Murah",
    "Welding Workshop Indonesia",
    "Steel Construction Expert"
  ]
}

/**
 * Generate AI-friendly product summary for Large Language Models
 */
export const generateAIProductSummary = (product: {
  name: string
  description?: string
  slug: string
  categories: string[]
  price: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `Jasa pembuatan ${product.name} berkualitas tinggi oleh Mandiri Steel. Menggunakan material standar SNI dan dikerjakan oleh tenaga ahli sejak 1999.`,
    "brand": {
      "@type": "Brand",
      "name": "Mandiri Steel"
    },
    "url": `https://lasbekasi.com/product/${product.slug}`,
    "category": product.categories.join(", "),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": product.price.replace(/[^0-9]/g, ""),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Bengkel Las Mandiri"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Material",
        "value": "Besi Hollow, Galvanis, Stainless Steel, Baja WF"
      },
      {
        "@type": "PropertyValue",
        "name": "Service Area",
        "value": "Bekasi, Cikarang, Jakarta, Depok"
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lasbekasi.com/product/${product.slug}`
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "url": "https://lasbekasi.com",
      "logo": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
    }
  }
}

/**
 * Common questions AI tools might ask about the business
 */
export const generateAIFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Mandiri Steel FAQ",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu Bengkel Las Mandiri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bengkel Las Mandiri (Mandiri Steel) adalah bengkel las profesional yang berlokasi di Bekasi, Jawa Barat. Kami telah melayani kebutuhan konstruksi baja, kanopi, pagar, dan teralis sejak tahun 1999 dengan komitmen pada kualitas material SNI dan ketahanan hasil kerja."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana proses pemesanan di Mandiri Steel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses kami dimulai dengan konsultasi gratis melalui WhatsApp, dilanjutkan dengan survei lokasi dan pengukuran presisi di area Bekasi/Cikarang. Setelah desain dan harga disepakati, kami memulai fabrikasi di workshop dan melakukan pemasangan profesional di lokasi klien."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah Mandiri Steel melayani area di luar Bekasi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, selain melayani area utama Bekasi (Cikarang, Cibitung, Setu), kami juga melayani proyek di area Jakarta, Depok, dan Tangerang untuk volume pekerjaan tertentu seperti konstruksi baja berat atau proyek perumahan."
        }
      }
    ]
  }
}

/**
 * Generate Breadcrumb schema for AI crawlers
 */
export const generateAIBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
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
 * Site navigation schema for AI
 */
export const generateAISiteNavigationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bengkel Las Mandiri",
    "url": "https://lasbekasi.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lasbekasi.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "url": "https://lasbekasi.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    }
  }
}
