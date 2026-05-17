import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, Phone, Mail, MapPin, Award, Shield, Zap } from 'lucide-react'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import { generateLocalBusinessStructuredData, generateFAQSchema } from '../utils/structuredData'
import { getFAQBySlug } from '../data/faq'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './LandingPage.css'

// LANDING PAGE: Bengkel Las Mandiri Bekasi
// Target Keyword: "Bengkel Las Bekasi Terpercaya" - HIGH INTENT LOCAL SERVICE KEYWORD

const CommodityExportBekasi: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const langParam = searchParams.get('lang')
  const isIndonesian = langParam !== 'en'
  const language = isIndonesian ? 'id' : 'en'
  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const localBusinessSchema = generateLocalBusinessStructuredData()
  // Note: FAQ data might need update in src/data/faq.ts
  const faqData = getFAQBySlug('commodity-export-bekasi')
  const faqSchema = faqData ? generateFAQSchema(faqData.faqs) : null

  return (
    <div className="landing-page commodity-export-bekasi">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>Bengkel Las Bekasi #1 - Jasa Kanopi, Pagar & Konstruksi Baja | Mandiri Steel</title>
        <meta name="description" content="Bengkel Las Mandiri Bekasi - Jasa las profesional sejak 1999. Melayani pembuatan kanopi Alderon, pagar minimalis, teralis, dan konstruksi baja WF di Bekasi, Cikarang & Tambun. Hubungi +62 852-1207-8467" />
        <meta name="keywords" content="bengkel las bekasi, jasa las kanopi bekasi, tukang las pagar minimalis, bengkel las cikarang, konstruksi baja wf bekasi, pagar stainless steel bekasi, teralis jendela bekasi, bengkel las mandiri steel" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`commodity-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content="Bengkel Las Bekasi #1 - Bengkel Las Mandiri Steel" />
        <meta property="og:description" content="Jasa las dan konstruksi besi terpercaya di Bekasi. Spesialis kanopi, pagar, teralis, dan baja berat dengan kualitas material SNI dan pengalaman 25+ tahun." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-hero-content">
          <div className="landing-hero-badge">
            <Shield size={20} />
            <span>WELDING SPECIALIST | SINCE 1999</span>
          </div>

          <h1 className="landing-hero-title">
            Bengkel Las Bekasi<br />
            <span className="highlight">Spesialis Kanopi & Pagar</span>
          </h1>

          <p className="landing-hero-subtitle">
            Solusi konstruksi besi dan stainless steel terpercaya untuk rumah, ruko, dan pabrik Anda. Dipimpin oleh Bapak Maman Toha dengan pengalaman lebih dari 25 tahun di Bekasi.
          </p>

          <div className="landing-hero-features">
            <div className="feature-badge">
              <CheckCircle size={20} />
              <span>Material Besi SNI</span>
            </div>
            <div className="feature-badge">
              <CheckCircle size={20} />
              <span>Garansi Pekerjaan</span>
            </div>
            <div className="feature-badge">
              <CheckCircle size={20} />
              <span>Survei Lokasi Gratis</span>
            </div>
          </div>

          <div className="landing-hero-cta">
            <a href="https://wa.me/6285212078467?text=Halo%20Bengkel%20Las%20Mandiri%2C%20saya%20ingin%20konsultasi%20jasa%20las"
              className="cta-button primary"
              target="_blank"
              rel="noopener noreferrer">
              <Phone size={20} />
              Konsultasi via WhatsApp
            </a>
            <Link to="/products" className="cta-button secondary">
              Lihat Katalog Pekerjaan
            </Link>
          </div>
        </div>

        <div className="landing-hero-image">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop"
            alt="Bengkel Las Mandiri Bekasi - Workshop Las Terpercaya"
            title="Bengkel Las Mandiri - Spesialis Kanopi & Pagar Bekasi"
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="630"
          />
        </div>
      </section>

      {/* Services Highlights */}
      <section className="landing-why-choose">
        <div className="container">
          <h2 className="section-title">Layanan Las Unggulan Kami</h2>
          <p className="section-subtitle">
            Dikerjakan oleh tukang las profesional dengan hasil yang rapi, kuat, dan tepat waktu.
          </p>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="card-icon">
                <Zap size={40} />
              </div>
              <h3>Kanopi Alderon & Kaca</h3>
              <p>
                Kanopi minimalis dengan atap Alderon UPVC yang sejuk atau kaca tempered yang mewah untuk ruko dan rumah.
              </p>
              <ul>
                <li>Rangka Hollow Galvanis</li>
                <li>Atap Alderon Double Layer</li>
                <li>Kaca Tempered 8mm-10mm</li>
                <li>Finishing Cat Meni & Spray</li>
              </ul>
            </div>

            <div className="why-choose-card">
              <div className="card-icon">
                <Award size={40} />
              </div>
              <h3>Pagar & Pintu Besi</h3>
              <p>
                Pagar minimalis modern, pagar tempa klasik, hingga pintu pagar stainless steel anti karat.
              </p>
              <ul>
                <li>Besi Hollow SNI Berkualitas</li>
                <li>Desain Minimalis & Klasik</li>
                <li>Stainless Steel Grade 304</li>
                <li>Las Argon & Listrik Kuat</li>
              </ul>
            </div>

            <div className="why-choose-card">
              <div className="card-icon">
                <Shield size={40} />
              </div>
              <h3>Konstruksi Baja WF</h3>
              <p>
                Pengerjaan konstruksi baja berat untuk gudang, pabrik, dak mezanin, dan lapangan futsal.
              </p>
              <ul>
                <li>Struktur Baja WF & H-Beam</li>
                <li>Perhitungan Struktur Matang</li>
                <li>Pengerjaan Proyek Pabrik</li>
                <li>Tim Ahli Konstruksi Baja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="landing-process">
        <div className="container">
          <h2 className="section-title">Proses Pemesanan Mudah</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Konsultasi & Estimasi</h3>
              <p>Hubungi kami via WhatsApp untuk diskusi awal dan perkiraan biaya proyek Anda.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Survei Lokasi</h3>
              <p>Kami datang ke lokasi Anda di Bekasi untuk pengukuran presisi dan pemilihan material.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Penawaran Resmi</h3>
              <p>Kami berikan invoice penawaran harga detail sesuai spesifikasi yang disepakati.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Pengerjaan Workshop</h3>
              <p>Produk las dirakit di workshop kami dengan ketelitian tinggi oleh tenaga ahli.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Pemasangan & Finishing</h3>
              <p>Proses pemasangan di lokasi dengan finishing cat yang rapi dan pengecekan akhir.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Garansi & Pelunasan</h3>
              <p>Pelunasan dilakukan setelah pekerjaan selesai dan kami berikan garansi kepuasan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqData && (
        <section className="landing-faq">
          <div className="container">
            <h2 className="section-title">Pertanyaan Sering Diajukan</h2>
            <div className="faq-grid">
              {faqData.faqs.map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="landing-final-cta">
        <div className="container">
          <h2>Wujudkan Hunian Impian Anda Bersama Kami</h2>
          <p>Dapatkan penawaran harga terbaik untuk jasa las di Bekasi sekarang juga.</p>
          <div className="contact-methods">
            <a href="mailto:info@lasbekasi.com" className="contact-card email">
              <Mail size={32} />
              <strong>Email</strong>
              <span>info@lasbekasi.com</span>
            </a>
            <div className="contact-card location">
              <MapPin size={32} />
              <strong>Workshop</strong>
              <span>Setu Cibitung, Bekasi, Jawa Barat</span>
            </div>
          </div>
          <div className="final-cta-button">
            <a href="https://wa.me/6285212078467"
              className="cta-button primary large"
              target="_blank"
              rel="noopener noreferrer">
              <Phone size={24} />
              Hubungi Bapak Maman (WhatsApp)
            </a>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default CommodityExportBekasi
