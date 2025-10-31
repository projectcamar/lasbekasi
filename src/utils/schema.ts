// Comprehensive Schema Utility for Bengkel Las Mandiri
// Includes geo-targeting for all Bekasi areas with coordinates

export interface GeoArea {
  name: string
  type: 'Kecamatan' | 'Kelurahan'
  parent?: string
  coordinates: {
    latitude: number
    longitude: number
  }
  postalCode?: string
}

// All Kota Bekasi areas with coordinates
export const kotaBekasiAreas: GeoArea[] = [
  // Bantargebang
  { name: 'Bantargebang', type: 'Kecamatan', coordinates: { latitude: -6.3333, longitude: 106.9833 } },
  { name: 'Bantargebang', type: 'Kelurahan', parent: 'Bantargebang', coordinates: { latitude: -6.3333, longitude: 106.9833 }, postalCode: '17151' },
  { name: 'Ciketing Udik', type: 'Kelurahan', parent: 'Bantargebang', coordinates: { latitude: -6.3250, longitude: 106.9900 }, postalCode: '17153' },
  { name: 'Cikiwul', type: 'Kelurahan', parent: 'Bantargebang', coordinates: { latitude: -6.3400, longitude: 106.9850 }, postalCode: '17152' },
  { name: 'Sumur Batu', type: 'Kelurahan', parent: 'Bantargebang', coordinates: { latitude: -6.3500, longitude: 106.9900 }, postalCode: '17154' },

  // Bekasi Barat
  { name: 'Bekasi Barat', type: 'Kecamatan', coordinates: { latitude: -6.2349, longitude: 106.9896 } },
  { name: 'Bintara', type: 'Kelurahan', parent: 'Bekasi Barat', coordinates: { latitude: -6.2300, longitude: 106.9850 }, postalCode: '17134' },
  { name: 'Bintara Jaya', type: 'Kelurahan', parent: 'Bekasi Barat', coordinates: { latitude: -6.2250, longitude: 106.9900 }, postalCode: '17136' },
  { name: 'Jakasampurna', type: 'Kelurahan', parent: 'Bekasi Barat', coordinates: { latitude: -6.2400, longitude: 106.9900 }, postalCode: '17137' },
  { name: 'Kota Baru', type: 'Kelurahan', parent: 'Bekasi Barat', coordinates: { latitude: -6.2350, longitude: 107.0000 }, postalCode: '17139' },
  { name: 'Kranji', type: 'Kelurahan', parent: 'Bekasi Barat', coordinates: { latitude: -6.2200, longitude: 106.9950 }, postalCode: '17135' },

  // Bekasi Selatan
  { name: 'Bekasi Selatan', type: 'Kecamatan', coordinates: { latitude: -6.2610, longitude: 107.0100 } },
  { name: 'Jakamulya', type: 'Kelurahan', parent: 'Bekasi Selatan', coordinates: { latitude: -6.2650, longitude: 107.0050 }, postalCode: '17146' },
  { name: 'Jakasetia', type: 'Kelurahan', parent: 'Bekasi Selatan', coordinates: { latitude: -6.2700, longitude: 107.0100 }, postalCode: '17147' },
  { name: 'Kayuringin Jaya', type: 'Kelurahan', parent: 'Bekasi Selatan', coordinates: { latitude: -6.2600, longitude: 107.0150 }, postalCode: '17144' },
  { name: 'Marga Jaya', type: 'Kelurahan', parent: 'Bekasi Selatan', coordinates: { latitude: -6.2550, longitude: 107.0050 }, postalCode: '17141' },
  { name: 'Pekayon Jaya', type: 'Kelurahan', parent: 'Bekasi Selatan', coordinates: { latitude: -6.2750, longitude: 107.0200 }, postalCode: '17148' },

  // Bekasi Timur
  { name: 'Bekasi Timur', type: 'Kecamatan', coordinates: { latitude: -6.2435, longitude: 107.0090 } },
  { name: 'Aren Jaya', type: 'Kelurahan', parent: 'Bekasi Timur', coordinates: { latitude: -6.2500, longitude: 107.0150 }, postalCode: '17118' },
  { name: 'Bekasi Jaya', type: 'Kelurahan', parent: 'Bekasi Timur', coordinates: { latitude: -6.2400, longitude: 107.0100 }, postalCode: '17112' },
  { name: 'Duren Jaya', type: 'Kelurahan', parent: 'Bekasi Timur', coordinates: { latitude: -6.2350, longitude: 107.0050 }, postalCode: '17111' },
  { name: 'Margahayu', type: 'Kelurahan', parent: 'Bekasi Timur', coordinates: { latitude: -6.2450, longitude: 107.0200 }, postalCode: '17113' },

  // Bekasi Utara
  { name: 'Bekasi Utara', type: 'Kecamatan', coordinates: { latitude: -6.2167, longitude: 107.0025 } },
  { name: 'Harapan Baru', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2100, longitude: 107.0000 }, postalCode: '17123' },
  { name: 'Harapan Jaya', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2150, longitude: 107.0050 }, postalCode: '17124' },
  { name: 'Kaliabang Tengah', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2200, longitude: 107.0100 }, postalCode: '17125' },
  { name: 'Marga Mulya', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2250, longitude: 107.0150 }, postalCode: '17126' },
  { name: 'Perwira', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2050, longitude: 107.0000 }, postalCode: '17122' },
  { name: 'Teluk Pucung', type: 'Kelurahan', parent: 'Bekasi Utara', coordinates: { latitude: -6.2000, longitude: 106.9950 }, postalCode: '17121' },

  // Jatiasih
  { name: 'Jatiasih', type: 'Kecamatan', coordinates: { latitude: -6.3050, longitude: 106.9550 } },
  { name: 'Jatiasih', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3050, longitude: 106.9550 }, postalCode: '17423' },
  { name: 'Jatikramat', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3000, longitude: 106.9500 }, postalCode: '17421' },
  { name: 'Jatiluhur', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3100, longitude: 106.9600 }, postalCode: '17425' },
  { name: 'Jatimekar', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3150, longitude: 106.9550 }, postalCode: '17422' },
  { name: 'Jatirasa', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3000, longitude: 106.9600 }, postalCode: '17424' },
  { name: 'Jatisari', type: 'Kelurahan', parent: 'Jatiasih', coordinates: { latitude: -6.3200, longitude: 106.9600 }, postalCode: '17426' },

  // Jatisampurna
  { name: 'Jatisampurna', type: 'Kecamatan', coordinates: { latitude: -6.3400, longitude: 106.9300 } },
  { name: 'Jatikarya', type: 'Kelurahan', parent: 'Jatisampurna', coordinates: { latitude: -6.3350, longitude: 106.9250 }, postalCode: '17435' },
  { name: 'Jatiraden', type: 'Kelurahan', parent: 'Jatisampurna', coordinates: { latitude: -6.3450, longitude: 106.9300 }, postalCode: '17436' },
  { name: 'Jatirangga', type: 'Kelurahan', parent: 'Jatisampurna', coordinates: { latitude: -6.3300, longitude: 106.9350 }, postalCode: '17434' },
  { name: 'Jatiranggon', type: 'Kelurahan', parent: 'Jatisampurna', coordinates: { latitude: -6.3500, longitude: 106.9250 }, postalCode: '17432' },
  { name: 'Jatisampurna', type: 'Kelurahan', parent: 'Jatisampurna', coordinates: { latitude: -6.3400, longitude: 106.9300 }, postalCode: '17433' },

  // Medansatria
  { name: 'Medansatria', type: 'Kecamatan', coordinates: { latitude: -6.1900, longitude: 107.0050 } },
  { name: 'Harapan Mulya', type: 'Kelurahan', parent: 'Medansatria', coordinates: { latitude: -6.1850, longitude: 107.0100 }, postalCode: '17184' },
  { name: 'Kali Baru', type: 'Kelurahan', parent: 'Medansatria', coordinates: { latitude: -6.1950, longitude: 107.0050 }, postalCode: '17183' },
  { name: 'Medansatria', type: 'Kelurahan', parent: 'Medansatria', coordinates: { latitude: -6.1900, longitude: 107.0000 }, postalCode: '17182' },
  { name: 'Pejuang', type: 'Kelurahan', parent: 'Medansatria', coordinates: { latitude: -6.1800, longitude: 107.0000 }, postalCode: '17181' },

  // Mustikajaya
  { name: 'Mustikajaya', type: 'Kecamatan', coordinates: { latitude: -6.2800, longitude: 106.9800 } },
  { name: 'Cimuning', type: 'Kelurahan', parent: 'Mustikajaya', coordinates: { latitude: -6.2750, longitude: 106.9750 }, postalCode: '17165' },
  { name: 'Mustikajaya', type: 'Kelurahan', parent: 'Mustikajaya', coordinates: { latitude: -6.2800, longitude: 106.9800 }, postalCode: '17168' },
  { name: 'Mustikasari', type: 'Kelurahan', parent: 'Mustikajaya', coordinates: { latitude: -6.2850, longitude: 106.9850 }, postalCode: '17167' },
  { name: 'Pedurenan', type: 'Kelurahan', parent: 'Mustikajaya', coordinates: { latitude: -6.2700, longitude: 106.9800 }, postalCode: '17166' },

  // Pondokgede
  { name: 'Pondokgede', type: 'Kecamatan', coordinates: { latitude: -6.2833, longitude: 106.9500 } },
  { name: 'Jatibening', type: 'Kelurahan', parent: 'Pondokgede', coordinates: { latitude: -6.2800, longitude: 106.9450 }, postalCode: '17412' },
  { name: 'Jatibening Baru', type: 'Kelurahan', parent: 'Pondokgede', coordinates: { latitude: -6.2850, longitude: 106.9500 }, postalCode: '17417' },
  { name: 'Jaticempaka', type: 'Kelurahan', parent: 'Pondokgede', coordinates: { latitude: -6.2900, longitude: 106.9550 }, postalCode: '17416' },
  { name: 'Jatimakmur', type: 'Kelurahan', parent: 'Pondokgede', coordinates: { latitude: -6.2750, longitude: 106.9500 }, postalCode: '17413' },
  { name: 'Jatiwaringin', type: 'Kelurahan', parent: 'Pondokgede', coordinates: { latitude: -6.2700, longitude: 106.9450 }, postalCode: '17411' },

  // Pondokmelati
  { name: 'Pondokmelati', type: 'Kecamatan', coordinates: { latitude: -6.3000, longitude: 106.9650 } },
  { name: 'Jatimelati', type: 'Kelurahan', parent: 'Pondokmelati', coordinates: { latitude: -6.2950, longitude: 106.9700 }, postalCode: '17446' },
  { name: 'Jatimurni', type: 'Kelurahan', parent: 'Pondokmelati', coordinates: { latitude: -6.3050, longitude: 106.9650 }, postalCode: '17441' },
  { name: 'Jatirahayu', type: 'Kelurahan', parent: 'Pondokmelati', coordinates: { latitude: -6.3000, longitude: 106.9600 }, postalCode: '17444' },
  { name: 'Jatiwarna', type: 'Kelurahan', parent: 'Pondokmelati', coordinates: { latitude: -6.2900, longitude: 106.9650 }, postalCode: '17445' },

  // Rawalumbu
  { name: 'Rawalumbu', type: 'Kecamatan', coordinates: { latitude: -6.2667, longitude: 107.0000 } },
  { name: 'Bojong Menteng', type: 'Kelurahan', parent: 'Rawalumbu', coordinates: { latitude: -6.2650, longitude: 107.0050 }, postalCode: '17177' },
  { name: 'Bojong Rawalumbu', type: 'Kelurahan', parent: 'Rawalumbu', coordinates: { latitude: -6.2700, longitude: 107.0000 }, postalCode: '17176' },
  { name: 'Pengasinan', type: 'Kelurahan', parent: 'Rawalumbu', coordinates: { latitude: -6.2600, longitude: 106.9950 }, postalCode: '17175' },
  { name: 'Sepanjang Jaya', type: 'Kelurahan', parent: 'Rawalumbu', coordinates: { latitude: -6.2750, longitude: 107.0050 }, postalCode: '17174' }
]

