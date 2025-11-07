import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'

const Hero: React.FC = () => {
  return (
    <section className="hero" role="banner" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <article className="hero-text">
            <header>
              <p className="hero-subtitle" aria-label="Tagline">Bengkel Las Terpercaya di Bekasi</p>
              <div className="hero-title" id="hero-title" role="heading" aria-level={1}>Las Bekasi #1 - Jasa Las Profesional Sejak 1999</div>
              <p className="hero-description" role="doc-subtitle">
                Jasa Las Bekasi: Kanopi, Pagar, Teralis, Railing & Konstruksi Baja
              </p>
            </header>
            <div className="hero-body">
              <p role="contentinfo">
                <strong>Las Bekasi</strong> melayani jasa las profesional di seluruh area Bekasi. 
                Spesialis pembuatan kanopi minimalis, pagar besi, teralis anti maling, railing tangga stainless, 
                dan konstruksi baja berkualitas tinggi. <strong>Bengkel las Bekasi</strong> terpercaya dengan 
                pengalaman 25+ tahun, tukang las bersertifikat, material SNI, dan harga murah. 
                Gratis survey & konsultasi untuk wilayah Bekasi Timur, Bekasi Barat, Bekasi Utara, 
                Bekasi Selatan, Cikarang, dan sekitarnya.
              </p>
              <nav className="hero-actions" aria-label="Primary navigation">
                <Link to="/layanan-las-bekasi" className="btn-primary" role="button" aria-label="Lihat semua layanan las">
                  Lihat Layanan
                </Link>
                <Link to="/kontak-bengkel-las-bekasi" className="btn-secondary" role="button" aria-label="Konsultasi gratis dengan ahli las">
                  Konsultasi Gratis
                </Link>
              </nav>
            </div>
          </article>
          <figure className="hero-image" role="img" aria-label="Bengkel Las Bekasi">
            <img 
              src={heroImage}
              alt="Workshop Bengkel Las Bekasi dengan peralatan las modern dan hasil pekerjaan berkualitas" 
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="600" 
              height="400"
              className="hero-img"
            />
            <figcaption className="visually-hidden">
              Workshop Bengkel Las Mandiri di Bekasi dengan peralatan las modern dan hasil pekerjaan berkualitas tinggi
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
