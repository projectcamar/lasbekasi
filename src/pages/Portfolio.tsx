import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'
import { generateBreadcrumbList } from '../utils/structuredData'

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Katalog Produk - Album Bengkel Las Mandiri Bekasi | Furniture Industrial</title>
        <meta name="description" content="Lihat katalog produk furniture industrial Bengkel Las Mandiri: meja industrial, rak besi, kursi besi, lemari industrial, dan custom furniture besi berkualitas di Bekasi." />
        <meta name="keywords" content="katalog bengkel las bekasi, portfolio las bekasi, furniture industrial bekasi, meja besi industrial, rak besi bekasi, custom furniture besi" />
        {/* Robots Meta Tags - Critical for indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Katalog Produk Bengkel Las Mandiri - Furniture Industrial Bekasi" />
        <meta property="og:description" content="Lihat koleksi furniture industrial custom dari Bengkel Las Mandiri: meja, rak, kursi, lemari besi berkualitas untuk rumah dan kantor." />
        <meta property="og:url" content="https://lasbekasi.com/album-bengkel-las-mandiri" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lasbekasi.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Katalog Furniture Industrial Bengkel Las Mandiri" />
        <meta name="twitter:description" content="Furniture industrial custom berkualitas: meja, rak, kursi, lemari besi untuk rumah dan kantor." />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        
        {/* Canonical URL - Must match actual URL exactly */}
        <link rel="canonical" href="https://lasbekasi.com/album-bengkel-las-mandiri" />
        
        {/* BreadcrumbList Schema for Better Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbList([
            { name: "Beranda", item: "https://lasbekasi.com/", position: 1 },
            { name: "Portfolio", item: "https://lasbekasi.com/album-bengkel-las-mandiri", position: 2 }
          ]))}
        </script>
      </Helmet>
      
      <Header />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default Portfolio
