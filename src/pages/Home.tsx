import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  generateEnhancedLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema
} from '../utils/schema'

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

  // Generate schemas
  const baseUrl = 'https://lasbekasi.com'
  const localBusinessSchema = generateEnhancedLocalBusinessSchema(baseUrl)
  const organizationSchema = generateOrganizationSchema(baseUrl)
  const websiteSchema = generateWebSiteSchema(baseUrl)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl }
  ])

  return (
    <div className="home">
      <Helmet>
        <title>Bengkel Las Bekasi | Jasa Las Besi & Kanopi Terdekat #1</title>
        <meta name="description" content="Bengkel Las Bekasi terpercaya sejak 1999 melayani seluruh area Bekasi. Jasa las pagar, kanopi, tralis & konstruksi baja. Material SNI, garansi resmi. ☎ 0852-1207-8467" />
        <meta name="keywords" content="bengkel las bekasi, jasa las bekasi, tukang las bekasi, bengkel las terdekat, jasa las pagar bekasi, jasa las kanopi bekasi, jasa las tralis bekasi, harga jasa las per meter, jasa las murah bekasi, bengkel las cikarang, bengkel las cibitung, bengkel las setu" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta property="og:description" content="Jasa las profesional & terpercaya di Bekasi sejak 1999. Pengerjaan rapi, berpengalaman 20+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:url" content={`${baseUrl}/`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta name="twitter:description" content="Jasa las profesional & terpercaya di Bekasi sejak 1999. Pengerjaan rapi, berpengalaman 20+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        <meta name="geo.position" content="-6.2349;106.9896" />
        <meta name="ICBM" content="-6.2349, 106.9896" />
        
        {/* Canonical URL - CRITICAL for avoiding duplicate content */}
        <link rel="canonical" href={`${baseUrl}/`} />
        
        {/* Enhanced Schema.org Structured Data with Geo-Targeting */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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
