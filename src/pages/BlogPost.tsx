import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AuthorCard from '../components/AuthorCard'
import BlogCTACard from '../components/BlogCTACard'
import './BlogPost.css'
import { Helmet } from 'react-helmet-async'

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
    'cara-memilih-bengkel-las-yang-bagus': {
      slug: 'cara-memilih-bengkel-las-yang-bagus',
      title: 'Cara Memilih Bengkel Las yang Bagus - Tips Jitu untuk Pemula',
      category: 'Tips & Panduan',
      date: '16 Oktober 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Cara memilih bengkel las yang bagus dan terpercaya. Tips jitu untuk pemula dalam memilih jasa las berkualitas dengan harga kompetitif. Panduan lengkap!',
      content: `
# Cara Memilih Bengkel Las yang Bagus - Tips Jitu untuk Pemula

Memilih **bengkel las yang bagus** adalah langkah penting untuk memastikan proyek konstruksi baja Anda berhasil dengan hasil yang memuaskan. Sebagai pemula, Anda mungkin bingung bagaimana cara memilih bengkel las yang tepat. Berikut adalah panduan lengkap untuk membantu Anda!

## Mengapa Memilih Bengkel Las yang Tepat Sangat Penting?

### 🏗️ Kualitas Konstruksi
Bengkel las yang bagus akan menghasilkan konstruksi yang kuat, rapi, dan tahan lama. Ini sangat penting untuk keamanan dan kenyamanan jangka panjang.

### 💰 Investasi yang Tepat
Pilihan yang salah bisa membuat Anda mengeluarkan biaya lebih besar untuk perbaikan atau bahkan penggantian total.

### ⏰ Efisiensi Waktu
Bengkel las profesional akan menyelesaikan pekerjaan tepat waktu sesuai jadwal yang disepakati.

### 🛡️ Garansi dan After Sales
Bengkel las yang bagus akan memberikan garansi dan layanan purna jual yang memadai.

## 10 Kriteria Bengkel Las yang Bagus

### 1. ✅ Pengalaman dan Track Record
**Yang Harus Dicari:**
- Minimal 5 tahun pengalaman di bidang konstruksi baja
- Portfolio pekerjaan yang beragam dan berkualitas
- Testimoni positif dari pelanggan terdahulu
- Sertifikat keahlian dari lembaga terkait

**Cara Mengecek:**
- Minta portfolio foto pekerjaan sebelumnya
- Tanyakan berapa tahun pengalaman
- Minta referensi pelanggan yang bisa dihubungi
- Cek review di Google Maps atau media sosial

### 2. ✅ Legalitas dan Izin Usaha
**Yang Harus Ada:**
- SIUP (Surat Izin Usaha Perdagangan)
- TDP (Tanda Daftar Perusahaan)
- NPWP (Nomor Pokok Wajib Pajak)
- Alamat workshop yang jelas dan permanen

**Cara Mengecek:**
- Minta fotokopi dokumen legalitas
- Cek alamat workshop secara langsung
- Pastikan alamat sesuai dengan yang tertera di dokumen

### 3. ✅ Tenaga Ahli Berpengalaman
**Kriteria Tenaga Kerja:**
- Tukang las tersertifikasi
- Pengalaman minimal 3-5 tahun
- Terampil dalam berbagai jenis pengelasan
- Memahami standar keselamatan kerja

**Cara Mengecek:**
- Tanyakan kualifikasi tukang las
- Lihat sertifikat keahlian
- Amati cara kerja saat survey
- Tanyakan pengalaman dengan proyek serupa

### 4. ✅ Material Berkualitas SNI
**Spesifikasi Material:**
- Besi hollow/galvanis dengan ketebalan sesuai standar
- Material atap (Alderon, Polycarbonate, dll) original
- Cat/powder coating berkualitas
- Aksesoris dan hardware standar

**Cara Mengecek:**
- Minta spesifikasi detail material
- Tanyakan merk dan grade material
- Minta bukti pembelian material
- Pastikan ada sertifikat material

### 5. ✅ Harga Transparan dan Kompetitif
**Yang Harus Jelas:**
- Rincian biaya material
- Biaya tenaga kerja
- Biaya transportasi/mobilisasi
- Tidak ada biaya tersembunyi

**Cara Mengecek:**
- Minta RAB (Rencana Anggaran Biaya) detail
- Bandingkan dengan 2-3 bengkel lain
- Tanyakan apa saja yang termasuk dalam harga
- Pastikan tidak ada biaya tambahan mendadak

### 6. ✅ Garansi Pekerjaan
**Jenis Garansi yang Diberikan:**
- Garansi konstruksi (minimal 1 tahun)
- Garansi material sesuai garansi pabrik
- Garansi cat/finishing
- After sales service

**Cara Mengecek:**
- Minta dokumen garansi tertulis
- Tanyakan cakupan garansi
- Pastikan ada kontak untuk klaim garansi
- Tanyakan prosedur klaim garansi

### 7. ✅ Komunikasi yang Baik
**Indikator Komunikasi Baik:**
- Responsif dalam menjawab pertanyaan
- Jelas dalam menjelaskan detail pekerjaan
- Mudah dihubungi via berbagai media
- Memberikan update progress secara berkala

**Cara Mengecek:**
- Test responsivitas via WhatsApp/telepon
- Tanyakan detail teknis yang rumit
- Lihat cara mereka menjelaskan proses kerja
- Pastikan ada kontak person yang jelas

### 8. ✅ Pengerjaan Profesional
**Standar Pengerjaan:**
- Jadwal pengerjaan yang jelas
- Supervisi berkala
- Quality control ketat
- Area kerja selalu bersih

**Cara Mengecek:**
- Tanyakan timeline pengerjaan
- Minta jadwal detail pengerjaan
- Tanyakan sistem supervisi
- Pastikan ada cleaning service

### 9. ✅ Lokasi dan Aksesibilitas
**Pertimbangan Lokasi:**
- Jarak dari lokasi proyek
- Kemudahan akses untuk survey
- Kemudahan koordinasi
- Biaya mobilisasi

**Cara Mengecek:**
- Cek jarak dari lokasi Anda
- Tanyakan biaya survey
- Pastikan mudah dihubungi
- Tanyakan kemudahan koordinasi

### 10. ✅ Reputasi dan Referensi
**Indikator Reputasi:**
- Review positif di Google Maps
- Rekomendasi dari teman/kenalan
- Keanggotaan asosiasi profesi
- Penghargaan atau sertifikasi

**Cara Mengecek:**
- Baca review di Google Maps
- Tanyakan referensi dari teman
- Cek media sosial dan website
- Tanyakan keanggotaan asosiasi

## Langkah-Langkah Memilih Bengkel Las

### Step 1: Riset Awal
1. **Cari Referensi**
   - Tanya teman/keluarga yang pernah menggunakan jasa las
   - Cari di Google Maps dengan keyword "bengkel las [nama kota]"
   - Baca review dan rating

2. **Buat Daftar Kandidat**
   - Minimal 3-5 bengkel las
   - Catat kontak dan alamat
   - Catat keunggulan masing-masing

### Step 2: Screening Awal
1. **Hubungi via Telepon/WhatsApp**
   - Tanyakan pengalaman dan layanan
   - Tanyakan ketersediaan untuk survey
   - Tanyakan estimasi harga kasar

2. **Cek Online**
   - Lihat website dan portfolio
   - Baca review di Google Maps
   - Cek media sosial

### Step 3: Survey dan Penawaran
1. **Jadwalkan Survey**
   - Minimal 2-3 bengkel untuk perbandingan
   - Pastikan survey gratis
   - Siapkan pertanyaan teknis

2. **Terima Penawaran**
   - Minta RAB detail dari setiap bengkel
   - Bandingkan spesifikasi material
   - Bandingkan timeline pengerjaan

### Step 4: Evaluasi dan Keputusan
1. **Bandingkan Penawaran**
   - Harga vs kualitas
   - Timeline pengerjaan
   - Spesifikasi material
   - Garansi yang diberikan

2. **Pilih yang Terbaik**
   - Pertimbangkan semua faktor
   - Jangan hanya fokus pada harga
   - Pilih yang paling sesuai kebutuhan

## Red Flags - Tanda Bengkel Las Tidak Bagus

### 🚩 Harga Terlalu Murah
Harga yang jauh di bawah pasaran biasanya mengorbankan kualitas material atau pengerjaan.

### 🚩 Tidak Ada Garansi
Bengkel las yang bagus pasti memberikan garansi. Jika tidak ada garansi, patut dipertanyakan.

### 🚩 Tidak Responsif
Komunikasi yang buruk akan menyulitkan koordinasi dan monitoring progress.

### 🚩 Tidak Ada Portfolio
Bengkel las yang bagus pasti punya portfolio pekerjaan yang bisa ditunjukkan.

### 🚩 Alamat Tidak Jelas
Bengkel las yang tidak punya alamat workshop tetap patut dipertanyakan legalitasnya.

### 🚩 Tidak Ada Kontrak Tertulis
Proyek konstruksi harus ada kontrak tertulis yang jelas untuk melindungi kedua belah pihak.

## Tips Negosiasi dengan Bengkel Las

### 💰 Strategi Harga
1. **Bandingkan Minimal 3 Penawaran**
   - Jangan langsung ambil yang pertama
   - Bandingkan spesifikasi, bukan hanya harga
   - Tanyakan apa yang termasuk dalam harga

2. **Negosiasi yang Win-Win**
   - Tawarkan pembayaran tunai untuk diskon
   - Tanyakan paket lengkap dengan harga khusus
   - Minta harga untuk multiple project

### 📋 Kontrak yang Jelas
1. **Spesifikasi Detail**
   - Ukuran dan dimensi
   - Jenis dan merk material
   - Ketebalan dan grade material
   - Warna dan finishing

2. **Timeline yang Realistis**
   - Jadwal pengerjaan harian
   - Milestone yang jelas
   - Konsekuensi keterlambatan

3. **Pembayaran yang Adil**
   - DP maksimal 50%
   - Progress payment yang wajar
   - Retensi 5-10% untuk garansi

## Checklist Sebelum Memutuskan

### ✅ Legalitas
- [ ] SIUP/TDP tersedia
- [ ] Alamat workshop jelas
- [ ] NPWP tersedia

### ✅ Kualitas
- [ ] Portfolio pekerjaan bagus
- [ ] Tenaga ahli berpengalaman
- [ ] Material berkualitas SNI

### ✅ Harga
- [ ] RAB detail dan transparan
- [ ] Harga kompetitif
- [ ] Tidak ada biaya tersembunyi

### ✅ Garansi
- [ ] Garansi konstruksi minimal 1 tahun
- [ ] Garansi material sesuai pabrik
- [ ] After sales service tersedia

### ✅ Komunikasi
- [ ] Responsif dan komunikatif
- [ ] Kontak person jelas
- [ ] Update progress berkala

## Kesimpulan

Memilih bengkel las yang bagus membutuhkan riset yang teliti dan pertimbangan yang matang. Jangan terburu-buru memutuskan hanya berdasarkan harga. Pertimbangkan kualitas, pengalaman, garansi, dan komunikasi.

**Ingat:** Investasi di konstruksi baja adalah jangka panjang. Pilihan yang tepat akan memberikan hasil yang memuaskan dan tahan lama.

## Hubungi Bengkel Las Mandiri

Jika Anda mencari bengkel las yang memenuhi semua kriteria di atas, **Bengkel Las Mandiri** siap membantu kebutuhan konstruksi baja Anda.

### 🏆 Keunggulan Kami:
- ✅ Pengalaman 20+ tahun sejak 1999
- ✅ Tenaga ahli tersertifikasi
- ✅ Material berkualitas SNI
- ✅ Harga transparan dan kompetitif
- ✅ Garansi resmi tertulis
- ✅ Survey dan konsultasi GRATIS

### 📱 Kontak Kami:
**WhatsApp: 0852-1207-8467**
**Alamat: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar.**

> "Kepercayaan Anda adalah aset terbesar kami. Kepuasan Anda adalah kesuksesan kami!"

---
**Bengkel Las Mandiri - Partner Terpercaya untuk Semua Kebutuhan Konstruksi Baja Anda**
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
    'tukang-las-listrik-bekasi-murah': {
      slug: 'tukang-las-listrik-bekasi-murah',
      title: 'Tukang Las Listrik Bekasi Murah & Profesional - Harga Terjangkau 2025',
      category: 'Jasa Las',
      date: '23 November 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Tukang las listrik Bekasi murah dan profesional. Jasa las listrik untuk kanopi, pagar, tralis dengan harga terjangkau. Hubungi 0852-1207-8467 untuk konsultasi gratis.',
      content: `
# Tukang Las Listrik Bekasi Murah & Profesional - Harga Terjangkau 2025

Mencari **tukang las listrik Bekasi** yang murah, profesional, dan terpercaya? Bengkel Las Mandiri adalah solusi terbaik untuk kebutuhan jasa las listrik Anda di Bekasi dan sekitarnya.

## Mengapa Pilih Tukang Las Listrik Bekasi?

**Las listrik** adalah teknik pengelasan yang menggunakan arus listrik untuk menyambungkan logam. Teknik ini sangat cocok untuk berbagai kebutuhan konstruksi seperti pembuatan kanopi, pagar besi, tralis, railing tangga, dan konstruksi baja lainnya.

### Keunggulan Las Listrik:
- ✅ **Hasil Rapi & Kuat** - Sambungan lebih kuat dan rapi dibanding las karbit
- ✅ **Efisien & Cepat** - Proses pengerjaan lebih cepat
- ✅ **Tahan Lama** - Hasil las lebih tahan terhadap korosi
- ✅ **Fleksibel** - Cocok untuk berbagai jenis material besi dan baja

## Layanan Tukang Las Listrik Bekasi

Bengkel Las Mandiri menyediakan berbagai layanan jasa las listrik profesional:

### 🏠 Konstruksi Rumah
- **[Jasa Las Kanopi Bekasi](https://lasbekasi.com/jasa-las-kanopi-bekasi)** - Kanopi minimalis dengan berbagai material
- **[Jasa Las Pagar Bekasi](https://lasbekasi.com/jasa-las-pagar-bekasi)** - Pagar besi minimalis dan tempa
- **[Jasa Las Tralis Bekasi](https://lasbekasi.com/jasa-las-tralis-bekasi)** - Tralis jendela dan pintu anti maling
- Railing tangga dan balkon
- Pintu garasi sliding

### 🏢 Konstruksi Komersial
- Konstruksi baja untuk ruko dan perkantoran
- Kanopi untuk area parkir
- Pagar perimeter untuk pabrik

## Harga Tukang Las Listrik Bekasi

Harga jasa las listrik di Bekasi bervariasi tergantung:
- **Jenis pekerjaan** (kanopi, pagar, tralis, dll)
- **Material yang digunakan** (besi hollow, baja ringan, dll)
- **Luas area** yang akan dikerjakan
- **Kompleksitas desain**

### Estimasi Harga:
- **Kanopi**: Mulai Rp 350.000/m²
- **Pagar Besi**: Mulai Rp 350.000/meter
- **Tralis**: Mulai Rp 250.000/meter
- **Railing Tangga**: Mulai Rp 400.000/meter

*Harga dapat berubah sesuai kondisi lapangan dan survey*

## Mengapa Pilih Bengkel Las Mandiri?

### ✅ Pengalaman 20+ Tahun
Berdiri sejak 1999, kami telah mengerjakan ribuan proyek las listrik di Bekasi dan sekitarnya.

### ✅ Tenaga Ahli Profesional
Tim tukang las kami adalah tenaga ahli bersertifikat dengan pengalaman bertahun-tahun.

### ✅ Material Berkualitas SNI
Semua material yang kami gunakan memenuhi standar SNI dan bergaransi.

### ✅ Harga Kompetitif
Harga terjangkau tanpa mengorbankan kualitas pekerjaan.

### ✅ Survey & Konsultasi GRATIS
Kami menyediakan survey lokasi dan konsultasi gratis untuk wilayah Bekasi.

## Wilayah Layanan

Kami melayani jasa tukang las listrik di seluruh wilayah Bekasi:
- Bekasi Barat, Bekasi Timur, Bekasi Utara, Bekasi Selatan
- Cikarang, Setu, Cibitung, Tambun
- Dan seluruh Jabodetabek

## Hubungi Kami Sekarang!

Butuh jasa tukang las listrik Bekasi yang murah dan profesional? Hubungi Bengkel Las Mandiri sekarang!

📱 **WhatsApp**: 0852-1207-8467
🌐 **Website**: [lasbekasi.com](https://lasbekasi.com)
📍 **Alamat**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320

Kunjungi juga halaman [Layanan Las Bekasi](https://lasbekasi.com/layanan-las-bekasi) untuk melihat semua layanan kami.
      `
    },
    'biaya-pembuatan-pagar-rumah-bekasi': {
      slug: 'biaya-pembuatan-pagar-rumah-bekasi',
      title: 'Biaya Pembuatan Pagar Rumah Bekasi - Harga Terbaru 2025',
      category: 'Tips & Panduan',
      date: '23 November 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Biaya pembuatan pagar rumah Bekasi terbaru 2025. Harga pagar besi minimalis mulai Rp 350.000/meter. Konsultasi gratis hubungi 0852-1207-8467.',
      content: `
# Biaya Pembuatan Pagar Rumah Bekasi - Harga Terbaru 2025

Pagar rumah adalah elemen penting untuk keamanan dan estetika rumah Anda. Jika Anda sedang mencari informasi **biaya pembuatan pagar rumah Bekasi**, artikel ini akan memberikan panduan lengkap tentang harga dan faktor-faktor yang mempengaruhinya.

## Faktor yang Mempengaruhi Biaya Pagar Rumah

### 1. **Jenis Material**
- **Besi Hollow**: Harga lebih ekonomis, mulai Rp 350.000/meter
- **Besi Tempa**: Harga lebih mahal karena proses tempa, mulai Rp 500.000/meter
- **Baja Ringan**: Ringan dan tahan karat, mulai Rp 400.000/meter

### 2. **Tinggi Pagar**
- Pagar standar (1.5-2 meter): Harga normal
- Pagar tinggi (>2 meter): Harga lebih mahal karena material lebih banyak

### 3. **Desain & Model**
- **Pagar Minimalis**: Harga lebih terjangkau
- **Pagar Tempa**: Harga lebih mahal karena proses custom
- **Pagar dengan Ornamen**: Harga tertinggi

### 4. **Finishing**
- **Cat Biasa**: Termasuk dalam harga dasar
- **Cat Epoxy**: Tambahan biaya Rp 50.000-100.000/meter
- **Powder Coating**: Tambahan biaya Rp 100.000-150.000/meter

## Daftar Harga Pagar Rumah Bekasi 2025

### Paket Pagar Besi Minimalis
| Jenis | Harga per Meter | Keterangan |
|-------|----------------|------------|
| Pagar Hollow 4x4 | Rp 350.000 | Material standar |
| Pagar Hollow 4x6 | Rp 400.000 | Lebih kuat |
| Pagar Tempa Minimalis | Rp 500.000 | Desain custom |
| Pagar Tempa Full | Rp 750.000 | Ornamen lengkap |

### Biaya Tambahan:
- **Pondasi**: Rp 150.000-300.000/meter (jika diperlukan)
- **Pengecatan**: Rp 50.000-150.000/meter (tergantung jenis cat)
- **Pintu Pagar**: Rp 2.000.000-5.000.000 (tergantung ukuran)

## Tips Menghemat Biaya Pagar Rumah

1. **Pilih Material yang Tepat**
   - Untuk budget terbatas: Pilih besi hollow standar
   - Untuk jangka panjang: Investasi pagar tempa lebih tahan lama

2. **Desain Minimalis**
   - Desain minimalis lebih murah dibanding desain kompleks
   - Tetap cantik dan modern

3. **Survey Lokasi**
   - Survey gratis membantu menghitung biaya akurat
   - Hindari biaya tambahan yang tidak terduga

4. **Negosiasi Harga**
   - Untuk proyek besar (>50 meter), harga bisa dinegosiasi
   - DP 50% biasanya cukup untuk memulai pekerjaan

## Proses Pemesanan Pagar Rumah

1. **Konsultasi & Survey** - GRATIS
2. **Penawaran Harga** - RAB lengkap dan transparan
3. **Kesepakatan & DP** - DP 50% untuk memulai pekerjaan
4. **Pengerjaan** - 3-7 hari kerja (tergantung luas)
5. **Finishing & Serah Terima** - Pelunasan saat selesai

## Rekomendasi Bengkel Las Bekasi

**[Bengkel Las Mandiri](https://lasbekasi.com/tentang-kami)** adalah pilihan terbaik untuk pembuatan pagar rumah di Bekasi:

- ✅ **Pengalaman 20+ Tahun** - Sejak 1999
- ✅ **Harga Kompetitif** - Transparan tanpa biaya tersembunyi
- ✅ **Material SNI** - Berkualitas dan bergaransi
- ✅ **Survey GRATIS** - Wilayah Bekasi dan sekitarnya

Lihat [Portfolio Pagar Rumah](https://lasbekasi.com/album-bengkel-las-mandiri) kami untuk inspirasi desain.

## Hubungi Kami

📱 **WhatsApp**: 0852-1207-8467
🌐 **Website**: [lasbekasi.com](https://lasbekasi.com)
📍 **Alamat**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320

Konsultasi gratis untuk mendapatkan penawaran harga terbaik!
      `
    },
    'model-pagar-besi-minimalis-terbaru': {
      slug: 'model-pagar-besi-minimalis-terbaru',
      title: 'Model Pagar Besi Minimalis Terbaru 2025 - Inspirasi Desain Modern',
      category: 'Tips & Panduan',
      date: '23 November 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Koleksi model pagar besi minimalis terbaru 2025. Inspirasi desain pagar modern untuk rumah minimalis. Lihat portfolio dan konsultasi gratis.',
      content: `
# Model Pagar Besi Minimalis Terbaru 2025 - Inspirasi Desain Modern

Pagar besi minimalis menjadi pilihan populer untuk rumah modern karena desainnya yang clean, elegan, dan mudah dirawat. Artikel ini akan memberikan inspirasi **model pagar besi minimalis terbaru 2025** yang sedang tren.

## Tren Model Pagar Besi Minimalis 2025

### 1. **Pagar Minimalis Horizontal**
Desain dengan garis horizontal yang memberikan kesan modern dan luas. Cocok untuk rumah minimalis kontemporer.

**Keunggulan:**
- ✅ Tampilan modern dan elegan
- ✅ Mudah dibersihkan
- ✅ Cocok untuk berbagai gaya rumah

### 2. **Pagar Minimalis Vertikal**
Garis vertikal memberikan kesan tinggi dan mewah. Sangat cocok untuk rumah dengan halaman terbatas.

**Keunggulan:**
- ✅ Memberikan kesan tinggi
- ✅ Privasi lebih baik
- ✅ Desain timeless

### 3. **Pagar Minimalis dengan Geometri**
Kombinasi bentuk geometri sederhana seperti kotak, lingkaran, atau segitiga memberikan kesan modern dan unik.

**Keunggulan:**
- ✅ Desain unik dan menarik
- ✅ Tetap minimalis
- ✅ Bisa dikustomisasi

### 4. **Pagar Minimalis Hitam**
Warna hitam memberikan kesan elegan dan modern. Sangat populer untuk rumah minimalis kontemporer.

**Keunggulan:**
- ✅ Tampilan premium
- ✅ Mudah dipadukan dengan warna lain
- ✅ Tidak mudah terlihat kotor

### 5. **Pagar Minimalis dengan Railing**
Kombinasi pagar dengan railing memberikan kesan mewah dan modern. Cocok untuk rumah 2 lantai.

**Keunggulan:**
- ✅ Tampilan mewah
- ✅ Keamanan lebih baik
- ✅ Desain modern

## Tips Memilih Model Pagar Minimalis

### 1. **Sesuaikan dengan Gaya Rumah**
- Rumah minimalis: Pilih desain clean dan sederhana
- Rumah modern: Pilih desain dengan aksen geometri
- Rumah klasik: Pilih desain dengan sedikit ornamen

### 2. **Pertimbangkan Privasi**
- Jika butuh privasi: Pilih pagar vertikal atau dengan railing
- Jika ingin tetap terbuka: Pilih pagar horizontal

### 3. **Pertimbangkan Budget**
- **Ekonomis**: Pagar hollow minimalis (Rp 350.000/meter)
- **Menengah**: Pagar tempa minimalis (Rp 500.000/meter)
- **Premium**: Pagar custom dengan finishing premium (Rp 750.000+/meter)

### 4. **Pertimbangkan Perawatan**
- Pagar minimalis lebih mudah dirawat
- Pilih finishing yang tahan cuaca (powder coating atau cat epoxy)

## Material untuk Pagar Minimalis

### 1. **Besi Hollow**
- Ukuran: 4x4cm, 4x6cm, 4x8cm
- Ketebalan: 1.2mm - 2.0mm
- Cocok untuk: Pagar minimalis ekonomis

### 2. **Besi Tempa**
- Proses: Custom tempa
- Cocok untuk: Pagar minimalis dengan ornamen
- Harga: Lebih mahal tapi lebih tahan lama

### 3. **Baja Ringan**
- Ringan dan tahan karat
- Cocok untuk: Pagar minimalis modern
- Harga: Menengah

## Konsultasi Desain Pagar Minimalis

**[Bengkel Las Mandiri](https://lasbekasi.com/kontak-bengkel-las-bekasi)** siap membantu mewujudkan pagar minimalis impian Anda:

- ✅ **Konsultasi GRATIS** - Diskusi desain sesuai kebutuhan
- ✅ **3D Rendering** - Visualisasi desain sebelum pengerjaan
- ✅ **Custom Design** - Desain sesuai keinginan Anda
- ✅ **Portfolio Lengkap** - Lihat [katalog pagar minimalis](https://lasbekasi.com/album-bengkel-las-mandiri)

## Hubungi Kami

📱 **WhatsApp**: 0852-1207-8467
🌐 **Website**: [lasbekasi.com](https://lasbekasi.com)
📍 **Alamat**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320

Lihat juga [Jasa Las Pagar Bekasi](https://lasbekasi.com/jasa-las-pagar-bekasi) untuk informasi lengkap tentang layanan pembuatan pagar.
      `
    },
    'tukang-las-kanopi-setu-bekasi': {
      slug: 'tukang-las-kanopi-setu-bekasi',
      title: 'Tukang Las Kanopi Setu Bekasi - Profesional & Terpercaya',
      category: 'Jasa Las',
      date: '23 November 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Tukang las kanopi Setu Bekasi profesional. Jasa pasang kanopi Setu dengan harga murah dan material berkualitas. Hubungi 0852-1207-8467.',
      content: `
# Tukang Las Kanopi Setu Bekasi - Profesional & Terpercaya

Mencari **tukang las kanopi Setu Bekasi** yang profesional dan terpercaya? Bengkel Las Mandiri melayani jasa pembuatan dan pemasangan kanopi di wilayah Setu, Bekasi dengan pengalaman 20+ tahun.

## Tentang Layanan Kami di Setu

Bengkel Las Mandiri berlokasi di **Jl. Raya Setu Cibitung - Bekasi, Telajung**, sangat strategis untuk melayani kebutuhan kanopi di wilayah Setu dan sekitarnya. Kami telah mengerjakan ratusan proyek kanopi di Setu dengan tingkat kepuasan klien yang tinggi.

## Layanan Tukang Las Kanopi Setu

Kami menyediakan berbagai layanan kanopi untuk kebutuhan Anda:

### 🏠 Kanopi Rumah
- **Kanopi Carport** - Melindungi kendaraan dari panas dan hujan
- **Kanopi Teras** - Area bersantai yang nyaman
- **Kanopi Balkon** - Tambahan ruang outdoor
- **Kanopi Pintu Masuk** - Memberikan kesan mewah

### 🏢 Kanopi Komersial
- **Kanopi Ruko** - Untuk area parkir atau teras
- **Kanopi Kantor** - Area parkir karyawan
- **Kanopi Pabrik** - Area loading/unloading

## Jenis Kanopi yang Kami Tawarkan

### 1. **Kanopi Alderon**
Material premium dengan daya tahan hingga 25 tahun. Anti bocor dan anti karat.

**Harga**: Rp 650.000 - Rp 850.000/m²

### 2. **Kanopi Polycarbonate**
Material transparan yang memberikan pencahayaan alami. Ringan dan tahan benturan.

**Harga**: Rp 550.000 - Rp 750.000/m²

### 3. **Kanopi Solartuff**
Material premium dengan UV Protection 99%. Garansi 10 tahun.

**Harga**: Rp 850.000 - Rp 1.050.000/m²

### 4. **Kanopi Spandek**
Material ekonomis namun tetap berkualitas. Tahan karat dan kuat.

**Harga**: Rp 350.000 - Rp 450.000/m²

### 5. **Kanopi Kaca Tempered**
Material premium untuk tampilan mewah dan modern.

**Harga**: Rp 1.200.000 - Rp 1.500.000/m²

## Rangka Kanopi

### 1. **Rangka Baja Ringan**
- Ringan dan anti karat
- Cocok untuk kanopi standar
- Harga: Mulai Rp 350.000/m² (termasuk atap)

### 2. **Rangka Besi Hollow**
- Sangat kuat dan kokoh
- Cocok untuk kanopi besar
- Harga: Mulai Rp 560.000/m² (termasuk atap)

### 3. **Rangka Baja WF**
- Kekuatan maksimal
- Cocok untuk bentang lebar (>8 meter)
- Harga: Mulai Rp 600.000/m² (termasuk atap)

## Mengapa Pilih Bengkel Las Mandiri?

### ✅ Lokasi Strategis
Berada di Setu, kami sangat mudah dijangkau untuk proyek di Setu dan sekitarnya.

### ✅ Pengalaman 20+ Tahun
Sejak 1999, kami telah mengerjakan ribuan proyek kanopi di Bekasi.

### ✅ Tenaga Ahli Profesional
Tim tukang las kami berpengalaman dan tersertifikat.

### ✅ Material Berkualitas SNI
Semua material memenuhi standar SNI dan bergaransi.

### ✅ Harga Kompetitif
Harga terjangkau dengan kualitas premium.

### ✅ Survey & Konsultasi GRATIS
Survey lokasi gratis untuk wilayah Setu dan sekitarnya.

## Proses Pemesanan

1. **Konsultasi** - Hubungi kami via WhatsApp atau telepon
2. **Survey Lokasi** - Tim kami akan survey lokasi GRATIS
3. **Penawaran Harga** - RAB lengkap dan transparan
4. **Kesepakatan** - DP 50% untuk memulai pekerjaan
5. **Pengerjaan** - 3-7 hari kerja (tergantung luas)
6. **Serah Terima** - Pelunasan saat pekerjaan selesai

## Wilayah Layanan

Kami melayani jasa tukang las kanopi di:
- **Setu** - Area utama
- **Cikarang** - Cikarang Barat, Timur, Selatan, Utara
- **Cibitung** - Dan sekitarnya
- **Bekasi** - Seluruh wilayah Bekasi
- **Jabodetabek** - Dengan penyesuaian biaya mobilisasi

## Hubungi Kami

📱 **WhatsApp**: 0852-1207-8467
🌐 **Website**: [lasbekasi.com](https://lasbekasi.com)
📍 **Alamat**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320

Kunjungi juga [Jasa Las Kanopi Bekasi](https://lasbekasi.com/jasa-las-kanopi-bekasi) untuk informasi lengkap tentang layanan kanopi kami.
      `
    },
    'harga-pagar-besi-minimalis-bekasi': {
      slug: 'harga-pagar-besi-minimalis-bekasi',
      title: 'Harga Pagar Besi Minimalis Bekasi Terbaru 2025 - Lengkap & Update',
      category: 'Tips & Panduan',
      date: '23 November 2025',
      author: 'Bengkel Las Mandiri',
      metaDescription: 'Harga pagar besi minimalis Bekasi terbaru 2025. Daftar harga lengkap mulai Rp 350.000/meter. Konsultasi gratis hubungi 0852-1207-8467.',
      content: `
# Harga Pagar Besi Minimalis Bekasi Terbaru 2025 - Lengkap & Update

Informasi lengkap tentang **harga pagar besi minimalis Bekasi** terbaru 2025. Artikel ini akan memberikan panduan harga yang akurat dan transparan untuk membantu Anda merencanakan budget pembuatan pagar.

## Daftar Harga Pagar Besi Minimalis Bekasi 2025

### Paket Pagar Hollow Minimalis

| Jenis Material | Ukuran | Harga per Meter | Keterangan |
|----------------|--------|-----------------|------------|
| Hollow 4x4 | 1.2mm | Rp 350.000 | Standar |
| Hollow 4x6 | 1.4mm | Rp 400.000 | Lebih kuat |
| Hollow 4x8 | 1.6mm | Rp 450.000 | Premium |
| Hollow 5x10 | 2.0mm | Rp 550.000 | Extra kuat |

### Paket Pagar Tempa Minimalis

| Jenis | Harga per Meter | Keterangan |
|-------|----------------|------------|
| Tempa Minimalis | Rp 500.000 | Desain sederhana |
| Tempa dengan Ornamen | Rp 650.000 | Dengan aksen |
| Tempa Full Ornamen | Rp 750.000 | Ornamen lengkap |

### Paket Pagar Baja Ringan

| Jenis | Harga per Meter | Keterangan |
|-------|----------------|------------|
| Baja Ringan Standar | Rp 400.000 | Ringan & tahan karat |
| Baja Ringan Premium | Rp 500.000 | Kualitas lebih baik |

## Biaya Tambahan

### 1. **Pondasi**
- Pondasi beton: Rp 150.000-300.000/meter
- Pondasi batu kali: Rp 100.000-200.000/meter

### 2. **Pengecatan**
- Cat biasa: Rp 50.000/meter (termasuk dalam harga dasar)
- Cat epoxy: Rp 75.000/meter (tambahan)
- Powder coating: Rp 100.000-150.000/meter (tambahan)

### 3. **Pintu Pagar**
- Pintu pagar sliding: Rp 2.000.000-4.000.000
- Pintu pagar dorong: Rp 2.500.000-5.000.000
- Pintu pagar otomatis: Rp 5.000.000-10.000.000

### 4. **Aksesoris**
- Gembok pagar: Rp 200.000-500.000
- Handle pintu: Rp 150.000-300.000
- Engsel premium: Rp 300.000-600.000

## Faktor yang Mempengaruhi Harga

### 1. **Tinggi Pagar**
- Pagar 1.5 meter: Harga standar
- Pagar 2 meter: +20% dari harga standar
- Pagar >2 meter: +30-50% dari harga standar

### 2. **Panjang Pagar**
- <20 meter: Harga normal
- 20-50 meter: Dapat diskon 5-10%
- >50 meter: Dapat diskon 10-15%

### 3. **Lokasi**
- Area mudah dijangkau: Harga normal
- Area sulit dijangkau: +10-20% biaya mobilisasi

### 4. **Kompleksitas Desain**
- Desain sederhana: Harga normal
- Desain kompleks: +20-30% dari harga standar

## Tips Menghemat Biaya Pagar

1. **Pilih Material yang Tepat**
   - Untuk budget terbatas: Pilih hollow 4x4 standar
   - Untuk jangka panjang: Investasi pagar tempa

2. **Desain Minimalis**
   - Desain minimalis lebih murah
   - Tetap cantik dan modern

3. **Survey Lokasi**
   - Survey gratis membantu menghitung biaya akurat
   - Hindari biaya tambahan yang tidak terduga

4. **Negosiasi untuk Proyek Besar**
   - Proyek >50 meter bisa dapat diskon
   - DP 50% biasanya cukup

## Contoh Perhitungan Biaya

**Contoh**: Pagar rumah 30 meter, tinggi 2 meter, material hollow 4x6

- Material & jasa: 30m × Rp 400.000 = Rp 12.000.000
- Pondasi: 30m × Rp 200.000 = Rp 6.000.000
- Pengecatan: 30m × Rp 50.000 = Rp 1.500.000
- **Total**: Rp 19.500.000

*Harga dapat berubah sesuai kondisi lapangan*

## Konsultasi Harga Gratis

**[Bengkel Las Mandiri](https://lasbekasi.com/kontak-bengkel-las-bekasi)** menyediakan konsultasi harga gratis untuk membantu Anda merencanakan budget:

- ✅ **Survey GRATIS** - Pengukuran akurat
- ✅ **RAB Lengkap** - Rincian biaya transparan
- ✅ **Konsultasi Material** - Rekomendasi sesuai budget
- ✅ **Harga Kompetitif** - Tanpa biaya tersembunyi

## Hubungi Kami

📱 **WhatsApp**: 0852-1207-8467
🌐 **Website**: [lasbekasi.com](https://lasbekasi.com)
📍 **Alamat**: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320

Lihat [Portfolio Pagar Minimalis](https://lasbekasi.com/album-bengkel-las-mandiri) kami untuk inspirasi desain, atau kunjungi [Jasa Las Pagar Bekasi](https://lasbekasi.com/jasa-las-pagar-bekasi) untuk informasi lengkap.
      `
    },
    'tukang-las-pintu-besi-minimalis-bekasi': {
      slug: 'tukang-las-pintu-besi-minimalis-bekasi',
      title: 'Tukang Las Pintu Besi Minimalis Bekasi - Profesional & Terpercaya',
      category: 'Jasa Las',
      date: '23 November 2025',
      author: 'Maman Toha',
      metaDescription: 'Tukang las pintu besi minimalis Bekasi profesional. Jasa pembuatan pintu besi minimalis dengan harga murah dan material berkualitas. Hubungi 0852-1207-8467.',
      content: `
# Tukang Las Pintu Besi Minimalis Bekasi - Profesional & Terpercaya

Pintu besi minimalis menjadi pilihan populer untuk rumah modern karena desainnya yang elegan, kuat, dan tahan lama. **Bengkel Las Mandiri** menyediakan jasa tukang las pintu besi minimalis Bekasi dengan pengalaman 30+ tahun dan material berkualitas SNI.

## Key Points

- ✅ **Desain Minimalis Modern** - Pintu besi dengan desain clean dan elegan
- ✅ **Material Berkualitas SNI** - Besi hollow atau tempa dengan ketebalan optimal
- ✅ **Finishing Premium** - Cat epoxy atau powder coating tahan cuaca
- ✅ **Harga Kompetitif** - Mulai Rp 2.500.000 per pintu
- ✅ **Pengerjaan Cepat** - 3-5 hari kerja untuk 1 pintu
- ✅ **Garansi Resmi** - Garansi konstruksi dan finishing

Untuk informasi lengkap tentang [jasa pembuatan pintu besi](https://lasbekasi.com/layanan-las-bekasi/jasa-pembuatan-pintu-besi-bekasi), kunjungi halaman layanan kami.
      `
    },
    'bengkel-las-relling-balkon-minimalis-bekasi': {
      slug: 'bengkel-las-relling-balkon-minimalis-bekasi',
      title: 'Bengkel Las Relling Balkon Minimalis Bekasi - Harga Terjangkau 2025',
      category: 'Jasa Las',
      date: '23 November 2025',
      author: 'Maman Toha',
      metaDescription: 'Bengkel las relling balkon minimalis Bekasi dengan harga terjangkau. Jasa pembuatan railing balkon minimalis modern. Hubungi 0852-1207-8467.',
      content: `
# Bengkel Las Relling Balkon Minimalis Bekasi - Harga Terjangkau 2025

Railing balkon minimalis adalah elemen penting untuk keamanan dan estetika rumah 2 lantai. **Bengkel Las Mandiri** adalah bengkel las relling balkon minimalis Bekasi terpercaya dengan pengalaman 30+ tahun mengerjakan berbagai proyek railing balkon.

## Key Points

- ✅ **Desain Minimalis Modern** - Railing balkon dengan desain clean dan modern
- ✅ **Material Stainless Steel** - Tahan karat dan tahan lama
- ✅ **Tinggi Standar Keamanan** - Sesuai standar SNI untuk keamanan
- ✅ **Harga Terjangkau** - Mulai Rp 400.000 per meter
- ✅ **Pengerjaan Profesional** - Tim ahli dengan pengalaman puluhan tahun
- ✅ **Survey GRATIS** - Survey lokasi gratis untuk wilayah Bekasi

Lihat [jasa pembuatan railing balkon](https://lasbekasi.com/layanan-las-bekasi/jasa-pembuatan-railing-balkon-bekasi) untuk informasi lengkap dan [portfolio railing balkon](https://lasbekasi.com/album-bengkel-las-mandiri) untuk inspirasi desain.
      `
    },
    'jual-pagar-besi-murah-minimalis-bekasi': {
      slug: 'jual-pagar-besi-murah-minimalis-bekasi',
      title: 'Jual Pagar Besi Murah Minimalis Bekasi - Harga Terbaik 2025',
      category: 'Jasa Las',
      date: '23 November 2025',
      author: 'Maman Toha',
      metaDescription: 'Jual pagar besi murah minimalis Bekasi dengan harga terbaik 2025. Pagar besi minimalis mulai Rp 350.000/meter. Konsultasi gratis hubungi 0852-1207-8467.',
      content: `
# Jual Pagar Besi Murah Minimalis Bekasi - Harga Terbaik 2025

Mencari **pagar besi murah minimalis Bekasi** dengan kualitas terbaik? Bengkel Las Mandiri menjual dan memasang pagar besi minimalis dengan harga kompetitif mulai Rp 350.000 per meter. Kami menggunakan material berkualitas SNI dan pengerjaan profesional.

## Key Points

- ✅ **Harga Terjangkau** - Mulai Rp 350.000/meter untuk pagar hollow minimalis
- ✅ **Material SNI** - Besi hollow atau tempa berkualitas tinggi
- ✅ **Desain Minimalis** - Clean, modern, dan mudah dirawat
- ✅ **Pemasangan Profesional** - Tim ahli dengan pengalaman 30+ tahun
- ✅ **Finishing Berkualitas** - Cat epoxy atau powder coating tahan cuaca
- ✅ **Survey GRATIS** - Survey lokasi gratis untuk wilayah Bekasi

Kunjungi [jasa las pagar Bekasi](https://lasbekasi.com/jasa-las-pagar-bekasi) untuk informasi lengkap atau [portfolio pagar minimalis](https://lasbekasi.com/album-bengkel-las-mandiri) untuk melihat hasil pekerjaan kami.
      `
    }
  }

  const post = slug ? blogPosts[slug] : null

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

  const postUrl = `https://lasbekasi.com/blog/${post.slug}`

  // Generate structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Las Mandiri",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lasbekasi.com/og-image.jpg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  }

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{post.title} - Blog Bengkel Las Mandiri</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={`${post.category}, jasa las bekasi, bengkel las, ${post.title}`} />
        
        {/* Robots Meta Tags - Critical for indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://lasbekasi.com/og-image.jpg" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Bengkel Las Mandiri" />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        
        {/* Canonical URL - Must match actual URL exactly */}
        <link rel="canonical" href={postUrl} />
        
        {/* BreadcrumbList Schema for Better Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://lasbekasi.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://lasbekasi.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": postUrl
              }
            ]
          })}
        </script>
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                return <h2 key={index} className="content-h2">{trimmedLine.substring(2)}</h2>
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

          {/* CTA Card with Countdown */}
          <BlogCTACard />

          {/* Internal Linking Section for SEO */}
          <div className="blog-related-links">
            <h3>Layanan Terkait</h3>
            <div className="related-links-grid">
              <Link to="/layanan-las-bekasi" className="related-link">
                Layanan Las Bekasi
              </Link>
              <Link to="/jasa-las-kanopi-bekasi" className="related-link">
                Jasa Las Kanopi Bekasi
              </Link>
              <Link to="/jasa-las-pagar-bekasi" className="related-link">
                Jasa Las Pagar Bekasi
              </Link>
              <Link to="/jasa-las-tralis-bekasi" className="related-link">
                Jasa Las Tralis Bekasi
              </Link>
              <Link to="/kontak-bengkel-las-bekasi" className="related-link">
                Kontak Bengkel Las Bekasi
              </Link>
              <Link to="/tentang-kami" className="related-link">
                Tentang Bengkel Las Mandiri
              </Link>
            </div>
          </div>

          {/* Author Card */}
          <AuthorCard />
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogPost

