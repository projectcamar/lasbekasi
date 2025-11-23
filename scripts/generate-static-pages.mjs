#!/usr/bin/env node
/**
 * 🔧 Generate Static HTML Pages for All Routes
 * 
 * Solusi untuk masalah H1 missing di React SPA
 * Generate static HTML untuk setiap route dengan H1 tag yang proper
 * 
 * Usage: npm run generate-static-pages
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')
const publicDir = join(rootDir, 'public')

// All routes with their H1 titles
const routes = {
  '/': {
    h1: 'Bengkel Las Bekasi #1 - Bengkel Las Mandiri',
    title: 'Bengkel Las Bekasi | Jasa Las Besi & Kanopi Terdekat #1',
    description: 'Bengkel Las Bekasi terpercaya sejak 1999. Jasa las pagar, kanopi, tralis & konstruksi baja. Harga murah, material SNI, garansi.'
  },
  '/layanan-las-bekasi': {
    h1: 'Layanan Bengkel Las Bekasi',
    title: 'Jasa Las Bekasi - Layanan Bengkel Las Profesional & Terpercaya',
    description: 'Bengkel Las Mandiri menyediakan berbagai jasa las profesional di Bekasi: kanopi minimalis, pagar besi, teralis jendela, konstruksi baja.'
  },
  '/tentang-kami': {
    h1: 'Tentang Kami - Bengkel Las Mandiri Bekasi',
    title: 'Tentang Kami - Bengkel Las Mandiri Bekasi | Pengalaman 20+ Tahun',
    description: 'Bengkel Las Mandiri adalah penyedia jasa las profesional di Bekasi sejak 1999. Dipimpin Pak Maman Toha dengan pengalaman 20+ tahun.'
  },
  '/kontak-bengkel-las-bekasi': {
    h1: 'Kontak Kami - Bengkel Las Mandiri Bekasi',
    title: 'Kontak Bengkel Las Mandiri Bekasi | Hubungi Kami Sekarang',
    description: 'Hubungi Bengkel Las Mandiri di Bekasi. Telepon: 0852-1207-8467. Alamat: Jl. Raya Setu Cibitung - Bekasi.'
  },
  '/album-bengkel-las-mandiri': {
    h1: 'Katalog Produk - Album Bengkel Las Mandiri Bekasi',
    title: 'Katalog Produk - Album Bengkel Las Mandiri Bekasi | Furniture Industrial',
    description: 'Lihat katalog produk furniture industrial Bengkel Las Mandiri: meja industrial, rak besi, kursi besi, lemari industrial.'
  },
  '/blog': {
    h1: 'Blog Bengkel Las Mandiri',
    title: 'Blog Bengkel Las Mandiri - Tips & Panduan Konstruksi Baja',
    description: 'Blog Bengkel Las Mandiri berisi tips, panduan, dan informasi terbaru seputar konstruksi baja, kanopi, pagar, dan jasa las profesional.'
  },
  '/jasa-las-kanopi-bekasi': {
    h1: 'Jasa Las Kanopi Bekasi | Harga Kanopi Baja Ringan Per Meter 2025',
    title: 'Jasa Las Kanopi Bekasi | Harga Kanopi Baja Ringan Per Meter 2025',
    description: 'Jasa las kanopi Bekasi profesional. Harga kanopi baja ringan per meter terbaru 2025. Material SNI, garansi resmi. Hubungi 0852-1207-8467.'
  },
  '/jasa-las-pagar-bekasi': {
    h1: 'Jasa Las Pagar Bekasi | Harga Pagar Besi Per Meter Terbaru 2025',
    title: 'Jasa Las Pagar Bekasi | Harga Pagar Besi Per Meter Terbaru 2025',
    description: 'Jasa las pagar Bekasi profesional. Harga pagar besi per meter terbaru 2025. Material SNI, garansi resmi. Hubungi 0852-1207-8467.'
  },
  '/jasa-las-tralis-bekasi': {
    h1: 'Jasa Las Tralis Bekasi | Harga Tralis Jendela Anti Maling Per Meter 2025',
    title: 'Jasa Las Tralis Bekasi | Harga Tralis Jendela Anti Maling Per Meter 2025',
    description: 'Jasa las tralis Bekasi profesional. Harga tralis jendela anti maling per meter 2025. Material SNI, garansi resmi. Hubungi 0852-1207-8467.'
  },
  '/bengkel-las-jakarta': {
    h1: 'Bengkel Las Jakarta | Jasa Las Besi & Kanopi Terdekat #1',
    title: 'Bengkel Las Jakarta | Jasa Las Besi & Kanopi Terdekat #1',
    description: 'Bengkel Las Jakarta terpercaya. Jasa las besi & kanopi terdekat. Harga murah, material SNI, garansi. Hubungi 0852-1207-8467.'
  }
}

// Service detail pages
const serviceRoutes = [
  'jasa-pembuatan-kanopi-bekasi',
  'jasa-pembuatan-konstruksi-baja-bekasi',
  'jasa-pembuatan-pagar-besi-bekasi',
  'jasa-pembuatan-railing-tangga-bekasi',
  'jasa-pembuatan-teralis-bekasi',
  'jasa-pembuatan-bike-rack-bekasi',
  'jasa-pembuatan-pintu-dorong-bekasi',
  'jasa-pembuatan-pintu-kayu-ulin-bekasi',
  'jasa-pembuatan-railing-balkon-bekasi',
  'jasa-pembuatan-pintu-besi-bekasi',
  'jasa-pembuatan-pintu-kasa-nyamuk-bekasi',
  'jasa-pembuatan-teralis-jendela-bekasi',
  'jasa-pembuatan-teralis-pintu-bekasi',
  'jasa-pembuatan-pintu-henderson-bekasi',
  'jasa-pembuatan-pintu-lipat-bekasi',
  'jasa-pembuatan-tangga-putar-bekasi',
  'jasa-pembuatan-menara-tangki-air-bekasi',
  'jasa-pembuatan-pintu-garasi-sliding-bekasi',
  'jasa-pembuatan-tempat-tidur-besi-bekasi',
  'jasa-konstruksi-baja-bekasi'
]

// Blog post routes
const blogPosts = [
  'cari-bengkel-las-bekasi',
  'jasa-tukang-las-cikarang',
  'model-kanopi-rumah-minimalis',
  'harga-pagar-besi-minimalis-bekasi',
  'tukang-las-kanopi-setu-bekasi',
  'jasa-tukang-las-setu',
  'tukang-las-pintu-besi-minimalis-bekasi',
  'jual-pagar-besi-murah-minimalis-bekasi',
  'cara-memilih-bengkel-las-yang-bagus',
  'tips-memilih-tukang-las',
  'perbedaan-las-listrik-dan-las-karbit',
  'cara-perawatan-pagar-besi',
  'biaya-pembuatan-pagar-rumah-bekasi',
  'model-pagar-besi-minimalis-terbaru',
  'jenis-jenis-pagar-besi-yang-populer',
  'kelebihan-pagar-besi-dibanding-kayu',
  'ide-desain-pagar-minimalis',
  'inspirasi-pagar-industrial',
  'cara-pasang-kanopi-baja-ringan',
  'bengkel-las-relling-balkon-minimalis-bekasi',
  'jasa-kanopi-bekasi',
  'tukang-las-listrik-bekasi-murah',
  'jasa-tukang-las-bekasi',
  'cari-bengkel-las-bekasi'
]

/**
 * Generate static HTML for a route
 */
