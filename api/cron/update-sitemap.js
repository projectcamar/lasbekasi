/**
 * Vercel Cron Job API Route
 * 
 * Endpoint ini akan dipanggil secara otomatis setiap hari jam 2 pagi (UTC)
 * untuk update sitemap dan trigger rebuild
 * 
 * Schedule: 0 2 * * * (setiap hari jam 2 pagi UTC = 9 pagi WIB)
 * 
 * Note: Untuk menggunakan Vercel Cron, pastikan:
 * 1. File ini ada di folder api/cron/
 * 2. Sudah setup CRON_SECRET di Vercel environment variables
 * 3. Vercel Pro plan (cron jobs tidak tersedia di free plan)
 * 
 * Alternative: Gunakan GitHub Actions (recommended, gratis)
 */

export default async function handler(req, res) {
  // Verify request is from Vercel Cron
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;
  
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('🔄 Starting sitemap update via Vercel Cron...');
    
    // Note: Vercel serverless functions don't have access to file system
    // This endpoint is mainly for triggering rebuilds
    // For actual sitemap generation, use GitHub Actions instead
    
    // If you want to trigger a rebuild, you can call Vercel API here
    // But GitHub Actions is the recommended approach
    
    return res.status(200).json({ 
      success: true, 
      message: 'Cron job triggered. Use GitHub Actions for sitemap generation.',
      timestamp: new Date().toISOString(),
      note: 'For actual sitemap updates, use GitHub Actions workflow instead'
    });
  } catch (error) {
    console.error('❌ Error in cron job:', error);
    return res.status(500).json({ 
      error: 'Failed to process cron job',
      message: error.message 
    });
  }
}

