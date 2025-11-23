# Sitemap Generator

Script untuk generate sitemap secara otomatis untuk website Bengkel Las Mandiri.

## Fitur

- ✅ Generate semua sitemap files secara otomatis
- ✅ Update tanggal `lastmod` otomatis berdasarkan `changefreq`
  - **Daily**: Update setiap hari
  - **Weekly**: Update setiap minggu (Monday of current week)
  - **Monthly**: Update setiap bulan (first day of month)
- ✅ Support untuk pages, services, dan blog posts
- ✅ Auto-generate sebelum build (via prebuild hook)
- ✅ **Auto-update harian** via GitHub Actions atau Vercel Cron

## Cara Menggunakan

### Generate Sitemap Manual

```bash
npm run generate-sitemap
```

atau

```bash
node scripts/generate-sitemap.mjs
```

### Auto-Generate Sebelum Build

Script akan otomatis dijalankan sebelum build karena sudah ada `prebuild` hook di `package.json`:

```bash
npm run build
```

## Auto-Update Harian

Sitemap akan otomatis ter-update setiap hari melalui:

### 1. GitHub Actions (Recommended)
- File: `.github/workflows/update-sitemap.yml`
- Schedule: Setiap hari jam 9 pagi WIB (2 AM UTC)
- Akan commit dan push perubahan sitemap ke repository
- Vercel akan auto-deploy setelah push

### 2. Vercel Cron Jobs (Alternative)
- File: `api/cron/update-sitemap.js`
- Schedule: Setiap hari jam 9 pagi WIB (2 AM UTC)
- Perlu setup `CRON_SECRET` di Vercel environment variables

## Files yang Dihasilkan

Script ini akan generate 4 file sitemap di folder `public/`:

1. **sitemap.xml** - Sitemap index (main sitemap) - **Update Daily**
2. **page-sitemap.xml** - Halaman utama (home, about, services, contact, dll) - **Update Weekly/Monthly**
3. **service-sitemap.xml** - Halaman detail layanan (19 services) - **Update Monthly**
4. **post-sitemap.xml** - Blog posts - **Update Monthly** (menggunakan tanggal publish asli)

## Update Logic Berdasarkan Changefreq

Script secara otomatis menentukan tanggal `lastmod` berdasarkan `changefreq`:

- **daily** → Tanggal hari ini
- **weekly** → Monday of current week
- **monthly** → First day of current month

Ini memastikan Google selalu tahu kapan halaman terakhir di-update sesuai dengan frekuensi perubahan konten.

## Menambah Konten Baru

### Menambah Service Baru

Edit file `scripts/generate-sitemap.mjs`, tambahkan service slug di array `services`:

```javascript
const services = [
  'kanopi',
  'konstruksi-baja',
  // ... services lainnya
  'service-baru', // ← tambahkan di sini
];
```

### Menambah Blog Post Baru

Edit file `scripts/generate-sitemap.mjs`, tambahkan blog post di array `blogPosts`:

```javascript
const blogPosts = [
  { slug: 'slug-blog-post', date: '2025-01-15T00:00:00.000Z' },
  // ... posts lainnya
  { slug: 'blog-post-baru', date: '2025-11-23T00:00:00.000Z' }, // ← tambahkan di sini
];
```

### Menambah Page Baru

Edit file `scripts/generate-sitemap.mjs`, tambahkan page di array `pages`:

```javascript
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  // ... pages lainnya
  { path: '/halaman-baru', priority: '0.8', changefreq: 'monthly' }, // ← tambahkan di sini
];
```

## Setup GitHub Actions (Jika Belum)

1. Pastikan repository sudah di-push ke GitHub
2. GitHub Actions akan otomatis aktif setelah file `.github/workflows/update-sitemap.yml` di-push
3. Workflow akan berjalan setiap hari jam 9 pagi WIB
4. Jika ada perubahan sitemap, akan otomatis commit dan push
5. Vercel akan auto-deploy setelah ada push baru

## Setup Vercel Cron (Alternative)

1. Buat environment variable `CRON_SECRET` di Vercel dashboard
2. Generate random secret: `openssl rand -hex 32`
3. Tambahkan ke Vercel environment variables
4. Vercel akan otomatis menjalankan cron job sesuai schedule di `vercel.json`

## Catatan

- Pastikan semua URL menggunakan base URL yang benar: `https://lasbekasi.com`
- Setelah generate sitemap, submit ke Google Search Console untuk indexing
- Sitemap akan otomatis di-update setiap hari via GitHub Actions
- Sitemap index di-update **daily** untuk memastikan Google selalu check untuk update
- Pages dengan `changefreq: weekly` akan di-update setiap minggu
- Services dengan `changefreq: monthly` akan di-update setiap bulan

## Troubleshooting

### GitHub Actions tidak jalan
- Pastikan file `.github/workflows/update-sitemap.yml` sudah di-push
- Cek Actions tab di GitHub untuk melihat log error
- Pastikan repository menggunakan `GITHUB_TOKEN` (default, tidak perlu setup)

### Vercel Cron tidak jalan
- Pastikan `CRON_SECRET` sudah di-set di environment variables
- Cek Vercel dashboard > Functions > Cron untuk melihat log
- Pastikan schedule di `vercel.json` sudah benar
