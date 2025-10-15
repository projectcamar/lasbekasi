import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

// Load critical and above-fold components immediately - NO LAZY LOADING
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'

// Only lazy load below-fold components
const ClientsSection = lazy(() => import('../components/ClientsSection'))
const AdvantagesSection = lazy(() => import('../components/AdvantagesSection'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const PromoSection = lazy(() => import('../components/PromoSection'))
const FAQSection = lazy(() => import('../components/FAQSection'))
const TestimonialSection = lazy(() => import('../components/TestimonialSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

// Simple loading component
const SectionLoading = () => (
  <div className="section-loading">
    <div className="spinner"></div>
  </div>
)

const Home: React.FC = () => {

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
      {/* Load critical content immediately - NO lazy loading */}
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      
      {/* Only lazy load below-fold content */}
      <Suspense fallback={<SectionLoading />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <AdvantagesSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <PromoSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