function generateStaticHTML(route, pageData) {
  const path = route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '-')
  const h1 = pageData.h1 || pageData.title || 'Bengkel Las Mandiri'
  const title = pageData.title || h1
  const description = pageData.description || 'Bengkel Las Mandiri - Jasa Las Profesional Bekasi'
  
  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://lasbekasi.com${route}" />
  <script>
    // Redirect to React app immediately if JavaScript enabled
    (function() {
      window.location.href = window.location.pathname + window.location.search + window.location.hash;
    })();
  </script>
</head>
<body>
  <!-- Static H1 for crawlers -->
  <h1 style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;">${h1}</h1>
  
  <!-- Visible content for crawlers without JS -->
  <div style="padding: 20px; max-width: 1200px; margin: 0 auto; font-family: system-ui, sans-serif;">
    <h1>${h1}</h1>
    <p>${description}</p>
    <p><a href="https://lasbekasi.com${route}">Lihat halaman lengkap</a></p>
  </div>
  
  <!-- React app will replace this -->
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`
}

/**
 * Main function
 */
async function main() {
  console.log('🔧 Generating static HTML pages...\n')
  
  // Generate for main routes
  for (const [route, pageData] of Object.entries(routes)) {
    const html = generateStaticHTML(route, pageData)
    const fileName = route === '/' ? 'index.html' : `${route.replace(/^\//, '').replace(/\//g, '-')}.html`
    const filePath = join(publicDir, fileName)
    
    // For nested routes, create directory
    if (route.includes('/') && route !== '/') {
      const dir = dirname(filePath)
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }
    }
    
    writeFileSync(filePath, html, 'utf-8')
    console.log(`✅ Generated: ${fileName}`)
  }
  
  // Generate for service detail pages
  for (const serviceSlug of serviceRoutes) {
    const route = `/layanan-las-bekasi/${serviceSlug}`
    const serviceName = serviceSlug
      .replace(/^jasa-pembuatan-/, '')
      .replace(/^jasa-/, '')
      .replace(/-bekasi$/, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    
    const html = generateStaticHTML(route, {
      h1: `Jasa ${serviceName} Bekasi - Bengkel Las Mandiri`,
      title: `Jasa ${serviceName} Bekasi - Bengkel Las Mandiri`,
      description: `Jasa ${serviceName} Bekasi profesional. Harga kompetitif, material SNI, garansi resmi. Hubungi 0852-1207-8467.`
    })
    
    const dirPath = join(publicDir, 'layanan-las-bekasi')
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true })
    }
    
    const fileName = `${serviceSlug}.html`
    const filePath = join(dirPath, fileName)
    writeFileSync(filePath, html, 'utf-8')
    console.log(`✅ Generated: layanan-las-bekasi/${fileName}`)
  }
  
  // Generate for blog posts
  for (const blogSlug of blogPosts) {
    const route = `/blog/${blogSlug}`
    const postTitle = blogSlug
      .replace(/-/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    
    const html = generateStaticHTML(route, {
      h1: postTitle,
      title: `${postTitle} - Blog Bengkel Las Mandiri`,
      description: `${postTitle}. Tips dan panduan seputar konstruksi baja, kanopi, pagar, dan jasa las profesional di Bekasi.`
    })
    
    const dirPath = join(publicDir, 'blog')
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true })
    }
    
    const fileName = `${blogSlug}.html`
    const filePath = join(dirPath, fileName)
    writeFileSync(filePath, html, 'utf-8')
    console.log(`✅ Generated: blog/${fileName}`)
  }
  
  console.log(`\n🎉 Generated ${Object.keys(routes).length + serviceRoutes.length + blogPosts.length} static HTML pages!`)
  console.log('\n📝 Note: These files will be served for crawlers that don\'t execute JavaScript')
}

main().catch(console.error)