// Kabupaten Bekasi areas (main kecamatan with coordinates)
export const kabupatenBekasiAreas: GeoArea[] = [
  { name: 'Babelan', type: 'Kecamatan', coordinates: { latitude: -6.1300, longitude: 107.0400 } },
  { name: 'Bojongmangu', type: 'Kecamatan', coordinates: { latitude: -6.3800, longitude: 107.0900 } },
  { name: 'Cabangbungin', type: 'Kecamatan', coordinates: { latitude: -6.0100, longitude: 107.2500 } },
  { name: 'Cibarusah', type: 'Kecamatan', coordinates: { latitude: -6.4200, longitude: 107.0800 } },
  { name: 'Cibitung', type: 'Kecamatan', coordinates: { latitude: -6.2400, longitude: 107.0800 } },
  { name: 'Cikarang Barat', type: 'Kecamatan', coordinates: { latitude: -6.2600, longitude: 107.1300 } },
  { name: 'Cikarang Pusat', type: 'Kecamatan', coordinates: { latitude: -6.2700, longitude: 107.1500 } },
  { name: 'Cikarang Selatan', type: 'Kecamatan', coordinates: { latitude: -6.3100, longitude: 107.1500 } },
  { name: 'Cikarang Timur', type: 'Kecamatan', coordinates: { latitude: -6.2800, longitude: 107.1700 } },
  { name: 'Cikarang Utara', type: 'Kecamatan', coordinates: { latitude: -6.2400, longitude: 107.1500 } },
  { name: 'Kedung Waringin', type: 'Kecamatan', coordinates: { latitude: -6.3500, longitude: 107.0500 } },
  { name: 'Muaragembong', type: 'Kecamatan', coordinates: { latitude: -5.9800, longitude: 107.1000 } },
  { name: 'Pebayuran', type: 'Kecamatan', coordinates: { latitude: -6.1500, longitude: 107.2500 } },
  { name: 'Setu', type: 'Kecamatan', coordinates: { latitude: -6.2700, longitude: 107.0700 } },
  { name: 'Sukabumi', type: 'Kecamatan', coordinates: { latitude: -6.1000, longitude: 107.3500 } },
  { name: 'Sukatani', type: 'Kecamatan', coordinates: { latitude: -6.1800, longitude: 107.2200 } },
  { name: 'Sukawangi', type: 'Kecamatan', coordinates: { latitude: -6.1200, longitude: 107.1200 } },
  { name: 'Tambelang', type: 'Kecamatan', coordinates: { latitude: -6.0800, longitude: 107.2800 } },
  { name: 'Tambun Selatan', type: 'Kecamatan', coordinates: { latitude: -6.2500, longitude: 107.0400 } },
  { name: 'Tambun Utara', type: 'Kecamatan', coordinates: { latitude: -6.2100, longitude: 107.0500 } },
  { name: 'Tarumajaya', type: 'Kecamatan', coordinates: { latitude: -6.0500, longitude: 107.1500 } }
]

