// FAQ Data for SEO - Structured Data for Google Rich Results
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  slug: string
  title: string
  faqs: FAQItem[]
}

// FAQ untuk Jasa Bengkel Las Bekasi dan Konstruksi Besi
export const FAQ_DATA: FAQCategory[] = [
  {
    slug: 'commodity-export-bekasi',
    title: 'FAQ Jasa Bengkel Las Bekasi',
    faqs: [
      {
        question: 'Layanan apa saja yang disediakan oleh Bengkel Las Mandiri di Bekasi?',
        answer: 'Bengkel Las Mandiri spesialis dalam pembuatan dan pemasangan kanopi minimalis (Alderon, kaca tempered, polycarbonate), pagar besi modern/klasik, pintu gerbang, teralis jendela, railing tangga, balkon, serta konstruksi baja berat (WF/H-Beam) untuk rumah, ruko, gudang, dan pabrik di Bekasi.'
      },
      {
        question: 'Bagaimana standar kualitas bahan dan ketebalan besi yang digunakan?',
        answer: 'Kami selalu menggunakan material besi berkualitas standar SNI dengan ketebalan yang sesuai spesifikasi (bukan besi banci). Rangka kanopi dan pagar menggunakan hollow galvanis anti karat untuk menjamin kekuatan struktural dan ketahanan jangka panjang terhadap cuaca ekstrim.'
      },
      {
        question: 'Berapa lama proses pembuatan dan pemasangan kanopi atau pagar?',
        answer: 'Proses fabrikasi di workshop kami berkisar antara 1 hingga 2 minggu tergantung tingkat kerumitan desain dan volume pekerjaan. Pemasangan langsung di lokasi Anda biasanya diselesaikan dalam waktu 1 hingga 2 hari kerja oleh tim teknisi las berpengalaman kami.'
      },
      {
        question: 'Apakah ada garansi untuk pengerjaan las di Bengkel Las Mandiri?',
        answer: 'Ya, kami memberikan garansi kekuatan struktur dan kebocoran (untuk kanopi) hingga 3 bulan setelah pemasangan. Kami berkomitmen menjaga kepuasan pelanggan dengan hasil pengerjaan las yang rapi, kuat, presisi, dan tahan lama.'
      },
      {
        question: 'Apakah biaya survei lokasi dan konsultasi desain dikenakan biaya?',
        answer: 'Gratis! Kami memberikan layanan survei lokasi, pengukuran presisi, dan konsultasi desain secara gratis tanpa biaya tambahan untuk seluruh wilayah Bekasi, Cikarang, Tambun, Cibitung, dan sekitarnya.'
      },
      {
        question: 'Bagaimana sistem pembayaran untuk pemesanan jasa las?',
        answer: 'Sistem pembayaran kami transparan dan aman. Pembayaran dilakukan dengan Uang Muka (DP) sebesar 40% - 50% setelah spesifikasi disepakati untuk memulai proses fabrikasi di workshop. Pelunasan sisa pembayaran dilakukan setelah pemasangan selesai dan lulus inspeksi kualitas bersama di lokasi Anda.'
      },
      {
        question: 'Apakah pelanggan bisa membawa desain kanopi atau pagar sendiri?',
        answer: 'Tentu saja! Kami sangat menerima desain kustom dari Anda. Tim kami akan meninjau gambar teknis atau foto referensi yang Anda berikan, lalu memberikan saran teknis mengenai spesifikasi material terbaik agar hasilnya aman, kokoh, dan estetik.'
      },
      {
        question: 'Dimana lokasi workshop Bengkel Las Mandiri?',
        answer: 'Workshop utama kami berlokasi di Jl. Raya Setu Cibitung, Telajung, Cikarang Barat, Kabupaten Bekasi. Anda sangat dipersilakan untuk mengunjungi workshop kami guna melihat langsung kualitas material, proses pengelasan, dan pengerjaan yang sedang berjalan.'
      }
    ]
  },
  {
    slug: 'cocoa-powder-export-guide',
    title: 'FAQ Panduan Memilih Kanopi dan Pagar',
    faqs: [
      {
        question: 'Apa perbedaan kanopi Alderon Double Layer dan Single Layer?',
        answer: 'Alderon Double Layer (berongga) memiliki ketebalan lebih tinggi, lebih meredam suara hujan, dan sangat efektif menahan panas matahari sehingga area di bawahnya terasa dingin. Alderon RS (Single Layer) lebih tipis, ringan, dan ekonomis, namun tetap memiliki ketahanan cuaca yang sangat baik.'
      },
      {
        question: 'Mengapa memilih rangka galvanis dibanding besi biasa?',
        answer: 'Besi hollow galvanis dilapisi lapisan seng (zinc) pelindung karat, sehingga memiliki ketahanan korosi yang jauh lebih tinggi dibanding besi biasa. Ini sangat penting untuk konstruksi luar ruangan seperti kanopi dan pagar yang terus-menerus terkena hujan dan terik matahari.'
      }
    ]
  }
]

export const getFAQBySlug = (slug: string): FAQCategory | undefined => {
  return FAQ_DATA.find(faq => faq.slug === slug)
}
