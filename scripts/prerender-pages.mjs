import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://lasbekasi.com'

const OUTPUT_DIR = path.join(ROOT_DIR, 'dist')

const readFileSafe = async (filePath) => {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.warn(`[prerender-pages] Unable to read ${filePath}:`, error.message)
    return ''
  }
}

const loadAppAssets = async () => {
  const indexFile = path.join(ROOT_DIR, 'dist', 'index.html')
  const html = await readFileSafe(indexFile)
  if (!html) {
    console.warn('[prerender-pages] dist/index.html not found. Falling back to simple bundle links.')
    return { links: '', scripts: '' }
  }

  const linkMatches = html.match(/<link[^>]+>/g) || []
  const scriptMatches = html.match(/<script[^>]*src="[^"]+"[^>]*><\/script>/g) || []

  const allowedLinkRel = /rel="(?:stylesheet|modulepreload|preload|icon|apple-touch-icon|manifest)"/i
  const assetHrefRegex = /href="\/?assets\//i
  const assetSrcRegex = /src="\/?assets\//i
  const filteredLinks = linkMatches.filter(tag => allowedLinkRel.test(tag) || assetHrefRegex.test(tag))
  const filteredScripts = scriptMatches.filter(tag => assetSrcRegex.test(tag))

  return {
    links: filteredLinks.join('\n  '),
    scripts: filteredScripts.join('\n  ')
  }
}

