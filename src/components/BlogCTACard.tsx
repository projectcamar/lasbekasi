import React, { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import './BlogCTACard.css'

const BlogCTACard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = now.getMonth()
      
      // Get last day of current month
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
      
      // Set end time to last day of month at 23:59:59
      const endTime = new Date(currentYear, currentMonth, lastDayOfMonth.getDate(), 23, 59, 59)
      
      const difference = endTime.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="blog-cta-card">
      <div className="cta-header">
        <h3>🎉 Promo Spesial Bulan Ini!</h3>
        <p>Dapatkan harga terbaik untuk jasa las Bekasi</p>
      </div>

      <div className="cta-countdown">
        <p className="countdown-label">Promo Berakhir Dalam:</p>
        <div className="countdown-container">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label-small">Hari</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="countdown-label-small">Jam</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="countdown-label-small">Menit</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="countdown-label-small">Detik</div>
          </div>
        </div>
      </div>

      <div className="cta-benefits">
        <div className="benefit-item">
          <span className="benefit-icon">✅</span>
          <span>Survey & Konsultasi GRATIS</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">✅</span>
          <span>Harga Kompetitif & Transparan</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">✅</span>
          <span>Material SNI & Bergaransi</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">✅</span>
          <span>Pengerjaan Cepat & Rapi</span>
        </div>
      </div>

      <div className="cta-buttons">
        <a 
          href="https://wa.me/6285212078467?text=Halo,%20saya%20tertarik%20dengan%20promo%20jasa%20las%20Bekasi" 
          className="cta-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          WhatsApp Sekarang
        </a>
        <a 
          href="tel:+6285212078467" 
          className="cta-btn-secondary"
        >
          <Phone size={20} />
          Telepon Langsung
        </a>
      </div>

      <p className="cta-note">
        📞 Hubungi kami sekarang untuk mendapatkan penawaran terbaik!
      </p>
    </div>
  )
}

export default BlogCTACard

