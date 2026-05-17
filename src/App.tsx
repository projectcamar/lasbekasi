import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { enableImageProtection, addImageProtectionStyles } from './utils/imageProtection'
import { initializeGlobalWhatsAppTracking } from './utils/globalWhatsAppTracking'
import { LanguageProvider } from './utils/languageContext'
import './App.css'

// ===== MANDIRI STEEL - Rebranded Landing Pages =====
import Home from './pages/Home'
const NotFound = lazy(() => import('./pages/NotFound'))
import WhatsAppButton from './components/WhatsAppButton'
import SingaporeLanguageModal from './components/SingaporeLanguageModal'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const CustomOrder = lazy(() => import('./pages/CustomOrder'))
const Partnership = lazy(() => import('./pages/Partnership'))
const Testimonials = lazy(() => import('./pages/Testimonials'))

// Admin Pages
const AdminLogin = lazy(() => import('./pages/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const AdminBlogManager = lazy(() => import('./pages/AdminBlogManager'))

// SEO & Legal Pages
const CommodityExportBekasi = lazy(() => import('./pages/CommodityExportBekasi'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const ShippingInformation = lazy(() => import('./pages/ShippingInformation'))
const ImageLicense = lazy(() => import('./pages/ImageLicense'))

// Minimal loading for better UX
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#fff'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

import { TutorialProvider } from './context/TutorialContext'
import AdminTutorial from './components/AdminTutorial'

function App() {
  // Enable image protection globally
  useEffect(() => {
    addImageProtectionStyles()
    const cleanup = enableImageProtection()
    return cleanup
  }, [])

  // Initialize global WhatsApp click tracking
  useEffect(() => {
    initializeGlobalWhatsAppTracking()
  }, [])

  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <TutorialProvider>
            <ScrollToTop />
            <SingaporeLanguageModal />
            <Routes>
              {/* Primary Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              } />
              <Route path="/products" element={
                <Suspense fallback={<Loading />}>
                  <Products />
                </Suspense>
              } />
              <Route path="/blog" element={
                <Suspense fallback={<Loading />}>
                  <Blog />
                </Suspense>
              } />
              <Route path="/blog/:slug" element={
                <Suspense fallback={<Loading />}>
                  <BlogPost />
                </Suspense>
              } />
              <Route path="/testimonials" element={
                <Suspense fallback={<Loading />}>
                  <Testimonials />
                </Suspense>
              } />
              <Route path="/custom-order" element={
                <Suspense fallback={<Loading />}>
                  <CustomOrder />
                </Suspense>
              } />
              <Route path="/partnership" element={
                <Suspense fallback={<Loading />}>
                  <Partnership />
                </Suspense>
              } />

              {/* Search */}
              <Route path="/search" element={
                <Suspense fallback={<Loading />}>
                  <SearchResults />
                </Suspense>
              } />

              {/* Legal Pages */}
              <Route path="/terms-of-service" element={
                <Suspense fallback={<Loading />}>
                  <TermsOfService />
                </Suspense>
              } />
              <Route path="/shipping-information" element={
                <Suspense fallback={<Loading />}>
                  <ShippingInformation />
                </Suspense>
              } />
              <Route path="/image-license" element={
                <Suspense fallback={<Loading />}>
                  <ImageLicense />
                </Suspense>
              } />

              {/* Admin Routes */}
              <Route path="/admin/login" element={
                <Suspense fallback={<Loading />}>
                  <AdminLogin />
                </Suspense>
              } />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Suspense fallback={<Loading />}>
                    <AdminDashboard />
                  </Suspense>
                </ProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <Suspense fallback={<Loading />}>
                    <AdminDashboard />
                  </Suspense>
                </ProtectedRoute>
              } />
              <Route path="/admin/blog" element={
                <ProtectedRoute>
                  <Suspense fallback={<Loading />}>
                    <AdminBlogManager />
                  </Suspense>
                </ProtectedRoute>
              } />

              {/* SEO Landing Pages */}
              <Route path="/commodity-export-bekasi" element={
                <Suspense fallback={<Loading />}>
                  <CommodityExportBekasi />
                </Suspense>
              } />

              {/* Language path redirects to home */}
              <Route path="/id" element={<Home />} />
              <Route path="/eng" element={<Home />} />
              <Route path="/ar" element={<Home />} />
              <Route path="/zh" element={<Home />} />
              <Route path="/ja" element={<Home />} />
              <Route path="/es" element={<Home />} />
              <Route path="/fr" element={<Home />} />
              <Route path="/ko" element={<Home />} />

              {/* 404 Pages */}
              <Route path="/404-not-found" element={
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              } />
              <Route path="*" element={
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              } />
            </Routes>
            <AdminTutorial />
            <WhatsAppButton />
            <Analytics />
            <SpeedInsights />
          </TutorialProvider>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
