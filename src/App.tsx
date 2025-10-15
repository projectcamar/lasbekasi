import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

// Critical components loaded immediately
import WhatsAppButton from './components/WhatsAppButton'
import Breadcrumb from './components/Breadcrumb'

// Lazy load pages with priority batching
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const NotFound = lazy(() => import('./pages/NotFound'))

// SEO Landing Pages
const JasaLasPagar = lazy(() => import('./pages/JasaLasPagar'))
const JasaLasKanopi = lazy(() => import('./pages/JasaLasKanopi'))
const JasaLasTralis = lazy(() => import('./pages/JasaLasTralis'))
const BengkelLasJakarta = lazy(() => import('./pages/BengkelLasJakarta'))

// No preloading - let everything load naturally
// This prevents the "pause" effect you're experiencing

// Loading component
const Loading = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Memuat...</p>
  </div>
)

function App() {
  // No preloading - let everything load naturally
  // This prevents the "pause" effect you're experiencing

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/jasa-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Services />
              </>
            } />
            <Route path="/tentang-kami" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <About />
              </>
            } />
            <Route path="/layanan-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Services />
              </>
            } />
            <Route path="/layanan-las-bekasi/:serviceSlug" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <ServiceDetail />
              </>
            } />
            <Route path="/album-bengkel-las-mandiri" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Portfolio />
              </>
            } />
            <Route path="/portfolio-bengkel-las" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Portfolio />
              </>
            } />
            <Route path="/kontak-bengkel-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Contact />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Blog />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <BlogPost />
              </>
            } />
            
            {/* SEO Landing Pages */}
            <Route path="/jasa-las-pagar-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <JasaLasPagar />
              </>
            } />
            <Route path="/jasa-las-kanopi-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <JasaLasKanopi />
              </>
            } />
            <Route path="/jasa-las-tralis-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <JasaLasTralis />
              </>
            } />
            <Route path="/bengkel-las-jakarta" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <BengkelLasJakarta />
              </>
            } />
            
            {/* Redirects for old URLs */}
            <Route path="/tentang" element={<Navigate to="/tentang-kami" replace />} />
            <Route path="/layanan" element={<Navigate to="/layanan-las-bekasi" replace />} />
            <Route path="/portfolio" element={<Navigate to="/album-bengkel-las-mandiri" replace />} />
            <Route path="/kontak" element={<Navigate to="/kontak-bengkel-las-bekasi" replace />} />
            <Route path="/layanan/kanopi" element={<Navigate to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi" replace />} />
            <Route path="/layanan/pagar-besi" element={<Navigate to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi" replace />} />
            <Route path="/layanan/teralis" element={<Navigate to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi" replace />} />
            <Route path="/layanan/railing-tangga" element={<Navigate to="/layanan-las-bekasi/jasa-pembuatan-railing-tangga-bekasi" replace />} />
            
            {/* 404 Page - Must be last */}
            <Route path="*" element={<NotFound />} />
        </Routes>
          <Suspense fallback={<Loading />}>
        <WhatsAppButton />
          </Suspense>
        </Suspense>
        <Analytics />
      </Router>
    </HelmetProvider>
  )
}

export default App
