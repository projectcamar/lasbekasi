import React from 'react'
import { Link } from 'react-router-dom'
import { User, Award, MapPin, Phone } from 'lucide-react'
import './AuthorCard.css'

const AuthorCard: React.FC = () => {
  return (
    <div className="author-card">
      <div className="author-header">
        <div className="author-avatar">
          <User size={40} />
        </div>
        <div className="author-info">
          <h3>Maman Toha</h3>
          <p className="author-title">Pemilik & Founder Bengkel Las Mandiri</p>
        </div>
      </div>
      
      <div className="author-stats">
        <div className="author-stat">
          <Award size={20} className="stat-icon" />
          <div>
            <div className="stat-number">30+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
        </div>
        <div className="author-stat">
          <MapPin size={20} className="stat-icon" />
          <div>
            <div className="stat-number">1000+</div>
            <div className="stat-label">Proyek Selesai</div>
          </div>
        </div>
      </div>

      <div className="author-bio">
        <p>
          Sejak tahun 1999, <strong>Maman Toha</strong> telah memimpin Bengkel Las Mandiri dengan dedikasi tinggi 
          untuk memberikan jasa las terbaik di Bekasi. Dengan pengalaman lebih dari 30 tahun di bidang konstruksi baja, 
          beliau telah mengerjakan ribuan proyek mulai dari kanopi minimalis, pagar besi, tralis, hingga konstruksi baja skala besar.
        </p>
        <p>
          Komitmen terhadap kualitas, material SNI, dan kepuasan pelanggan adalah prinsip utama yang dipegang teguh 
          dalam setiap proyek yang dikerjakan.
        </p>
      </div>

      <div className="author-cta">
        <Link to="/tentang-kami" className="author-link">
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
        <a 
          href="https://wa.me/6285212078467?text=Halo%20Pak%20Maman%20Toha,%20saya%20ingin%20konsultasi%20tentang%20jasa%20las" 
          className="author-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone size={18} />
          Konsultasi Langsung
        </a>
      </div>
    </div>
  )
}

export default AuthorCard

