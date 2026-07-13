import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, ChevronDown, ChevronUp } from 'lucide-react'
import './Footer.css'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getLinkWithLanguage } from '../utils/languageManager'
import { getAllBlogPosts } from '../data/blog'

interface FooterProps {
  isIndonesian?: boolean
  language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'
}

const Footer: React.FC<FooterProps> = ({ language = 'en' }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [isBlogArchiveExpanded, setIsBlogArchiveExpanded] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      })

      if (response.ok) {
        setMessage({
          type: 'success',
          text: language === 'id'
            ? 'Terima kasih telah berlangganan!'
            : language === 'ar'
              ? 'شكراً لاشتراكك!'
              : language === 'zh'
                ? '感谢您的订阅！'
                : language === 'ja'
                  ? 'ご登録ありがとうございます！'
                  : language === 'es'
                    ? '¡Gracias por suscribirte!'
                    : language === 'fr'
                      ? 'Merci de vous être abonné !'
                      : language === 'ko'
                        ? '구독해 주셔서 감사합니다!'
                        : 'Thank you for subscribing!'
        })
        setFirstName('')
        setEmail('')
      } else {
        setMessage({
          type: 'error',
          text: language === 'id'
            ? 'Gagal berlangganan. Silakan coba lagi.'
            : language === 'ar'
              ? 'فشل الاشتراك. يرجى المحاولة مرة أخرى.'
              : language === 'zh'
                ? '订阅失败。请重试。'
                : language === 'ja'
                  ? '登録に失敗しました。もう一度お試しください。'
                  : language === 'es'
                    ? 'Suscripción fallida. Por favor, inténtalo de nuevo.'
                    : language === 'fr'
                      ? 'Échec de l\'abonnement. Veuillez réessayer.'
                      : language === 'ko'
                        ? '구독에 실패했습니다. 다시 시도해주세요.'
                        : 'Subscription failed. Please try again.'
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({
        type: 'error',
        text: language === 'id'
          ? 'Terjadi kesalahan. Silakan coba lagi.'
          : language === 'ar'
            ? 'حدث خطأ. يرجى المحاولة مرة أخرى.'
            : language === 'zh'
              ? '发生错误。请重试。'
              : language === 'ja'
                ? 'エラーが発生しました。もう一度お試しください。'
                : language === 'es'
                  ? 'Ocurrió un error. Por favor, inténtalo de nuevo.'
                  : language === 'fr'
                    ? 'Une erreur s\'est produite. Veuillez réessayer.'
                    : language === 'ko'
                      ? '오류가 발생했습니다. 다시 시도해주세요.'
                      : 'An error occurred. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(null), 5000)
    }
  }

  const descriptions: Record<'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko', string> = {
    id: "Bengkel Las Mandiri (Mandiri Steel) adalah spesialis jasa pengelasan dan konstruksi besi profesional di Bekasi. Berpengalaman sejak 1999 dalam pembuatan kanopi, pagar minimalis, teralis, railing tangga, dan konstruksi baja WF bermutu tinggi.",
    en: "Bengkel Las Mandiri (Mandiri Steel) is a professional welding and iron construction specialist based in Bekasi. Since 1999, providing premium quality canopy, gates, window trellis, railing, and structural steel WF works.",
    ar: "تعد ورشة عمل مانديري ستيل (Mandiri Steel) متخصصة في أعمال اللحام الاحترافية والإنشاءات الحديدية في بيكاسي. خبرة منذ عام 1999 في تصنيع المظلات، البوابات، الدرابزين، والإنشاءات الفولاذية عالية الجودة.",
    zh: "Mandiri Steel (Bengkel Las Mandiri) 是勿加泗专业的焊接与铁艺工程设计制造中心。自1999年以来，我们专注于高品质遮阳篷、简约铁门、防盗窗、楼梯扶手及钢结构工程。",
    ja: "Bengkel Las Mandiri（Mandiri Steel）は、ブカシを拠点とするプロフェッショナルな溶接・鉄骨建設のスペシャリストです。1999年以来、高品質なキャノピー、フェンス、手すり、鉄骨構造物の設計・施工を行っています。",
    es: "Bengkel Las Mandiri (Mandiri Steel) es especialista en servicios de soldadura profesional y estructuras de hierro en Bekasi. Desde 1999 fabricando marquesinas, rejas minimalistas, barandillas y estructuras de acero de alta calidad.",
    fr: "Bengkel Las Mandiri (Mandiri Steel) est un spécialiste de la soudure professionnelle et de la construction métallique à Bekasi. Depuis 1999, nous réalisons des marquises, portails, garde-corps et structures en acier de haute qualité.",
    ko: "Bengkel Las Mandiri (Mandiri Steel)는 브카시에 위치한 전문 용접 및 철제 구조물 맞춤 제작 전문 기업입니다. 1999년부터 캐노피, 대문, 방범창, 난간 및 H빔 강구조물 등 최고의 기술력을 제공합니다."
  }

  const categories = {
    id: [
      { name: "Kanopi Alderon", slug: "kanopi-minimalis-alderon" },
      { name: "Kanopi Kaca", slug: "kanopi-kaca-tempered" },
      { name: "Pagar Minimalis", slug: "pagar-minimalis-modern" },
      { name: "Pagar Besi Tempa", slug: "pagar-besi-tempa-klasik" },
      { name: "Teralis Jendela", slug: "teralis-jendela-minimalis" },
      { name: "Railing Tangga", slug: "railing-tangga-minimalis" },
      { name: "Konstruksi Baja WF", slug: "konstruksi-baja-wf" }
    ],
    en: [
      { name: "Alderon Canopy", slug: "kanopi-minimalis-alderon" },
      { name: "Tempered Glass Canopy", slug: "kanopi-kaca-tempered" },
      { name: "Minimalist Gate", slug: "pagar-minimalis-modern" },
      { name: "Wrought Iron Gate", slug: "pagar-besi-tempa-klasik" },
      { name: "Window Trellis", slug: "teralis-jendela-minimalis" },
      { name: "Stair Railing", slug: "railing-tangga-minimalis" },
      { name: "Steel Construction", slug: "konstruksi-baja-wf" }
    ]
  }

  const currentCategories = categories[language === 'id' ? 'id' : 'en']

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">Mandiri Steel</h2>
            <p className="footer-description">
              {descriptions[language] || descriptions.en}
            </p>
            <div className="footer-contact-info">
              <h3>{language === 'id' ? "Hubungi Kami" : language === 'ar' ? "اتصل بنا" : language === 'zh' ? "联系我们" : language === 'ja' ? "お問い合わせ" : language === 'es' ? "Contáctenos" : language === 'fr' ? "Contactez-nous" : language === 'ko' ? "연락처" : "Contact Us"}</h3>
              <p>
                <a href="mailto:info@lasbekasi.com" style={{ color: '#cbd5e1', textDecoration: 'underline' }}>
                  info@lasbekasi.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/6285212078467"
                  style={{ color: '#cbd5e1', textDecoration: 'underline' }}
                  onClick={() => trackWhatsAppClick('footer_contact_info')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 852-1207-8467
                </a>
              </p>
              <div className="footer-social-icons">
                <a href="https://instagram.com/mandiri_steel" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/mandiri.steel.bekasi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div className="footer-column">
            <h3>{language === 'id' ? "Workshop Kami" : language === 'ar' ? "موقعنا" : language === 'zh' ? "找到我们" : language === 'ja' ? "アクセス" : language === 'es' ? "Encuéntranos" : language === 'fr' ? "Nous Trouver" : language === 'ko' ? "찾아오시는 길" : "Find Us"}</h3>
            <div className="footer-location">
              <h4>Bekasi Workshop:</h4>
              <p>
                <a
                  href="https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-address-link"
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="footer-phone">
                <a
                  href="https://wa.me/6285212078467"
                  style={{ color: '#cbd5e1', textDecoration: 'underline' }}
                  onClick={() => trackWhatsAppClick('footer_workshop_address')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 852-1207-8467
                </a>
              </p>
              <div className="footer-hours" style={{ marginTop: '15px', fontSize: '0.9rem', color: '#ccc' }}>
                <p><strong>{language === 'id' ? 'Jam Buka:' : 'Working Hours:'}</strong></p>
                <p>{language === 'id' ? 'Senin - Sabtu: 08:00 - 17:00' : 'Monday - Saturday: 08:00 AM - 05:00 PM'}</p>
                <p>{language === 'id' ? 'Minggu: Hubungi untuk Janji' : 'Sunday: Appointment Only'}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>{language === 'id' ? "Tautan Cepat" : language === 'ar' ? "روابط سريعة" : language === 'zh' ? "快速链接" : language === 'ja' ? "クイックリンク" : language === 'es' ? "Enlaces Rápido" : language === 'fr' ? "Liens Rapides" : language === 'ko' ? "빠른 링크" : "Quick Links"}</h3>
            <ul className="footer-links">
              <li><Link to={getLinkWithLanguage("/products", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? 'Layanan' : 'Services'}</Link></li>
              <li><Link to={getLinkWithLanguage("/about", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? 'Tentang Kami' : 'About Us'}</Link></li>
              <li><Link to={getLinkWithLanguage("/blog", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? 'Blog & Tips' : 'Blog'}</Link></li>
              <li><Link to={getLinkWithLanguage("/testimonials", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? 'Testimoni & Review' : 'Testimonials'}</Link></li>
              <li><Link to={getLinkWithLanguage("/custom-order", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Konsultasi Jasa" : "Custom Order"}</Link></li>
              <li><Link to={getLinkWithLanguage("/partnership", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Program Kemitraan" : "Partnership"}</Link></li>
              <li><Link to={getLinkWithLanguage("/terms-of-service", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Syarat & Ketentuan" : "Terms of Service"}</Link></li>
              <li><Link to={getLinkWithLanguage("/image-license", language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Lisensi Gambar" : "Image License"}</Link></li>
            </ul>
          </div>

          {/* Categories / Services */}
          <div className="footer-column">
            <h3>{language === 'id' ? 'Layanan Kami' : 'Our Services'}</h3>
            <ul className="footer-links">
              {currentCategories.map((cat, idx) => (
                <li key={idx}>
                  <Link to={getLinkWithLanguage(`/products`, language)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-column">
            <h3>{language === 'id' ? "Berlangganan" : language === 'ar' ? "اشترك" : language === 'zh' ? "订阅" : language === 'ja' ? "登録" : language === 'es' ? "Suscríbete" : language === 'fr' ? "S'abonner" : language === 'ko' ? "구독" : "Subscribe"}</h3>
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <input
                type="text"
                placeholder={language === 'id' ? "Nama depan" : "First name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "..." : (language === 'id' ? "BERLANGGANAN" : "SUBSCRIBE")}
              </button>
              {message && (
                <div className={`subscribe-message ${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Blog Posts Links Section - Collapsible but always in DOM for SEO crawlability */}
        <div className="footer-blog-archive">
          <button
            className="footer-blog-archive-toggle"
            onClick={() => setIsBlogArchiveExpanded(!isBlogArchiveExpanded)}
            aria-expanded={isBlogArchiveExpanded}
            aria-label={language === 'id' ? "Toggle arsip blog" : "Toggle blog archive"}
          >
            <h4>{language === 'id' ? "Inspirasi & Tips Las" : "Welding & Design Blog"}</h4>
            {isBlogArchiveExpanded ? (
              <ChevronUp size={20} className="footer-toggle-icon" />
            ) : (
              <ChevronDown size={20} className="footer-toggle-icon" />
            )}
          </button>
          <nav
            className={`footer-blog-links ${isBlogArchiveExpanded ? 'expanded' : 'collapsed'}`}
            aria-label="Blog posts"
            aria-hidden={!isBlogArchiveExpanded}
          >
            {getAllBlogPosts().map((post) => (
              <Link
                key={post.id}
                to={getLinkWithLanguage(`/blog/${post.slug}`, language)}
                className="footer-blog-link"
                aria-label={post.title}
              >
                {post.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Bengkel Las Mandiri (Mandiri Steel). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
