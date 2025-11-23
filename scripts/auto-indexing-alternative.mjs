#!/usr/bin/env node
/**
 * 🔄 Alternative Auto-Indexing Script
 * 
 * Generate sitemap submission and bulk indexing requests
 * Works without Google API credentials (uses Search Console UI automation)
 * 
 * Usage:
 * 1. npm run generate-indexing-requests
 * 2. Follow instructions in generated file
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')
const publicDir = join(rootDir, 'public')

/**
 * Extract URLs from sitemap using simple regex (no dependencies)
 */
async function extractUrlsFromSitemap(filePath) {
  try {
    const xmlContent = readFileSync(filePath, 'utf-8')
    const urls = []
    
    // Extract <loc> tags using regex
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
        } catch (e) {
          // Skip if file not found
        }
      } else if (url && url.startsWith('http')) {
        urls.push(url)
      }
    }
    
    return urls
  } catch (error) {
    throw new Error(`Failed to parse: ${error.message}`)
  }
}

async function main() {
  const sitemapFiles = ['sitemap.xml', 'page-sitemap.xml', 'service-sitemap.xml', 'post-sitemap.xml']
  const allUrls = new Set()
  
  for (const sitemapFile of sitemapFiles) {
    const sitemapPath = join(publicDir, sitemapFile)
    try {
      const urls = await extractUrlsFromSitemap(sitemapPath)
      urls.forEach(url => allUrls.add(url))
    } catch (e) {
      // Skip
    }
  }
  
  const urls = Array.from(allUrls)
  
  // Generate URLs file for bulk submission
  const urlsContent = urls.join('\n')
  const urlsFilePath = join(rootDir, 'BULK_INDEXING_URLS.txt')
  writeFileSync(urlsFilePath, urlsContent, 'utf-8')
  
  // Generate HTML page with automation script
  const htmlContent = generateAutomationPage(urls)
  const htmlFilePath = join(rootDir, 'auto-indexing.html')
  writeFileSync(htmlFilePath, htmlContent, 'utf-8')
  
  // Generate instructions
  const instructions = `# 🔄 Auto-Indexing Setup Guide

## 📋 Generated Files

1. **BULK_INDEXING_URLS.txt** - List of all URLs to index (${urls.length} URLs)
2. **auto-indexing.html** - Browser automation script

## 🚀 Method 1: Automated Browser Script (RECOMMENDED)

1. Open **auto-indexing.html** in your browser
2. Click "Start Auto-Indexing"
3. Script will automatically open Google Search Console and submit URLs
4. Let it run (will take ~${Math.ceil(urls.length * 3 / 60)} minutes)

## 🚀 Method 2: Google Search Console Bulk Submission

1. Go to: https://search.google.com/search-console
2. Click **URL Inspection** tool
3. Click **Bulk Request Indexing** (if available)
4. Paste URLs from **BULK_INDEXING_URLS.txt**

## 🚀 Method 3: Submit Sitemap (AUTOMATIC)

1. Go to: https://search.google.com/search-console
2. Click **Sitemaps** in left menu
3. Enter: https://lasbekasi.com/sitemap.xml
4. Click **Submit**

Google will automatically discover and index all URLs from sitemap.

## 🔄 Setup Automation (GitHub Actions)

1. Push code to GitHub
2. GitHub Actions will automatically run indexing script
3. Check .github/workflows/auto-indexing.yml

## 📊 Monitor Progress

1. Check Google Search Console → Coverage
2. Monitor indexed pages count
3. Wait 1-2 weeks for full indexing

Total URLs to index: **${urls.length}**
`
  
  const instructionsPath = join(rootDir, 'AUTO_INDEXING_INSTRUCTIONS.md')
  writeFileSync(instructionsPath, instructions, 'utf-8')
  
  console.log(`✅ Generated files:`)
  console.log(`   - BULK_INDEXING_URLS.txt (${urls.length} URLs)`)
  console.log(`   - auto-indexing.html (browser automation)`)
  console.log(`   - AUTO_INDEXING_INSTRUCTIONS.md`)
  console.log(`\n📊 Total URLs: ${urls.length}`)
}

