import React from 'react'
import { type LanguageCode } from '../utils/languageManager'
import './ServiceAreasSection.css'

interface ServiceAreasSectionProps {
  language?: LanguageCode
  isIndonesian?: boolean
}

const SERVICE_AREAS_TRANSLATIONS: Record<LanguageCode, {
  title: string
  subtitle: string
  bekasiKota: string
  cikarang: string
  komersial: string
  jakarta: string
  areaNotListed: string
  areaNotListedDesc: string
  freeConsultation: string
  seoText: string
  commercialDescs: Record<string, string>
}> = {
  id: {
    title: "Wilayah Layanan & Survei Gratis",
    subtitle: "Pusat workshop di Setu, Bekasi, melayani pengiriman dan pemasangan kanopi & pagar ke seluruh Jabodetabek",
    bekasiKota: "BEKASI KOTA & KABUPATEN",
    cikarang: "CIKARANG, CIBITUNG & TAMBUN",
    komersial: "PERUMAHAN & KAWASAN HUNIAN ELIT",
    jakarta: "DKI JAKARTA & SEKITARNYA",
    areaNotListed: "Ingin Survei Lokasi Gratis?",
    areaNotListedDesc: "Hubungi kami untuk mengatur jadwal survei pengukuran kanopi, pagar, atau teralis secara gratis langsung ke rumah Anda.",
    freeConsultation: "Jadwalkan Survei Gratis",
    seoText: "Mandiri Steel mengoperasikan bengkel las & fabrikasi besi baja berkualitas di Setu, Bekasi. Kami melayani pembuatan kanopi Alderon, pagar minimalis kustom, teralis jendela, railing tangga, dan konstruksi baja ringan/WF untuk kebutuhan perumahan dan komersial. Lokasi strategis kami memudahkan mobilitas armada pengiriman kami ke wilayah perumahan elit di Summarecon Bekasi, Grand Galaxy City, Harapan Indah, Kemang Pratama, hingga kawasan hunian industri Lippo Cikarang, Jababeka, Deltamas, dan seluruh Jabodetabek.",
    commercialDescs: {
      "Summarecon Bekasi": "Survei Pemasangan Kanopi",
      "Harapan Indah": "Pagar & Teralis Minimalis",
      "Grand Galaxy City": "Konstruksi Pagar Laser Cutting",
      "Galaxy Bekasi": "Railing Tangga & Balkon",
      "Kemang Pratama": "Gerbang Besi Tempa Premium",
      "Lippo Cikarang": "Kanopi Alderon & Baja WF",
      "Jababeka": "Konstruksi Besi Gudang",
      "Deltamas": "Railing & Pagar Minimalis",
      "EJIP Cikarang": "Pekerjaan Las Konstruksi",
      "Greenland International": "Pintu Besi & Pengaman",
      "MM2100": "Fabrikasi Besi Industri"
    }
  },
  en: {
    title: "Service Areas & Free On-site Surveys",
    subtitle: "Workshop center in Setu, Bekasi, serving delivery and installation of canopies & gates across Jabodetabek",
    bekasiKota: "BEKASI CITY & REGENCY",
    cikarang: "CIKARANG, CIBITUNG & TAMBUN",
    komersial: "RESIDENTIAL & COMMERCIAL HUBS",
    jakarta: "JAKARTA & SURROUNDINGS",
    areaNotListed: "Need a Free On-site Survey?",
    areaNotListedDesc: "Contact us to schedule a free measurement and design consultation for your canopy, gate, or railing directly at your home.",
    freeConsultation: "Schedule Free Survey",
    seoText: "Mandiri Steel operates a high-quality welding workshop and steel fabrication facility in Setu, Bekasi. We specialize in custom Alderon canopies, minimalist gates, window trellises, stair railings, and structural steel/WF installations for residential and commercial properties. Our strategic location enables quick dispatch of our delivery and survey teams to premium residential estates including Summarecon Bekasi, Grand Galaxy City, Harapan Indah, Kemang Pratama, and industrial residential hubs in Lippo Cikarang, Jababeka, Deltamas, and all Jabodetabek areas.",
    commercialDescs: {
      "Summarecon Bekasi": "Canopy Installation Survey",
      "Harapan Indah": "Minimalist Gate & Trellis",
      "Grand Galaxy City": "Laser Cut Gate Construction",
      "Galaxy Bekasi": "Stair & Balcony Railings",
      "Kemang Pratama": "Premium Wrought Iron Gate",
      "Lippo Cikarang": "Alderon & WF Structural Canopy",
      "Jababeka": "Warehouse Steel Construction",
      "Deltamas": "Railing & Minimalist Gate",
      "EJIP Cikarang": "Industrial Welding Fabrication",
      "Greenland International": "Metal Security Doors",
      "MM2100": "Industrial Steel Fabrication"
    }
  },
  ar: {
    title: "مناطق الخدمة والمعاينة المجانية",
    subtitle: "مركز الورشة في سيتو، بيكاسي، يخدم توصيل وتركيب المظلات والبوابات في جميع أنحاء جابوديتابك",
    bekasiKota: "بلدية بيكاسي وضواحيها",
    cikarang: "سيكارانغ، سيبيدونغ وتامبون",
    komersial: "المناطق السكنية والتجارية الراقية",
    jakarta: "جاكرتا وما حولها",
    areaNotListed: "هل تريد معاينة مجانية لموقعك؟",
    areaNotListedDesc: "اتصل بنا لترتيب موعد مجاني لقياس وتصميم المظلات أو البوابات أو الحماية الحديدية مباشرة في منزلك.",
    freeConsultation: "تحديد موعد معاينة مجانية",
    seoText: "تدير مانديري ستيل ورشة لحام وتصنيع حديد عالية الجودة في سيتو، بيكاسي. نحن متخصصون في مظلات ألديرون، البوابات البسيطة المخصصة، درابزين السلالم، وحماية النوافذ الحديدية للمنازل والمباني التجارية. يتيح موقعنا الاستراتيجي إرسالاً سريعاً لفرق التوصيل والمعاينة إلى الأحياء السكنية المتميزة مثل سوماريكون بيكاسي، غراند غالاكسي سيتي، هارابان إنداه، كيمانغ براتاما، والمناطق السكنية الصناعية في ليبو سيكارانغ، جابابيكا، ديلتاماتس، وجميع مناطق جابوديتابك.",
    commercialDescs: {
      "Summarecon Bekasi": "معاينة تركيب المظلات",
      "Harapan Indah": "بوابة حديدية وحماية مبسطة",
      "Grand Galaxy City": "بوابة حديد قص ليزر",
      "Galaxy Bekasi": "درابزين سلالم وبلكونات",
      "Kemang Pratama": "بوابة حديد مشغول فاخرة",
      "Lippo Cikarang": "مظلات حديد ألديرون وهياكل WF",
      "Jababeka": "هياكل حديدية للمستودعات",
      "Deltamas": "درابزين وبوابات مبسطة",
      "EJIP Cikarang": "أعمال لحام صناعية",
      "Greenland International": "أبواب حماية حديدية",
      "MM2100": "تصنيع الحديد الصناعي"
    }
  },
  zh: {
    title: "服务区域与免费现场测绘",
    subtitle: "位于勿加泗 Setu 的铁艺工坊，为大雅加达（Jabodetabek）全境提供雨棚与大门配送安装服务",
    bekasiKota: "勿加泗市及县区",
    cikarang: "芝卡朗、芝比东及 Tambun",
    komersial: "高档住宅与商业社区",
    jakarta: "雅加达特区及周边",
    areaNotListed: "需要免费现场测绘？",
    areaNotListedDesc: "联系我们的团队，免费为您安排家中的雨棚、铁门或窗户防盗网的测绘和定制方案咨询。",
    freeConsultation: "预约免费上门测绘",
    seoText: "Mandiri Steel 在勿加泗 Setu 经营着一家高标准的铁艺与钢结构焊接加工厂。我们专业定制安装 Alderon 双层雨棚、简约大门、防盗窗网、楼梯扶手以及各种住宅和商业钢结构工程（WF钢架）。优越的地理位置使我们的送货和测绘团队能够迅速到达 Summarecon Bekasi、Grand Galaxy City、Harapan Indah、Kemang Pratama 等高档住宅区，以及 Lippo Cikarang、Jababeka、Deltamas 等大雅加达核心区域。",
    commercialDescs: {
      "Summarecon Bekasi": "雨棚安装测绘",
      "Harapan Indah": "简约铁门与防盗网",
      "Grand Galaxy City": "激光切割大门制作",
      "Galaxy Bekasi": "楼梯及阳台护栏",
      "Kemang Pratama": "高端欧式锻铁大门",
      "Lippo Cikarang": "Alderon & WF 钢架雨棚",
      "Jababeka": "厂房钢结构工程",
      "Deltamas": "简约楼梯扶手与铁门",
      "EJIP Cikarang": "工业级钢结构焊接",
      "Greenland International": "防盗铁门及防护栏",
      "MM2100": "工业铁艺定制加工"
    }
  },
  ja: {
    title: "サービス対応エリア・無料現地調査",
    subtitle: "ベカシ県Setuの自社工房から、ジャボデタベック全域へキャノピーや門扉の配送・設置を行います",
    bekasiKota: "ベカシ市・県",
    cikarang: "チカラン・チビトゥン・タンブン",
    komersial: "高級住宅街・商業エリア",
    jakarta: "ジャカルタ首都圏",
    areaNotListed: "無料の現地調査・採寸をご希望ですか？",
    areaNotListedDesc: "ご自宅でのキャノピー、ゲート、手すりなどの採寸とデザイン相談を無料で行います。お気軽にお問い合わせください。",
    freeConsultation: "無料現地調査を申し込む",
    seoText: "Mandiri Steelは、ベカシ県Setuにて高品質な溶接・鉄骨製造工場を運営しています。住宅や商業施設向けに、アルデロン製キャノピー、ミニマリスト門扉、窓格子、階段手すり、鉄骨構造物（WF骨組み）などの製造・施工を行っています。Summarecon Bekasi、Grand Galaxy City、Harapan Indah、Kemang Pratamaなどの高級住宅街をはじめ、Lippo Cikarang、Jababeka、Deltamasなどの工業都市、ジャボデタベック全域に迅速に対応いたします。",
    commercialDescs: {
      "Summarecon Bekasi": "キャノピー取り付け無料見積もり",
      "Harapan Indah": "門扉・格子窓の製造・施工",
      "Grand Galaxy City": "レーザーカット鉄門の製造",
      "Galaxy Bekasi": "階段・バルコニー手すり",
      "Kemang Pratama": "ロートアイアン調高級門扉",
      "Lippo Cikarang": "アルデロン・WF鉄骨キャノピー",
      "Jababeka": "倉庫内鉄骨構造物工事",
      "Deltamas": "手すり・ミニマリスト門扉",
      "EJIP Cikarang": "工場用鉄骨の溶接組み立て",
      "Greenland International": "防犯用鉄製ドア・格子",
      "MM2100": "産業用鉄骨部材の加工・製造"
    }
  },
  es: {
    title: "Áreas de Servicio y Presupuesto Gratis",
    subtitle: "Taller central en Setu, Bekasi, realizando entregas e instalación de doseles y portones en todo Jabodetabek",
    bekasiKota: "BEKASI CIUDAD & MUNICIPIO",
    cikarang: "CIKARANG, CIBITUNG & TAMBUN",
    komersial: "FRACCIONAMIENTOS & ZONAS RESIDENCIALES",
    jakarta: "YAKARTA & ALREDEDORES",
    areaNotListed: "¿Desea un Presupuesto y Medición Gratis?",
    areaNotListedDesc: "Contáctenos para coordinar una visita de medición y diseño sin costo para su portón, dosel o herrería directamente en su hogar.",
    freeConsultation: "Agendar Medición Gratis",
    seoText: "Mandiri Steel opera un taller de soldadura y herrería de alta calidad en Setu, Bekasi. Especialistas en doseles de Alderon, portones minimalistas, protectores de ventanas, barandales y estructuras metálicas residenciales y comerciales. Nuestra ubicación estratégica facilita el despacho rápido de nuestros vehículos a zonas residenciales premium como Summarecon Bekasi, Grand Galaxy City, Harapan Indah, Kemang Pratama, así como a desarrollos en Lippo Cikarang, Jababeka, Deltamas y todo Jabodetabek.",
    commercialDescs: {
      "Summarecon Bekasi": "Medición de Instalación de Dosel",
      "Harapan Indah": "Portón Minimalista & Protector",
      "Grand Galaxy City": "Portón con Corte Láser a Medida",
      "Galaxy Bekasi": "Barandal de Escalera & Balcón",
      "Kemang Pratama": "Portón de Hierro Forjado Premium",
      "Lippo Cikarang": "Dosel de Alderon & Estructura WF",
      "Jababeka": "Estructura de Acero para Bodegas",
      "Deltamas": "Barandal & Portón Minimalista",
      "EJIP Cikarang": "Soldadura de Estructura Industrial",
      "Greenland International": "Puerta Metálica de Seguridad",
      "MM2100": "Herrería y Estructura Industrial"
    }
  },
  fr: {
    title: "Zones d'Intervention & Devis Gratuits",
    subtitle: "Atelier situé à Setu, Bekasi, assurant la livraison et la pose d'auvents et de portails dans tout Jabodetabek",
    bekasiKota: "BEKASI VILLE & RÉGENCE",
    cikarang: "CIKARANG, CIBITUNG & TAMBUN",
    komersial: "RÉSIDENCES & QUARTIERS VIP",
    jakarta: "JAKARTA & PROVINCES VOISINES",
    areaNotListed: "Demander une Prise de Cotes Gratuite ?",
    areaNotListedDesc: "Contactez-nous pour planifier une visite gratuite de prise de cotes et de conseil pour vos projets de portails, d'auvents ou de garde-corps.",
    freeConsultation: "Planifier une Visite Gratuite",
    seoText: "Mandiri Steel exploite un atelier de métallurgie et de chaudronnerie haut de gamme à Setu, Bekasi. Nous réalisons des auvents Alderon, des portails sur mesure, des grilles de protection, des garde-corps et des charpentes métalliques (bâtiments WF) pour le secteur résidentiel et commercial. Notre positionnement stratégique nous permet d'intervenir rapidement dans les grands ensembles résidentiels tels que Summarecon Bekasi, Grand Galaxy City, Harapan Indah, Kemang Pratama, et les zones urbaines de Lippo Cikarang, Jababeka, Deltamas et tout le Grand Jakarta.",
    commercialDescs: {
      "Summarecon Bekasi": "Métrage pour Pose d'Auvent",
      "Harapan Indah": "Portail Minimaliste & Grille",
      "Grand Galaxy City": "Portail en Découpe Laser",
      "Galaxy Bekasi": "Garde-corps & Rambarde d'Escalier",
      "Kemang Pratama": "Portail en Fer Forgé d'Art",
      "Lippo Cikarang": "Auvent Alderon & Structure WF",
      "Jababeka": "Charpente Métallique d'Entrepôt",
      "Deltamas": "Rambarde & Portail Design",
      "EJIP Cikarang": "Soudure et Assemblage Industriel",
      "Greenland International": "Porte Blindée de Sécurité",
      "MM2100": "Chaudronnerie et Pièces Métalliques"
    }
  },
  ko: {
    title: "서비스 지역 및 무료 실측 안내",
    subtitle: "베카시 Setu 공방을 중심으로 자보데타벡 전역에 캐노피 및 대문 배송과 설치 지원",
    bekasiKota: "베카시 시 및 리전",
    cikarang: "치카랑, 치비퉁 및 탐분",
    komersial: "고급 주택 단지 및 주거 타운",
    jakarta: "자카르타 및 인근 전역",
    areaNotListed: "무료 방문 실측을 원하시나요?",
    areaNotListedDesc: "댁내 캐노피, 대문, 방범창 또는 난간 설치를 위한 정밀 실측과 디자인 맞춤형 제안을 무료로 받아보세요.",
    freeConsultation: "무료 실측 일정 예약",
    seoText: "Mandiri Steel은 베카시 Setu에서 최고의 철골 제작 및 용접 공방을 운영하고 있습니다. 주택용 알데론 캐노피, 맞춤형 미니멀리스트 대문, 창문 방범창, 계단 난간 및 상업용 철골/WF 구조물 공사를 전문으로 합니다. 최상의 지리적 거점을 통해 Summarecon Bekasi, Grand Galaxy City, Harapan Indah, Kemang Pratama 등 고급 빌라촌과 Lippo Cikarang, Jababeka, Deltamas 등 자보데타벡 전역으로 빠르게 실측 및 시공팀이 출동합니다.",
    commercialDescs: {
      "Summarecon Bekasi": "캐노피 설치 실측 견적",
      "Harapan Indah": "미니멀리스트 대문 및 방범창",
      "Grand Galaxy City": "레이저 컷 대문 정밀 시공",
      "Galaxy Bekasi": "계단 및 발코니 난간 제작",
      "Kemang Pratama": "최고급 유럽풍 단조 대문",
      "Lippo Cikarang": "알데론 및 WF 철골 캐노피",
      "Jababeka": "창고용 대형 철골 구조물",
      "Deltamas": "난간 및 심플한 대문 시공",
      "EJIP Cikarang": "산업용 대형 철골 용접 공사",
      "Greenland International": "방범용 철제 도어 및 펜스",
      "MM2100": "산업용 철강 자재 맞춤 가공"
    }
  }
}

