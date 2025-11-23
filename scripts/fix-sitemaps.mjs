#!/usr/bin/env node

/**
 * Quick fix script to regenerate all sitemaps with XSLT reference
 * Run this to fix sitemap issues
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '../public');
const BASE_URL = 'https://lasbekasi.com';

const files = [
  'page-sitemap.xml',
  'service-sitemap.xml',
  'post-sitemap.xml',
  'attachment-sitemap.xml',
  'sitemap.xml'
];

console.log('🔧 Fixing sitemap files...\n');

files.forEach(file => {
  const filePath = join(publicDir, file);
  try {
    let content = readFileSync(filePath, 'utf-8');
    
    // Check if XSLT reference already exists
    if (!content.includes('xml-stylesheet')) {
      // Add XSLT reference after XML declaration
      content = content.replace(
        '<?xml version="1.0" encoding="UTF-8"?>',
        `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="${BASE_URL}/sitemap.xsl"?>`
      );
      
      writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Fixed: ${file}`);
    } else {
      console.log(`⏭️  Already has XSLT: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
});

console.log('\n✨ Done! All sitemaps have been fixed.');