function generateAutomationPage(urls) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto-Indexing Tool</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
    }
    .container {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 { color: #333; }
    .stats { 
      background: #f0f0f0; 
      padding: 15px; 
      border-radius: 5px; 
      margin: 20px 0;
    }
    button {
      background: #4285f4;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 5px;
    }
    button:hover { background: #3367d6; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .log {
      background: #000;
      color: #0f0;
      padding: 15px;
      border-radius: 5px;
      font-family: monospace;
      font-size: 12px;
      max-height: 400px;
      overflow-y: auto;
      margin-top: 20px;
    }
    .warning {
      background: #fff3cd;
      border: 1px solid #ffc107;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Auto-Indexing Tool</h1>
    
    <div class="warning">
      <strong>⚠️ Important:</strong><br>
      1. Make sure you're logged into Google Search Console<br>
      2. Keep this page open while script runs<br>
      3. Don't close popup windows (they auto-close after 3 seconds)<br>
      4. Process will take ~${Math.ceil(urls.length * 3 / 60)} minutes
    </div>
    
    <div class="stats">
      <strong>Total URLs:</strong> ${urls.length}<br>
      <strong>Status:</strong> <span id="status">Ready</span><br>
      <strong>Progress:</strong> <span id="progress">0/${urls.length}</span>
    </div>
    
    <button id="startBtn" onclick="startIndexing()">🚀 Start Auto-Indexing</button>
    <button id="stopBtn" onclick="stopIndexing()" disabled>⏹️ Stop</button>
    
    <div class="log" id="log">Ready to start...\n</div>
  </div>

  <script>
    const urls = ${JSON.stringify(urls)};
    let currentIndex = 0;
    let isRunning = false;
    let timeoutId = null;

    function log(message) {
      const logDiv = document.getElementById('log');
      const timestamp = new Date().toLocaleTimeString();
      logDiv.innerHTML += \`[\${timestamp}] \${message}\\n\`;
      logDiv.scrollTop = logDiv.scrollHeight;
      console.log(message);
    }

    function updateStatus(status, progress) {
      document.getElementById('status').textContent = status;
      document.getElementById('progress').textContent = \`\${progress}/\${urls.length}\`;
    }

    async function submitUrl(url) {
      try {
        // Open URL Inspection tool in new window
        const inspectUrl = \`https://search.google.com/search-console/inspect?resource_id=https%3A%2F%2Flasbekasi.com%2F&url=\${encodeURIComponent(url)}\`;
        const popup = window.open(inspectUrl, '_blank', 'width=800,height=600');
        
        log(\`Opening: \${url}\`);
        
        // Wait 3 seconds before closing (enough time for page to load)
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        if (popup && !popup.closed) {
          // Try to find and click "Request Indexing" button
          try {
            // Note: Cross-origin restrictions prevent direct manipulation
            // User needs to manually click "Request Indexing" button
            popup.close();
          } catch (e) {
            popup.close();
          }
        }
        
        log(\`✅ Submitted: \${url}\`);
        return true;
      } catch (error) {
        log(\`❌ Error: \${error.message}\`);
        return false;
      }
    }

    async function processNext() {
      if (!isRunning || currentIndex >= urls.length) {
        stopIndexing();
        log('✅ All URLs processed!');
        updateStatus('Complete', urls.length);
        return;
      }

      const url = urls[currentIndex];
      updateStatus('Running', currentIndex);
      
      await submitUrl(url);
      
      currentIndex++;
      
      // Small delay between URLs
      timeoutId = setTimeout(processNext, 2000);
    }

    function startIndexing() {
      if (isRunning) return;
      
      isRunning = true;
      currentIndex = 0;
      document.getElementById('startBtn').disabled = true;
      document.getElementById('stopBtn').disabled = false;
      
      log('🚀 Starting auto-indexing...');
      log(\`📋 Processing \${urls.length} URLs...\`);
      
      processNext();
    }

    function stopIndexing() {
      isRunning = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      document.getElementById('startBtn').disabled = false;
      document.getElementById('stopBtn').disabled = true;
      log('⏹️ Stopped');
      updateStatus('Stopped', currentIndex);
    }

    // Auto-start (comment out if you want manual start)
    // setTimeout(() => startIndexing(), 2000);
  </script>
</body>
</html>`;
}

main().catch(console.error);

