import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mark body as React loaded to hide static SEO content
document.body.classList.add('react-loaded')

// Use requestIdleCallback for non-critical rendering optimizations
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

// Render app (StrictMode removed for production performance)
root.render(<App />)
