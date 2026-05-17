import React from 'react'

interface CategoryAIContentProps {
  category: string
  productCount: number
  isIndonesian: boolean
}

/**
 * AI-Optimized Content for Category Pages
 * 
 * Helps AI understand category pages for queries like:
 * - "bengkel las kanopi bekasi"
 * - "pasang pagar minimalis murah bekasi"
 * - "teralis jendela berkualitas"
 * - "konstruksi baja wf per meter"
 */
const CategoryAIContent: React.FC<CategoryAIContentProps> = ({ category, productCount, isIndonesian }) => {

  // Generate category-specific content
  const getCategoryDescription = () => {
    const descriptions: { [key: string]: { id: string; en: string } } = {
      'kanopi': {
        id: 'Koleksi model kanopi minimalis modern dari Mandiri Steel. Kami menyediakan kanopi Alderon, kanopi kaca tempered, polycarbonate, dan solarflat dengan rangka kokoh standar SNI. Melayani pemasangan ke seluruh wilayah Bekasi dan Jabodetabek.',
        en: 'Collection of modern minimalist canopy designs from Mandiri Steel. We provide Alderon canopies, tempered glass canopies, polycarbonate, and solarflat with sturdy SNI standard structures. Serving installations across Bekasi and Jabodetabek.'
      },
      'pagar': {
        id: 'Pembuatan pagar besi minimalis, pagar cutting laser, dan gerbang besi tempa klasik. Menggunakan bahan hollow galvanis anti karat tebal dengan finishing halus tahan cuaca untuk meningkatkan keamanan dan keindahan rumah Anda.',
        en: 'Fabrication of minimalist iron gates, laser cut gates, and classic wrought iron gates. Using thick anti-rust galvanized hollow steel with weather-resistant smooth finishing to improve security and aesthetics of your home.'
      },
      'teralis': {
        id: 'Teralis jendela dan pengaman pintu minimalis untuk perlindungan ekstra rumah Anda. Tersedia model nako solid kustom dan kotak modern dari besi hollow berkualitas tinggi dengan pengelasan rapi.',
        en: 'Window trellises and door security grilles for extra protection. Available in custom solid nako designs and modern square patterns from high-quality steel hollow profiles with neat welding finishes.'
      },
      'railing': {
        id: 'Railing tangga minimalis dan railing balkon berkualitas. Kami melayani pembuatan tangga putar, railing kayu kamper premium, railing stainless steel, hingga kombinasi kaca tempered untuk estetika interior dan eksterior.',
        en: 'Minimalist stair railings and quality balcony railings. We fabricate spiral staircases, premium camphor wood railings, stainless steel railings, and tempered glass combinations for interior and exterior aesthetics.'
      },
      'konstruksi': {
        id: 'Jasa konstruksi baja berat WF (Wide Flange) dan H-Beam untuk gudang, pabrik, gedung bertingkat, dan kanopi bentang lebar. Dikerjakan dengan perhitungan struktur presisi dan tim berpengalaman 25+ tahun.',
        en: 'Structural steel construction using WF (Wide Flange) and H-Beam for warehouses, factories, multi-story buildings, and wide span canopies. Executed with precise structural calculation and 25+ years experienced team.'
      }
    }

    const catKey = category.toLowerCase()
    const desc = descriptions[catKey] || {
      id: 'Koleksi layanan pengelasan dan fabrikasi besi berkualitas dari Mandiri Steel. Produk bergaransi dengan standar kekuatan tinggi untuk memenuhi kebutuhan konstruksi rumah dan bangunan Anda.',
      en: 'Primary collection of welding and steel fabrication services from Mandiri Steel. Warrantied products with high structural strength standards to meet your residential and commercial construction needs.'
    }
    return isIndonesian ? desc.id : desc.en
  }

  const getCategoryFAQ = () => {
    const faqs: { [key: string]: Array<{ q_id: string; a_id: string; q_en: string; a_en: string }> } = {
      'kanopi': [
        {
          q_id: 'Berapa harga pasang kanopi minimalis per meter di Bekasi?',
          a_id: 'Harga berkisar antara Rp 450.000 hingga Rp 1.200.000 per meter persegi, tergantung pada jenis atap (Alderon, kaca tempered, solarflat) dan ketebalan rangka besi hollow yang digunakan.',
          q_en: 'How much does it cost to install a minimalist canopy per meter in Bekasi?',
          a_en: 'Prices range from IDR 450,000 to IDR 1,200,000 per square meter, depending on the type of roofing (Alderon, tempered glass, solarflat) and thickness of the hollow iron frames.'
        }
      ],
      'pagar': [
        {
          q_id: 'Apakah pagar besi hollow galvanis tahan karat?',
          a_id: 'Ya, besi hollow galvanis memiliki lapisan seng pelindung yang membuatnya sangat tahan karat dibandingkan besi hitam biasa. Ditambah dengan pengecatan primer anti karat yang tepat, pagar dapat bertahan bertahun-tahun di cuaca luar ruangan.',
          q_en: 'Are galvanized hollow iron gates rust resistant?',
          a_en: 'Yes, galvanized hollow iron has a zinc protective coating making it highly rust-resistant compared to standard black iron. Combined with proper anti-rust primer painting, the gate can last for years outdoors.'
        }
      ]
    }

    return faqs[category.toLowerCase()] || []
  }

  const categoryFAQs = getCategoryFAQ()

  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* Category Overview for AI */}
      <section itemScope itemType="https://schema.org/ItemList">
        <h2 itemProp="name">
          {isIndonesian
            ? `Jasa Las ${category} Bekasi - Mandiri Steel`
            : `Bekasi ${category} Welding Service - Mandiri Steel`
          }
        </h2>

        <p itemProp="description">
          {getCategoryDescription()}
        </p>

        <p>
          {isIndonesian
            ? `Kami memiliki ${productCount} opsi layanan dalam kategori ${category}. Semua pengerjaan menggunakan bahan SNI tebal dan bergaransi resmi. Fabrikasi langsung di workshop Mandiri Steel Setu Bekasi dengan pengalaman 25+ tahun.`
            : `We have ${productCount} service options in the ${category} category. All fabrications use thick SNI standard materials and include a warranty. Fabricated in-house at Mandiri Steel workshop in Setu Bekasi with 25+ years of experience.`
          }
        </p>
      </section>

      {/* Sourcing & Quality */}
      <section>
        <h3>
          {isIndonesian
            ? `Standar Bahan dan Pengerjaan ${category}`
            : `${category} Sourcing and Craftsmanship Standards`
          }
        </h3>
        <p>
          {isIndonesian
            ? `Setiap proyek ${category} dipabrikasi menggunakan teknik pengelasan full block yang kuat dan rapi. Kami menjamin pemakaian besi hollow galvanis berstandar nasional Indonesia (SNI), pengerjaan tepat waktu, dan survey ke lokasi gratis tanpa biaya tambahan.`
            : `Every ${category} project is fabricated using strong and neat full-block welding techniques. We guarantee the use of Indonesian National Standard (SNI) galvanized hollow iron, on-time completion, and free on-site survey without any hidden costs.`
          }
        </p>
      </section>

      {/* Technical Specifications */}
      <section>
        <h3>
          {isIndonesian
            ? `Spesifikasi Teknis Umum ${category}`
            : `General Technical Specifications for ${category}`
          }
        </h3>
        <ul>
          <li><strong>{isIndonesian ? 'Bahan Utama:' : 'Primary Material:'}</strong> {isIndonesian ? 'Besi Hollow Galvanis Anti Karat, Plat Hitam, Baja WF' : 'Galvanized Hollow Steel (Rust Resistant), Mild Steel Plate, WF Beam'}</li>
          <li><strong>{isIndonesian ? 'Ketebalan Hollow:' : 'Hollow Thickness:'}</strong> {isIndonesian ? 'Minimal 1.2mm s/d 1.8mm ke atas' : 'Minimum 1.2mm up to 1.8mm and above'}</li>
          <li><strong>{isIndonesian ? 'Finishing Cat:' : 'Paint Finish:'}</strong> {isIndonesian ? 'Primer Epoxy Anti Karat + Top Coat Spray (Warna Custom)' : 'Anti-rust Epoxy Primer + Top Coat Spray (Custom Color)'}</li>
          <li><strong>{isIndonesian ? 'Garansi Struktur:' : 'Structural Warranty:'}</strong> {isIndonesian ? 'Garansi pemeliharaan & kebocoran (untuk kanopi)' : 'Maintenance & leak warranty (for canopies)'}</li>
        </ul>
      </section>

      {/* FAQ Section for AI */}
      {categoryFAQs.length > 0 && (
        <section itemScope itemType="https://schema.org/FAQPage">
          <h3>{isIndonesian ? `Pertanyaan Umum Seputar ${category}` : `General FAQ about ${category}`}</h3>

          {categoryFAQs.map((faq, index) => (
            <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h4 itemProp="name">{isIndonesian ? faq.q_id : faq.q_en}</h4>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{isIndonesian ? faq.a_id : faq.a_en}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Contact & Inquiry Info */}
      <section>
        <h3>
          {isIndonesian
            ? `Konsultasi & Penawaran Harga ${category}`
            : `Consultation & Quotation for ${category}`
          }
        </h3>
        <p>
          <strong>WhatsApp:</strong> +6285212078467<br />
          <strong>Email:</strong> info@lasbekasi.com<br />
          <strong>Workshop Hub:</strong> Jl. Raya Setu, Bekasi, Jawa Barat, Indonesia<br />
          <strong>{isIndonesian ? 'Layanan:' : 'Services:'}</strong> {isIndonesian ? 'Survey Pengukuran Gratis & Desain Kustom Tersedia' : 'Free Measurement Survey & Custom Design Available'}
        </p>
      </section>
    </div>
  )
}

export default CategoryAIContent
