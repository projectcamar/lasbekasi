#!/usr/bin/env node
/**
 * Auto Blog Generator - 3 articles/day, no duplicates
 * Tracks used topics in ~/cron-blog/used-topics.json
 */
import fetch from 'node-fetch';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_FILE = join(__dirname, 'used-topics.json');
const ARTICLES_PER_RUN = 3;
const DELAY_BETWEEN_MS = 15000; // 15s between API calls

const CFG = {
  API:    process.env.VERCEL_API_BASE    || 'https://lasbekasi.com',
  GROQ:   process.env.GROQ_API_KEY       || '',
  UNSPLASH: process.env.UNSPLASH_ACCESS_KEY || '',
  GH_TOKEN: process.env.GITHUB_TOKEN     || '',
  GH_REPO:  process.env.GITHUB_REPO      || 'projectcamar/lasbekasi',
  GH_BRANCH: process.env.GITHUB_BRANCH   || 'main',
  BLUESMINDS: process.env.BLUESMINDS_API_KEY || '',
};

// ─── 90 UNIQUE TOPICS (enough for 30 days × 3/day) ──────────────────────────
const ALL_TOPICS = [
  // Canopy Guide (15)
  { prompt: 'Panduan lengkap memilih kanopi minimalis untuk rumah di Bekasi: jenis atap, rangka, dan estimasi harga 2025', category: 'Canopy Guide' },
  { prompt: 'Kanopi Alderon vs Polycarbonate vs Spandek: perbandingan ketahanan, harga, dan estetika untuk rumah tropis Bekasi', category: 'Canopy Guide' },
  { prompt: 'Cara merawat kanopi besi agar tidak berkarat di iklim tropis Bekasi: tips dari tukang las profesional', category: 'Canopy Guide' },
  { prompt: 'Desain kanopi carport modern untuk perumahan Grand Wisata Tambun dan Summarecon Bekasi', category: 'Canopy Guide' },
  { prompt: 'Kanopi kaca tempered untuk teras belakang rumah: kelebihan, risiko, dan tips pemasangan di Bekasi', category: 'Canopy Guide' },
  { prompt: 'Harga pasang kanopi per meter di Bekasi 2025: rincian biaya material dan jasa', category: 'Canopy Guide' },
  { prompt: 'Kanopi minimalis untuk ruko dan toko di Cikarang: solusi perlindungan bisnis dari hujan dan panas', category: 'Canopy Guide' },
  { prompt: 'Kenapa kanopi hollow galvanis lebih tahan lama? Analisis material untuk iklim Bekasi', category: 'Canopy Guide' },
  { prompt: 'Inspirasi desain kanopi teras rumah 2025: minimalis, industrial, dan klasik untuk rumah di Bekasi', category: 'Canopy Guide' },
  { prompt: 'Kanopi atap alderon untuk area kolam renang: panduan waterproof dan anti UV di Bekasi', category: 'Canopy Guide' },
  { prompt: 'Perbedaan kanopi baja ringan vs baja berat: mana yang cocok untuk rumah 2 lantai di Bekasi?', category: 'Canopy Guide' },
  { prompt: 'Tips memilih warna kanopi yang cocok dengan cat rumah: panduan harmoni desain eksterior', category: 'Canopy Guide' },
  { prompt: 'Kanopi lipat dan kanopi retractable: solusi modern untuk teras multifungsi di perumahan Bekasi', category: 'Canopy Guide' },
  { prompt: 'Kesalahan umum saat pasang kanopi sendiri dan kenapa harus pakai jasa profesional di Bekasi', category: 'Canopy Guide' },
  { prompt: 'Review kanopi alderon setelah 5 tahun pemakaian di iklim tropis: apakah worth it?', category: 'Canopy Guide' },

  // Gate Designs (15)
  { prompt: 'Tren desain pagar minimalis modern 2025 untuk rumah di Bekasi dan Cikarang', category: 'Gate Designs' },
  { prompt: 'Pagar besi tempa klasik vs pagar minimalis: mana yang lebih cocok untuk rumah Anda di Bekasi?', category: 'Gate Designs' },
  { prompt: 'Cara memilih pagar stainless steel yang berkualitas untuk rumah mewah di Lippo Cikarang', category: 'Gate Designs' },
  { prompt: 'Pintu pagar otomatis sliding gate: mekanisme, harga, dan pemasangan di perumahan Bekasi', category: 'Gate Designs' },
  { prompt: 'Pagar BRC untuk keamanan perumahan cluster di Kota Harapan Indah Bekasi', category: 'Gate Designs' },
  { prompt: 'Desain pagar kombinasi batu alam dan besi tempa untuk rumah di Kemang Pratama Bekasi', category: 'Gate Designs' },
  { prompt: 'Estimasi biaya pasang pagar besi minimalis per meter di Bekasi 2025', category: 'Gate Designs' },
  { prompt: 'Pagar laser cutting motif custom: proses pembuatan dan inspirasi desain untuk rumah Bekasi', category: 'Gate Designs' },
  { prompt: 'Tips anti karat untuk pagar besi di daerah dekat pantai Muara Gembong Bekasi', category: 'Gate Designs' },
  { prompt: 'Pagar dorong vs pagar swing: kelebihan dan kekurangan untuk lahan sempit di Bekasi', category: 'Gate Designs' },
  { prompt: 'Desain pagar industrial untuk gudang dan pabrik di kawasan MM2100 Cibitung', category: 'Gate Designs' },
  { prompt: 'Pagar panel besi hollow untuk rumah subsidi di Cikarang: murah tapi tetap kokoh', category: 'Gate Designs' },
  { prompt: 'Cara menghitung kebutuhan material pagar besi untuk rumah di Bekasi', category: 'Gate Designs' },
  { prompt: 'Pagar minimalis dengan motif daun dan tanaman: tren nature-inspired di Bekasi 2025', category: 'Gate Designs' },
  { prompt: 'Pagar besi galvanis hot dip vs powder coating: mana lapisan anti karat terbaik?', category: 'Gate Designs' },

  // Home Security (12)
  { prompt: 'Teralis jendela anti maling terbaik untuk rumah di Bekasi: desain modern tanpa mengorbankan estetika', category: 'Home Security' },
  { prompt: 'Teralis jendela dengan emergency exit: fitur keselamatan penting untuk rumah di perumahan Bekasi', category: 'Home Security' },
  { prompt: 'Perbandingan teralis besi ulir vs besi behel vs stainless untuk keamanan rumah', category: 'Home Security' },
  { prompt: 'Desain teralis jendela minimalis dengan plat cutting laser: inspirasi untuk rumah modern Bekasi', category: 'Home Security' },
  { prompt: 'Tips keamanan rumah kosong saat mudik: peran teralis, CCTV, dan pagar di Bekasi', category: 'Home Security' },
  { prompt: 'Teralis pintu kasa nyamuk stainless: solusi keamanan plus kesehatan untuk rumah di Bekasi', category: 'Home Security' },
  { prompt: 'Berapa harga pasang teralis jendela per meter di Bekasi 2025? Panduan lengkap biaya', category: 'Home Security' },
  { prompt: 'Teralis invisible (kawat baja) vs teralis konvensional: tren keamanan rumah modern', category: 'Home Security' },
  { prompt: 'Cara memilih teralis yang kuat tapi tidak menghalangi sirkulasi udara rumah tropis', category: 'Home Security' },
  { prompt: 'Keamanan rumah di perumahan Grand Galaxy City Bekasi: solusi teralis dan pagar terbaik', category: 'Home Security' },
  { prompt: 'Teralis jendela untuk lantai 2 dan 3: pertimbangan keamanan anak di rumah bertingkat', category: 'Home Security' },
  { prompt: 'Finishing teralis besi: cat duco vs powder coating vs galvanis, mana paling awet?', category: 'Home Security' },

  // Stair and Railing (12)
  { prompt: 'Railing tangga minimalis besi vs stainless steel: perbandingan harga dan ketahanan di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Desain railing balkon modern untuk apartemen dan rumah 2 lantai di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Railing tangga kabel baja (cable railing): tren industrial modern untuk rumah Bekasi', category: 'Stair and Railing' },
  { prompt: 'Tips keselamatan railing tangga untuk rumah dengan balita di perumahan Bekasi', category: 'Stair and Railing' },
  { prompt: 'Railing tangga kayu kombinasi besi: desain hangat dan elegan untuk interior rumah', category: 'Stair and Railing' },
  { prompt: 'Harga pasang railing tangga stainless steel di Bekasi 2025: per meter dan per set', category: 'Stair and Railing' },
  { prompt: 'Railing kaca tempered untuk tangga modern: keamanan, estetika, dan biaya di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Railing balkon rooftop: material tahan cuaca untuk rumah di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Desain railing tangga spiral besi: solusi hemat ruang untuk rumah mungil di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Perawatan railing stainless agar tetap mengkilap: tips dari bengkel las profesional', category: 'Stair and Railing' },
  { prompt: 'Railing tangga outdoor untuk taman dan halaman rumah di Bekasi', category: 'Stair and Railing' },
  { prompt: 'Standar tinggi railing tangga sesuai regulasi keselamatan bangunan Indonesia', category: 'Stair and Railing' },

  // Steel Construction (12)
  { prompt: 'Konstruksi baja WF untuk gudang dan pabrik di kawasan industri Jababeka Cikarang', category: 'Steel Construction' },
  { prompt: 'Mezzanine baja untuk ruko dan toko di Cikarang: desain, kekuatan, dan estimasi biaya', category: 'Steel Construction' },
  { prompt: 'Dak baja untuk rumah 2 lantai di Bekasi: lebih hemat dan cepat dari cor beton?', category: 'Steel Construction' },
  { prompt: 'Konstruksi baja ringan vs baja berat untuk atap rumah: analisis biaya dan ketahanan gempa', category: 'Steel Construction' },
  { prompt: 'Struktur baja untuk lapangan futsal dan badminton indoor di Bekasi dan Cikarang', category: 'Steel Construction' },
  { prompt: 'Perencanaan konstruksi baja untuk perluasan pabrik di EJIP dan Delta Silicon Cikarang', category: 'Steel Construction' },
  { prompt: 'Mezzanine baja untuk warehouse e-commerce di Bekasi: optimasi ruang penyimpanan vertikal', category: 'Steel Construction' },
  { prompt: 'Cara menghitung kebutuhan baja WF dan H-beam untuk proyek bangunan di Bekasi', category: 'Steel Construction' },
  { prompt: 'Konstruksi carport baja untuk rumah dengan 2-3 mobil di perumahan Bekasi', category: 'Steel Construction' },
  { prompt: 'Jasa erection baja di Bekasi: proses pemasangan struktur baja dari A sampai Z', category: 'Steel Construction' },
  { prompt: 'Pondasi dan base plate untuk konstruksi baja: hal yang sering diabaikan kontraktor', category: 'Steel Construction' },
  { prompt: 'Biaya konstruksi baja per kg di Bekasi 2025: faktor yang mempengaruhi harga', category: 'Steel Construction' },

  // Tips and Trick (12)
  { prompt: 'Cara memilih bengkel las yang terpercaya di Bekasi: 7 ciri bengkel las profesional', category: 'Tips and Trick' },
  { prompt: 'Persiapan sebelum renovasi pagar dan kanopi rumah: checklist lengkap untuk pemilik rumah', category: 'Tips and Trick' },
  { prompt: 'Panduan cat anti karat untuk besi outdoor: jenis, merek, dan cara aplikasi yang benar', category: 'Tips and Trick' },
  { prompt: 'Cara membaca penawaran harga (quotation) dari bengkel las: apa saja yang harus dicek?', category: 'Tips and Trick' },
  { prompt: 'Musim hujan di Bekasi: tips melindungi konstruksi besi rumah dari karat dan korosi', category: 'Tips and Trick' },
  { prompt: 'Material besi SNI vs non-SNI: perbedaan kualitas yang harus diketahui konsumen', category: 'Tips and Trick' },
  { prompt: 'Cara merawat pintu pagar besi agar awet 20 tahun: panduan perawatan berkala', category: 'Tips and Trick' },
  { prompt: 'Tips hemat biaya renovasi pagar dan kanopi tanpa mengorbankan kualitas', category: 'Tips and Trick' },
  { prompt: 'Waktu terbaik untuk renovasi rumah di Bekasi: kapan harus pasang kanopi dan pagar?', category: 'Tips and Trick' },
  { prompt: 'Jenis las yang digunakan bengkel profesional: MIG, TIG, dan SMAW, apa bedanya?', category: 'Tips and Trick' },
  { prompt: 'Panduan survei lokasi sebelum pasang kanopi: apa yang diukur dan mengapa penting', category: 'Tips and Trick' },
  { prompt: 'Cara komplain yang efektif jika hasil las tidak sesuai: hak konsumen dan garansi', category: 'Tips and Trick' },

  // Local Area Guide (12)
  { prompt: 'Jasa las terpercaya untuk perumahan di Cikarang Barat, Cikarang Utara, dan Cikarang Selatan', category: 'Local Area Guide' },
  { prompt: 'Area layanan bengkel las Mandiri: Bekasi Timur, Bekasi Barat, Tambun, Cibitung dan sekitarnya', category: 'Local Area Guide' },
  { prompt: 'Bengkel las terdekat dari Grand Wisata Tambun: layanan kanopi, pagar, dan teralis', category: 'Local Area Guide' },
  { prompt: 'Jasa las untuk kawasan industri MM2100, EJIP, dan Jababeka: mezzanine dan struktur baja', category: 'Local Area Guide' },
  { prompt: 'Layanan las untuk perumahan Summarecon Bekasi, Kemang Pratama, dan Grand Galaxy City', category: 'Local Area Guide' },
  { prompt: 'Bengkel las di Setu Bekasi yang melayani Cikarang, Cibitung, dan Karangbahagia', category: 'Local Area Guide' },
  { prompt: 'Jasa las pagar dan kanopi untuk rumah di Kota Harapan Indah dan Metland Tambun', category: 'Local Area Guide' },
  { prompt: 'Layanan konstruksi baja untuk proyek di koridor Jalan Raya Setu-Cibitung Bekasi', category: 'Local Area Guide' },
  { prompt: 'Bengkel las Mandiri: akses mudah dari Tol Cibitung, Tol Cikarang Barat, dan Tol Grand Wisata', category: 'Local Area Guide' },
  { prompt: 'Jasa las untuk perumahan baru di Kota Deltamas, Lippo Cikarang, dan Meikarta', category: 'Local Area Guide' },
  { prompt: 'Layanan las dan konstruksi untuk proyek villa dan resort di Cibarusah dan Serang Baru', category: 'Local Area Guide' },
  { prompt: 'Survei lokasi gratis untuk area Bekasi Utara, Babelan, Tarumajaya, dan Medan Satria', category: 'Local Area Guide' },
];

