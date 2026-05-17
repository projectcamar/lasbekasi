import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import NaturraHeader from '../components/NaturraHeader'
import NaturraFooter from '../components/NaturraFooter'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, getStoredLanguage, detectLanguageFromIP, type LanguageCode } from '../utils/languageManager'
import './NaturraPartnership.css'

const OG_LOCALES = ['id_ID', 'en_US', 'ar_SA', 'zh_CN', 'ja_JP', 'es_ES', 'fr_FR', 'ko_KR'] as const

interface PartnershipContent {
  pageTitle: string
  metaDescription: string
  metaKeywords: string
  heroTitle: string
  mainTitle: string
  mainParagraphs: string[]
  experienceTitle: string
  experienceParagraphs: string[]
  collaborationTitle: string
  collaborationSubtitle: string
  collaborationParagraphs: string[]
  flexibilityTitle: string
  flexibilityParagraphs: string[]
  scaleTitle: string
  scaleDescription: string
  scaleQuestion: string
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}

const TRANSLATIONS: Record<LanguageCode, PartnershipContent> = {
  en: {
    pageTitle: "B2B Partnership - Bengkel Las Mandiri Bekasi",
    metaDescription: "Partner with Bengkel Las Mandiri for your construction and interior projects. Reliable welding services for developers and contractors in Bekasi.",
    metaKeywords: "welding partnership bekasi, b2b welding services, construction partner bekasi, interior design iron work",
    heroTitle: "B2B Construction Partnership",
    mainTitle: "Your Reliable Welding Sub-Contractor",
    mainParagraphs: [
      "Whether you are a property developer, building contractor, or interior designer, you need a trusted welding partner. Bengkel Las Mandiri ensures your project's iron and steel works are delivered with high precision and quality.",
      "We understand that commercial projects involve strict timelines, specific design compliance, and durable material standards. We accommodate these B2B needs seamlessly."
    ],
    experienceTitle: "Professional Expertise",
    experienceParagraphs: [
      "Our team has over 25 years of experience in the Bekasi welding industry. We handle structural calculations, material selection, and site safety standards for professional projects.",
      "From housing complexes to factory renovations, we maintain complete transparency and professionalism throughout the collaboration."
    ],
    collaborationTitle: "Direct from the Workshop",
    collaborationSubtitle: "Welding Service Partner",
    collaborationParagraphs: [
      "By partnering with us, you work directly with a workshop that has a proven track record in Bekasi. No middleman, just direct professional service.",
      "Our team is ready to discuss your project volume, technical drawings, and specialized finishing requirements.",
      "You'll receive competitive B2B pricing, genuine material specifications, and consistent craftsmanship on every unit."
    ],
    flexibilityTitle: "Scalable Contracts",
    flexibilityParagraphs: [
      "We offer flexible collaboration models, from individual house units to large-scale housing projects and industrial warehouse structures.",
      "Choose the material grades and finishing methods that best fit your project budget and quality targets."
    ],
    scaleTitle: "Commitment to Your Project Scale",
    scaleDescription: "As your project volume grows, our workforce and fabrication capabilities will rise to meet your production deadline.",
    scaleQuestion: "Ready to secure your construction supply chain?",
    ctaTitle: "Discuss Your Next Project",
    ctaDescription: "Tell us about your project requirements. Send us your technical drawings to start a professional partnership.",
    ctaButton: "Contact Our B2B Team"
  },
  id: {
    pageTitle: "Kemitraan B2B - Bengkel Las Mandiri Bekasi",
    metaDescription: "Bermitra dengan Bengkel Las Mandiri untuk proyek konstruksi dan interior Anda. Jasa las terpercaya untuk pengembang dan kontraktor di Bekasi.",
    metaKeywords: "kemitraan bengkel las bekasi, jasa las b2b, mitra konstruksi bekasi, vendor las perumahan",
    heroTitle: "Kemitraan Konstruksi B2B",
    mainTitle: "Sub-Kontraktor Las yang Handal",
    mainParagraphs: [
      "Baik Anda pengembang properti, kontraktor bangunan, atau desainer interior — Bengkel Las Mandiri hadir untuk memastikan pekerjaan besi dan baja proyek Anda berkualitas tinggi dan tepat waktu.",
      "Kami memahami kebutuhan proyek komersial: tenggat waktu ketat, kepatuhan desain, dan standar material yang tahan lama."
    ],
    experienceTitle: "Keahlian Profesional",
    experienceParagraphs: [
      "Tim kami memiliki pengalaman lebih dari 25 tahun di industri las Bekasi. Kami menangani perhitungan struktur, pemilihan material SNI, dan standar keamanan kerja.",
      "Dari proyek perumahan hingga renovasi pabrik, kami menjaga transparansi total dan profesionalisme dalam setiap kolaborasi."
    ],
    collaborationTitle: "Langsung dari Workshop",
    collaborationSubtitle: "Mitra Jasa Pengelasan",
    collaborationParagraphs: [
      "Bermitra dengan kami berarti Anda bekerja langsung dengan workshop yang memiliki rekam jejak teruji di Bekasi. Tanpa perantara, hanya layanan profesional langsung.",
      "Tim kami siap mendiskusikan volume proyek, gambar teknik (blueprints), dan kebutuhan finishing khusus Anda.",
      "Anda akan mendapatkan harga B2B yang kompetitif, spesifikasi material nyata, dan kualitas pengerjaan konsisten di setiap unit."
    ],
    flexibilityTitle: "Kontrak Skalabel",
    flexibilityParagraphs: [
      "Kami menawarkan model kolaborasi fleksibel, mulai dari pengerjaan unit rumah tunggal hingga proyek perumahan skala besar dan struktur gudang industri.",
      "Pilih grade material dan metode finishing yang paling sesuai dengan anggaran proyek dan target kualitas Anda."
    ],
    scaleTitle: "Berkomitmen untuk Skala Proyek Anda",
    scaleDescription: "Seiring bertumbuhnya kebutuhan volume proyek Anda, tenaga kerja dan kapasitas fabrikasi kami akan meningkat untuk memenuhi tenggat waktu produksi.",
    scaleQuestion: "Siap mengamankan rantai pasok konstruksi Anda?",
    ctaTitle: "Diskusikan Proyek Anda",
    ctaDescription: "Ceritakan kebutuhan proyek Anda. Kirimkan gambar teknik untuk memulai kemitraan profesional.",
    ctaButton: "Hubungi Tim B2B Kami"
  },
  ar: {
    pageTitle: "شراكة B2B - مانديري ستيل بيكاسي",
    metaDescription: "شارك مانديري ستيل في مشاريع البناء والتصميم الداخلي الخاصة بك. خدمات لحام موثوقة للمطورين والمقاولين في بيكاسي.",
    metaKeywords: "شراكة لحام بيكاسي، خدمات لحام B2B، شريك بناء بيكاسي، أعمال حديد التصميم الداخلي",
    heroTitle: "شراكة بناء B2B",
    mainTitle: "مقاول اللحام الباطن الموثوق به",
    mainParagraphs: [
      "سواء كنت مطورًا عقاريًا أو مقاول بناء أو مصمم ديكور - فإن مانديري ستيل تضمن تنفيذ أعمال الحديد والصلب في مشروعك بدقة وجودة عالية.",
      "نحن ندرك أن المشاريع التجارية تتطلب جداول زمنية صارمة، وامتثالاً لتصاميم محددة، ومعايير مواد متينة. نحن نلبي احتياجات B2B هذه بسلاسة."
    ],
    experienceTitle: "الخبرة المهنية",
    experienceParagraphs: [
      "يتمتع فريقنا بخبرة تزيد عن 25 عامًا في صناعة اللحام في بيكاسي. نحن نتعامل مع الحسابات الإنشائية واختيار المواد ومعايير السلامة في الموقع للمشاريع المهنية.",
      "من المجمعات السكنية إلى تجديدات المصانع، نحافظ على الشفافية والاحترافية الكاملة طوال فترة التعاون."
    ],
    collaborationTitle: "مباشرة من الورشة",
    collaborationSubtitle: "شريك خدمة اللحام",
    collaborationParagraphs: [
      "من خلال الشراكة معنا، أنت تعمل مباشرة مع ورشة عمل لديها سجل حافل في بيكاسي. لا وسيط، فقط خدمة مهنية مباشرة.",
      "فريقنا جاهز لمناقشة حجم مشروعك والرسومات الفنية ومتطلبات التشطيب المتخصصة.",
      "ستحصل على أسعار B2B تنافسية، ومواصفات مواد حقيقية، وحرفية متسقة في كل وحدة."
    ],
    flexibilityTitle: "عقود قابلة للتطوير",
    flexibilityParagraphs: [
      "نحن نقدم نماذج تعاون مرنة، من الوحدات السكنية الفردية إلى المشاريع السكنية واسعة النطاق وهياكل المستودعات الصناعية.",
      "اختر درجات المواد وطرق التشطيب التي تناسب ميزانية مشروعك وأهداف الجودة."
    ],
    scaleTitle: "الالتزام بحجم مشروعك",
    scaleDescription: "مع نمو حجم مشروعك، ستزداد قوتنا العاملة وقدراتنا التصنيعية لتلبية الموعد النهائي للإنتاج.",
    scaleQuestion: "هل أنت مستعد لتأمين سلسلة توريد البناء الخاصة بك؟",
    ctaTitle: "ناقش مشروعك القادم",
    ctaDescription: "أخبرنا عن متطلبات مشروعك. أرسل لنا رسوماتك الفنية لبدء شراكة مهنية.",
    ctaButton: "اتصل بفريق B2B الخاص بنا"
  },
  zh: {
    pageTitle: "B2B 合作伙伴 - 勿加泗 Mandiri Steel",
    metaDescription: "与 Mandiri Steel 合作开展您的建筑和室内设计项目。为勿加泗的开发商和承包商提供可靠的焊接服务。",
    metaKeywords: "勿加泗焊接合作伙伴, B2B 焊接服务, 勿加泗建筑合作伙伴, 室内设计铁艺",
    heroTitle: "B2B 建筑合作伙伴",
    mainTitle: "您值得信赖的焊接分包商",
    mainParagraphs: [
      "无论您是房地产开发商、建筑承包商还是室内设计师，您都需要一个值得信赖的焊接合作伙伴。Mandiri Steel 确保您的项目的钢铁工程以高精度和高质量交付。",
      "我们了解商业项目涉及严格的时间表、特定的设计合规性和耐用的材料标准。我们无缝地满足这些 B2B 需求。"
    ],
    experienceTitle: "专业经验",
    experienceParagraphs: [
      "我们的团队在勿加泗焊接行业拥有超过 25 年的经验。我们处理专业项目的结构计算、材料选择和现场安全标准。",
      "从住宅小区到工厂翻新，我们在整个合作过程中保持完全的透明度和专业精神。"
    ],
    collaborationTitle: "工厂直供",
    collaborationSubtitle: "焊接服务合作伙伴",
    collaborationParagraphs: [
      "通过与我们合作，您直接与在勿加泗拥有良好记录的工厂合作。没有中间商，只有直接的专业服务。",
      "我们的团队已准备好讨论您的项目规模、技术图纸和特殊的饰面要求。",
      "您将在每个单元上获得具有竞争力的 B2B 定价、真实的材料规格和一致的工艺。"
    ],
    flexibilityTitle: "可扩展的合同",
    flexibilityParagraphs: [
      "我们提供灵活的合作模式，从单个住宅单元到大型住宅项目和工业仓库结构。",
      "选择最适合您的项目预算和质量目标的材料等级和饰面方法。"
    ],
    scaleTitle: "致力于您的项目规模",
    scaleDescription: "随着项目规模的增长，我们的劳动力和制造能力将不断提升，以满足您的生产期限。",
    scaleQuestion: "准备好确保您的建筑供应链了吗？",
    ctaTitle: "讨论您的下一个项目",
    ctaDescription: "告诉我们您的项目需求。向我们发送您的技术图纸以开始专业的合作伙伴关系。",
    ctaButton: "联系我们的 B2B 团队"
  },
  ja: {
    pageTitle: "B2B パートナーシップ - ブカシ Mandiri Steel",
    metaDescription: "建築およびインテリアプロジェクトで Mandiri Steel と提携。ブカシのデベロッパーや請負業者向けの信頼できる溶接サービス。",
    metaKeywords: "ブカシ 溶接パートナーシップ, B2B 溶接サービス, ブカシ 建設パートナー, インテリアデザイン 鉄工",
    heroTitle: "B2B 建設パートナーシップ",
    mainTitle: "信頼できる溶接サブコンストラクター",
    mainParagraphs: [
      "不動産デベロッパー、建築請負業者、インテリアデザイナーを問わず、信頼できる溶接パートナーが必要です。Mandiri Steel は、お客様のプロジェクトの鉄鋼工事が高精度かつ高品質で納品されることを保証します。",
      "商業プロジェクトには厳格なタイムライン、特定の設計コンプライアンス、耐久性のある材料基準が伴うことを理解しています。これらの B2B ニーズにシームレスに対応します。"
    ],
    experienceTitle: "プロフェッショナルな専門知識",
    experienceParagraphs: [
      "当社のチームは、ブカシの溶接業界で 25 年以上の経験があります。プロのプロジェクト向けに、構造計算、材料選定、現場の安全基準を扱います。",
      "住宅団地から工場の改修まで、コラボレーション全体を通じて完全な透明性とプロフェッショナリズムを維持します。"
    ],
    collaborationTitle: "ワークショップから直接",
    collaborationSubtitle: "溶接サービスパートナー",
    collaborationParagraphs: [
      "当社と提携することで、ブカシで実績のあるワークショップと直接連携できます。仲介業者は存在せず、直接的なプロフェッショナルサービスのみを提供します。",
      "当社のチームは、プロジェクトのボリューム、技術図面、特別な仕上げの要件について話し合う準備ができています。",
      "すべてのユニットで、競争力のある B2B 価格、本物の材料仕様、一貫した職人技を提供します。"
    ],
    flexibilityTitle: "スケーラブルな契約",
    flexibilityParagraphs: [
      "個別の住宅ユニットから大規模な住宅プロジェクト、産業用倉庫構造まで、柔軟なコラボレーションモデルを提供します。",
      "プロジェクトの予算と品質目標に最も適した材料グレードと仕上げ方法を選択してください。"
    ],
    scaleTitle: "プロジェクト規模へのコミットメント",
    scaleDescription: "プロジェクトのボリュームが増えるにつれて、当社の労働力と製作能力も向上し、生産期限に間に合わせます。",
    scaleQuestion: "建設サプライチェーンを確保する準備はできていますか？",
    ctaTitle: "次のプロジェクトについて話し合う",
    ctaDescription: "プロジェクトの要件について教えてください。プロフェッショナルなパートナーシップを開始するために、技術図面をお送りください。",
    ctaButton: "B2B チームに連絡する"
  },
  es: {
    pageTitle: "Asociación B2B - Mandiri Steel Bekasi",
    metaDescription: "Socio de Mandiri Steel para sus proyectos de construcción e interiorismo. Servicios de soldadura confiables para desarrolladores y contratistas en Bekasi.",
    metaKeywords: "asociación de soldadura bekasi, servicios de soldadura b2b, socio de construcción bekasi, herrería de diseño de interiores",
    heroTitle: "Asociación de Construcción B2B",
    mainTitle: "Su Subcontratista de Soldadura Confiable",
    mainParagraphs: [
      "Ya sea que sea un desarrollador inmobiliario, un contratista de construcción o un diseñador de interiores, necesita un socio de soldadura de confianza. Mandiri Steel garantiza que los trabajos de hierro y acero de su proyecto se entreguen con alta precisión y calidad.",
      "Entendemos que los proyectos comerciales implican cronogramas estrictos, cumplimiento de diseños específicos y estándares de materiales duraderos. Nos adaptamos a estas necesidades B2B a la perfección."
    ],
    experienceTitle: "Experiencia Profesional",
    experienceParagraphs: [
      "Nuestro equipo tiene más de 25 años de experiencia en la industria de la soldadura en Bekasi. Nos encargamos de los cálculos estructurales, la selección de materiales y los estándares de seguridad en el sitio para proyectos profesionales.",
      "Desde complejos habitacionales hasta renovaciones de fábricas, mantenemos total transparencia y profesionalismo durante toda la colaboración."
    ],
    collaborationTitle: "Directo del Taller",
    collaborationSubtitle: "Socio de Servicios de Soldadura",
    collaborationParagraphs: [
      "Al asociarse con nosotros, trabaja directamente con un taller que tiene una trayectoria comprobada en Bekasi. Sin intermediarios, solo servicio profesional directo.",
      "Nuestro equipo está listo para discutir el volumen de su proyecto, los dibujos técnicos y los requisitos de acabado especializados.",
      "Recibirá precios competitivos para B2B, especificaciones de materiales genuinos y una mano de obra constante en cada unidad."
    ],
    flexibilityTitle: "Contratos Escalables",
    flexibilityParagraphs: [
      "Ofrecemos modelos de colaboración flexibles, desde unidades de casas individuales hasta proyectos de vivienda a gran escala y estructuras de almacenes industriales.",
      "Elija los grados de material y los métodos de acabado que mejor se adapten al presupuesto y los objetivos de calidad de su proyecto."
    ],
    scaleTitle: "Compromiso con la Escala de su Proyecto",
    scaleDescription: "A medida que crezca el volumen de su proyecto, nuestra fuerza laboral y nuestras capacidades de fabricación aumentarán para cumplir con su plazo de producción.",
    scaleQuestion: "¿Listo para asegurar su cadena de suministro de construcción?",
    ctaTitle: "Discuta su Próximo Proyecto",
    ctaDescription: "Cuéntenos sobre los requisitos de su proyecto. Envíenos sus dibujos técnicos para iniciar una asociación profesional.",
    ctaButton: "Contacte a Nuestro Equipo B2B"
  },
  fr: {
    pageTitle: "Partenariat B2B - Mandiri Steel Bekasi",
    metaDescription: "Associez-vous à Mandiri Steel pour vos projets de construction et d'intérieur. Services de soudure fiables pour les promoteurs et entrepreneurs à Bekasi.",
    metaKeywords: "partenariat soudure bekasi, services soudure b2b, partenaire construction bekasi, ferronnerie design d'intérieur",
    heroTitle: "Partenariat de Construction B2B",
    mainTitle: "Votre Sous-traitant en Soudure Fiable",
    mainParagraphs: [
      "Que vous soyez un promoteur immobilier, un entrepreneur en bâtiment ou un architecte d'intérieur, vous avez besoin d'un partenaire en soudure de confiance. Mandiri Steel garantit que les travaux en fer et en acier de votre projet sont livrés avec une haute précision et qualité.",
      "Nous comprenons que les projets commerciaux impliquent des délais stricts, une conformité à des conceptions spécifiques et des normes de matériaux durables. Nous répondons à ces besoins B2B de manière transparente."
    ],
    experienceTitle: "Expertise Professionnelle",
    experienceParagraphs: [
      "Notre équipe possède plus de 25 ans d'expérience dans l'industrie de la soudure à Bekasi. Nous gérons les calculs structurels, la sélection des matériaux et les normes de sécurité sur site pour les projets professionnels.",
      "Des complexes résidentiels aux rénovations d'usines, nous maintenons une transparence totale et un professionnalisme tout au long de la collaboration."
    ],
    collaborationTitle: "Directement de l'Atelier",
    collaborationSubtitle: "Partenaire de Services de Soudure",
    collaborationParagraphs: [
      "En vous associant à nous, vous travaillez directement avec un atelier qui a fait ses preuves à Bekasi. Pas d'intermédiaire, juste un service professionnel direct.",
      "Notre équipe est prête à discuter du volume de votre projet, de vos dessins techniques et de vos exigences de finition spécialisées.",
      "Vous bénéficierez de tarifs B2B compétitifs, de spécifications de matériaux authentiques et d'un savoir-faire constant sur chaque unité."
    ],
    flexibilityTitle: "Contrats Évolutifs",
    flexibilityParagraphs: [
      "Nous proposons des modèles de collaboration flexibles, allant de l'unité d'habitation individuelle aux projets de logement à grande échelle et aux structures d'entrepôts industriels.",
      "Choisissez les nuances de matériaux et les méthodes de finition qui correspondent le mieux au budget et aux objectifs de qualité de votre projet."
    ],
    scaleTitle: "Engagement envers l'Échelle de votre Projet",
    scaleDescription: "À mesure que le volume de votre projet augmente, notre main-d'œuvre et nos capacités de fabrication s'adapteront pour respecter vos délais de production.",
    scaleQuestion: "Prêt à sécuriser votre chaîne d'approvisionnement en construction ?",
    ctaTitle: "Discutez de votre Prochain Projet",
    ctaDescription: "Parlez-nous des exigences de votre projet. Envoyez-nous vos dessins techniques pour entamer un partenariat professionnel.",
    ctaButton: "Contactez notre Équipe B2B"
  },
  ko: {
    pageTitle: "B2B 파트너십 - 브카시 Mandiri Steel",
    metaDescription: "건설 및 인테리어 프로젝트를 위해 Mandiri Steel과 파트너십을 맺으세요. 브카시의 개발자 및 계약자를 위한 신뢰할 수 있는 용접 서비스.",
    metaKeywords: "브카시 용접 파트너십, B2B 용접 서비스, 브카시 건설 파트너, 인테리어 디자인 철제 공사",
    heroTitle: "B2B 건설 파트너십",
    mainTitle: "신뢰할 수 있는 용접 하도급 업체",
    mainParagraphs: [
      "귀하가 부동산 개발업자, 건축 계약자 또는 인테리어 디자이너이든 관계없이 신뢰할 수 있는 용접 파트너가 필요합니다. Mandiri Steel은 귀하의 프로젝트의 철강 공사가 높은 정밀도와 품질로 납품되도록 보장합니다.",
      "상업 프로젝트에는 엄격한 일정, 특정 설계 준수 및 내구성 있는 자재 표준이 수반된다는 점을 잘 알고 있습니다. 이러한 B2B 요구 사항을 원활하게 수용합니다."
    ],
    experienceTitle: "전문 지식",
    experienceParagraphs: [
      "당사 팀은 브카시 용접 산업에서 25년 이상의 경험을 보유하고 있습니다. 전문 프로젝트를 위한 구조 계산, 자재 선택 및 현장 안전 표준을 처리합니다.",
      "주택 단지에서 공장 리모델링에 이르기까지 협업 과정 전반에 걸쳐 완전한 투명성과 전문성을 유지합니다."
    ],
    collaborationTitle: "워크숍 직접 협력",
    collaborationSubtitle: "용접 서비스 파트너",
    collaborationParagraphs: [
      "당사와 파트너십을 맺으면 브카시에서 검증된 실적을 보유한 워크숍과 직접 협력하게 됩니다. 중간 단계 없이 직접적인 전문 서비스를 제공합니다.",
      "당사 팀은 귀하의 프로젝트 규모, 기술 도면 및 특수 마감 요구 사항에 대해 논의할 준비가 되어 있습니다.",
      "모든 유닛에 대해 경쟁력 있는 B2B 가격, 정품 자재 사양 및 일관된 장인 정신을 제공받게 됩니다."
    ],
    flexibilityTitle: "확장 가능한 계약",
    flexibilityParagraphs: [
      "개별 주택 유닛부터 대규모 주택 프로젝트 및 산업용 창고 구조에 이르기까지 유연한 협업 모델을 제공합니다.",
      "프로젝트 예산과 품질 목표에 가장 적합한 자재 등급과 마감 방법을 선택하세요."
    ],
    scaleTitle: "프로젝트 규모에 대한 약속",
    scaleDescription: "프로젝트 규모가 커짐에 따라 당사의 인력과 제작 능력도 생산 기한을 맞추기 위해 증대될 것입니다.",
    scaleQuestion: "건설 공급망을 확보할 준비가 되셨습니까?",
    ctaTitle: "다음 프로젝트에 대해 논의하기",
    ctaDescription: "프로젝트 요구 사항에 대해 알려주세요. 전문적인 파트너십을 시작하기 위해 기술 도면을 보내주세요.",
    ctaButton: "B2B 팀에 문의하기"
  }
}

