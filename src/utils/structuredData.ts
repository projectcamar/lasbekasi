/**
 * Structured Data Utilities for SEO and Sitelinks Optimization
 */

export interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}

/**
 * Generate BreadcrumbList structured data
 */
export const generateBreadcrumbList = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };
};

/**
 * Generate Organization schema with sitelinks searchbox
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bengkel Las Mandiri",
    "alternateName": [
      "Las Bekasi",
      "Bengkel Las Bekasi",
      "Jasa Las Bekasi",
      "Tukang Las Bekasi",
      "Tukang Las Setu",
      "Tukang Las Cikarang",
      "Bengkel Las Setu",
      "Bengkel Las Cikarang",
      "Jasa Las Setu",
      "Jasa Las Cikarang"
    ],
    "url": "https://lasbekasi.com",
    "logo": "https://lasbekasi.com/android-chrome-512x512.png",
    "image": "https://lasbekasi.com/og-image.jpg",
    "description": "Bengkel Las Bekasi terpercaya sejak 1999. Jasa las pagar, kanopi, tralis & konstruksi baja profesional di Bekasi.",
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
      "latitude": "-6.2349",
      "longitude": "106.9896"
    },
    "telephone": "+6285212078467",
    "email": "info@lasbekasi.com",
    "sameAs": [
      "https://facebook.com/lasbekasi",
      "https://instagram.com/lasbekasi",
      "https://www.youtube.com/@bengkellasmandiribekasiofficial",
      "https://www.tiktok.com/@lasbekasi"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lasbekasi.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

/**
 * Generate WebSite schema with sitelinks searchbox
 */
export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bengkel Las Mandiri - Las Bekasi",
    "alternateName": [
      "Las Bekasi",
      "Bengkel Las Bekasi",
      "Jasa Las Bekasi",
      "Tukang Las Bekasi",
      "Tukang Las Setu",
      "Tukang Las Cikarang"
    ],
    "url": "https://lasbekasi.com",
    "description": "Bengkel Las Bekasi terpercaya sejak 1999. Jasa las pagar, kanopi, tralis & konstruksi baja profesional di Bekasi.",
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lasbekasi.com/android-chrome-512x512.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lasbekasi.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

/**
 * Generate LocalBusiness schema (enhanced for sitelinks)
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lasbekasi.com/#organization",
    "name": "Bengkel Las Mandiri",
    "alternateName": ["Las Bekasi", "Bengkel Las Bekasi", "Jasa Las Bekasi"],
    "image": "https://lasbekasi.com/og-image.jpg",
    "logo": "https://lasbekasi.com/android-chrome-512x512.png",
    "description": "Bengkel Las Bekasi terpercaya sejak 1999. Jasa las pagar, kanopi, tralis & konstruksi baja profesional di Bekasi. Harga murah, material SNI, garansi.",
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
      "latitude": "-6.2349",
      "longitude": "106.9896"
    },
    "url": "https://lasbekasi.com",
    "telephone": "+6285212078467",
    "priceRange": "Rp$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/lasbekasi",
      "https://instagram.com/lasbekasi",
      "https://www.youtube.com/@bengkellasmandiribekasiofficial",
      "https://www.tiktok.com/@lasbekasi"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Bekasi"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jasa Las Bekasi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Las Kanopi Bekasi",
            "url": "https://lasbekasi.com/jasa-las-kanopi-bekasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Las Pagar Bekasi",
            "url": "https://lasbekasi.com/jasa-las-pagar-bekasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Las Tralis Bekasi",
            "url": "https://lasbekasi.com/jasa-las-tralis-bekasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Layanan Las Bekasi",
            "url": "https://lasbekasi.com/layanan-las-bekasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kontak Bengkel Las Bekasi",
            "url": "https://lasbekasi.com/kontak-bengkel-las-bekasi"
          }
        }
      ]
    }
  };
};

/**
 * Generate ItemList for main navigation (helps with sitelinks)
 */
export const generateMainNavigationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Navigasi Utama Bengkel Las Bekasi",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "url": "https://lasbekasi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Layanan Las Bekasi",
        "url": "https://lasbekasi.com/layanan-las-bekasi"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tentang Kami",
        "url": "https://lasbekasi.com/tentang-kami"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Portfolio",
        "url": "https://lasbekasi.com/album-bengkel-las-mandiri"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Kontak",
        "url": "https://lasbekasi.com/kontak-bengkel-las-bekasi"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Blog",
        "url": "https://lasbekasi.com/blog"
      }
    ]
  };
};

