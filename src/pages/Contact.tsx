import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import NaturraHeader from '../components/NaturraHeader'

const heroImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, getStoredLanguage, detectLanguageFromIP, type LanguageCode } from '../utils/languageManager'
import './Contact.css'

type ContactTranslation = {
  meta: {
    title: string
    description: string
    keywords: string
  }
  heroTitle: string
  introTitle: string
  form: {
    title: string
    subtitle: string
    fields: {
      name: string
      email: string
      phone: string
      subject: string
      message: string
    }
    submit: string
  }
  findUs: {
    heading: string
    workshopLabel: string
  }
  whatsapp: {
    greeting: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    subjectLabel: string
    messageLabel: string
    closing: string
  }
}

const CONTACT_TRANSLATIONS: Record<LanguageCode, ContactTranslation> = {
  en: {
    meta: {
      title: 'Contact Bengkel Las Mandiri Bekasi: WhatsApp, Location, Operating Hours - Mandiri Steel',
      description:
        'How to contact Bengkel Las Mandiri? WhatsApp: +6285212078467, Email: info@lasbekasi.com, Workshop address: Jl. Raya Setu Cibitung Bekasi. Operating hours: Monday-Saturday 08.00-17.00 WIB. Service area: Bekasi, Jakarta, Cikarang & surrounding areas. Free welding & steel fabrication consultation via WhatsApp.',
      keywords:
        'contact Bengkel Las Mandiri, whatsapp welding service, bengkel las bekasi contact, Mandiri Steel location, workshop address bekasi, operating hours welding shop, free canopy fence consultation'
    },
    heroTitle: 'Contact Us',
    introTitle:
      "We're happy to discuss your welding and steel fabrication needs or answer any questions. Get in touch with our team below.",
    form: {
      title: 'Enquiry Form',
      subtitle:
        'Contact our Customer Services team by completing the form. We will endeavour to respond within 24 hours.',
      fields: {
        name: 'Your name',
        email: 'Email',
        phone: 'Phone number',
        subject: 'Subject',
        message: 'Write your message here'
      },
      submit: 'SEND ENQUIRY'
    },
    findUs: {
      heading: 'Find Us',
      workshopLabel: 'Workshop Bekasi:'
    },
    whatsapp: {
      greeting: 'Hello Bengkel Las Mandiri,',
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      closing: 'Thank you!'
    }
  },
  id: {
    meta: {
      title: 'Hubungi Bengkel Las Mandiri Bekasi: WhatsApp, Lokasi, Jam Operasional - Mandiri Steel',
      description:
        'Bagaimana cara menghubungi Bengkel Las Mandiri? WhatsApp: +6285212078467 (Bapak Maman Toha), Email: info@lasbekasi.com, Alamat workshop: Jl. Raya Setu Cibitung Bekasi. Jam buka: Senin-Sabtu 08.00-17.00 WIB. Melayani jasa las kanopi, pagar, teralis, railing & baja WF. Konsultasi gratis via WhatsApp.',
      keywords:
        'hubungi bengkel las mandiri, whatsapp bengkel las, nomor bengkel las bekasi, lokasi bengkel las bekasi, alamat bengkel las bekasi, jam buka bengkel las bekasi, cara menghubungi bengkel las, konsultasi las gratis'
    },
    heroTitle: 'Hubungi Kami',
    introTitle:
      'Kami senang mendiskusikan kebutuhan las dan konstruksi baja Anda atau menjawab pertanyaan. Hubungi tim kami di bawah ini.',
    form: {
      title: 'Formulir Pertanyaan',
      subtitle:
        'Hubungi tim Customer Service kami dengan mengisi formulir di bawah ini. Kami akan berusaha merespons dalam 24 jam.',
      fields: {
        name: 'Nama Anda',
        email: 'Email',
        phone: 'Nomor telepon',
        subject: 'Subjek',
        message: 'Tulis pesan Anda di sini'
      },
      submit: 'KIRIM PERTANYAAN'
    },
    findUs: {
      heading: 'Temukan Kami',
      workshopLabel: 'Workshop Bekasi:'
    },
    whatsapp: {
      greeting: 'Halo Bengkel Las Mandiri,',
      nameLabel: 'Nama',
      emailLabel: 'Email',
      phoneLabel: 'Telepon',
      subjectLabel: 'Subjek',
      messageLabel: 'Pesan',
      closing: 'Terima kasih!'
    }
  },
  ar: {
    meta: {
      title: 'اتصل بورشة عمل مانديري ستيل بيكاسي: واتساب، الموقع، ساعات العمل - مانديري ستيل',
      description:
        'كيف تتواصل مع ورشة عمل مانديري ستيل بيكاسي؟ واتساب: +6285212078467، البريد الإلكتروني: info@lasbekasi.com، عنوان الورشة: Jl. Raya Setu Cibitung Bekasi. ساعات العمل: الاثنين إلى السبت 08:00-17:00 بتوقيت جاكرتا. استشارة مجانية لأعمال اللحام والحديد عبر واتساب.',
      keywords:
        'اتصال ورشة عمل مانديري ستيل، ورشة لحام بيكاسي، واتساب ورشة لحام بيكاسي، عنوان ورشة مانديري ستيل، ساعات عمل اللحام في بيكاسي، استشارة مجانية'
    },
    heroTitle: 'اتصل بنا',
    introTitle:
      'يسعدنا مناقشة احتياجات اللحام والحديد المخصص لديك أو الإجابة عن أي أسئلة. تواصل مع فريق ورشة اللحام الخاص بنا أدناه.',
    form: {
      title: 'نموذج الاستفسار',
      subtitle:
        'تواصل مع فريق خدمة العملاء لدينا من خلال تعبئة النموذج. سنبذل جهدنا للرد خلال 24 ساعة.',
      fields: {
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'اكتب رسالتك هنا'
      },
      submit: 'إرسال الاستفسار'
    },
    findUs: {
      heading: 'اعثر علينا',
      workshopLabel: 'ورشة بيكاسي:'
    },
    whatsapp: {
      greeting: 'مرحباً Bengkel Las Mandiri،',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      subjectLabel: 'الموضوع',
      messageLabel: 'الرسالة',
      closing: 'شكراً لك!'
    }
  },
  zh: {
    meta: {
      title: '联系贝卡西 Mandiri Steel 焊接工坊：WhatsApp、地址、营业时间 - Mandiri Steel',
      description:
        '如何联系 Mandiri Steel？WhatsApp：+6285212078467，邮箱：info@lasbekasi.com，工坊地址：Jl. Raya Setu Cibitung Bekasi。营业时间：周一至周六 08:00-17:00 WIB。通过 WhatsApp 免费咨询遮阳篷、铁门与钢结构设计。',
      keywords:
        '联系 Mandiri Steel, 贝卡西焊接工坊 WhatsApp, 焊接工坊联系方式, Mandiri Steel 地址, 营业时间, 免费焊接咨询'
    },
    heroTitle: '联系我们',
    introTitle: '我们乐意与您讨论定制焊接与钢结构需求或解答任何疑问。欢迎联系下方的工坊团队。',
    form: {
      title: '咨询表单',
      subtitle: '填写下方表单即可与我们的客服团队联系，我们会在24小时内回复。',
      fields: {
        name: '您的姓名',
        email: '邮箱',
        phone: '电话号码',
        subject: '主题',
        message: '在此填写您的留言'
      },
      submit: '发送咨询'
    },
    findUs: {
      heading: '找到我们',
      workshopLabel: '贝卡西工坊：'
    },
    whatsapp: {
      greeting: '您好 Bengkel Las Mandiri，',
      nameLabel: '姓名',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      subjectLabel: '主题',
      messageLabel: '留言',
      closing: '谢谢！'
    }
  },
  ja: {
    meta: {
      title: 'ブカシ Mandiri Steel 溶接工房へのお問い合わせ：WhatsApp・所在地・営業時間 - Mandiri Steel',
      description:
        'Mandiri Steel への連絡方法: WhatsApp: +6285212078467、メール: info@lasbekasi.com、工房住所: Jl. Raya Setu Cibitung Bekasi。営業時間: 月曜日〜土曜日 08:00-17:00 WIB。WhatsApp でキャノピー、フェンス、鉄骨構造の無料相談が可能です。',
      keywords:
        'Mandiri Steel 問い合わせ, ブカシ 溶接 WhatsApp, 溶接工房 連絡先, Mandiri Steel 住所, 営業時間, 溶接 無料相談'
    },
    heroTitle: 'お問い合わせ',
    introTitle:
      'カスタム溶接や鉄骨構造に関するご相談やご質問があれば、お気軽に下記の工房チームまでご連絡ください。',
    form: {
      title: 'お問い合わせフォーム',
      subtitle:
        'フォームにご入力いただければ、カスタマーサービスチームが24時間以内の返信に努めます。',
      fields: {
        name: 'お名前',
        email: 'メールアドレス',
        phone: '電話番号',
        subject: '件名',
        message: 'ここにメッセージをご記入ください'
      },
      submit: '送信する'
    },
    findUs: {
      heading: 'アクセス',
      workshopLabel: 'ベカシ工房：'
    },
    whatsapp: {
      greeting: 'Bengkel Las Mandiri 様、',
      nameLabel: 'お名前',
      emailLabel: 'メール',
      phoneLabel: '電話',
      subjectLabel: '件名',
      messageLabel: 'メッセージ',
      closing: 'ありがとうございます！'
    }
  },
  es: {
    meta: {
      title: 'Contactar Taller de Soldadura en Bekasi: WhatsApp, Ubicación y Horario - Mandiri Steel',
      description:
        '¿Cómo contactar a Bengkel Las Mandiri? WhatsApp: +6285212078467, correo: info@lasbekasi.com, dirección del taller: Jl. Raya Setu Cibitung Bekasi. Horario: lunes a sábado 08:00-17:00 WIB. Consulta gratuita sobre marquesinas, verjas y estructuras metálicas por WhatsApp.',
      keywords:
        'contactar Mandiri Steel, WhatsApp soldadura Bekasi, taller soldadura Bekasi, dirección Mandiri Steel, horario taller Bekasi, consulta soldadura gratis'
    },
    heroTitle: 'Contáctenos',
    introTitle:
      'Estamos encantados de conversar sobre tus necesidades de soldadura a medida o responder cualquier pregunta. Ponte en contacto con nuestro equipo de taller a continuación.',
    form: {
      title: 'Formulario de consulta',
      subtitle:
        'Contacta con nuestro equipo de atención al cliente completando el formulario. Intentaremos responder en un plazo de 24 horas.',
      fields: {
        name: 'Tu nombre',
        email: 'Correo electrónico',
        phone: 'Número de teléfono',
        subject: 'Asunto',
        message: 'Escribe tu mensaje aquí'
      },
      submit: 'ENVIAR CONSULTA'
    },
    findUs: {
      heading: 'Encuéntranos',
      workshopLabel: 'Taller de Bekasi:'
    },
    whatsapp: {
      greeting: 'Hola Bengkel Las Mandiri,',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      closing: '¡Gracias!'
    }
  },
  fr: {
    meta: {
      title: 'Contact Atelier de Soudure à Bekasi : WhatsApp, Adresse, Horaires - Mandiri Steel',
      description:
        "Comment contacter Bengkel Las Mandiri ? WhatsApp : +6285212078467, email : info@lasbekasi.com, adresse de l'atelier : Jl. Raya Setu Cibitung Bekasi. Horaires : lundi-samedi 08h00-17h00 WIB. Consultation gratuite sur les travaux de soudure, portails et verrières via WhatsApp.",
      keywords:
        'contacter Mandiri Steel, WhatsApp soudure Bekasi, atelier soudure Bekasi, adresse Mandiri Steel, horaires atelier Bekasi, consultation soudure gratuite'
    },
    heroTitle: 'Contactez-nous',
    introTitle:
      'Nous sommes ravis de discuter de vos besoins en soudure sur mesure ou de répondre à vos questions. Contactez notre équipe d’atelier ci-dessous.',
    form: {
      title: 'Formulaire de demande',
      subtitle:
        'Contactez notre équipe Service Client en remplissant le formulaire. Nous nous efforcerons de répondre sous 24 heures.',
      fields: {
        name: 'Votre nom',
        email: 'Email',
        phone: 'Numéro de téléphone',
        subject: 'Objet',
        message: 'Écrivez votre message ici'
      },
      submit: 'ENVOYER LA DEMANDE'
    },
    findUs: {
      heading: 'Nous trouver',
      workshopLabel: 'Atelier de Bekasi :'
    },
    whatsapp: {
      greeting: 'Bonjour Bengkel Las Mandiri,',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      subjectLabel: 'Objet',
      messageLabel: 'Message',
      closing: 'Merci !'
    }
  },
  ko: {
    meta: {
      title: '베카시 용접 공방 문의: WhatsApp, 위치, 운영 시간 - Mandiri Steel',
      description:
        'Bengkel Las Mandiri에 연락하는 방법은? WhatsApp: +6285212078467, 이메일: info@lasbekasi.com, 공방 주소: Jl. Raya Setu Cibitung Bekasi. 운영 시간: 월~토 08:00-17:00 WIB. WhatsApp으로 캐노피, 대문, H빔 강구조물 등 무료 상담.',
      keywords:
        'Mandiri Steel 문의, 베카시 용접 WhatsApp, 용접 공방 연락처, Mandiri Steel 주소, 운영 시간, 무료 용접 상담'
    },
    heroTitle: '문의하기',
    introTitle: '맞춤 용접이나 철골 구조물이 필요하시거나 궁금한 점이 있다면 아래 작업실 팀에 연락해주세요.',
    form: {
      title: '문의 양식',
      subtitle:
        '양식을 작성해 주시면 고객지원팀이 24시간 이내에 답변드릴 수 있도록 하겠습니다.',
      fields: {
        name: '성함',
        email: '이메일',
        phone: '전화번호',
        subject: '주제',
        message: '메시지를 입력해주세요'
      },
      submit: '문의 보내기'
    },
    findUs: {
      heading: '찾아오시는 길',
      workshopLabel: '베카시 공방:'
    },
    whatsapp: {
      greeting: '안녕하세요 Bengkel Las Mandiri,',
      nameLabel: '이름',
      emailLabel: '이메일',
      phoneLabel: '전화번호',
      subjectLabel: '주제',
      messageLabel: '메시지',
      closing: '감사합니다!'
    }
  }
}