const NaturraPartnership: React.FC = () => {
  const location = useLocation()
  const [language, setLanguage] = useState<LanguageCode>(() =>
    getCurrentLanguage(location.pathname, location.search)
  )

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname, location.search)
    if (currentLang !== language) setLanguage(currentLang)
  }, [location.pathname, location.search, language])

  useEffect(() => {
    const stored = getStoredLanguage()
    const urlLang = getCurrentLanguage(location.pathname, location.search)
    if (stored || urlLang !== 'en') return
    detectLanguageFromIP().then(ipLang => {
      if (ipLang && !getStoredLanguage()) setLanguage(ipLang)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const t = TRANSLATIONS[language] ?? TRANSLATIONS.id
  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const handleWhatsAppClick = () => trackWhatsAppClick('Partnership Page CTA')

  return (
    <div className="partnership-page">
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href="https://lasbekasi.com/partnership" />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`partnership-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        {OG_LOCALES.filter(altLocale => altLocale !== localeMeta.locale).map((altLocale) => (
          <meta key={`partnership-og-${altLocale}`} property="og:locale:alternate" content={altLocale} />
        ))}
      </Helmet>

      <NaturraHeader />

      {/* Hero */}
      <section className="partnership-hero">
        <div className="partnership-hero-image">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop"
            alt={t.heroTitle}
            title={t.heroTitle}
            loading="eager"
            fetchPriority="high"
          />
          <div className="partnership-hero-overlay" />
        </div>
        <div className="partnership-hero-content">
          <h1 className="partnership-hero-title">{t.heroTitle}</h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="partnership-main-section">
        <div className="partnership-main-container">
          <div className="partnership-main-content">
            <div className="partnership-main-text">
              <h2 className="partnership-section-title">{t.mainTitle}</h2>
              <div className="partnership-main-body">
                {t.mainParagraphs.map((paragraph, index) => (
                  <p key={index} className="partnership-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="partnership-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80"
                alt="Welding workshop professional work"
                className="partnership-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="partnership-experience-section">
        <div className="partnership-experience-container">
          <div className="partnership-experience-layout">
            <div className="partnership-experience-content">
              <h2 className="partnership-section-title">{t.experienceTitle}</h2>
              {t.experienceParagraphs.map((paragraph, index) => (
                <p key={index} className="partnership-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="partnership-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Construction site collaboration"
                className="partnership-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="partnership-collaboration-section">
        <div className="partnership-collaboration-container">
          <div className="partnership-collaboration-layout">
            <div className="partnership-collaboration-content">
              <span className="partnership-section-subtitle">{t.collaborationSubtitle}</span>
              <h2 className="partnership-section-title">{t.collaborationTitle}</h2>
              {t.collaborationParagraphs.map((paragraph, index) => (
                <p key={index} className="partnership-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="partnership-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                alt="Workshop fabrication process"
                className="partnership-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section className="partnership-flexibility-section">
        <div className="partnership-flexibility-container">
          <div className="partnership-flexibility-layout">
            <div className="partnership-flexibility-content">
              <h2 className="partnership-section-title">{t.flexibilityTitle}</h2>
              {t.flexibilityParagraphs.map((paragraph, index) => (
                <p key={index} className="partnership-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="partnership-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Flexible construction project"
                className="partnership-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="partnership-scale-section">
        <div className="partnership-scale-container">
          <div className="partnership-scale-layout">
            <div className="partnership-scale-content">
              <h2 className="partnership-section-title">{t.scaleTitle}</h2>
              <p className="partnership-paragraph">{t.scaleDescription}</p>
              <h3 className="partnership-section-subtitle" style={{ fontSize: '1.2rem', marginTop: '20px' }}>
                {t.scaleQuestion}
              </h3>
            </div>
            <div className="partnership-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Scaling construction partnership"
                className="partnership-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partnership-cta-section">
        <div className="partnership-cta-container">
          <h2 className="partnership-cta-title">{t.ctaTitle}</h2>
          <p className="partnership-cta-description">{t.ctaDescription}</p>
          <a
            href="https://wa.me/6285212078467?text=Halo%20Bengkel%20Las%20Mandiri%2C%20saya%20tertarik%20untuk%20diskusi%20kerjasama%20B2B%20proyek%20konstruksi."
            target="_blank"
            rel="noopener noreferrer"
            className="partnership-whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.ctaButton}
          </a>
        </div>
      </section>

      <NaturraFooter />
    </div>
  )
}

export default NaturraPartnership
