import React from 'react'
import { Helmet } from 'react-helmet-async'
import { generateBreadcrumbSchema } from '../utils/schema'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Blog.css'

const Blog: React.FC = () => {
  const baseUrl = 'https://lasbekasi.com'
  const pageUrl = `${baseUrl}/blog`
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl },
    { name: 'Blog', url: pageUrl }
  ])

  return (
    <div className="blog-page">
      <Header />
      <Helmet>
        <title>Blog Bengkel Las | Tips & Panduan Las Besi, Kanopi & Pagar</title>
        <meta name="description" content="Blog bengkel las dengan tips dan panduan lengkap tentang las besi, kanopi, pagar, dan konstruksi baja. Informasi terbaru seputar jasa las Bekasi." />
        <meta name="keywords" content="blog bengkel las, tips las besi, panduan kanopi, cara pasang pagar, konstruksi baja, jasa las bekasi" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL - CRITICAL for avoiding duplicate content */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="blog-hero">
        <h1>Blog Bengkel Las</h1>
        <p>Tips & Panduan Las Besi, Kanopi, Pagar dan Konstruksi Baja</p>
      </div>

      <section className="blog-content">
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">Bengkel Las</span>
              <span className="blog-date">11 Okt 2025</span>
            </div>
            <div className="blog-card-body">
              <h2>Cari Bengkel Las Bekasi Murah, Berkualitas, dan Terpercaya?</h2>
              <p>Bengkel Las Mandiri adalah solusi terbaik untuk kebutuhan konstruksi baja Anda dengan pengalaman 20+ tahun sejak 1999...</p>
            </div>
            <div className="blog-card-footer">
              <span className="blog-author">Admin</span>
              <a href="/blog/cari-bengkel-las-bekasi" className="blog-read-more">Baca Selengkapnya ?</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">Jasa Las</span>
              <span className="blog-date">11 Okt 2025</span>
            </div>
            <div className="blog-card-body">
              <h2>Jasa Tukang Las Cikarang - Profesional dan Terpercaya</h2>
              <p>Jasa tukang las profesional di Cikarang dengan harga kompetitif. Melayani pembuatan kanopi, pagar, tralis...</p>
            </div>
            <div className="blog-card-footer">
              <span className="blog-author">Admin</span>
              <a href="/blog/jasa-tukang-las-cikarang" className="blog-read-more">Baca Selengkapnya ?</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">Jasa Las</span>
              <span className="blog-date">11 Okt 2025</span>
            </div>
            <div className="blog-card-body">
              <h2>Jasa Tukang Las Setu - Cepat, Rapi, dan Berkualitas</h2>
              <p>Layanan jasa tukang las profesional di Setu, Bekasi dengan pengerjaan cepat dan rapi...</p>
            </div>
            <div className="blog-card-footer">
              <span className="blog-author">Admin</span>
              <a href="/blog/jasa-tukang-las-setu" className="blog-read-more">Baca Selengkapnya ?</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">Jasa Las</span>
              <span className="blog-date">11 Okt 2025</span>
            </div>
            <div className="blog-card-body">
              <h2>Jasa Tukang Las Bekasi - Berpengalaman dan Bergaransi</h2>
              <p>Jasa tukang las terpercaya di Bekasi. Dikerjakan oleh tenaga ahli berpengalaman dengan material berkualitas SNI...</p>
            </div>
            <div className="blog-card-footer">
              <span className="blog-author">Admin</span>
              <a href="/blog/jasa-tukang-las-bekasi" className="blog-read-more">Baca Selengkapnya ?</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">Layanan Las</span>
              <span className="blog-date">15 Jan 2025</span>
            </div>
            <div className="blog-card-body">
              <h2>Jasa Pasang Kanopi Bekasi - Harga Borongan Terpercaya 2025</h2>
              <p>Jasa Pasang Kanopi Bekasi dengan harga borongan mulai 350rb/m?. Material SNI, garansi resmi, tenaga profesional...</p>
            </div>
            <div className="blog-card-footer">
              <span className="blog-author">Bengkel Las Mandiri</span>
              <a href="/blog/jasa-kanopi-bekasi" className="blog-read-more">Baca Selengkapnya ?</a>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '40px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Butuh Jasa Las Profesional?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga terbaik!</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6285212078467" style={{ padding: '12px 30px', background: 'white', color: '#667eea', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', transition: 'transform 0.3s ease' }}>
              WhatsApp Sekarang
            </a>
            <a href="tel:+6285212078467" style={{ padding: '12px 30px', background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', transition: 'transform 0.3s ease' }}>
              Telepon Langsung
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blog