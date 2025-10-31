import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import { generateBreadcrumbSchema } from '../utils/schema'

const About: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const baseUrl = 'https://lasbekasi.com'
  const pageUrl = `${baseUrl}/tentang-kami`
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl },
    { name: 'Tentang Kami', url: pageUrl }
  ])

  return (
    <div className="about-page">
      <Helmet>
        <title>Tentang Kami - Bengkel Las Mandiri Bekasi | Pengalaman 20+ Tahun</title>
        <meta name="description" content="Bengkel Las Mandiri adalah penyedia jasa las profesional di Bekasi sejak 1999. Dipimpin Pak Maman Toha dengan pengalaman 20+ tahun, material SNI, garansi resmi." />
        <meta name="keywords" content="tentang bengkel las mandiri, profil bengkel las bekasi, sejarah bengkel las, bengkel las berpengalaman bekasi, maman toha" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tentang Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta property="og:description" content="Bengkel Las Mandiri melayani jasa las di Bekasi sejak 1999 dengan pengalaman 20+ tahun. Material SNI, tenaga ahli, garansi resmi." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Tentang Bengkel Las Mandiri Bekasi" />
        <meta name="twitter:description" content="Jasa las profesional di Bekasi sejak 1999. Pengalaman 20+ tahun, material SNI, garansi resmi." />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL - CRITICAL for avoiding duplicate content */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Header />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default About
