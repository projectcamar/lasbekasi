import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  generateEnhancedLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
} from '../utils/schema'
import { CheckCircle, MapPin, Phone, Clock, Award } from 'lucide-react'
import './ServiceDetail.css'

const BengkelLasBekasiPage: React.FC = () => {
  const baseUrl = 'https://lasbekasi.com'
  const pageUrl = `${baseUrl}/bengkel-las-bekasi`
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl },
    { name: 'Bengkel Las Bekasi', url: pageUrl }
  ])

  const localBusinessSchema = generateEnhancedLocalBusinessSchema(baseUrl)

  const faqSchema = generateFAQSchema([
    {
      question: 'Di mana lokasi Bengkel Las Bekasi?',
      answer: 'Bengkel Las Bekasi (Las Bekasi) berlokasi di Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320. Kami melayani seluruh area Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan, Cikarang, Cibitung, dan sekitarnya.'
    },
    {
      question: 'Berapa harga jasa las di Bekasi?',
      answer: 'Harga jasa las di Bekasi bervariasi tergantung jenis pekerjaan. Untuk kanopi mulai dari Rp 350.000/m2, pagar besi mulai dari Rp 550.000/m2, teralis mulai dari Rp 350.000/m2. Hubungi 0852-1207-8467 untuk penawaran harga terbaik dan gratis survey.'
    },
    {
      question: 'Apa saja layanan Las Bekasi?',
      answer: 'Las Bekasi menyediakan layanan lengkap: pembuatan kanopi minimalis, pagar besi, teralis anti maling, railing tangga stainless, konstruksi baja, pintu besi, balkon, dan berbagai kebutuhan las lainnya untuk rumah, gedung, dan komersial.'
    },
    {
      question: 'Apakah Las Bekasi melayani panggilan ke rumah?',
      answer: 'Ya, Las Bekasi melayani jasa las panggilan ke rumah di seluruh area Bekasi dan sekitarnya. Gratis survey dan konsultasi. Hubungi kami di 0852-1207-8467 untuk jadwalkan kunjungan.'
    },
    {
      question: 'Berapa lama pengalaman Bengkel Las Bekasi?',
      answer: 'Bengkel Las Bekasi telah berpengalaman sejak 1999, lebih dari 25 tahun melayani jasa las profesional di Bekasi. Tim tukang las kami bersertifikat dan berpengalaman dalam berbagai proyek residential dan komersial.'
    }
  ])

  return (
    <div className="service-detail-page">
      <Helmet>
        <title>Bengkel Las Bekasi - Jasa Las Profesional Terpercaya di Bekasi</title>
        <meta name="description" content="Bengkel Las Bekasi ⭐ Jasa las terpercaya sejak 1999 di Bekasi. Spesialis kanopi, pagar, teralis, konstruksi baja. Tukang las ahli, harga murah, gratis survey. ☎ 0852-1207-8467" />
        <meta name="keywords" content="bengkel las bekasi, bengkel las di bekasi, jasa las bekasi, las bekasi, tukang las bekasi, bengkel las terdekat bekasi, harga bengkel las bekasi, jasa las murah bekasi, bengkel las bekasi timur, bengkel las bekasi barat, bengkel las bekasi utara, bengkel las bekasi selatan" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bengkel Las Bekasi - Jasa Las Terpercaya di Bekasi" />
        <meta property="og:description" content="Bengkel Las Bekasi ⭐ Jasa las profesional di Bekasi sejak 1999. Kanopi, pagar, teralis, konstruksi baja. Harga murah, gratis survey!" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bengkel Las Bekasi - Jasa Las Terpercaya" />
        <meta name="twitter:description" content="Bengkel Las Bekasi sejak 1999. Kanopi, pagar, teralis, konstruksi baja. Harga murah!" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="service-detail-content">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="separator">/</span>
            <span className="current">Bengkel Las Bekasi</span>
          </nav>

          {/* Hero Section */}
          <section className="service-hero">
            <div className="service-hero-content">
              <h1>Bengkel Las Bekasi - Jasa Las Profesional Terpercaya #1</h1>
              <p className="service-subtitle">
                <strong>Las Bekasi</strong> adalah bengkel las terpercaya di Bekasi sejak 1999. 
                Melayani jasa las profesional untuk kanopi, pagar, teralis, railing tangga, 
                konstruksi baja, dan berbagai kebutuhan las berkualitas tinggi.
              </p>
              
              <div className="service-meta">
                <div className="meta-item">
                  <MapPin size={20} />
                  <span>Melayani Seluruh Bekasi</span>
                </div>
                <div className="meta-item">
                  <Clock size={20} />
                  <span>Senin - Minggu, 08:00 - 20:00</span>
                </div>
                <div className="meta-item">
                  <Phone size={20} />
                  <a href="tel:+6285212078467">0852-1207-8467</a>
                </div>
              </div>

              <div className="cta-buttons">
                <Link to="/kontak-bengkel-las-bekasi" className="btn-primary">
                  Konsultasi Gratis
                </Link>
                <Link to="/layanan-las-bekasi" className="btn-secondary">
                  Lihat Semua Layanan
                </Link>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="service-content">
            <h2>Tentang Bengkel Las Bekasi</h2>
            <p>
              <strong>Bengkel Las Bekasi</strong> atau yang dikenal sebagai <strong>Las Bekasi</strong> 
              adalah bengkel las profesional yang telah melayani masyarakat Bekasi sejak tahun 1999. 
              Dipimpin oleh Bapak Maman Toha yang berpengalaman lebih dari 25 tahun di bidang pengelasan, 
              <strong>bengkel las di Bekasi</strong> ini telah menyelesaikan ribuan proyek di seluruh 
              area Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan, Cikarang, Cibitung, dan sekitarnya.
            </p>

            <p>
              Sebagai <strong>jasa las Bekasi</strong> terpercaya, kami memiliki tim tukang las bersertifikat 
              yang ahli dalam berbagai jenis pekerjaan las listrik, las argon, dan konstruksi baja. 
              <strong>Bengkel las Bekasi</strong> kami menggunakan peralatan las modern dan material berkualitas SNI 
              untuk memastikan hasil pekerjaan yang kuat, rapi, tahan lama, dan anti karat.
            </p>

            <h2>Kenapa Memilih Bengkel Las Bekasi?</h2>
            <div className="advantages-grid">
              <div className="advantage-card">
                <Award size={40} />
                <h3>Pengalaman 25+ Tahun</h3>
                <p>Berpengalaman sejak 1999 sebagai bengkel las terpercaya di Bekasi</p>
              </div>
              
              <div className="advantage-card">
                <CheckCircle size={40} />
                <h3>Tukang Las Bersertifikat</h3>
                <p>Tim tukang las profesional dengan sertifikat dan pengalaman bertahun-tahun</p>
              </div>
              
              <div className="advantage-card">
                <CheckCircle size={40} />
                <h3>Material SNI Berkualitas</h3>
                <p>Menggunakan bahan baku berkualitas tinggi sesuai standar SNI</p>
              </div>
              
              <div className="advantage-card">
                <CheckCircle size={40} />
                <h3>Harga Kompetitif</h3>
                <p>Harga jasa las di Bekasi yang terjangkau tanpa mengorbankan kualitas</p>
              </div>
              
              <div className="advantage-card">
                <CheckCircle size={40} />
                <h3>Gratis Survey & Konsultasi</h3>
                <p>Gratis survey lokasi dan konsultasi untuk wilayah Bekasi dan sekitarnya</p>
              </div>
              
              <div className="advantage-card">
                <CheckCircle size={40} />
                <h3>Garansi Resmi</h3>
                <p>Memberikan garansi untuk setiap pekerjaan yang diselesaikan</p>
              </div>
            </div>

            <h2>Layanan Jasa Las Bekasi</h2>
            <p>
              <strong>Bengkel Las Bekasi</strong> menyediakan berbagai layanan jasa las profesional 
              untuk kebutuhan residential, komersial, dan industrial:
            </p>

            <div className="service-list">
              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi">Jasa Pembuatan Kanopi Bekasi</Link></h3>
                  <p>Kanopi minimalis modern dengan material Alderon, Polycarbonate, Solartuff, dan Kaca Tempered</p>
                </div>
              </div>

              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi">Jasa Pembuatan Pagar Besi Bekasi</Link></h3>
                  <p>Pagar besi minimalis, klasik, BRC, dan laser cutting dengan finishing powder coating</p>
                </div>
              </div>

              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi">Jasa Pembuatan Teralis Bekasi</Link></h3>
                  <p>Teralis jendela dan pintu anti maling dengan desain modern dan kokoh</p>
                </div>
              </div>

              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-pembuatan-railing-tangga-bekasi">Jasa Pembuatan Railing Tangga Bekasi</Link></h3>
                  <p>Railing tangga dan balkon stainless steel dengan desain industrial dan minimalis</p>
                </div>
              </div>

              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-konstruksi-baja-bekasi">Jasa Konstruksi Baja Bekasi</Link></h3>
                  <p>Konstruksi baja ringan dan berat untuk berbagai kebutuhan bangunan</p>
                </div>
              </div>

              <div className="service-item">
                <CheckCircle size={24} />
                <div>
                  <h3><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-besi-bekasi">Jasa Pembuatan Pintu Besi Bekasi</Link></h3>
                  <p>Pintu besi anti maling dengan desain custom berkualitas tinggi</p>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '2rem' }}>
              Dan masih banyak lagi layanan las lainnya. Lihat <Link to="/layanan-las-bekasi">semua layanan las Bekasi</Link> kami 
              atau <Link to="/kontak-bengkel-las-bekasi">hubungi kami</Link> untuk konsultasi gratis.
            </p>

            <h2>Area Layanan Bengkel Las Bekasi</h2>
            <p>
              <strong>Bengkel Las Bekasi</strong> melayani jasa las panggilan ke rumah dan lokasi proyek 
              di seluruh wilayah Bekasi dan sekitarnya:
            </p>

            <div className="area-grid">
              <div className="area-card">
                <MapPin size={24} />
                <h3>Bekasi Timur</h3>
                <p>Jasa las di Bekasi Timur: Aren Jaya, Bekasi Jaya, Duren Jaya, Margahayu</p>
              </div>

              <div className="area-card">
                <MapPin size={24} />
                <h3>Bekasi Barat</h3>
                <p>Jasa las di Bekasi Barat: Bintara, Bintara Jaya, Jakasampurna, Kota Baru, Kranji</p>
              </div>

              <div className="area-card">
                <MapPin size={24} />
                <h3>Bekasi Utara</h3>
                <p>Jasa las di Bekasi Utara: Harapan Baru, Harapan Jaya, Kaliabang Tengah, Perwira, Teluk Pucung</p>
              </div>

              <div className="area-card">
                <MapPin size={24} />
                <h3>Bekasi Selatan</h3>
                <p>Jasa las di Bekasi Selatan: Jakamulya, Jakasetia, Kayuringin Jaya, Marga Jaya, Pekayon Jaya</p>
              </div>

              <div className="area-card">
                <MapPin size={24} />
                <h3>Cikarang</h3>
                <p>Jasa las di Cikarang: Cikarang Barat, Cikarang Timur, Cikarang Utara, Cikarang Selatan, Cikarang Pusat</p>
              </div>

              <div className="area-card">
                <MapPin size={24} />
                <h3>Cibitung</h3>
                <p>Jasa las di Cibitung dan sekitarnya dengan layanan gratis survey</p>
              </div>
            </div>

            <h2>Harga Jasa Las Bekasi</h2>
            <p>
              <strong>Harga jasa las di Bekasi</strong> bervariasi tergantung jenis pekerjaan, material yang digunakan, 
              dan tingkat kesulitan. Berikut estimasi harga jasa las Bekasi:
            </p>

            <div className="price-table">
              <div className="price-row">
                <div className="price-service">Kanopi Minimalis</div>
                <div className="price-value">Mulai dari Rp 350.000/m²</div>
              </div>
              <div className="price-row">
                <div className="price-service">Pagar Besi</div>
                <div className="price-value">Mulai dari Rp 550.000/m²</div>
              </div>
              <div className="price-row">
                <div className="price-service">Teralis Jendela</div>
                <div className="price-value">Mulai dari Rp 350.000/m²</div>
              </div>
              <div className="price-row">
                <div className="price-service">Railing Tangga</div>
                <div className="price-value">Mulai dari Rp 800.000/meter</div>
              </div>
              <div className="price-row">
                <div className="price-service">Konstruksi Baja</div>
                <div className="price-value">Sesuai survey & RAB</div>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffc107' }}>
              <strong>Catatan:</strong> Harga bisa berubah tergantung spesifikasi, material, dan lokasi proyek. 
              Hubungi <a href="tel:+6285212078467" style={{ color: '#ff6b35', fontWeight: '600' }}>0852-1207-8467</a> untuk 
              penawaran harga terbaik dan <strong>gratis survey</strong> ke lokasi Anda.
            </p>

            <h2>FAQ Bengkel Las Bekasi</h2>
            <div className="faq-section">
              <div className="faq-item">
                <h3>Di mana lokasi Bengkel Las Bekasi?</h3>
                <p>
                  <strong>Bengkel Las Bekasi</strong> berlokasi di Jl. Raya Setu Cibitung - Bekasi, Telajung, 
                  Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320. Kami melayani seluruh area Bekasi Timur, 
                  Bekasi Barat, Bekasi Utara, Bekasi Selatan, Cikarang, Cibitung, dan sekitarnya.
                </p>
              </div>

              <div className="faq-item">
                <h3>Berapa harga jasa las di Bekasi?</h3>
                <p>
                  Harga jasa las di Bekasi bervariasi tergantung jenis pekerjaan. Untuk kanopi mulai dari Rp 350.000/m², 
                  pagar besi mulai dari Rp 550.000/m², teralis mulai dari Rp 350.000/m². 
                  Hubungi <a href="tel:+6285212078467">0852-1207-8467</a> untuk penawaran harga terbaik dan gratis survey.
                </p>
              </div>

              <div className="faq-item">
                <h3>Apa saja layanan Las Bekasi?</h3>
                <p>
                  <strong>Las Bekasi</strong> menyediakan layanan lengkap: pembuatan kanopi minimalis, pagar besi, 
                  teralis anti maling, railing tangga stainless, konstruksi baja, pintu besi, balkon, 
                  dan berbagai kebutuhan las lainnya untuk rumah, gedung, dan komersial.
                </p>
              </div>

              <div className="faq-item">
                <h3>Apakah Las Bekasi melayani panggilan ke rumah?</h3>
                <p>
                  Ya, <strong>Las Bekasi</strong> melayani jasa las panggilan ke rumah di seluruh area Bekasi dan sekitarnya. 
                  Gratis survey dan konsultasi. Hubungi kami di <a href="tel:+6285212078467">0852-1207-8467</a> untuk 
                  jadwalkan kunjungan.
                </p>
              </div>

              <div className="faq-item">
                <h3>Berapa lama pengalaman Bengkel Las Bekasi?</h3>
                <p>
                  <strong>Bengkel Las Bekasi</strong> telah berpengalaman sejak 1999, lebih dari 25 tahun melayani 
                  jasa las profesional di Bekasi. Tim tukang las kami bersertifikat dan berpengalaman dalam 
                  berbagai proyek residential dan komersial.
                </p>
              </div>
            </div>

            <h2>Hubungi Bengkel Las Bekasi</h2>
            <p>
              Butuh <strong>jasa las di Bekasi</strong>? <strong>Bengkel Las Bekasi</strong> siap membantu 
              kebutuhan las Anda dengan layanan profesional, hasil berkualitas, dan harga terjangkau.
            </p>

            <div className="contact-info-box">
              <h3>Informasi Kontak</h3>
              <div className="contact-detail">
                <Phone size={20} />
                <div>
                  <strong>Telepon / WhatsApp:</strong>
                  <p><a href="tel:+6285212078467">0852-1207-8467</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <MapPin size={20} />
                <div>
                  <strong>Alamat:</strong>
                  <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
                </div>
              </div>
              <div className="contact-detail">
                <Clock size={20} />
                <div>
                  <strong>Jam Operasional:</strong>
                  <p>Senin - Minggu: 08:00 - 20:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h3>Konsultasi Gratis Sekarang!</h3>
              <p>
                Dapatkan penawaran terbaik untuk proyek las Anda. Gratis survey dan konsultasi!
              </p>
              <div className="cta-buttons">
                <a href="https://wa.me/6285212078467" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                </a>
                <Link to="/kontak-bengkel-las-bekasi" className="btn-secondary">
                  Formulir Kontak
                </Link>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="related-services">
            <h2>Layanan Las Lainnya</h2>
            <div className="related-grid">
              <Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi" className="related-card">
                <h3>Jasa Kanopi Bekasi</h3>
                <p>Kanopi minimalis berkualitas tinggi</p>
              </Link>
              <Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi" className="related-card">
                <h3>Jasa Pagar Besi Bekasi</h3>
                <p>Pagar besi minimalis dan klasik</p>
              </Link>
              <Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi" className="related-card">
                <h3>Jasa Teralis Bekasi</h3>
                <p>Teralis anti maling berkualitas</p>
              </Link>
              <Link to="/layanan-las-bekasi/jasa-konstruksi-baja-bekasi" className="related-card">
                <h3>Konstruksi Baja Bekasi</h3>
                <p>Konstruksi baja ringan & berat</p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BengkelLasBekasiPage
