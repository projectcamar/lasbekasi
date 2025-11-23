import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import { generateBreadcrumbList } from '../utils/structuredData'

const About: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Bengkel Las Mandiri",
      "image": "https://lasbekasi.com/og-image.jpg",
      "description": "Bengkel Las Mandiri adalah penyedia jasa las profesional di Bekasi sejak 1999. Dipimpin Pak Maman Toha dengan pengalaman 20+ tahun, material SNI, garansi resmi.",
      "foundingDate": "1999",
      "telephone": "+6285212078467",
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
      "sameAs": [
        "https://facebook.com/lasbekasi",
        "https://instagram.com/lasbekasi",
        "https://www.youtube.com/@bengkellasmandiribekasiofficial"
      ]
    }
  }

  return (
    <div className="about-page">
      <Helmet>
        <title>Tentang Kami - Bengkel Las Mandiri Bekasi | Pengalaman 20+ Tahun</title>
        <meta name="description" content="Bengkel Las Mandiri adalah penyedia jasa las profesional di Bekasi sejak 1999. Dipimpin Pak Maman Toha dengan pengalaman 20+ tahun, material SNI, garansi resmi." />
        <meta name="keywords" content="tentang bengkel las mandiri, profil bengkel las bekasi, sejarah bengkel las, bengkel las berpengalaman bekasi, maman toha" />
        
        {/* Robots Meta Tags - Critical for indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tentang Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta property="og:description" content="Bengkel Las Mandiri melayani jasa las di Bekasi sejak 1999 dengan pengalaman 20+ tahun. Material SNI, tenaga ahli, garansi resmi." />
        <meta property="og:url" content="https://lasbekasi.com/tentang-kami" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lasbekasi.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang Bengkel Las Mandiri Bekasi" />
        <meta name="twitter:description" content="Jasa las profesional di Bekasi sejak 1999. Pengalaman 20+ tahun, material SNI, garansi resmi." />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        
        <link rel="canonical" href="https://lasbekasi.com/tentang-kami" />
        
        {/* BreadcrumbList Schema for Better Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbList([
            { name: "Beranda", item: "https://lasbekasi.com/", position: 1 },
            { name: "Tentang Kami", item: "https://lasbekasi.com/tentang-kami", position: 2 }
          ]))}
        </script>
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default About
