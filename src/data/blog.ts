export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  author?: string
  status?: 'draft' | 'synced'
  language?: string
  content?: any
  tags?: string[]
  published?: boolean
  featured?: boolean

  // Custom content (optional) - takes priority over AI-generated content
  customContent?: {
    introduction?: string // Rich HTML content
    keyPoints?: string[] // Key takeaways/bullets
    language?: 'id' | 'en' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko' // Explicit content language
    sections?: Array<{
      heading: string
      content: string // Rich HTML content
      image?: string
      imageAlt?: string
      imageSearchQuery?: string
      productId?: number
    }>
    conclusion?: string // Rich HTML content
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    "id": 19,
    "title": "Menghitung Kebutuhan Baja WF dan H-beam",
    "slug": "cara-menghitung-kebutuhan-baja-wf-dan-h-beam",
    "excerpt": "Panduan lengkap menghitung kebutuhan baja WF dan H-beam untuk proyek bangunan di Bekasi",
    "category": "Steel Construction",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1700451219321-9814ea4c2328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxiYWphJTIwd2YlMjBkYW4lMjBoLWJlYW18ZW58MHwwfHx8MTc4Mzk4MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "<strong>Baja WF dan H-beam</strong> merupakan material penting dalam konstruksi bangunan. Menghitung kebutuhan baja WF dan H-beam secara akurat sangat penting untuk memastikan kekuatan dan keamanan struktur bangunan. Dalam artikel ini, kita akan membahas cara menghitung kebutuhan baja WF dan H-beam untuk proyek bangunan di Bekasi. <strong>Mandiri Steel</strong> sebagai penyedia jasa konstruksi baja terpercaya di Bekasi, akan membagikan tips dan trik untuk menghitung kebutuhan baja WF dan H-beam dengan benar.",
      "keyPoints": [
        "Menghitung kebutuhan baja WF dan H-beam",
        "Pentingnya menggunakan material SNI",
        "Tips untuk menghemat biaya konstruksi"
      ],
      "sections": [
        {
          "heading": "Pengenalan Baja WF dan H-beam",
          "content": "Baja WF dan H-beam adalah dua jenis material baja yang paling umum digunakan dalam konstruksi bangunan. <strong>Baja WF</strong> memiliki bentuk seperti huruf W, sedangkan <strong>H-beam</strong> memiliki bentuk seperti huruf H. Keduanya memiliki kekuatan dan kekakuan yang tinggi, sehingga sangat cocok untuk digunakan sebagai struktur penahan beban bangunan. <br><br> Dalam memilih baja WF dan H-beam, perlu mempertimbangkan beberapa faktor, seperti <strong>ukuran</strong>, <strong>berat</strong>, dan <strong>kualitas</strong> material. Ukuran baja WF dan H-beam yang tepat akan memastikan kekuatan dan keamanan struktur bangunan. Berat material juga perlu dipertimbangkan, karena akan mempengaruhi biaya transportasi dan pemasangan. <br><br> <strong>Mandiri Steel</strong> menawarkan baja WF dan H-beam dengan kualitas SNI, sehingga Anda dapat yakin bahwa material yang digunakan adalah material yang terbaik.",
          "imageSearchQuery": "baja wf dan h-beam",
          "image": "https://images.unsplash.com/photo-1700451219321-9814ea4c2328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxiYWphJTIwd2YlMjBkYW4lMjBoLWJlYW18ZW58MHwwfHx8MTc4Mzk4MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Cara Menghitung Kebutuhan Baja WF",
          "content": "Menghitung kebutuhan baja WF dapat dilakukan dengan beberapa cara. Pertama, perlu menentukan <strong>ukuran</strong> dan <strong>jumlah</strong> kolom dan balok yang diperlukan. Kemudian, perlu menghitung <strong>panjang</strong> dan <strong>berat</strong> total baja WF yang diperlukan. <br><br> Berikut adalah contoh perhitungan kebutuhan baja WF: <ul><li> Ukuran kolom: 20x20 cm</li><li> Jumlah kolom: 10 buah</li><li> Panjang kolom: 5 meter</li><li> Berat baja WF per meter: 50 kg</li></ul> Dengan menggunakan rumus: <strong>kebutuhan baja WF = panjang x berat x jumlah</strong>, maka kebutuhan baja WF dapat dihitung sebagai berikut: <strong>kebutuhan baja WF = 5 x 50 x 10 = 2500 kg</strong>. <br><br> Perlu diingat bahwa perhitungan kebutuhan baja WF harus dilakukan secara akurat, karena kesalahan perhitungan dapat menyebabkan kekurangan atau kelebihan material.",
          "productId": 7
        },
        {
          "heading": "Cara Menghitung Kebutuhan H-beam",
          "content": "Menghitung kebutuhan H-beam dapat dilakukan dengan cara yang sama seperti menghitung kebutuhan baja WF. Pertama, perlu menentukan <strong>ukuran</strong> dan <strong>jumlah</strong> balok yang diperlukan. Kemudian, perlu menghitung <strong>panjang</strong> dan <strong>berat</strong> total H-beam yang diperlukan. <br><br> Berikut adalah contoh perhitungan kebutuhan H-beam: <ul><li> Ukuran balok: 30x30 cm</li><li> Jumlah balok: 5 buah</li><li> Panjang balok: 10 meter</li><li> Berat H-beam per meter: 100 kg</li></ul> Dengan menggunakan rumus: <strong>kebutuhan H-beam = panjang x berat x jumlah</strong>, maka kebutuhan H-beam dapat dihitung sebagai berikut: <strong>kebutuhan H-beam = 10 x 100 x 5 = 5000 kg</strong>. <br><br> Perlu diingat bahwa perhitungan kebutuhan H-beam harus dilakukan secara akurat, karena kesalahan perhitungan dapat menyebabkan kekurangan atau kelebihan material.",
          "productId": 7
        },
        {
          "heading": "Tips untuk Menghemat Biaya Konstruksi",
          "content": "Menghemat biaya konstruksi dapat dilakukan dengan beberapa cara. Pertama, perlu memilih <strong>material</strong> yang tepat dan sesuai dengan kebutuhan proyek. Kedua, perlu <strong>mengoptimalkan</strong> desain struktur bangunan untuk mengurangi kebutuhan material. Ketiga, perlu <strong>menggunakan</strong> teknologi dan metode konstruksi yang efisien. <br><br> Berikut adalah beberapa tips untuk menghemat biaya konstruksi: <ul><li> Pilih material yang memiliki kualitas tinggi dan harga yang kompetitif</li><li> Optimalkan desain struktur bangunan untuk mengurangi kebutuhan material</li><li> Gunakan teknologi dan metode konstruksi yang efisien</li><li> Lakukan perencanaan yang matang dan akurat sebelum memulai proyek</li></ul> Dengan mengikuti tips di atas, Anda dapat menghemat biaya konstruksi dan meningkatkan efisiensi proyek.",
          "productId": 7
        },
        {
          "heading": "Mengapa Memilih Mandiri Steel",
          "content": "<strong>Mandiri Steel</strong> adalah penyedia jasa konstruksi baja terpercaya di Bekasi. Kami memiliki pengalaman lebih dari 25 tahun dalam menyediakan jasa konstruksi baja untuk berbagai proyek, dari rumah tinggal hingga gedung bertingkat. <br><br> Kami menggunakan material SNI yang memiliki kualitas tinggi dan harga yang kompetitif. Kami juga memiliki tim yang berpengalaman dan terlatih untuk melakukan perencanaan, desain, dan pemasangan struktur baja. <br><br> Dengan memilih <strong>Mandiri Steel</strong>, Anda dapat yakin bahwa proyek Anda akan diselesaikan dengan baik dan sesuai dengan kebutuhan Anda. Kami menawarkan garansi struktur baja selama 10 tahun, sehingga Anda dapat yakin bahwa struktur baja Anda akan tetap kuat dan aman selama bertahun-tahun.",
          "productId": 7
        },
        {
          "heading": "Layanan Konstruksi Baja di Bekasi",
          "content": "<strong>Mandiri Steel</strong> menyediakan layanan konstruksi baja di Bekasi dan sekitarnya. Kami memiliki tim yang berpengalaman dan terlatih untuk melakukan perencanaan, desain, dan pemasangan struktur baja. <br><br> Kami melayani berbagai proyek, dari rumah tinggal hingga gedung bertingkat. Kami juga menyediakan layanan konsultasi untuk membantu Anda dalam merencanakan dan merancang struktur baja yang sesuai dengan kebutuhan Anda. <br><br> Dengan memilih <strong>Mandiri Steel</strong>, Anda dapat yakin bahwa proyek Anda akan diselesaikan dengan baik dan sesuai dengan kebutuhan Anda. Kami menawarkan harga yang kompetitif dan garansi struktur baja selama 10 tahun.",
          "productId": 7
        }
      ],
      "conclusion": "Dalam kesimpulan, menghitung kebutuhan baja WF dan H-beam secara akurat sangat penting untuk memastikan kekuatan dan keamanan struktur bangunan. Dengan memilih <strong>Mandiri Steel</strong> sebagai penyedia jasa konstruksi baja terpercaya di Bekasi, Anda dapat yakin bahwa proyek Anda akan diselesaikan dengan baik dan sesuai dengan kebutuhan Anda. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang layanan konstruksi baja kami."
    },
    "tags": [
      "Steel Construction",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 20,
    "title": "Menghitung Kebutuhan Material Pagar Besi",
    "slug": "cara-menghitung-kebutuhan-material-pagar-besi",
    "excerpt": "Panduan lengkap menghitung kebutuhan material pagar besi untuk rumah di Bekasi",
    "category": "Gate Designs",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1666359330862-a50766f6ee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxwZW1idWF0YW4lMjBwYWdhciUyMGJlc2l8ZW58MHwwfHx8MTc4Mzk4MjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Membangun atau merenovasi rumah di Bekasi memerlukan perencanaan yang matang, terutama dalam menghitung kebutuhan material untuk <strong>pembuatan pagar besi</strong>. Pagar besi tidak hanya berfungsi sebagai pelindung, tetapi juga sebagai unsur estetika yang meningkatkan nilai rumah. Dalam artikel ini, kita akan membahas <strong>cara menghitung kebutuhan material pagar besi</strong> dengan benar dan beberapa tips untuk memilih <strong>pagar besi</strong> yang tepat untuk rumah Anda di Bekasi. <strong>Mandiri Steel</strong> hadir untuk membantu Anda dalam proses ini.",
      "keyPoints": [
        "Menghitung panjang dan tinggi pagar",
        "Memilih jenis besi yang tepat",
        "Menghitung kebutuhan bahan lainnya"
      ],
      "sections": [
        {
          "heading": "1. Menghitung Panjang dan Tinggi Pagar",
          "content": "Sebelum memulai, <strong>ukur panjang dan tinggi pagar</strong> yang diinginkan. Pastikan untuk mempertimbangkan <strong>ukuran lahan</strong> dan <strong>desain rumah</strong> Anda. Jika Anda tinggal di <strong>Bekasi</strong> atau sekitarnya, seperti <strong>Cikarang</strong> atau <strong>Tambun</strong>, pertimbangkan juga <strong>lingkungan sekitar</strong> untuk memilih desain pagar yang sesuai. <br><br> Contohnya, jika Anda memiliki rumah di <strong>Grand Wisata</strong> atau <strong>Summarecon Bekasi</strong>, Anda mungkin ingin memilih pagar yang lebih modern dan minimalis. <br><br> Setelah memiliki ukuran pagar, Anda dapat menghitung <strong>kebutuhan material</strong> yang diperlukan.",
          "imageSearchQuery": "ukuran pagar besi",
          "image": "https://images.unsplash.com/photo-1666359330862-a50766f6ee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHx1a3VyYW4lMjBwYWdhciUyMGJlc2l8ZW58MHwwfHx8MTc4Mzk4MjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "2. Memilih Jenis Besi yang Tepat",
          "content": "Pilih <strong>jenis besi</strong> yang sesuai dengan kebutuhan Anda. <strong>Besi hollow</strong> dan <strong>besi solid</strong> adalah pilihan umum. <strong>Besi hollow</strong> lebih ringan dan ekonomis, sedangkan <strong>besi solid</strong> lebih kuat dan tahan lama. <br><br> Pertimbangkan juga <strong>ketebalan besi</strong> yang dibutuhkan. <strong>Besi</strong> dengan ketebalan yang lebih besar akan lebih kuat, tetapi juga lebih berat dan mahal. <br><br> <strong>Mandiri Steel</strong> menawarkan berbagai pilihan <strong>besi</strong> dengan kualitas terjamin dan harga kompetitif.",
          "productId": 3
        },
        {
          "heading": "3. Menghitung Kebutuhan Bahan Lainnya",
          "content": "Selain <strong>besi</strong>, Anda juga memerlukan <strong>bahan lainnya</strong> seperti <strong>kawat</strong>, <strong>mur</strong>, dan <strong>cat</strong>. <strong>Kawat</strong> digunakan untuk menghubungkan <strong>besi</strong>, sedangkan <strong>mur</strong> digunakan untuk mengencangkan <strong>besi</strong> ke <strong>tiang</strong>. <strong>Cat</strong> digunakan untuk melindungi <strong>besi</strong> dari <strong>karat</strong> dan memberikan warna yang diinginkan. <br><br> Pastikan untuk menghitung kebutuhan <strong>bahan lainnya</strong> dengan benar untuk menghindari <strong>kekurangan</strong> atau <strong>kelebihan</strong> bahan.",
          "productId": 3
        },
        {
          "heading": "4. Tips Menghitung Kebutuhan Material Pagar Besi",
          "content": "Berikut beberapa <strong>tips</strong> untuk menghitung kebutuhan material pagar besi: <br><br> <ul> <li>Pastikan untuk mengukur <strong>ukuran lahan</strong> dengan benar.</li> <li>Pilih <strong>jenis besi</strong> yang sesuai dengan kebutuhan Anda.</li> <li>Pertimbangkan <strong>lingkungan sekitar</strong> untuk memilih desain pagar yang sesuai.</li> <li>Pastikan untuk menghitung kebutuhan <strong>bahan lainnya</strong> dengan benar.</li> </ul> <br><br> Dengan mengikuti tips di atas, Anda dapat menghitung kebutuhan material pagar besi dengan benar dan memilih pagar yang sesuai dengan kebutuhan Anda.",
          "productId": 3
        },
        {
          "heading": "5. Mengapa Memilih Mandiri Steel?",
          "content": "Mandiri Steel memiliki <strong>pengalaman lebih dari 25 tahun</strong> dalam pembuatan pagar besi. Kami menggunakan <strong>bahan-bahan berkualitas</strong> yang memenuhi standar SNI dan menawarkan <strong>garansi struktural</strong> untuk semua produk kami. <br><br> Kami juga menawarkan <strong>survei lapangan gratis</strong> untuk membantu Anda dalam proses perencanaan dan pembuatan pagar besi. <br><br> Dengan memilih Mandiri Steel, Anda dapat yakin bahwa pagar besi Anda akan dibuat dengan kualitas terbaik dan sesuai dengan kebutuhan Anda.",
          "productId": 3
        },
        {
          "heading": "6. Layanan di Bekasi dan Sekitarnya",
          "content": "Mandiri Steel melayani <strong>Bekasi</strong> dan sekitarnya, termasuk <strong>Cikarang</strong>, <strong>Tambun</strong>, <strong>Cibitung</strong>, <strong>Jababeka</strong>, <strong>MM2100</strong>, <strong>Grand Wisata</strong>, <strong>Summarecon Bekasi</strong>, <strong>Kota Deltamas</strong>, dan <strong>Lippo Cikarang</strong>. <br><br> Kami siap membantu Anda dalam proses pembuatan pagar besi, dari perencanaan hingga pemasangan. <br><br> Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang layanan kami dan untuk memulai proses pembuatan pagar besi impian Anda.",
          "productId": 3
        }
      ],
      "conclusion": "Dengan mengikuti tips dan panduan di atas, Anda dapat menghitung kebutuhan material pagar besi dengan benar dan memilih pagar yang sesuai dengan kebutuhan Anda. Mandiri Steel siap membantu Anda dalam proses pembuatan pagar besi, dari perencanaan hingga pemasangan. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang layanan kami dan untuk memulai proses pembuatan pagar besi impian Anda."
    },
    "tags": [
      "Gate Designs",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 21,
    "title": "Railing Tangga yang Aman",
    "slug": "railing-tangga-aman-bekasi",
    "excerpt": "Standar tinggi railing tangga untuk keselamatan bangunan di Indonesia",
    "category": "Stair and Railing",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1523789248610-bb592e870951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxyYWlsaW5nJTIwdGFuZ2dhJTIwbW9kZXJufGVufDB8MHx8fDE3ODM5ODI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Railing tangga adalah salah satu komponen penting dalam sebuah bangunan, baik itu rumah, gedung perkantoran, maupun pusat perbelanjaan. <strong>Railing tangga yang aman</strong> tidak hanya berfungsi sebagai penopang, tetapi juga sebagai <strong>penjamin keselamatan</strong> bagi pengguna tangga. Dalam artikel ini, kita akan membahas tentang standar tinggi railing tangga sesuai regulasi keselamatan bangunan Indonesia, serta tips dan contoh dalam memilih railing tangga yang tepat.",
      "keyPoints": [
        "Standar tinggi railing tangga",
        "Fungsi railing tangga",
        "Tips memilih railing tangga"
      ],
      "sections": [
        {
          "heading": "1. Mengenal Railing Tangga",
          "content": "Railing tangga adalah struktur yang terletak di sepanjang tangga, berfungsi sebagai <strong>penopang</strong> dan <strong>penjamin keselamatan</strong> bagi pengguna tangga. Railing tangga dapat dibuat dari berbagai bahan, seperti <strong>baja</strong>, <strong>aluminum</strong>, atau <strong>kayu</strong>. Dalam memilih railing tangga, perlu dipertimbangkan <strong>kekuatan</strong>, <strong>kestabilan</strong>, dan <strong>keamanan</strong>.",
          "imageSearchQuery": "railing tangga baja",
          "image": "https://images.unsplash.com/photo-1587173616214-b1b6df584362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxyYWlsaW5nJTIwdGFuZ2dhJTIwYmFqYXxlbnwwfDB8fHwxNzgzOTgyNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "2. Standar Tinggi Railing Tangga",
          "content": "Menurut regulasi keselamatan bangunan Indonesia, <strong>tinggi railing tangga</strong> harus memenuhi standar tertentu. <strong>Tinggi railing tangga</strong> harus minimal <strong>90 cm</strong> dan maksimal <strong>110 cm</strong> dari permukaan tangga. Selain itu, <strong>lebar railing tangga</strong> harus minimal <strong>30 cm</strong> dan maksimal <strong>50 cm</strong>. Dalam memilih railing tangga, perlu dipertimbangkan <strong>ukuran</strong> dan <strong>bentuk</strong> yang sesuai dengan kebutuhan."
        },
        {
          "heading": "3. Fungsi Railing Tangga",
          "content": "Railing tangga memiliki beberapa fungsi, antara lain: <strong>penopang</strong>, <strong>penjamin keselamatan</strong>, dan <strong>estetika</strong>. Railing tangga dapat membantu <strong>mencegah jatuh</strong> dan <strong>melindungi</strong> pengguna tangga dari <strong>bahaya</strong>. Selain itu, railing tangga juga dapat <strong>menambah keindahan</strong> dan <strong>keasrian</strong> bangunan. Dalam memilih railing tangga, perlu dipertimbangkan <strong>fungsi</strong> dan <strong>kebutuhan</strong>.",
          "productId": 6
        },
        {
          "heading": "4. Tips Memilih Railing Tangga",
          "content": "Dalam memilih railing tangga, perlu dipertimbangkan beberapa hal, antara lain: <strong>kekuatan</strong>, <strong>kestabilan</strong>, <strong>keamanan</strong>, <strong>ukuran</strong>, dan <strong>bentuk</strong>. Selain itu, perlu dipertimbangkan <strong>bahan</strong> dan <strong>finishing</strong> yang sesuai dengan kebutuhan. Berikut beberapa tips memilih railing tangga: <ul><li>Pilih railing tangga yang kuat dan stabil</li><li>Pertimbangkan ukuran dan bentuk yang sesuai</li><li>Pilih bahan dan finishing yang sesuai</li></ul>"
        },
        {
          "heading": "5. Mengapa Memilih Mandiri Steel?",
          "content": "Mandiri Steel adalah salah satu perusahaan yang berpengalaman dalam <strong>produksi railing tangga</strong> dan <strong>konstruksi baja</strong>. Dengan <strong>25 tahun pengalaman</strong>, Mandiri Steel telah menjadi salah satu <strong>penyedia railing tangga terbaik</strong> di Indonesia. Mandiri Steel menggunakan <strong>bahan SNI</strong> dan <strong>teknologi canggih</strong> untuk memproduksi railing tangga yang kuat dan stabil. Selain itu, Mandiri Steel juga <strong>menawarkan garansi struktural</strong> dan <strong>survey gratis</strong> untuk memastikan kepuasan pelanggan.",
          "productId": 6
        },
        {
          "heading": "6. Layanan Railing Tangga di Bekasi dan Jabodetabek",
          "content": "Mandiri Steel menyediakan layanan <strong>railing tangga</strong> di <strong>Bekasi</strong>, <strong>Cikarang</strong>, <strong>Tambun</strong>, <strong>Cibitung</strong>, <strong>Jababeka</strong>, <strong>MM2100</strong>, <strong>Grand Wisata</strong>, <strong>Summarecon Bekasi</strong>, <strong>Kota Deltamas</strong>, dan <strong>Lippo Cikarang</strong>. Dengan <strong>tim yang berpengalaman</strong> dan <strong>peralatan canggih</strong>, Mandiri Steel dapat memenuhi kebutuhan railing tangga Anda dengan cepat dan efisien."
        }
      ],
      "conclusion": "Dalam memilih railing tangga, perlu dipertimbangkan beberapa hal, antara lain: kekuatan, kestabilan, keamanan, ukuran, dan bentuk. Dengan memilih Mandiri Steel, Anda dapat memperoleh railing tangga yang kuat, stabil, dan aman. Jangan ragu untuk menghubungi Mandiri Steel untuk memenuhi kebutuhan railing tangga Anda."
    },
    "tags": [
      "Stair and Railing",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 16,
    "title": "Panduan Cat Anti Karat untuk Besi Outdoor",
    "slug": "panduan-cat-anti-karat-besi-outdoor",
    "excerpt": "Panduan lengkap tentang cat anti karat untuk besi outdoor, jenis, merek, dan cara aplikasi yang benar",
    "category": "Tips and Trick",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "content": {
      "introduction": "Besi outdoor seperti pagar, kanopi, dan railing merupakan elemen penting dalam desain eksterior rumah. Namun, besi outdoor rentan terhadap korosi dan karat akibat paparan cuaca. Oleh karena itu, penting untuk menggunakan cat anti karat yang tepat untuk melindungi besi outdoor dari kerusakan. Dalam artikel ini, kita akan membahas tentang jenis, merek, dan cara aplikasi cat anti karat yang benar untuk besi outdoor. Mandiri Steel, sebagai bengkel las bekasi yang berpengalaman lebih dari 25 tahun, akan membagikan tips dan trik tentang cara memilih dan mengaplikasikan cat anti karat yang tepat.",
      "keyPoints": [
        "Jenis cat anti karat untuk besi outdoor",
        "Merek cat anti karat yang terkenal dan berkualitas",
        "Cara aplikasi cat anti karat yang benar",
        "Tips dan trik untuk memilih cat anti karat yang tepat"
      ],
      "sections": [
        {
          "heading": "Jenis Cat Anti Karat untuk Besi Outdoor",
          "content": "Cat anti karat untuk besi outdoor dapat dibagi menjadi beberapa jenis, yaitu cat epoxy, cat polyurethane, dan cat alkyd. Cat epoxy merupakan jenis cat yang paling umum digunakan karena memiliki ketahanan yang tinggi terhadap korosi dan karat. Cat polyurethane juga memiliki ketahanan yang tinggi, tetapi lebih fleksibel daripada cat epoxy. Cat alkyd merupakan jenis cat yang lebih murah dan mudah diaplikasikan, tetapi memiliki ketahanan yang lebih rendah daripada cat epoxy dan polyurethane. <br><br> Contoh nyata dari penggunaan cat anti karat untuk besi outdoor dapat dilihat di proyek-proyek pembangunan di Bekasi, Cikarang, dan Tambun. Di daerah-daerah tersebut, banyak digunakan cat epoxy dan polyurethane untuk melindungi besi outdoor dari korosi dan karat.",
          "imageSearchQuery": "jenis cat anti karat besi outdoor",
          "image": "https://images.unsplash.com/photo-1758261895672-af5a00bc9456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxqZW5pcyUyMGNhdCUyMGFudGklMjBrYXJhdCUyMGJlc2klMjBvdXRkb29yfGVufDB8MHx8fDE3ODM5ODA4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Merek Cat Anti Karat yang Terkenal dan Berkualitas",
          "content": "Beberapa merek cat anti karat yang terkenal dan berkualitas di Indonesia adalah Jotun, Dulux, dan Nippon Paint. Merek-merek tersebut memiliki reputasi yang baik dan telah digunakan dalam banyak proyek pembangunan di Indonesia. <br><br> Selain itu, perlu diingat bahwa kualitas cat anti karat juga tergantung pada kualitas bahan yang digunakan. Oleh karena itu, penting untuk memilih merek cat anti karat yang menggunakan bahan-bahan yang berkualitas tinggi. <br><br> Mandiri Steel, sebagai bengkel las bekasi yang berpengalaman, telah bekerja sama dengan beberapa merek cat anti karat yang terkenal dan berkualitas. Kami dapat membantu Anda memilih merek cat anti karat yang tepat untuk proyek Anda."
        },
        {
          "heading": "Cara Aplikasi Cat Anti Karat yang Benar",
          "content": "Cara aplikasi cat anti karat yang benar sangat penting untuk memastikan bahwa cat anti karat dapat melindungi besi outdoor dari korosi dan karat. Berikut beberapa tips tentang cara aplikasi cat anti karat yang benar: <br><br> 1. Pastikan permukaan besi outdoor bersih dan kering sebelum diaplikasikan cat anti karat. <br><br> 2. Gunakan primer cat anti karat sebelum mengaplikasikan cat anti karat. <br><br> 3. Aplikasikan cat anti karat dengan menggunakan kuas atau spray gun. <br><br> 4. Pastikan cat anti karat telah kering sepenuhnya sebelum diaplikasikan lapisan kedua. <br><br> Dengan mengikuti tips di atas, Anda dapat memastikan bahwa cat anti karat dapat melindungi besi outdoor dari korosi dan karat.",
          "productId": 1
        },
        {
          "heading": "Tips dan Trik untuk Memilih Cat Anti Karat yang Tepat",
          "content": "Memilih cat anti karat yang tepat dapat memastikan bahwa besi outdoor Anda dapat dilindungi dari korosi dan karat. Berikut beberapa tips dan trik untuk memilih cat anti karat yang tepat: <br><br> 1. Pastikan Anda memilih cat anti karat yang sesuai dengan jenis besi outdoor Anda. <br><br> 2. Periksa label cat anti karat untuk memastikan bahwa cat anti karat tersebut sesuai dengan standar kualitas yang ditetapkan. <br><br> 3. Baca review dan testimonial dari pengguna cat anti karat tersebut untuk memastikan bahwa cat anti karat tersebut efektif dan berkualitas. <br><br> Dengan mengikuti tips di atas, Anda dapat memilih cat anti karat yang tepat untuk proyek Anda.",
          "productId": 3
        },
        {
          "heading": "Kesimpulan",
          "content": "Dalam artikel ini, kita telah membahas tentang jenis, merek, dan cara aplikasi cat anti karat yang benar untuk besi outdoor. Mandiri Steel, sebagai bengkel las bekasi yang berpengalaman, dapat membantu Anda memilih dan mengaplikasikan cat anti karat yang tepat untuk proyek Anda. <br><br> Dengan menggunakan cat anti karat yang tepat, Anda dapat memastikan bahwa besi outdoor Anda dapat dilindungi dari korosi dan karat, sehingga dapat meningkatkan umur dan keamanan bangunan Anda. <br><br> Jangan ragu untuk menghubungi Mandiri Steel untuk mendapatkan informasi lebih lanjut tentang cat anti karat dan layanan lainnya."
        }
      ],
      "conclusion": "Panduan cat anti karat untuk besi outdoor ini dapat membantu Anda memilih dan mengaplikasikan cat anti karat yang tepat untuk proyek Anda. Dengan menggunakan cat anti karat yang tepat, Anda dapat memastikan bahwa besi outdoor Anda dapat dilindungi dari korosi dan karat, sehingga dapat meningkatkan umur dan keamanan bangunan Anda."
    },
    "tags": [
      "Tips and Trick",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 17,
    "title": "Jasa Las Bekasi untuk Perumahan Baru",
    "slug": "jasa-las-bekasi-untuk-perumahan-baru",
    "excerpt": "Mandiri Steel, bengkel las terpercaya di Bekasi, menawarkan jasa las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta",
    "category": "Steel Construction",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "content": {
      "introduction": "Dalam beberapa tahun terakhir, Kota Bekasi dan sekitarnya telah mengalami pertumbuhan pesat di bidang properti, terutama di daerah Kota Deltamas, Lippo Cikarang, dan Meikarta. Seiring dengan pertumbuhan ini, kebutuhan akan jasa las yang berkualitas dan terpercaya juga meningkat. Mandiri Steel, sebagai bengkel las yang telah berpengalaman lebih dari 25 tahun, hadir untuk memenuhi kebutuhan tersebut dengan menawarkan jasa las untuk perumahan baru di daerah tersebut.",
      "keyPoints": [
        "Mandiri Steel menawarkan jasa las yang berkualitas dan terpercaya",
        "Kami menggunakan bahan-bahan SNI yang heavy-duty untuk memastikan keamanan dan ketahanan",
        "Tim kami yang berpengalaman akan melakukan survei dan pengukuran on-site secara gratis",
        "Kami memberikan garansi struktural untuk semua pekerjaan kami",
        "Kami melayani kebutuhan jasa las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta"
      ],
      "sections": [
        {
          "heading": "Mengapa Memilih Mandiri Steel untuk Jasa Las Perumahan Baru?",
          "content": "Mandiri Steel telah berdiri selama lebih dari 25 tahun dan telah menjadi salah satu bengkel las terpercaya di Bekasi. Kami memiliki tim yang berpengalaman dan terlatih untuk menangani berbagai jenis pekerjaan las, dari yang sederhana hingga yang kompleks. Kami menggunakan bahan-bahan SNI yang heavy-duty untuk memastikan keamanan dan ketahanan semua pekerjaan kami. Dengan demikian, Anda dapat yakin bahwa perumahan baru Anda akan dibangun dengan kuat dan tahan lama.",
          "imageSearchQuery": "bengkel las bekasi terpercaya",
          "image": "https://images.unsplash.com/photo-1655558852019-bfa6231825d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxiZW5na2VsJTIwbGFzJTIwYmVrYXNpJTIwdGVycGVyY2F5YXxlbnwwfDB8fHwxNzgzOTgwOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Kelebihan Jasa Las Mandiri Steel",
          "content": "Mandiri Steel memiliki beberapa kelebihan yang membuat kami berbeda dari yang lain. Pertama, kami menawarkan survei dan pengukuran on-site secara gratis untuk memastikan bahwa pekerjaan kami sesuai dengan kebutuhan Anda. Kedua, kami memberikan garansi struktural untuk semua pekerjaan kami, sehingga Anda dapat yakin bahwa perumahan baru Anda akan dibangun dengan kuat dan tahan lama. Ketiga, kami memiliki tim yang berpengalaman dan terlatih untuk menangani berbagai jenis pekerjaan las, sehingga Anda dapat yakin bahwa pekerjaan kami akan dilakukan dengan cepat dan efisien."
        },
        {
          "heading": "Tips untuk Memilih Jasa Las yang Tepat untuk Perumahan Baru",
          "content": "Dalam memilih jasa las untuk perumahan baru, ada beberapa hal yang perlu Anda pertimbangkan. Pertama, pastikan bahwa jasa las yang Anda pilih memiliki pengalaman yang cukup dan reputasi yang baik. Kedua, pastikan bahwa jasa las yang Anda pilih menggunakan bahan-bahan SNI yang heavy-duty untuk memastikan keamanan dan ketahanan. Ketiga, pastikan bahwa jasa las yang Anda pilih menawarkan survei dan pengukuran on-site secara gratis untuk memastikan bahwa pekerjaan mereka sesuai dengan kebutuhan Anda. Dengan mempertimbangkan hal-hal tersebut, Anda dapat yakin bahwa perumahan baru Anda akan dibangun dengan kuat dan tahan lama.",
          "productId": 1
        },
        {
          "heading": "Contoh Pekerjaan Jasa Las Mandiri Steel",
          "content": "Mandiri Steel telah menangani berbagai jenis pekerjaan las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta. Salah satu contoh pekerjaan kami adalah pembangunan kanopi minimalis Alderon (Kanopi - Best Seller) untuk sebuah perumahan baru di Kota Deltamas. Kanopi ini dibangun dengan menggunakan bahan-bahan SNI yang heavy-duty dan dirancang untuk memastikan keamanan dan ketahanan. Dengan demikian, perumahan baru tersebut dapat dibangun dengan kuat dan tahan lama.",
          "productId": 2
        },
        {
          "heading": "Mengapa Memilih Mandiri Steel untuk Jasa Las di Bekasi?",
          "content": "Mandiri Steel telah menjadi salah satu bengkel las terpercaya di Bekasi karena kami memiliki tim yang berpengalaman dan terlatih, menggunakan bahan-bahan SNI yang heavy-duty, dan menawarkan survei dan pengukuran on-site secara gratis. Dengan demikian, Anda dapat yakin bahwa perumahan baru Anda akan dibangun dengan kuat dan tahan lama. Selain itu, kami juga melayani kebutuhan jasa las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta, sehingga Anda dapat yakin bahwa kami dapat menangani pekerjaan las Anda dengan cepat dan efisien.",
          "productId": 3
        }
      ],
      "conclusion": "Dalam memilih jasa las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta, pastikan bahwa Anda memilih jasa las yang berkualitas dan terpercaya. Mandiri Steel, sebagai bengkel las yang telah berpengalaman lebih dari 25 tahun, hadir untuk memenuhi kebutuhan tersebut dengan menawarkan jasa las yang berkualitas dan terpercaya. Dengan menggunakan bahan-bahan SNI yang heavy-duty, menawarkan survei dan pengukuran on-site secara gratis, dan memberikan garansi struktural untuk semua pekerjaan kami, Anda dapat yakin bahwa perumahan baru Anda akan dibangun dengan kuat dan tahan lama. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang jasa las kami!"
    },
    "tags": [
      "Steel Construction",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 18,
    "title": "Mezzanine Baja Ruko Cikarang",
    "slug": "mezzanine-baja-ruko-cikarang",
    "excerpt": "Mezzanine baja untuk ruko dan toko di Cikarang: desain, kekuatan, dan estimasi biaya",
    "category": "Steel Construction",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1593012672010-5709b6d407cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtZXp6YW5pbmUlMjBzdGVlbCUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8fHwxNzgzOTgwOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Dalam beberapa tahun terakhir, permintaan akan mezzanine baja untuk ruko dan toko di Cikarang meningkat pesat. Hal ini disebabkan oleh kebutuhan akan ruang tambahan yang efektif dan efisien. Mezzanine baja dapat menjadi solusi yang tepat untuk meningkatkan kapasitas penyimpanan dan memaksimalkan ruang. Dalam artikel ini, kita akan membahas tentang desain, kekuatan, dan estimasi biaya mezzanine baja untuk ruko dan toko di Cikarang.",
      "keyPoints": [
        "Mezzanine baja dapat meningkatkan kapasitas penyimpanan",
        "Desain mezzanine baja yang tepat dapat memaksimalkan ruang",
        "Estimasi biaya mezzanine baja yang akurat dapat membantu dalam perencanaan"
      ],
      "sections": [
        {
          "heading": "Desain Mezzanine Baja",
          "content": "Desain mezzanine baja yang tepat sangat penting untuk memaksimalkan ruang dan meningkatkan kapasitas penyimpanan. Beberapa hal yang perlu dipertimbangkan dalam desain mezzanine baja adalah <strong>ukuran, bentuk, dan material</strong>. Ukuran mezzanine baja harus disesuaikan dengan ukuran ruko atau toko, sedangkan bentuknya harus sesuai dengan kebutuhan penyimpanan. Material yang digunakan juga harus kuat dan tahan lama, seperti <em>baja</em> yang diproduksi oleh Mandiri Steel, sebuah perusahaan baja yang telah berpengalaman lebih dari 25 tahun di Bekasi.",
          "imageSearchQuery": "steel mezzanine design",
          "image": "https://images.unsplash.com/photo-1727062307337-bde82e3e4672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1lenphbmluZSUyMGRlc2lnbnxlbnwwfDB8fHwxNzgzOTgwOTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Kekuatan Mezzanine Baja",
          "content": "Kekuatan mezzanine baja sangat penting untuk menjamin keselamatan dan keamanan ruko atau toko. Beberapa faktor yang mempengaruhi kekuatan mezzanine baja adalah <strong>material, konstruksi, dan pemasangan</strong>. Material baja yang digunakan harus memiliki kekuatan yang tinggi dan tahan lama, sedangkan konstruksi mezzanine baja harus direncanakan dengan baik untuk menahan beban yang berat. Pemasangan mezzanine baja juga harus dilakukan dengan hati-hati dan teliti untuk memastikan bahwa semua komponen terpasang dengan baik."
        },
        {
          "heading": "Estimasi Biaya Mezzanine Baja",
          "content": "Estimasi biaya mezzanine baja sangat penting untuk membantu dalam perencanaan dan anggaran. Beberapa faktor yang mempengaruhi biaya mezzanine baja adalah <strong>ukuran, material, dan kompleksitas</strong>. Ukuran mezzanine baja yang lebih besar akan memerlukan biaya yang lebih tinggi, sedangkan material yang digunakan juga akan mempengaruhi biaya. Kompleksitas desain dan konstruksi mezzanine baja juga akan mempengaruhi biaya. Dengan demikian, penting untuk melakukan survei dan pengukuran yang akurat sebelum memulai proyek mezzanine baja. Mandiri Steel menawarkan <strong>survei dan pengukuran gratis</strong> untuk membantu dalam perencanaan dan anggaran.",
          "productId": 7
        },
        {
          "heading": "Tips dan Saran",
          "content": "Dalam memilih mezzanine baja, ada beberapa tips dan saran yang perlu dipertimbangkan. Pertama, <strong>pilih material yang kuat dan tahan lama</strong>. Kedua, <strong>perhatikan desain dan konstruksi</strong> mezzanine baja untuk memastikan bahwa semua komponen terpasang dengan baik. Ketiga, <strong>pastikan bahwa mezzanine baja dipasang dengan hati-hati dan teliti</strong> untuk memastikan keselamatan dan keamanan. Dengan demikian, mezzanine baja dapat menjadi solusi yang tepat untuk meningkatkan kapasitas penyimpanan dan memaksimalkan ruang.",
          "productId": 1
        },
        {
          "heading": "Kesimpulan",
          "content": "Mezzanine baja dapat menjadi solusi yang tepat untuk meningkatkan kapasitas penyimpanan dan memaksimalkan ruang. Dengan desain yang tepat, kekuatan yang tinggi, dan estimasi biaya yang akurat, mezzanine baja dapat menjadi investasi yang berharga untuk ruko dan toko di Cikarang. Mandiri Steel, sebagai perusahaan baja yang telah berpengalaman lebih dari 25 tahun di Bekasi, dapat membantu dalam perencanaan, desain, dan pemasangan mezzanine baja. Dengan <strong>garansi struktural</strong> dan <strong>lasan yang rapi</strong>, Mandiri Steel dapat memastikan bahwa mezzanine baja yang dipasang dapat bertahan lama dan aman.",
          "productId": 3
        }
      ],
      "conclusion": "Dengan demikian, mezzanine baja dapat menjadi solusi yang tepat untuk meningkatkan kapasitas penyimpanan dan memaksimalkan ruang. Dengan mempertimbangkan desain, kekuatan, dan estimasi biaya, serta memilih material yang kuat dan tahan lama, mezzanine baja dapat menjadi investasi yang berharga untuk ruko dan toko di Cikarang. Mandiri Steel siap membantu dalam perencanaan, desain, dan pemasangan mezzanine baja untuk memastikan bahwa mezzanine baja yang dipasang dapat bertahan lama dan aman."
    },
    "tags": [
      "Steel Construction",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 13,
    "title": "Desain Teralis Jendela Minimalis",
    "slug": "desain-teralis-jendela-minimalis",
    "excerpt": "Inspirasi desain teralis jendela minimalis dengan plat cutting laser untuk rumah modern di Bekasi",
    "category": "Home Security",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1492999104346-cabaa757be8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2luZG93JTIwdHJlbGxpcyUyMGRlc2lnbnxlbnwwfDB8fHwxNzgzOTgwMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Desain teralis jendela minimalis dengan plat cutting laser telah menjadi tren di kalangan arsitek dan desainer interior di Bekasi. Dengan kemampuan untuk memotong plat dengan presisi tinggi, teknologi laser cutting memungkinkan pembuatan desain yang kompleks dan unik. Pada artikel ini, kita akan membahas inspirasi desain teralis jendela minimalis dengan plat cutting laser untuk rumah modern di Bekasi.",
      "keyPoints": [
        "Desain teralis jendela minimalis dengan plat cutting laser",
        "Inspirasi desain untuk rumah modern di Bekasi",
        "Teknologi laser cutting untuk pembuatan desain yang kompleks"
      ],
      "sections": [
        {
          "heading": "Kelebihan Desain Teralis Jendela Minimalis",
          "content": "Desain teralis jendela minimalis memiliki beberapa kelebihan, seperti kemampuan untuk memaksimalkan pencahayaan alami dan memberikan kesan yang lebih luas pada ruangan. Selain itu, desain minimalis juga dapat memberikan kesan yang lebih modern dan elegan pada rumah. Dengan menggunakan plat cutting laser, desain teralis jendela minimalis dapat dibuat dengan presisi tinggi dan detail yang kompleks. <br> <strong>Mandiri Steel</strong>, sebagai salah satu bengkel las terkemuka di Bekasi, telah memiliki pengalaman lebih dari 25 tahun dalam pembuatan desain teralis jendela minimalis dengan plat cutting laser. Dengan menggunakan bahan-bahan yang berkualitas tinggi dan teknologi laser cutting yang canggih, Mandiri Steel dapat membantu Anda menciptakan desain teralis jendela minimalis yang unik dan sesuai dengan kebutuhan Anda.",
          "imageSearchQuery": "minimalist window trellis design with laser cutting",
          "image": "https://images.unsplash.com/photo-1743901371006-a7f2aa308ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2luZG93JTIwdHJlbGxpcyUyMGRlc2lnbiUyMHdpdGglMjBsYXNlciUyMGN1dHRpbmd8ZW58MHwwfHx8MTc4Mzk4MDIzMXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Inspirasi Desain Teralis Jendela Minimalis",
          "content": "Berikut beberapa inspirasi desain teralis jendela minimalis yang dapat Anda pertimbangkan untuk rumah modern di Bekasi: <br> 1. Desain geometris: Desain geometris dapat memberikan kesan yang modern dan elegan pada rumah. Anda dapat menggunakan kombinasi bentuk-bentuk geometris seperti lingkaran, segitiga, dan persegi untuk menciptakan desain yang unik. <br> 2. Desain alami: Desain alami dapat memberikan kesan yang lebih dekat dengan alam pada rumah. Anda dapat menggunakan motif-motif alami seperti daun, bunga, dan awan untuk menciptakan desain yang unik. <br> 3. Desain abstrak: Desain abstrak dapat memberikan kesan yang lebih modern dan kontemporer pada rumah. Anda dapat menggunakan kombinasi bentuk-bentif abstrak seperti garis, kurva, dan bentuk-bentuk tidak teratur untuk menciptakan desain yang unik."
        },
        {
          "heading": "Tips Membuat Desain Teralis Jendela Minimalis",
          "content": "Berikut beberapa tips yang dapat Anda pertimbangkan saat membuat desain teralis jendela minimalis: <br> 1. Gunakan bahan-bahan yang berkualitas tinggi: Bahan-bahan yang berkualitas tinggi dapat memberikan kesan yang lebih baik pada desain teralis jendela minimalis. Pastikan Anda memilih bahan-bahan yang tahan lama dan tidak mudah rusak. <br> 2. Perhatikan ukuran dan proporsi: Ukuran dan proporsi desain teralis jendela minimalis dapat mempengaruhi kesan yang dihasilkan. Pastikan Anda memperhatikan ukuran dan proporsi desain agar sesuai dengan kebutuhan Anda. <br> 3. Gunakan teknologi laser cutting: Teknologi laser cutting dapat membantu Anda menciptakan desain yang kompleks dan unik. Pastikan Anda mempertimbangkan menggunakan teknologi laser cutting saat membuat desain teralis jendela minimalis.",
          "productId": 5
        },
        {
          "heading": "Manfaat Menggunakan Jasa Bengkel Las",
          "content": "Menggunakan jasa bengkel las dapat memberikan beberapa manfaat, seperti: <br> 1. Kemampuan untuk membuat desain yang kompleks: Bengkel las dapat membantu Anda membuat desain yang kompleks dan unik. <br> 2. Pengalaman dan keahlian: Bengkel las memiliki pengalaman dan keahlian yang lebih baik dalam pembuatan desain teralis jendela minimalis. <br> 3. Bahan-bahan yang berkualitas tinggi: Bengkel las dapat membantu Anda memilih bahan-bahan yang berkualitas tinggi untuk desain teralis jendela minimalis.",
          "productId": 1
        },
        {
          "heading": "Kesimpulan",
          "content": "Desain teralis jendela minimalis dengan plat cutting laser dapat memberikan kesan yang modern dan elegan pada rumah. Dengan menggunakan teknologi laser cutting dan bahan-bahan yang berkualitas tinggi, Anda dapat menciptakan desain yang unik dan sesuai dengan kebutuhan Anda. Pastikan Anda mempertimbangkan menggunakan jasa bengkel las yang berkualitas tinggi seperti Mandiri Steel untuk membantu Anda membuat desain teralis jendela minimalis yang sesuai dengan kebutuhan Anda."
        }
      ],
      "conclusion": "Dengan demikian, desain teralis jendela minimalis dengan plat cutting laser dapat menjadi pilihan yang tepat untuk rumah modern di Bekasi. Pastikan Anda mempertimbangkan menggunakan jasa bengkel las yang berkualitas tinggi dan teknologi laser cutting untuk membantu Anda menciptakan desain yang unik dan sesuai dengan kebutuhan Anda."
    },
    "tags": [
      "Home Security",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 14,
    "title": "Desain Railing Tangga Spiral Besi",
    "slug": "desain-railing-tangga-spiral-besi",
    "excerpt": "Railing tangga spiral besi, solusi hemat ruang untuk rumah mungil di Bekasi",
    "category": "Stair and Railing",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1646489469828-398a6588bd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxyYWlsaW5nJTIwdGFuZ2dhJTIwc3BpcmFsJTIwYmVzaXxlbnwwfDB8fHwxNzgzOTgwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Rumah mungil di Bekasi memerlukan desain yang tepat untuk memaksimalkan ruang. Salah satu solusi yang efektif adalah dengan menggunakan railing tangga spiral besi. Dengan desain yang unik dan fungsional, railing tangga spiral besi dapat membantu Anda memaksimalkan ruang dan menciptakan kesan yang elegan. Pada artikel ini, kita akan membahas lebih lanjut tentang desain railing tangga spiral besi dan bagaimana Anda dapat menggunakannya untuk meningkatkan keindahan dan kenyamanan rumah Anda.",
      "keyPoints": [
        "Railing tangga spiral besi dapat membantu memaksimalkan ruang",
        "Desain yang unik dan fungsional",
        "Menggunakan bahan besi yang kuat dan tahan lama",
        "Dapat dipasang di berbagai jenis tangga"
      ],
      "sections": [
        {
          "heading": "Kelebihan Railing Tangga Spiral Besi",
          "content": "Railing tangga spiral besi memiliki beberapa kelebihan yang membuatnya menjadi pilihan yang populer di kalangan pemilik rumah di Bekasi. Pertama, desainnya yang unik dan elegan dapat menambahkan kesan yang mewah pada rumah Anda. Kedua, railing tangga spiral besi dapat membantu memaksimalkan ruang karena desainnya yang ramping dan tidak memerlukan banyak ruang. Ketiga, bahan besi yang digunakan sangat kuat dan tahan lama, sehingga Anda tidak perlu khawatir tentang keamanan dan kualitasnya. <br> <br> Selain itu, railing tangga spiral besi juga dapat dipasang di berbagai jenis tangga, baik itu tangga lurus, tangga spiral, atau bahkan tangga putar. Hal ini membuatnya sangat fleksibel dan dapat disesuaikan dengan kebutuhan dan desain rumah Anda. <br> <br> Dengan menggunakan railing tangga spiral besi, Anda juga dapat menikmati beberapa manfaat lainnya, seperti kemudahan perawatan dan keamanan yang tinggi. Railing tangga spiral besi sangat mudah dibersihkan dan dirawat, sehingga Anda tidak perlu khawatir tentang biaya perawatan yang tinggi. <br> <br> Jika Anda sedang mencari solusi yang efektif untuk memaksimalkan ruang dan meningkatkan keindahan rumah Anda, maka railing tangga spiral besi adalah pilihan yang tepat. Dengan desain yang unik dan fungsional, serta bahan yang kuat dan tahan lama, railing tangga spiral besi dapat membantu Anda menciptakan rumah yang nyaman dan elegan.",
          "imageSearchQuery": "railing tangga spiral besi modern",
          "image": "https://images.unsplash.com/photo-1646489469828-398a6588bd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxyYWlsaW5nJTIwdGFuZ2dhJTIwc3BpcmFsJTIwYmVzaSUyMG1vZGVybnxlbnwwfDB8fHwxNzgzOTgwMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Tips Menggunakan Railing Tangga Spiral Besi",
          "content": "Jika Anda telah memutuskan untuk menggunakan railing tangga spiral besi, maka ada beberapa tips yang perlu Anda perhatikan untuk memastikan bahwa Anda mendapatkan hasil yang maksimal. Pertama, pastikan Anda memilih desain yang sesuai dengan tema dan gaya rumah Anda. Railing tangga spiral besi tersedia dalam berbagai desain dan gaya, sehingga Anda dapat memilih yang paling sesuai dengan kebutuhan Anda. <br> <br> Kedua, pastikan Anda memilih bahan yang kuat dan tahan lama. Bahan besi yang digunakan harus memiliki kualitas yang tinggi dan dapat menahan beban yang berat. <br> <br> Ketiga, pastikan Anda memasang railing tangga spiral besi dengan benar. Pastikan Anda memilih tukang yang berpengalaman dan memiliki kemampuan yang baik dalam memasang railing tangga spiral besi. <br> <br> Keempat, pastikan Anda merawat railing tangga spiral besi dengan benar. Railing tangga spiral besi harus dibersihkan secara teratur untuk memastikan bahwa ia tetap dalam kondisi yang baik. <br> <br> Dengan mengikuti tips di atas, Anda dapat memastikan bahwa railing tangga spiral besi Anda berfungsi dengan baik dan tetap dalam kondisi yang baik selama bertahun-tahun.",
          "productId": 6
        },
        {
          "heading": "Cara Memilih Railing Tangga Spiral Besi yang Tepat",
          "content": "Memilih railing tangga spiral besi yang tepat dapat menjadi tugas yang sulit, terutama jika Anda tidak memiliki pengalaman dalam memilih produk seperti ini. Namun, dengan beberapa tips yang tepat, Anda dapat memilih railing tangga spiral besi yang sesuai dengan kebutuhan Anda. <br> <br> Pertama, pastikan Anda menentukan budget Anda sebelum membeli railing tangga spiral besi. Railing tangga spiral besi tersedia dalam berbagai harga, sehingga Anda perlu menentukan berapa banyak uang yang Anda ingin keluarkan. <br> <br> Kedua, pastikan Anda mempertimbangkan ukuran dan bentuk tangga Anda. Railing tangga spiral besi harus sesuai dengan ukuran dan bentuk tangga Anda, sehingga pastikan Anda memilih desain yang sesuai. <br> <br> Ketiga, pastikan Anda mempertimbangkan bahan yang digunakan. Bahan besi yang digunakan harus kuat dan tahan lama, sehingga pastikan Anda memilih bahan yang berkualitas tinggi. <br> <br> Keempat, pastikan Anda mempertimbangkan desain dan gaya railing tangga spiral besi. Railing tangga spiral besi tersedia dalam berbagai desain dan gaya, sehingga pastikan Anda memilih yang paling sesuai dengan tema dan gaya rumah Anda.",
          "productId": 6
        },
        {
          "heading": "Mengapa Memilih Mandiri Steel untuk Railing Tangga Spiral Besi?",
          "content": "Jika Anda sedang mencari railing tangga spiral besi yang berkualitas tinggi dan dapat diandalkan, maka Mandiri Steel adalah pilihan yang tepat. Mandiri Steel telah berpengalaman lebih dari 25 tahun dalam memproduksi dan memasang railing tangga spiral besi, sehingga Anda dapat yakin bahwa Anda akan mendapatkan produk yang berkualitas tinggi. <br> <br> Selain itu, Mandiri Steel juga menawarkan layanan yang sangat baik, termasuk survei dan pengukuran gratis, serta garansi struktural yang panjang. Dengan demikian, Anda dapat yakin bahwa Anda akan mendapatkan produk yang sesuai dengan kebutuhan Anda dan dapat diandalkan selama bertahun-tahun. <br> <br> Jika Anda sedang mencari railing tangga spiral besi yang berkualitas tinggi dan dapat diandalkan, maka Mandiri Steel adalah pilihan yang tepat. Dengan pengalaman yang luas dan layanan yang sangat baik, Mandiri Steel dapat membantu Anda menciptakan rumah yang nyaman dan elegan.",
          "productId": 6
        }
      ],
      "conclusion": "Railing tangga spiral besi adalah solusi yang efektif untuk memaksimalkan ruang dan meningkatkan keindahan rumah Anda. Dengan desain yang unik dan fungsional, serta bahan yang kuat dan tahan lama, railing tangga spiral besi dapat membantu Anda menciptakan rumah yang nyaman dan elegan. Jika Anda sedang mencari railing tangga spiral besi yang berkualitas tinggi dan dapat diandalkan, maka Mandiri Steel adalah pilihan yang tepat. Dengan pengalaman yang luas dan layanan yang sangat baik, Mandiri Steel dapat membantu Anda menciptakan rumah yang nyaman dan elegan."
    },
    "tags": [
      "Stair and Railing",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 15,
    "title": "Pagar Laser Cutting Motif Custom",
    "slug": "pembuatan-pagar-laser-cutting-motif-custom",
    "excerpt": "Pagar laser cutting motif custom, proses pembuatan dan inspirasi desain untuk rumah Bekasi, Cikarang, Tambun",
    "category": "Gate Designs",
    "language": "id",
    "author": "Angga",
    "date": "2026-07-13",
    "image": "https://images.unsplash.com/photo-1757212838365-1e84bcbda010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbCUyMGdhdGUlMjBkZXNpZ258ZW58MHwwfHx8MTc4Mzk4MDM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "content": {
      "introduction": "Pagar laser cutting motif custom menjadi pilihan populer di kalangan pemilik rumah di Bekasi dan sekitarnya. Dengan kemampuan untuk membuat desain yang unik dan presisi, laser cutting membuka peluang bagi pemilik rumah untuk mengekspresikan gaya dan kepribadian mereka melalui desain pagar. Di artikel ini, kita akan membahas proses pembuatan pagar laser cutting motif custom dan memberikan inspirasi desain untuk rumah di Bekasi.",
      "keyPoints": [
        "Pagar laser cutting motif custom menawarkan fleksibilitas desain yang tinggi",
        "Proses pembuatan pagar laser cutting motif custom memerlukan peralatan khusus dan keahlian tertentu",
        "Pemilik rumah di Bekasi dapat memilih dari berbagai motif dan desain untuk pagar laser cutting mereka"
      ],
      "sections": [
        {
          "heading": "Apa itu Pagar Laser Cutting Motif Custom?",
          "content": "Pagar laser cutting motif custom adalah jenis pagar yang dibuat menggunakan teknologi laser cutting. Teknologi ini memungkinkan pembuatan desain yang sangat presisi dan kompleks, sehingga pemilik rumah dapat memiliki pagar yang unik dan sesuai dengan gaya mereka. Pagar laser cutting motif custom dapat dibuat dari berbagai bahan, seperti besi, stainless steel, atau aluminium.",
          "imageSearchQuery": "laser cutting metal gate",
          "image": "https://images.unsplash.com/photo-1757212838365-1e84bcbda010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbCUyMGdhdGV8ZW58MHwwfHx8MTc4Mzk4MDM3NXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          "heading": "Proses Pembuatan Pagar Laser Cutting Motif Custom",
          "content": "Proses pembuatan pagar laser cutting motif custom memerlukan beberapa tahap. Pertama, pemilik rumah perlu memilih desain yang diinginkan. Kemudian, desain tersebut akan diubah menjadi file digital yang dapat dibaca oleh mesin laser cutting. Setelah itu, mesin laser cutting akan memotong bahan sesuai dengan desain yang telah dipilih. Terakhir, pagar akan dirakit dan dipasang di rumah."
        },
        {
          "heading": "Inspirasi Desain untuk Pagar Laser Cutting Motif Custom",
          "content": "Berikut beberapa inspirasi desain untuk pagar laser cutting motif custom: <br> 1. Desain geometris: Pagar laser cutting motif custom dengan desain geometris dapat menambahkan sentuhan modern pada rumah. <br> 2. Desain floral: Pagar laser cutting motif custom dengan desain floral dapat menambahkan sentuhan klasik pada rumah. <br> 3. Desain abstrak: Pagar laser cutting motif custom dengan desain abstrak dapat menambahkan sentuhan unik pada rumah. <br> Pemilik rumah di Bekasi dapat memilih dari berbagai motif dan desain untuk pagar laser cutting mereka.",
          "productId": 3
        },
        {
          "heading": "Tips dalam Memilih Pagar Laser Cutting Motif Custom",
          "content": "Berikut beberapa tips dalam memilih pagar laser cutting motif custom: <br> 1. Pertimbangkan gaya rumah: Pagar laser cutting motif custom harus sesuai dengan gaya rumah. <br> 2. Pertimbangkan bahan: Pagar laser cutting motif custom dapat dibuat dari berbagai bahan, seperti besi, stainless steel, atau aluminium. <br> 3. Pertimbangkan biaya: Pagar laser cutting motif custom dapat memiliki biaya yang tinggi, tergantung pada desain dan bahan yang dipilih.",
          "productId": 4
        },
        {
          "heading": "Kelebihan Pagar Laser Cutting Motif Custom",
          "content": "Pagar laser cutting motif custom memiliki beberapa kelebihan, seperti: <br> 1. Fleksibilitas desain: Pagar laser cutting motif custom dapat dibuat dengan desain yang unik dan presisi. <br> 2. Kualitas tinggi: Pagar laser cutting motif custom dapat dibuat dengan kualitas yang tinggi, tergantung pada bahan dan proses pembuatan. <br> 3. Tahan lama: Pagar laser cutting motif custom dapat tahan lama, tergantung pada bahan dan perawatan.",
          "productId": 1
        }
      ],
      "conclusion": "Pagar laser cutting motif custom adalah pilihan yang tepat untuk pemilik rumah di Bekasi yang ingin memiliki pagar yang unik dan sesuai dengan gaya mereka. Dengan proses pembuatan yang presisi dan fleksibilitas desain yang tinggi, pagar laser cutting motif custom dapat menambahkan sentuhan modern dan klasik pada rumah. Pemilik rumah di Bekasi dapat memilih dari berbagai motif dan desain untuk pagar laser cutting mereka, dan dapat mempertimbangkan tips dalam memilih pagar laser cutting motif custom untuk mendapatkan hasil yang terbaik."
    },
    "tags": [
      "Gate Designs",
      "bengkel las bekasi",
      "mandiri steel"
    ],
    "published": true,
    "featured": false
  },
  {
    "id": 1,
    "title": "Tips Pemula Bengkel Las",
    "slug": "jasa-bengkel-las-setu-tips-pemula",
    "excerpt": "Tips bengkel las pemula di Setu, Bekasi, untuk hasil maksimal",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1655558851856-7dbeb76800f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxiZW5na2VsJTIwbGFzJTIwbW9kZXJuJTIwZGklMjBCZWthc2l8ZW58MHwwfHx8MTc3OTAzNDY5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:18",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Bengkel las adalah salah satu kebutuhan penting bagi banyak orang, terutama di daerah Setu, Bekasi. Namun, bagi pemula, memilih jasa bengkel las yang tepat bisa menjadi tantangan. Dalam artikel ini, kita akan membahas beberapa tips pemula bengkel las di Setu, Bekasi, untuk hasil maksimal.",
      "keyPoints": [
        "Memilih bengkel las yang berpengalaman",
        "Menggunakan material yang berkualitas",
        "Mengikuti prosedur keamanan",
        "Menghemat biaya dengan perencanaan yang baik"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Bengkel Las Penting?",
          "content": "Bengkel las memainkan peran penting dalam pembangunan dan perawatan infrastruktur di Setu, Bekasi. Dengan bengkel las yang berkualitas, Anda dapat memastikan bahwa konstruksi atau perbaikan yang dilakukan aman dan tahan lama.",
          "imageSearchQuery": "bengkel las di Jalan Raya Setu-Cibitung"
        },
        {
          "heading": "Tips Memilih Bengkel Las yang Tepat",
          "content": "Dalam memilih bengkel las, ada beberapa hal yang perlu dipertimbangkan, seperti pengalaman, kualitas material, dan harga. Pastikan Anda melakukan survei dan membandingkan beberapa pilihan sebelum membuat keputusan."
        },
        {
          "heading": "Solusi Mandiri Steel",
          "content": "Mandiri Steel, yang berlokasi di Lubangbuaya, Kec. Setu, Kab. Bekasi, menawarkan jasa bengkel las yang berkualitas dan terpercaya. Dengan lebih dari 25 tahun pengalaman, kami dapat membantu Anda merealisasikan proyek konstruksi atau perbaikan dengan hasil yang maksimal. Kami juga menyediakan survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda membutuhkan jasa bengkel las di Setu, Bekasi, jangan ragu untuk menghubungi Mandiri Steel. Kami siap membantu Anda dengan profesional dan ramah. Dengan Mandiri Steel, Anda dapat memastikan bahwa proyek Anda selesai dengan hasil yang memuaskan dan biaya yang efektif.",
          "productId": 3
        }
      ],
      "conclusion": "Dengan memilih bengkel las yang tepat dan mengikuti tips yang telah dibahas, Anda dapat memastikan bahwa proyek konstruksi atau perbaikan Anda selesai dengan hasil yang maksimal. Jangan ragu untuk menghubungi Mandiri Steel untuk jasa bengkel las yang berkualitas dan terpercaya di Setu, Bekasi."
    }
  },
  {
    "id": 2,
    "title": "Bengkel Las Ramah Lingkungan",
    "slug": "jasa-bengkel-las-bekasi-ramah-lingkungan",
    "excerpt": "Mandiri Steel, bengkel las di Bekasi, berkomitmen pada praktik ramah lingkungan",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1ldGFsJTIwd29ya3Nob3AlMjBpbnRlcmlvcnxlbnwwfDB8fHwxNzc5MDM0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:18",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Dalam beberapa tahun terakhir, isu lingkungan telah menjadi perhatian utama di seluruh dunia. Sebagai penyedia jasa bengkel las di Bekasi, Mandiri Steel berkomitmen untuk mengurangi dampak lingkungan dari operasional kami. Dalam artikel ini, kita akan membahas tentang bagaimana bengkel las dapat menjadi lebih ramah lingkungan dan beberapa tips untuk mengurangi jejak karbon.",
      "keyPoints": [
        "Menggunakan bahan-bahan yang dapat didaur ulang",
        "Mengurangi konsumsi energi",
        "Menggunakan teknologi yang lebih efisien",
        "Mengelola limbah dengan baik"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Bengkel Las Ramah Lingkungan Penting?",
          "content": "Bengkel las dapat memiliki dampak lingkungan yang signifikan jika tidak dioperasikan dengan baik. Dari konsumsi energi yang tinggi hingga limbah yang tidak terkelola, bengkel las dapat menyumbang pada polusi udara dan kerusakan lingkungan. Oleh karena itu, penting bagi kita untuk mengambil langkah-langkah untuk mengurangi dampak lingkungan dari operasional bengkel las.",
          "imageSearchQuery": "dampak lingkungan bengkel las"
        },
        {
          "heading": "Tips untuk Mengurangi Jejak Karbon Bengkel Las",
          "content": "Berikut beberapa tips untuk mengurangi jejak karbon bengkel las: <br> 1. Menggunakan bahan-bahan yang dapat didaur ulang <br> 2. Mengurangi konsumsi energi dengan menggunakan peralatan yang lebih efisien <br> 3. Menggunakan teknologi yang lebih efisien <br> 4. Mengelola limbah dengan baik"
        },
        {
          "heading": "Solusi Mandiri Steel untuk Bengkel Las Ramah Lingkungan",
          "content": "Mandiri Steel, sebagai penyedia jasa bengkel las di Bekasi, berkomitmen untuk mengurangi dampak lingkungan dari operasional kami. Kami menggunakan bahan-bahan yang dapat didaur ulang, mengurangi konsumsi energi, dan mengelola limbah dengan baik. Kami juga menawarkan layanan survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda ingin mengurangi dampak lingkungan dari bengkel las Anda, silakan hubungi kami untuk mendapatkan informasi lebih lanjut tentang layanan kami. Kami siap melayani survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung.",
          "productId": 7
        }
      ],
      "conclusion": "Dalam menghadapi tantangan lingkungan yang semakin kompleks, penting bagi kita untuk mengambil langkah-langkah untuk mengurangi dampak lingkungan dari operasional bengkel las. Dengan menggunakan bahan-bahan yang dapat didaur ulang, mengurangi konsumsi energi, dan mengelola limbah dengan baik, kita dapat mengurangi jejak karbon bengkel las dan menyumbang pada lingkungan yang lebih baik."
    }
  },
  {
    "id": 3,
    "title": "Bengkel Las Bekasi: Tips Pemilihan",
    "slug": "bengkel-las-bekasi-tips-pemilihan",
    "excerpt": "Tips memilih jasa bengkel las di Bekasi yang berkualitas dan terpercaya",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1655558851856-7dbeb76800f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxiZW5na2VsJTIwbGFzJTIwbW9kZXJuJTIwZGklMjBiZWthc2l8ZW58MHwwfHx8MTc3OTAzNDcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:18",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Dalam mencari jasa bengkel las di Bekasi, kualitas dan keamanan menjadi prioritas utama. Bagaimana cara memilih bengkel las yang tepat? Berikut beberapa tips yang dapat membantu Anda membuat keputusan yang tepat.",
      "keyPoints": [
        "Pastikan bengkel las memiliki sertifikat ISO",
        "Periksa pengalaman dan portofolio bengkel",
        "Tanyakan tentang proses quality control",
        "Periksa harga dan layanan yang ditawarkan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kualitas Bengkel Las Penting?",
          "content": "Kualitas bengkel las sangat penting karena dapat mempengaruhi keamanan dan ketahanan produk yang dihasilkan. Pastikan bengkel las yang Anda pilih memiliki sertifikat ISO dan mengikuti standar keamanan yang ketat.",
          "imageSearchQuery": "bengkel las dengan sertifikat iso"
        },
        {
          "heading": "Tips Memilih Bengkel Las yang Tepat",
          "content": "Dalam memilih bengkel las, pastikan Anda melakukan riset yang cukup. Periksa pengalaman dan portofolio bengkel, serta tanyakan tentang proses quality control yang mereka lakukan. Jangan ragu untuk bertanya tentang harga dan layanan yang ditawarkan."
        },
        {
          "heading": "Solusi Mandiri Steel",
          "content": "Mandiri Steel merupakan salah satu bengkel las di Bekasi yang memiliki pengalaman lebih dari 25 tahun. Kami memiliki sertifikat ISO dan mengikuti standar keamanan yang ketat. Kami juga menawarkan harga yang kompetitif dan layanan yang memuaskan.",
          "productId": 7
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda sedang mencari jasa bengkel las di Bekasi, jangan ragu untuk menghubungi Mandiri Steel. Kami siap melayani survei lokasi gratis dan pemasangan produk yang sesuai dengan kebutuhan Anda. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut.",
          "productId": 3
        }
      ],
      "conclusion": "Dalam memilih jasa bengkel las di Bekasi, kualitas dan keamanan menjadi prioritas utama. Pastikan Anda melakukan riset yang cukup dan memilih bengkel las yang tepat. Dengan Mandiri Steel, Anda dapat yakin bahwa produk yang dihasilkan akan memiliki kualitas yang tinggi dan aman."
    }
  },
  {
    "id": 4,
    "title": "Inovasi Bengkel Las di Bekasi",
    "slug": "inovasi-bengkel-las-bekasi",
    "excerpt": "Mandiri Steel, bengkel las di Bekasi, menggunakan teknologi modern untuk meningkatkan efisiensi",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1683470157212-cd4005549fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGVlbCUyMHdlbGRpbmclMjB3b3Jrc2hvcCUyMGludGVyaW9yfGVufDB8MHx8fDE3NzkwMzQ3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:18",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Di era modern, teknologi dan inovasi menjadi kunci untuk meningkatkan efisiensi dan kualitas dalam berbagai industri, termasuk bengkel las. Mandiri Steel, sebagai salah satu bengkel las terkemuka di Bekasi, terus berinovasi untuk memberikan layanan terbaik kepada pelanggan. Dalam artikel ini, kita akan membahas tentang bagaimana Mandiri Steel menerapkan teknologi modern dalam proses bengkel las di Jalan Raya Setu-Cibitung, Bekasi.",
      "keyPoints": [
        "Menggunakan teknologi CNC untuk meningkatkan presisi",
        "Menerapkan sistem manajemen produksi yang efektif",
        "Melakukan pelatihan reguler untuk meningkatkan kemampuan tim"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengenal Teknologi CNC",
          "content": "Teknologi CNC (Computer Numerical Control) memungkinkan kita untuk mengontrol mesin-mesin produksi dengan presisi tinggi. Dengan menggunakan teknologi ini, Mandiri Steel dapat meningkatkan kualitas produk dan mengurangi waktu produksi. Selain itu, teknologi CNC juga memungkinkan kita untuk membuat desain yang kompleks dan rumit dengan lebih mudah.",
          "imageSearchQuery": "CNC machine for steel fabrication",
          "image": "https://images.unsplash.com/photo-1711418235334-8895331a6cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwZm9yJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwwfDB8fHwxNzc5MDM0NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "CNC machine for steel fabrication"
        },
        {
          "heading": "Sistem Manajemen Produksi yang Efektif",
          "content": "Mandiri Steel menerapkan sistem manajemen produksi yang efektif untuk memastikan bahwa semua proses produksi berjalan dengan lancar. Dengan menggunakan sistem ini, kita dapat memantau kemajuan produksi, mengidentifikasi masalah, dan membuat keputusan yang tepat untuk meningkatkan efisiensi. Selain itu, sistem ini juga memungkinkan kita untuk mengatur jadwal produksi dan mengirimkan produk tepat waktu."
        },
        {
          "heading": "Pelatihan Reguler untuk Meningkatkan Kemampuan Tim",
          "content": "Mandiri Steel menyadari bahwa kemampuan tim adalah kunci untuk meningkatkan kualitas produk dan efisiensi produksi. Oleh karena itu, kita melakukan pelatihan reguler untuk meningkatkan kemampuan tim. Dengan pelatihan ini, kita dapat memastikan bahwa semua anggota tim memiliki pengetahuan dan keterampilan yang cukup untuk melakukan pekerjaan dengan baik. Selain itu, pelatihan ini juga memungkinkan kita untuk meningkatkan moral tim dan memotivasi mereka untuk bekerja lebih baik.",
          "productId": 1
        },
        {
          "heading": "Layanan Bengkel Las di Bekasi",
          "content": "Mandiri Steel menyediakan layanan bengkel las yang komprehensif di Bekasi, termasuk pembuatan kanopi, pagar, dan railing. Dengan menggunakan teknologi modern dan sistem manajemen produksi yang efektif, kita dapat memastikan bahwa semua produk yang kita buat memiliki kualitas yang tinggi dan tahan lama. Selain itu, kita juga menyediakan layanan survei lokasi gratis dan pemasangan produk di tempat.",
          "productId": 3
        }
      ],
      "conclusion": "Dalam kesimpulan, Mandiri Steel adalah bengkel las di Bekasi yang terus berinovasi untuk meningkatkan efisiensi dan kualitas produk. Dengan menggunakan teknologi modern, sistem manajemen produksi yang efektif, dan melakukan pelatihan reguler, kita dapat memastikan bahwa semua produk yang kita buat memiliki kualitas yang tinggi dan tahan lama. Jika Anda membutuhkan layanan bengkel las di Bekasi, jangan ragu untuk menghubungi Mandiri Steel."
    }
  },
  {
    "id": 5,
    "title": "Kanopi Cikarang Minimalis",
    "slug": "kanopi-cikarang-daerah-minimalis",
    "excerpt": "Desain kanopi minimalis untuk rumah di Cikarang",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1580469322701-45b34d5e6e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbWV0YWwlMjBjYW5vcHklMjByb29mJTIwcGF0aW98ZW58MHwwfHx8MTc3OTAzNTAyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:23",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Kanopi minimalis merupakan pilihan yang tepat untuk rumah di Cikarang yang ingin tampil modern dan elegan. Dengan desain yang sederhana dan warna yang netral, kanopi minimalis dapat meningkatkan keindahan eksterior rumah Anda. Berikut beberapa tips untuk memilih kanopi minimalis yang sesuai dengan rumah Anda.",
      "keyPoints": [
        "Pilih warna yang netral seperti putih, abu-abu, atau hitam",
        "Desain kanopi yang sederhana dan minimalis",
        "Pertimbangkan ukuran kanopi yang sesuai dengan rumah Anda"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Minimalis?",
          "content": "Kanopi minimalis dapat meningkatkan keindahan eksterior rumah Anda dengan desain yang sederhana dan warna yang netral. Selain itu, kanopi minimalis juga dapat membantu melindungi rumah Anda dari sinar matahari dan hujan. Dengan demikian, kanopi minimalis merupakan pilihan yang tepat untuk rumah di Cikarang yang ingin tampil modern dan elegan.",
          "imageSearchQuery": "minimalist steel canopy design",
          "image": "https://images.unsplash.com/photo-1778576866129-ecedf7db8525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3RlZWwlMjBjYW5vcHklMjBkZXNpZ258ZW58MHwwfHx8MTc3OTAzNTAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "minimalist steel canopy design"
        },
        {
          "heading": "Tips Memilih Kanopi Minimalis",
          "content": "Untuk memilih kanopi minimalis yang sesuai dengan rumah Anda, pertimbangkan beberapa hal berikut. Pilih warna yang netral seperti putih, abu-abu, atau hitam. Desain kanopi yang sederhana dan minimalis juga dapat membantu meningkatkan keindahan eksterior rumah Anda. Pastikan juga untuk mempertimbangkan ukuran kanopi yang sesuai dengan rumah Anda."
        },
        {
          "heading": "Solusi Mandiri Steel",
          "content": "Mandiri Steel merupakan salah satu penyedia jasa kanopi minimalis di Cikarang yang dapat membantu Anda mendapatkan kanopi yang sesuai dengan kebutuhan Anda. Dengan pengalaman lebih dari 25 tahun, Mandiri Steel dapat membantu Anda mendapatkan kanopi yang berkualitas dan tahan lama. Kami juga menyediakan survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, dan lain-lain.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda ingin mendapatkan kanopi minimalis yang sesuai dengan kebutuhan Anda, hubungi Mandiri Steel sekarang juga. Kami dapat membantu Anda mendapatkan kanopi yang berkualitas dan tahan lama. Dengan demikian, Anda dapat meningkatkan keindahan eksterior rumah Anda dan melindungi rumah Anda dari sinar matahari dan hujan."
        }
      ],
      "conclusion": "Kanopi minimalis merupakan pilihan yang tepat untuk rumah di Cikarang yang ingin tampil modern dan elegan. Dengan desain yang sederhana dan warna yang netral, kanopi minimalis dapat meningkatkan keindahan eksterior rumah Anda. Pastikan untuk mempertimbangkan beberapa hal seperti warna, desain, dan ukuran kanopi yang sesuai dengan rumah Anda. Dengan demikian, Anda dapat mendapatkan kanopi yang berkualitas dan tahan lama."
    }
  },
  {
    "id": 6,
    "title": "Kanopi Cikarang Anti Maling",
    "slug": "kanopi-cikarang-anti-maling",
    "excerpt": "Desain kanopi Cikarang yang aman dan tahan lama dengan penggunaan bahan SNI dan kunci keamanan yang kuat",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1645054909248-0820497f2611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZXRhbCUyMGNhbm9weSUyMHdpdGglMjBzdHJvbmclMjBsb2NrJTIwc3lzdGVtfGVufDB8MHx8fDE3NzkwMzUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:23",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Kanopi adalah salah satu elemen penting dalam desain rumah, terutama di daerah Cikarang. Namun, keamanan dan keamanan kanopi seringkali diabaikan. Pada artikel ini, kita akan membahas tentang desain kanopi Cikarang yang aman dan tahan lama dengan penggunaan bahan SNI dan kunci keamanan yang kuat.",
      "keyPoints": [
        "Desain kanopi yang aman dan tahan lama",
        "Penggunaan bahan SNI untuk kekuatan dan keamanan",
        "Kunci keamanan yang kuat untuk mencegah pencurian",
        "Pemasangan kanopi yang tepat untuk mencegah kebocoran"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Cikarang Perlu Desain Anti Maling?",
          "content": "Kanopi Cikarang yang tidak memiliki desain anti maling dapat menjadi sasaran empuk bagi pencuri. Dengan desain kanopi yang aman dan tahan lama, Anda dapat mencegah pencurian dan menjaga keamanan rumah Anda. Mandiri Steel, sebagai bengkel las Cikarang yang berpengalaman, dapat membantu Anda mendesain kanopi yang aman dan tahan lama.",
          "imageSearchQuery": "canopy with anti theft design",
          "image": "https://images.unsplash.com/photo-1706920405995-6401951f8e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjYW5vcHklMjB3aXRoJTIwYW50aSUyMHRoZWZ0JTIwZGVzaWdufGVufDB8MHx8fDE3NzkwMzUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "canopy with anti theft design"
        },
        {
          "heading": "Tips Membuat Kanopi Cikarang yang Aman",
          "content": "Berikut beberapa tips untuk membuat kanopi Cikarang yang aman: <br> 1. Gunakan bahan SNI yang kuat dan tahan lama <br> 2. Pasang kunci keamanan yang kuat <br> 3. Desain kanopi yang tidak memiliki celah untuk masuk <br> 4. Pasang lampu yang cukup untuk menerangi area kanopi <br> Dengan mengikuti tips di atas, Anda dapat membuat kanopi Cikarang yang aman dan tahan lama."
        },
        {
          "heading": "Solusi Mandiri Steel untuk Kanopi Cikarang",
          "content": "Mandiri Steel menawarkan solusi untuk kanopi Cikarang yang aman dan tahan lama. Kami menggunakan bahan SNI yang kuat dan tahan lama, serta kunci keamanan yang kuat untuk mencegah pencurian. Kami juga dapat membantu Anda mendesain kanopi yang tidak memiliki celah untuk masuk, sehingga Anda dapat menjaga keamanan rumah Anda. <strong>Kontak kami</strong> untuk informasi lebih lanjut tentang kanopi Cikarang yang aman dan tahan lama.",
          "productId": 1
        },
        {
          "heading": "Pemasangan Kanopi Cikarang yang Tepat",
          "content": "Pemasangan kanopi Cikarang yang tepat juga sangat penting untuk menjaga keamanan dan keamanan kanopi. Mandiri Steel dapat membantu Anda memasang kanopi Cikarang yang tepat, sehingga Anda dapat menjaga keamanan rumah Anda. Kami memiliki pengalaman lebih dari 25 tahun dalam pemasangan kanopi, sehingga Anda dapat percaya diri dengan kami. <em>Kami siap melayani survei lokasi gratis dan pemasangan kanopi di daerah Cikarang</em>.",
          "productId": 2
        }
      ],
      "conclusion": "Dengan desain kanopi Cikarang yang aman dan tahan lama, Anda dapat menjaga keamanan rumah Anda. Mandiri Steel dapat membantu Anda mendesain dan memasang kanopi Cikarang yang aman dan tahan lama. Kontak kami untuk informasi lebih lanjut tentang kanopi Cikarang yang aman dan tahan lama."
    }
  },
  {
    "id": 7,
    "title": "Kanopi Tahan Cuaca",
    "slug": "kanopi-cikarang-tahan-cuaca",
    "excerpt": "Kanopi tahan cuaca untuk melindungi rumah Anda dari sinar matahari dan hujan",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1580469322701-45b34d5e6e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRlcnByb29mJTIwY2Fub3B5JTIwcGF0aW98ZW58MHwwfHx8MTc3OTAzNTAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:23",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Kanopi adalah salah satu komponen penting dalam melindungi rumah dari sinar matahari dan hujan. Namun, di daerah Cikarang dengan iklim tropis, kanopi harus dirancang untuk tahan cuaca. Dalam artikel ini, kita akan membahas tentang pentingnya kanopi tahan cuaca dan bagaimana Mandiri Steel dapat membantu Anda mendapatkan kanopi yang sesuai dengan kebutuhan Anda.",
      "keyPoints": [
        "Kanopi tahan cuaca untuk melindungi rumah dari sinar matahari dan hujan",
        "Pentingnya anti-rust coatings dan finishing untuk meningkatkan durability",
        "Mandiri Steel menawarkan kanopi dengan material baja ringan dan tahan cuaca"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Tahan Cuaca Penting?",
          "content": "Kanopi tahan cuaca sangat penting karena dapat melindungi rumah Anda dari sinar matahari yang terik dan hujan yang deras. Di daerah Cikarang, iklim tropis dapat menyebabkan kerusakan pada kanopi jika tidak dirancang dengan baik. Oleh karena itu, penting untuk memilih kanopi yang tahan cuaca dan dapat bertahan lama.",
          "imageSearchQuery": "kanopi rumah minimalis tahan cuaca",
          "image": "https://images.unsplash.com/photo-1697604501923-2590ec2d7ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxrYW5vcGklMjBydW1haCUyMG1pbmltYWxpcyUyMHRhaGFuJTIwY3VhY2F8ZW58MHwwfHx8MTc3OTAzNTAzOHww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "kanopi rumah minimalis tahan cuaca"
        },
        {
          "heading": "Pilihan Material Kanopi Tahan Cuaca",
          "content": "Mandiri Steel menawarkan kanopi dengan material baja ringan yang tahan cuaca. Baja ringan adalah pilihan yang ideal karena ringan, kuat, dan tahan korosi. Kami juga menawarkan anti-rust coatings dan finishing yang dapat meningkatkan durability kanopi."
        },
        {
          "heading": "Solusi Mandiri Steel untuk Kanopi Tahan Cuaca",
          "content": "Mandiri Steel memiliki pengalaman lebih dari 25 tahun dalam memproduksi kanopi tahan cuaca. Kami menawarkan kanopi dengan desain yang modern dan minimalis, serta dapat disesuaikan dengan kebutuhan Anda. Kami juga menyediakan layanan survei lokasi gratis dan pemasangan kanopi oleh tim yang berpengalaman.",
          "productId": 1
        },
        {
          "heading": "Tips Merawat Kanopi Tahan Cuaca",
          "content": "Untuk memastikan kanopi tahan cuaca Anda tetap dalam kondisi baik, penting untuk melakukan perawatan rutin. Beberapa tips yang dapat Anda lakukan adalah membersihkan kanopi secara teratur, memeriksa kerusakan, dan melakukan perawatan anti-rust coatings. Dengan melakukan perawatan yang tepat, Anda dapat memastikan kanopi tahan cuaca Anda tetap dalam kondisi baik dan dapat bertahan lama.",
          "productId": 2
        }
      ],
      "conclusion": "Kanopi tahan cuaca adalah salah satu komponen penting dalam melindungi rumah dari sinar matahari dan hujan. Dengan memilih kanopi yang tahan cuaca dan melakukan perawatan rutin, Anda dapat memastikan rumah Anda tetap dalam kondisi baik dan dapat bertahan lama. Mandiri Steel siap membantu Anda mendapatkan kanopi tahan cuaca yang sesuai dengan kebutuhan Anda."
    }
  },
  {
    "id": 8,
    "title": "Kanopi Cikarang: Pilih Bahan yang Tepat",
    "slug": "kanopi-cikarang-pilih-bahan-yang-tepat",
    "excerpt": "Panduan memilih bahan kanopi yang tepat untuk rumah Anda di Cikarang",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1580469322701-45b34d5e6e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZXRhbCUyMGNhbm9weSUyMHJvb2YlMjBwYXRpb3xlbnwwfDB8fHwxNzc5MDMzMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:24",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Kanopi merupakan salah satu elemen penting dalam desain rumah, terutama di daerah Cikarang yang memiliki iklim tropis. Dalam memilih kanopi, ada beberapa bahan yang perlu dipertimbangkan, seperti hollow iron, stainless steel, galvanized steel, dan cat premium. Pemilihan bahan yang tepat dapat mempengaruhi kekuatan, keamanan, dan estetika kanopi.",
      "keyPoints": [
        "Pemilihan bahan kanopi yang tepat",
        "Kelebihan dan kekurangan hollow iron, stainless steel, galvanized steel",
        "Tips memilih cat premium untuk kanopi"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Pemilihan Bahan Kanopi Penting?",
          "content": "Pemilihan bahan kanopi yang tepat dapat mempengaruhi kekuatan dan keamanan kanopi. Bahan yang kuat dan tahan lama dapat melindungi rumah Anda dari cuaca ekstrem dan kerusakan. Selain itu, pemilihan bahan yang tepat juga dapat mempengaruhi estetika kanopi, sehingga dapat meningkatkan nilai estetika rumah Anda.",
          "imageSearchQuery": "kanopi baja ringan cikarang",
          "image": "https://images.unsplash.com/photo-1772787429449-40e8666a571e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxrYW5vcGklMjBiYWphJTIwcmluZ2FuJTIwY2lrYXJhbmd8ZW58MHwwfHx8MTc3OTAzNTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "kanopi baja ringan cikarang"
        },
        {
          "heading": "Kelebihan dan Kekurangan Bahan Kanopi",
          "content": "Hollow iron, stainless steel, galvanized steel, dan cat premium merupakan beberapa bahan yang umum digunakan untuk kanopi. Hollow iron memiliki kelebihan dalam hal kekuatan dan harga yang relatif murah, namun memiliki kekurangan dalam hal korosi. Stainless steel memiliki kelebihan dalam hal tahan korosi dan kekuatan, namun memiliki kekurangan dalam hal harga yang relatif mahal. Galvanized steel memiliki kelebihan dalam hal tahan korosi dan harga yang relatif murah, namun memiliki kekurangan dalam hal kekuatan. Cat premium dapat meningkatkan estetika kanopi, namun memiliki kekurangan dalam hal biaya yang relatif mahal."
        },
        {
          "heading": "Tips Memilih Cat Premium untuk Kanopi",
          "content": "Dalam memilih cat premium untuk kanopi, ada beberapa hal yang perlu dipertimbangkan, seperti warna, jenis cat, dan biaya. Warna cat yang sesuai dengan desain rumah dapat meningkatkan estetika kanopi. Jenis cat yang tahan lama dan tahan cuaca dapat mempengaruhi kekuatan dan keamanan kanopi. Biaya cat premium yang relatif mahal dapat menjadi pertimbangan dalam memilih cat.",
          "productId": 1
        },
        {
          "heading": "Mandiri Steel: Solusi Kanopi Cikarang",
          "content": "Mandiri Steel merupakan salah satu penyedia jasa kanopi yang terpercaya di Cikarang. Dengan lebih dari 25 tahun pengalaman, Mandiri Steel dapat membantu Anda dalam memilih bahan kanopi yang tepat dan memasang kanopi dengan profesional. Kami siap melayani survei lokasi gratis dan pemasangan kanopi di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung.",
          "productId": 2
        }
      ],
      "conclusion": "Dalam memilih kanopi, pemilihan bahan yang tepat dapat mempengaruhi kekuatan, keamanan, dan estetika kanopi. Dengan mempertimbangkan kelebihan dan kekurangan bahan kanopi, Anda dapat memilih bahan yang sesuai dengan kebutuhan Anda. Mandiri Steel dapat membantu Anda dalam memilih bahan kanopi yang tepat dan memasang kanopi dengan profesional."
    }
  },
  {
    "id": 9,
    "title": "Kanopi Cikarang Custom",
    "slug": "kanopi-cikarang-custom-sesuai-kebutuhan",
    "excerpt": "Kanopi Cikarang custom sesuai kebutuhan, survei lokasi gratis, pengukuran profesional, dan pemasangan presisi.",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1562706846-a439ca3b5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbCUyMGNhbm9weSUyMGluc3RhbGxhdGlvbnxlbnwwfDB8fHwxNzc5MDM1MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:24",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Kanopi adalah salah satu elemen penting dalam desain eksterior rumah, terutama di daerah Cikarang. Dengan kemampuan untuk melindungi dari sinar matahari dan hujan, kanopi juga dapat meningkatkan estetika rumah. Namun, untuk mendapatkan kanopi yang sesuai dengan kebutuhan, diperlukan penyesuaian ukuran dan desain. Di artikel ini, kita akan membahas tentang kanopi Cikarang custom dan bagaimana Mandiri Steel dapat membantu Anda mendapatkan kanopi yang sesuai dengan kebutuhan.",
      "keyPoints": [
        "Kanopi custom sesuai kebutuhan",
        "Survei lokasi gratis dan pengukuran profesional",
        "Pemasangan presisi dan rapi",
        "Bahan berkualitas dan tahan lama"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Custom?",
          "content": "Kanopi custom memungkinkan Anda untuk memiliki kanopi yang sesuai dengan kebutuhan dan desain rumah. Dengan kemampuan untuk menyesuaikan ukuran dan desain, Anda dapat memiliki kanopi yang tidak hanya fungsional tetapi juga estetis. Selain itu, kanopi custom juga dapat meningkatkan nilai jual rumah Anda.",
          "imageSearchQuery": "desain kanopi minimalis",
          "image": "https://images.unsplash.com/photo-1492943301880-e4b772f94dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxkZXNhaW4lMjBrYW5vcGklMjBtaW5pbWFsaXN8ZW58MHwwfHx8MTc3OTAzNTA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "desain kanopi minimalis"
        },
        {
          "heading": "Bagaimana Mandiri Steel Bekerja",
          "content": "Mandiri Steel memiliki pengalaman lebih dari 25 tahun dalam pembuatan kanopi. Kami menyediakan survei lokasi gratis dan pengukuran profesional untuk memastikan bahwa kanopi yang kami buat sesuai dengan kebutuhan Anda. Selain itu, kami juga menggunakan bahan berkualitas dan tahan lama untuk memastikan bahwa kanopi Anda dapat bertahan lama."
        },
        {
          "heading": "Pemasangan Presisi",
          "content": "Pemasangan kanopi yang presisi dan rapi sangat penting untuk memastikan bahwa kanopi Anda dapat berfungsi dengan baik. Mandiri Steel memiliki tim yang terlatih dan berpengalaman dalam pemasangan kanopi. Kami memastikan bahwa kanopi Anda dipasang dengan presisi dan rapi, sehingga Anda dapat memiliki kanopi yang fungsional dan estetis.",
          "productId": 1
        },
        {
          "heading": "Layanan Mandiri Steel",
          "content": "Mandiri Steel menyediakan layanan yang komprehensif, mulai dari survei lokasi hingga pemasangan kanopi. Kami juga menyediakan garansi struktural untuk memastikan bahwa kanopi Anda dapat bertahan lama. Dengan Mandiri Steel, Anda dapat memiliki kanopi yang sesuai dengan kebutuhan dan desain rumah Anda.",
          "productId": 2
        }
      ],
      "conclusion": "Kanopi Cikarang custom sesuai kebutuhan dapat meningkatkan estetika dan fungsionalitas rumah Anda. Dengan survei lokasi gratis, pengukuran profesional, dan pemasangan presisi, Mandiri Steel dapat membantu Anda mendapatkan kanopi yang sesuai dengan kebutuhan. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang layanan kanopi custom kami."
    }
  },
  {
    "id": 10,
    "title": "Kanopi Cikarang Hemat Biaya",
    "slug": "kanopi-cikarang-hemat-biaya",
    "excerpt": "Cara memilih kanopi yang hemat biaya di Cikarang",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1681021982855-bf3ac0f4a116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwbWV0YWwlMjBjYW5vcHklMjByb29mfGVufDB8MHx8fDE3NzkwMzUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:24",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Memilih kanopi yang tepat untuk rumah atau bangunan komersial di Cikarang bisa menjadi tugas yang menantang, terutama jika Anda memiliki budget terbatas. Kanopi tidak hanya berfungsi sebagai pelindung dari cuaca, tetapi juga sebagai elemen estetika yang dapat meningkatkan nilai properti. Dalam artikel ini, kita akan membahas tips untuk memilih kanopi yang hemat biaya dan memiliki nilai investasi jangka panjang di daerah Cikarang.",
      "keyPoints": [
        "Memilih bahan yang tepat untuk kanopi",
        "Mengukur ukuran kanopi yang sesuai",
        "Menggunakan jasa profesional untuk pemasangan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Baja Ringan?",
          "content": "Kanopi baja ringan merupakan pilihan yang populer di Cikarang karena harganya yang relatif murah dan mudah dipasang. Baja ringan juga tahan terhadap cuaca ekstrem dan memiliki umur yang panjang, sehingga bisa menjadi investasi yang baik untuk rumah atau bangunan komersial. <br> Selain itu, kanopi baja ringan juga bisa dibentuk sesuai dengan desain yang diinginkan, sehingga bisa menambah nilai estetika pada properti.",
          "imageSearchQuery": "kanopi baja ringan modern",
          "image": "https://images.unsplash.com/photo-1686460981167-aa62a26b80da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxrYW5vcGklMjBiYWphJTIwcmluZ2FuJTIwbW9kZXJufGVufDB8MHx8fDE3NzkwMzUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "kanopi baja ringan modern"
        },
        {
          "heading": "Tips Memilih Kanopi yang Hemat Biaya",
          "content": "Untuk memilih kanopi yang hemat biaya, perlu mempertimbangkan beberapa faktor, seperti ukuran, bahan, dan desain. Pastikan untuk mengukur ukuran kanopi yang sesuai dengan kebutuhan, karena ukuran yang terlalu besar bisa meningkatkan biaya. <br> Selain itu, pilih bahan yang tahan lama dan mudah dipasang, seperti baja ringan atau alumunium. Jangan lupa untuk mempertimbangkan biaya pemasangan dan perawatan kanopi dalam jangka panjang."
        },
        {
          "heading": "Solusi Kanopi dari Mandiri Steel",
          "content": "Mandiri Steel menawarkan solusi kanopi yang hemat biaya dan memiliki nilai investasi jangka panjang. Dengan lebih dari 25 tahun pengalaman, kami bisa membantu Anda memilih kanopi yang tepat untuk rumah atau bangunan komersial di Cikarang. <br> Kami menggunakan bahan-bahan yang berkualitas dan tahan lama, serta memiliki tim yang profesional untuk pemasangan kanopi. Dengan demikian, Anda bisa yakin bahwa kanopi Anda akan bertahan lama dan memiliki nilai estetika yang tinggi.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda sedang mencari kanopi yang hemat biaya dan memiliki nilai investasi jangka panjang di Cikarang, jangan ragu untuk menghubungi Mandiri Steel. Kami akan dengan senang hati membantu Anda memilih kanopi yang tepat untuk rumah atau bangunan komersial Anda. <br> Dengan pengalaman yang luas dan tim yang profesional, kami bisa membantu Anda mencapai tujuan Anda dengan cepat dan efisien. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang kanopi yang hemat biaya dan memiliki nilai investasi jangka panjang.",
          "productId": 2
        }
      ],
      "conclusion": "Dengan memilih kanopi yang tepat dan memiliki nilai investasi jangka panjang, Anda bisa meningkatkan nilai properti dan memiliki perlindungan yang baik dari cuaca ekstrem. Jangan ragu untuk menghubungi Mandiri Steel untuk mendapatkan informasi lebih lanjut tentang kanopi yang hemat biaya dan memiliki nilai investasi jangka panjang di Cikarang."
    }
  },
  {
    "id": 11,
    "title": "Kanopi Cikarang Industri",
    "slug": "kanopi-cikarang-industri-tips-dan-trik",
    "excerpt": "Kanopi industri Cikarang dengan struktur baja yang kuat dan tahan lama",
    "category": "Tips and Trick",
    "image": "https://images.unsplash.com/photo-1441796522229-b3a3cb3d58fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjYW5vcHklMjBzdHJ1Y3R1cmV8ZW58MHwwfHx8MTc3OTAzNTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-05-17 23:24",
    "author": "Angga",
    "status": "synced",
    "customContent": {
      "introduction": "Dalam dunia industri, kanopi tidak hanya berfungsi sebagai pelindung dari sinar matahari dan hujan, tetapi juga sebagai struktur yang kuat dan tahan lama untuk melindungi aset dan pekerja. Di Cikarang, banyak industri yang membutuhkan kanopi yang dapat menahan beban berat dan tahan lama. Berikut beberapa tips dan trik untuk memilih kanopi industri yang tepat untuk kebutuhan Anda.",
      "keyPoints": [
        "Pilih bahan yang kuat dan tahan lama",
        "Perhatikan desain dan struktur kanopi",
        "Pastikan kanopi dapat menahan beban berat",
        "Pertimbangkan biaya dan waktu pemasangan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Industri Penting?",
          "content": "Kanopi industri sangat penting untuk melindungi aset dan pekerja dari sinar matahari dan hujan. Selain itu, kanopi juga dapat membantu mengurangi biaya perawatan dan meningkatkan efisiensi kerja. Di Cikarang, banyak industri yang membutuhkan kanopi yang dapat menahan beban berat dan tahan lama, seperti mezzanine floor dan struktur baja lainnya.",
          "imageSearchQuery": "industrial steel structure cikarang"
        },
        {
          "heading": "Tips Memilih Kanopi Industri",
          "content": "Dalam memilih kanopi industri, ada beberapa hal yang perlu dipertimbangkan, seperti bahan, desain, dan struktur. Pastikan kanopi yang dipilih dapat menahan beban berat dan tahan lama. Selain itu, pertimbangkan juga biaya dan waktu pemasangan. Di Mandiri Steel, kami menyediakan kanopi industri dengan bahan yang kuat dan tahan lama, seperti baja dan aluminium."
        },
        {
          "heading": "Solusi Kanopi Industri dari Mandiri Steel",
          "content": "Di Mandiri Steel, kami menyediakan solusi kanopi industri yang tepat untuk kebutuhan Anda. Kami menggunakan bahan yang kuat dan tahan lama, seperti baja dan aluminium, dan memiliki desain dan struktur yang dapat menahan beban berat. Selain itu, kami juga menyediakan jasa pemasangan yang cepat dan efisien. Kami siap melayani survei lokasi gratis dan pemasangan kanopi industri di Cikarang, Bekasi, dan sekitarnya.",
          "productId": 7
        },
        {
          "heading": "Keunggulan Kanopi Industri Mandiri Steel",
          "content": "Kanopi industri Mandiri Steel memiliki beberapa keunggulan, seperti bahan yang kuat dan tahan lama, desain dan struktur yang dapat menahan beban berat, dan biaya yang kompetitif. Selain itu, kami juga menyediakan jasa pemasangan yang cepat dan efisien. Kami siap melayani kebutuhan kanopi industri Anda di Cikarang, Bekasi, dan sekitarnya.",
          "productId": 7
        }
      ],
      "conclusion": "Dalam memilih kanopi industri, ada beberapa hal yang perlu dipertimbangkan, seperti bahan, desain, dan struktur. Pastikan kanopi yang dipilih dapat menahan beban berat dan tahan lama. Di Mandiri Steel, kami menyediakan solusi kanopi industri yang tepat untuk kebutuhan Anda, dengan bahan yang kuat dan tahan lama, dan desain dan struktur yang dapat menahan beban berat. Kami siap melayani survei lokasi gratis dan pemasangan kanopi industri di Cikarang, Bekasi, dan sekitarnya."
    }
  },
  {
    "id": 12,
    "slug": "tips-memilih-kanopi-bekasi",
    "title": "Tips Pilih Kanopi Bekasi",
    "category": "Tips and Trick",
    "excerpt": "Panduan memilih kanopi yang sesuai untuk rumah di Bekasi",
    "image": "https://images.unsplash.com/photo-1673835931682-513b185a37e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxrYW5vcGklMjBtaW5pbWFsaXMlMjBiZWthc2l8ZW58MHwwfHx8MTc4MzgxMjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-07-12 06:34",
    "author": "Angga",
    "status": "draft",
    "customContent": {
      "introduction": "Mencari kanopi yang sesuai untuk rumah di Bekasi bisa jadi tugas yang menantang. Dengan begitu banyak pilihan yang tersedia, bagaimana Anda bisa memastikan bahwa Anda mendapatkan kanopi yang tepat untuk kebutuhan Anda? Dalam artikel ini, kita akan membahas beberapa tips dan trik untuk memilih kanopi yang sesuai untuk rumah di Bekasi.",
      "keyPoints": [
        "Pilih material yang tahan lama",
        "Perhatikan desain dan estetika",
        "Pastikan keamanan dan kenyamanan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Kanopi Penting?",
          "content": "Kanopi tidak hanya berfungsi sebagai pelindung dari sinar matahari dan hujan, tetapi juga dapat meningkatkan estetika rumah. Dengan memilih kanopi yang tepat, Anda dapat meningkatkan nilai jual rumah dan membuatnya lebih menarik bagi tamu. Di Bekasi, kanopi juga dapat membantu melindungi rumah dari panas dan hujan yang ekstrem.",
          "imageSearchQuery": "kanopi rumah minimalis bekasi",
          "image": "https://images.unsplash.com/photo-1673835931682-513b185a37e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxrYW5vcGklMjBydW1haCUyMG1pbmltYWxpcyUyMGJla2FzaXxlbnwwfDB8fHwxNzgzODEyODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "kanopi rumah minimalis bekasi"
        },
        {
          "heading": "Tips Memilih Kanopi",
          "content": "Dalam memilih kanopi, ada beberapa hal yang perlu dipertimbangkan. Pertama, pilih material yang tahan lama dan dapat menahan berat badan. Kedua, perhatikan desain dan estetika kanopi untuk memastikan bahwa itu sesuai dengan gaya rumah Anda. Ketiga, pastikan keamanan dan kenyamanan kanopi dengan memilih yang memiliki fitur keamanan yang baik."
        },
        {
          "heading": "Solusi Mandiri Steel",
          "content": "Mandiri Steel adalah salah satu penyedia kanopi terbaik di Bekasi. Dengan lebih dari 25 tahun pengalaman, kami telah membantu banyak pelanggan memilih kanopi yang sesuai untuk kebutuhan mereka. Kami menawarkan berbagai jenis kanopi, termasuk kanopi minimalis dan kanopi kaca tempered. Kami juga menyediakan jasa pemasangan dan perawatan kanopi untuk memastikan bahwa kanopi Anda tetap dalam kondisi baik.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda sedang mencari kanopi untuk rumah di Bekasi, jangan ragu untuk menghubungi Mandiri Steel. Kami siap melayani survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung. Hubungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang kanopi yang sesuai untuk kebutuhan Anda.",
          "productId": 2
        }
      ],
      "conclusion": "Dengan memilih kanopi yang tepat, Anda dapat meningkatkan nilai jual rumah dan membuatnya lebih menarik bagi tamu. Di Bekasi, kanopi juga dapat membantu melindungi rumah dari panas dan hujan yang ekstrem. Jangan ragu untuk menghubungi Mandiri Steel untuk mendapatkan informasi lebih lanjut tentang kanopi yang sesuai untuk kebutuhan Anda."
    }
  }
];
export const getAllBlogPosts = () => BLOG_POSTS;

export const getPostBySlug = (slug: string) => BLOG_POSTS.find(p => p.slug === slug);

export const getPostsByPage = (page: number, limit: number = 6) => {
  const start = (page - 1) * limit;
  return BLOG_POSTS.slice(start, start + limit);
};

export const getTotalPages = (limit: number = 6) => {
  return Math.ceil(BLOG_POSTS.length / limit);
};