const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ language, isIndonesian }) => {
  const lang: LanguageCode = language ?? (isIndonesian ? 'id' : 'en')
  const t = SERVICE_AREAS_TRANSLATIONS[lang] ?? SERVICE_AREAS_TRANSLATIONS.en

  const serviceAreas = {
    bekasiKota: {
      title: t.bekasiKota,
      areas: [
        { name: "Bekasi Barat", kelurahan: "Layanan Survei & Pemasangan" },
        { name: "Bekasi Timur", kelurahan: "Survei & Pemasangan Pagar" },
        { name: "Bekasi Selatan", kelurahan: "Layanan Jasa Las Panggilan" },
        { name: "Bekasi Utara", kelurahan: "Pasang Kanopi Rumah" },
        { name: "Rawalumbu", kelurahan: "Pengukuran & Survei Lapangan" },
        { name: "Pondok Gede", kelurahan: "Layanan Cepat Tanggap" },
        { name: "Mustika Jaya", kelurahan: "Fabrikasi Besi & Pemasangan" }
      ]
    },
    cikarang: {
      title: t.cikarang,
      areas: [
        { name: "Cikarang Barat", kelurahan: "Konstruksi Kanopi WF" },
        { name: "Cikarang Utara", kelurahan: "Pagar Besi Minimalis" },
        { name: "Cikarang Selatan", kelurahan: "Railing Tangga Putar" },
        { name: "Cikarang Timur", kelurahan: "Pemasangan Teralis Jendela" },
        { name: "Cikarang Pusat", kelurahan: "Pagar Laser Cutting" },
        { name: "Tambun Selatan", kelurahan: "Pintu Dorong Lipat" },
        { name: "Tambun Utara", kelurahan: "Kanopi Kaca & Solarflat" },
        { name: "Cibitung", kelurahan: "Railing Tangga Besi" },
        { name: "Setu", kelurahan: "Pusat Bengkel Las Mandiri Steel" }
      ]
    },
    komersial: {
      title: t.komersial,
      areas: [
        { name: "Summarecon Bekasi", icon: "RO", desc: "Regional Office" },
        { name: "Harapan Indah", icon: "CC", desc: "Commercial Central" },
        { name: "Grand Galaxy City", icon: "BD", desc: "Business District" },
        { name: "Galaxy Bekasi", icon: "CO", desc: "Corporate Office" },
        { name: "Kemang Pratama", icon: "PA", desc: "Premium Area" },
        { name: "Lippo Cikarang", icon: "XH", desc: "Export Hub" },
        { name: "Jababeka", icon: "IE", desc: "Industrial Estate" },
        { name: "Deltamas", icon: "IP", desc: "Industrial Port" },
        { name: "EJIP Cikarang", icon: "EP", desc: "Export Park" },
        { name: "Greenland International", icon: "LC", desc: "Logistic Center" },
        { name: "MM2100", icon: "SH", desc: "Sourcing Hub" }
      ]
    },
    jakarta: {
      title: t.jakarta,
      areas: [
        { name: "Jakarta Timur", kelurahan: "Pengiriman & Pemasangan Pagar" },
        { name: "Jakarta Utara", kelurahan: "Kanopi Anti Karat Ekstrim" },
        { name: "Jakarta Pusat", kelurahan: "Pekerjaan Teralis Kantor & Toko" },
        { name: "Jakarta Selatan", kelurahan: "Pagar Besi Minimalis Mewah" },
        { name: "Jakarta Barat", kelurahan: "Railing Tangga Stainless Steel" },
        { name: "Depok", kelurahan: "Pemasangan Kanopi Rumah" },
        { name: "Bogor", kelurahan: "Konstruksi Pagar & Railing" }
      ]
    }
  }

  return (
    <section className="service-areas-section">
      <div className="service-areas-container">
        <div className="service-areas-header">
          <h2 className="section-title">
            {t.title}
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">🏡</span>
            {t.bekasiKota}
          </h3>
          <div className="areas-grid">
            {serviceAreas.bekasiKota.areas.map((area, index) => (
              <div key={index} className="area-card">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">🏗️</span>
            {t.cikarang}
          </h3>
          <div className="areas-grid">
            {serviceAreas.cikarang.areas.map((area, index) => (
              <div key={index} className="area-card">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-area-group commercial">
          <h3 className="area-group-title">
            <span className="area-icon">🏢</span>
            {t.komersial}
          </h3>
          <div className="commercial-grid">
            {serviceAreas.komersial.areas.map((area, index) => (
              <div key={index} className="commercial-card">
                <span className="commercial-icon">{area.icon}</span>
                <h4 className="commercial-name">{area.name}</h4>
                <p className="commercial-desc">{t.commercialDescs[area.name] ?? area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">🚚</span>
            {t.jakarta}
          </h3>
          <div className="areas-grid">
            {serviceAreas.jakarta.areas.map((area, index) => (
              <div key={index} className="area-card jakarta">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-areas-cta">
          <div className="cta-content">
            <h3>{t.areaNotListed}</h3>
            <p>{t.areaNotListedDesc}</p>
            <a
              href="https://wa.me/6289513957752?text=Halo%20Mandiri%20Steel%2C%20saya%20ingin%20konsultasi%20pengerjaan%20las%20besi"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="whatsapp-icon">WA</span>
              {t.freeConsultation}
            </a>
          </div>
        </div>

        <div className="service-areas-seo-text">
          <p>{t.seoText}</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreasSection
