#!/usr/bin/env node
/**
 * 🔄 Auto-Indexing Script for Google Search Console
 * 
 * Otomatis request indexing untuk semua URL dari sitemap
 * Menggunakan Google Indexing API
 * 
 * Setup:
 * 1. Install dependencies: npm install
 * 2. Setup Google Service Account (lihat README.md)
 * 3. Set environment variables (GOOGLE_SERVICE_ACCOUNT, GOOGLE_PRIVATE_KEY, etc)
 * 4. Run: npm run auto-indexing
 * 
 * Automation:
 * - GitHub Actions: .github/workflows/auto-indexing.yml
 * - Vercel Cron: api/cron/auto-indexing.js
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')
const publicDir = join(rootDir, 'public')

// Configuration
const CONFIG = {
  siteUrl: 'https://lasbekasi.com',
  sitemapFiles: [
    'sitemap.xml',
    'page-sitemap.xml',
    'service-sitemap.xml',
    'post-sitemap.xml'
  ],
  googleApiUrl: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
  maxRequestsPerDay: 200, // Google Indexing API limit
  batchSize: 10, // Process URLs in batches
  delayBetweenBatches: 2000 // 2 seconds delay between batches
}

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
}

/**
 * Extract all URLs from a sitemap XML file (simple regex parser)
 */
async function extractUrlsFromSitemap(filePath) {
  try {
    const xmlContent = readFileSync(filePath, 'utf-8')
    const urls = []
    
    // Extract <loc> tags using regex (simple but works for sitemaps)
    const locMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g) || []
    
    for (const match of locMatches) {
      const url = match.replace(/<\/?loc>/g, '').trim()
      
      // If it's a sitemap URL (ends with .xml), fetch child sitemap
      if (url.endsWith('.xml')) {
        const fileName = url.split('/').pop()
        const childSitemapPath = join(publicDir, fileName)
        
        try {
          const childUrls = await extractUrlsFromSitemap(childSitemapPath)
          urls.push(...childUrls)
        } catch (error) {
          console.log(`${colors.yellow}⚠️  Skipping ${fileName}: ${error.message}${colors.reset}`)
        }
      } else if (url && url.startsWith('http')) {
        urls.push(url)
      }
    }
    
    return urls
  } catch (error) {
    throw new Error(`Failed to parse sitemap ${filePath}: ${error.message}`)
  }
}

/**
 * Get all URLs from all sitemaps
 */
async function getAllUrls() {
  const allUrls = new Set()
  
  console.log(`${colors.cyan}📋 Reading sitemaps...${colors.reset}`)
  
  for (const sitemapFile of CONFIG.sitemapFiles) {
    const sitemapPath = join(publicDir, sitemapFile)
    
    try {
      const urls = await extractUrlsFromSitemap(sitemapPath)
      urls.forEach(url => allUrls.add(url))
      console.log(`${colors.green}✅ ${sitemapFile}: ${urls.length} URLs${colors.reset}`)
    } catch (error) {
      console.log(`${colors.yellow}⚠️  ${sitemapFile}: ${error.message}${colors.reset}`)
    }
  }
  
  return Array.from(allUrls)
}

/**
 * Submit URL to Google Indexing API
 * Note: This requires Google Service Account credentials
 */
