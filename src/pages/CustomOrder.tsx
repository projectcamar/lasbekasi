import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { FileText, MessageCircle, Truck, Wrench } from 'lucide-react'
import Footer from '../components/Footer'
import NaturraHeader from '../components/NaturraHeader'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { MANDIRI_CUSTOM_ORDER_TRANSLATIONS } from '../utils/customOrderTranslations'
import './CustomOrder.css'

const heroImage = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80'
const showroomImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200'

const CustomOrder: React.FC = () => {
  const location = useLocation()
  const [language, setLanguage] = useState<LanguageCode>(() => {
    return getCurrentLanguage(location.pathname, location.search)
  })

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    if (currentLang !== language) {
      setLanguage(currentLang)
    }
  }, [location.pathname, location.search, language])

  const isIndonesian = language === 'id'
  const t = MANDIRI_CUSTOM_ORDER_TRANSLATIONS[language] ?? MANDIRI_CUSTOM_ORDER_TRANSLATIONS.en

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="mandiri-custom">
      <Helmet
        htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': language }}
      >
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link
            key={`custom-order-hreflang-${alternate.hrefLang}`}
            rel="alternate"
            hrefLang={alternate.hrefLang}
            href={alternate.href}
          />
        ))}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <section className="mandiri-custom__hero">
        <div className="mandiri-custom__hero-image">
          <img
            src={heroImage}
            alt={t.hero.imageAlt}
            loading="eager"
            fetchPriority="high"
          />
          <div className="mandiri-custom__hero-overlay"></div>
        </div>
        <div className="mandiri-custom__hero-content">
          <h1 className="mandiri-custom__hero-title">{t.hero.title}</h1>
        </div>
      </section>

      <section className="mandiri-custom__message">
        <div className="mandiri-custom__container">
          <div className="mandiri-custom__message-grid">
            <div className="mandiri-custom__message-text">
              <h2 className="mandiri-custom__message-title">{t.message.title}</h2>
              <div className="mandiri-custom__message-body">
                {t.message.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="mandiri-custom__message-image">
              <img src={showroomImage} alt={t.message.imageAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="mandiri-custom__ideas">
        <div className="mandiri-custom__container">
          <div className="mandiri-custom__ideas-card">
            <h2 className="mandiri-custom__ideas-title">{t.ideas.title}</h2>
            <p className="mandiri-custom__ideas-intro">{t.ideas.intro}</p>
            <p className="mandiri-custom__ideas-desc">{t.ideas.description}</p>
          </div>
        </div>
      </section>

      <section className="mandiri-custom__process">
        <div className="mandiri-custom__container">
          <h2 className="mandiri-custom__process-title">{t.process.title}</h2>
          <div className="mandiri-custom__process-grid">
            {t.process.steps.map((step: any, idx: number) => (
              <div className="mandiri-custom__step" key={idx}>
                <div className="mandiri-custom__step-icon">
                  {idx === 0 && <MessageCircle size={40} />}
                  {idx === 1 && <FileText size={40} />}
                  {idx === 2 && <Wrench size={40} />}
                  {idx === 3 && <Truck size={40} />}
                </div>
                <h3 className="mandiri-custom__step-title">{step.title}</h3>
                <p className="mandiri-custom__step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mandiri-custom__cta">
        <div className="mandiri-custom__container">
          <div className="mandiri-custom__cta-card">
            <h2 className="mandiri-custom__cta-title">{t.cta.title}</h2>
            <p className="mandiri-custom__cta-intro">{t.cta.intro}</p>
            
            <div className="mandiri-custom__workshop">
              <h3>{t.cta.workshopHeading}</h3>
              <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
              <p className="mandiri-custom__phone">+62 852-1207-8467</p>
            </div>

            <p className="mandiri-custom__cta-desc">{t.cta.workshopParagraph}</p>

            <a
              href="https://wa.me/6285212078467"
              className="mandiri-custom__btn"
              onClick={() => trackWhatsAppClick('custom_order_page_cta')}
            >
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default CustomOrder