// ─── STATE: track used topics ────────────────────────────────────────────────

function loadUsed() {
  if (!existsSync(STATE_FILE)) return [];
  try { return JSON.parse(readFileSync(STATE_FILE, 'utf8')); } catch { return []; }
}

function saveUsed(arr) {
  writeFileSync(STATE_FILE, JSON.stringify(arr, null, 2));
}

function pickTopics(count) {
  let used = loadUsed();
  const available = ALL_TOPICS.filter((_, i) => !used.includes(i));

  // Reset if we've exhausted all topics
  if (available.length < count) {
    used = [];
    saveUsed(used);
  }

  const pool = ALL_TOPICS.map((t, i) => ({ ...t, _idx: i })).filter(t => !used.includes(t._idx));
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Pick diverse categories
  const picked = [];
  const usedCats = new Set();
  // First pass: one per category
  for (const t of pool) {
    if (picked.length >= count) break;
    if (!usedCats.has(t.category)) {
      picked.push(t);
      usedCats.add(t.category);
    }
  }
  // Second pass: fill remaining
  for (const t of pool) {
    if (picked.length >= count) break;
    if (!picked.includes(t)) picked.push(t);
  }

  // Save used indices
  const newUsed = [...used, ...picked.map(t => t._idx)];
  saveUsed(newUsed);

  return picked;
}

