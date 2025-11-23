#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * 
 * Script ini akan generate semua sitemap files secara otomatis:
 * - page-sitemap.xml (halaman utama)
 * - service-sitemap.xml (halaman layanan detail)
 * - post-sitemap.xml (blog posts)
 * - sitemap.xml (sitemap index)
 * 
 * Usage: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '../public');

// Base URL
const BASE_URL = 'https://lasbekasi.com';

// Get current date in ISO format
const getCurrentDate = () => {
  return new Date().toISOString();
};

// Get date based on changefreq
// - daily: current date
// - weekly: current week (Monday of current week)
// - monthly: first day of current month
const getDateByChangeFreq = (changefreq) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  switch (changefreq) {
    case 'daily':
      return `${year}-${month}-${day}T00:00:00.000Z`;
    case 'weekly':
      // Get Monday of current week
      const dayOfWeek = now.getDay();
      const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust when day is Sunday
      const monday = new Date(now.setDate(diff));
      const weekYear = monday.getFullYear();
      const weekMonth = String(monday.getMonth() + 1).padStart(2, '0');
      const weekDay = String(monday.getDate()).padStart(2, '0');
      return `${weekYear}-${weekMonth}-${weekDay}T00:00:00.000Z`;
    case 'monthly':
    default:
      return `${year}-${month}-01T00:00:00.000Z`;
  }
};

// Format date for monthly updates (first day of current month) - kept for backward compatibility
const getMonthlyDate = () => {
  return getDateByChangeFreq('monthly');
};

