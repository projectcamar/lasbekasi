import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Halaman Tidak Ditemukan | Bengkel Las Mandiri</title>
        <meta name="description" content="Halaman yang Anda cari tidak ditemukan. Kembali ke halaman utama untuk melihat layanan jasa las profesional di Bekasi." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
          <p className="not-found-description">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Halaman mungkin telah dipindahkan atau dihapus.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Kembali ke Beranda
            </Link>
            <Link to="/layanan-las-bekasi" className="btn-secondary">
              Lihat Layanan
            </Link>
          </div>

          <div className="not-found-links">
            <h3>Halaman Populer:</h3>
            <ul>
              <li><Link to="/layanan-las-bekasi">Layanan Las Bekasi</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi">Jasa Kanopi</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi">Jasa Pagar Besi</Link></li>
              <li><Link to="/album-bengkel-las-mandiri">Portfolio Kami</Link></li>
              <li><Link to="/kontak-bengkel-las-bekasi">Hubungi Kami</Link></li>
              <li><Link to="/tentang-kami">Tentang Bengkel Las Mandiri</Link></li>
            </ul>
          </div>

          <div className="not-found-contact">
            <p>Butuh bantuan? Hubungi kami:</p>
            <a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
              📱 WhatsApp: 0852-1207-8467
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

