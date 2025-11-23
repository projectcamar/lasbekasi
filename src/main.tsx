import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Inject H1 for crawlers before React loads (for all routes)
const pathname = window.location.pathname
const h1Map: { [key: string]: string } = {
  '/': 'Bengkel Las Bekasi #1 - Bengkel Las Mandiri',
  '/layanan-las-bekasi': 'Layanan Bengkel Las Bekasi',
  '/tentang-kami': 'Tentang Kami - Bengkel Las Mandiri Bekasi',
  '/kontak-bengkel-las-bekasi': 'Kontak Kami - Bengkel Las Mandiri Bekasi',
  '/album-bengkel-las-mandiri': 'Katalog Produk - Album Bengkel Las Mandiri Bekasi',
  '/blog': 'Blog Bengkel Las Mandiri',
  '/jasa-las-kanopi-bekasi': 'Jasa Las Kanopi Bekasi | Harga Kanopi Baja Ringan Per Meter 2025',
  '/jasa-las-pagar-bekasi': 'Jasa Las Pagar Bekasi | Harga Pagar Besi Per Meter Terbaru 2025',
  '/jasa-las-tralis-bekasi': 'Jasa Las Tralis Bekasi | Harga Tralis Jendela Anti Maling Per Meter 2025',
  '/bengkel-las-jakarta': 'Bengkel Las Jakarta | Jasa Las Besi & Kanopi Terdekat #1'
}

// Get H1 for current path
let h1Text = h1Map[pathname]
if (!h1Text) {
  // Service detail pages
  if (pathname.startsWith('/layanan-las-bekasi/')) {
    const serviceSlug = pathname.replace('/layanan-las-bekasi/', '').replace(/-bekasi$/, '')
    const serviceName = serviceSlug
      .replace(/^jasa-pembuatan-/, '')
      .replace(/^jasa-/, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    h1Text = `Jasa ${serviceName} Bekasi - Bengkel Las Mandiri`
  }
  // Blog posts
  else if (pathname.startsWith('/blog/')) {
    const postSlug = pathname.replace('/blog/', '')
    h1Text = postSlug
      .replace(/-/g, ' ')
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }
  else {
    h1Text = 'Bengkel Las Bekasi - Bengkel Las Mandiri'
  }
}

// Inject H1 for crawlers if not exists
if (!document.querySelector('h1')) {
  const h1 = document.createElement('h1')
  h1.textContent = h1Text
  h1.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; visibility: hidden;'
  document.body.insertBefore(h1, document.body.firstChild)
}

// Mark body as React loaded to hide static SEO content
document.body.classList.add('react-loaded')

// Ultra-fast rendering with immediate critical content
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

// Render immediately for fastest FCP
root.render(<App />)