// Generate XML URL entry
const generateUrlEntry = (loc, lastmod, changefreq = 'monthly', priority = '0.8') => {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

// Generate page sitemap
const generatePageSitemap = () => {
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/jasa-las-bekasi', priority: '0.9', changefreq: 'weekly' },
    { path: '/layanan-las-bekasi', priority: '0.9', changefreq: 'weekly' },
    { path: '/tentang-kami', priority: '0.8', changefreq: 'monthly' },
    { path: '/album-bengkel-las-mandiri', priority: '0.7', changefreq: 'monthly' },
    { path: '/kontak-bengkel-las-bekasi', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    // SEO Landing Pages
    { path: '/jasa-las-pagar-bekasi', priority: '0.9', changefreq: 'weekly' },
    { path: '/jasa-las-kanopi-bekasi', priority: '0.9', changefreq: 'weekly' },
    { path: '/jasa-las-tralis-bekasi', priority: '0.9', changefreq: 'weekly' },
    { path: '/bengkel-las-jakarta', priority: '0.8', changefreq: 'weekly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
${generateUrlEntry(`${BASE_URL}${pages[0].path}`, getDateByChangeFreq(pages[0].changefreq), pages[0].changefreq, pages[0].priority)}
  
  <!-- Main Pages -->
`;

  for (let i = 1; i < pages.length; i++) {
    const page = pages[i];
    const comment = i === 7 ? '\n  <!-- SEO Landing Pages -->' : '';
    xml += `${comment}${comment ? '\n' : ''}${generateUrlEntry(`${BASE_URL}${page.path}`, getDateByChangeFreq(page.changefreq), page.changefreq, page.priority)}
`;
  }

  xml += `</urlset>`;

  return xml;
};

// Generate service sitemap
const generateServiceSitemap = () => {
  const services = [
    'kanopi',
    'konstruksi-baja',
    'pagar-besi',
    'railing-tangga',
    'teralis',
    'bike-rack',
    'pintu-dorong',
    'pintu-kayu-ulin',
    'railing-balkon',
    'pintu-besi',
    'pintu-kasa-nyamuk',
    'teralis-jendela',
    'teralis-pintu',
    'pintu-henderson',
    'pintu-lipat',
    'tangga-putar',
    'menara-tangki-air',
    'pintu-garasi-sliding',
    'tempat-tidur-besi',
  ];

  const lastmod = getMonthlyDate();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Service Detail Pages -->
`;

  services.forEach(service => {
    const url = `${BASE_URL}/layanan-las-bekasi/jasa-pembuatan-${service}-bekasi`;
    xml += generateUrlEntry(url, lastmod, 'monthly', '0.8') + '\n';
  });

  xml += `</urlset>`;

  return xml;
};

// Generate post sitemap
const generatePostSitemap = () => {
  // Blog posts dengan tanggal publish mereka
  const blogPosts = [
    { slug: 'cara-memilih-bengkel-las-yang-bagus', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'perbedaan-las-listrik-dan-las-karbit', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'jenis-jenis-pagar-besi-yang-populer', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'cara-pasang-kanopi-baja-ringan', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'tips-memilih-tukang-las', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'kelebihan-pagar-besi-dibanding-kayu', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'cara-perawatan-pagar-besi', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'ide-desain-pagar-minimalis', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'model-kanopi-rumah-minimalis', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'inspirasi-pagar-industrial', date: '2025-10-16T00:00:00.000Z' },
    { slug: 'jasa-tukang-las-bekasi', date: '2025-10-11T00:00:00.000Z' },
    { slug: 'jasa-tukang-las-cikarang', date: '2025-10-11T00:00:00.000Z' },
    { slug: 'jasa-tukang-las-setu', date: '2025-10-11T00:00:00.000Z' },
    { slug: 'jasa-kanopi-bekasi', date: '2025-01-15T00:00:00.000Z' },
    { slug: 'cari-bengkel-las-bekasi', date: '2025-10-11T00:00:00.000Z' },
    // New articles - November 2025
    { slug: 'tukang-las-listrik-bekasi-murah', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'biaya-pembuatan-pagar-rumah-bekasi', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'model-pagar-besi-minimalis-terbaru', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'tukang-las-kanopi-setu-bekasi', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'harga-pagar-besi-minimalis-bekasi', date: '2025-11-23T00:00:00.000Z' },
    // New articles with reusable components - November 2025
    { slug: 'tukang-las-pintu-besi-minimalis-bekasi', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'bengkel-las-relling-balkon-minimalis-bekasi', date: '2025-11-23T00:00:00.000Z' },
    { slug: 'jual-pagar-besi-murah-minimalis-bekasi', date: '2025-11-23T00:00:00.000Z' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Blog Posts -->
`;

  blogPosts.forEach(post => {
    const url = `${BASE_URL}/blog/${post.slug}`;
    xml += generateUrlEntry(url, post.date, 'monthly', '0.7') + '\n';
  });

  xml += `</urlset>`;

  return xml;
};

// Generate sitemap index
const generateSitemapIndex = () => {
  // Update sitemap index daily to ensure Google always checks for updates
  const lastmod = getDateByChangeFreq('daily');
  const sitemaps = [
    { loc: 'post-sitemap.xml', lastmod },
    { loc: 'page-sitemap.xml', lastmod },
    { loc: 'service-sitemap.xml', lastmod },
    { loc: 'attachment-sitemap.xml', lastmod },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  sitemaps.forEach(sitemap => {
    xml += `  <sitemap>
    <loc>${BASE_URL}/${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>
`;
  });

  xml += `</sitemapindex>`;

  return xml;
};

// Main function
const main = () => {
  console.log('🚀 Generating sitemaps...\n');

  try {
    // Generate page sitemap
    const pageSitemap = generatePageSitemap();
    writeFileSync(join(publicDir, 'page-sitemap.xml'), pageSitemap, 'utf-8');
    console.log('✅ Generated: page-sitemap.xml');

    // Generate service sitemap
    const serviceSitemap = generateServiceSitemap();
    writeFileSync(join(publicDir, 'service-sitemap.xml'), serviceSitemap, 'utf-8');
    console.log('✅ Generated: service-sitemap.xml');

    // Generate post sitemap
    const postSitemap = generatePostSitemap();
    writeFileSync(join(publicDir, 'post-sitemap.xml'), postSitemap, 'utf-8');
    console.log('✅ Generated: post-sitemap.xml');

    // Generate sitemap index
    const sitemapIndex = generateSitemapIndex();
    writeFileSync(join(publicDir, 'sitemap.xml'), sitemapIndex, 'utf-8');
    console.log('✅ Generated: sitemap.xml');

    console.log('\n✨ All sitemaps generated successfully!');
    console.log(`📅 Last modified: ${getCurrentDate()}`);
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
};

// Run the script
main();

