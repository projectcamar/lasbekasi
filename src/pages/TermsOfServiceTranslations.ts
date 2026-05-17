import { type LanguageCode } from '../utils/languageManager'

export const TERMS_TRANSLATIONS: Record<LanguageCode, {
  meta: {
    title: string
    description: string
  }
  hero: {
    title: string
  }
  intro: string
  sections: {
    howToOrder: {
      title: string
      ordering: {
        title: string
        description: string
      }
      service: {
        title: string
        description: string
      }
      production: {
        title: string
        description: string
      }
      support: {
        title: string
        description: string
      }
    }
    payment: {
      title: string
      deposit: {
        title: string
        description: string
      }
      balancePayment: {
        title: string
        description: string
      }
    }
    shipping: {
      title: string
      jabodetabek: {
        title: string
        days: string
      }
      outsideJava: {
        title: string
        days: string
      }
      international: {
        title: string
        days: string
      }
      note1: string
      note2: string
    }
    warranty: {
      title: string
      badge: string
      whatsCovered: {
        title: string
        description: string
      }
      notCovered: {
        title: string
        description: string
      }
      note: {
        title: string
        description: string
      }
    }
    findUs: {
      title: string
      workshopLabel: string
      workHours: string
      languages: string
    }
  }
}> = {
  id: {
    meta: {
      title: 'Syarat dan Ketentuan - Mandiri Steel',
      description: 'Syarat dan ketentuan layanan bengkel las & fabrikasi baja premium Mandiri Steel Bekasi'
    },
    hero: {
      title: 'Syarat & Ketentuan Layanan'
    },
    intro: 'Syarat dan ketentuan layanan custom welding, fabrikasi baja, dan pemasangan konstruksi besi dari Bengkel Las Mandiri Steel Bekasi.',
    sections: {
      howToOrder: {
        title: 'Cara Pemesanan',
        ordering: {
          title: 'Konsultasi & Survei',
          description: 'Pemesanan dapat dimulai dengan berdiskusi melalui WhatsApp, telepon, atau survei lokasi gratis oleh tim kami di area Jabodetabek.'
        },
        service: {
          title: 'Desain Kustom',
          description: 'Anda dapat mengajukan desain kanopi, pagar, atau teralis kustom Anda sendiri. Tim kami akan mempelajari spesifikasi teknis dan kebutuhan material.'
        },
        production: {
          title: 'Persetujuan Harga',
          description: 'Setelah spesifikasi material, ukuran, dan harga disepakati, kami akan mengirimkan PO/Invoice resmi berisi rincian proyek Anda.'
        },
        support: {
          title: 'Proses Fabrikasi',
          description: 'Proses perakitan dan pengelasan di workshop berkisar antara 1-3 minggu, tergantung pada tingkat kerumitan desain dan volume pekerjaan.'
        }
      },
      payment: {
        title: 'Ketentuan Pembayaran',
        deposit: {
          title: 'Uang Muka (DP)',
          description: 'Pekerjaan fabrikasi di workshop akan dimulai segera setelah kami menerima uang muka sebesar 40% - 50% sesuai kesepakatan tertulis.'
        },
        balancePayment: {
          title: 'Pelunasan Akhir',
          description: 'Pelunasan sisa pembayaran dilakukan setelah proses pemasangan struktur (kanopi, pagar, tangga, dll.) selesai di lokasi Anda dan telah melalui inspeksi kualitas bersama.'
        }
      },
      shipping: {
        title: 'Pengiriman & Instalasi',
        jabodetabek: {
          title: 'Bekasi & Jakarta',
          days: 'Pengiriman & Pasang Langsung'
        },
        outsideJava: {
          title: 'Luar Jabodetabek',
          days: 'Ekspedisi Khusus'
        },
        international: {
          title: 'Kemitraan Industri',
          days: 'Sesuai Kontrak'
        },
        note1: 'Biaya pengiriman dan instalasi standar di Jabodetabek sudah termasuk dalam kesepakatan harga kecuali ditentukan lain.',
        note2: 'Pembatalan pesanan setelah proses potong bahan dan pengelasan dimulai akan dikenakan biaya bahan yang telah terpakai.'
      },
      warranty: {
        title: 'Garansi Konstruksi',
        badge: 'Garansi Las & Konstruksi',
        whatsCovered: {
          title: 'Yang Dijamin',
          description: 'Kerusakan struktural pada hasil pengelasan (lasan retak atau lepas) dan kekuatan konstruksi baja/besi selama masa garansi.'
        },
        notCovered: {
          title: 'Tidak Dijamin',
          description: 'Kerusakan akibat kecelakaan, bencana alam, kelalaian pengguna (ditabrak), perubahan warna cat alami akibat cuaca ekstrim, atau modifikasi dari pihak lain.'
        },
        note: {
          title: 'Ketentuan Klaim',
          description: 'Klaim garansi dapat diajukan secara instan dengan mengirimkan foto/video bagian konstruksi yang bermasalah langsung ke nomor WhatsApp resmi kami.'
        }
      },
      findUs: {
        title: 'Lokasi Workshop',
        workshopLabel: 'Bengkel Las Mandiri Steel:',
        workHours: 'Jam Operasional: Senin - Sabtu (08.00 - 17.00 WIB)',
        languages: 'Melayani konsultasi bahasa Indonesia dan English'
      }
    }
  },
  en: {
    meta: {
      title: 'Terms of Service - Mandiri Steel',
      description: 'Terms and conditions for Mandiri Steel premium custom welding & steel fabrication services'
    },
    hero: {
      title: 'Terms & Conditions'
    },
    intro: 'Terms and conditions for custom welding, steel fabrication, and iron construction installation services by Mandiri Steel Bekasi.',
    sections: {
      howToOrder: {
        title: 'How to Order',
        ordering: {
          title: 'Consultation & Survey',
          description: 'Order process begins with discussions via WhatsApp, phone, or free onsite survey by our team in the Jabodetabek area.'
        },
        service: {
          title: 'Custom Designs',
          description: 'Submit your own custom canopy, gate, or trellis design. Our team will review technical specifications and material requirements.'
        },
        production: {
          title: 'Price Agreement',
          description: 'Once material specs, dimensions, and pricing are agreed upon, we will issue an official PO/Invoice with project details.'
        },
        support: {
          title: 'Fabrication Process',
          description: 'Assembly and welding in our workshop takes approximately 1-3 weeks, depending on design complexity and project volume.'
        }
      },
      payment: {
        title: 'Payment Terms',
        deposit: {
          title: 'Down Payment (DP)',
          description: 'Fabrication work in our workshop begins immediately upon receipt of a 40% - 50% down payment as agreed in writing.'
        },
        balancePayment: {
          title: 'Final Settlement',
          description: 'Remaining balance is paid after structural installation (canopy, gate, stairs, etc.) is fully completed at your site and passed mutual quality inspection.'
        }
      },
      shipping: {
        title: 'Delivery & Installation',
        jabodetabek: {
          title: 'Local Delivery',
          days: 'Delivery & Direct Onsite Installation'
        },
        outsideJava: {
          title: 'Outside Jabodetabek',
          days: 'Specialized Cargo'
        },
        international: {
          title: 'Industrial Partners',
          days: 'Contract Based'
        },
        note1: 'Standard delivery and installation costs in Jabodetabek are included in the price agreement unless specified otherwise.',
        note2: 'Cancellations after material cutting and welding have begun will incur charges for materials already used.'
      },
      warranty: {
        title: 'Structural Warranty',
        badge: 'Welding & Structural Warranty',
        whatsCovered: {
          title: 'What\'s Covered',
          description: 'Structural defects in welding joints (cracked or loose welds) and steel/iron construction durability during the warranty period.'
        },
        notCovered: {
          title: 'Not Covered',
          description: 'Damage from accidents, natural disasters, user negligence (e.g., collisions), natural paint weathering, or third-party modifications.'
        },
        note: {
          title: 'Claim Terms',
          description: 'Warranty claims can be submitted instantly by sending photos/videos of the structural issue directly to our official WhatsApp number.'
        }
      },
      findUs: {
        title: 'Workshop Location',
        workshopLabel: 'Mandiri Steel Workshop:',
        workHours: 'Operational Hours: Monday - Saturday (08:00 - 17:00 WIB)',
        languages: 'Consultations available in Indonesian and English'
      }
    }
  },
  ar: {
    meta: {
      title: 'شروط الخدمة - مانديري ستيل',
      description: 'شروط الخدمة لخدمات اللحام المخصصة وتصنيع الفولاذ الممتازة من مانديري ستيل'
    },
    hero: {
      title: 'الشروط والأحكام'
    },
    intro: 'الشروط والأحكام لخدمات اللحام المخصصة، وتصنيع الفولاذ، وتركيب الهياكل الحديدية من ورشة مانديري ستيل في بيكاسي.',
    sections: {
      howToOrder: {
        title: 'كيفية الطلب',
        ordering: {
          title: 'الاستشارة والمعاينة',
          description: 'تبدأ عملية الطلب بالمناقشات عبر WhatsApp أو الهاتف أو معاينة مجانية للموقع من قبل فريقنا in منطقة جابوديتابيك.'
        },
        service: {
          title: 'تصاميم مخصصة',
          description: 'أرسل تصميم المظلة أو البوابة المخصصة لديك. سيقوم فريقنا بمراجعة المواصفات الفنية ومتطلبات المواد.'
        },
        production: {
          title: 'اتفاقية السعر',
          description: 'بمجرد الاتفاق على مواصفات المواد والأبعاد والأسعار، سنقوم بإصدار فاتورة PO رسمية تحتوي على تفاصيل المشروع.'
        },
        support: {
          title: 'عملية التصنيع',
          description: 'تستغرق عملية التجميع واللحام في ورشتنا حوالي 1-3 أسابيع، حسب تعقيد التصميم وحجم المشروع.'
        }
      },
      payment: {
        title: 'شروط الدفع',
        deposit: {
          title: 'الدفعة المقدمة (DP)',
          description: 'تبدأ أعمال التصنيع في ورشتنا فورًا عند استلام دفعة مقدمة بنسبة 40% - 50% كما هو متفق عليه كتابيًا.'
        },
        balancePayment: {
          title: 'التسوية النهائية',
          description: 'يتم دفع الرصيد المتبقي بعد اكتمال تركيب الهيكل (المظلة، البوابة، السلالم، إلخ) بالكامل في موقعك واجتياز فحص الجودة المتبادل.'
        }
      },
      shipping: {
        title: 'التوصيل والتركيب',
        jabodetabek: {
          title: 'التوصيل المحلي',
          days: 'التوصيل والتركيب المباشر في الموقع'
        },
        outsideJava: {
          title: 'خارج جابوديتابيك',
          days: 'شحن خاص'
        },
        international: {
          title: 'الشركاء الصناعيون',
          days: 'بناءً على العقد'
        },
        note1: 'تكاليف التوصيل والتركيب القياسية في جابوديتابيك مشمولة في اتفاقية السعر ما لم يتم تحديد خلاف ذلك.',
        note2: 'الإلغاء بعد بدء قطع المواد واللحام سيتحمل رسوم المواد المستخدمة بالفعل.'
      },
      warranty: {
        title: 'ضمان الهيكل',
        badge: 'ضمان اللحام والهيكل',
        whatsCovered: {
          title: 'ما يشمله الضمان',
          description: 'العيوب الهيكلية في وصلات اللحام (اللحامات المتشققة أو المفككة) ومتانة الهياكل الحديدية/الفولاذية خلال فترة الضمان.'
        },
        notCovered: {
          title: 'ما لا يشمله الضمان',
          description: 'الأضرار الناتجة عن الحوادث، أو الكوارث الطبيعية، أو إهمال المستخدم (مثل الاصطدامات)، أو التجوية الطبيعية للطلاء، أو تعديلات الطرف الثالث.'
        },
        note: {
          title: 'شروط المطالبة',
          description: 'يمكن تقديم مطالبات الضمان فورًا عن طريق إرسال صور/فيديوهات للمشكلة الهيكلية مباشرة إلى رقم WhatsApp الرسمي الخاص بنا.'
        }
      },
      findUs: {
        title: 'موقع الورشة',
        workshopLabel: 'ورشة مانديري ستيل:',
        workHours: 'ساعات العمل: الاثنين - السبت (08:00 - 17:00 بتوقيت غرب إندونيسيا)',
        languages: 'الاستشارات متوفرة باللغتين الإندونيسية والإنجليزية'
      }
    }
  },
  zh: {
    meta: {
      title: '服务条款 - Mandiri Steel',
      description: 'Mandiri Steel 优质定制焊接与钢结构制造服务条款'
    },
    hero: {
      title: '条款与条件'
    },
    intro: '欢迎使用由勿加泗 Bengkel Las Mandiri Steel 提供的定制焊接、钢结构制造和铁艺施工安装服务条款。',
    sections: {
      howToOrder: {
        title: '如何订购',
        ordering: {
          title: '咨询与测绘',
          description: '订购流程始于通过 WhatsApp、电话沟通或由我们在雅加达都市圈（Jabodetabek）的团队进行免费上门测量。'
        },
        service: {
          title: '定制设计',
          description: '您可以提交您的定制雨棚、大门或防盗网设计。我们的团队将评估技术规格和材料需求。'
        },
        production: {
          title: '价格确认',
          description: '材料规格、尺寸和价格达成一致后，我们将开具包含项目详情的正式订购单/发票。'
        },
        support: {
          title: '制造加工',
          description: '车间内的组装与焊接通常需要 1 到 3 周时间，具体取决于设计复杂程度和项目工程量。'
        }
      },
      payment: {
        title: '付款方式',
        deposit: {
          title: '预付款 (定金)',
          description: '收到书面协定的 40% - 50% 预付款后，我们将立即启动车间的制造加工。'
        },
        balancePayment: {
          title: '尾款结算',
          description: '在您现场的结构安装（雨棚、大门、楼梯等）完全竣工并共同通过质量验收后，支付剩余尾款。'
        }
      },
      shipping: {
        title: '配送与安装',
        jabodetabek: {
          title: '本地配送',
          days: '配送并现场直接安装'
        },
        outsideJava: {
          title: '都市圈以外',
          days: '特种物流配送'
        },
        international: {
          title: '工业合作伙伴',
          days: '合同制基础'
        },
        note1: '除非另有约定，雅加达都市圈的标准配送 and 安装费用已包含在报价中。',
        note2: '材料开始切割和焊接后取消订单，将收取已使用材料的成本费用。'
      },
      warranty: {
        title: '结构保修',
        badge: '焊接与结构保修',
        whatsCovered: {
          title: '保修范围',
          description: '保修期内焊接接头的结构缺陷（焊缝开裂或松动）以及钢/铁艺结构的耐用性。'
        },
        notCovered: {
          title: '不在保修范围内',
          description: '由于事故、自然灾害、用户疏忽（如碰撞）、油漆自然风化或第三方擅自改动造成的损坏。'
        },
        note: {
          title: '索赔条款',
          description: '可通过直接发送结构问题照片/视频至我们的官方 WhatsApp 账号立即提交保修索赔。'
        }
      },
      findUs: {
        title: '车间地址',
        workshopLabel: 'Mandiri Steel 车间：',
        workHours: '工作时间：周一至周六（08:00 - 17:00 WIB）',
        languages: '提供印尼语和英语咨询服务'
      }
    }
  },
  ja: {
    meta: {
      title: '利用規約 - Mandiri Steel',
      description: 'Mandiri Steel プレミアムカスタム溶接・鋼構造物製造サービス利用規約'
    },
    hero: {
      title: '利用規約'
    },
    intro: 'Bekasi の Bengkel Las Mandiri Steel が提供するカスタム溶接、鋼構造物製造、鉄骨工事取付サービスの利用規約。',
    sections: {
      howToOrder: {
        title: 'ご注文方法',
        ordering: {
          title: 'ご相談・現地調査',
          description: 'ご注文プロセスは、WhatsApp、お電話でのご相談、または Jabodetabek エリアでの弊社チームによる無料の現地調査から始まります。'
        },
        service: {
          title: 'カスタム設計',
          description: 'カスタムキャノピー、ゲート、またはトレリスの設計をご提出ください。弊社チームが技術仕様と材料要件を検証します。'
        },
        production: {
          title: '価格の合意',
          description: '材料の仕様、寸法、価格が合意に達した後、プロジェクトの詳細を記載した公式の注文書（PO）/請求書を発行します。'
        },
        support: {
          title: '製造プロセス',
          description: '設計の複雑さと量に応じて、ワークショップでの組み立てと溶接には約 1〜3 週間かかります。'
        }
      },
      payment: {
        title: 'お支払い条件',
        deposit: {
          title: '頭金（デポジット）',
          description: '書面で合意された頭金 40%〜50% の受領後、直ちにワークショップでの製造を開始します。'
        },
        balancePayment: {
          title: '残金のお支払い',
          description: 'お客様の現場での構造物（キャノピー、ゲート、階段など）の設置が完了し、共同での品質検査に合格した後、残金をお支払いいただきます。'
        }
      },
      shipping: {
        title: '配送と設置',
        jabodetabek: {
          title: '現地配送',
          days: '配送および直接現地設置'
        },
        outsideJava: {
          title: '対象エリア外',
          days: '特別輸送貨物'
        },
        international: {
          title: '産業パートナー',
          days: '契約ベース'
        },
        note1: '別段の定めがない限り、Jabodetabek での標準配送および設置コストは価格合意に含まれています。',
        note2: '材料の切断や溶接が開始された後のキャンセルは、既に使用された材料の実費が請求されます。'
      },
      warranty: {
        title: '構造保証',
        badge: '溶接・構造保証',
        whatsCovered: {
          title: '保証対象',
          description: '保証期間内の溶接箇所の構造的欠陥（溶接の亀裂や緩み）および鋼・鉄構造物の耐久性。'
        },
        notCovered: {
          title: '保証対象外',
          description: '事故、自然災害、ユーザーの過失（衝突など）、塗装の自然な風化、または第三者による改変による損傷。'
        },
        note: {
          title: '請求条件',
          description: '保証請求は、構造の問題を示す写真/ビデオを弊社の公式 WhatsApp 番号に直接送信することで、即座に提出できます。'
        }
      },
      findUs: {
        title: 'ワークショップの場所',
        workshopLabel: 'Mandiri Steel ワークショップ：',
        workHours: '営業時間：月曜日 - 土曜日（08:00 - 17:00 WIB）',
        languages: 'インドネシア語および英語でのご相談に対応しています'
      }
    }
  },
  es: {
    meta: {
      title: 'Términos de Servicio - Mandiri Steel',
      description: 'Términos y condiciones para los servicios premium de soldadura personalizada y fabricación de acero de Mandiri Steel'
    },
    hero: {
      title: 'Términos y Condiciones'
    },
    intro: 'Términos y condiciones para los servicios de soldadura personalizada, fabricación de acero e instalación de estructuras de hierro de Mandiri Steel Bekasi.',
    sections: {
      howToOrder: {
        title: 'Cómo Pedir',
        ordering: {
          title: 'Consulta y Medición',
          description: 'El proceso comienza con discusiones vía WhatsApp, teléfono o una medición gratuita in situ por nuestro equipo en el área de Jabodetabek.'
        },
        service: {
          title: 'Diseños Personalizados',
          description: 'Presente su propio diseño de dosel, portón o enrejado personalizado. Nuestro equipo revisará las especificaciones técnicas y los requisitos de materiales.'
        },
        production: {
          title: 'Acuerdo de Precio',
          description: 'Una vez acordadas las especificaciones del material, las dimensiones y el precio, emitiremos una factura oficial con los detalles del proyecto.'
        },
        support: {
          title: 'Proceso de Fabricación',
          description: 'El proceso de montaje y soldadura en nuestro taller demora aproximadamente entre 1 y 3 semanas, dependiendo de la complejidad y el volumen.'
        }
      },
      payment: {
        title: 'Condiciones de Pago',
        deposit: {
          title: 'Pago Inicial (Anticipo)',
          description: 'El trabajo en nuestro taller comienza inmediatamente tras recibir un depósito inicial del 40% al 50% según lo acordado por escrito.'
        },
        balancePayment: {
          title: 'Liquidación Final',
          description: 'El saldo restante se paga después de que la instalación estructural (dosel, portón, escaleras, etc.) se complete en su sitio y pase la inspección de calidad mutua.'
        }
      },
      shipping: {
        title: 'Entrega e Instalación',
        jabodetabek: {
          title: 'Entrega Local',
          days: 'Entrega e Instalación Directa In Situ'
        },
        outsideJava: {
          title: 'Fuera de Jabodetabek',
          days: 'Carga Especializada'
        },
        international: {
          title: 'Socios Industriales',
          days: 'Basado en Contrato'
        },
        note1: 'Los costos estándar de entrega e instalación en Jabodetabek están incluidos en el precio acordado a menos que se especifique lo contrario.',
        note2: 'Las cancelaciones después de que haya comenzado el corte de materiales y la soldadura incurrirán en cargos por los materiales ya utilizados.'
      },
      warranty: {
        title: 'Garantía Estructural',
        badge: 'Garantía de Soldadura y Estructura',
        whatsCovered: {
          title: 'Qué Está Cubierto',
          description: 'Defectos estructurales en las uniones soldadas (soldaduras agrietadas o sueltas) y durabilidad de la estructura de acero/hierro durante el período de garantía.'
        },
        notCovered: {
          title: 'No Cubierto',
          description: 'Daños por accidentes, desastres naturales, negligencia del usuario (por ejemplo, colisiones), desgaste natural de la pintura o modificaciones de terceros.'
        },
        note: {
          title: 'Términos de Reclamación',
          description: 'Las reclamaciones se pueden enviar instantáneamente enviando fotos/videos del problema estructural directamente a nuestro WhatsApp oficial.'
        }
      },
      findUs: {
        title: 'Ubicación del Taller',
        workshopLabel: 'Taller de Mandiri Steel:',
        workHours: 'Horas de Operación: Lunes - Sábado (08:00 - 17:00 WIB)',
        languages: 'Consultas disponibles en indonesio e inglés'
      }
    }
  },
  fr: {
    meta: {
      title: 'Conditions d\'Utilisation - Mandiri Steel',
      description: 'Conditions d\'utilisation pour les services premium de soudure personnalisée et de fabrication d\'acier de Mandiri Steel'
    },
    hero: {
      title: 'Conditions Générales'
    },
    intro: 'Conditions générales pour les services de soudage personnalisé, de fabrication d\'acier et d\'installation de structures en fer par Mandiri Steel Bekasi.',
    sections: {
      howToOrder: {
        title: 'Comment Commander',
        ordering: {
          title: 'Consultation & Mesure',
          description: 'Le processus de commande commence par des discussions via WhatsApp, par téléphone ou par une mesure gratuite sur site par notre équipe dans la région de Jabodetabek.'
        },
        service: {
          title: 'Conception Sur Mesure',
          description: 'Soumettez votre propre design d\'auvent, de portail ou de grille personnalisé. Notre équipe examinera les spécifications techniques et les exigences de matériaux.'
        },
        production: {
          title: 'Accord sur le Prix',
          description: 'Une fois les spécifications, dimensions et prix convenus, nous émettrons un bon de commande officiel détaillant le projet.'
        },
        support: {
          title: 'Processus de Fabrication',
          description: 'L\'assemblage et le soudage dans notre atelier durent environ 1 à 3 semaines, selon la complexité de la conception et le volume du projet.'
        }
      },
      payment: {
        title: 'Conditions de Paiement',
        deposit: {
          title: 'Acompte',
          description: 'Le travail de fabrication commence immédiatement après réception d\'un acompte de 40% à 50% comme convenu par écrit.'
        },
        balancePayment: {
          title: 'Règlement Final',
          description: 'Le solde restant est payé après l\'achèvement complet de l\'installation (auvent, portail, escalier, etc.) sur votre site et après inspection de qualité mutuelle.'
        }
      },
      shipping: {
        title: 'Livraison & Installation',
        jabodetabek: {
          title: 'Livraison Locale',
          days: 'Livraison et installation directe sur site'
        },
        outsideJava: {
          title: 'Hors Jabodetabek',
          days: 'Cargaison Spécialisée'
        },
        international: {
          title: 'Partenaires Industriels',
          days: 'Sur Contrat'
        },
        note1: 'Les coûts standard de livraison et d\'installation à Jabodetabek sont inclus dans l\'accord de prix, sauf indication contraire.',
        note2: 'Les annulations après le début de la coupe et du soudage des matériaux entraîneront des frais pour les matériaux déjà utilisés.'
      },
      warranty: {
        title: 'Garantie Structurelle',
        badge: 'Garantie de Soudure & Structure',
        whatsCovered: {
          title: 'Ce Qui Est Couvert',
          description: 'Défauts structurels des joints de soudure (fissures ou soudures desserrées) et durabilité de la structure en acier/fer pendant la période de garantie.'
        },
        notCovered: {
          title: 'Non Couvert',
          description: 'Dommages dus à des accidents, catastrophes naturelles, négligence de l\'utilisateur (ex. collisions), vieillissement naturel de la peinture ou modifications par des tiers.'
        },
        note: {
          title: 'Conditions de Réclamation',
          description: 'Les réclamations peuvent être soumises instantanément en envoyant des photos/vidéos du problème directement à notre numéro WhatsApp officiel.'
        }
      },
      findUs: {
        title: 'Emplacement de l\'Atelier',
        workshopLabel: 'Atelier Mandiri Steel :',
        workHours: 'Heures d\'Ouverture : Lundi - Samedi (08:00 - 17:00 WIB)',
        languages: 'Consultations disponibles en indonésien et en anglais'
      }
    }
  },
  ko: {
    meta: {
      title: '서비스 약관 - Mandiri Steel',
      description: 'Mandiri Steel 프리미엄 맞춤형 용접 및 철강 제조 서비스 약관'
    },
    hero: {
      title: '이용 약관'
    },
    intro: 'Bekasi의 Bengkel Las Mandiri Steel이 제공하는 맞춤형 용접, 철강 제조 및 철골 구조물 설치 서비스의 이용 약관.',
    sections: {
      howToOrder: {
        title: '주문 방법',
        ordering: {
          title: '상담 및 현장 실사',
          description: '주문 프로세스는 WhatsApp, 전화를 통한 상담 또는 Jabodetabek 지역 내 저희 팀의 무료 현장 측정으로 시작됩니다.'
        },
        service: {
          title: '맞춤 디자인',
          description: '맞춤형 캐노피, 대문 또는 방범창 디자인을 제출해 주세요. 저희 기술 팀이 도면 사양 및 재료 요구사항을 검토합니다.'
        },
        production: {
          title: '가격 합의',
          description: '자재 사양, 규격 및 가격이 합의되면 프로젝트 세부정보가 포함된 공식 주문서(PO)/인보이스를 발행합니다.'
        },
        support: {
          title: '제작 프로세스',
          description: '작업장에서의 조립 및 용접 작업은 디자인의 복잡성과 수량에 따라 약 1~3주가 소요됩니다.'
        }
      },
      payment: {
        title: '결제 조건',
        deposit: {
          title: '계약금',
          description: '서면으로 합의된 계약금 40% ~ 50% 입금 확인 즉시 작업장에서 제작 공정이 개시됩니다.'
        },
        balancePayment: {
          title: '잔금 지급',
          description: '현장 설치(캐노피, 대문, 계단 등)가 완료되고 상호 품질 검사를 통과한 후 잔금이 결제됩니다.'
        }
      },
      shipping: {
        title: '배송 및 설치',
        jabodetabek: {
          title: '현지 배송',
          days: '배송 및 현장 직접 설치'
        },
        outsideJava: {
          title: '수도권 외 지역',
          days: '전문 화물 배송'
        },
        international: {
          title: '산업 파트너',
          days: '계약 기반'
        },
        note1: '별도의 명시가 없는 한 Jabodetabek 지역의 표준 배송 및 설치 비용은 가격 합의에 포함되어 있습니다.',
        note2: '자재 재단 및 용접이 시작된 후 주문을 취소할 경우 기사용된 자재 비용이 청구됩니다.'
      },
      warranty: {
        title: '구조 보증',
        badge: '용접 및 구조 보증',
        whatsCovered: {
          title: '보증 범위',
          description: '보증 기간 내 용접 조인트의 구조적 결함(용접부 균열 또는 떨어짐) 및 철강/철공 구조물의 내구성.'
        },
        notCovered: {
          title: '보증 제외',
          description: '사고, 자연재해, 사용자 과실(예: 충돌), 도장의 자연스러운 변색 또는 제3자의 무단 개조로 인한 손상.'
        },
        note: {
          title: '청구 조건',
          description: '구조적 결함 사진이나 동영상을 공식 WhatsApp 번호로 직접 보내주시면 보증 청구를 신속히 접수할 수 있습니다.'
        }
      },
      findUs: {
        title: '작업장 위치',
        workshopLabel: 'Mandiri Steel 작업장:',
        workHours: '운영 시간: 월요일 - 토요일 (08:00 - 17:00 WIB)',
        languages: '인도네시아어 및 영어 상담 제공'
      }
    }
  }
}
