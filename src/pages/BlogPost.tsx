import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedProducts from '../components/RelatedProducts'
import './BlogPost.css'
import { Helmet } from 'react-helmet-async'
import { generateBreadcrumbSchema, generateArticleSchema } from '../utils/schema'

interface BlogPostData {
  slug: string
  title: string
  content: string
  date: string
  author: string
  category: string
  metaDescription: string
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  const blogPosts: { [key: string]: BlogPostData } = {
    'cari-bengkel-las-bekasi': {
      slug: 'cari-bengkel-las-bekasi',
      title: 'Cari Bengkel Las Bekasi Murah, Berkualitas, dan Terpercaya?',
      category: 'Bengkel Las',
      date: '11 Oktober 2025',
      author: 'Admin',
      metaDescription: 'Bengkel Las Mandiri adalah solusi terbaik untuk kebutuhan konstruksi baja Anda dengan pengalaman 20+ tahun sejak 1999 dan harga kompetitif.',
      content: `
# Cari Bengkel Las Bekasi Murah, Berkualitas, dan Terpercaya?
## Kami adalah solusinya!

Bengkel Las Mandiri beralamat di **Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320**.

Hubungi kami di:
- 📱 **0852-1207-8467**
- 🌐 **lasbekasi.com**

## Produk dan Layanan Unggulan

Kami menyediakan berbagai produk untuk mempercantik rumah, kantor, taman, atau bangunan lainnya. Produk yang kami kerjakan berbahan dasar besi berkualitas dan dapat disesuaikan dengan keinginan serta anggaran Anda. Kami juga melayani perbaikan atau perawatan berbagai dekorasi berbahan besi.

### Daftar Produk:
- ✅ **Kanopi** - Berbagai jenis kanopi (Alderon, Solartuff, Polycarbonate, Tempered Glass)
- ✅ **Balkon** - Railing balkon dengan desain modern dan aman
- ✅ **Pagar** - Pagar rumah berbagai model dan finishing
- ✅ **Teralis** - Tralis jendela untuk keamanan rumah Anda
- ✅ **Railing tangga** - Railing tangga industrial dan minimalis
- ✅ **Pintu lipat** - Pintu garasi dan folding gate
- ✅ **Tangga putar** - Tangga spiral untuk efisiensi ruang
- ✅ **Pintu garasi sliding** - Pintu garasi otomatis dan manual
- ✅ **Pintu kawat nyamuk** - Pintu kasa nyamuk custom
- ✅ **Tempat tidur besi** - Rangka tempat tidur kokoh dan tahan lama

## Mengapa Memilih Kami?

### 💼 Pengalaman 20+ Tahun
Berdiri sejak tahun 1999, kami telah melayani berbagai proyek dengan tenaga ahli yang berpengalaman dan profesional.

### 💎 Kualitas Terbaik dengan Harga Kompetitif
Semua produk kami dikerjakan menggunakan bahan berkualitas yang memenuhi **Standar Nasional Indonesia (SNI)**. Harga kami terjangkau dan sesuai dengan kualitas bahan pilihan Anda.

### 🚗 Layanan Fleksibel
Kami melayani wilayah **Jabodetabek dan sekitarnya**, bahkan di luar daerah Bekasi. Survey lokasi tersedia untuk mempermudah proses pengerjaan. Jika dibutuhkan, kami juga dapat menyelesaikan pekerjaan langsung di lokasi Anda.

### 💰 Transparansi Harga
Untuk daftar harga terbaru 2025, kunjungi halaman "Portfolio" di website kami. Di sana, Anda juga akan menemukan prosedur pemesanan yang mempermudah transaksi.

## Pesan Sekarang!

Jangan ragu untuk memilih layanan kami. **Kepuasan Anda adalah prioritas kami!**

Hubungi **0852-1207-8467** atau kunjungi website kami.

> "Kepercayaan Anda adalah penghargaan terbesar bagi kami."

---

### Wilayah Layanan
Kami melayani berbagai wilayah di Bekasi dan sekitarnya termasuk:
- Bekasi Barat
- Bekasi Timur
- Cikarang
- Setu
- Cibitung
- Dan wilayah Jabodetabek lainnya

### Konsultasi Gratis
Tim kami siap memberikan konsultasi gratis untuk kebutuhan konstruksi baja Anda. Kami akan membantu menemukan solusi terbaik sesuai dengan budget dan kebutuhan Anda.

**Hubungi kami sekarang untuk konsultasi gratis!**
      `
    },
    'jasa-tukang-las-cikarang': {
      slug: 'jasa-tukang-las-cikarang',
      title: 'Jasa Tukang Las Cikarang - Profesional dan Terpercaya',
      category: 'Jasa Las',
      date: '11 Oktober 2025',
      author: 'Admin',
      metaDescription: 'Jasa tukang las profesional di Cikarang dengan harga kompetitif. Melayani pembuatan kanopi, pagar, tralis, dan berbagai konstruksi baja lainnya.',
      content: `
# Jasa Tukang Las Cikarang - Profesional dan Terpercaya

Mencari **jasa tukang las di Cikarang** yang profesional, berkualitas, dan terpercaya? Anda berada di tempat yang tepat!

## Tentang Layanan Kami di Cikarang

Kami adalah penyedia jasa tukang las berpengalaman yang melayani wilayah **Cikarang Selatan, Cikarang Utara, Cikarang Barat, dan Cikarang Timur**. Dengan pengalaman lebih dari 20 tahun sejak 1999, kami telah menangani berbagai proyek konstruksi baja untuk rumah tinggal, perkantoran, pabrik, dan komersial.

## Layanan Jasa Las Cikarang

Kami menyediakan berbagai layanan pengelasan, antara lain:

### 🏠 Konstruksi Rumah Tinggal
- **Kanopi Carport** - Alderon, Solartuff, Polycarbonate, Tempered Glass
- **Pagar Rumah** - Minimalis, klasik, modern dengan berbagai finishing
- **Tralis Jendela** - Untuk keamanan rumah Anda
- **Railing Tangga & Balkon** - Desain modern dan industrial
- **Pintu Garasi** - Sliding, folding gate, rolling door
- **Teralis Pintu & Jendela** - Custom design sesuai keinginan

### 🏢 Konstruksi Komersial & Industri
- **Kanopi Pabrik** - Area loading, gudang, tempat parkir
- **Struktur Baja Ringan** - Rangka atap, mezzanine
- **Partisi Industrial** - Pembatas ruangan pabrik dan kantor
- **Tangga Besi** - Tangga putar, tangga lurus untuk pabrik
- **Rak Pallet Besi** - Rak gudang heavy duty
- **Pagar Kawat Harmonika** - Untuk area pabrik dan industri

### 🛠️ Furniture & Custom
- **Furniture Industrial** - Meja, kursi, rak gantung
- **Display Toko** - Rak display, gantungan baju
- **Kabinet Custom** - Dapur, lemari, storage solution
- **Meja Bar & Cafe** - Furniture untuk usaha F&B

## Keunggulan Jasa Las Kami di Cikarang

### ✅ Tenaga Ahli Berpengalaman
Tim tukang las kami adalah profesional yang sudah berpengalaman lebih dari 10 tahun dalam bidang pengelasan dan konstruksi baja.

### ✅ Material Berkualitas SNI
Kami hanya menggunakan material besi berkualitas yang memenuhi Standar Nasional Indonesia (SNI) untuk memastikan konstruksi yang kuat dan tahan lama.

### ✅ Harga Kompetitif
Harga jasa las kami sangat kompetitif untuk wilayah Cikarang. Kami memberikan penawaran harga yang transparan dan sesuai dengan kualitas pekerjaan.

### ✅ Garansi Pekerjaan
Setiap pekerjaan yang kami kerjakan dilengkapi dengan garansi untuk memberikan kepuasan dan rasa aman kepada pelanggan.

### ✅ Survey & Konsultasi Gratis
Kami menyediakan layanan survey lokasi dan konsultasi gratis untuk membantu Anda merencanakan proyek konstruksi baja.

## Area Layanan di Cikarang

Kami melayani seluruh wilayah Cikarang dan sekitarnya:
- Cikarang Selatan
- Cikarang Utara
- Cikarang Barat
- Cikarang Timur
- Cikarang Pusat
- Lippo Cikarang
- Jababeka
- MM2100
- EJIP
- Delta Silicon

## Proses Pemesanan

1. **Konsultasi** - Hubungi kami via WhatsApp atau telepon
2. **Survey** - Tim kami akan datang untuk survey lokasi (gratis)
3. **Penawaran** - Kami berikan penawaran harga yang detail
4. **Kesepakatan** - Setelah deal, kami jadwalkan pengerjaan
5. **Pengerjaan** - Dikerjakan oleh tenaga ahli profesional
6. **Finishing** - Quality control dan finishing sempurna
7. **Serah Terima** - Serah terima pekerjaan dengan garansi

## Estimasi Harga Jasa Las Cikarang

Harga jasa las di Cikarang bervariasi tergantung:
- Jenis pekerjaan (kanopi, pagar, tralis, dll)
- Material yang digunakan
- Ukuran dan kompleksitas desain
- Finishing (cat, powder coating, galvanis)
- Lokasi pengerjaan

**Untuk penawaran harga yang akurat, silakan hubungi kami untuk konsultasi gratis!**

## Mengapa Memilih Kami?

### 🏆 Portfolio Lengkap
Kami telah mengerjakan ratusan proyek di wilayah Cikarang, dari rumah tinggal hingga pabrik besar.

### ⚡ Pengerjaan Cepat
Kami memahami waktu Anda berharga. Pengerjaan kami efisien tanpa mengorbankan kualitas.

### 📱 Komunikasi Mudah
Tim customer service kami siap melayani Anda dengan responsif via WhatsApp, telepon, atau kunjungan langsung.

### 🎨 Custom Design
Kami dapat mewujudkan desain custom sesuai keinginan Anda, dari konsep hingga realisasi.

## Hubungi Kami Sekarang!

Jangan ragu untuk berkonsultasi dengan kami mengenai kebutuhan jasa las Anda di Cikarang.

📱 **WhatsApp: 0852-1207-8467**
📧 **Email: info@lasbekasi.com**
📍 **Alamat: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar.**

> "Kualitas adalah prioritas kami, kepuasan Anda adalah kesuksesan kami!"

**Segera hubungi kami untuk konsultasi dan penawaran harga terbaik!**
      `
    },
    'jasa-tukang-las-setu': {
      slug: 'jasa-tukang-las-setu',
      title: 'Jasa Tukang Las Setu - Cepat, Rapi, dan Berkualitas',
      category: 'Jasa Las',
      date: '11 Oktober 2025',
      author: 'Admin',
      metaDescription: 'Layanan jasa tukang las profesional di Setu, Bekasi. Melayani pembuatan kanopi, pagar, tralis, railing tangga dengan pengerjaan cepat dan rapi.',
      content: `
# Jasa Tukang Las Setu - Cepat, Rapi, dan Berkualitas

Butuh **jasa tukang las di Setu** yang cepat, rapi, dan berkualitas? Kami siap membantu!

## Layanan Jasa Las Profesional di Setu

Kami adalah penyedia jasa tukang las terpercaya yang melayani wilayah **Setu dan sekitarnya**. Berlokasi di Jl. Raya Setu Cibitung, kami sangat dekat dengan area Anda dan siap memberikan layanan terbaik.

## Jenis Layanan yang Kami Tawarkan

### 🏡 Untuk Rumah Tinggal

#### Kanopi
- Kanopi Alderon - Ringan, anti bocor, tahan UV
- Kanopi Solartuff - Tembus cahaya, tahan benturan
- Kanopi Polycarbonate - Ekonomis, beragam warna
- Kanopi Tempered Glass - Mewah, modern, kuat

#### Pagar & Tralis
- Pagar Minimalis - Desain modern dan elegan
- Pagar Klasik - Model tradisional yang timeless
- Tralis Jendela - Untuk keamanan maksimal
- Tralis Pintu - Custom design sesuai selera

#### Railing & Tangga
- Railing Tangga - Industrial, minimalis, klasik
- Railing Balkon - Aman dan estetik
- Tangga Putar - Hemat ruang
- Tangga Lurus - Konstruksi kokoh

#### Pintu & Gerbang
- Pintu Garasi Sliding - Hemat tempat
- Folding Gate - Security door
- Rolling Door - Untuk garasi dan toko
- Pagar Harmonika - Fleksibel dan aman

### 🏢 Untuk Komersial & Industri

- **Struktur Baja Ringan** - Rangka atap, mezzanine
- **Kanopi Area Parkir** - Untuk gedung dan pabrik
- **Partisi Ruangan** - Pembatas area kerja
- **Tangga Darurat** - Konstruksi aman dan kuat
- **Pagar Pabrik** - BRC, kawat harmonika, pagar panel

### 🪑 Furniture Industrial

- **Rak Gantung** - Untuk dapur dan ruang keluarga
- **Meja Industrial** - Meja makan, meja kerja, meja cafe
- **Kursi Besi** - Kursi bar, kursi makan, kursi taman
- **Lemari & Kabinet** - Storage solution custom
- **Partisi Kaca & Besi** - Pembatas ruangan stylish

## Mengapa Memilih Jasa Las Kami di Setu?

### 🎯 Lokasi Strategis
Berlokasi di Jl. Raya Setu Cibitung, kami sangat dekat dengan wilayah Setu sehingga:
- Response time lebih cepat
- Biaya survey dan mobilisasi lebih efisien
- Mudah untuk koordinasi dan komunikasi

### 👨‍🏭 Tukang Las Berpengalaman
- Pengalaman lebih dari 20 tahun sejak 1999
- Tenaga ahli yang terampil dan profesional
- Telah mengerjakan ratusan proyek di Setu
- Tersertifikasi dan kompeten

### 🏗️ Material Berkualitas
- Menggunakan besi berkualitas SNI
- Pilihan material sesuai budget
- Supplier material terpercaya
- Garansi material dan pekerjaan

### 💰 Harga Bersaing
- Harga kompetitif untuk wilayah Setu
- Transparansi biaya tanpa biaya tersembunyi
- Flexible payment terms
- Gratis survey dan konsultasi

### ⚡ Pengerjaan Cepat & Rapi
- Jadwal pengerjaan yang jelas
- Finishing rapi dan berkualitas
- Minimal gangguan untuk aktivitas Anda
- Clean up setelah selesai pengerjaan

## Wilayah Layanan di Sekitar Setu

Kami melayani:
- Setu (seluruh wilayah)
- Cibitung
- Cikarang Barat
- Bojong Menteng
- Serang Baru
- Nagrak
- Telajung
- Dan sekitarnya

## Proses Kerja Kami

### 1️⃣ Konsultasi Awal
Hubungi kami via WhatsApp untuk konsultasi awal. Ceritakan kebutuhan dan budget Anda.

### 2️⃣ Survey Lokasi (Gratis)
Tim kami datang ke lokasi untuk melakukan pengukuran dan survey. **Gratis tanpa biaya!**

### 3️⃣ Penawaran Harga
Kami berikan penawaran harga yang detail dan transparan sesuai hasil survey.

### 4️⃣ Kesepakatan & DP
Setelah deal, kami mulai persiapan material dan jadwal pengerjaan.

### 5️⃣ Proses Pengerjaan
Pengerjaan oleh tenaga ahli dengan supervisi quality control.

### 6️⃣ Finishing & Cat
Finishing dengan cat atau powder coating sesuai permintaan.

### 7️⃣ Serah Terima
Serah terima pekerjaan lengkap dengan garansi tertulis.

## Estimasi Waktu Pengerjaan

- **Tralis/Teralis** - 1-3 hari
- **Kanopi standar** - 3-5 hari
- **Pagar** - 3-7 hari tergantung panjang
- **Railing tangga** - 2-4 hari
- **Pintu garasi** - 3-5 hari
- **Furniture custom** - 7-14 hari

*Waktu dapat bervariasi tergantung kompleksitas dan ukuran proyek

## Tips Memilih Jasa Las yang Tepat

### ✅ Cek Portfolio
Lihat portfolio pekerjaan sebelumnya untuk menilai kualitas.

### ✅ Bandingkan Harga
Jangan hanya pilih yang termurah, pertimbangkan kualitas material dan pengerjaan.

### ✅ Tanya Garansi
Pastikan ada garansi untuk pekerjaan yang dikerjakan.

### ✅ Komunikasi Jelas
Pilih jasa las yang responsif dan komunikatif.

### ✅ Material Jelas
Pastikan spesifikasi material dijelaskan dengan detail.

## Testimoni Pelanggan di Setu

> "Puas banget sama hasil kanopi dari Bengkel Las Mandiri. Pengerjaan cepat dan rapi. Recommended!" - **Pak Budi, Setu**

> "Harga terjangkau, hasil maksimal. Pagar rumah saya jadi cantik dan kokoh." - **Ibu Siti, Cibitung**

> "Profesional dan tepat waktu. Akan order lagi untuk project selanjutnya." - **Pak Andi, Telajung**

## Info Kontak & Pemesanan

Segera hubungi kami untuk konsultasi gratis dan penawaran harga terbaik!

📱 **WhatsApp: 0852-1207-8467** (Fast Response)
📞 **Telepon: 0852-1207-8467**
📧 **Email: info@lasbekasi.com**
📍 **Alamat: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar.**

### Jam Operasional
- Senin - Sabtu: 08.00 - 17.00 WIB
- Minggu: Libur (Emergency call available)

## FAQ - Pertanyaan Umum

**Q: Apakah ada biaya survey?**
A: Survey dan konsultasi GRATIS untuk wilayah Setu dan sekitarnya.

**Q: Berapa minimal order?**
A: Tidak ada minimal order, semua project kami layani dengan profesional.

**Q: Apakah ada garansi?**
A: Ya, semua pekerjaan kami berikan garansi tertulis.

**Q: Bisa custom design?**
A: Tentu! Kami siap mewujudkan desain custom sesuai keinginan Anda.

**Q: Pembayaran bagaimana?**
A: DP 50% saat deal, pelunasan saat selesai. Bisa nego untuk project besar.

---

## Kesimpulan

Jika Anda mencari **jasa tukang las di Setu** yang profesional, cepat, rapi, dan berkualitas dengan harga yang kompetitif, kami adalah pilihan yang tepat!

**Hubungi kami sekarang juga untuk konsultasi gratis dan penawaran harga terbaik!**

📱 **0852-1207-8467** (WhatsApp / Call)

> "Kepuasan Anda adalah prioritas kami. Kualitas pekerjaan adalah jaminan kami!"
      `
    },
    'jasa-tukang-las-bekasi': {
      slug: 'jasa-tukang-las-bekasi',
      title: 'Jasa Tukang Las Bekasi - Berpengalaman dan Bergaransi',
      category: 'Jasa Las',
      date: '11 Oktober 2025',
      author: 'Admin',
      metaDescription: 'Jasa tukang las terpercaya di Bekasi. Dikerjakan oleh tenaga ahli berpengalaman dengan material berkualitas SNI dan harga kompetitif. Garansi pekerjaan.',
      content: `
# Jasa Tukang Las Bekasi - Berpengalaman dan Bergaransi

Mencari **jasa tukang las di Bekasi** yang berpengalaman, berkualitas, dan bergaransi? Anda telah menemukan solusi yang tepat!

## Tentang Jasa Las Kami

**Bengkel Las Mandiri** adalah penyedia jasa tukang las profesional yang telah melayani wilayah Bekasi dan sekitarnya sejak tahun 1999. Dengan pengalaman lebih dari **20 tahun**, kami telah menangani ribuan proyek konstruksi baja untuk rumah tinggal, gedung komersial, pabrik, dan berbagai kebutuhan lainnya.

## Layanan Lengkap Jasa Tukang Las Bekasi

### 🏠 Konstruksi Rumah Tinggal

#### 1. Kanopi
Kami menyediakan berbagai jenis kanopi dengan material berkualitas:
- **Kanopi Alderon** - Harga: Rp 650.000/m² (ringan, anti bocor, tahan UV)
- **Kanopi Solartuff** - Harga: Rp 850.000/m² (tembus cahaya, tahan benturan)
- **Kanopi Polycarbonate** - Harga: Rp 550.000/m² (ekonomis, beragam warna)
- **Kanopi Tempered Glass** - Harga: Rp 1.200.000/m² (mewah, modern, kuat)

#### 2. Pagar
Berbagai model pagar sesuai kebutuhan:
- Pagar Minimalis Modern
- Pagar Klasik Ornamen
- Pagar BRC + Besi Hollow
- Pagar Laser Cutting
- Pagar Panel Besi
- Custom Design

#### 3. Tralis/Teralis
Keamanan rumah dengan tralis berkualitas:
- Tralis Jendela Minimalis
- Tralis Pintu
- Tralis Besi Hollow
- Tralis Ornamen
- Tralis Modern

#### 4. Railing Tangga & Balkon
Railing aman dan estetik:
- Railing Tangga Industrial
- Railing Balkon Kaca Tempered
- Railing Minimalis
- Railing Stainless Steel
- Railing Custom Design

#### 5. Pintu & Gerbang
- Pintu Garasi Sliding
- Folding Gate/Harmonika
- Rolling Door
- Pintu Besi Custom
- Gerbang Otomatis

### 🏢 Konstruksi Komersial & Industri

#### Struktur Baja
- Rangka Atap Baja Ringan
- Struktur Mezzanine
- Gudang Pre-Engineered Building
- Kanopi Area Loading
- Struktur Penunjang

#### Pagar Industri
- Pagar BRC Galvanis
- Pagar Kawat Harmonika
- Pagar Panel Beton + Besi
- Pagar Chainlink
- Security Fencing

#### Tangga Industrial
- Tangga Besi Pabrik
- Tangga Putar/Spiral
- Tangga Darurat
- Tangga Platform
- Tangga Custom

### 🪑 Furniture & Dekorasi

#### Furniture Industrial
- Rak Gantung Dapur (mulai Rp 1.200.000)
- Meja Industrial (mulai Rp 1.700.000)
- Kursi Bar (mulai Rp 450.000)
- Kabinet Industrial (mulai Rp 4.500.000)
- Meja Makan + Kursi (mulai Rp 4.000.000)

#### Partisi & Display
- Partisi Ruangan (mulai Rp 6.250.000)
- Display Baju (mulai Rp 4.500.000)
- Rak Display Toko
- Partisi Kaca + Besi

## Keunggulan Jasa Las Kami

### ✅ Pengalaman 20+ Tahun
- Berdiri sejak 1999
- Telah mengerjakan ribuan proyek
- Portfolio lengkap dan beragam
- Dipercaya oleh pelanggan setia

### ✅ Tenaga Ahli Profesional
- Tukang las tersertifikasi
- Pengalaman minimal 10 tahun
- Terampil dan detail oriented
- Supervisor berpengalaman

### ✅ Material Berkualitas SNI
- Besi SNI berkualitas terjamin
- Supplier material terpercaya
- Pilihan material sesuai budget
- Sertifikat material tersedia

### ✅ Harga Kompetitif
- Harga terjangkau dan bersaing
- Transparansi biaya
- Tidak ada biaya tersembunyi
- Gratis survey & konsultasi

### ✅ Garansi Tertulis
- Garansi pekerjaan
- After sales service
- Maintenance support
- Claim mudah dan cepat

### ✅ Pengerjaan Profesional
- Jadwal pasti dan tepat waktu
- Finishing rapi dan berkualitas
- Area kerja selalu bersih
- Minimal gangguan

## Wilayah Layanan Jasa Las Bekasi

Kami melayani seluruh wilayah Bekasi dan sekitarnya:

### Bekasi Timur
- Bekasi Jaya
- Durenjaya
- Margahayu
- Aren Jaya

### Bekasi Barat
- Bintara
- Kranji
- Kota Baru
- Jaka Sampurna

### Bekasi Selatan
- Kayuringin
- Jaka Setia
- Pekayon
- Jaka Mulya

### Cikarang
- Cikarang Selatan
- Cikarang Utara
- Cikarang Barat
- Cikarang Timur

### Wilayah Lainnya
- Setu
- Cibitung
- Tambun
- Tarumajaya
- Babelan
- **Dan seluruh Jabodetabek**

## Proses Pemesanan yang Mudah

### Step 1: Konsultasi Awal
Hubungi kami via WhatsApp atau telepon. Ceritakan kebutuhan Anda:
- Jenis pekerjaan yang diinginkan
- Lokasi proyek
- Budget yang dimiliki
- Timeline pengerjaan

### Step 2: Survey Lokasi (GRATIS)
Tim survey kami akan datang ke lokasi untuk:
- Mengukur area kerja
- Mengecek kondisi lapangan
- Memberikan saran teknis
- Diskusi detail proyek

### Step 3: Penawaran Harga Detail
Kami berikan penawaran yang mencakup:
- Rincian biaya material
- Biaya tenaga kerja
- Timeline pengerjaan
- Spesifikasi material
- Gambar kerja (jika perlu)

### Step 4: Deal & Perjanjian
Setelah kesepakatan:
- Tanda tangan kontrak kerja
- DP 50% (negotiable)
- Jadwal pengerjaan pasti
- Persiapan material

### Step 5: Pengerjaan
- Pengerjaan oleh tenaga ahli
- Supervisi berkala
- Update progress
- Quality control ketat

### Step 6: Finishing
- Pengecatan/powder coating
- Instalasi accessories
- Pembersihan area
- Final checking

### Step 7: Serah Terima
- Inspeksi bersama
- Pelunasan pembayaran
- Serah terima dokumen
- Garansi tertulis

## Estimasi Harga Jasa Las Bekasi 2025

### Kanopi (per m²)
- Polycarbonate: Rp 550.000 - Rp 650.000
- Alderon: Rp 650.000 - Rp 750.000
- Solartuff: Rp 850.000 - Rp 950.000
- Tempered Glass: Rp 1.200.000 - Rp 1.500.000

### Pagar (per meter)
- Pagar Minimalis: Rp 350.000 - Rp 500.000
- Pagar BRC: Rp 250.000 - Rp 350.000
- Pagar Ornamen: Rp 450.000 - Rp 700.000
- Pagar Laser Cut: Rp 600.000 - Rp 1.000.000

### Tralis (per m²)
- Tralis Minimalis: Rp 400.000 - Rp 550.000
- Tralis Ornamen: Rp 550.000 - Rp 750.000

### Railing (per meter)
- Railing Tangga: Rp 450.000 - Rp 650.000
- Railing Balkon: Rp 500.000 - Rp 800.000
- Railing Kaca: Rp 850.000 - Rp 1.200.000

### Pintu & Gerbang
- Folding Gate: Rp 350.000 - Rp 450.000/m²
- Pintu Garasi: Rp 2.500.000 - Rp 5.000.000
- Rolling Door: Rp 500.000 - Rp 650.000/m²

*Harga dapat berubah sewaktu-waktu tergantung harga material. Hubungi kami untuk penawaran terbaru.

## Tips Memilih Jasa Tukang Las yang Tepat

### 1. Periksa Pengalaman
Pilih jasa las dengan track record yang jelas dan portfolio yang dapat diverifikasi.

### 2. Cek Legalitas
Pastikan bengkel las memiliki izin usaha yang jelas dan alamat workshop yang pasti.

### 3. Bandingkan Penawaran
Jangan hanya fokus pada harga termurah. Pertimbangkan kualitas material dan pengerjaan.

### 4. Tanyakan Garansi
Bengkel las profesional pasti memberikan garansi untuk pekerjaannya.

### 5. Komunikasi Lancar
Pilih bengkel las yang responsif dan komunikatif untuk memudahkan koordinasi.

### 6. Material Jelas
Pastikan spesifikasi material dijelaskan dengan detail dan ada bukti pembelian.

### 7. Kontrak Tertulis
Selalu minta kontrak tertulis yang mencakup scope of work, harga, timeline, dan garansi.

## Testimoni Pelanggan Puas

> "Hasil pekerjaan kanopi sangat memuaskan! Tepat waktu, rapi, dan harga sesuai. Highly recommended!" - **Bapak Ahmad, Bekasi Timur**

> "Sudah 3x order di Bengkel Las Mandiri. Selalu puas dengan hasil dan pelayanannya." - **Ibu Diana, Cikarang**

> "Profesional dan amanah. Pagar rumah saya dikerjakan dengan detail dan finishing yang rapi." - **Pak Rudi, Bekasi Barat**

> "Furniture industrial yang saya order hasilnya melebihi ekspektasi. Kualitas premium dengan harga reasonable." - **Owner Cafe Kopi, Bekasi Selatan**

## Pertanyaan yang Sering Diajukan (FAQ)

**Q: Apakah ada biaya untuk survey?**
A: Survey GRATIS untuk wilayah Bekasi dan sekitarnya. Tidak ada biaya sama sekali.

**Q: Berapa lama waktu pengerjaan?**
A: Tergantung jenis dan skala proyek. Kanopi rata-rata 3-5 hari, pagar 5-7 hari. Detail akan dijelaskan saat survey.

**Q: Apakah bisa request custom design?**
A: Tentu! Kami siap mewujudkan desain custom sesuai keinginan Anda. Tim kami akan bantu visualisasi.

**Q: Bagaimana sistem pembayaran?**
A: DP 50% saat deal, pelunasan saat selesai. Untuk project besar bisa diatur payment terms yang fleksibel.

**Q: Apakah ada garansi?**
A: Ya, semua pekerjaan kami berikan garansi tertulis. Garansi konstruksi dan cat.

**Q: Material apa yang digunakan?**
A: Kami gunakan material berkualitas SNI. Pelanggan bisa pilih grade material sesuai budget.

**Q: Apakah melayani di luar Bekasi?**
A: Ya, kami melayani seluruh Jabodetabek dan sekitarnya.

**Q: Bagaimana jika ada komplain?**
A: Kami memiliki after sales service. Komplain akan ditangani maksimal 24 jam.

## Mengapa Harus Pilih Kami?

### 🏆 Portfolio Terbukti
Ratusan proyek sukses di Bekasi dan sekitarnya dengan tingkat kepuasan pelanggan tinggi.

### 💯 Kualitas Terjamin
Material SNI, tenaga ahli berpengalaman, dan supervisi ketat di setiap tahap pengerjaan.

### 💰 Harga Transparan
Penawaran harga yang detail dan tidak ada biaya tersembunyi. Apa yang tertulis adalah yang Anda bayar.

### ⏱️ Tepat Waktu
Kami commit dengan timeline yang disepakati. Keterlambatan akan dikompensasi.

### 📞 Layanan Responsif
Customer service kami siap melayani Anda dengan cepat dan profesional.

### 🔧 After Sales Support
Kami tidak hilang setelah project selesai. After sales service dan maintenance tersedia.

## Hubungi Kami Sekarang!

Jangan tunda proyek konstruksi baja Anda. Konsultasikan kebutuhan Anda dengan kami sekarang juga!

### Info Kontak

📱 **WhatsApp: 0852-1207-8467** (Fast Response 24/7)
📞 **Telepon: 0852-1207-8467**
📧 **Email: info@lasbekasi.com**
📍 **Alamat Workshop: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320**

### Jam Operasional
- **Senin - Jumat**: 08.00 - 17.00 WIB
- **Sabtu**: 08.00 - 15.00 WIB
- **Minggu**: Libur (Emergency call tersedia)

### Sosial Media
- Instagram: @bengkellasmandiri
- Facebook: Bengkel Las Mandiri Bekasi

## Call to Action

**Jangan biarkan proyek Anda tertunda!**

Segera hubungi kami untuk:
- ✅ Konsultasi GRATIS
- ✅ Survey lokasi GRATIS
- ✅ Penawaran harga terbaik
- ✅ Garansi tertulis
- ✅ Pengerjaan profesional

📱 **Klik untuk WhatsApp: 0852-1207-8467**

> "Kepercayaan Anda adalah aset terbesar kami. Kepuasan Anda adalah kesuksesan kami!"

---

**Bengkel Las Mandiri - Jasa Tukang Las Bekasi Terpercaya Sejak 1999**

*Partner terbaik untuk semua kebutuhan konstruksi baja Anda*
      `
    },
    'jasa-kanopi-bekasi': {
      slug: 'jasa-kanopi-bekasi',
      title: 'Jasa Pasang Kanopi Bekasi - Harga Borongan Tukang Kanopi Terpercaya 2025',
      category: 'Layanan Las',
      date: '15 Januari 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Jasa Pasang Kanopi Bekasi ✓ Harga Borongan Mulai 350rb/m² ✓ Material SNI ✓ Garansi Resmi ✓ Tenaga Profesional. Alderon, Polycarbonate, Spandek, Kaca Tempered. Survey GRATIS!',
      content: `
# Jasa Pasang Kanopi Bekasi - Harga Borongan Tukang Kanopi Terpercaya 2025

## Spesialis Kanopi Minimalis, Cremona, dan Custom Design

**Bengkel Las Mandiri** adalah penyedia **jasa pasang kanopi Bekasi** terpercaya dengan pengalaman lebih dari 20 tahun. Kami melayani pemasangan kanopi untuk rumah, ruko, perkantoran, pabrik, dan bangunan komersial di seluruh wilayah Bekasi dan Jabodetabek.

### 🏆 Keunggulan Bengkel Las Mandiri

- ✅ **Tenaga Ahli Berpengalaman 20+ Tahun** - Tim tukang profesional dan tersertifikasi
- ✅ **Material Berkualitas SNI** - Alderon, Polycarbonate, Spandek, Kaca Tempered original
- ✅ **Harga Transparan & Kompetitif** - Tidak ada biaya tersembunyi
- ✅ **Garansi Resmi Konstruksi** - Garansi pemasangan dan material
- ✅ **Survey & Konsultasi GRATIS** - Wilayah Bekasi dan sekitarnya
- ✅ **Proses Cepat & Rapi** - Pengerjaan tepat waktu dengan hasil presisi

## Apa Itu Kanopi?

**Kanopi** adalah struktur atap tambahan yang dipasang di luar bangunan utama, biasanya di area garasi, carport, teras, balkon, atau pintu masuk. Fungsi utama kanopi adalah:

### Fungsi Kanopi:
- 🌞 **Pelindung dari Cuaca** - Melindungi dari panas matahari, hujan, dan angin
- 🏠 **Penambah Estetika** - Mempercantik tampilan eksterior rumah
- 🚗 **Proteksi Kendaraan** - Melindungi mobil/motor dari terik dan hujan
- ❄️ **Penurun Suhu** - Mengurangi panas yang masuk ke dalam rumah
- 💰 **Investasi Properti** - Menambah nilai jual properti

## Jenis-Jenis Atap Kanopi yang Kami Tawarkan

### 1. Kanopi Alderon
Material atap PVC berkualitas tinggi yang tahan lama dan anti bocor.

**Keunggulan:**
- Tahan hingga 25 tahun
- Anti bocor dan anti karat
- Peredam panas hingga 30°C
- Tidak berisik saat hujan
- Tersedia berbagai warna

**Harga**: Rp 650.000 - Rp 750.000/m²

### 2. Kanopi Polycarbonate
Material transparan/translucent yang memberikan pencahayaan alami.

**Keunggulan:**
- Ringan dan fleksibel
- Tahan benturan
- UV Protection
- Transparansi 80-90%
- Tidak mudah pecah

**Harga**: Rp 550.000 - Rp 650.000/m²

### 3. Kanopi Solartuff / Solarflat
Material premium dengan daya tahan ekstra dan perlindungan UV maksimal.

**Keunggulan:**
- Garansi 10 tahun
- UV Protection 99%
- Tahan benturan 200x lebih kuat dari kaca
- Tahan suhu ekstrim
- Tidak mudah memuai

**Harga**: Rp 850.000 - Rp 950.000/m²

### 4. Kanopi Kaca Tempered
Material kaca premium untuk tampilan mewah dan modern.

**Keunggulan:**
- Tampilan elegan dan eksklusif
- Transparansi 100%
- Kuat dan aman (jika pecah tidak tajam)
- Mudah dibersihkan
- Tahan lama

**Harga**: Rp 1.200.000 - Rp 1.500.000/m²

### 5. Kanopi Spandek
Material atap metal yang ekonomis namun tetap berkualitas.

**Keunggulan:**
- Harga terjangkau
- Tahan karat (galvanis/zincalume)
- Kuat dan kokoh
- Mudah pemasangan
- Tersedia berbagai warna

**Harga**: Rp 350.000 - Rp 450.000/m²

### 6. Kanopi Membrane / Kain
Material tekstil waterproof untuk desain modern dan artistik.

**Keunggulan:**
- Desain unik dan modern
- Ringan dan fleksibel
- Waterproof
- Warna cerah tahan lama
- Cocok untuk area luas

**Harga**: Rp 800.000 - Rp 1.100.000/m²

## Jenis Rangka Kanopi

### 1. Rangka Baja Ringan
Material konstruksi modern yang ringan namun kuat.

**Spesifikasi:**
- Ketebalan: 0.75mm - 1.00mm
- Bahan: Galvanis zinc-aluminum
- Kekuatan tarik: 550 Mpa

**Keunggulan:**
- Anti karat dan rayap
- Proses pemasangan cepat
- Bobot ringan
- Harga ekonomis

**Harga Rangka + Atap**: Mulai Rp 350.000/m²

### 2. Rangka Besi Hollow
Konstruksi besi hollow untuk kekuatan maksimal.

**Spesifikasi:**
- Ukuran: 4x4cm, 4x6cm, 4x8cm
- Bahan: Hollow galvanis/galvalum
- Ketebalan: 1.2mm - 2.0mm

**Keunggulan:**
- Sangat kuat dan kokoh
- Tahan beban berat
- Cocok untuk bentang lebar
- Tahan lama 15-20 tahun

**Harga Rangka + Atap**: Mulai Rp 560.000/m²

### 3. Rangka Baja WF (Wide Flange)
Konstruksi baja struktural untuk proyek besar dan industrial.

**Spesifikasi:**
- Profil: H-Beam, I-Beam, C-Channel
- Bahan: Baja struktural SNI
- Kekuatan tinggi untuk beban ekstrim

**Keunggulan:**
- Kekuatan maksimal
- Cocok untuk bentang sangat lebar (>8 meter)
- Tahan gempa
- Awet puluhan tahun

**Harga Rangka + Atap**: Mulai Rp 600.000/m²

## Model Desain Kanopi

### 1. Kanopi Minimalis
Desain simple, clean, dan modern tanpa ornamen berlebih.

### 2. Kanopi Cremona
Rangka dengan motif silang diagonal yang estetis dan kuat.

### 3. Kanopi Full Cremona
Desain cremona di seluruh area rangka untuk tampilan mewah.

### 4. Kanopi Tanpa Tiang
Desain cantilevered yang menggunakan konsol tanpa tiang penyangga depan.

### 5. Kanopi Tiang V
Tiang penyangga berbentuk V untuk estetika modern.

### 6. Kanopi Lengkung
Desain atap melengkung untuk tampilan artistik.

## Daftar Harga Kanopi Bekasi 2025

### Paket Kanopi Rangka Baja Ringan

| **Jenis Atap** | **Harga per m²** |
|----------------|------------------|
| Spandek Zincalume | Rp 350.000 |
| Spandek Warna | Rp 370.000 |
| Spandek Pasir | Rp 380.000 |
| Polycarbonate | Rp 550.000 |
| Alderon | Rp 650.000 |
| Solartuff | Rp 850.000 |

### Paket Kanopi Rangka Hollow Galvanis

| **Jenis Atap** | **Harga per m²** |
|----------------|------------------|
| Spandek Zincalume | Rp 560.000 |
| Spandek Warna | Rp 580.000 |
| Spandek Pasir | Rp 600.000 |
| Polycarbonate | Rp 750.000 |
| Alderon | Rp 850.000 |
| Solartuff | Rp 1.050.000 |
| Kaca Tempered 10mm | Rp 1.500.000 |

### Paket Kanopi Rangka Baja WF

| **Jenis Atap** | **Harga per m²** |
|----------------|------------------|
| Spandek Pasir | Rp 630.000 |
| Polycarbonate | Rp 750.000 |
| Alderon | Rp 900.000 |
| Kaca Tempered 12mm | Rp 1.800.000 |

*Catatan Harga:*
- Harga minimal pemesanan 30m² (negotiable untuk area <30m²)
- Harga sudah termasuk material rangka, atap, dan jasa pemasangan
- Harga belum termasuk pengecatan rangka (opsional)
- Harga dapat berubah sewaktu-waktu mengikuti harga material

## Proses Pemesanan Kanopi

### Step 1: Konsultasi & Survey GRATIS
- Hubungi kami via WhatsApp/telepon
- Ceritakan kebutuhan dan lokasi proyek
- Tim kami jadwalkan survey GRATIS

### Step 2: Survey Lokasi
- Pengukuran presisi oleh tim ahli
- Cek kondisi struktur bangunan
- Diskusi model dan desain
- Rekomendasi material terbaik

### Step 3: Penawaran Harga Detail
- RAB (Rencana Anggaran Biaya) lengkap
- Rincian material yang digunakan
- Timeline pengerjaan
- Gambar kerja/3D rendering (jika diminta)

### Step 4: Deal & Kontrak Kerja
- Tanda tangan kontrak kerja
- DP 50% (negotiable untuk proyek besar)
- Jadwal pengerjaan fix
- Pemesanan dan persiapan material

### Step 5: Pengerjaan
- Pengerjaan oleh tim profesional
- Supervisi berkala
- Update progress harian
- Quality control ketat

### Step 6: Finishing & Inspeksi
- Pengecatan (jika diminta)
- Pembersihan area kerja
- Inspeksi final bersama klien

### Step 7: Serah Terima & Garansi
- Serah terima pekerjaan
- Pelunasan pembayaran
- Sertifikat garansi resmi
- After sales support

## Keuntungan Menggunakan Kanopi

### 1. Proteksi Maksimal
Melindungi area dari panas, hujan, dan angin. Kendaraan dan furnitur outdoor terlindungi dengan baik.

### 2. Penghematan Energi
Mengurangi panas yang masuk ke rumah, sehingga mengurangi penggunaan AC hingga 30%.

### 3. Estetika dan Nilai Properti
Menambah keindahan eksterior dan meningkatkan nilai jual properti hingga 10-15%.

### 4. Ruang Tambahan
Menciptakan ruang tambahan yang nyaman untuk bersantai atau aktivitas outdoor.

### 5. Investasi Jangka Panjang
Material berkualitas bertahan 15-25 tahun dengan perawatan minimal.

## Wilayah Layanan Jasa Pasang Kanopi

Kami melayani pemasangan kanopi di seluruh wilayah Bekasi dan sekitarnya:

### Kota Bekasi:
- Bekasi Barat
- Bekasi Timur
- Bekasi Selatan
- Bekasi Utara
- Bekasi Tengah
- Pondok Gede
- Jatiasih
- Jatisampurna
- Bantargebang
- Mustikajaya
- Rawalumbu
- Medan Satria

### Kabupaten Bekasi:
- Cikarang Barat
- Cikarang Timur
- Cikarang Selatan
- Cikarang Utara
- Cikarang Pusat
- Cibitung
- Setu
- Tambun Selatan
- Tambun Utara
- Sukatani
- Cibarusah
- Babelan
- Tarumajaya
- Bojongmangu

### Wilayah Lain:
- Jakarta Timur
- Cileungsi
- Cileungsi
- Gunung Putri
- Cileungsi
- Dan seluruh Jabodetabek

## Mengapa Memilih Bengkel Las Mandiri?

### 💼 Pengalaman 20+ Tahun
Sejak 1999, kami telah mengerjakan ribuan proyek kanopi dengan tingkat kepuasan klien 99%.

### 👷 Tim Profesional Bersertifikat
Tenaga ahli terlatih dengan pengalaman puluhan tahun di bidang konstruksi baja dan kanopi.

### 🏗️ Material Berkualitas SNI
Semua material yang kami gunakan berstandar SNI dan bergaransi resmi dari pabrik.

### 💯 Harga Transparan
Tidak ada biaya tersembunyi. Apa yang tertulis di RAB adalah yang Anda bayar.

### ⚡ Pengerjaan Cepat
Rata-rata pengerjaan kanopi selesai dalam 3-7 hari kerja (tergantung luas dan kompleksitas).

### 🛡️ Garansi Resmi
Garansi konstruksi dan cat, serta after sales service yang responsif.

### 📞 Customer Service Responsif
CS kami siap melayani konsultasi dan pertanyaan Anda 24/7.

## Tips Memilih Jasa Pasang Kanopi

### 1. Periksa Portfolio dan Testimoni
Minta portfolio pekerjaan sebelumnya dan baca testimoni dari klien terdahulu.

### 2. Cek Legalitas Usaha
Pastikan bengkel las memiliki izin usaha yang jelas dan alamat workshop yang pasti.

### 3. Tanyakan Detail Material
Minta spesifikasi lengkap material yang akan digunakan (merk, tipe, ketebalan, dll).

### 4. Bandingkan Penawaran
Jangan hanya lihat harga termurah. Pertimbangkan kualitas material, pengalaman tukang, dan garansi.

### 5. Pastikan Ada Garansi
Bengkel las profesional selalu memberikan garansi tertulis untuk pekerjaannya.

### 6. Komunikasi Lancar
Pilih penyedia jasa yang responsif dan komunikatif untuk kemudahan koordinasi.

### 7. Kontrak Tertulis
Selalu minta kontrak tertulis yang mencakup scope of work, spesifikasi material, harga, timeline, dan garansi.

## Pertanyaan yang Sering Diajukan (FAQ)

**Q: Berapa lama waktu pengerjaan kanopi?**
A: Untuk area 30-50m², rata-rata pengerjaan 3-5 hari kerja. Untuk area lebih luas bisa 7-10 hari.

**Q: Apakah ada biaya survey?**
A: Survey GRATIS untuk wilayah Bekasi dan sekitarnya (radius 30km dari workshop).

**Q: Bagaimana sistem pembayaran?**
A: DP 50% saat deal, pelunasan saat pekerjaan selesai. Untuk proyek besar bisa diatur termin pembayaran.

**Q: Apakah harga bisa nego?**
A: Harga sudah sangat kompetitif, namun untuk order dalam jumlah besar (>100m²) kami bisa berikan harga khusus.

**Q: Material apa yang paling recommended?**
A: Tergantung budget dan kebutuhan. Untuk budget terbatas: Spandek atau Polycarbonate. Untuk jangka panjang dan premium: Alderon atau Solartuff.

**Q: Apakah melayani di luar Bekasi?**
A: Ya, kami melayani seluruh Jabodetabek. Untuk area di luar Bekasi ada penyesuaian biaya mobilisasi.

**Q: Bagaimana cara perawatan kanopi?**
A: Cukup dibersihkan 3-6 bulan sekali dengan air dan sabun lembut. Hindari benda tajam atau abrasif.

**Q: Apakah bisa custom desain?**
A: Tentu! Kami siap mewujudkan desain custom sesuai keinginan Anda. Tim kami akan bantu visualisasi 3D jika diperlukan.

**Q: Berapa garansi yang diberikan?**
A: Garansi konstruksi dan pemasangan, serta garansi material sesuai dengan garansi pabrik (5-10 tahun tergantung jenis).

## Testimoni Pelanggan Puas

> "Puas banget! Kanopi alderon di rumah saya dikerjakan dengan rapi dan cepat, hanya 4 hari selesai. Pak Maman Toha dan timnya sangat profesional. Harga juga masuk akal." - **Bapak Andi, Jababeka**

> "Saya order kanopi kaca tempered untuk carport. Hasilnya WOW! Mewah banget dan kualitas topppercaya! Highly recommended!" - **Ibu Sari, Grand Galaxy**

> "Udah 3x order kanopi untuk rumah dan ruko. Selalu puas dengan hasil dan pelayanannya. Harga terjangkau, kualitas premium!" - **Pak Budi, Harapan Indah**

> "Tim Bengkel Las Mandiri sangat amanah. Material sesuai yang dijanjikan, pengerjaan rapi, tepat waktu. Terimakasih!" - **Ibu Linda, Pekayon**

## Hubungi Kami Sekarang!

Jangan tunda proyek kanopi Anda! Konsultasikan kebutuhan Anda dengan ahlinya.

### 📱 Kontak Kami:

📞 **Telepon/WhatsApp: 0852-1207-8467**
📧 **Email: info@lasbekasi.com**
📍 **Alamat Workshop: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320**

### ⏰ Jam Operasional:
- Senin - Jumat: 08.00 - 17.00 WIB
- Sabtu: 08.00 - 15.00 WIB
- Minggu: Libur (Emergency call available)

### 🎯 Dapatkan Penawaran Terbaik:
- ✅ Survey GRATIS
- ✅ Konsultasi GRATIS
- ✅ Gambar desain GRATIS (untuk order >50m²)
- ✅ Garansi resmi tertulis
- ✅ After sales support

📱 **Klik untuk WhatsApp: https://wa.me/6285212078467**

> "Kepercayaan Anda adalah aset terbesar kami. Kepuasan Anda adalah kesuksesan kami!"

---

**Bengkel Las Mandiri - Jasa Pasang Kanopi Bekasi Terpercaya Sejak 1999**

*Solusi kanopi terbaik untuk rumah, ruko, perkantoran, dan bangunan komersial Anda*

**Keywords:** jasa pasang kanopi bekasi, harga kanopi bekasi, kanopi alderon bekasi, kanopi polycarbonate bekasi, kanopi baja ringan bekasi, tukang kanopi bekasi, kanopi minimalis bekasi, kanopi kaca bekasi, harga borongan kanopi bekasi 2025
      `
    },
    'industrial-metal-canopy-manufacturing-indonesia': {
      slug: 'industrial-metal-canopy-manufacturing-indonesia',
      title: 'Industrial Metal Canopy Manufacturing Services - Indonesia Export Quality',
      category: 'Metal Fabrication',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Professional metal canopy manufacturing in Indonesia. We specialize in custom steel canopy design and fabrication for international buyers. Export quality with competitive pricing. ISO standards.',
      content: `
# Industrial Metal Canopy Manufacturing Services - Indonesia Export Quality

## Leading Metal Canopy Manufacturer in Indonesia

**Bengkel Las Mandiri** is a professional metal fabrication workshop located in Bekasi, Indonesia, specializing in **industrial metal canopy manufacturing** for both domestic and international markets. Since 1999, we have been serving clients worldwide with high-quality steel structures and custom fabrication services.

## About Our Manufacturing Facility

### Location & Contact
- 📍 **Address**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, West Java 17320, Indonesia
- 📱 **WhatsApp**: +62 852-1207-8467
- 📧 **Email**: info@lasbekasi.com
- 🌐 **Website**: lasbekasi.com

### Manufacturing Capabilities
- **Workshop Size**: 2,000 sqm production facility
- **Production Capacity**: 500+ sqm of canopy structures per month
- **Export Experience**: 20+ years serving international clients
- **Quality Standards**: ISO-compliant welding and fabrication processes
- **Lead Time**: 15-30 days depending on order quantity

## Metal Canopy Products for Export

### 1. Steel Frame Canopies

#### Specifications:
- **Frame Material**: Galvanized steel hollow sections
- **Frame Sizes**: 40x40mm, 40x60mm, 40x80mm (customizable)
- **Thickness**: 1.2mm - 2.5mm
- **Coating**: Hot-dip galvanized or powder coated
- **Span**: Up to 10 meters without intermediate support

#### Applications:
- Carports and parking structures
- Warehouse loading bays
- Industrial facility entrances
- Commercial building canopies
- Gas station canopies

### 2. Aluminum Canopy Systems

#### Specifications:
- **Frame Material**: Aluminum alloy 6063-T5
- **Frame Sizes**: Various profiles available
- **Finish**: Anodized or powder coated
- **Weight**: 40% lighter than steel
- **Corrosion Resistance**: Excellent for coastal areas

### 3. Polycarbonate Roof Canopies

#### Features:
- **Roofing**: UV-protected polycarbonate sheets
- **Thickness**: 6mm, 8mm, 10mm multiwall sheets
- **Light Transmission**: 80-90%
- **Impact Resistance**: 200x stronger than glass
- **Temperature Range**: -40°C to +120°C

**Price Range**: $45-65 per sqm (FOB Indonesia)

### 4. Tempered Glass Canopies

#### Features:
- **Glass Thickness**: 10mm, 12mm tempered safety glass
- **Frame**: Stainless steel or aluminum
- **Safety**: Breaks into small granular chunks
- **UV Protection**: Available with UV coating
- **Aesthetic**: Premium modern appearance

**Price Range**: $95-150 per sqm (FOB Indonesia)

### 5. Metal Roofing Canopies

#### Options:
- **Galvalume Steel**: Zincalume coated steel
- **Color Steel**: Pre-painted galvanized steel
- **Standing Seam**: Modern architectural profile
- **Corrugated**: Cost-effective solution
- **Thickness**: 0.4mm - 0.8mm

**Price Range**: $25-45 per sqm (FOB Indonesia)

## Why Choose Indonesian Manufacturing?

### 1. Competitive Pricing
- **Labor Costs**: 60-70% lower than Western countries
- **Material Costs**: Direct access to Asian steel markets
- **Production Costs**: Efficient manufacturing processes
- **Shipping**: Strategic location for global export

### 2. Quality Manufacturing
- **Skilled Workforce**: 20+ years of experience
- **Modern Equipment**: CNC cutting, MIG/TIG welding
- **Quality Control**: Strict inspection at every stage
- **Certifications**: ISO-compliant processes

### 3. Customization Capabilities
- **Design Services**: Free CAD drawings for approval
- **Custom Sizes**: Any dimension up to 20m span
- **Color Options**: RAL/Pantone color matching
- **Branding**: Can include your company branding

### 4. Export Experience
- **Documentation**: Complete export paperwork
- **Packaging**: Export-grade packaging
- **Container Loading**: Professional loading services
- **Shipping Coordination**: Work with your freight forwarder

## Manufacturing Process

### Step 1: Design & Engineering (1-3 days)
- Technical consultation
- CAD drawing development
- Structural calculations
- Material specifications
- Price quotation

### Step 2: Sample Approval (5-7 days)
- Sample fabrication (if required)
- Photo/video documentation
- Design modifications if needed
- Final approval before mass production

### Step 3: Material Procurement (3-5 days)
- High-grade steel sourcing
- Quality material inspection
- Cut-to-size preparation
- Surface treatment preparation

### Step 4: Fabrication (10-20 days)
- CNC cutting for precision
- Professional MIG/TIG welding
- Frame assembly
- Quality control inspection

### Step 5: Surface Treatment (3-5 days)
- Sandblasting/grinding
- Powder coating or galvanizing
- Paint curing
- Final inspection

### Step 6: Packaging & Export (2-3 days)
- Secure packaging
- Container loading
- Export documentation
- Shipping arrangement

## Technical Specifications

### Welding Standards
- **Methods**: MIG, TIG, Arc welding
- **Standards**: AWS D1.1, EN 1090
- **Inspection**: Visual and NDT available
- **Welders**: Certified professionals

### Steel Grades Available
- **Structural Steel**: ASTM A36, A572
- **Galvanized Steel**: ASTM A653
- **Stainless Steel**: 304, 316 grades
- **Aluminum**: 6061-T6, 6063-T5

### Surface Treatment Options
- **Hot-Dip Galvanizing**: 80-120 microns
- **Powder Coating**: 60-100 microns
- **Wet Paint**: Epoxy or polyurethane
- **Anodizing**: For aluminum (Type II or III)

## Export Pricing Structure

### MOQ (Minimum Order Quantity)
- **Standard Products**: 50 sqm
- **Custom Design**: 100 sqm
- **Sample Order**: 20 sqm (higher unit price)

### Price Factors
1. **Material Selection**: Steel, aluminum, or stainless steel
2. **Finish**: Galvanized, powder coated, or painted
3. **Complexity**: Simple or complex design
4. **Quantity**: Volume discounts available
5. **Roofing Material**: Polycarbonate, glass, or metal

### Payment Terms
- **Sample Orders**: 100% advance payment
- **Regular Orders**: 50% deposit, 50% before shipping
- **Established Clients**: 30/70 or LC available
- **Payment Methods**: T/T, PayPal, Western Union, LC

## Shipping & Logistics

### Packaging
- **Frame Components**: Bundled and wrapped
- **Roofing Panels**: Wooden crates or pallets
- **Fittings**: Separate boxes with labels
- **Documentation**: Packing list and photos

### Container Capacity
- **20ft Container**: 50-70 sqm of canopy
- **40ft Container**: 120-150 sqm of canopy
- **40ft HC**: 150-180 sqm of canopy

### Export Ports
- **Main Port**: Tanjung Priok, Jakarta (50km from factory)
- **Alternative**: Port of Singapore (re-export)
- **Lead Time to Port**: 1-2 days from factory

### Shipping Destinations
- **Asia**: 5-15 days sea freight
- **Middle East**: 15-25 days sea freight
- **Europe**: 25-35 days sea freight
- **North America**: 30-40 days sea freight
- **Africa**: 20-30 days sea freight
- **Australia**: 10-20 days sea freight

## Quality Assurance

### Inspection Process
- **Material Inspection**: Certificate of material quality
- **In-Process Inspection**: During fabrication
- **Final Inspection**: Before packaging
- **Third-Party Inspection**: SGS, TUV available

### Quality Documents Provided
- **Material Certificates**: Mill test certificates
- **Welding Reports**: Weld inspection reports
- **Coating Certificates**: Galvanizing/coating thickness reports
- **Dimensional Reports**: Measurement verification
- **Photo Documentation**: Detailed production photos

### Warranty
- **Manufacturing Defects**: 12 months
- **Surface Treatment**: 24-36 months (depends on treatment)
- **Structural Warranty**: 5 years
- **After-Sales Support**: Technical support available

## International Project Experience

### Projects Completed
- **Australia**: Shopping mall canopy structures (2023)
- **Singapore**: HDB carpark canopies (2022)
- **Malaysia**: Factory canopy installation (2023)
- **Middle East**: Hotel entrance canopies (2022)
- **Africa**: Warehouse loading bay canopies (2024)

### Client Testimonials

> "Excellent manufacturing quality and very competitive pricing. The team was professional throughout the entire process from design to delivery." - **Construction Company, Australia**

> "We have been working with Bengkel Las Mandiri for 3 years now. Consistent quality and reliable delivery times." - **Steel Trader, Singapore**

> "Great communication and willingness to accommodate our custom requirements. Highly recommended for export orders." - **Project Developer, UAE**

## Custom Design Services

### What We Offer
- **Free CAD Drawings**: 2D and 3D design
- **Engineering Calculations**: Load-bearing analysis
- **Design Modifications**: Unlimited revisions
- **Rendering Services**: Photorealistic 3D renders
- **Installation Drawings**: Detailed assembly instructions

### Design Capabilities
- **Software**: AutoCAD, SolidWorks, SketchUp
- **Standards**: Comply with international building codes
- **Wind Load**: Calculate for your location
- **Snow Load**: If applicable to your region
- **Seismic Design**: Earthquake-resistant design

## Environmental & Safety Standards

### Environmental Compliance
- **Waste Management**: Responsible waste disposal
- **Energy Efficient**: Solar-ready canopy structures
- **Recyclable Materials**: 100% recyclable steel/aluminum
- **Low VOC Coatings**: Environment-friendly paint options

### Safety Standards
- **Worker Safety**: Certified safety training
- **Product Safety**: Safety glass, rounded edges
- **Fire Resistance**: Fire-rated materials available
- **Building Codes**: Comply with international standards

## How to Order

### Step-by-Step Process

#### 1. Initial Inquiry
Contact us with your project requirements:
- Canopy dimensions (length x width)
- Preferred frame material
- Roofing material preference
- Destination country
- Target price range

#### 2. Quotation
We will provide within 24-48 hours:
- Detailed price quotation
- Technical specifications
- Lead time estimate
- Shipping cost estimate

#### 3. Design Development
For custom projects:
- Submit your design requirements
- We create CAD drawings
- Review and approval
- Final design confirmation

#### 4. Sample Order (Optional)
- Small quantity sample
- Quality verification
- Approve before bulk order

#### 5. Production Order
- Proforma invoice issued
- Deposit payment
- Production commences
- Regular progress updates

#### 6. Quality Control
- In-process inspection photos
- Final inspection
- Third-party inspection if required
- Approval before shipping

#### 7. Shipping & Delivery
- Balance payment
- Export documentation
- Container loading
- Shipment tracking

## Frequently Asked Questions

**Q: What is your minimum order quantity?**
A: Our standard MOQ is 50 sqm for regular products and 100 sqm for custom designs. Sample orders of 20 sqm are possible at higher unit prices.

**Q: Can you design according to our requirements?**
A: Yes, we provide free custom design services including CAD drawings and engineering calculations.

**Q: Do you provide installation services?**
A: For export orders, we provide detailed installation drawings and instructions. We can send installation supervisors for large projects.

**Q: What payment methods do you accept?**
A: T/T (bank transfer), PayPal, Western Union, and Letter of Credit for large orders.

**Q: How long is the production lead time?**
A: Typically 15-30 days depending on order quantity and complexity. Rush orders can be accommodated.

**Q: Can you ship to my country?**
A: Yes, we export worldwide. We work with your freight forwarder or can arrange shipping.

**Q: Do you provide material certificates?**
A: Yes, we provide mill test certificates, coating reports, and all necessary quality documentation.

**Q: What warranty do you offer?**
A: 12 months for manufacturing defects, 24-36 months for surface treatment, and 5 years structural warranty.

**Q: Can we visit your factory?**
A: Absolutely! We welcome factory visits. Please contact us to schedule an appointment.

**Q: Do you have English-speaking staff?**
A: Yes, our export team is fluent in English and can communicate effectively.

## Contact Us for Export Inquiries

Ready to source high-quality metal canopy structures from Indonesia? Contact our export team today!

### Export Sales Department
📱 **WhatsApp**: +62 852-1207-8467 (English available)
📧 **Email**: info@lasbekasi.com
💬 **Skype**: Available upon request
🌐 **Website**: www.lasbekasi.com

### Factory Address
📍 **Bengkel Las Mandiri**
Jl. Raya Setu Cibitung - Bekasi
Telajung, Kec. Cikarang Bar.
Kabupaten Bekasi, Jawa Barat 17320
Indonesia

### Business Hours
- **Monday - Friday**: 08:00 - 17:00 WIB (GMT+7)
- **Saturday**: 08:00 - 15:00 WIB
- **Sunday**: Closed (Emergency contact available)

### Quick Response
- **Email Response**: Within 12 hours
- **WhatsApp Response**: Within 2-4 hours
- **Quotation**: Within 24-48 hours
- **Sample Design**: Within 3-5 days

## Why Indonesian Manufacturing Makes Sense

### Economic Advantages
- **Cost Savings**: 40-60% compared to Western manufacturing
- **Quality**: Comparable to international standards
- **Flexibility**: Small to large batch production
- **Speed**: Fast production turnaround

### Strategic Location
- **Asian Market Hub**: Easy access to Asia-Pacific
- **Shipping Routes**: Connected to major global ports
- **Time Zone**: GMT+7 (overlap with Asian/Australian business hours)
- **Infrastructure**: Modern port and logistics facilities

### Business Environment
- **Export-Friendly**: Government support for exports
- **Skilled Labor**: Large pool of qualified metal workers
- **Material Sourcing**: Access to competitive steel prices
- **Quality Focus**: Commitment to international standards

## Get Started Today!

Don't miss the opportunity to work with one of Indonesia's leading metal fabrication workshops. Whether you need:

- ✅ Standard canopy structures
- ✅ Custom-designed canopies
- ✅ Large volume orders
- ✅ Small sample batches
- ✅ Design consultation
- ✅ Technical support

**We are ready to serve your needs!**

📱 **Contact us now via WhatsApp**: +62 852-1207-8467

> "Your trusted partner for metal canopy manufacturing in Indonesia. Quality products, competitive prices, reliable delivery."

---

**Bengkel Las Mandiri - Professional Metal Fabrication Since 1999**

*Serving international clients with pride and excellence*

**Keywords**: metal canopy manufacturer Indonesia, steel canopy fabrication, industrial canopy export, custom canopy manufacturing, Indonesian metal workshop, canopy structure supplier, galvanized steel canopy, polycarbonate canopy manufacturer, export quality metal fabrication
      `
    },
    'custom-steel-fence-manufacturing-export': {
      slug: 'custom-steel-fence-manufacturing-export',
      title: 'Custom Steel Fence Manufacturing & Export - Indonesia Metal Fabrication',
      category: 'Metal Fabrication',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Professional custom steel fence manufacturing in Indonesia for export. We design and fabricate high-quality metal fencing solutions for residential, commercial, and industrial applications worldwide.',
      content: `
# Custom Steel Fence Manufacturing & Export - Indonesia Metal Fabrication

## Premium Steel Fence Manufacturer in Indonesia

Welcome to **Bengkel Las Mandiri**, Indonesia's leading manufacturer of custom steel fences and metal fencing systems. With over 20 years of experience since 1999, we specialize in designing and manufacturing high-quality steel fencing solutions for international markets.

## Our Steel Fence Products

### 1. Residential Steel Fences

#### Modern Minimalist Design
- **Material**: Galvanized steel hollow sections
- **Sizes**: 20x20mm to 40x40mm
- **Height**: 1.2m to 2.5m (customizable)
- **Finish**: Powder coating in any RAL color
- **Style**: Clean lines, contemporary aesthetics

**Price**: $35-55 per linear meter (FOB Indonesia)

#### Ornamental Steel Fences
- **Material**: Wrought iron-style steel
- **Design**: Classical patterns, decorative elements
- **Finish**: Black powder coating or custom colors
- **Applications**: Luxury residences, villas, estates

**Price**: $45-75 per linear meter (FOB Indonesia)

#### Laser-Cut Panel Fences
- **Material**: 2-3mm steel plates
- **Technology**: CNC laser cutting
- **Patterns**: Geometric, floral, custom designs
- **Modern Appeal**: Contemporary architectural style

**Price**: $65-95 per linear meter (FOB Indonesia)

### 2. Commercial & Industrial Fencing

#### BRC Wire Mesh Fencing
- **Specifications**: Galvanized welded wire mesh
- **Wire Diameter**: 4mm - 6mm
- **Mesh Size**: 50x200mm, 75x300mm
- **Height**: 1.5m - 4m
- **Posts**: Galvanized steel or concrete

**Price**: $18-28 per linear meter (FOB Indonesia)

#### Chain Link Fencing
- **Material**: Galvanized or PVC-coated wire
- **Mesh Size**: 50x50mm - 75x75mm
- **Height**: 1.5m - 4m
- **Posts**: Steel posts with concrete base

**Price**: $12-22 per linear meter (FOB Indonesia)

#### Industrial Panel Fencing
- **Construction**: Heavy-duty welded panels
- **Frame**: 40x40mm - 60x60mm hollow sections
- **Infill**: 12mm steel bars or mesh
- **Security**: High-security applications

**Price**: $45-75 per linear meter (FOB Indonesia)

#### Palisade Fencing
- **Profile**: W-section or D-section pales
- **Height**: 2m - 4m
- **Finish**: Hot-dip galvanized
- **Security Level**: High-security perimeter

**Price**: $55-85 per linear meter (FOB Indonesia)

### 3. Specialty Fencing Solutions

#### Pool Safety Fencing
- **Material**: Aluminum or stainless steel
- **Infill**: Tempered glass or mesh panels
- **Compliance**: International pool safety standards
- **Gates**: Self-closing, self-latching

**Price**: $95-150 per linear meter (FOB Indonesia)

#### Automatic Sliding Gates
- **Frame**: Heavy-duty steel construction
- **Motor**: Electric gate motor included
- **Control**: Remote control, keypad, or card access
- **Weight Capacity**: Up to 800kg gate weight

**Price**: $1,500-3,500 per gate set (FOB Indonesia)

#### Swing Gates
- **Construction**: Steel frame with infill options
- **Hardware**: Heavy-duty hinges and locks
- **Automation**: Optional electric swing gate motor
- **Width**: Single or double leaf up to 6m total

**Price**: $800-2,000 per gate set (FOB Indonesia)

## Manufacturing Capabilities

### Design Services
- **CAD Drawing**: 2D and 3D fence designs
- **Customization**: Any design, pattern, or style
- **Engineering**: Structural calculations included
- **Rendering**: Photorealistic visualization

### Production Capacity
- **Monthly Output**: 1,000+ linear meters
- **MOQ**: 100 linear meters per design
- **Sample**: Available upon request
- **Lead Time**: 20-35 days

### Quality Standards
- **Welding**: AWS D1.1 standards
- **Materials**: ASTM/EN standards
- **Coating**: ISO 12944 compliance
- **Testing**: Third-party inspection available

## Materials & Specifications

### Steel Options
- **Mild Steel**: ASTM A36, cost-effective
- **Galvanized Steel**: Hot-dip galvanized, corrosion-resistant
- **Stainless Steel**: Grade 304/316, premium durability
- **Aluminum**: 6063-T5, lightweight and rust-free

### Surface Treatments
- **Powder Coating**: 60-80 microns, outdoor grade
- **Hot-Dip Galvanizing**: 80-120 microns zinc coating
- **Wet Paint**: Epoxy or polyurethane systems
- **Anodizing**: For aluminum products

### Color Options
- **Standard RAL Colors**: RAL 9005 (black), 7016 (anthracite gray)
- **Custom Colors**: Any RAL or Pantone color
- **Dual Tone**: Different colors for posts and panels
- **Wood Grain**: Wood-effect powder coating available

## Export Process

### Step 1: Inquiry & Quotation (1-2 days)
- Submit your fence requirements
- Receive detailed quotation
- Technical specifications provided
- Shipping cost estimate included

### Step 2: Design Development (3-5 days)
- CAD drawings prepared
- Multiple design options
- Client approval required
- Final specifications confirmed

### Step 3: Sample Production (7-10 days)
- Sample section manufactured
- Photos/videos sent for approval
- Modifications if needed
- Approve before bulk production

### Step 4: Bulk Production (20-30 days)
- Full-scale manufacturing
- Quality control at each stage
- Progress photos provided
- Pre-shipment inspection

### Step 5: Packaging & Export (3-5 days)
- Export-grade packaging
- Container loading
- Documentation preparation
- Shipment arrangement

## Packaging & Shipping

### Packaging Standards
- **Fence Panels**: Stacked and wrapped in plastic film
- **Posts**: Bundled together with protection
- **Gates**: Individual wrapping and crating
- **Hardware**: Separate boxes with labels
- **Documentation**: Packing list and installation guide

### Container Capacity
- **20ft Container**: 80-120 linear meters
- **40ft Container**: 200-300 linear meters
- **40ft HC Container**: 250-350 linear meters

*Capacity varies based on fence height and design complexity*

### Shipping Routes
- **Asia-Pacific**: 5-20 days
- **Middle East**: 15-25 days
- **Africa**: 20-30 days
- **Europe**: 25-35 days
- **Americas**: 30-45 days

## Why Choose Indonesian Manufacturing?

### Cost Advantages
- **Labor**: 60-70% lower than developed countries
- **Materials**: Competitive steel pricing
- **Production**: Efficient manufacturing processes
- **Total Savings**: 40-60% cost reduction

### Quality Assurance
- **Experience**: 20+ years in metal fabrication
- **Equipment**: Modern CNC and welding machines
- **Skills**: Certified welders and fabricators
- **Inspection**: Strict quality control procedures

### Flexibility
- **Custom Designs**: No limitations on creativity
- **Small Orders**: Accept smaller quantities
- **Fast Turnaround**: Quick sample and production
- **Modifications**: Easy to accommodate changes

### Service
- **English Communication**: Fluent English-speaking team
- **Responsiveness**: Quick reply to inquiries
- **Technical Support**: Engineering assistance
- **After-Sales**: Ongoing support post-delivery

## Installation Support

### Installation Drawings
- **Layout Plans**: Site layout and post positions
- **Assembly Instructions**: Step-by-step guide
- **Hardware List**: Complete parts list
- **Foundation Details**: Concrete specifications

### Installation Services
- **Supervision**: Send installation supervisor (large projects)
- **Training**: Train your installation team
- **Video Guide**: Installation video provided
- **Technical Support**: Remote support available

## Applications

### Residential
- **Front Yard Fences**: Enhance curb appeal
- **Backyard Privacy**: Security and privacy
- **Pool Fencing**: Safety compliance
- **Garden Dividers**: Define spaces

### Commercial
- **Office Buildings**: Professional appearance
- **Retail Centers**: Security and aesthetics
- **Hotels & Resorts**: Decorative fencing
- **Schools**: Safe perimeter fencing

### Industrial
- **Factories**: Security perimeter
- **Warehouses**: Property boundaries
- **Logistics Centers**: Access control
- **Construction Sites**: Temporary or permanent

### Government & Public
- **Parks**: Public area fencing
- **Sports Facilities**: Courts and fields
- **Infrastructure**: Roads and bridges
- **Utilities**: Power stations, water plants

## Quality Certifications

### Materials
- **Steel Certificates**: Mill test certificates
- **Galvanizing Reports**: Coating thickness reports
- **Powder Coating**: Quality test reports

### Testing
- **Welding Inspection**: Visual and NDT
- **Coating Thickness**: Measured and documented
- **Dimensional Check**: Tolerance verification
- **Load Testing**: Strength verification

### Third-Party Inspection
- **SGS Inspection**: Available upon request
- **TUV Certification**: For European markets
- **Bureau Veritas**: Quality verification
- **Client Inspection**: Factory visits welcome

## Payment & Terms

### Payment Methods
- **Bank Transfer (T/T)**: Most common
- **PayPal**: For smaller orders
- **Western Union**: Quick payment option
- **Letter of Credit**: For large projects

### Payment Terms
- **Sample Orders**: 100% advance
- **First Order**: 50% deposit, 50% before shipment
- **Repeat Orders**: 30% deposit, 70% before shipment
- **Large Projects**: Installment terms available

### Pricing
- **FOB Indonesia**: Ex-factory price + local transport
- **CIF**: Including freight and insurance
- **DDP**: Delivered to your door (select countries)

## Frequently Asked Questions

**Q: What is the minimum order quantity?**
A: Standard MOQ is 100 linear meters. Smaller quantities negotiable with adjusted pricing.

**Q: Can you match my existing fence design?**
A: Yes, send us photos and measurements, and we'll replicate the design.

**Q: Do you provide fence posts?**
A: Yes, complete fence systems including posts, panels, gates, and all hardware.

**Q: What warranty do you offer?**
A: 12 months manufacturing warranty, 3-5 years surface treatment warranty.

**Q: Can you help with customs clearance?**
A: We provide all export documents. You arrange import customs in your country.

**Q: Do you accept custom designs?**
A: Absolutely! We specialize in custom fabrication. Send us your design ideas.

**Q: How long does production take?**
A: 20-35 days depending on quantity and complexity after design approval.

**Q: Can I visit your factory?**
A: Yes! We welcome factory visits. Please schedule in advance.

## Contact Our Export Team

Ready to order custom steel fences from Indonesia? Contact us today!

### Export Sales
📱 **WhatsApp**: +62 852-1207-8467 (English)
📧 **Email**: info@lasbekasi.com
🌐 **Website**: www.lasbekasi.com

### Factory Location
📍 **Bengkel Las Mandiri**
Jl. Raya Setu Cibitung - Bekasi
Telajung, Cikarang Barat
Bekasi, West Java 17320
Indonesia

### Business Hours
**Monday - Friday**: 08:00 - 17:00 WIB (GMT+7)
**Saturday**: 08:00 - 15:00 WIB
**Sunday**: Closed

### Quick Response Times
- Email: Within 12 hours
- WhatsApp: Within 2-4 hours
- Quotation: Within 24-48 hours
- Design: Within 3-5 days

## Get Your Custom Quote Today!

Whether you need:
- ✅ Residential steel fences
- ✅ Commercial fencing systems
- ✅ Industrial security fencing
- ✅ Decorative metal fences
- ✅ Automated gates
- ✅ Custom designs

**We can manufacture it for you!**

📱 **Contact us via WhatsApp**: +62 852-1207-8467

> "Quality steel fencing manufactured in Indonesia for the world. Your trusted fence manufacturing partner."

---

**Bengkel Las Mandiri - Steel Fence Manufacturing Excellence Since 1999**

**Keywords**: steel fence manufacturer Indonesia, custom metal fencing export, wrought iron fence supplier, industrial fencing Indonesia, fence panels manufacturing, galvanized fence export, decorative steel fence, security fencing manufacturer
      `
    },
    'industrial-metal-furniture-manufacturing-indonesia': {
      slug: 'industrial-metal-furniture-manufacturing-indonesia',
      title: 'Industrial Metal Furniture Manufacturing - Custom Steel Furniture Export from Indonesia',
      category: 'Metal Furniture',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Professional industrial metal furniture manufacturer in Indonesia. Custom steel furniture fabrication for export including tables, chairs, shelving, and cabinets. Powder coating finish, competitive pricing.',
      content: `
# Industrial Metal Furniture Manufacturing - Custom Steel Furniture Export from Indonesia

## Leading Industrial Furniture Manufacturer in Indonesia

Bengkel Las Mandiri specializes in custom industrial metal furniture manufacturing for international markets. With 20+ years of metal fabrication experience, we create high-quality steel furniture for residential, commercial, and hospitality applications worldwide.

## Our Metal Furniture Products

### Industrial Tables
- **Dining Tables**: Steel frame with wood/marble top ($180-350 FOB)
- **Coffee Tables**: Minimalist design, powder coated ($120-220 FOB)
- **Work Tables**: Heavy-duty industrial desks ($150-300 FOB)
- **Bar Tables**: Restaurant and cafe furniture ($95-180 FOB)

### Industrial Chairs & Seating
- **Bar Stools**: Steel frame, various heights ($45-85 per piece)
- **Dining Chairs**: Modern industrial style ($55-95 per piece)
- **Bench Seating**: Custom lengths available ($85-150 per meter)
- **Lounge Chairs**: Comfortable steel frame chairs ($120-200 per piece)

### Storage Solutions
- **Wall-Mounted Shelves**: Industrial pipe shelving ($85-150 per unit)
- **Bookshelf Units**: Freestanding metal shelves ($180-350)
- **Display Racks**: Retail display systems ($150-300)
- **Storage Cabinets**: Industrial lockers and cabinets ($250-500)

## Manufacturing Capabilities

### Customization Options
- **Dimensions**: Any size to fit your space
- **Materials**: Steel, stainless steel, aluminum
- **Finishes**: Powder coating (any RAL color), brushed metal, painted
- **Tops**: Wood, marble, glass, steel plate

### Production Details
- **Monthly Capacity**: 500+ furniture pieces
- **MOQ**: 20 pieces per design
- **Lead Time**: 25-40 days
- **Quality**: ISO-compliant welding and finishing

## Export Services
- Complete export documentation
- Professional packaging
- Container loading optimization (20ft: 80-150pcs, 40ft: 200-350pcs)
- Shipping coordination

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: industrial furniture manufacturer Indonesia, metal furniture export, steel furniture fabrication, custom furniture manufacturing
      `
    },
    'steel-railing-systems-manufacturing-export': {
      slug: 'steel-railing-systems-manufacturing-export',
      title: 'Steel Railing Systems Manufacturing - Balcony & Stair Railings Export from Indonesia',
      category: 'Metal Fabrication',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Professional steel railing manufacturer in Indonesia. Custom stair railings, balcony railings, and handrail systems for export. Modern designs, quality fabrication, competitive pricing.',
      content: `
# Steel Railing Systems Manufacturing - Export Quality from Indonesia

## Premium Railing Manufacturer

Bengkel Las Mandiri manufactures high-quality steel railing systems for international markets. Specializing in stair railings, balcony railings, and custom handrail solutions for global projects.

## Railing Products

### Stair Railings
- Modern minimalist, industrial, ornamental designs
- Galvanized steel or stainless steel construction
- Standard 900-1100mm height (customizable)
- Powder coating or polished finish
- **Price**: $45-85 per linear meter FOB

### Balcony Railings
- Glass panel railings, steel balustrade, cable systems
- International building code compliant
- 10-12mm tempered safety glass options
- Stainless steel or powder-coated frames
- **Price**: $65-120 per linear meter FOB

### Handrail Systems
- Wall-mounted stainless steel handrails
- Round, oval, or square tube profiles
- Heavy-duty brackets included
- Brushed, polished, or satin finishes
- **Price**: $25-45 per linear meter FOB

## Technical Specifications
- **Materials**: ASTM A36 mild steel, SS 304/316
- **Standards**: International building code compliant
- **Testing**: Load capacity verified
- **MOQ**: 50 linear meters
- **Lead Time**: 20-35 days

📱 **Contact**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: steel railing manufacturer Indonesia, stair railing export, balcony railing supplier, handrail manufacturing
      `
    },
    'metal-window-grilles-security-solutions': {
      slug: 'metal-window-grilles-security-solutions',
      title: 'Metal Window Grilles & Security Solutions - Export from Indonesia',
      category: 'Security Products',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Custom metal window grilles and security grilles manufacturer in Indonesia. Export quality steel window bars, decorative grilles, and security screens. Competitive pricing.',
      content: `
# Metal Window Grilles & Security Solutions - Indonesian Manufacturing

## Security Grille Specialist

Professional manufacturer of metal window grilles and security solutions for residential and commercial applications. Export quality products at competitive Indonesian prices.

## Products

### Window Security Grilles
- Modern minimalist designs
- Decorative laser-cut patterns
- Fixed or removable installation
- **Price**: $35-65 per sqm FOB

### Door Security Screens
- Heavy-duty steel construction
- Powder coated finish
- Quick-release emergency exit
- **Price**: $120-200 per door FOB

### Decorative Window Bars
- Ornamental designs
- Custom patterns available
- Multiple finish options
- **Price**: $45-85 per sqm FOB

## Specifications
- **Material**: 12-16mm steel bars or 20x20mm hollow sections
- **Spacing**: Child-safe 100mm maximum
- **Finish**: Powder coating any RAL color
- **MOQ**: 50 sqm
- **Lead Time**: 25-35 days

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: window grilles manufacturer Indonesia, security grilles export, metal window bars, decorative grilles
      `
    },
    'industrial-storage-rack-manufacturing': {
      slug: 'industrial-storage-rack-manufacturing',
      title: 'Industrial Storage Rack Manufacturing - Warehouse Racking Systems Export',
      category: 'Industrial Equipment',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Industrial storage rack and warehouse shelving manufacturer in Indonesia. Heavy-duty pallet racking, industrial shelving systems for export. Custom designs available.',
      content: `
# Industrial Storage Rack Manufacturing - Export from Indonesia

## Warehouse Racking Solutions

Specialized manufacturer of industrial storage racks and warehouse shelving systems. Heavy-duty construction for demanding industrial applications worldwide.

## Product Range

### Pallet Racking Systems
- Selective pallet racking
- Drive-in/drive-through racking
- Push-back racking systems
- Load capacity: 1000-3000kg per level
- **Price**: $180-350 per bay FOB

### Industrial Shelving
- Boltless shelving units
- Long-span shelving
- Cantilever racking
- **Price**: $95-180 per unit FOB

### Custom Storage Solutions
- Mezzanine floors
- Multi-tier racking
- Mobile racking systems
- **Custom quotation**

## Specifications
- **Material**: High-grade structural steel
- **Finish**: Powder coating or galvanizing
- **Standards**: FEM/SEMA compliant
- **MOQ**: 20 bays/units
- **Lead Time**: 30-45 days

📱 **Contact**: +62 852-1207-8467

**Keywords**: storage rack manufacturer Indonesia, pallet racking export, warehouse shelving systems, industrial racking
      `
    },
    'retail-display-rack-systems-export': {
      slug: 'retail-display-rack-systems-export',
      title: 'Retail Display Rack Systems - Shop Fitting Solutions Export Indonesia',
      category: 'Retail Equipment',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Retail display rack and shop fitting manufacturer in Indonesia. Custom clothing racks, product displays, and retail fixtures for export. Modern designs, competitive prices.',
      content: `
# Retail Display Rack Systems - Shop Fitting Solutions from Indonesia

## Retail Fixtures Manufacturer

Custom retail display racks and shop fitting solutions for stores worldwide. Modern designs, durable construction, and competitive Indonesian manufacturing costs.

## Display Solutions

### Clothing Display Racks
- Garment hanging racks
- Display gondolas
- Mobile clothing racks
- **Price**: $85-150 per unit FOB

### Product Display Systems
- Slatwall panels and accessories
- Grid wall displays
- Pegboard systems
- **Price**: $45-95 per sqm FOB

### Custom Store Fixtures
- Checkout counters
- Display tables
- Shelving units
- **Custom quotation based on design**

## Features
- **Materials**: Steel, stainless steel, or aluminum
- **Finish**: Powder coating, chrome plating, or brushed
- **Design**: Modern, industrial, or minimalist
- **MOQ**: 20 units per design
- **Lead Time**: 25-35 days

## Applications
- Fashion boutiques
- Retail chains
- Department stores
- Pop-up shops

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: retail display rack manufacturer, clothing rack export Indonesia, shop fixtures, store displays
      `
    },
    'steel-cabinet-manufacturing-services': {
      slug: 'steel-cabinet-manufacturing-services',
      title: 'Steel Cabinet Manufacturing - Industrial Metal Cabinets Export Indonesia',
      category: 'Metal Furniture',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Steel cabinet and metal locker manufacturer in Indonesia. Custom industrial cabinets, storage lockers, and filing cabinets for export. Durable powder-coated finish.',
      content: `
# Steel Cabinet Manufacturing - Industrial Metal Cabinets Export

## Industrial Cabinet Specialist

Professional manufacturer of steel cabinets and metal storage solutions. From industrial lockers to office filing cabinets, we deliver quality products worldwide.

## Product Line

### Industrial Storage Cabinets
- Tool storage cabinets
- Parts storage cabinets
- Heavy-duty workshop cabinets
- **Price**: $180-350 per unit FOB

### Metal Lockers
- Single-tier and multi-tier lockers
- Mesh door lockers
- Z-door lockers
- **Price**: $85-150 per unit FOB

### Office Filing Cabinets
- 2-4 drawer filing cabinets
- Lateral filing systems
- Mobile pedestal cabinets
- **Price**: $120-220 per unit FOB

## Specifications
- **Material**: Cold-rolled steel 0.6-1.2mm
- **Construction**: Welded or knocked-down
- **Finish**: Epoxy powder coating
- **Colors**: Any RAL color
- **MOQ**: 50 units
- **Lead Time**: 30-40 days

## Export Services
- Container capacity: 200-400 units per 40ft
- Professional packaging
- Assembly instructions included

📱 **Contact**: +62 852-1207-8467

**Keywords**: steel cabinet manufacturer Indonesia, metal locker export, industrial cabinets, filing cabinet manufacturer
      `
    },
    'custom-metal-bed-frames-production': {
      slug: 'custom-metal-bed-frames-production',
      title: 'Custom Metal Bed Frames - Steel Bed Manufacturing Export Indonesia',
      category: 'Metal Furniture',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Custom metal bed frame manufacturer in Indonesia. Industrial steel beds, modern metal bed frames for export. Single, double, queen, and king sizes available. Competitive pricing.',
      content: `
# Custom Metal Bed Frames - Steel Bed Manufacturing Export

## Metal Bed Frame Manufacturer

Specializing in custom metal bed frames and industrial steel beds for global markets. Modern designs, durable construction, and attractive powder-coated finishes.

## Bed Frame Products

### Industrial Steel Beds
- Modern minimalist design
- Sturdy welded construction
- Powder-coated finish
- All sizes: Single, Double, Queen, King
- **Price**: $95-180 per frame FOB

### Decorative Metal Beds
- Ornamental headboard designs
- Contemporary or classical styles
- Custom patterns available
- **Price**: $150-280 per frame FOB

### Bunk Beds
- Heavy-duty steel construction
- Safety rails included
- Space-saving design
- **Price**: $220-350 per set FOB

## Product Features
- **Material**: 40x40mm or 50x50mm steel tubes
- **Finish**: Powder coating any RAL color
- **Slat Support**: Included in all frames
- **Assembly**: Knock-down design for easy shipping

## Specifications
- **Sizes Available**: 
  - Single: 90x200cm
  - Double: 140x200cm
  - Queen: 160x200cm
  - King: 180x200cm
  - Custom sizes available

- **MOQ**: 50 units (can be mixed sizes)
- **Lead Time**: 25-35 days
- **Container Capacity**: 150-250 frames per 40ft

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: metal bed frame manufacturer Indonesia, steel bed export, industrial bed frames, custom bed manufacturing
      `
    },
    'commercial-bike-rack-manufacturing': {
      slug: 'commercial-bike-rack-manufacturing',
      title: 'Commercial Bike Rack Manufacturing - Bicycle Parking Solutions Export',
      category: 'Urban Furniture',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Commercial bike rack and bicycle parking system manufacturer in Indonesia. Custom cycle parking solutions for export. Durable galvanized or powder-coated finish.',
      content: `
# Commercial Bike Rack Manufacturing - Export from Indonesia

## Bicycle Parking Solutions

Professional manufacturer of commercial bike racks and cycle parking systems. Durable, secure, and space-efficient designs for urban environments worldwide.

## Bike Rack Types

### Wall-Mounted Bike Racks
- Space-saving vertical storage
- 2-4 bike capacity per unit
- **Price**: $35-65 per rack FOB

### Floor-Standing Bike Racks
- Toast rack style
- Wave design
- Sheffield stands
- Capacity: 4-12 bikes per unit
- **Price**: $85-180 per unit FOB

### Double-Decker Bike Racks
- Two-tier storage system
- Gas-assisted lifting
- Maximum space efficiency
- **Price**: $450-750 per unit FOB

## Features & Specifications
- **Material**: Galvanized steel or powder-coated steel
- **Finish**: Hot-dip galvanized or any RAL color
- **Installation**: Surface or in-ground mounting
- **Security**: Designed for U-lock compatibility
- **MOQ**: 20 units
- **Lead Time**: 25-35 days

## Applications
- Office buildings
- Shopping centers
- Parks and recreation areas
- Transit stations
- Universities and schools

📱 **Contact**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: bike rack manufacturer Indonesia, bicycle parking systems, cycle rack export, commercial bike stands
      `
    },
    'metal-sliding-door-systems-export': {
      slug: 'metal-sliding-door-systems-export',
      title: 'Metal Sliding Door Systems - Industrial Door Manufacturing Export',
      category: 'Door Systems',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Metal sliding door and industrial door system manufacturer in Indonesia. Custom sliding gates, garage doors, and commercial door systems for export worldwide.',
      content: `
# Metal Sliding Door Systems - Industrial Door Manufacturing

## Sliding Door Specialist

Custom metal sliding doors and gate systems for residential, commercial, and industrial applications. Quality manufacturing with competitive Indonesian pricing.

## Product Range

### Sliding Gates
- Cantilever sliding gates
- Track-mounted sliding gates
- Manual or automatic operation
- **Price**: $850-1,800 per gate FOB

### Garage Sliding Doors
- Single or double panel
- Powder-coated steel construction
- Optional electric motor
- **Price**: $650-1,400 per door FOB

### Industrial Sliding Doors
- Heavy-duty warehouse doors
- Cold storage sliding doors
- Fire-rated options available
- **Custom quotation**

## Specifications
- **Frame**: 40x80mm or 50x100mm hollow sections
- **Infill**: Steel panels, mesh, or laser-cut designs
- **Finish**: Powder coating any color
- **Hardware**: Heavy-duty wheels and tracks included
- **Automation**: Electric motors available

## Export Details
- **MOQ**: 10 gates/doors
- **Lead Time**: 30-45 days
- **Installation**: Detailed instructions provided
- **Warranty**: 12 months manufacturing defects

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: sliding gate manufacturer Indonesia, metal sliding door export, industrial door systems, automatic gates
      `
    },
    'industrial-partition-systems': {
      slug: 'industrial-partition-systems',
      title: 'Industrial Partition Systems - Metal Room Dividers Export Indonesia',
      category: 'Architectural Metalwork',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Industrial partition systems and metal room dividers manufacturer in Indonesia. Custom office partitions, warehouse dividers, and decorative screens for export.',
      content: `
# Industrial Partition Systems - Metal Room Dividers Export

## Partition Solutions Manufacturer

Custom industrial partition systems and decorative metal screens for commercial and residential spaces. Modern designs manufactured for global markets.

## Partition Products

### Office Partition Systems
- Steel frame with glass panels
- Modular design for easy installation
- Sound-dampening options
- **Price**: $85-150 per sqm FOB

### Industrial Mesh Partitions
- Wire mesh panels with steel frame
- Security cage systems
- Warehouse dividers
- **Price**: $65-120 per sqm FOB

### Decorative Metal Screens
- Laser-cut pattern panels
- Architectural room dividers
- Custom designs available
- **Price**: $95-200 per sqm FOB

## Features
- **Frame**: Powder-coated steel or aluminum
- **Panels**: Glass, mesh, or laser-cut steel
- **Height**: 2m-4m (customizable)
- **Installation**: Modular system, easy assembly
- **MOQ**: 50 sqm
- **Lead Time**: 30-40 days

## Applications
- Office spaces
- Warehouses
- Retail stores
- Hotels and restaurants
- Residential interiors

📱 **Contact**: +62 852-1207-8467

**Keywords**: industrial partition manufacturer, metal room dividers, office partitions Indonesia, decorative screens export
      `
    },
    'restaurant-bar-table-manufacturing': {
      slug: 'restaurant-bar-table-manufacturing',
      title: 'Restaurant Bar Table Manufacturing - Commercial Furniture Export',
      category: 'Hospitality Furniture',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Restaurant bar table and commercial furniture manufacturer in Indonesia. Custom bar tables, pub tables, and hospitality furniture for export. Industrial style, competitive pricing.',
      content: `
# Restaurant Bar Table Manufacturing - Commercial Furniture Export

## Hospitality Furniture Specialist

Professional manufacturer of restaurant bar tables and commercial furniture for the hospitality industry. Industrial designs with durable construction for global markets.

## Bar Table Products

### High Bar Tables
- Standard bar height (105-110cm)
- Steel frame construction
- Wood, marble, or metal top options
- **Price**: $120-220 per table FOB

### Counter Height Tables
- Counter height (90-95cm)
- Various sizes: 60x60cm to 120x80cm
- Powder-coated base
- **Price**: $95-180 per table FOB

### Outdoor Bar Tables
- Weather-resistant finish
- Galvanized or stainless steel
- Suitable for outdoor use
- **Price**: $150-280 per table FOB

## Matching Bar Stools
- Industrial bar stools
- Various heights available
- With or without backrest
- **Price**: $45-85 per stool FOB

## Specifications
- **Base**: Steel tube or cast iron
- **Top**: Solid wood, plywood, marble, or steel
- **Finish**: Powder coating any RAL color
- **Style**: Industrial, modern, minimalist
- **MOQ**: 20 tables (mixed sizes acceptable)
- **Lead Time**: 30-40 days

## Target Markets
- Restaurants and cafes
- Bars and pubs
- Hotels and resorts
- Food courts
- Co-working spaces

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: bar table manufacturer Indonesia, restaurant furniture export, commercial bar tables, hospitality furniture
      `
    },
    'coffee-table-metal-frame-production': {
      slug: 'coffee-table-metal-frame-production',
      title: 'Coffee Table Metal Frames - Modern Table Manufacturing Export',
      category: 'Furniture Components',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Coffee table metal frame manufacturer in Indonesia. Custom steel table bases and frames for export. Modern industrial designs, powder-coated finish, competitive prices.',
      content: `
# Coffee Table Metal Frames - Modern Table Manufacturing Export

## Table Frame Specialist

Custom metal frames for coffee tables and modern furniture. Industrial style frames manufactured in Indonesia for furniture makers and retailers worldwide.

## Frame Products

### Coffee Table Frames
- Modern geometric designs
- Various sizes: 80cm-120cm length
- Height: 40-50cm
- **Price**: $35-85 per frame FOB

### Side Table Frames
- Compact designs for side tables
- Round, square, or rectangular
- 30-50cm dimensions
- **Price**: $25-45 per frame FOB

### Nesting Table Frames
- Set of 2-3 nesting tables
- Space-saving design
- Coordinated sizes
- **Price**: $65-120 per set FOB

## Features & Options
- **Material**: 20x20mm to 40x40mm steel tubes
- **Construction**: Welded for strength
- **Finish**: Powder coating any color
- **Style**: Industrial, minimalist, modern
- **Top Mounting**: Brackets or threaded inserts included

## Specifications
- **MOQ**: 50 frames (mixed designs acceptable)
- **Lead Time**: 25-35 days
- **Packaging**: Individual wrapping
- **Container**: 300-500 frames per 40ft

## For Furniture Makers
- Supply your own tops (wood, glass, marble)
- Easy assembly with provided hardware
- Consistent quality production
- Volume discounts available

📱 **Contact**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: coffee table frame manufacturer, metal table base export, steel furniture frames Indonesia, table legs manufacturer
      `
    },
    'wall-mounted-metal-shelving-systems': {
      slug: 'wall-mounted-metal-shelving-systems',
      title: 'Wall-Mounted Metal Shelving - Industrial Shelf Systems Export',
      category: 'Storage Solutions',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Wall-mounted metal shelving and industrial shelf systems manufacturer in Indonesia. Custom floating shelves, pipe shelving, and bracket systems for export.',
      content: `
# Wall-Mounted Metal Shelving - Industrial Shelf Systems Export

## Shelving Solutions Manufacturer

Custom wall-mounted metal shelving and industrial shelf systems. Modern designs perfect for homes, offices, and retail spaces worldwide.

## Shelving Products

### Industrial Pipe Shelving
- Black pipe and wood shelf combination
- Rustic industrial style
- 2-5 tier configurations
- **Price**: $85-180 per unit FOB

### Floating Metal Shelves
- Minimalist hidden bracket design
- Steel or aluminum construction
- Various lengths: 60-180cm
- **Price**: $35-75 per shelf FOB

### Heavy-Duty Bracket Systems
- Commercial-grade steel brackets
- Load capacity: up to 100kg per shelf
- Multiple size options
- **Price**: $15-35 per bracket pair FOB

## Features
- **Materials**: Steel pipe, flat bars, or angles
- **Finish**: Black powder coating or custom colors
- **Installation**: Wall-mounted with provided hardware
- **Shelves**: Can include wood shelves or supply frames only

## Specifications
- **MOQ**: 20 units per design
- **Lead Time**: 25-35 days
- **Customization**: Custom sizes and designs available
- **Packaging**: Flat-pack for efficient shipping

## Applications
- Residential: kitchens, living rooms, bedrooms
- Commercial: offices, cafes, retail stores
- Industrial: warehouses, workshops

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: wall-mounted shelving Indonesia, industrial pipe shelves, floating shelf manufacturer, metal bracket export
      `
    },
    'decorative-metal-gates-export': {
      slug: 'decorative-metal-gates-export',
      title: 'Decorative Metal Gates - Custom Entrance Gates Export Indonesia',
      category: 'Architectural Metalwork',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Decorative metal gates and custom entrance gate manufacturer in Indonesia. Ornamental iron gates, modern steel gates for export. Laser-cut designs, powder-coated finish.',
      content: `
# Decorative Metal Gates - Custom Entrance Gates Export

## Ornamental Gate Specialist

Custom decorative metal gates and entrance gates for luxury homes, estates, and commercial properties. Exquisite designs manufactured in Indonesia for global markets.

## Gate Products

### Ornamental Swing Gates
- Classical wrought iron style
- Custom decorative patterns
- Single or double leaf
- **Price**: $850-1,800 per gate set FOB

### Modern Laser-Cut Gates
- Contemporary geometric designs
- CNC laser-cut patterns
- Minimalist aesthetic
- **Price**: $1,200-2,500 per gate set FOB

### Pedestrian Entry Gates
- Matching design with main gates
- Single leaf configuration
- Integrated lock system
- **Price**: $450-850 per gate FOB

## Features & Specifications
- **Frame**: 50x50mm to 80x80mm hollow sections
- **Infill**: Laser-cut panels, ornamental scrolls, or bars
- **Finish**: Powder coating any RAL color
- **Hardware**: Heavy-duty hinges, locks included
- **Automation**: Can be motorized for automatic operation

## Manufacturing Details
- **Design Services**: Free CAD drawings
- **MOQ**: 5 gate sets
- **Lead Time**: 35-50 days
- **Installation**: Technical drawings provided

## Export Packaging
- Wooden crate packaging
- All hardware separately boxed
- Installation manual included

📱 **Contact**: +62 852-1207-8467

**Keywords**: decorative gate manufacturer Indonesia, ornamental iron gates, custom entrance gates export, luxury gates
      `
    },
    'spiral-staircase-manufacturing': {
      slug: 'spiral-staircase-manufacturing',
      title: 'Spiral Staircase Manufacturing - Custom Steel Stairs Export Indonesia',
      category: 'Architectural Metalwork',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Spiral staircase and custom steel staircase manufacturer in Indonesia. Modern metal staircases, floating stairs, and industrial stairs for export. Professional fabrication.',
      content: `
# Spiral Staircase Manufacturing - Custom Steel Stairs Export

## Staircase Fabrication Specialist

Professional manufacturer of spiral staircases and custom steel staircases for residential and commercial projects worldwide. Modern designs with precise engineering.

## Staircase Products

### Spiral Staircases
- Space-saving circular design
- Custom diameter: 120cm-200cm
- Steel treads or wood treads
- **Price**: $2,500-4,500 per staircase FOB

### Straight Steel Staircases
- Modern industrial design
- Open riser or closed riser
- Custom dimensions
- **Price**: $180-350 per linear meter FOB

### Floating Staircases
- Minimalist cantilevered design
- Wall-mounted treads
- Ultra-modern aesthetic
- **Price**: $220-450 per linear meter FOB

## Features
- **Structure**: Heavy-duty steel construction
- **Treads**: Steel plate, checker plate, or wood
- **Railings**: Integrated handrail systems
- **Finish**: Powder coating or primer for painting
- **Code Compliant**: International building standards

## Engineering Services
- Structural calculations included
- Load-bearing capacity verified
- CAD drawings and 3D models
- Installation instructions provided

## Export Details
- **MOQ**: 1 staircase (custom project)
- **Lead Time**: 40-60 days
- **Packaging**: Knocked-down for shipping
- **Installation**: Technical support available

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: spiral staircase manufacturer Indonesia, steel staircase export, floating stairs, custom staircase fabrication
      `
    },
    'steel-building-framework-systems': {
      slug: 'steel-building-framework-systems',
      title: 'Steel Building Framework Systems - Structural Steel Export Indonesia',
      category: 'Steel Structures',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Steel building framework and structural steel manufacturer in Indonesia. Pre-engineered building systems, steel frame structures for export. Quality fabrication, competitive prices.',
      content: `
# Steel Building Framework Systems - Structural Steel Export

## Structural Steel Fabrication

Professional manufacturer of steel building frameworks and structural steel components for construction projects worldwide. Pre-engineered building systems manufactured in Indonesia.

## Framework Products

### Pre-Engineered Building Frames
- Clear-span up to 30 meters
- H-beam and C-channel construction
- Complete with purlins and girts
- **Price**: $85-150 per sqm FOB

### Warehouse Steel Frames
- Heavy-duty structural steel
- Customized to your specifications
- Includes all connection plates
- **Price**: $95-180 per sqm FOB

### Mezzanine Floor Systems
- Multi-tier platform structures
- Load capacity: 500-1000 kg/sqm
- Bolt-together assembly
- **Price**: $120-220 per sqm FOB

## Specifications
- **Materials**: ASTM A36, A572 structural steel
- **Welding**: AWS D1.1 standards
- **Coating**: Primer coat or galvanized
- **Engineering**: Structural calculations included
- **Design**: Compliant with international codes

## Manufacturing Process
1. Engineering design and approval
2. CNC cutting for precision
3. Professional welding and fabrication
4. Quality inspection
5. Surface treatment
6. Marking and packaging
7. Export documentation

## Export Services
- **MOQ**: 100 tons
- **Lead Time**: 45-60 days
- **Delivery**: FOB, CIF, or DDP available
- **Installation**: Erection drawings provided

📱 **Contact**: +62 852-1207-8467

**Keywords**: steel building manufacturer Indonesia, structural steel export, pre-engineered buildings, steel frame fabrication
      `
    },
    'powder-coating-services-indonesia': {
      slug: 'powder-coating-services-indonesia',
      title: 'Powder Coating Services Indonesia - Metal Finishing for Export Products',
      category: 'Surface Treatment',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Professional powder coating services in Indonesia. High-quality metal finishing for export products. Any RAL color, durable outdoor-grade coating. Competitive pricing.',
      content: `
# Powder Coating Services Indonesia - Metal Finishing for Export

## Professional Powder Coating Facility

High-quality powder coating services for metal products manufactured for export. Durable, attractive finishes in any color for products going to global markets.

## Powder Coating Services

### Standard Powder Coating
- Outdoor-grade polyester powder
- Thickness: 60-80 microns
- Any RAL or Pantone color
- **Price**: $2.50-4.00 per sqm

### Heavy-Duty Coating
- High-build epoxy or polyester
- Thickness: 100-150 microns
- Extra corrosion protection
- **Price**: $3.50-5.50 per sqm

### Special Finishes
- Textured finishes
- Metallic and sparkle effects
- Wood-grain effects
- **Price**: $4.00-7.00 per sqm

## Coating Process

### Pre-Treatment
- Degreasing and cleaning
- Phosphate coating for better adhesion
- Iron phosphate or zinc phosphate
- Ensures long-lasting finish

### Application
- Electrostatic powder application
- Even coating coverage
- Professional operators
- Quality control inspection

### Curing
- Gas-fired curing oven
- Temperature: 180-200°C
- Curing time: 15-20 minutes
- Consistent results

## Quality Standards
- **Adhesion**: ASTM D3359 (5B rating)
- **Thickness**: Measured and documented
- **Color**: Colorimeter matching
- **Durability**: Salt spray test 500+ hours

## Service Features
- **Capacity**: 5000+ sqm per week
- **Size**: Parts up to 6m length
- **Turnaround**: 5-7 days
- **Colors**: Unlimited color matching
- **MOQ**: No minimum for our own products

## For Export Products
- Durable finish for long-distance shipping
- Protection against corrosion
- Professional appearance
- Worldwide quality standards

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: powder coating Indonesia, metal finishing services, industrial coating, powder coating export products
      `
    },
    'metal-fabrication-oem-services': {
      slug: 'metal-fabrication-oem-services',
      title: 'Metal Fabrication OEM Services - Contract Manufacturing Indonesia',
      category: 'OEM Manufacturing',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'OEM metal fabrication and contract manufacturing services in Indonesia. Custom metal products for international brands. Quality fabrication, competitive pricing, reliable delivery.',
      content: `
# Metal Fabrication OEM Services - Contract Manufacturing Indonesia

## Your OEM Manufacturing Partner

Professional OEM metal fabrication services for international brands and businesses. We manufacture custom metal products to your specifications with Indonesian cost advantages.

## OEM Services

### Contract Manufacturing
- Manufacture to your designs and specifications
- Consistent quality production runs
- Confidentiality agreements available
- Volume production capacity

### Private Label Manufacturing
- Produce under your brand name
- Custom packaging options
- Your brand standards maintained
- Quality control to your requirements

### Product Development Partnership
- From concept to production
- Design optimization for manufacturing
- Prototype development
- Testing and refinement

## Manufacturing Capabilities

### Metal Working Processes
- **Cutting**: CNC plasma, laser, oxy-fuel
- **Forming**: Press brake, rolling, stamping
- **Welding**: MIG, TIG, spot welding
- **Machining**: Drilling, tapping, milling

### Surface Finishing
- Powder coating any color
- Hot-dip galvanizing
- Electroplating (zinc, chrome)
- Polishing and brushing

### Assembly Services
- Sub-assembly and final assembly
- Hardware installation
- Packaging and labeling
- Quality inspection

## Why Choose OEM Manufacturing in Indonesia?

### Cost Advantages
- **Labor**: 60-70% lower costs
- **Materials**: Competitive Asian market prices
- **Overhead**: Lower facility costs
- **Total Savings**: 40-60% compared to Western manufacturing

### Quality Assurance
- ISO-compliant processes
- Experienced workforce
- Modern equipment
- Strict quality control

### Business Benefits
- **Flexibility**: Small to large production runs
- **Scalability**: Easy to scale production
- **Speed**: Fast turnaround times
- **Communication**: English-speaking team

## Production Capacity
- **Monthly Output**: Varies by product
- **MOQ**: Negotiable based on product
- **Lead Time**: 20-60 days depending on complexity
- **Quality**: Third-party inspection available

## Confidentiality & IP Protection
- Non-disclosure agreements (NDA)
- Intellectual property protection
- Confidential manufacturing processes
- Secure handling of proprietary designs

## Export & Logistics
- Complete export documentation
- Professional packaging
- Container loading supervision
- Shipping coordination

## Industries We Serve
- Furniture manufacturers
- Retail brands
- Construction companies
- Industrial equipment makers
- Consumer products companies

📱 **WhatsApp**: +62 852-1207-8467
📧 **Email**: info@lasbekasi.com

**Keywords**: OEM metal fabrication Indonesia, contract manufacturing, private label manufacturing, metal products OEM
      `
    },
    'custom-metal-fabrication-order-indonesia': {
      slug: 'custom-metal-fabrication-order-indonesia',
      title: 'Custom Metal Fabrication Orders - Made to Order Manufacturing Indonesia',
      category: 'Custom Manufacturing',
      date: 'November 7, 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Custom metal fabrication services in Indonesia. We accept any custom orders for metal products. From design to production and export. Competitive pricing, quality guaranteed.',
      content: `
# Custom Metal Fabrication Orders - Made to Order Manufacturing Indonesia

## Your Custom Manufacturing Partner

Welcome to Bengkel Las Mandiri's custom metal fabrication services. We bring your unique metal product ideas to life, from concept to export-ready production, with competitive Indonesian manufacturing advantages.

## Custom Order Services

### What We Can Manufacture

#### Furniture & Interior
- Custom tables, chairs, shelving
- Display racks and retail fixtures
- Cabinets and storage solutions
- Decorative metal elements

#### Construction Products
- Structural steel components
- Railings and handrails
- Custom staircases
- Gates and fencing

#### Industrial Products
- Machine parts and components
- Storage racks and systems
- Conveyor components
- Custom brackets and mounts

#### Commercial Equipment
- Restaurant equipment
- Retail displays
- Signage structures
- Hospitality furniture

## Custom Order Process

### Step 1: Inquiry (1 day)
- Submit your product concept
- Photos, drawings, or sketches
- Specifications and requirements
- Quantity and timeline

### Step 2: Quotation (2-3 days)
- Detailed price estimate
- Material recommendations
- Production timeline
- Shipping cost estimate

### Step 3: Design Development (3-7 days)
- Professional CAD drawings
- Engineering calculations
- Design optimization
- Your approval required

### Step 4: Prototype (10-15 days)
- Sample production
- Quality verification
- Functional testing
- Design refinement if needed

### Step 5: Production (20-45 days)
- Bulk manufacturing
- Quality control throughout
- Progress updates provided
- Pre-shipment inspection

### Step 6: Export & Delivery
- Professional packaging
- Export documentation
- Shipping arrangement
- Tracking information

## Materials Available
- **Steel**: Mild steel, galvanized, high-strength
- **Stainless Steel**: 304, 316 grades
- **Aluminum**: 6061, 6063 alloys
- **Brass, Copper**: Specialized applications

## Finishing Options
- **Powder Coating**: Any RAL color, durable finish
- **Galvanizing**: Hot-dip for corrosion resistance
- **Polishing**: Mirror or brushed finish
- **Painting**: Industrial paint systems
- **Anodizing**: For aluminum products

## Why Choose Custom Manufacturing in Indonesia?

### Cost Advantages
✅ 40-60% cost savings vs Western countries
✅ Competitive material pricing
✅ Lower labor and overhead costs
✅ Strategic shipping location

### Quality & Service
✅ 20+ years metal fabrication experience
✅ Modern CNC and welding equipment
✅ Skilled certified workers
✅ English-speaking team
✅ Flexible MOQ
✅ Fast turnaround

### Full Support
✅ Free design consultation
✅ CAD drawing services
✅ Prototype development
✅ Quality documentation
✅ Export assistance
✅ After-sales support

## Pricing & Terms

### Minimum Order Quantity
- Simple products: 50-100 pieces
- Complex products: 20-50 pieces
- Large products: 10-20 pieces
- Prototypes: 1-5 pieces (higher unit cost)

### Payment Terms
- Prototype: 100% advance
- First order: 50% deposit, 50% before shipping
- Repeat orders: 30% deposit, 70% before shipping
- Large projects: Installment options

### Payment Methods
- Bank transfer (T/T)
- PayPal (smaller orders)
- Western Union
- Letter of Credit (large projects)

## Quality Assurance

### Quality Control
- Material inspection with certificates
- In-process inspection
- Dimensional verification
- Functional testing
- Final inspection before shipping

### Documentation Provided
- Material certificates
- Inspection reports
- Test results
- Production photos
- Compliance certificates

### Warranty
- 12 months manufacturing defects
- 24-36 months surface treatment
- Defective item replacement
- Technical support

## Export Services

### Packaging
- Export-grade protective packaging
- Wooden crates for fragile items
- Clear marking and labeling
- Packing list included

### Shipping
- FOB Indonesia (ex-factory + local transport)
- CIF (including freight and insurance)
- DDP (delivered to your door, select countries)

### Lead Times
- Prototype: 10-15 days
- Small orders: 20-30 days
- Medium orders: 30-45 days
- Large orders: 45-60 days

## Get Started with Your Custom Order!

### What to Include in Your Inquiry

1. **Product Description**: What you want to make
2. **Drawings/Photos**: Design files or references
3. **Dimensions**: Size specifications
4. **Material**: Preferred material type
5. **Finish**: Desired surface treatment
6. **Quantity**: Number of pieces needed
7. **Budget**: Target price range
8. **Timeline**: When you need delivery
9. **Destination**: Shipping location

## Contact Us Today!

📱 **WhatsApp**: +62 852-1207-8467 (English available)
📧 **Email**: info@lasbekasi.com
🌐 **Website**: www.lasbekasi.com

### Factory Address
📍 **Bengkel Las Mandiri**
Jl. Raya Setu Cibitung - Bekasi
Telajung, Cikarang Barat
Bekasi, West Java 17320, Indonesia

### Business Hours
- Monday-Friday: 08:00-17:00 WIB (GMT+7)
- Saturday: 08:00-15:00 WIB
- Sunday: Closed

### Quick Response
- Email: Within 12 hours
- WhatsApp: Within 2-4 hours
- Quotation: Within 24-48 hours
- Design: Within 3-7 days

## Let's Bring Your Ideas to Life!

Whether you need:
✅ Custom furniture
✅ Architectural metalwork
✅ Industrial equipment
✅ Retail displays
✅ Building components
✅ Unique metal products
✅ OEM manufacturing
✅ Product development

**We have the expertise to manufacture it!**

📱 **Contact us now**: +62 852-1207-8467

> "From your concept to our manufacturing excellence. Quality custom metal products made in Indonesia for the world."

---

**Bengkel Las Mandiri - Custom Metal Fabrication Since 1999**

*Your trusted partner for custom metal manufacturing*

**Keywords**: custom metal fabrication Indonesia, made to order manufacturing, custom steel products, metal fabrication services, bespoke metalwork, custom manufacturing Indonesia, steel fabrication custom orders
      `
    }
  
  const post = slug ? blogPosts[slug] : null
  
  // Generate schemas for valid posts
  const baseUrl = 'https://lasbekasi.com'
  const pageUrl = slug ? `${baseUrl}/blog/${slug}` : ''
  
  const breadcrumbSchema = post ? generateBreadcrumbSchema([
    { name: 'Beranda', url: baseUrl },
    { name: 'Blog', url: `${baseUrl}/blog` },
    { name: post.title, url: pageUrl }
  ]) : null
  
  const articleSchema = post ? generateArticleSchema(
    post.title,
    post.metaDescription,
    pageUrl,
    post.date,
    post.date,
    post.author
  ) : null

  if (!post) {
    return (
      <div>
        <Header />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>Artikel tidak ditemukan</h2>
            <Link to="/blog" style={{ color: '#667eea', textDecoration: 'none' }}>← Kembali ke Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{post.title} - Blog Bengkel Las Mandiri</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={`${post.category}, jasa las bekasi, bengkel las, ${post.title}`} />
        <meta name="author" content={post.author} />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:author" content={post.author} />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL - CRITICAL for avoiding duplicate content */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Breadcrumb Schema */}
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}
        
        {/* Article Schema */}
        {articleSchema && (
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
        )}
      </Helmet>
      
      <Header />
      
      <article className="blog-post">
        <div className="container">
          <div className="blog-post-header">
            <Link to="/blog" className="back-link">← Kembali ke Blog</Link>
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>Oleh {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="blog-post-content">
            {post.content.split('\n').map((line, index) => {
              const trimmedLine = line.trim()
              
              // Helper function to parse bold text
              const parseBoldText = (text: string) => {
                const parts = text.split('**')
                return parts.map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )
              }
              
              if (trimmedLine.startsWith('# ')) {
                return <h1 key={index} className="content-h1">{trimmedLine.substring(2)}</h1>
              } else if (trimmedLine.startsWith('## ')) {
                return <h2 key={index} className="content-h2">{trimmedLine.substring(3)}</h2>
              } else if (trimmedLine.startsWith('### ')) {
                return <h3 key={index} className="content-h3">{trimmedLine.substring(4)}</h3>
              } else if (trimmedLine.startsWith('#### ')) {
                return <h4 key={index} className="content-h4">{trimmedLine.substring(5)}</h4>
              } else if (trimmedLine.startsWith('- ')) {
                const listContent = trimmedLine.substring(2)
                return (
                  <li key={index} className="content-list-item">
                    {listContent.includes('**') ? parseBoldText(listContent) : listContent}
                  </li>
                )
              } else if (trimmedLine.startsWith('> ')) {
                const quoteContent = trimmedLine.substring(2)
                return (
                  <blockquote key={index} className="content-quote">
                    {quoteContent.includes('**') ? parseBoldText(quoteContent) : quoteContent}
                  </blockquote>
                )
              } else if (trimmedLine.startsWith('---')) {
                return <hr key={index} className="content-divider" />
              } else if (trimmedLine === '') {
                return <br key={index} />
              } else {
                return (
                  <p key={index} className="content-paragraph">
                    {trimmedLine.includes('**') ? parseBoldText(trimmedLine) : trimmedLine}
                  </p>
                )
              }
            })}
          </div>

          <div className="blog-post-footer">
            <div className="cta-box">
              <h3>Tertarik dengan layanan kami?</h3>
              <p>Hubungi kami sekarang untuk konsultasi gratis!</p>
              <a 
                href="https://wa.me/6285212078467?text=Halo, saya ingin konsultasi tentang jasa las"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 WhatsApp: 0852-1207-8467
              </a>
            </div>
          </div>
        </div>
      </article>

      <RelatedProducts />

      <Footer />
    </div>
  )
}

export default BlogPost