const Contact: React.FC = () => {
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

  // IP detection for first visit (only if no stored preference)
  useEffect(() => {
    const stored = getStoredLanguage()
    const urlLang = getCurrentLanguage(location.pathname, location.search)

    if (stored || urlLang !== 'en') {
      return
    }

    const detectIP = async () => {
      const ipLang = await detectLanguageFromIP()
      if (ipLang && !stored) {
        setLanguage(ipLang)
      }
    }

    detectIP()
  }, [])

  const isIndonesian = language === 'id'
  const t = CONTACT_TRANSLATIONS[language] ?? CONTACT_TRANSLATIONS.en

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    trackWhatsAppClick('contact_form_submit', {
      name: formData.name,
      subject: formData.subject
    })

    const messageLines = [
      t.whatsapp.greeting,
      '',
      `${t.whatsapp.nameLabel}: ${formData.name}`,
      `${t.whatsapp.emailLabel}: ${formData.email}`,
      `${t.whatsapp.phoneLabel}: ${formData.phone}`,
      `${t.whatsapp.subjectLabel}: ${formData.subject}`,
      '',
      `${t.whatsapp.messageLabel}:`,
      formData.message,
      '',
      t.whatsapp.closing
    ]

    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(messageLines.join('\n'))}`
    window.open(whatsappUrl, '_blank')

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'id' ? "Beranda" : "Home",
        "item": "https://lasbekasi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'id' ? "Hubungi Kami" : "Contact Us",
        "item": "https://lasbekasi.com/contact"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t.meta.title,
    "description": t.meta.description,
    "url": "https://lasbekasi.com/contact",
    "mainEntity": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "GeneralContractor"],
      "name": "Bengkel Las Mandiri",
      "telephone": "+6285212078467",
      "email": "info@lasbekasi.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
        "addressLocality": "Cikarang Barat",
        "addressRegion": "Jawa Barat",
        "postalCode": "17320",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.2088,
        "longitude": 107.1602
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    }
  };

  return (
    <div className="contact-page">
      <Helmet
        htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': language }}
      >
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <meta name="keywords" content={t.meta.keywords} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link
            key={`contact-hreflang-${alternate.hrefLang}`}
            rel="alternate"
            hrefLang={alternate.hrefLang}
            href={alternate.href}
          />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
      </Helmet>

      <NaturraHeader isIndonesian={isIndonesian} language={language} />

      <section className="contact-hero">
        <div className="contact-hero-image">
          <img
            src={heroImage}
            alt="Contact Bengkel Las Mandiri - Hubungi Hub Jasa Las Steel fabrication Bekasi - WhatsApp +6285212078467"
            title="Contact Bengkel Las Mandiri - Get in Touch with Welding Services Team"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="contact-hero"
            data-category="contact"
          />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">{t.heroTitle}</h1>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="contact-main-title">{t.introTitle}</h2>
          </div>

          <div className="enquiry-form-wrapper">
            <h3 className="enquiry-form-title">{t.form.title}</h3>
            <p className="enquiry-form-subtitle">{t.form.subtitle}</p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">{t.form.fields.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">{t.form.fields.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">{t.form.fields.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">{t.form.fields.subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field-full">
                <label htmlFor="message">{t.form.fields.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="send-enquiry-btn">
                  {t.form.submit}
                </button>
              </div>
            </form>
          </div>

          <div style={{ textAlign: 'center', margin: '40px auto 32px' }}>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem', color: '#2c2c2c' }}>
              {t.findUs.heading}
            </div>
            <div style={{ fontWeight: 600, marginBottom: 8, color: '#8B7355' }}>
              {t.findUs.workshopLabel}
            </div>
            <div style={{ marginBottom: 8, lineHeight: '1.6' }}>
              <a
                href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2c2c2c', textDecoration: 'underline' }}
              >
                Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat
                17320
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/6285212078467"
                style={{ color: '#8B7355', textDecoration: 'underline', fontWeight: '500' }}
                onClick={() => trackWhatsAppClick('contact_page_workshop_address')}
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 852-1207-8467
              </a>
            </div>
          </div>

          <div style={{ margin: '0 auto 40px', maxWidth: 900 }}>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: 8
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4698705313735!2d107.04449967316903!3d-6.3331217619628015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699155096769b1%3A0x32e8009b574bfb5e!2sNaturra%20Living%20(Workshop)!5e0!3m2!1sen!2sid!4v1761932272164!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bengkel Las Mandiri Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default Contact
