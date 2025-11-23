import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Blog.css'
import { Helmet } from 'react-helmet-async'
import { generateBreadcrumbList } from '../utils/structuredData'

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
        
        {/* BreadcrumbList Schema for Better Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbList([
            { name: "Beranda", item: "https://lasbekasi.com/", position: 1 },
            { name: "Blog", item: "https://lasbekasi.com/blog", position: 2 }
          ]))}
        </script>
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

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Tukang Las Listrik Bekasi Murah & Profesional</h2>
                <p>Tukang las listrik Bekasi murah dan profesional. Jasa las listrik untuk kanopi, pagar, tralis dengan harga terjangkau.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/tukang-las-listrik-bekasi-murah" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Tips & Panduan</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Biaya Pembuatan Pagar Rumah Bekasi</h2>
                <p>Biaya pembuatan pagar rumah Bekasi terbaru 2025. Harga pagar besi minimalis mulai Rp 350.000/meter dengan konsultasi gratis.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/biaya-pembuatan-pagar-rumah-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Tips & Panduan</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Model Pagar Besi Minimalis Terbaru 2025</h2>
                <p>Koleksi model pagar besi minimalis terbaru 2025. Inspirasi desain pagar modern untuk rumah minimalis dengan berbagai pilihan.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/model-pagar-besi-minimalis-terbaru" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Tukang Las Kanopi Setu Bekasi</h2>
                <p>Tukang las kanopi Setu Bekasi profesional. Jasa pasang kanopi Setu dengan harga murah dan material berkualitas SNI.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/tukang-las-kanopi-setu-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Tips & Panduan</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Harga Pagar Besi Minimalis Bekasi Terbaru 2025</h2>
                <p>Harga pagar besi minimalis Bekasi terbaru 2025. Daftar harga lengkap mulai Rp 350.000/meter dengan konsultasi gratis.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Bengkel Las Mandiri</span>
                <Link to="/blog/harga-pagar-besi-minimalis-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Tukang Las Pintu Besi Minimalis Bekasi</h2>
                <p>Tukang las pintu besi minimalis Bekasi profesional. Jasa pembuatan pintu besi minimalis dengan harga murah dan material berkualitas SNI.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Maman Toha</span>
                <Link to="/blog/tukang-las-pintu-besi-minimalis-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Bengkel Las Relling Balkon Minimalis Bekasi</h2>
                <p>Bengkel las relling balkon minimalis Bekasi dengan harga terjangkau. Jasa pembuatan railing balkon minimalis modern dengan material berkualitas.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Maman Toha</span>
                <Link to="/blog/bengkel-las-relling-balkon-minimalis-bekasi" className="blog-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">Jasa Las</span>
                <span className="blog-date">23 Nov 2025</span>
              </div>
              <div className="blog-card-body">
                <h2>Jual Pagar Besi Murah Minimalis Bekasi</h2>
                <p>Jual pagar besi murah minimalis Bekasi dengan harga terbaik 2025. Pagar besi minimalis mulai Rp 350.000/meter dengan kualitas SNI.</p>
              </div>
              <div className="blog-card-footer">
                <span className="blog-author">Maman Toha</span>
                <Link to="/blog/jual-pagar-besi-murah-minimalis-bekasi" className="blog-read-more">
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