import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FAQ_DATA, type FAQItem } from '../data/faq'
import { generateFAQSchema } from '../utils/structuredData'
import './HomepageFAQ.css'

interface FAQSectionProps {
  isIndonesian: boolean
  language: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'
}

const FAQSection: React.FC<FAQSectionProps> = ({ isIndonesian, language }) => {
  // Get top FAQs from multiple categories
  const topFAQs: FAQItem[] = [
    // From commodity-export-bekasi
    FAQ_DATA[0]?.faqs[0], // Komoditas apa saja
    FAQ_DATA[0]?.faqs[1], // Standar kualitas kakao
    FAQ_DATA[0]?.faqs[3], // Keunggulan cengkeh
    FAQ_DATA[0]?.faqs[4], // Cocopeat
    FAQ_DATA[0]?.faqs[5], // Lead time
    FAQ_DATA[0]?.faqs[6], // Dokumen ekspor

    // From cocoa-powder-export-guide
    FAQ_DATA[1]?.faqs[0], // Natural vs Alkalized
    FAQ_DATA[1]?.faqs[1], // Kenapa kakao Indonesia
  ].filter((faq): faq is FAQItem => faq !== undefined).slice(0, 10)

  const translations = {
    title: 'FAQ Bengkel Las Bekasi',
    subtitle: 'Pertanyaan Umum Tentang Jasa Las Bekasi - Informasi lengkap seputar layanan bengkel las dan harga las di Bekasi',
    contactUs: 'Masih Ada Pertanyaan? Hubungi tim kami untuk konsultasi gratis!'
  }

  // Generate FAQ Schema for rich snippets
  const faqSchema = generateFAQSchema(topFAQs)

  return (
    <>
      <Helmet>
        {/* FAQ Schema for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">{translations.title}</h2>
            <p className="faq-subtitle">{translations.subtitle}</p>
          </div>

          <div className="faq-grid">
            {topFAQs.map((faq, index) => (
              <details key={index} className="faq-item" itemScope itemType="https://schema.org/Question">
                <summary className="faq-question" itemProp="name">
                  {faq.question}
                </summary>
                <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq-cta">
            <p className="faq-cta-text">{translations.contactUs}</p>
            <a
              href={`https://wa.me/6285212078467?text=${encodeURIComponent(
                'Halo Bengkel Las Mandiri, saya ingin konsultasi tentang jasa las'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-button"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQSection
