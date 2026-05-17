import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { Clock, MapPin, Phone, Mail, Globe } from 'lucide-react'
import Footer from '../components/Footer'
import NaturraHeader from '../components/NaturraHeader'
import ServiceAreasSection from '../components/ServiceAreasSection'
const heroImage = 'https://images.unsplash.com/photo-1586528116311-ad866efd92bf?w=1920&q=80'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, getStoredLanguage, detectLanguageFromIP, type LanguageCode } from '../utils/languageManager'
import './ShippingInformation.css'

type ShippingTranslation = {
  meta: {
    title: string
    description: string
    keywords: string
  }
  heroTitle: string
  mainSection: {
    title: string
    paragraph: string
  }
  timesSection: {
    title: string
    items: Array<{ region: string; duration: string }>
  }
  containerSection: {
    title: string
    description: string
  }
  pricingSection: {
    title: string
    paragraphs: string[]
  }
  responsibilitySection: {
    title: string
    paragraphs: string[]
  }
  contactSection: {
    title: string
    description: string
    addressLabel: string
    phoneLabel: string
    emailLabel: string
    websiteLabel: string
    workshopLabel: string
  }
}

const SHIPPING_TRANSLATIONS: Record<LanguageCode, ShippingTranslation> = {
  en: {
    meta: {
      title: 'Delivery & On-site Installation - Mandiri Steel',
      description:
        'Complete information about local delivery, transportation, and professional on-site installation of steel gates, canopies, and metal fabrications by Mandiri Steel Bekasi.',
      keywords: 'welding delivery, canopy installation, steel gate delivery, local pickup truck, Jabodetabek delivery'
    },
    heroTitle: 'Delivery & Installation',
    mainSection: {
      title: 'Local Delivery & Professional Installation',
      paragraph:
        'We serve the entire Jabodetabek region (Jakarta, Bogor, Depok, Tangerang, Bekasi). Every custom canopy, gate, railing, or steel fabrication is delivered safely and installed by our experienced welders.'
    },
    timesSection: {
      title: 'Estimated Delivery & Installation Timelines',
      items: [
        { region: 'Bekasi Regency & City', duration: '1-2 Days (On-site Installation)' },
        { region: 'East & North Jakarta', duration: '1-2 Days (On-site Installation)' },
        { region: 'South & West Jakarta', duration: '2-3 Days (On-site Installation)' },
        { region: 'Depok & Bogor', duration: '2-3 Days (On-site Installation)' },
        { region: 'Tangerang Regency & City', duration: '3-4 Days (On-site Installation)' },
        { region: 'Outside Jabodetabek (West Java)', duration: 'By Agreement / Special Handling' }
      ]
    },
    containerSection: {
      title: 'Transport & Logistics Vehicles',
      description:
        'We operate our own fleet of customized pick-up trucks (Suzuki Carry / Daihatsu Gran Max / L300) equipped with protective racks to transport heavy steel gates, delicate structural components, and polycarbonate/alderon canopy sheets without damage.'
    },
    pricingSection: {
      title: 'Delivery & Installation Cost',
      paragraphs: [
        'For projects within Bekasi and surrounding areas, local delivery and on-site standard installation are completely FREE as part of our package deal.',
        'For deliveries outside Bekasi (such as Tangerang, West Jakarta, or Bogor), a small transport fuel subsidy may apply depending on the size and complexity of the project. Please consult with our team when requesting a quote.'
      ]
    },
    responsibilitySection: {
      title: 'Safety & Workmanship Guarantee',
      paragraphs: [
        'We take full responsibility for the safety of your products during transport. Any paint scratches or minor transport damage will be immediately corrected on-site during the installation phase.',
        'Our team of professional welders will perform precision welding, anchoring, and alignment. We stand behind our work with a structural warranty on all installed products.',
        'We work closely with local building inspectors and neighborhood representatives when required. If no specific delivery method is chosen, we reserve the right to coordinate the safest transport route for the customer\'s benefit.'
      ]
    },
    contactSection: {
      title: 'Need a Delivery Quote?',
      description: 'Contact our team to get a detailed delivery schedule and cost estimation for your custom steel project.',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      workshopLabel: 'Workshop Bekasi:'
    }
  },
  id: {
    meta: {
      title: 'Pengiriman & Pemasangan di Lokasi - Mandiri Steel',
      description:
        'Informasi lengkap mengenai pengiriman lokal, transportasi, dan jasa pemasangan profesional kanopi, pagar besi, dan teralis oleh Mandiri Steel Bekasi.',
      keywords: 'pengiriman jasa las, pasang kanopi bekasi, kirim pagar besi, sewa pickup Jabodetabek, pasang tangga putar'
    },
    heroTitle: 'Pengiriman & Pemasangan',
    mainSection: {
      title: 'Pengiriman Lokal & Pemasangan Profesional',
      paragraph:
        'Kami melayani seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi). Setiap pesanan kanopi, pagar, railing, atau konstruksi baja dikirim dengan aman dan dipasang langsung oleh tukang las ahli kami.'
    },
    timesSection: {
      title: 'Estimasi Waktu Pengiriman & Pemasangan',
      items: [
        { region: 'Kabupaten & Kota Bekasi', duration: '1-2 Hari (Pemasangan Langsung)' },
        { region: 'Jakarta Timur & Utara', duration: '1-2 Hari (Pemasangan Langsung)' },
        { region: 'Jakarta Selatan & Barat', duration: '2-3 Hari (Pemasangan Langsung)' },
        { region: 'Depok & Bogor', duration: '2-3 Hari (Pemasangan Langsung)' },
        { region: 'Kabupaten & Kota Tangerang', duration: '3-4 Hari (Pemasangan Langsung)' },
        { region: 'Luar Jabodetabek (Jawa Barat)', duration: 'Sesuai Kesepakatan Khusus' }
      ]
    },
    containerSection: {
      title: 'Armada Transportasi & Pengiriman',
      description:
        'Kami menggunakan armada mobil pick-up kustom (Suzuki Carry / Daihatsu Gran Max / L300) yang dilengkapi dengan rak pelindung besi untuk mengangkut pintu pagar besar, tangga putar, dan atap kanopi (alderon/spandek) agar tetap mulus sampai di lokasi Anda.'
    },
    pricingSection: {
      title: 'Biaya Pengiriman & Pemasangan',
      paragraphs: [
        'Untuk proyek di wilayah Bekasi dan sekitarnya, biaya pengiriman dan pemasangan standar di lokasi sudah GRATIS (Free Ongkir & Pemasangan) sebagai bagian dari paket layanan kami.',
        'Untuk pengiriman ke luar Bekasi (seperti Tangerang, Jakarta Barat, atau Bogor), subsidi biaya bensin/tol ringan akan disesuaikan dengan volume pengerjaan. Konsultasikan dengan tim kami saat pengajuan penawaran.'
      ]
    },
    responsibilitySection: {
      title: 'Jaminan Keselamatan & Garansi Pemasangan',
      paragraphs: [
        'Kami bertanggung jawab penuh atas keamanan produk selama perjalanan. Jika terdapat goresan cat atau cacat transportasi ringan, tukang kami akan langsung melakukan finishing cat ulang (touch-up) di lokasi secara gratis.',
        'Tim las ahli kami memastikan kekuatan sambungan, ketepatan angkur tanam, dan kerapian hasil akhir. Kami memberikan garansi struktur untuk memastikan kenyamanan Anda.',
        'Kami menjaga hubungan dan koordinasi yang baik dengan lingkungan pemasangan. Jika tidak ada spesifikasi teknis khusus, kami berhak menentukan metode angkutan terbaik demi keselamatan barang sampai di tujuan.'
      ]
    },
    contactSection: {
      title: 'Ingin Jadwalkan Pengiriman?',
      description: 'Hubungi tim kami via WhatsApp atau Email untuk mendapatkan estimasi jadwal produksi, pengiriman, dan pemasangan di rumah Anda.',
      addressLabel: 'Alamat',
      phoneLabel: 'Telepon',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      workshopLabel: 'Workshop Bekasi:'
    }
  },
  ar: {
    meta: {
      title: 'التوصيل والتركيب في الموقع - مانديري ستيل',
      description: 'معلومات كاملة عن التوصيل المحلي والتركيب الاحترافي للبوابات والمظلات والهياكل الفولاذية من مانديري ستيل بيكاسي.',
      keywords: 'توصيل اللحام، تركيب المظلات، توصيل البوابات، نقل محلي، توصيل جاكرتا بيكاسي'
    },
    heroTitle: 'التوصيل والتركيب',
    mainSection: {
      title: 'التوصيل المحلي والتركيب الاحترافي',
      paragraph: 'نحن نخدم منطقة جابوديتابك بأكملها (جاكرتا، بوغور، ديبوك، تانجيرانج، بيكاسي). يتم تسليم كل مظلة أو بوابة أو درابزين مخصص وتثبيته بأمان بواسطة فنيي اللحام ذوي الخبرة لدينا.'
    },
    timesSection: {
      title: 'الجدول الزمني المقدر للتوصيل والتركيب',
      items: [
        { region: 'بيكاسي ريجنسي والمدينة', duration: '1-2 أيام (التركيب في الموقع)' },
        { region: 'شرق وشمال جاكرتا', duration: '1-2 أيام (التركيب في الموقع)' },
        { region: 'جنوب وغرب جاكرتا', duration: '2-3 أيام (التركيب في الموقع)' },
        { region: 'ديبوك وبوغور', duration: '2-3 أيام (التركيب في الموقع)' },
        { region: 'تانجيرانج ريجنسي والمدينة', duration: '3-4 أيام (التركيب في الموقع)' },
        { region: 'خارج جابوديتابك (غرب جاوة)', duration: 'عن طريق الاتفاق / معاملة خاصة' }
      ]
    },
    containerSection: {
      title: 'مركبات النقل والخدمات اللوجستية',
      description: 'نحن ندير أسطولنا الخاص من شاحنات البيك أب المخصصة والمجهزة برفوف واقية لنقل البوابات الفولاذية الثقيلة ومكونات الهيكل الفولاذي وألواح المظلات دون أي ضرر.'
    },
    pricingSection: {
      title: 'تكلفة التوصيل والتركيب',
      paragraphs: [
        'بالنسبة للمشاريع داخل بيكاسي والمناطق المحيطة بها، فإن التوصيل المحلي والتركيب القياسي في الموقع مجانيان تمامًا كجزء من صفقة الحزمة الخاصة بنا.',
        'بالنسبة لعمليات التوصيل خارج بيكاسي (مثل تانجيرانج أو غرب جاكرتا أو بوغور)، قد يتم تطبيق دعم وقود نقل صغير اعتمادًا على حجم المشروع وتعقيده.'
      ]
    },
    responsibilitySection: {
      title: 'ضمان السلامة وجودة العمل',
      paragraphs: [
        'نحن نتحمل المسؤولية الكاملة عن سلامة منتجاتك أثناء النقل. سيتم تصحيح أي خدوش في الطلاء أو تلف ناتج عن النقل فورًا في الموقع أثناء مرحلة التركيب.',
        'سيقوم فريقنا من فنيي اللحام المحترفين بأداء لحام دقيق وتثبيت ومحاذاة ممتازة لحماية هيكل المشروع.',
        'نحن نعمل بشكل وثيق مع مسؤولي البناء والممثلين المحليين عند الاقتضاء لضمان أمان وسلامة الشاحنات والمواد.'
      ]
    },
    contactSection: {
      title: 'هل تحتاج إلى عرض أسعار للتوصيل؟',
      description: 'اتصل بفريقنا للحصول على جدول توصيل مفصل وتقدير التكلفة لمشروع الفولاذ المخصص لك.',
      addressLabel: 'العنوان',
      phoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      websiteLabel: 'الموقع الإلكتروني',
      workshopLabel: 'ورشة بيكاسي:'
    }
  },
  zh: {
    meta: {
      title: '送货与现场安装服务 - Mandiri Steel',
      description: '了解勿加泗 Mandiri Steel 提供的钢大门、雨棚及铁艺定制的本地送货、运输与专业现场安装的完整信息。',
      keywords: '焊接送货, 雨棚安装, 钢门送货, 本地小卡车, 雅加达勿加泗送货'
    },
    heroTitle: '送货与安装',
    mainSection: {
      title: '本地送货与专业现场安装',
      paragraph: '我们服务于整个大雅加达地区（雅加达、茂物、德波、唐格朗、勿加泗）。每一件定制的雨棚、大门、护栏或钢结构都会安全送达，并由我们经验丰富的焊工当场安装。'
    },
    timesSection: {
      title: '预计送货与安装时间表',
      items: [
        { region: '勿加泗县及市区', duration: '1-2 天 (现场安装)' },
        { region: '雅加达东部与北部', duration: '1-2 天 (现场安装)' },
        { region: '雅加达南部与西部', duration: '2-3 天 (现场安装)' },
        { region: '德波与茂物', duration: '2-3 天 (现场安装)' },
        { region: '唐格朗县及市区', duration: '3-4 天 (现场安装)' },
        { region: '大雅加达以外地区（西爪哇）', duration: '协商决定 / 特殊安排' }
      ]
    },
    containerSection: {
      title: '运输与物流车辆',
      description: '我们拥有自己的定制皮卡车队（Suzuki Carry / Daihatsu Gran Max / L300），配备保护架以安全运输重型钢门、旋转楼梯和雨棚板材，确保物品完好无损地送达目的地。'
    },
    pricingSection: {
      title: '送货与安装费用',
      paragraphs: [
        '对于勿加泗及周边地区的项目，本地送货和现场标准安装完全免费，包含在我们的套餐内。',
        '对于送往勿加泗以外地区（如唐格朗、西雅加达或茂物）的项目，将根据项目的体积和距离酌情收取少量运费补贴。请在咨询报价时与我们团队确认。'
      ]
    },
    responsibilitySection: {
      title: '安全与工艺保证声明',
      paragraphs: [
        '我们对产品在运输过程中的安全承担全部责任。任何油漆划痕或轻微的运输磕碰，都将在现场安装阶段立即进行免费补漆和修整。',
        '我们专业的焊工团队将进行高精度焊接、地脚锚固和对齐，以确保结构的稳定性。我们为所有安装的产品提供结构保修。',
        '我们与客户的建筑负责人和社区代表密切配合。如果未指定送货方式，我们会以保障物品安全为前提安排最合适的送货路线。'
      ]
    },
    contactSection: {
      title: '需要送货报价？',
      description: '联系我们团队，获取您的定制钢结构项目的详细送货时间表和费用评估。',
      addressLabel: '地址',
      phoneLabel: '电话',
      emailLabel: '邮箱',
      websiteLabel: '网站',
      workshopLabel: '勿加泗工坊：'
    }
  },
  ja: {
    meta: {
      title: '配送・現地取り付け工事 - Mandiri Steel',
      description: 'Bekasi の Mandiri Steel による、鉄製大門、キャノピー、鉄骨構造物の現地配送、運搬、プロによる取り付け工事の総合案内。',
      keywords: '溶接 配送, キャノピー 取り付け, 鉄門 配送, 現地軽トラック, ジャボデタベック 配送'
    },
    heroTitle: '配送・取り付け',
    mainSection: {
      title: '現地配送とプロによる取り付け工事',
      paragraph: 'ジャボデタベック（ジャカルタ、ボゴール、デポック、タンゲラン、ベカシ）全域に対応しています。オーダーメイドのキャノピー、ゲート、手すり、鉄骨構造物は安全に配送され、経験豊富な職人が現地で取り付け工事を行います。'
    },
    timesSection: {
      title: '配送・取り付けまでの目安期間',
      items: [
        { region: 'ベカシ県・市', duration: '1-2日 (現地取り付け工事)' },
        { region: '東・北ジャカルタ', duration: '1-2日 (現地取り付け工事)' },
        { region: '南・西ジャカルタ', duration: '2-3日 (現地取り付け工事)' },
        { region: 'デポック・ボゴール', duration: '2-3日 (現地取り付け工事)' },
        { region: 'タンゲラン県・市', duration: '3-4日 (現地取り付け工事)' },
        { region: 'ジャボデタベック外（西ジャワ）', duration: '特別合意 / 特殊手配' }
      ]
    },
    containerSection: {
      title: '輸送・物流車両について',
      description: '重いスチール製大門、螺旋階段、デリケートなキャノピー用パネルを傷つけることなく安全に輸送できるよう、専用の保護ラックを備えた自社の軽トラック（Suzuki Carry / Daihatsu Gran Max / L300）で配送します。'
    },
    pricingSection: {
      title: '配送および取り付け費用',
      paragraphs: [
        'ベカシおよびその周辺地域でのプロジェクトの場合、現地配送および標準的な現地取り付け工事はすべて「完全無料」で提供しております。',
        'ベカシ以外の地域（タンゲラン、西ジャカルタ、ボゴールなど）への配送については、プロジェクトの規模や距離に応じて、少額のガソリン代／高速代の補助をお願いする場合があります。見積もり時にご相談ください。'
      ]
    },
    responsibilitySection: {
      title: '安全性と施工品質の保証',
      paragraphs: [
        '輸送中の商品の安全性については、当社がすべての責任を負います。万が一、運送中の塗装の擦れや軽微なキズが発生した場合は、現地での取り付け作業時に無償で塗装修復（タッチアップ）を行います。',
        'プロの溶接職人チームが、強度、アンカーの深さ、水平垂直を徹底して確認して取り付けを行います。施工したすべての構造物には構造保証が適用されます。',
        '必要に応じて現地管理組合等と連携し、最も安全な運送・搬入ルートを設定します。特定の運搬手段が指定されない場合は、お客様の利益を最優先した最適な経路を手配します。'
      ]
    },
    contactSection: {
      title: '配送スケジュールの確認',
      description: 'お客様のオーダーメイド鉄骨製品の配送予定や取り付け日程、費用のお見積もりは、お気軽に当社までお問い合わせください。',
      addressLabel: '住所',
      phoneLabel: '電話番号',
      emailLabel: 'メール',
      websiteLabel: 'ウェブサイト',
      workshopLabel: 'ベカシ工房：'
    }
  },
  es: {
    meta: {
      title: 'Envío e Instalación en Obra - Mandiri Steel',
      description: 'Información completa sobre el transporte local, entrega y colocación profesional en obra de portones de hierro, doseles y herrería de Mandiri Steel Bekasi.',
      keywords: 'transporte de herrería, instalación de dosel, entrega de portón, camión pickup local, envío en Jabodetabek'
    },
    heroTitle: 'Envío e Instalación',
    mainSection: {
      title: 'Envío Local e Instalación Profesional',
      paragraph: 'Atendemos a toda la región de Jabodetabek (Yakarta, Bogor, Depok, Tangerang, Bekasi). Cada dosel, portón, barandal o estructura de acero a la medida se entrega de manera segura y se coloca en su domicilio por nuestros soldadores expertos.'
    },
    timesSection: {
      title: 'Tiempos Estimados de Entrega e Instalación',
      items: [
        { region: 'Municipio y Ciudad de Bekasi', duration: '1-2 Días (Instalación en sitio)' },
        { region: 'Yakarta Oriental y del Norte', duration: '1-2 Días (Instalación en sitio)' },
        { region: 'Yakarta Meridional y Occidental', duration: '2-3 Días (Instalación en sitio)' },
        { region: 'Depok y Bogor', duration: '2-3 Días (Instalación en sitio)' },
        { region: 'Municipio y Ciudad de Tangerang', duration: '3-4 Días (Instalación en sitio)' },
        { region: 'Fuera de Jabodetabek (Java Occidental)', duration: 'Bajo acuerdo especial' }
      ]
    },
    containerSection: {
      title: 'Vehículos de Transporte y Logística',
      description: 'Contamos con nuestra propia flota de camionetas pickup adaptadas (Suzuki Carry / Daihatsu Gran Max / L300) equipadas con soportes protectores para trasladar portones pesados, escaleras de caracol y láminas de dosel sin sufrir ningún daño.'
    },
    pricingSection: {
      title: 'Costo de Envío e Instalación',
      paragraphs: [
        'Para proyectos dentro de Bekasi y áreas metropolitanas colindantes, la entrega local y la instalación básica estándar en obra son totalmente GRATIS como parte de nuestro paquete de servicios.',
        'Para entregas fuera de Bekasi (como Tangerang, Yakarta Occidental o Bogor), puede aplicar un subsidio menor de combustible para el transporte, según las dimensiones del proyecto. Consúltelo con nuestro equipo.'
      ]
    },
    responsibilitySection: {
      title: 'Jaminan de Seguridad y Garantía de Mano de Obra',
      paragraphs: [
        'Asumimos la responsabilidad total por la integridad del producto durante el traslado. Cualquier raspadura de pintura o percance menor del transporte será retocado en obra inmediatamente durante la instalación.',
        'Nuestro equipo de soldadores calificados asegura la solidez de las uniones, los anclajes y la alineación. Ofrecemos garantía estructural en todos nuestros trabajos instalados.',
        'Nos coordinamos con los encargados de obra o vecinos de ser necesario. Si no se define un método de transporte, elegiremos la ruta de despacho más segura a beneficio del cliente.'
      ]
    },
    contactSection: {
      title: '¿Necesita Agendar un Envío?',
      description: 'Póngase en contacto con nuestro equipo por WhatsApp o Correo para coordinar el calendario de fabricación, entrega e instalación en su domicilio.',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo electrónico',
      websiteLabel: 'Sitio web',
      workshopLabel: 'Taller de Bekasi:'
    }
  },
  fr: {
    meta: {
      title: 'Livraison & Installation sur Site - Mandiri Steel',
      description: 'Informations complètes sur la livraison locale, le transport et la pose professionnelle de portails, d\'auvents et d\'ouvrages métalliques par Mandiri Steel Bekasi.',
      keywords: 'transport de métallurgie, pose d\'auvent, livraison de portail, camionnette locale, livraison Jabodetabek'
    },
    heroTitle: 'Livraison & Installation',
    mainSection: {
      title: 'Livraison Locale & Pose Professionnelle',
      paragraph: 'Nous desservons toute la région de Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi). Chaque auvent, portail, garde-corps ou structure métallique sur mesure est livré en toute sécurité et installé directement chez vous par nos soudeurs qualifiés.'
    },
    timesSection: {
      title: 'Délais Estimés de Livraison & de Pose',
      items: [
        { region: 'Régence & Ville de Bekasi', duration: '1 à 2 jours (Pose sur site)' },
        { region: 'Jakarta Est & Nord', duration: '1 à 2 jours (Pose sur site)' },
        { region: 'Jakarta Sud & Ouest', duration: '2 à 3 jours (Pose sur site)' },
        { region: 'Depok & Bogor', duration: '2 à 3 jours (Pose sur site)' },
        { region: 'Régence & Ville de Tangerang', duration: '3 à 4 jours (Pose sur site)' },
        { region: 'Hors de Jabodetabek (Java Ouest)', duration: 'Sur accord spécial / Devis personnalisé' }
      ]
    },
    containerSection: {
      title: 'Véhicules de Transport & Logistique',
      description: 'Nous disposons de notre propre flotte de camionnettes (Suzuki Carry / Daihatsu Gran Max / L300) équipées de supports de protection pour transporter les portails lourds, les escaliers en colimaçon et les tôles d\'auvent sans aucune rayure.'
    },
    pricingSection: {
      title: 'Tarifs de Livraison & d\'Installation',
      paragraphs: [
        'Pour les projets situés à Bekasi et ses environs, la livraison locale et la pose standard sur site sont entièrement GRATUITES dans le cadre de nos forfaits.',
        'Pour les livraisons en dehors de Bekasi (comme Tangerang, Jakarta Ouest ou Bogor), une participation mineure aux frais de carburant peut être appliquée selon le volume de l\'ouvrage. Veuillez consulter notre équipe.'
      ]
    },
    responsibilitySection: {
      title: 'Garantie de Sécurité & de Solidité',
      paragraphs: [
        'Nous prenons l\'entière responsabilité de la sécurité de vos produits pendant le transport. Toute éraflure ou défaut mineur de transport sera immédiatement corrigé et repeint sur site lors de la pose.',
        'Nos métalliers professionnels assurent la robustesse des soudures, la précision des ancrages et des alignements. Nous offrons une garantie décennale de structure sur tous les ouvrages posés.',
        'Nous travaillons en étroite collaboration avec les syndics ou représentants de quartier si nécessaire. En l\'absence de consigne, nous définissons l\'itinéraire le plus sûr au profit du client.'
      ]
    },
    contactSection: {
      title: 'Planifier une Livraison ?',
      description: 'Contactez notre équipe par WhatsApp ou par e-mail pour obtenir une estimation de calendrier de fabrication, de livraison et de pose chez vous.',
      addressLabel: 'Adresse',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      websiteLabel: 'Site web',
      workshopLabel: 'Atelier de Bekasi :'
    }
  },
  ko: {
    meta: {
      title: '배송 및 현장 설치 안내 - Mandiri Steel',
      description: 'Bekasi의 Mandiri Steel이 제공하는 대문, 캐노피, 맞춤형 철골 제품의 로컬 배송, 운반 및 전문적인 현장 설치에 관한 상세 안내.',
      keywords: '용접 배송, 캐노피 설치, 철문 배송, 로컬 픽업트럭, 자보데타벡 배송'
    },
    heroTitle: '배송 및 설치',
    mainSection: {
      title: '로컬 배송 및 전문적인 현장 설치',
      paragraph: '자보데타벡(자카르타, 보골, 데폭, 탄게랑, 베카시) 전 지역을 지원합니다. 모든 맞춤형 캐노피, 대문, 난간 및 철강 제작물은 숙련된 용접공들이 안전하게 현장까지 배송하고 직접 설치해 드립니다.'
    },
    timesSection: {
      title: '예상 배송 및 설치 일정',
      items: [
        { region: '베카시 리전 및 시티', duration: '1-2일 (현장 당일 설치)' },
        { region: '동부 및 북부 자카르타', duration: '1-2일 (현장 당일 설치)' },
        { region: '남부 및 서부 자카르타', duration: '2-3일 (현장 당일 설치)' },
        { region: '데폭 및 보골', duration: '2-3일 (현장 당일 설치)' },
        { region: '탄게랑 리전 및 시티', duration: '3-4일 (현장 당일 설치)' },
        { region: '자보데타벡 외 지역 (서부 자바)', duration: '상호 특별 협의' }
      ]
    },
    containerSection: {
      title: '운송 및 물류 차량 안내',
      description: '무거운 철문, 회전 계단 및 캐노피 지붕 판재(알데론/스판덱)가 흠집 없이 안전하게 도달하도록 맞춤형 차량 랙이 장착된 자체 픽업트럭(Suzuki Carry / Daihatsu Gran Max / L300)을 운영합니다.'
    },
    pricingSection: {
      title: '배송 및 설치 비용',
      paragraphs: [
        '베카시 및 인근 지역의 프로젝트인 경우, 로컬 배송과 기본적인 현장 설치비는 모두 패키지 서비스에 포함되어 있어 완전 무료(무료 배송 및 설치)입니다.',
        '베카시 이외의 지역(탄게랑, 서부 자카르타, 보골 등)으로의 배송은 프로젝트의 부피에 따라 실비 수준의 유류비 보조가 발생할 수 있습니다. 견적 시 확인해 주세요.'
      ]
    },
    responsibilitySection: {
      title: '안전성 및 시공 완벽 보장',
      paragraphs: [
        '운송 중 제품의 파손이나 안전에 대해 당사가 책임을 집니다. 미세한 도색 까짐이나 운송 흠집은 현장 설치 시 즉각 무료로 보수 도장(Touch-up)을 실시합니다.',
        '검증된 전문 용접 공팀이 접합부 강도, 앵커 매립 깊이, 균형을 정밀 확인하여 견고히 설치합니다. 설치된 구조물에는 무상 보증을 지원합니다.',
        '필요한 경우 건물 관리처 및 이웃 주민대표와 원활히 소통하여 조율합니다. 지정 배송 방법이 없을 경우, 당사는 제품을 가장 안전히 인도할 수 있는 노선을 지정합니다.'
      ]
    },
    contactSection: {
      title: '배송 일정을 예약하고 싶으신가요?',
      description: '제작, 배송 및 댁내 설치 일정을 조율하려면 언제든지 WhatsApp이나 이메일로 연락해 주시기 바랍니다.',
      addressLabel: '주소',
      phoneLabel: '전화번호',
      emailLabel: '이메일',
      websiteLabel: '웹사이트',
      workshopLabel: '베카시 공방:'
    }
  }
}

