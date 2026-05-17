import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getCurrentLanguage, getStoredLanguage, detectLanguageFromIP, type LanguageCode } from '../utils/languageManager'
import './About.css'

const ABOUT_TRANSLATIONS: Record<LanguageCode, {
    metaTitle: string
    metaDesc: string
    eyebrow: string
    heroDesc: string
    sourcedTitle: string
    sourcedDesc: string
    diversityTitle: string
    diversitySubtitle: string
    regions: { name: string; desc: string }[]
    journeyEyebrow: string
    journeyHeading: string[]
    journeyDesc: string
    processTitle: string
    processSubtitle: string
    steps: { label: string; desc: string }[]
    contactCompany: string
    contactContact: string
    contactFollow: string
}> = {
    id: {
        metaTitle: 'Tentang Kami | Bengkel Las Mandiri Bekasi',
        metaDesc: 'Bengkel Las Mandiri Bekasi - Jasa las terpercaya sejak 1999. Spesialis kanopi, pagar, teralis, dan konstruksi baja di Bekasi.',
        eyebrow: 'Tentang Kami',
        heroDesc: 'Bengkel Las Mandiri (Mandiri Steel) adalah bengkel las profesional di Bekasi yang telah melayani kebutuhan konstruksi besi dan stainless steel selama lebih dari 25 tahun. Kami berkomitmen memberikan hasil pekerjaan yang kokoh, estetik, dan berkualitas tinggi untuk setiap pelanggan kami.',
        sourcedTitle: 'PENGALAMAN LEBIH DARI 25 TAHUN',
        sourcedDesc: 'Didirikan sejak tahun 1999 oleh Bapak Maman Toha, Bengkel Las Mandiri telah tumbuh menjadi salah satu bengkel las paling terpercaya di wilayah Bekasi. Kami memulai perjalanan dari bengkel kecil dan kini telah menangani ribuan proyek mulai dari kanopi rumah tinggal hingga konstruksi baja pabrik besar.',
        diversityTitle: 'LAYANAN UNGGULAN KAMI',
        diversitySubtitle: 'Solusi lengkap untuk kebutuhan eksterior dan interior bangunan Anda',
        regions: [
            { name: 'Kanopi Minimalis', desc: 'Pembuatan kanopi dengan berbagai pilihan atap seperti Alderon, Spandek, dan Polycarbonate dengan rangka besi yang kokoh.' },
            { name: 'Pagar & Gerbang', desc: 'Jasa pembuatan pagar minimalis, pagar tempa klasik, hingga pagar stainless steel dengan desain yang bisa dicustom.' },
            { name: 'Teralis Jendela', desc: 'Pengaman jendela dengan berbagai motif yang memberikan keamanan ekstra tanpa mengurangi keindahan rumah.' },
            { name: 'Railing Tangga', desc: 'Railing tangga dan balkon dengan kombinasi material besi, kayu, atau stainless steel untuk interior yang elegan.' },
            { name: 'Konstruksi Baja', desc: 'Pengerjaan struktur baja WF atau H-Beam untuk gudang, pabrik, lapangan futsal, atau dak mezanin rumah.' },
            { name: 'Service & Perbaikan', desc: 'Layanan perbaikan dan pengecatan ulang produk las lama Anda agar kembali kuat dan terlihat seperti baru.' },
        ],
        journeyEyebrow: 'Kualitas & Integritas',
        journeyHeading: ['HASIL KERJA KOKOH', 'HARGA BENGKEL', 'LANGSUNG'],
        journeyDesc: 'Di Bengkel Las Mandiri, setiap sambungan las kami kerjakan dengan teliti. Kami memastikan setiap material yang digunakan sesuai dengan kesepakatan spesifikasi. Kejujuran ketebalan besi dan kualitas cat anti karat adalah kunci kepercayaan pelanggan kepada kami selama puluhan tahun.',
        processTitle: 'PROSES PENGERJAAN KAMI',
        processSubtitle: 'Alur kerja profesional untuk menjamin ketepatan waktu dan kualitas hasil',
        steps: [
            { label: 'Survei & Konsultasi', desc: 'Tim kami datang ke lokasi untuk pengukuran dan mendiskusikan desain yang diinginkan' },
            { label: 'Penawaran Harga', desc: 'Kami memberikan rincian biaya yang transparan berdasarkan volume dan material pilihan' },
            { label: 'Pengerjaan Workshop', desc: 'Proses pengelasan dan perakitan dilakukan di workshop kami oleh tenaga ahli profesional' },
            { label: 'Pemasangan', desc: 'Finishing dan pemasangan di lokasi pelanggan dengan rapi dan pembersihan area kerja' },
        ],
        contactCompany: 'Workshop', contactContact: 'Hubungi Kami', contactFollow: 'Portofolio',
    },
    en: {
        metaTitle: 'About Us | Mandiri Steel Bekasi',
        metaDesc: 'Mandiri Steel Bekasi - Trusted welding services since 1999. Specialists in canopies, fences, trellises, and steel construction in Bekasi.',
        eyebrow: 'About Us',
        heroDesc: 'Mandiri Steel is a professional welding workshop in Bekasi that has served iron and stainless steel construction needs for more than 25 years. We are committed to providing sturdy, aesthetic, and high-quality work for each of our customers.',
        sourcedTitle: 'OVER 25 YEARS OF EXPERIENCE',
        sourcedDesc: 'Founded since 1999 by Mr. Maman Toha, Mandiri Steel has grown to become one of the most trusted welding workshops in the Bekasi area. We started our journey from a small workshop and have now handled thousands of projects from residential canopies to large factory steel constructions.',
        diversityTitle: 'OUR FEATURED SERVICES',
        diversitySubtitle: 'Complete solutions for your building\'s exterior and interior needs',
        regions: [
            { name: 'Minimalist Canopy', desc: 'Fabrication of canopies with various roof options such as Alderon, Spandek, and Polycarbonate with sturdy iron frames.' },
            { name: 'Fence & Gate', desc: 'Services for minimalist fences, classic wrought iron fences, to stainless steel fences with custom designs.' },
            { name: 'Window Trellis', desc: 'Window security with various motifs providing extra safety without compromising home beauty.' },
            { name: 'Stair Railing', desc: 'Stair and balcony railings with a combination of iron, wood, or stainless steel materials for an elegant interior.' },
            { name: 'Steel Construction', desc: 'Structural work using WF or H-Beam steel for warehouses, factories, futsal courts, or home mezzanines.' },
            { name: 'Service & Repair', desc: 'Repair and repainting services for your old welding products to make them strong again and look like new.' },
        ],
        journeyEyebrow: 'Quality & Integrity',
        journeyHeading: ['STURDY WORK RESULTS', 'DIRECT WORKSHOP', 'PRICING'],
        journeyDesc: 'At Mandiri Steel, every weld joint is carefully worked on. We ensure that every material used matches the agreed specifications. Honesty in iron thickness and anti-rust paint quality is the key to our customers\' trust for decades.',
        processTitle: 'OUR WORK PROCESS',
        processSubtitle: 'Professional workflow to ensure timely delivery and quality results',
        steps: [
            { label: 'Survey & Consultation', desc: 'Our team visits the location for measurement and to discuss the desired design' },
            { label: 'Price Quotation', desc: 'We provide transparent cost details based on volume and chosen materials' },
            { label: 'Workshop Production', desc: 'The welding and assembly process is carried out in our workshop by professional experts' },
            { label: 'Installation', desc: 'Finishing and installation at the customer site with neatness and work area cleaning' },
        ],
        contactCompany: 'Workshop', contactContact: 'Contact Us', contactFollow: 'Portfolio',
    },
    ar: {
        metaTitle: 'من نحن | مانديري ستيل بيكاسي',
        metaDesc: 'مانديري ستيل بيكاسي - خدمات لحام موثوقة منذ عام 1999. متخصصون في المظلات والأسوار والتعريشات والمنشآت الفولاذية في بيكاسي.',
        eyebrow: 'من نحن',
        heroDesc: 'مانديري ستيل (Mandiri Steel) هي ورشة لحام احترافية في بيكاسي تخدم احتياجات إنشاءات الحديد والستانلس ستيل لأكثر من 25 عامًا. نحن ملتزمون بتقديم عمل متين وجمالي وعالي الجودة لكل من عملائنا.',
        sourcedTitle: 'أكثر من 25 عامًا من الخبرة',
        sourcedDesc: 'تأسست مانديري ستيل في عام 1999 على يد السيد مامان توها، ونمت لتصبح واحدة من أكثر ورش اللحام موثوقية في منطقة بيكاسي. بدأنا رحلتنا من ورشة صغيرة وقمنا الآن بمعالجة آلاف المشاريع من مظلات سكنية إلى منشآت فولاذية للمصانع الكبيرة.',
        diversityTitle: 'خدماتنا المميزة',
        diversitySubtitle: 'حلول كاملة لاحتياجات مبناك الخارجية والداخلية',
        regions: [
            { name: 'مظلة بسيطة', desc: 'تصنيع مظلات بخيارات سقف متنوعة مثل الديرون، وسبانديك، وبولي كربونات بإطارات حديدية متينة.' },
            { name: 'سياج وبوابة', desc: 'خدمات الأسوار البسيطة، والأسوار الحديد المشغول الكلاسيكية، إلى الأسوار الستانلس ستيل بتصاميم مخصصة.' },
            { name: 'تعريشة نافذة', desc: 'أمن النوافذ بزخارف متنوعة توفر أمانًا إضافيًا دون المساس بجمال المنزل.' },
            { name: 'درابزين درج', desc: 'درابزين السلالم والبلكونات بمزيج من مواد الحديد أو الخشب أو الستانلس ستيل لتصميم داخلي أنيق.' },
            { name: 'إنشاءات فولاذية', desc: 'أعمال هيكلية باستخدام فولاذ WF أو H-Beam للمستودعات أو المصانع أو ملاعب كرة القدم أو الميزانين المنزلي.' },
            { name: 'خدمة وإصلاح', desc: 'خدمات إصلاح وإعادة طلاء لمنتجات اللحام القديمة الخاصة بك لجعلها قوية مرة أخرى وتبدو كأنها جديدة.' },
        ],
        journeyEyebrow: 'الجودة والنزاهة',
        journeyHeading: ['نتائج عمل متينة', 'ورشة عمل مباشرة', 'التسعير'],
        journeyDesc: 'في مانديري ستيل، يتم العمل على كل وصلة لحام بعناية. نحن نضمن أن كل مادة مستخدمة تطابق المواصفات المتفق عليها. الصدق في سمك الحديد وجودة الطلاء المضاد للصدأ هو مفتاح ثقة عملائنا لعقود.',
        processTitle: 'عملية عملنا',
        processSubtitle: 'سير عمل احترافي لضمان التسليم في الوقت المحدد ونتائج عالية الجودة',
        steps: [
            { label: 'معاينة واستشارة', desc: 'فريقنا يزور الموقع للقياس ومناقشة التصميم المطلوب' },
            { label: 'عرض سعر', desc: 'نحن نقدم تفاصيل تكلفة شفافة بناءً على الحجم والمواد المختارة' },
            { label: 'إنتاج الورشة', desc: 'تتم عملية اللحام والتجميع في ورشتنا على يد خبراء محترفين' },
            { label: 'تركيب', desc: 'التشطيب والتركيب في موقع العميل مع الترتيب وتنظيف منطقة العمل' },
        ],
        contactCompany: 'الورشة', contactContact: 'اتصل بنا', contactFollow: 'المعرض',
    },
    zh: {
        metaTitle: '关于我们 | 勿加泗 Mandiri Steel',
        metaDesc: '勿加泗 Mandiri Steel - 自 1999 年以来值得信赖的焊接服务。勿加泗雨棚、围栏、护栏和钢结构专家。',
        eyebrow: '关于我们',
        heroDesc: 'Mandiri Steel 是一家位于勿加泗的专业焊接工场，服务钢铁和不锈钢建筑需求超过 25 年。我们致力于为每一位客户提供坚固、美观且高质量的作品。',
        sourcedTitle: '超过 25 年的经验',
        sourcedDesc: 'Mandiri Steel 由 Maman Toha 先生于 1999 年创立，已发展成为勿加泗地区最受信任的焊接工场之一。我们从一个小工场开始，现在已经处理了数千个项目，从住宅雨棚到大型工厂钢结构。',
        diversityTitle: '我们的特色服务',
        diversitySubtitle: '为您建筑的外部和内部需求提供完整的解决方案',
        regions: [
            { name: '简约雨棚', desc: '采用坚固铁架，提供 Alderon、钢板和聚碳酸酯等多种顶面选择的雨棚制造。' },
            { name: '围栏与大门', desc: '简约围栏、经典锻铁围栏到不锈钢围栏的定制设计服务。' },
            { name: '窗户护栏', desc: '各种花型的窗户安全护栏，在提供额外安全的同时不影响家居美观。' },
            { name: '楼梯扶手', desc: '结合铁、木或不锈钢材质的楼梯和阳台扶手，打造优雅的室内空间。' },
            { name: '钢结构', desc: '为仓库、工厂、五人制足球场或家庭阁楼提供 WF 或 H 型钢结构工程。' },
            { name: '维修服务', desc: '为您旧有的焊接产品提供维修和重新喷漆服务，使其恢复坚固，焕然一新。' },
        ],
        journeyEyebrow: '品质与诚信',
        journeyHeading: ['坚固的工作成果', '工厂直营', '定价'],
        journeyDesc: '在 Mandiri Steel，每一个焊接接头都经过精心加工。我们确保使用的每种材料都符合约定的规格。对钢铁厚度和防锈漆质量的诚实是我们几十年来赢得客户信任的关键。',
        processTitle: '我们的工作流程',
        processSubtitle: '专业的流程确保及时交付和优质结果',
        steps: [
            { label: '测量与咨询', desc: '我们的团队上门进行测量并讨论所需的设计' },
            { label: '价格报价', desc: '我们根据工程量和所选材料提供透明的成本详情' },
            { label: '工厂生产', desc: '焊接和组装过程由专业专家在我们的工场进行' },
            { label: '安装', desc: '在客户现场进行精加工和安装，并清理工作区域' },
        ],
        contactCompany: '工场', contactContact: '联系我们', contactFollow: '案例展示',
    },
    ja: {
        metaTitle: '私たちについて | ブカシ Mandiri Steel',
        metaDesc: 'ブカシ Mandiri Steel - 1999年以来の信頼される溶接サービス。ブカシでのキャノピー、フェンス、格子、鉄骨構造の専門家。',
        eyebrow: '私たちについて',
        heroDesc: 'Mandiri Steel は、25年以上にわたり鉄およびステンレス鋼의 建築ニーズに応えてきたブカシのプロフェッショナルな溶接ワークショップです。私たちは、すべてのお客様に頑丈で美しく、高品質な作品を提供することにコミットしています。',
        sourcedTitle: '25年以上の経験',
        sourcedDesc: '1999年にママン・トハ氏によって設立された Mandiri Steel は、ブカシ地域で最も信頼される溶接ワークショップの一つに成長しました。小さなワークショップから始まり、現在では住宅用キャノピーから大規模工場の鉄骨構造まで、数千のプロジェクトを手掛けています。',
        diversityTitle: '主なサービス',
        diversitySubtitle: '建物のエクステリアおよびインテリアのニーズに応える完全なソリューション',
        regions: [
            { name: 'シンプルキャノピー', desc: '頑丈な鉄製フレームを使用した、アルデロン、スパンデック、ポリカーボネートなどの多様な屋根材のキャノピー製作。' },
            { name: 'フェンス・門扉', desc: 'シンプルフェンス、クラシックな錬鉄製フェンスからステンレス製フェンスまでのカスタムデザインサービス。' },
            { name: '窓格子', desc: '住まいの美しさを損なうことなく、追加の安全性を提供する多様なモチーフの窓格子。' },
            { name: '階段手すり', desc: 'エレガントなインテリアのための、鉄、木、またはステンレス素材を組み合わせた階段およびバルコニーの手すり。' },
            { name: '鉄骨構造', desc: '倉庫、工場、フットサルコート、または住宅用ロフトのためのWFまたはH鋼を使用した構造工事。' },
            { name: '修理・メンテナンス', desc: '古い溶接製品を再び頑丈にし、新品のように見せるための修理および再塗装サービス。' },
        ],
        journeyEyebrow: '品質と誠実さ',
        journeyHeading: ['頑丈な施工結果', 'ワークショップ直販', '価格設定'],
        journeyDesc: 'Mandiri Steel では、すべての溶接箇所が丁寧に加工されています。使用されるすべての材料が合意された仕様と一致することを保証します。鉄の厚さと防錆塗料の品質に対する誠実さが、数十年にわたるお客様の信頼の鍵です。',
        processTitle: '施工プロセス',
        processSubtitle: 'タイムリーな納品と高品質な結果を保証するためのプロフェッショナルなワークフロー',
        steps: [
            { label: '調査・相談', desc: '当社のチームが現場を訪問し、測定と希望のデザインについての相談を行います' },
            { label: '見積もり', desc: '出来高と選択された材料に基づいて、透明性のある費用詳細を提供します' },
            { label: '製作', desc: '溶接および組み立て工程は、当社のワークショップでプロの専門家によって行われます' },
            { label: '設置', desc: '現場での仕上げと設置を行い、作業エリアの清掃を徹底します' },
        ],
        contactCompany: '工房', contactContact: 'お問い合わせ', contactFollow: '実績紹介',
    },
    es: {
        metaTitle: 'Sobre Nosotros | Mandiri Steel Bekasi',
        metaDesc: 'Mandiri Steel Bekasi - Servicios de soldadura de confianza desde 1999. Especialistas en marquesinas, cercas, rejas y estructuras de acero en Bekasi.',
        eyebrow: 'Sobre Nosotros',
        heroDesc: 'Mandiri Steel es un taller de soldadura profesional en Bekasi que ha atendido necesidades de construcción de hierro y acero inoxidable durante más de 25 años. Estamos comprometidos a brindar un trabajo sólido, estético y de alta calidad para cada uno de nuestros clientes.',
        sourcedTitle: 'MÁS DE 25 AÑOS DE EXPERIENCIA',
        sourcedDesc: 'Fundado desde 1999 por el Sr. Maman Toha, Mandiri Steel ha crecido hasta convertirse en uno de los talleres de soldadura más confiables en el área de Bekasi. Comenzamos nuestro viaje desde un pequeño taller y ahora hemos manejado miles de proyectos, desde marquesinas residenciales hasta grandes estructuras de acero para fábricas.',
        diversityTitle: 'NUESTROS SERVICIOS DESTACADOS',
        diversitySubtitle: 'Soluciones completas para las necesidades exteriores e interiores de su edificio',
        regions: [
            { name: 'Marquesina Minimalista', desc: 'Fabricación de marquesinas con diversas opciones de techado como Alderon, Spandek y Policarbonato con marcos de hierro robustos.' },
            { name: 'Cerca y Portón', desc: 'Servicios para cercas minimalistas, cercas de hierro forjado clásicas, hasta cercas de acero inoxidable con diseños personalizados.' },
            { name: 'Reja de Ventana', desc: 'Seguridad para ventanas con diversos motivos que brindan seguridad adicional sin comprometer la belleza del hogar.' },
            { name: 'Pasamanos de Escalera', desc: 'Barandillas de escaleras y balcones con una combinación de materiales de hierro, madera o acero inoxidable para un interior elegante.' },
            { name: 'Estructura de Acero', desc: 'Trabajo estructural con acero WF o H-Beam para almacenes, fábricas, canchas de fútbol o entrepisos domésticos.' },
            { name: 'Servicio y Reparación', desc: 'Servicios de reparación y repintado para sus productos de soldadura antiguos para que vuelvan a ser resistentes y luzcan como nuevos.' },
        ],
        journeyEyebrow: 'Calidad e Integridad',
        journeyHeading: ['RESULTADOS SÓLIDOS', 'TALLER DIRECTO', 'PRECIOS'],
        journeyDesc: 'En Mandiri Steel, cada unión de soldadura se trabaja cuidadosamente. Nos aseguramos de que cada material utilizado coincida con las especificaciones acordadas. La honestidad en el grosor del hierro y la calidad de la pintura antioxidante es la clave de la confianza de nuestros clientes durante décadas.',
        processTitle: 'NUESTRO PROCESO DE TRABAJO',
        processSubtitle: 'Flujo de trabajo profesional para garantizar la entrega oportuna y resultados de calidad',
        steps: [
            { label: 'Levantamiento y Consulta', desc: 'Nuestro equipo visita el lugar para medir y discutir el diseño deseado' },
            { label: 'Cotización de Precio', desc: 'Brindamos detalles de costos transparentes basados en el volumen y los materiales elegidos' },
            { label: 'Producción en Taller', desc: 'El proceso de soldadura y ensamblaje se realiza en nuestro taller por expertos profesionales' },
            { label: 'Instalación', desc: 'Acabado e instalación en el sitio del cliente con pulcritud y limpieza del área de trabajo' },
        ],
        contactCompany: 'Taller', contactContact: 'Contáctenos', contactFollow: 'Portafolio',
    },
    fr: {
        metaTitle: 'À Propos de Nous | Mandiri Steel Bekasi',
        metaDesc: 'Mandiri Steel Bekasi - Services de soudure de confiance depuis 1999. Spécialistes des auvents, clôtures, grilles et structures en acier à Bekasi.',
        eyebrow: 'À Propos de Nous',
        heroDesc: 'Mandiri Steel est un atelier de soudure professionnel à Bekasi qui répond aux besoins de construction en fer et en acier inoxydable depuis plus de 25 ans. Nous nous engageons à fournir un travail robuste, esthétique et de haute qualité pour chacun de nos clients.',
        sourcedTitle: 'PLUS DE 25 ANS D\'EXPÉRIENCE',
        sourcedDesc: 'Fondé en 1999 par M. Maman Toha, Mandiri Steel est devenu l\'un des ateliers de soudure les plus fiables de la région de Bekasi. Nous avons commencé notre parcours dans un petit atelier et avons maintenant réalisé des milliers de projets, des auvents résidentiels aux grandes structures métalliques d\'usines.',
        diversityTitle: 'NOS SERVICES VEDETTES',
        diversitySubtitle: 'Solutions complètes pour les besoins extérieurs et intérieurs de votre bâtiment',
        regions: [
            { name: 'Auvent Minimaliste', desc: 'Fabrication d\'auvents avec diverses options de toiture comme l\'Alderon, le Spandek et le Polycarbonate avec des cadres en fer robustes.' },
            { name: 'Clôture et Portail', desc: 'Services pour clôtures minimalistes, clôtures classiques en fer forgé, jusqu\'aux clôtures en acier inoxydable avec des designs sur mesure.' },
            { name: 'Grille de Fenêtre', desc: 'Sécurité des fenêtres avec divers motifs offrant une sécurité supplémentaire sans compromettre la beauté de la maison.' },
            { name: 'Garde-corps d\'Escalier', desc: 'Rampes d\'escaliers et de balcons avec una combinaison de fer, de bois ou d\'acier inoxydable pour un intérieur élégant.' },
            { name: 'Structure en Acier', desc: 'Travaux structurels utilisant de l\'acier WF ou H-Beam pour les entrepôts, usines, terrains de futsal ou mezzanines domestiques.' },
            { name: 'Service et Réparation', desc: 'Services de réparation et de remise en peinture de vos anciens produits de soudure pour les rendre à nouveau solides et comme neufs.' },
        ],
        journeyEyebrow: 'Qualité et Intégrité',
        journeyHeading: ['RÉSULTATS ROBUSTES', 'ATELIER DIRECT', 'TARIFICATION'],
        journeyDesc: 'Chez Mandiri Steel, chaque joint de soudure est soigneusement travaillé. Nous veillons à ce que chaque matériau utilisé corresponde aux spécifications convenues. L\'honnêteté sur l\'épaisseur du fer et la qualité de la peinture antirouille est la clé de la confiance de nos clients depuis des décennies.',
        processTitle: 'NOTRE PROCESSUS DE TRAVAIL',
        processSubtitle: 'Flux de travail professionnel pour garantir une livraison rapide et des résultats de qualité',
        steps: [
            { label: 'Relevé et Consultation', desc: 'Notre équipe se rend sur place pour les mesures et discuter du design souhaité' },
            { label: 'Devis', desc: 'Nous fournissons des détails de coûts transparents basés sur le volume et les matériaux choisis' },
            { label: 'Production en Atelier', desc: 'Le processus de soudure et d\'assemblage est réalisé dans notre atelier par des experts professionnels' },
            { label: 'Installation', desc: 'Finition et installation chez le client avec soin et nettoyage de la zone de travail' },
        ],
        contactCompany: 'Atelier', contactContact: 'Contactez-nous', contactFollow: 'Portfolio',
    },
    ko: {
        metaTitle: '회사 소개 | 브카시 Mandiri Steel',
        metaDesc: '브카시 Mandiri Steel - 1999년부터 신뢰받는 용접 서비스. 브카시 내 캐노피, 펜스, 방범창 및 강구조물 전문가.',
        eyebrow: '회사 소개',
        heroDesc: 'Mandiri Steel은 25년 이상 철제 및 스테인리스 스틸 건축 수요를 충족해 온 브카시의 전문 용접 워크숍입니다. 우리는 모든 고객에게 견고하고 심미적이며 고품질의 작업물을 제공하기 위해 최선을 다하고 있습니다.',
        sourcedTitle: '25년 이상의 경험',
        sourcedDesc: '1999년 마만 토하(Maman Toha) 씨에 의해 설립된 Mandiri Steel은 브카시 지역에서 가장 신뢰받는 용접 워크숍 중 하나로 성장했습니다. 작은 작업실에서 시작하여 현재는 주거용 캐노피부터 대형 공장 강구조물에 이르기까지 수천 개의 프로젝트를 수행했습니다.',
        diversityTitle: '주요 서비스',
        diversitySubtitle: '건물 외부 및 내부 요구 사항에 대한 완벽한 솔루션',
        regions: [
            { name: '미니멀 캐노피', desc: '견고한 철제 프레임과 알데론, 스판덱, 폴리카보네이트 등 다양한 지붕 옵션을 갖춘 캐노피 제작.' },
            { name: '펜스 및 대문', desc: '미니멀 펜스, 클래식 단조 철제 펜스부터 맞춤형 디자인의 스테인리스 스틸 펜스까지 제공.' },
            { name: '창문 방범창', desc: '주택의 아름다움을 해치지 않으면서도 추가적인 보안을 제공하는 다양한 문양의 방범창.' },
            { name: '계단 난간', desc: '철제, 목재 또는 스테인리스 소재를 결합하여 우아한 인테리어를 완성하는 계단 및 발코니 난간.' },
            { name: '강구조물', desc: '창고, 공장, 풋살 경기장 또는 주택용 복층을 위한 WF 또는 H빔 구조물 공사.' },
            { name: '수리 및 유지보수', desc: '오래된 용접 제품을 다시 튼튼하고 새것처럼 보이게 하는 수리 및 재도장 서비스.' },
        ],
        journeyEyebrow: '품질과 정직',
        journeyHeading: ['견고한 시공 결과', '워크숍 직접 거래', '합리적 가격'],
        journeyDesc: 'Mandiri Steel에서는 모든 용접 연결 부위를 정성껏 작업합니다. 사용되는 모든 자재가 합의된 사양과 일치하는지 확인합니다. 철제 두께와 방청 페인트 품질에 대한 정직함은 수십 년간 고객의 신뢰를 받아온 비결입니다.',
        processTitle: '작업 프로세스',
        processSubtitle: '적기 납품과 고품질 결과를 보장하기 위한 전문적인 워크플로우',
        steps: [
            { label: '실측 및 상담', desc: '당사 팀이 현장을 방문하여 실측하고 원하는 디자인에 대해 논의합니다' },
            { label: '견적 산출', desc: '물량과 선택한 자재를 바탕으로 투명한 비용 상세 정보를 제공합니다' },
            { label: '워크숍 제작', desc: '용접 및 조립 공정은 워크숍에서 숙련된 전문가에 의해 진행됩니다' },
            { label: '설치', desc: '현장 마감 및 설치를 진행하며 작업 구역을 깔끔하게 정리합니다' },
        ],
        contactCompany: '공방', contactContact: '문의하기', contactFollow: '포트폴리오',
    },
}

const About: React.FC = () => {
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
        detectLanguageFromIP().then(ipLang => { if (ipLang && !getStoredLanguage()) setLanguage(ipLang) })
    }, [])

    const t = ABOUT_TRANSLATIONS[language] ?? ABOUT_TRANSLATIONS.id

    return (
        <div className="mandiri-about">
            <Helmet>
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDesc} />
                <link rel="canonical" href="https://lasbekasi.com/about" />
            </Helmet>

            <Header />

            {/* HERO */}
            <section className="mandiri-about__hero">
                <div className="mandiri-about__hero-inner">
                    <span className="mandiri-about__hero-eyebrow">{t.eyebrow}</span>
                    <h1 className="mandiri-about__hero-title">Bengkel Las<br />Mandiri</h1>
                    <p className="mandiri-about__hero-desc">{t.heroDesc}</p>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="mandiri-about__sourcing">
                <div className="mandiri-about__sourcing-inner">
                    <div className="mandiri-about__sourcing-image">
                        <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" alt="Mandiri Steel Workshop" loading="lazy" />
                    </div>
                    <div className="mandiri-about__sourcing-text">
                        <h2>{t.sourcedTitle}</h2>
                        <p>{t.sourcedDesc}</p>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="mandiri-about__diversity">
                <div className="mandiri-about__diversity-inner">
                    <h2 className="mandiri-about__diversity-title">{t.diversityTitle}</h2>
                    <p className="mandiri-about__diversity-subtitle">{t.diversitySubtitle}</p>
                    <div className="mandiri-about__diversity-grid">
                        {t.regions.map((region) => (
                            <div key={region.name} className="mandiri-about__diversity-card">
                                <h3>{region.name}</h3>
                                <p>{region.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mandiri-about__image-row">
                        <img src="https://images.unsplash.com/photo-1628744448839-497746416629?w=600&q=80" alt="Kanopi Minimalis" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1505322033502-1f4385692e6a?w=600&q=80" alt="Pagar Besi Bekasi" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80" alt="Konstruksi Baja WF" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* OUR JOURNEY */}
            <section className="mandiri-about__journey">
                <div className="mandiri-about__journey-bg">
                    <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200" alt="Mandiri Steel Bekasi Experience" loading="lazy" />
                </div>
                <div className="mandiri-about__journey-overlay" />
                <div className="mandiri-about__journey-inner">
                    <div>
                        <span className="mandiri-about__journey-title">{t.journeyEyebrow}</span>
                        <h2 className="mandiri-about__journey-heading">
                            {t.journeyHeading[0]}<br />{t.journeyHeading[1]}<br />{t.journeyHeading[2]}
                        </h2>
                    </div>
                    <div>
                        <p className="mandiri-about__journey-desc">{t.journeyDesc}</p>
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="mandiri-about__process">
                <div className="mandiri-about__process-inner">
                    <h2 className="mandiri-about__process-title">{t.processTitle}</h2>
                    <p className="mandiri-about__process-subtitle">{t.processSubtitle}</p>
                    <div className="mandiri-about__process-grid">
                        {t.steps.map((step, i) => (
                            <div key={i} className="mandiri-about__process-step">
                                <div className="mandiri-about__process-step-number">{i + 1}</div>
                                <h4>{step.label}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="mandiri-about__contact">
                <div className="mandiri-about__contact-inner">
                    <div className="mandiri-about__contact-col">
                        <h4>{t.contactCompany}</h4>
                        <p>Bengkel Las Mandiri</p>
                        <p>Bekasi, Indonesia</p>
                    </div>
                    <div className="mandiri-about__contact-col">
                        <h4>{t.contactContact}</h4>
                        <a href="mailto:info@lasbekasi.com">info@lasbekasi.com</a>
                        <a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer">+62 852-1207-8467 (Bapak Maman)</a>
                    </div>
                    <div className="mandiri-about__contact-col">
                        <h4>{t.contactFollow}</h4>
                        <div className="mandiri-about__contact-social">
                            <a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="mailto:info@lasbekasi.com">Email</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
