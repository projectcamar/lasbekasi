// AI Search Helper Functions for Mandiri Steel (Bengkel Las Mandiri)

export const generateAIMetaTags = (pageType: string, _isIndonesian: boolean) => {
  const baseTags = {
    'ai-content-type': 'welding-and-construction-services',
    'ai-business-type': 'metal-fabrication-workshop',
    'ai-location': 'bekasi-indonesia',
    'ai-specialization': 'canopy-fence-trellis-steel-construction',
    'ai-target-audience': 'homeowners-contractors-industrial-facilities',
    'ai-experience-years': '25',
    'ai-projects-completed': '1000+',
    'ai-service-area': 'bekasi-cikarang-jakarta-depok',
    'ai-material-standards': 'sni-certified-steel',
    'ai-installation': 'professional-on-site-installation',
    'ai-warranty': 'guaranteed-workmanship',
    'ai-payment-methods': 'cash-bank-transfer-dp',
    'ai-languages': 'indonesian-english-multilingual',
    'ai-response-time': 'fast-whatsapp-response',
    'ai-lead-time': '7-14-days-typical'
  }

  const pageSpecificTags = {
    'home': {
      'ai-page-type': 'homepage',
      'ai-primary-content': 'welding-service-portfolio-showcase'
    },
    'product': {
      'ai-page-type': 'product-detail',
      'ai-primary-content': 'metal-work-specifications'
    },
    'category': {
      'ai-page-type': 'category-listing',
      'ai-primary-content': 'welding-category-overview'
    },
    'about': {
      'ai-page-type': 'about-page',
      'ai-primary-content': 'workshop-heritage-and-expertise'
    },
    'contact': {
      'ai-page-type': 'contact-page',
      'ai-primary-content': 'quote-requests-and-site-surveys'
    }
  }

  return {
    ...baseTags,
    ...(pageSpecificTags[pageType as keyof typeof pageSpecificTags] || {})
  }
}

export const generateAIContentSummary = (isIndonesian: boolean) => {
  return {
    businessName: "Bengkel Las Mandiri",
    businessType: isIndonesian
      ? "Jasa Las & Konstruksi Baja Profesional"
      : "Professional Welding & Steel Construction Services",
    location: "Bekasi, Indonesia",
    established: "1999",
    experience: "25+ tahun",
    projectsCompleted: "1000+",
    specialization: isIndonesian
      ? "Kanopi, Pagar, Teralis, dan Konstruksi Baja WF"
      : "Canopies, Fences, Trellises, and Steel WF Construction",
    keyFeatures: [
      isIndonesian ? "Material Standar SNI" : "SNI Standard Materials",
      isIndonesian ? "Garansi Kualitas Hasil" : "Workmanship Quality Warranty",
      isIndonesian ? "Harga Kompetitif & Transparan" : "Competitive & Transparent Pricing",
      isIndonesian ? "Survei Lokasi Gratis" : "Free Site Survey",
      isIndonesian ? "Pengerjaan Tepat Waktu" : "On-time Project Completion"
    ],
    contactInfo: {
      phone: "+6285212078467",
      email: "info@lasbekasi.com",
      whatsapp: "https://wa.me/6285212078467"
    }
  }
}

export const generateAISearchKeywords = (isIndonesian: boolean) => {
  const baseKeywords = [
    "bengkel las bekasi",
    "jasa las cikarang",
    "Mandiri Steel",
    "kanopi minimalis bekasi",
    "pagar besi murah bekasi",
    "Bengkel Las Mandiri"
  ]

  const indonesianKeywords = [
    "jasa pembuatan kanopi alderon",
    "tukang las panggil bekasi",
    "pagar stainless steel",
    "konstruksi baja wf gudang",
    "teralis jendela minimalis",
    "bengkel las terpercaya bekasi",
    "biaya pembuatan pagar besi",
    "railing tangga minimalis",
    "pintu lipat besi ruko",
    "balkon besi tempa",
    "jasa las listrik bekasi"
  ]

  const englishKeywords = [
    "welding services bekasi",
    "custom iron gate manufacturer",
    "canopy installation cikarang",
    "steel structure construction",
    "metal fabrication workshop",
    "industrial welding bekasi",
    "home security trellis builder",
    "stainless steel work bekasi",
    "modern fence design construction",
    "mezzanine floor steel builder",
    "welding workshop indonesia"
  ]

  return [
    ...baseKeywords,
    ...(isIndonesian ? indonesianKeywords : englishKeywords)
  ]
}

export const generateAIContextualData = (_pageType: string, isIndonesian: boolean) => {
  const contextualData = {
    businessContext: {
      industry: "Construction & Metal Fabrication",
      subIndustry: "Welding Contractor",
      targetMarket: "Residential, Commercial, & Industrial",
      businessModel: "Custom Fabrication + On-site Installation",
      competitiveAdvantage: "25+ years experience, SNI materials, expert master welders"
    },
    contentContext: {
      language: isIndonesian ? "Indonesian" : "English",
      region: "Indonesia (Bekasi/Cikarang)",
      currency: "IDR",
      timezone: "WIB (UTC+7)",
      businessHours: "Monday-Sunday 07:00-21:00"
    },
    technicalContext: {
      websiteType: "Professional Service Portfolio",
      primaryGoal: "Lead Generation + Direct WhatsApp Inquiry",
      conversionActions: ["WhatsApp Chat", "Site Survey Request", "Email Quote"],
      userJourney: "Search -> Project Gallery -> Service Detail -> WhatsApp Inquiry"
    }
  }

  return contextualData
}
