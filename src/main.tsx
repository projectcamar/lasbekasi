import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mark body as React loaded to hide static SEO content
document.body.classList.add('react-loaded')

// Performance optimization: Use requestIdleCallback for non-critical rendering
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

// Render app with priority scheduling
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    root.render(<App />)
  })
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(() => {
    root.render(<App />)
  }, 0)
}