// Generate areaServed array for schema
export const generateAreaServedSchema = () => {
  const allAreas = [...kotaBekasiAreas, ...kabupatenBekasiAreas]
  
  return allAreas.map(area => ({
    '@type': 'City',
    'name': `${area.name}, Bekasi`,
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': area.coordinates.latitude.toString(),
      'longitude': area.coordinates.longitude.toString()
    }
  }))
}

// Enhanced LocalBusiness schema with comprehensive geo-targeting
export const generateEnhancedLocalBusinessSchema = (url: string = 'https://lasbekasi.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#business`,
    'name': 'Bengkel Las Mandiri',
    'alternateName': ['Bengkel Las Bekasi', 'Jasa Las Bekasi', 'Las Bekasi'],
    'description': 'Bengkel las profesional di Bekasi sejak 1999. Spesialis kanopi, pagar besi, teralis, railing tangga & konstruksi baja. Material SNI, tenaga ahli berpengalaman 20+ tahun, harga kompetitif, garansi resmi.',
    'image': [
      `${url}/og-image.jpg`,
      `${url}/images/bengkel-las-mandiri.jpg`
    ],
    'logo': {
      '@type': 'ImageObject',
      'url': `${url}/android-chrome-512x512.png`,
      'width': '512',
      'height': '512'
    },
    'url': url,
    'telephone': '+6285212078467',
    'email': 'info@lasbekasi.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
      'addressLocality': 'Bekasi',
      'addressRegion': 'Jawa Barat',
      'postalCode': '17320',
      'addressCountry': 'ID'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '-6.2349',
      'longitude': '106.9896'
    },
    'areaServed': generateAreaServedSchema(),
    'priceRange': 'Rp 350.000 - Rp 2.000.000',
    'currenciesAccepted': 'IDR',
    'paymentAccepted': 'Cash, Transfer Bank, QRIS',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '08:00',
        'closes': '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '08:00',
        'closes': '20:00'
      }
    ],
    'sameAs': [
      'https://facebook.com/lasbekasi',
      'https://instagram.com/lasbekasi',
      'https://www.youtube.com/@bengkellasmandiribekasiofficial',
      'https://www.tiktok.com/@lasbekasi',
      'https://maps.app.goo.gl/R468JEVwRXQZKyzd6'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Layanan Jasa Las',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Jasa Pembuatan Kanopi',
            'description': 'Pembuatan kanopi minimalis dengan berbagai material: Alderon, Polycarbonate, Solartuff, Kaca Tempered',
            'areaServed': generateAreaServedSchema()
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Jasa Pembuatan Pagar Besi',
            'description': 'Pembuatan pagar besi minimalis, klasik, BRC, laser cutting dengan finishing cat atau powder coating',
            'areaServed': generateAreaServedSchema()
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Jasa Pembuatan Teralis',
            'description': 'Pembuatan teralis jendela dan pintu anti maling dengan berbagai desain modern',
            'areaServed': generateAreaServedSchema()
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Jasa Pembuatan Railing Tangga',
            'description': 'Pembuatan railing tangga dan balkon stainless steel, besi hollow dengan desain industrial dan minimalis',
            'areaServed': generateAreaServedSchema()
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Jasa Konstruksi Baja',
            'description': 'Konstruksi baja ringan dan berat untuk berbagai kebutuhan bangunan',
            'areaServed': generateAreaServedSchema()
          }
        }
      ]
    },
    'founder': {
      '@type': 'Person',
      'name': 'Maman Toha',
      'jobTitle': 'Founder & Owner'
    },
    'foundingDate': '1999',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '250',
      'bestRating': '5',
      'worstRating': '1'
    }
  }
}