const generatePageHTML = (title, description, contentHtml, canonicalUrl, assetTags) => {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Bengkel Las Mandiri">
  <meta property="og:locale" content="id_ID">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  ${assetTags.links}
  
  <style>
    /* Prerender minimal styling for SEO readability */
    body {
      font-family: 'Outfit', sans-serif;
      color: #1a1a1a;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #fbfbfa;
    }
    .prerender-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    header {
      border-bottom: 1px solid #eaeaea;
      padding: 20px 0;
      background: #ffffff;
    }
    .header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .logo {
      font-weight: 700;
      font-size: 20px;
      color: #004D2C;
      text-decoration: none;
      font-family: 'Playfair Display', serif;
    }
    nav a {
      margin-left: 20px;
      text-decoration: none;
      color: #4a4a4a;
      font-weight: 500;
    }
    nav a:hover {
      color: #004D2C;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      color: #004D2C;
      margin-bottom: 20px;
    }
    footer {
      background: #111;
      color: #ccc;
      padding: 40px 0;
      margin-top: 60px;
      font-size: 14px;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
    }
    .footer-section h3 {
      color: #fff;
      margin-bottom: 15px;
    }
    .cta-btn {
      display: inline-block;
      background: #004D2C;
      color: #fff;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <header>
    <div class="header-inner">
      <a href="${BASE_URL}/" class="logo">BENGKEL LAS MANDIRI</a>
      <nav>
        <a href="${BASE_URL}/">Beranda</a>
        <a href="${BASE_URL}/about">Tentang</a>
        <a href="${BASE_URL}/products">Layanan</a>
        <a href="${BASE_URL}/blog">Blog</a>
        <a href="${BASE_URL}/testimonials">Testimoni</a>
        <a href="${BASE_URL}/custom-order">Pemesanan</a>
      </nav>
    </div>
  </header>

  <div class="prerender-container" id="root">
    ${contentHtml}
  </div>

  <footer>
    <div class="footer-inner">
      <div class="footer-section">
        <h3>Bengkel Las Mandiri</h3>
        <p>Jasa Bengkel Las Besi Terpercaya #1 di Bekasi & Sekitarnya sejak 1999.</p>
        <p>Setu, Kabupaten Bekasi, Jawa Barat, Indonesia</p>
      </div>
      <div class="footer-section">
        <h3>Layanan Kami</h3>
        <p>Kanopi Minimalis & Alderon, Pagar Besi Tempa, Teralis Jendela, Railing Tangga, Konstruksi Baja WF.</p>
      </div>
    </div>
  </footer>

  <!-- React SPA Bundle Injection for client-side hydration -->
  ${assetTags.scripts}

</body>
</html>`
}

const main = async () => {
  console.log('[prerender-pages] Starting static pages pre-rendering...')

  const assetTags = await loadAppAssets()

  const pages = [
    {
      dir: 'about',
      title: 'Tentang Kami - Bengkel Las Mandiri Steel Bekasi',
      description: 'Bengkel Las Mandiri Steel telah berpengalaman lebih dari 25 tahun sejak 1999 dalam fabrikasi kanopi, pagar besi, teralis, railing, dan konstruksi baja di Bekasi.',
      canonical: `${BASE_URL}/about`,
      html: `
        <h1>Tentang Bengkel Las Mandiri Steel</h1>
        <p><strong>Mandiri Steel</strong> adalah penyedia jasa bengkel las besi dan konstruksi baja terpercaya di Bekasi. Didirikan pada tahun 1999 oleh bapak Maman Toha, kami berdedikasi tinggi untuk memberikan hasil pengerjaan besi yang kokoh, rapi, aman, dan berestetika tinggi.</p>
        <p>Dengan didukung oleh tim tukang las profesional bersertifikat dan peralatan las modern, kami melayani ribuan proyek skala kecil hingga besar di perumahan (seperti Grand Wisata, Summarecon, Harapan Indah) hingga proyek pergudangan industrial di MM2100 Cibitung dan Lippo Cikarang.</p>
        <h2>Mengapa Memilih Kami?</h2>
        <ul>
          <li><strong>Pengalaman 25+ Tahun:</strong> Keahlian las besi, tempa, stainless steel, dan konstruksi baja teruji sejak 1999.</li>
          <li><strong>Material Standar SNI:</strong> Kami menggunakan besi tebal hollow galvanis anti karat standar nasional.</li>
          <li><strong>Garansi Struktur &amp; Kebocoran:</strong> Jaminan kualitas kerja dengan garansi tertulis.</li>
          <li><strong>Survey &amp; Konsultasi Gratis:</strong> Layanan survey lokasi langsung tanpa biaya tambahan untuk area Bekasi.</li>
        </ul>
        <a href="https://wa.me/6285212078467" class="cta-btn">Konsultasi Gratis via WhatsApp</a>
      `
    },
    {
      dir: 'products',
      title: 'Layanan Bengkel Las & Fabrikasi Besi Bekasi - Mandiri Steel',
      description: 'Layanan pengerjaan besi premium dari Mandiri Steel Bekasi. Meliputi kanopi minimalis, kanopi alderon, pagar modern cutting laser, teralis jendela, railing tangga, dan mezzanine baja.',
      canonical: `${BASE_URL}/products`,
      html: `
        <h1>Layanan Fabrikasi Besi &amp; Bengkel Las Bekasi</h1>
        <p>Kami menawarkan berbagai macam pengerjaan las besi berkualitas tinggi untuk kebutuhan eksterior, interior, maupun struktur konstruksi industri Anda di Bekasi:</p>
        
        <h2>1. Kanopi Rumah &amp; Ruko</h2>
        <p>Pembuatan kanopi dengan atap Alderon UPVC, kaca tempered mewah, spandek pasir, atau polycarbonate. Pilihan rangka hollow galvanis tebal menjamin struktur yang kuat menahan beban angin dan air hujan Bekasi yang ekstrem.</p>
        
        <h2>2. Pagar Besi Minimalis &amp; Klasik</h2>
        <p>Pagar rumah modern menggunakan besi hollow galvanis anti karat, pagar cutting laser bermotif elegan, maupun pagar besi tempa klasik yang mewah dengan ornamen ukiran.</p>
        
        <h2>3. Teralis Jendela &amp; Pintu Pengaman</h2>
        <p>Teralis minimalis dari besi solid nako 10mm/12mm untuk keamanan jendela rumah Anda dari gangguan luar dengan finishing cat anti karat.</p>
        
        <h2>4. Railing Tangga &amp; Balkon</h2>
        <p>Railing pengaman tangga model minimalis (kombinasi kayu) maupun railing stainless steel 304 tahan karat permanen dengan kaca tempered.</p>
        
        <h2>5. Konstruksi Baja WF / Mezzanine</h2>
        <p>Jasa pembuatan dak mezanin dalam ruangan, konstruksi gudang, dak kanopi baja WF, dengan perhitungan beban presisi oleh ahli sipil kami.</p>
        
        <a href="https://wa.me/6285212078467" class="cta-btn">Tanyakan Estimasi Biaya</a>
      `
    },
    {
      dir: 'testimonials',
      title: 'Testimoni Kepuasan Pelanggan Bengkel Las Mandiri Steel',
      description: 'Ulasan asli pelanggan Mandiri Steel Bekasi. Kepuasan ribuan pengerjaan kanopi rumah, pagar minimalis, railing tangga, dan konstruksi mezzanine baja di Jabodetabek.',
      canonical: `${BASE_URL}/testimonials`,
      html: `
        <h1>Ulasan Pelanggan Mandiri Steel Bekasi</h1>
        <p>Kepercayaan pelanggan adalah segalanya bagi kami. Berikut beberapa testimoni jujur dari pemilik rumah, kontraktor, dan manajer pabrik yang telah mempercayakan proyek las besinya kepada kami:</p>
        
        <div style="border-left: 4px solid #004D2C; padding-left: 20px; margin: 30px 0;">
          <p><em>"Pengerjaan kanopi Alderon di rumah saya daerah Grand Wisata Tambun rapi sekali. Rangkanya kokoh dan cat semprotnya halus. Yang paling penting, setelah setahun tidak ada kebocoran sama sekali. Rekomended!"</em></p>
          <p><strong>- Bpk. Hendra, Pemilik Rumah (Tambun, Bekasi)</strong></p>
        </div>
        
        <div style="border-left: 4px solid #004D2C; padding-left: 20px; margin: 30px 0;">
          <p><em>"Pagar minimalis laser cut pesanan saya selesai tepat waktu. Desain motifnya sangat presisi sesuai gambar 3D yang saya berikan. Harganya juga sangat bersahabat dibanding bengkel las lain di Bekasi."</em></p>
          <p><strong>- Ibu Rina, Arsitek &amp; Kontraktor (Summarecon Bekasi)</strong></p>
        </div>
        
        <div style="border-left: 4px solid #004D2C; padding-left: 20px; margin: 30px 0;">
          <p><em>"Sangat puas dengan konstruksi mezzanine besi baja WF untuk gudang kami di MM2100. Pengerjaannya cepat, perhitungan strukturnya matang, dan tim las sangat profesional mengutamakan safety."</em></p>
          <p><strong>- Bpk. Joko, Operations Manager (Cibitung, Bekasi)</strong></p>
        </div>
        
        <a href="https://wa.me/6285212078467" class="cta-btn">Hubungi Kami untuk Jadwalkan Survey</a>
      `
    },
    {
      dir: 'custom-order',
      title: 'Pemesanan Kustom & Survey Gratis - Bengkel Las Bekasi',
      description: 'Kirimkan desain kustom kanopi, pagar besi, teralis, railing tangga, atau tangga putar Anda. Mandiri Steel melayani survey lokasi gratis dan estimasi biaya cepat.',
      canonical: `${BASE_URL}/custom-order`,
      html: `
        <h1>Pemesanan Kustom Las Besi Mandiri Steel</h1>
        <p>Apakah Anda memiliki desain referensi dari Pinterest, Instagram, atau gambar arsitek sendiri? Kami siap membantu mewujudkannya dengan kualitas fabrikasi terbaik.</p>
        
        <h2>Prosedur Pemesanan Cepat:</h2>
        <ol>
          <li><strong>Konsultasi Awal:</strong> Hubungi kami via WhatsApp di +62 852-1207-8467 dan kirimkan referensi desain serta ukuran kasar.</li>
          <li><strong>Survey Lokasi Gratis:</strong> Tim teknis kami akan datang langsung ke rumah atau proyek Anda di area Bekasi untuk mengukur secara presisi (100% Gratis).</li>
          <li><strong>Penawaran Harga:</strong> Kami berikan Rencana Anggaran Biaya (RAB) resmi yang transparan tanpa biaya tersembunyi.</li>
          <li><strong>Fabrikasi &amp; Pemasangan:</strong> Pengerjaan dilakukan di workshop kami, kemudian dipasang secara presisi oleh tim ahli di lokasi Anda.</li>
        </ol>
        
        <a href="https://wa.me/6285212078467" class="cta-btn">Jadwalkan Survey Lokasi Sekarang</a>
      `
    },
    {
      dir: 'partnership',
      title: 'Kemitraan Kontraktor & Desainer Interior - Mandiri Steel',
      description: 'Program kerjasama Mandiri Steel Bekasi untuk arsitek, developer, desainer interior, dan kontraktor bangunan. Jasa sub-kontrak las besi tepercaya.',
      canonical: `${BASE_URL}/partnership`,
      html: `
        <h1>Kemitraan Konstruksi Besi &amp; Bengkel Las</h1>
        <p>Mandiri Steel membuka kesempatan kolaborasi jangka panjang bagi para Arsitek, Kontraktor Utama (Main Contractor), Desainer Interior, Developer, dan Agen Properti di seluruh Jabodetabek.</p>
        
        <h2>Keuntungan Menjadi Mitra Mandiri Steel:</h2>
        <ul>
          <li><strong>Harga Sub-Kontrak Kompetitif:</strong> Margin khusus mitra yang bersahabat untuk menjaga profitabilitas proyek Anda.</li>
          <li><strong>Kualitas Fabrikasi Konsisten:</strong> Jaminan hasil kerja sesuai spesifikasi kontrak (drawing) dan standar ketebalan besi.</li>
          <li><strong>Garansi Pekerjaan Penuh:</strong> Kami meng-cover seluruh garansi perbaikan struktur besi dan kebocoran.</li>
          <li><strong>Kerahasiaan Klien Terjaga:</strong> Kami menghormati hubungan bisnis B2B dan bertindak sebagai sub-kontraktor profesional di bawah bendera Anda.</li>
        </ul>
        
        <a href="https://wa.me/6285212078467" class="cta-btn">Hubungi Divisi Kemitraan</a>
      `
    },
    {
      dir: 'bengkel-las-bekasi',
      title: 'Bengkel Las Bekasi | Jasa Las Besi &amp; Kanopi Terdekat #1',
      description: 'Layanan bengkel las terpercaya di Bekasi. Fabrikasi kanopi minimalis, pagar besi, teralis jendela, railing tangga, mezzanine baja profesional pengalaman sejak 1999.',
      canonical: `${BASE_URL}/bengkel-las-bekasi`,
      html: `
        <h1>Bengkel Las Bekasi Terdekat &amp; Terpercaya - Mandiri Steel</h1>
        <p>Mencari bengkel las terdekat di Bekasi dengan hasil rapi, besi tebal berkualitas, dan bergaransi? <strong>Mandiri Steel</strong> siap membantu Anda. Kami melayani jasa pengelasan besi berkualitas tinggi untuk wilayah Bekasi Barat, Bekasi Timur, Bekasi Utara, Tambun, Cibitung, Setu, Cikarang, dan sekitarnya.</p>
        
        <h2>Layanan Unggulan Mandiri Steel:</h2>
        <ul>
          <li><strong>Kanopi Minimalis Alderon &amp; Kaca Tempered:</strong> Meredam panas matahari dan meredam suara bising hujan.</li>
          <li><strong>Pagar Besi Cutting Laser &amp; Tempa:</strong> Menambah keamanan rumah sekaligus menaikkan estetika eksterior.</li>
          <li><strong>Teralis Pengaman Jendela:</strong> Memberikan ketenangan pikiran saat rumah ditinggal pergi.</li>
          <li><strong>Railing Tangga &amp; Balkon Minimalis:</strong> Pegangan pengaman tangga yang kuat dan estetik tinggi.</li>
          <li><strong>Konstruksi Baja WF &amp; Mezanin Gudang:</strong> Fabrikasi mezzanine besi untuk efisiensi ruang gudang/kantor Anda.</li>
        </ul>
        
        <h2>Area Layanan Kami di Bekasi:</h2>
        <p>Kami melayani survey lokasi gratis dan pemasangan langsung di seluruh wilayah Bekasi:</p>
        <ul>
          <li>Kecamatan Setu (Lubangbuaya, Ciledug, Cibening, Cikarageman, dll.)</li>
          <li>Kecamatan Tambun Selatan &amp; Utara (Grand Wisata, Mangunjaya, Sumberjaya, dll.)</li>
          <li>Kecamatan Cibitung (Kawasan MM2100, Wanasari, dll.)</li>
          <li>Cikarang (Lippo Cikarang, Jababeka, Delta Silicon, dll.)</li>
          <li>Summarecon Bekasi, Harapan Indah, Grand Galaxy, Kranji, Pekayon, Jatiasih, Pondok Gede.</li>
        </ul>
        
        <a href="https://wa.me/6285212078467" class="cta-btn">Dapatkan Penawaran Harga Gratis</a>
      `
    }
  ]

  for (const page of pages) {
    try {
      const pageDir = path.join(OUTPUT_DIR, page.dir)
      await fs.mkdir(pageDir, { recursive: true })

      const html = generatePageHTML(page.title, page.description, page.html, page.canonical, assetTags)
      const htmlPath = path.join(pageDir, 'index.html')
      await fs.writeFile(htmlPath, html, 'utf8')

      console.log(`[prerender-pages] ✅ Generated pre-rendered page: /${page.dir}/index.html`)
    } catch (error) {
      console.error(`[prerender-pages] ❌ Failed to generate pre-rendered page for ${page.dir}:`, error.message)
    }
  }

  console.log('[prerender-pages] 🎉 Main pages pre-rendering complete!')
}

main().catch((error) => {
  console.error('[prerender-pages] Failed to pre-render pages:', error)
  process.exitCode = 1
})
