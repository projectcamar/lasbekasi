# Sitelinks Optimization Guide

Dokumentasi optimasi sitelinks untuk muncul di Google Search Results dengan 5-6 sitelinks ketika user search "Bengkel Las Bekasi" atau "Las Bekasi".

## ✅ Yang Sudah Diimplementasikan

### 1. Structured Data untuk Sitelinks

#### Organization Schema
- File: `src/utils/structuredData.ts`
- Menambahkan `alternateName: "Las Bekasi"` untuk membantu Google mengenali brand
- Menambahkan `potentialAction` dengan SearchAction untuk sitelinks searchbox

#### WebSite Schema
- Menambahkan sitelinks searchbox
- Membantu Google memahami struktur website

#### LocalBusiness Schema (Enhanced)
- Menambahkan `alternateName` array: ["Las Bekasi", "Bengkel Las Bekasi", "Jasa Las Bekasi"]
- Menambahkan `hasOfferCatalog` dengan 5 halaman penting:
  1. Jasa Las Kanopi Bekasi
  2. Jasa Las Pagar Bekasi
  3. Jasa Las Tralis Bekasi
  4. Layanan Las Bekasi
  5. Kontak Bengkel Las Bekasi

#### Main Navigation Schema
- ItemList dengan 6 halaman utama untuk membantu Google memahami struktur navigasi

#### BreadcrumbList Schema
- Ditambahkan di semua halaman penting
- Membantu Google memahami hierarki website

### 2. Halaman yang Sudah Dioptimasi

- ✅ **Home** (`/`) - Full structured data dengan semua schema
- ✅ **Services** (`/layanan-las-bekasi`) - Breadcrumb + Service schema
- ✅ **About** (`/tentang-kami`) - Breadcrumb + AboutPage schema

### 3. Breadcrumb Component

- File: `src/components/Breadcrumb.tsx`
- Sudah menggunakan microdata (itemScope, itemType, itemProp)
- Otomatis generate breadcrumb berdasarkan URL

## 📋 Checklist untuk Sitelinks

### Faktor yang Mempengaruhi Sitelinks:

1. ✅ **Structured Data** - Organization, WebSite, LocalBusiness dengan alternateName
2. ✅ **Breadcrumb Navigation** - BreadcrumbList schema di semua halaman
3. ✅ **Internal Linking** - Pastikan semua halaman penting ter-link dari homepage
4. ✅ **Site Hierarchy** - Struktur URL yang jelas dan konsisten
5. ✅ **Page Authority** - Halaman penting harus memiliki authority tinggi
6. ⏳ **User Engagement** - CTR tinggi dari search results
7. ⏳ **Domain Authority** - Domain lasbekasi.com sudah bagus

## 🎯 Halaman yang Akan Muncul di Sitelinks

Berdasarkan `hasOfferCatalog` di LocalBusiness schema, halaman berikut kemungkinan besar akan muncul:

1. **Jasa Las Kanopi Bekasi** - `/jasa-las-kanopi-bekasi`
2. **Jasa Las Pagar Bekasi** - `/jasa-las-pagar-bekasi`
3. **Jasa Las Tralis Bekasi** - `/jasa-las-tralis-bekasi`
4. **Layanan Las Bekasi** - `/layanan-las-bekasi`
5. **Kontak Bengkel Las Bekasi** - `/kontak-bengkel-las-bekasi`

Atau dari Main Navigation:
1. Beranda
2. Layanan Las Bekasi
3. Tentang Kami
4. Portfolio
5. Kontak
6. Blog

## 🔧 Langkah Selanjutnya

### 1. Update Halaman Lainnya

Tambahkan breadcrumb schema di:
- [ ] Contact page
- [ ] Portfolio page
- [ ] Blog page
- [ ] Service detail pages
- [ ] Blog post pages

### 2. Pastikan Internal Linking

- Pastikan semua halaman penting ter-link dari homepage
- Gunakan anchor text yang relevan
- Pastikan tidak ada broken links

### 3. Monitor di Google Search Console

- Cek apakah sitelinks sudah muncul
- Monitor performance
- Lihat halaman mana yang muncul di sitelinks

### 4. Optimasi Tambahan

- Pastikan semua halaman penting memiliki konten berkualitas
- Pastikan loading speed cepat
- Pastikan mobile-friendly
- Pastikan semua halaman ter-index

## 📊 Testing

### Validasi Structured Data

1. Gunakan [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test URL: `https://lasbekasi.com/`
3. Pastikan semua schema terdeteksi

### Validasi Breadcrumb

1. Test di [Schema.org Validator](https://validator.schema.org/)
2. Pastikan BreadcrumbList valid
3. Pastikan semua URL accessible

## ⏱️ Timeline

- **Week 1-2**: Google mulai crawl dan memahami structured data
- **Week 3-4**: Sitelinks mulai muncul (jika semua faktor terpenuhi)
- **Month 2-3**: Sitelinks stabil dan konsisten

## 📝 Catatan Penting

1. **Sitelinks adalah otomatis** - Google yang menentukan halaman mana yang muncul
2. **Tidak bisa force** - Kita hanya bisa optimize, tidak bisa control
3. **Perlu waktu** - Butuh beberapa minggu/bulan untuk muncul
4. **Domain authority penting** - lasbekasi.com sudah bagus
5. **User engagement** - CTR tinggi membantu

## 🚀 Quick Win Tips

1. **Pastikan homepage link ke semua halaman penting** dengan anchor text yang jelas
2. **Gunakan internal linking** di setiap artikel/blog post
3. **Update konten secara berkala** untuk menunjukkan website aktif
4. **Pastikan semua halaman ter-index** di Google Search Console
5. **Monitor dan optimize** berdasarkan data Google Search Console

---

**Last Updated**: 23 November 2025

