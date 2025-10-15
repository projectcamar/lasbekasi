import React from 'react'
import { Helmet } from 'react-helmet-async'

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <Helmet>
        <title>Blog Bengkel Las | Tips & Panduan Las Besi, Kanopi & Pagar</title>
        <meta name="description" content="Blog bengkel las dengan tips dan panduan lengkap tentang las besi, kanopi, pagar, dan konstruksi baja. Informasi terbaru seputar jasa las Bekasi." />
        <meta name="keywords" content="blog bengkel las, tips las besi, panduan kanopi, cara pasang pagar, konstruksi baja, jasa las bekasi" />
        <link rel="canonical" href="https://lasbekasi.com/blog" />
      </Helmet>

      <div className="container">
        <header className="page-header">
          <h1>Blog Bengkel Las | Tips & Panduan Las Besi, Kanopi & Pagar</h1>
          <p className="page-subtitle">Informasi Terbaru Seputar Jasa Las dan Konstruksi Baja</p>
        </header>

        <section className="blog-content">
          <div className="blog-grid">
            <article className="blog-post">
              <h2>Cara Memilih Bengkel Las yang Bagus</h2>
              <p className="post-meta">15 Oktober 2025 | Tips & Panduan</p>
              <p>Memilih bengkel las yang bagus adalah langkah penting untuk mendapatkan hasil pengerjaan yang berkualitas. Berikut tips memilih bengkel las terpercaya...</p>
              <a href="/blog/cara-memilih-bengkel-las-yang-bagus" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Perbedaan Las Listrik dan Las Karbit</h2>
              <p className="post-meta">12 Oktober 2025 | Teknik Las</p>
              <p>Las listrik dan las karbit adalah dua teknik las yang berbeda. Mari kita bahas perbedaan keduanya dan kapan sebaiknya digunakan...</p>
              <a href="/blog/perbedaan-las-listrik-dan-las-karbit" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Jenis Jenis Pagar Besi yang Populer</h2>
              <p className="post-meta">10 Oktober 2025 | Produk & Layanan</p>
              <p>Pagar besi memiliki berbagai jenis dan desain. Berikut jenis-jenis pagar besi yang populer dan cocok untuk rumah Anda...</p>
              <a href="/blog/jenis-jenis-pagar-besi-yang-populer" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Cara Pasang Kanopi Baja Ringan</h2>
              <p className="post-meta">8 Oktober 2025 | Panduan Instalasi</p>
              <p>Kanopi baja ringan adalah solusi praktis untuk melindungi area outdoor. Berikut panduan lengkap cara pasang kanopi baja ringan...</p>
              <a href="/blog/cara-pasang-kanopi-baja-ringan" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Tips Memilih Tukang Las</h2>
              <p className="post-meta">5 Oktober 2025 | Tips & Panduan</p>
              <p>Memilih tukang las yang tepat sangat penting untuk mendapatkan hasil pengerjaan yang berkualitas. Berikut tips memilih tukang las...</p>
              <a href="/blog/tips-memilih-tukang-las" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Kelebihan Pagar Besi Dibanding Kayu</h2>
              <p className="post-meta">3 Oktober 2025 | Perbandingan</p>
              <p>Pagar besi dan pagar kayu memiliki kelebihan masing-masing. Mari kita bandingkan kelebihan pagar besi dibanding kayu...</p>
              <a href="/blog/kelebihan-pagar-besi-dibanding-kayu" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Cara Perawatan Pagar Besi</h2>
              <p className="post-meta">1 Oktober 2025 | Perawatan</p>
              <p>Pagar besi memerlukan perawatan yang tepat agar tetap awet dan tidak berkarat. Berikut cara perawatan pagar besi yang benar...</p>
              <a href="/blog/cara-perawatan-pagar-besi" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Ide Desain Pagar Minimalis</h2>
              <p className="post-meta">28 September 2025 | Desain & Inspirasi</p>
              <p>Pagar minimalis menjadi tren untuk rumah modern. Berikut ide desain pagar minimalis yang bisa menjadi inspirasi untuk rumah Anda...</p>
              <a href="/blog/ide-desain-pagar-minimalis" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Model Kanopi Rumah Minimalis</h2>
              <p className="post-meta">25 September 2025 | Desain & Inspirasi</p>
              <p>Kanopi rumah minimalis memberikan perlindungan sekaligus estetika. Berikut model kanopi rumah minimalis yang populer...</p>
              <a href="/blog/model-kanopi-rumah-minimalis" className="btn-outline">Baca Selengkapnya</a>
            </article>

            <article className="blog-post">
              <h2>Inspirasi Pagar Industrial</h2>
              <p className="post-meta">22 September 2025 | Desain & Inspirasi</p>
              <p>Pagar industrial memberikan kesan modern dan kokoh. Berikut inspirasi pagar industrial yang bisa menjadi pilihan untuk rumah Anda...</p>
              <a href="/blog/inspirasi-pagar-industrial" className="btn-outline">Baca Selengkapnya</a>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <h2>Butuh Jasa Las Profesional?</h2>
          <p>Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga terbaik!</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6285212078467" className="btn-primary">
              WhatsApp Sekarang
            </a>
            <a href="tel:+6285212078467" className="btn-secondary">
              Telepon Langsung
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog