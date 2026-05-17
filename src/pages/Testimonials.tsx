import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { INITIAL_TESTIMONIALS, type Testimonial } from '../data/testimonials'
import { Star, MessageSquare, Plus, Trash2, Send, CheckCircle } from 'lucide-react'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { useLanguage } from '../utils/languageContext'
import './Testimonials.css'

const TESTIMONIAL_TRANSLATIONS: Record<LanguageCode, {
    metaTitle: string
    metaDesc: string
    heroTitle: string
    heroDesc: string
    formHeading: string
    formName: string
    formProject: string
    formRating: string
    formComment: string
    formSubmit: string
    formSuccess: string
    programHeading: string
    programBody: string
    programButton: string
    programHint: string
    responseTitle: string
    projectOptions: Record<string, string>
}> = {
    id: {
        metaTitle: 'Testimoni Pelanggan | Bengkel Las Mandiri Bekasi',
        metaDesc: 'Ulasan asli pelanggan Bengkel Las Mandiri (Mandiri Steel). Kepuasan pemasangan kanopi, pagar, teralis, dan konstruksi baja di Bekasi.',
        heroTitle: 'Testimoni Pelanggan',
        heroDesc: 'Ulasan asli dan pengalaman langsung dari pelanggan yang telah mempercayakan pengerjaan konstruksi besi dan baja mereka di Bengkel Las Mandiri.',
        formHeading: 'Bagikan Pengalaman Anda',
        formName: 'Nama Lengkap',
        formProject: 'Jenis Pekerjaan / Proyek',
        formRating: 'Rating Ulasan',
        formComment: 'Ulasan / Komentar Anda',
        formSubmit: 'Kirim Ulasan',
        formSuccess: '✨ Terima kasih! Ulasan Anda telah berhasil disimpan di website ini.',
        programHeading: 'Komitmen Kepuasan Bintang 5 kami',
        programBody: 'Di Bengkel Las Mandiri, kepuasan Anda adalah prioritas utama Bapak Maman Toha dan tim. Kami memiliki komitmen tinggi untuk mengumpulkan review bintang 5 secara agresif dari setiap pelanggan setelah menyelesaikan proyek pemasangan kanopi, pagar besi, teralis, maupun konstruksi baja WF.',
        programButton: 'Tulis Review di Google Maps kami',
        programHint: 'Setiap feedback membantu bengkel kami di Bekasi terus bertumbuh dan menjaga standar material SNI terbaik.',
        responseTitle: 'Tanggapan Bapak Maman Toha (Owner):',
        projectOptions: {
            kanopi: 'Pemasangan Kanopi Alderon',
            pagar: 'Pagar & Pintu Besi',
            teralis: 'Teralis Pengaman Jendela',
            railing: 'Railing Tangga / Balkon',
            baja: 'Konstruksi Baja WF',
            lainnya: 'Fabrikasi Besi Lainnya'
        }
    },
    en: {
        metaTitle: 'Customer Testimonials | Mandiri Steel Bekasi',
        metaDesc: 'Genuine reviews from Mandiri Steel customers. Satisfaction on canopy, fence, trellis, and steel construction installations in Bekasi.',
        heroTitle: 'Customer Testimonials',
        heroDesc: 'Genuine reviews and direct experiences from clients who have trusted their steel and iron constructions with Mandiri Steel.',
        formHeading: 'Share Your Experience',
        formName: 'Full Name',
        formProject: 'Project / Service Type',
        formRating: 'Review Rating',
        formComment: 'Your Review / Comment',
        formSubmit: 'Submit Review',
        formSuccess: '✨ Thank you! Your review has been saved successfully on this site.',
        programHeading: 'Our 5-Star Satisfaction Commitment',
        programBody: 'At Mandiri Steel, your satisfaction is the primary goal of Mr. Maman Toha and the team. We are highly committed to gathering 5-star Google Maps reviews after completing every canopy, iron fence, trellis, or structural steel project.',
        programButton: 'Write Review on our Google Maps',
        programHint: 'Every feedback helps our workshop in Bekasi grow and maintain the best SNI material standards.',
        responseTitle: 'Response from Mr. Maman Toha (Owner):',
        projectOptions: {
            kanopi: 'Alderon Canopy Installation',
            pagar: 'Iron Fence & Gate',
            teralis: 'Window Security Trellis',
            railing: 'Stair / Balcony Railing',
            baja: 'WF Steel Construction',
            lainnya: 'Other Iron Fabrications'
        }
    },
    ar: {
        metaTitle: 'آراء العملاء | مانديري ستيل بيكاسي',
        metaDesc: 'آراء حقيقية من عملاء ورشة مانديري ستيل للحام في بيكاسي. مظلات وأبواب وتريلات وهياكل حديدية.',
        heroTitle: 'آراء العملاء',
        heroDesc: 'الآراء الحقيقية والخبرات المباشرة من العملاء الذين وثقوا في مانديري ستيل لتنفيذ إنشاءاتهم الحديدية.',
        formHeading: 'شارك تجربتك معنا',
        formName: 'الاسم الكامل',
        formProject: 'نوع المشروع / الخدمة',
        formRating: 'التقييم بالنجوم',
        formComment: 'رأيك / تعليقك',
        formSubmit: 'إرسال التقييم',
        formSuccess: '✨ شكرًا لك! تم حفظ تقييمك بنجاح على الموقع.',
        programHeading: 'التزامنا برضا العملاء 5 نجوم',
        programBody: 'في مانديري ستيل، رضاكم هو الأولوية القصوى للسيد مامان توها وفريقه. نحن ملتزمون بجمع تقييمات 5 نجوم على خرائط جوجل بعد إكمال كل مشروع مظلات أو أسوار أو هياكل فولاذية.',
        programButton: 'اكتب تقييمًا على خرائط جوجل الخاصة بنا',
        programHint: 'كل ملاحظة تساعد ورشتنا في بيكاسي على النمو المستمر والحفاظ على أفضل المعايير.',
        responseTitle: 'رد السيد مامان توها (المالك):',
        projectOptions: {
            kanopi: 'تركيب مظلات الديرون',
            pagar: 'سياج وبوابات حديدية',
            teralis: 'حديد حماية النوافذ',
            railing: 'درابزين الدرج والشبابيك',
            baja: 'هياكل فولاذية ثقيلة',
            lainnya: 'أعمال حدادة أخرى'
        }
    },
    zh: {
        metaTitle: '客户评价 | 万迪里钢铁勿加泗',
        metaDesc: '万迪里钢铁厂客户的真实反馈。勿加泗遮阳棚、围栏、防盗网及钢结构工程质量评价。',
        heroTitle: '客户评价',
        heroDesc: '来自信赖万迪里钢铁（Mandiri Steel）铁艺和钢结构工程的客户的真实评价与现场体验。',
        formHeading: '分享您的体验',
        formName: '您的姓名',
        formProject: '工程 / 服务项目',
        formRating: '星级评分',
        formComment: '您的反馈与评价',
        formSubmit: '提交评价',
        formSuccess: '✨ 谢谢！您的评价已成功保存在网站上。',
        programHeading: '我们五星级满意度承诺',
        programBody: '在万迪里钢铁，您的满意是Maman Toha先生和团队的首要目标。我们承诺在每次完成遮阳棚、铁艺大门、防盗窗或重型钢结构工程后，积极向客户收集谷歌地图的五星好评。',
        programButton: '在我们的谷歌地图上写下评价',
        programHint: '您的每一次反馈都有助于我们在勿加泗的工厂不断成长并保持最高标准。',
        responseTitle: '所有者Maman Toha先生的回复：',
        projectOptions: {
            kanopi: '安装防雨遮阳棚',
            pagar: '铁艺围栏与大门',
            teralis: '防盗窗铁网安装',
            railing: '楼梯及阳台扶手栏杆',
            baja: 'WF钢结构厂房建设',
            lainnya: '其他定制铁艺制作'
        }
    },
    ja: {
        metaTitle: 'お客様の声 | マンディリ・スチール・ブカシ',
        metaDesc: 'マンディリ・スチールのお客様による本物のレビュー。ブカシでのキャノピー、フェンス、鉄格子の施工満足度。',
        heroTitle: 'お客様の声',
        heroDesc: 'マンディリ・スチールに鉄骨構造や溶接工事をご依頼いただいたお客様からの、本物の評価とダイレクトな体験談です。',
        formHeading: 'あなたの体験を共有する',
        formName: 'フルネーム',
        formProject: 'プロジェクトの種類',
        formRating: '評価星数',
        formComment: 'レビュー内容',
        formSubmit: '送信する',
        formSuccess: '✨ レビューの送信が完了し、サイト上に保存されました。',
        programHeading: '私たちの星5つへのこだわり',
        programBody: 'マンディリ・スチールでは、お客様の満足こそがママン・トハ代表とチームの最大の目標です。キャノピー、門扉、鉄格子、鉄骨構造の各プロジェクト完了後、星5つのGoogleマップ評価を積極的に収集しています。',
        programButton: 'Googleマップで評価を投稿する',
        programHint: '皆様のフィードバックが、ブカシの工場の成長と最高水準の維持に繋がっています。',
        responseTitle: '代表ママン・トハからの返信:',
        projectOptions: {
            kanopi: 'キャノピー取り付け工事',
            pagar: 'フェンスと門扉の制作',
            teralis: '窓の防犯用鉄格子',
            railing: '階段・バルコニー手すり',
            baja: 'WF鉄骨フレーム構造',
            lainnya: 'その他カスタム鉄製金物'
        }
    },
    es: {
        metaTitle: 'Testimonios de Clientes | Mandiri Steel Bekasi',
        metaDesc: 'Reseñas genuinas de clientes de Mandiri Steel. Satisfacción en la instalación de techos, rejas y estructuras de acero en Bekasi.',
        heroTitle: 'Testimonios de Clientes',
        heroDesc: 'Reseñas auténticas y experiencias directas de clientes que han confiado sus construcciones metálicas con Mandiri Steel.',
        formHeading: 'Comparte Tu Experiencia',
        formName: 'Nombre Completo',
        formProject: 'Tipo de Proyecto / Servicio',
        formRating: 'Calificación',
        formComment: 'Tu Comentario / Reseña',
        formSubmit: 'Enviar Reseña',
        formSuccess: '✨ ¡Gracias! Tu reseña se ha guardado correctamente en este sitio web.',
        programHeading: 'Nuestro Compromiso de Satisfacción 5 Estrellas',
        programBody: 'En Mandiri Steel, tu satisfacción es la máxima prioridad del Sr. Maman Toha y todo el equipo. Tenemos el fuerte compromiso de recopilar activamente calificaciones de 5 estrellas en Google Maps tras finalizar cada canopy, portón o estructura.',
        programButton: 'Escribe una Reseña en Google Maps',
        programHint: 'Cada comentario nos ayuda a crecer en Bekasi y a mantener la calidad de materiales estándar.',
        responseTitle: 'Respuesta del Sr. Maman Toha (Dueño):',
        projectOptions: {
            kanopi: 'Instalación de Techos de Alderon',
            pagar: 'Portones y Rejas de Hierro',
            teralis: 'Protectores de Herrería',
            railing: 'Barandales para Escalera',
            baja: 'Estructuras de Acero WF',
            lainnya: 'Otros Trabajos de Herrería'
        }
    },
    fr: {
        metaTitle: 'Témoignages Clients | Mandiri Steel Bekasi',
        metaDesc: 'Avis authentiques des clients de Mandiri Steel. Satisfaction concernant les verrières, barrières et constructions métalliques à Bekasi.',
        heroTitle: 'Témoignages Clients',
        heroDesc: 'Avis réels et retours d\'expérience de clients ayant confié leurs projets de serrurerie et charpente métallique à Mandiri Steel.',
        formHeading: 'Partagez Votre Expérience',
        formName: 'Nom Complet',
        formProject: 'Type de Projet',
        formRating: 'Note d\'Évaluation',
        formComment: 'Votre Commentaire',
        formSubmit: 'Envoyer l\'Avis',
        formSuccess: '✨ Merci ! Votre témoignage a bien été publié sur ce site.',
        programHeading: 'Notre Engagement Qualité 5 Étoiles',
        programBody: 'Chez Mandiri Steel, votre satisfaction est la priorité de M. Maman Toha et de son équipe. Nous mettons un point d\'honneur à recueillir des avis 5 étoiles sur Google Maps après l\'installation de pergolas, barrières ou charpentes.',
        programButton: 'Écrire un Avis sur Google Maps',
        programHint: 'Chaque retour nous aide à nous améliorer à Bekasi et à garantir des standards élevés.',
        responseTitle: 'Réponse de M. Maman Toha (Propriétaire) :',
        projectOptions: {
            kanopi: 'Installation d\'Auvents en Alderon',
            pagar: 'Portails & Clôtures en Fer',
            teralis: 'Grilles de Défense Fenêtre',
            railing: 'Garde-Corps Escalier / Balcon',
            baja: 'Charpente Métallique WF',
            lainnya: 'Autres Travaux Métalliques'
        }
    },
    ko: {
        metaTitle: '고객 이용 후기 | 만디리 스틸 베카시',
        metaDesc: '만디리 스틸(Mandiri Steel)의 실제 고객 후기. 캐노피, 대문, 방범창, 철골 구조 설치 만족도 평가.',
        heroTitle: '고객 이용 후기',
        heroDesc: '만디리 스틸의 오랜 노하우와 철제 및 강철 구조물 제작을 의뢰한 고객님들의 생생한 후기와 솔직한 인터뷰입니다.',
        formHeading: '이용 경험 공유하기',
        formName: '이름(실명)',
        formProject: '제작 및 의뢰 종류',
        formRating: '만족도 평가',
        formComment: '소중한 의견을 작성해 주세요',
        formSubmit: '후기 등록',
        formSuccess: '✨ 감사합니다! 작성하신 고객 후기가 성공적으로 등록되었습니다.',
        programHeading: '별점 5점 만족 보증 프로그램',
        programBody: '만디리 스틸은 마만 토하 대표와 전 직원이 철저한 품질 관리를 최우선으로 합니다. 캐노피, 대문, 발코니 난간, 공장 철골조 등의 모든 작업 후 고객님의 구글 맵스 별점 5점 평가 유치를 위해 적극 소통하고 있습니다.',
        programButton: '구글 맵스 별점 리뷰 작성하기',
        programHint: '고객님의 소중한 한 줄 평은 베카시 대표 용접소의 자부심이자 국가 표준 규격 강재 유지의 힘이 됩니다.',
        responseTitle: '대표 마만 토하(Maman Toha)의 답변:',
        projectOptions: {
            kanopi: '알데론 지붕 캐노피 설치',
            pagar: '미니멀 스타일 철제 대문',
            teralis: '방범창 및 안전망 설치',
            railing: '계단 및 발코니 안전 난간',
            baja: 'WF H형강 중구조물 공사',
            lainnya: '기타 커스텀 철제 주문제작'
        }
    }
}

