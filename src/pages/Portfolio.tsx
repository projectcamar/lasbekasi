import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'
import { generateBreadcrumbSchema } from '../utils/schema'

const Portfolio: React.FC = () => {
  const baseUrl = 'https://lasbekasi.com'
  const pageUrl = `${baseUrl}/album-bengkel-las-mandiri`
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl },
    { name: 'Portfolio', url: pageUrl }
  ])

  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Katalog Produk - Album Bengkel Las Mandiri Bekasi | Furniture Industrial</title>
        <meta name="description" content="Lihat katalog produk furniture industrial Bengkel Las Mandiri: meja industrial, rak besi, kursi besi, lemari industrial, dan custom furniture besi berkualitas di Bekasi." />
        <meta name="keywords" content="katalog bengkel las bekasi, portfolio las bekasi, furniture industrial bekasi, meja besi industrial, rak besi bekasi, custom furniture besi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Katalog Produk Bengkel Las Mandiri - Furniture Industrial Bekasi" />
        <meta property="og:description" content="Lihat koleksi furniture industrial custom dari Bengkel Las Mandiri: meja, rak, kursi, lemari besi berkualitas untuk rumah dan kantor." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Katalog Furniture Industrial Bengkel Las Mandiri" />
        <meta name="twitter:description" content="Furniture industrial custom berkualitas: meja, rak, kursi, lemari besi untuk rumah dan kantor." />
        
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
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default Portfolio