async function submitUrlToGoogle(url, accessToken) {
  try {
    const response = await fetch(CONFIG.googleApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED'
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP ${response.status}: ${errorText}`)
    }
    
    const result = await response.json()
    return { success: true, result }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

/**
 * Get OAuth2 access token using service account
 * Note: Requires jsonwebtoken package (npm install jsonwebtoken)
 */
async function getAccessToken(serviceAccountEmail, privateKey) {
  try {
    const jwt = await import('jsonwebtoken')
    
    const now = Math.floor(Date.now() / 1000)
    const jwtPayload = {
      iss: serviceAccountEmail,
      sub: serviceAccountEmail,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
      scope: 'https://www.googleapis.com/auth/indexing'
    }
    
    const token = jwt.default.sign(jwtPayload, privateKey, {
      algorithm: 'RS256'
    })
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: token
      })
    })
    
    if (!response.ok) {
      throw new Error(`Failed to get access token: ${await response.text()}`)
    }
    
    const data = await response.json()
    return data.access_token
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND') {
      throw new Error('jsonwebtoken package not found. Install with: npm install jsonwebtoken')
    }
    throw error
  }
}

/**
 * Delay function
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Main function
 */
async function main() {
  console.log(`${colors.blue}🚀 Auto-Indexing Script Started${colors.reset}\n`)
  
  // Check environment variables
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  
  // If no credentials, use alternative method (manual request indexing via console)
  if (!serviceAccountEmail || !privateKey) {
    console.log(`${colors.yellow}⚠️  Google Service Account credentials not found${colors.reset}`)
    console.log(`${colors.cyan}📋 Generating URL list for manual submission...${colors.reset}\n`)
    
    // Extract all URLs
    const urls = await getAllUrls()
    
    console.log(`\n${colors.green}✅ Found ${urls.length} URLs total${colors.reset}\n`)
    
    // Generate submission script
    const submissionScript = generateManualSubmissionScript(urls)
    
    console.log(`${colors.cyan}📝 Generated manual submission script${colors.reset}`)
    console.log(`${colors.yellow}💡 Copy and run the script below to submit URLs:${colors.reset}\n`)
    console.log(submissionScript)
    
    // Also save to file
    const scriptPath = join(rootDir, 'scripts', 'manual-indexing.js')
    const fs = await import('fs')
    fs.writeFileSync(scriptPath, submissionScript, 'utf-8')
    console.log(`\n${colors.green}✅ Saved to: ${scriptPath}${colors.reset}`)
    
    return
  }
  
  try {
    // Get access token
    console.log(`${colors.cyan}🔐 Authenticating with Google...${colors.reset}`)
    const accessToken = await getAccessToken(serviceAccountEmail, privateKey)
    console.log(`${colors.green}✅ Authenticated${colors.reset}\n`)
    
    // Get all URLs
    const urls = await getAllUrls()
    console.log(`\n${colors.green}✅ Found ${urls.length} URLs total${colors.reset}\n`)
    
    if (urls.length === 0) {
      console.log(`${colors.yellow}⚠️  No URLs found. Exiting.${colors.reset}`)
      return
    }
    
    // Check daily limit
    if (urls.length > CONFIG.maxRequestsPerDay) {
      console.log(`${colors.yellow}⚠️  Warning: ${urls.length} URLs exceed daily limit of ${CONFIG.maxRequestsPerDay}${colors.reset}`)
      console.log(`${colors.yellow}   Will submit first ${CONFIG.maxRequestsPerDay} URLs${colors.reset}\n`)
      urls.splice(CONFIG.maxRequestsPerDay)
    }
    
    // Submit URLs in batches
    console.log(`${colors.cyan}📤 Submitting URLs to Google...${colors.reset}\n`)
    
    let successCount = 0
    let errorCount = 0
    
    for (let i = 0; i < urls.length; i += CONFIG.batchSize) {
      const batch = urls.slice(i, i + CONFIG.batchSize)
      const batchNum = Math.floor(i / CONFIG.batchSize) + 1
      const totalBatches = Math.ceil(urls.length / CONFIG.batchSize)
      
      console.log(`${colors.cyan}📦 Batch ${batchNum}/${totalBatches} (${batch.length} URLs)...${colors.reset}`)
      
      const batchPromises = batch.map(async (url) => {
        const result = await submitUrlToGoogle(url, accessToken)
        
        if (result.success) {
          console.log(`  ${colors.green}✅ ${url}${colors.reset}`)
          successCount++
        } else {
          console.log(`  ${colors.red}❌ ${url}: ${result.error}${colors.reset}`)
          errorCount++
        }
      })
      
      await Promise.all(batchPromises)
      
      // Delay between batches to avoid rate limiting
      if (i + CONFIG.batchSize < urls.length) {
        await delay(CONFIG.delayBetweenBatches)
      }
    }
    
    // Summary
    console.log(`\n${colors.blue}📊 Summary:${colors.reset}`)
    console.log(`  ${colors.green}✅ Success: ${successCount}${colors.reset}`)
    console.log(`  ${colors.red}❌ Errors: ${errorCount}${colors.reset}`)
    console.log(`  📋 Total: ${urls.length}\n`)
    
    if (errorCount > 0) {
      console.log(`${colors.yellow}⚠️  Some URLs failed to submit. Check logs above.${colors.reset}\n`)
      process.exit(1)
    } else {
      console.log(`${colors.green}🎉 All URLs submitted successfully!${colors.reset}\n`)
    }
    
  } catch (error) {
    console.error(`${colors.red}❌ Error: ${error.message}${colors.reset}`)
    process.exit(1)
  }
}

/**
 * Generate manual submission script (for when API credentials not available)
 */
function generateManualSubmissionScript(urls) {
  return `/**
 * Manual Indexing Script
 * 
 * This script helps you submit URLs to Google Search Console
 * Run this in browser console on Google Search Console page
 * 
 * Instructions:
 * 1. Open https://search.google.com/search-console
 * 2. Open browser console (F12)
 * 3. Copy and paste this script
 * 4. Press Enter
 */

const urls = ${JSON.stringify(urls, null, 2)};

console.log(\`🚀 Starting manual indexing for \${urls.length} URLs...\`);

let index = 0;

function submitNextUrl() {
  if (index >= urls.length) {
    console.log('✅ All URLs processed!');
    return;
  }
  
  const url = urls[index];
  console.log(\`\${index + 1}/\${urls.length}: Submitting \${url}...\`);
  
  // Open URL Inspection tool
  window.open(\`https://search.google.com/search-console/inspect?resource_id=https%3A%2F%2Flasbekasi.com%2F&url=\${encodeURIComponent(url)}\`, '_blank');
  
  index++;
  
  // Wait 3 seconds before next URL (to avoid rate limiting)
  setTimeout(submitNextUrl, 3000);
}

// Start submitting
submitNextUrl();
`
}

// Run main function
main().catch(error => {
  console.error(`${colors.red}❌ Fatal error: ${error.message}${colors.reset}`)
  process.exit(1)
})

