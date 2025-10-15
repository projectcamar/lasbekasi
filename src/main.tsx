import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mark body as React loaded to hide static SEO content
document.body.classList.add('react-loaded')

// Ultra-fast rendering - no delays
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

// Render immediately - no delays
root.render(<App />)