export default function Testimonials() {
    const { language } = useLanguage()
    const t = TESTIMONIAL_TRANSLATIONS[language] || TESTIMONIAL_TRANSLATIONS.id

    // Testimonials State
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [visitorName, setVisitorName] = useState('')
    const [projectType, setProjectType] = useState('kanopi')
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState('')
    const [hoverRating, setHoverRating] = useState(0)
    const [showSuccess, setShowSuccess] = useState(false)

    // Load initial and visitor testimonials from localStorage on mount
    useEffect(() => {
        const savedVisitorReviews = localStorage.getItem('MANDIRI_visitor_reviews')
        const deletedInitialIds = JSON.parse(localStorage.getItem('MANDIRI_deleted_initial_ids') || '[]')
        
        let visitorList: Testimonial[] = []
        if (savedVisitorReviews) {
            try {
                visitorList = JSON.parse(savedVisitorReviews)
            } catch (e) {
                console.error('Error parsing visitor reviews', e)
            }
        }
        
        const activeInitial = INITIAL_TESTIMONIALS.filter(t => !deletedInitialIds.includes(t.id))
        setTestimonials([...visitorList, ...activeInitial])
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!visitorName.trim() || !comment.trim()) return

        const newReview: Testimonial = {
            id: `visitor-${Date.now()}`,
            name: visitorName,
            projectType: t.projectOptions[projectType] || projectType,
            rating: rating,
            comment: comment,
            date: new Date().toISOString().split('T')[0],
            isVisitorComment: true,
            response: `Terima kasih banyak ${visitorName} atas ulasan bintang ${rating}-nya! Bapak Maman Toha dan segenap tim sangat senang bisa memasang ${t.projectOptions[projectType]} Anda secara rapi. Kami tunggu pesanan berikutnya!`
        }

        const updatedVisitorReviews = [newReview, ...testimonials.filter(t => t.isVisitorComment)]
        localStorage.setItem('MANDIRI_visitor_reviews', JSON.stringify(updatedVisitorReviews))

        setTestimonials([newReview, ...testimonials])
        setVisitorName('')
        setComment('')
        setRating(5)
        setShowSuccess(true)

        // Clear success banner after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000)
    }

    return (
        <div className="testimonials-page">
            <Helmet>
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDesc} />
                <meta property="og:title" content={t.metaTitle} />
                <meta property="og:description" content={t.metaDesc} />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header isIndonesian={language === 'id'} language={language} />

            {/* Premium Page Hero */}
            <section className="testimonials-hero">
                <div className="testimonials-hero__container">
                    <div className="testimonials-hero__eyebrow">REVIEW & KEPUASAN</div>
                    <h1 className="testimonials-hero__title">{t.heroTitle}</h1>
                    <p className="testimonials-hero__desc">{t.heroDesc}</p>
                </div>
            </section>

            <section className="testimonials-main">
                <div className="testimonials-container">
                    
                    {/* Testimonials List (Left Column) */}
                    <div className="testimonials-list-section">
                        {showSuccess && (
                            <div className="success-banner">
                                <CheckCircle size={20} />
                                <span>{t.formSuccess}</span>
                            </div>
                        )}

                        <div className="testimonials-grid">
                            {testimonials.map(item => (
                                <div key={item.id} className={`testimonial-card ${item.isVisitorComment ? 'visitor-highlight' : ''}`}>
                                    <div className="testimonial-card__header">
                                        <div className="testimonial-card__meta">
                                            <h3 className="testimonial-card__author">{item.name}</h3>
                                            <span className="testimonial-card__date">{item.date}</span>
                                        </div>
                                        <div className="testimonial-card__badge">{item.projectType}</div>
                                    </div>

                                    {/* Star Ratings */}
                                    <div className="testimonial-card__stars">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star 
                                                key={idx} 
                                                size={16} 
                                                className={idx < item.rating ? 'star-filled' : 'star-empty'}
                                            />
                                        ))}
                                    </div>

                                    <p className="testimonial-card__comment">"{item.comment}"</p>

                                    {/* Keyword-Rich Owner Response */}
                                    {item.response && (
                                        <div className="testimonial-card__response">
                                            <div className="testimonial-card__response-heading">
                                                <MessageSquare size={14} />
                                                <span>{t.responseTitle}</span>
                                            </div>
                                            <p className="testimonial-card__response-text">{item.response}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Form & Google Maps Program Card (Right Column) */}
                    <aside className="testimonials-sidebar">
                        
                        {/* 1. Google Business Program Card */}
                        <div className="program-card">
                            <div className="program-card__stars">
                                <Star size={24} className="star-filled" />
                                <Star size={24} className="star-filled" />
                                <Star size={24} className="star-filled" />
                                <Star size={24} className="star-filled" />
                                <Star size={24} className="star-filled" />
                            </div>
                            <h2 className="program-card__title">{t.programHeading}</h2>
                            <p className="program-card__body">{t.programBody}</p>
                            <a 
                                href="https://wa.me/6285212078467?text=Halo%20Bapak%20Maman%2C%20saya%20sangat%20puas%20dengan%20pemasangan%20bengkel%20las%20Mandiri%20Steel.%20Berikut%20review%20bintang%205%20kami%21" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="program-card__btn"
                            >
                                <Send size={16} />
                                {t.programButton}
                            </a>
                            <p className="program-card__hint">{t.programHint}</p>
                        </div>

                        {/* 2. Interactive visitor review form */}
                        <div className="review-form-card">
                            <h2 className="review-form-card__title">
                                <Plus size={20} />
                                {t.formHeading}
                            </h2>
                            <form onSubmit={handleSubmit} className="review-form">
                                <div className="form-group">
                                    <label>{t.formName}</label>
                                    <input 
                                        type="text" 
                                        value={visitorName} 
                                        onChange={(e) => setVisitorName(e.target.value)} 
                                        required 
                                        placeholder="Contoh: Bapak Budi"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>{t.formProject}</label>
                                    <select 
                                        value={projectType} 
                                        onChange={(e) => setProjectType(e.target.value)}
                                    >
                                        <option value="kanopi">{t.projectOptions.kanopi}</option>
                                        <option value="pagar">{t.projectOptions.pagar}</option>
                                        <option value="teralis">{t.projectOptions.teralis}</option>
                                        <option value="railing">{t.projectOptions.railing}</option>
                                        <option value="baja">{t.projectOptions.baja}</option>
                                        <option value="lainnya">{t.projectOptions.lainnya}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>{t.formRating}</label>
                                    <div className="star-rating-selector">
                                        {Array.from({ length: 5 }).map((_, idx) => {
                                            const starVal = idx + 1
                                            return (
                                                <Star 
                                                    key={idx}
                                                    size={28}
                                                    className={(hoverRating || rating) >= starVal ? 'star-filled clickable' : 'star-empty clickable'}
                                                    onClick={() => setRating(starVal)}
                                                    onMouseEnter={() => setHoverRating(starVal)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>{t.formComment}</label>
                                    <textarea 
                                        value={comment} 
                                        onChange={(e) => setComment(e.target.value)} 
                                        required 
                                        rows={4} 
                                        placeholder="Tulis ulasan Anda seputar kualitas hasil las kami..."
                                    />
                                </div>

                                <button type="submit" className="submit-review-btn">
                                    {t.formSubmit}
                                </button>
                            </form>
                        </div>
                    </aside>

                </div>
            </section>

            <Footer language={language} />
        </div>
    )
}