const ShippingInformation: React.FC = () => {
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
  const t = SHIPPING_TRANSLATIONS[language] ?? SHIPPING_TRANSLATIONS.en

  const localeMeta = generateLanguageSpecificMeta(language)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="shipping-information-page">
      <Helmet
        htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': language }}
      >
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link
            key={`shipping-hreflang-${alternate.hrefLang}`}
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

      <section className="shipping-hero">
        <div className="shipping-hero-image">
          <img
            src={heroImage}
            alt="Delivery & Installation - Pemasangan Kanopi Pagar Mandiri Steel Bekasi Seluruh Jabodetabek"
            title="Delivery & Installation Services - Mandiri Steel Bekasi"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="shipping-hero"
            data-category="shipping"
          />
          <div className="shipping-hero-overlay"></div>
        </div>
        <div className="shipping-hero-content">
          <h1 className="shipping-hero-title">{t.heroTitle}</h1>
        </div>
      </section>

      <section className="shipping-main-section">
        <div className="shipping-main-container">
          <div className="shipping-main-content">
            <h2 className="shipping-main-title">{t.mainSection.title}</h2>
            <div className="shipping-main-body">
              <p className="shipping-main-paragraph">{t.mainSection.paragraph}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shipping-times-section">
        <div className="shipping-times-container">
          <h2 className="shipping-times-title">{t.timesSection.title}</h2>

          <div className="shipping-times-grid">
            {t.timesSection.items.map((item) => (
              <div className="shipping-time-item" key={item.region}>
                <div className="shipping-time-icon">
                  <Clock size={24} />
                </div>
                <div className="shipping-time-content">
                  <h3 className="shipping-time-region">{item.region}</h3>
                  <p className="shipping-time-duration">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shipping-container-section">
        <div className="shipping-container-container">
          <h2 className="shipping-container-title">{t.containerSection.title}</h2>
          <div className="shipping-container-content">
            <p className="shipping-container-description">{t.containerSection.description}</p>
          </div>
        </div>
      </section>

      <section className="shipping-pricing-section">
        <div className="shipping-pricing-container">
          <h2 className="shipping-pricing-title">{t.pricingSection.title}</h2>
          <div className="shipping-pricing-content">
            {t.pricingSection.paragraphs.map((paragraph, index) => (
              <p className="shipping-pricing-description" key={`pricing-paragraph-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="shipping-responsibility-section">
        <div className="shipping-responsibility-container">
          <h2 className="shipping-responsibility-title">{t.responsibilitySection.title}</h2>
          <div className="shipping-responsibility-content">
            {t.responsibilitySection.paragraphs.map((paragraph, index) => (
              <p className="shipping-responsibility-description" key={`responsibility-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasSection language={language} isIndonesian={isIndonesian} />

      <section className="shipping-contact-section">
        <div className="shipping-contact-container">
          <h2 className="shipping-contact-title">{t.contactSection.title}</h2>
          <p className="shipping-contact-description">{t.contactSection.description}</p>

          <div className="shipping-contact-info">
            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <MapPin size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{t.contactSection.addressLabel}</h3>
                <p className="shipping-contact-value">
                  <strong>{t.contactSection.workshopLabel}</strong>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#8B7355', textDecoration: 'underline' }}
                  >
                    Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa
                    Barat 17320
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Phone size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{t.contactSection.phoneLabel}</h3>
                <p className="shipping-contact-value">
                  <a
                    href="https://wa.me/6285212078467"
                    style={{ color: '#8B7355', textDecoration: 'underline' }}
                    onClick={() => trackWhatsAppClick('shipping_info_contact')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 852-1207-8467
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Mail size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{t.contactSection.emailLabel}</h3>
                <p className="shipping-contact-value">
                  <a
                    href="mailto:info@lasbekasi.com"
                    style={{ color: '#8B7355', textDecoration: 'underline' }}
                  >
                    info@lasbekasi.com
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Globe size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{t.contactSection.websiteLabel}</h3>
                <p className="shipping-contact-value">
                  <a
                    href="https://lasbekasi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#8B7355', textDecoration: 'underline' }}
                  >
                    lasbekasi.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default ShippingInformation
