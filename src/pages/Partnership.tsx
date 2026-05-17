import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import NaturraHeader from '../components/NaturraHeader'
import Footer from '../components/Footer'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { MANDIRI_PARTNERSHIP_TRANSLATIONS } from '../utils/partnershipTranslations'
import './Partnership.css'

const heroImage = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80'
const experienceImage = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200'
const collaborationImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200'
const flexibilityImage = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=1200'
const scaleImage = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200'

const Partnership: React.FC = () => {
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
  const t = MANDIRI_PARTNERSHIP_TRANSLATIONS[language] ?? MANDIRI_PARTNERSHIP_TRANSLATIONS.en

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="mandiri-partnership">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction }}>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`partnership-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <section className="mandiri-partnership__hero">
        <div className="mandiri-partnership__hero-image">
          <img src={heroImage} alt="Mandiri Steel Partnership" loading="eager" fetchPriority="high" />
          <div className="mandiri-partnership__hero-overlay"></div>
        </div>
        <div className="mandiri-partnership__hero-content">
          <h1 className="mandiri-partnership__hero-title">{t.heroTitle}</h1>
        </div>
      </section>

      <section className="mandiri-partnership__intro">
        <div className="mandiri-partnership__container">
          <div className="mandiri-partnership__intro-grid">
            <div className="mandiri-partnership__intro-text">
              <h2 className="mandiri-partnership__intro-title">{t.mainTitle}</h2>
              <div className="mandiri-partnership__intro-body">
                {t.mainParagraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="mandiri-partnership__intro-media">
               <img src={experienceImage} alt="Mandiri Steel Workshop" />
            </div>
          </div>
        </div>
      </section>

      <section className="mandiri-partnership__experience">
        <div className="mandiri-partnership__container">
          <div className="mandiri-partnership__experience-grid">
             <div className="mandiri-partnership__experience-image">
                <img src={collaborationImage} alt="Experience" />
             </div>
             <div className="mandiri-partnership__experience-content">
                <h2 className="mandiri-partnership__experience-title">{t.experienceTitle}</h2>
                {t.experienceParagraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="mandiri-partnership__collaboration">
        <div className="mandiri-partnership__container">
          <h2 className="mandiri-partnership__collaboration-title">{t.collaborationTitle}</h2>
          <p className="mandiri-partnership__collaboration-subtitle">{t.collaborationSubtitle}</p>
          <div className="mandiri-partnership__collaboration-grid">
             <div className="mandiri-partnership__collaboration-content">
                {t.collaborationParagraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
             </div>
             <div className="mandiri-partnership__collaboration-image">
                <img src={flexibilityImage} alt="Collaboration" />
             </div>
          </div>
        </div>
      </section>

      <section className="mandiri-partnership__flexibility">
        <div className="mandiri-partnership__container">
          <div className="mandiri-partnership__flexibility-grid">
             <div className="mandiri-partnership__flexibility-image">
                <img src={scaleImage} alt="Flexibility" />
             </div>
             <div className="mandiri-partnership__flexibility-content">
                <h2 className="mandiri-partnership__flexibility-title">{t.flexibilityTitle}</h2>
                {t.flexibilityParagraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="mandiri-partnership__scale">
        <div className="mandiri-partnership__container">
           <div className="mandiri-partnership__scale-card">
              <h2 className="mandiri-partnership__scale-title">{t.scaleTitle}</h2>
              <p className="mandiri-partnership__scale-desc">{t.scaleDescription}</p>
              <p className="mandiri-partnership__scale-question">{t.scaleQuestion}</p>
           </div>
        </div>
      </section>

      <section className="mandiri-partnership__cta">
        <div className="mandiri-partnership__container">
          <div className="mandiri-partnership__cta-card">
            <h2 className="mandiri-partnership__cta-title">{t.ctaTitle}</h2>
            <p className="mandiri-partnership__cta-desc">{t.ctaDescription}</p>
            <a
              href="https://wa.me/6285212078467"
              className="mandiri-partnership__btn"
              onClick={() => trackWhatsAppClick('partnership_page_cta')}
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default Partnership