// Organization schema for better brand recognition
export const generateOrganizationSchema = (url: string = 'https://lasbekasi.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    'name': 'Bengkel Las Mandiri',
    'alternateName': 'Bengkel Las Bekasi',
    'url': url,
    'logo': {
      '@type': 'ImageObject',
      'url': `${url}/android-chrome-512x512.png`,
      'width': '512',
      'height': '512'
    },
    'description': 'Bengkel las profesional terpercaya di Bekasi sejak 1999',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
      'addressLocality': 'Bekasi',
      'addressRegion': 'Jawa Barat',
      'postalCode': '17320',
      'addressCountry': 'ID'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+6285212078467',
      'contactType': 'Customer Service',
      'areaServed': 'ID',
      'availableLanguage': ['Indonesian']
    },
    'sameAs': [
      'https://facebook.com/lasbekasi',
      'https://instagram.com/lasbekasi',
      'https://www.youtube.com/@bengkellasmandiribekasiofficial',
      'https://www.tiktok.com/@lasbekasi'
    ]
  }
}

// WebSite schema for sitelinks search box
export const generateWebSiteSchema = (url: string = 'https://lasbekasi.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    'url': url,
    'name': 'Bengkel Las Mandiri Bekasi',
    'description': 'Jasa las profesional di Bekasi - Kanopi, Pagar, Teralis, Konstruksi Baja',
    'publisher': {
      '@id': `${url}/#organization`
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${url}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

// BreadcrumbList schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  }
}

// Service schema for specific service pages
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  url: string,
  priceRange?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@id': 'https://lasbekasi.com/#organization'
    },
    'url': url,
    'areaServed': generateAreaServedSchema(),
    'availableChannel': {
      '@type': 'ServiceChannel',
      'serviceUrl': url,
      'servicePhone': {
        '@type': 'ContactPoint',
        'telephone': '+6285212078467',
        'contactType': 'Customer Service'
      }
    },
    ...(priceRange && { 'priceRange': priceRange })
  }
}

// Article schema for blog posts
export const generateArticleSchema = (
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  author: string = 'Bengkel Las Mandiri',
  imageUrl?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'url': url,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'author': {
      '@type': 'Person',
      'name': author
    },
    'publisher': {
      '@id': 'https://lasbekasi.com/#organization'
    },
    ...(imageUrl && {
      'image': {
        '@type': 'ImageObject',
        'url': imageUrl
      }
    })
  }
}

// FAQ schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
}
