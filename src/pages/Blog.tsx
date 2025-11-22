import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Blog.css'
import { Helmet } from 'react-helmet-async'

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog Bengkel Las Mandiri - Tips & Panduan Konstruksi Baja</title>
        <meta name="description" content="Blog Bengkel Las Mandiri berisi tips, panduan, dan informasi terbaru seputar konstruksi baja, kanopi, pagar, dan jasa las profesional di Bekasi." />
        <meta name="keywords" content="blog bengkel las, tips konstruksi baja, panduan kanopi, jasa las bekasi, blog las mandiri" />
        
        {/* Robots Meta Tags - Critical for indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Bengkel Las Mandiri - Tips & Panduan Konstruksi Baja" />
        <meta property="og:description" content="Blog Bengkel Las Mandiri berisi tips, panduan, dan informasi terbaru seputar konstruksi baja, kanopi, pagar, dan jasa las profesional di Bekasi." />
        <meta property="og:url" content="https://lasbekasi.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lasbekasi.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Bengkel Las Mandiri" />
        <meta name="twitter:description" content="Tips, panduan, dan informasi terbaru seputar konstruksi baja dan jasa las profesional di Bekasi." />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        
        {/* Canonical URL - Must match actual URL exactly */}
        <link rel="canonical" href="https://lasbekasi.com/blog" />
      </Helmet>
      
      <Header />
      
      <div className="blog-hero">
        <div className="container">
          <h1>Blog Bengkel Las Mandiri</h1>
          <p>Tips, panduan, dan informasi terbaru seputar konstruksi baja dan jasa las profesional</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Tips & Panduan</span>
                <span className="blog-date">16 Okt 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Cara Memilih Bengkel Las yang Bagus</h2>
                <p>Panduan lengkap untuk memilih bengkel las terpercaya dengan kualitas terbaik dan harga kompetitif.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/cara-memilih-bengkel-las-yang-bagus" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">11 Okt 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Jasa Tukang Las Bekasi Terpercaya</h2>
                <p>Layanan jasa tukang las profesional di Bekasi dengan pengalaman 20+ tahun dan material berkualitas SNI.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/jasa-tukang-las-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">11 Okt 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Jasa Tukang Las Cikarang Profesional</h2>
                <p>Layanan jasa tukang las di Cikarang dengan harga kompetitif dan pengerjaan berkualitas tinggi.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/jasa-tukang-las-cikarang" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">11 Okt 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Jasa Tukang Las Setu Cepat & Rapi</h2>
                <p>Layanan jasa tukang las di Setu dengan pengerjaan cepat, rapi, dan berkualitas untuk berbagai kebutuhan konstruksi.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/jasa-tukang-las-setu" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Layanan Las</span>
                <span className="blog-date">15 Jan 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Jasa Pasang Kanopi Bekasi Terpercaya</h2>
                <p>Layanan pemasangan kanopi di Bekasi dengan berbagai material berkualitas dan harga kompetitif.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/jasa-kanopi-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Bengkel Las</span>
                <span className="blog-date">11 Okt 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Cari Bengkel Las Bekasi Murah & Berkualitas</h2>
                <p>Solusi terbaik untuk kebutuhan konstruksi baja Anda dengan pengalaman 20+ tahun dan harga kompetitif.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/cari-bengkel-las-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog