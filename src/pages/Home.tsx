import React, { Suspense, lazy, useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

// Critical components loaded immediately
import Header from '../components/Header'
import Hero from '../components/Hero'

// Lazy loaded components with priority batching
const AboutSection = lazy(() => import('../components/AboutSection'))
const ClientsSection = lazy(() => import('../components/ClientsSection'))
const ServicesSection = lazy(() => import('../components/ServicesSection'))
const AdvantagesSection = lazy(() => import('../components/AdvantagesSection'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const PromoSection = lazy(() => import('../components/PromoSection'))
const FAQSection = lazy(() => import('../components/FAQSection'))
const TestimonialSection = lazy(() => import('../components/TestimonialSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

// Enhanced loading component with skeleton
const SectionLoading = () => (
  <div className="section-loading">
    <div className="skeleton-loader">
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
      <div className="skeleton-line"></div>
    </div>
  </div>
)

// Progressive loading hook
const useProgressiveLoading = () => {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Start loading critical sections immediately
    const criticalSections = ['about', 'services']
    setLoadedSections(new Set(criticalSections))

    // Setup intersection observer for progressive loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section')
            if (sectionId) {
              setLoadedSections(prev => new Set([...prev, sectionId]))
            }
          }
        })
      },
      { 
        rootMargin: '100px 0px',
        threshold: 0.1 
      }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return { loadedSections, observerRef }
}

const Home: React.FC = () => {
  const { loadedSections, observerRef } = useProgressiveLoading()

  // Preload critical resources
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/images/bengkel-las-mandiri.jpg',
      '/images/kanopi-bekasi.jpg',
      '/images/pagar-besi-bekasi.jpg'
    ]
    
    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    fontLink.as = 'style'
    document.head.appendChild(fontLink)
  }, [])

  return (
    <div className="home">
      <Helmet>
        <title>Bengkel Las Mandiri - Jasa Las Profesional & Berkualitas di Bekasi</title>
        <meta name="description" content="Jasa las Bekasi sejak 1999. Spesialis kanopi, pagar, teralis & konstruksi baja. Material SNI, garansi. ☎ 0852-1207-8467" />
        <meta name="keywords" content="bengkel las bekasi, jasa las bekasi, las listrik bekasi, kanopi bekasi, pagar besi bekasi, teralis bekasi, railing tangga bekasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta property="og:description" content="Jasa las profesional & terpercaya di Bekasi. Pengerjaan rapi, berpengalaman 7+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta property="og:image" content="/images/bengkel-las-mandiri.jpg" />
        <meta property="og:url" content="https://lasbekasi.com/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta name="twitter:description" content="Jasa las profesional & terpercaya di Bekasi. Pengerjaan rapi, berpengalaman 7+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta name="twitter:image" content="/images/bengkel-las-mandiri.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        <link rel="canonical" href="https://lasbekasi.com/" />
        
        {/* BreadcrumbList Schema for Better Sitelinks */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://lasbekasi.com/"
              }]
            }
          `}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bengkel Las Mandiri",
              "image": "https://lasbekasi.com/og-image.jpg",
              "description": "Jasa las profesional & terpercaya di Bekasi sejak 1999. Spesialis kanopi, pagar besi, teralis, railing tangga & konstruksi baja.",
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
              "openingHoursSpecification": {
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
              },
              "sameAs": [
                "https://facebook.com/lasbekasi",
                "https://instagram.com/lasbekasi",
                "https://www.youtube.com/@bengkellasmandiribekasiofficial",
                "https://www.tiktok.com/@lasbekasi"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Critical Above-the-fold content loads immediately */}
      <Header />
      <Hero />
      
      {/* Progressive loading with priority batching */}
      <div 
        data-section="about" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('about') ? 'section-loaded' : ''}
      >
        {loadedSections.has('about') && (
          <Suspense fallback={<SectionLoading />}>
            <AboutSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="services" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('services') ? 'section-loaded' : ''}
      >
        {loadedSections.has('services') && (
          <Suspense fallback={<SectionLoading />}>
            <ServicesSection />
          </Suspense>
        )}
      </div>

      {/* Secondary sections load on scroll */}
      <div 
        data-section="clients" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('clients') ? 'section-loaded' : ''}
      >
        {loadedSections.has('clients') && (
          <Suspense fallback={<SectionLoading />}>
            <ClientsSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="advantages" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('advantages') ? 'section-loaded' : ''}
      >
        {loadedSections.has('advantages') && (
          <Suspense fallback={<SectionLoading />}>
            <AdvantagesSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="process" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('process') ? 'section-loaded' : ''}
      >
        {loadedSections.has('process') && (
          <Suspense fallback={<SectionLoading />}>
            <ProcessSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="promo" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('promo') ? 'section-loaded' : ''}
      >
        {loadedSections.has('promo') && (
          <Suspense fallback={<SectionLoading />}>
            <PromoSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="faq" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('faq') ? 'section-loaded' : ''}
      >
        {loadedSections.has('faq') && (
          <Suspense fallback={<SectionLoading />}>
            <FAQSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="testimonial" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('testimonial') ? 'section-loaded' : ''}
      >
        {loadedSections.has('testimonial') && (
          <Suspense fallback={<SectionLoading />}>
            <TestimonialSection />
          </Suspense>
        )}
      </div>

      <div 
        data-section="contact" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('contact') ? 'section-loaded' : ''}
      >
        {loadedSections.has('contact') && (
          <Suspense fallback={<SectionLoading />}>
            <ContactSection />
          </Suspense>
        )}
      </div>

      {/* Footer loads last */}
      <div 
        data-section="footer" 
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el)
          }
        }}
        className={loadedSections.has('footer') ? 'section-loaded' : ''}
      >
        {loadedSections.has('footer') && (
          <Suspense fallback={<SectionLoading />}>
            <Footer />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default Home
