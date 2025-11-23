/**
 * 🔄 Auto-Indexing Cron Job for Vercel
 * 
 * Automatically request indexing for all URLs from sitemap
 * Runs daily via Vercel Cron Jobs
 * 
 * Setup:
 * 1. Add to vercel.json cron jobs
 * 2. Set CRON_SECRET in environment variables
 * 3. Deploy to Vercel
 */

export default async function handler(req, res) {
  // Verify cron secret (for manual testing)
  // Vercel cron jobs automatically add X-Vercel-Cron header
  const isVercelCron = req.headers['x-vercel-cron'] === '1';
  const cronSecret = req.headers['x-cron-secret'] || req.query.secret;
  const expectedSecret = process.env.CRON_SECRET;
  
  // Allow if Vercel cron OR correct secret
  if (!isVercelCron && cronSecret !== expectedSecret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const startTime = Date.now();
  
  try {
    // Import fetch if not available
    const fetch = globalThis.fetch || (await import('node-fetch')).default;
    
    // Get all URLs from sitemap
    const sitemapUrl = 'https://lasbekasi.com/sitemap.xml';
    const sitemapResponse = await fetch(sitemapUrl);
    
    if (!sitemapResponse.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapResponse.statusText}`);
    }
    
    // Parse sitemap and extract all URLs
    const sitemapText = await sitemapResponse.text();
    const urls = await extractUrlsFromSitemap(sitemapText, sitemapUrl);
    
    console.log(`Found ${urls.length} URLs to index`);
    
    // Submit sitemap to Google Search Console (automatic indexing)
    const googleIndexingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    
    try {
      await fetch(googleIndexingUrl);
      console.log('✅ Sitemap submitted to Google');
    } catch (error) {
      console.error('⚠️ Failed to ping Google:', error.message);
    }
    
    // Also submit to Bing
    const bingIndexingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    
    try {
      await fetch(bingIndexingUrl);
      console.log('✅ Sitemap submitted to Bing');
    } catch (error) {
      console.error('⚠️ Failed to ping Bing:', error.message);
    }
    
    const duration = Date.now() - startTime;
    
    return res.status(200).json({
      success: true,
      message: 'Auto-indexing completed',
      urlsCount: urls.length,
      duration: `${duration}ms`,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in auto-indexing:', error);
    
    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

/**
 * Extract URLs from sitemap XML (simple regex parser)
 */
async function extractUrlsFromSitemap(xmlContent, baseUrl) {
  const urls = [];
  const fetch = globalThis.fetch || (await import('node-fetch')).default;
  
  // Extract all <loc> tags
  const locMatches = xmlContent.match(/<loc>(.*?)<\/loc>/gi) || [];
  
  for (const match of locMatches) {
    const url = match.replace(/<\/?loc>/gi, '').trim();
    
    if (!url) continue;
    
    // If it's a sitemap URL (ends with .xml), fetch child sitemap
    if (url.endsWith('.xml')) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const childSitemap = await response.text();
          const childUrls = childSitemap.match(/<loc>(.*?)<\/loc>/gi) || [];
          for (const childMatch of childUrls) {
            const childUrl = childMatch.replace(/<\/?loc>/gi, '').trim();
            if (childUrl && !childUrl.endsWith('.xml') && childUrl.startsWith('http')) {
              urls.push(childUrl);
            }
          }
        }
      } catch (error) {
        console.error(`Failed to fetch child sitemap ${url}:`, error.message);
      }
    } else if (url.startsWith('http')) {
      urls.push(url);
    }
  }
  
  return [...new Set(urls)]; // Remove duplicates
}