// ─── API CALLS ───────────────────────────────────────────────────────────────

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateArticle(topic) {
  log(`🔄 Generating: "${topic.prompt.substring(0, 55)}..."`);
  const res = await fetch(`${CFG.API}/api/admin/generate-article`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: topic.prompt + '\n\nPENTING: Buat artikel PANJANG dan DETAIL minimal 1500 kata. Setiap section harus 200-400 kata. Gunakan data, contoh nyata, dan tips actionable.',
      category: topic.category,
      language: 'id',
      model: 'llama-3.3-70b-versatile',
      groqApiKey: CFG.GROQ,
      bluesmindsApiKey: CFG.BLUESMINDS,
      unsplashAccessKey: CFG.UNSPLASH,
    }),
  });
  if (!res.ok) throw new Error(`AI API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  if (!data.success) throw new Error('No article returned');
  log(`✅ Generated: "${data.article.title}"`);
  return data.article;
}

async function getGitHubFile() {
  const [o, r] = CFG.GH_REPO.split('/');
  const res = await fetch(
    `https://api.github.com/repos/${o}/${r}/contents/src/data/blog.ts?ref=${CFG.GH_BRANCH}`,
    { headers: { Authorization: `Bearer ${CFG.GH_TOKEN}`, Accept: 'application/vnd.github.v3+json', 'User-Agent': 'LasBekasi-Cron' } }
  );
  if (!res.ok) throw new Error(`GitHub GET: ${res.statusText}`);
  const d = await res.json();
  return { content: Buffer.from(d.content, 'base64').toString('utf8'), sha: d.sha };
}

async function pushToGitHub(content, sha, msg) {
  const [o, r] = CFG.GH_REPO.split('/');
  const res = await fetch(
    `https://api.github.com/repos/${o}/${r}/contents/src/data/blog.ts`,
    {
      method: 'PUT',
      headers: { Authorization: `Bearer ${CFG.GH_TOKEN}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json', 'User-Agent': 'LasBekasi-Cron' },
      body: JSON.stringify({ message: msg, content: Buffer.from(content).toString('base64'), sha, branch: CFG.GH_BRANCH }),
    }
  );
  if (!res.ok) { const e = await res.json(); throw new Error(`GitHub PUT: ${e.message}`); }
  return (await res.json()).commit?.html_url;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main() {
  log('=== LasBekasi Auto Blog: 3 Articles/Day ===');

  const missing = ['GROQ', 'GH_TOKEN'].filter(k => !CFG[k]);
  if (missing.length) throw new Error(`Missing: ${missing.join(', ')}`);

  // 1. Pick 3 unique topics (different categories)
  const topics = pickTopics(ARTICLES_PER_RUN);
  log(`Selected ${topics.length} topics from ${ALL_TOPICS.length} total`);

  // 2. Generate all 3 articles
  const articles = [];
  for (const topic of topics) {
    const article = await generateArticle(topic);
    articles.push(article);
    if (articles.length < topics.length) await sleep(DELAY_BETWEEN_MS);
  }

  // 3. Get current blog.ts from GitHub
  log('Fetching blog.ts from GitHub...');
  const { content: blogContent, sha } = await getGitHubFile();
  const match = blogContent.match(/export const BLOG_POSTS: BlogPost\[\] = (\[[\s\S]*?\]);?\s*(?=export const|$)/);
  if (!match) throw new Error('Cannot parse BLOG_POSTS');
  const existingPosts = JSON.parse(match[1]);
  log(`Found ${existingPosts.length} existing posts`);

  // 4. Build new posts (prepend, newest first)
  let maxId = existingPosts.reduce((m, p) => Math.max(m, p.id || 0), 0);
  const existingSlugs = new Set(existingPosts.map(p => p.slug));
  const newPosts = articles.map(a => {
    maxId++;
    let slug = a.slug;
    if (existingSlugs.has(slug)) slug = `${slug}-${Date.now()}`;
    existingSlugs.add(slug);
    return {
      id: maxId, title: a.title, slug, excerpt: a.excerpt || '',
      category: a.category || 'Tips and Trick', language: a.language || 'id',
      author: 'Angga', date: new Date().toISOString().split('T')[0],
      image: a.image || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      content: { introduction: a.introduction, keyPoints: a.keyPoints || [], sections: a.sections || [], conclusion: a.conclusion },
      tags: [a.category, 'bengkel las bekasi', 'mandiri steel'].filter(Boolean),
      published: true, featured: false,
    };
  });

  // 5. Push single commit with all 3 articles
  const updatedPosts = [...newPosts, ...existingPosts];
  const newJson = JSON.stringify(updatedPosts, null, 2);
  const newContent = blogContent.replace(
    /(export const BLOG_POSTS: BlogPost\[\] = )\[[\s\S]*?\];?\s*(?=export const|$)/,
    `$1${newJson};\n`
  );

  const titles = newPosts.map(p => p.title).join(' | ');
  const commitUrl = await pushToGitHub(newContent, sha, `🤖 Auto-publish 3 articles: ${titles.substring(0, 100)}`);

  log(`🚀 Published ${newPosts.length} articles!`);
  newPosts.forEach(p => log(`   → [${p.id}] ${p.title}`));
  log(`Commit: ${commitUrl}`);
  log('Vercel auto-deploy in ~2 min.');
  log('=== Done ===\n');
}

main().catch(err => {
  console.error(`[${new Date().toISOString()}] ❌ ERROR:`, err.message);
  process.exit(1);
});
