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

// Safe lazy loader that auto-reloads page on chunk load failures (e.g. after new deployment)
const safeLazy = (importFunc: () => Promise<any>) => {
  return lazy(() => 
    importFunc().catch((err) => {
      console.warn("Dynamic import failed (chunk load error). Auto-reloading page to fetch fresh bundles...", err);
      window.location.reload();
      return new Promise(() => {}); // Keep React happy while page reloads
    })
  );
};

// ===== MANDIRI STEEL - Rebranded Landing Pages =====
import Home from './pages/Home'
const NotFound = safeLazy(() => import('./pages/NotFound'))
import WhatsAppButton from './components/WhatsAppButton'
import SingaporeLanguageModal from './components/SingaporeLanguageModal'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

const About = safeLazy(() => import('./pages/About'))
const Products = safeLazy(() => import('./pages/Products'))
const Blog = safeLazy(() => import('./pages/Blog'))
const BlogPost = safeLazy(() => import('./pages/BlogPost'))
const CustomOrder = safeLazy(() => import('./pages/CustomOrder'))
const Partnership = safeLazy(() => import('./pages/Partnership'))
const Testimonials = safeLazy(() => import('./pages/Testimonials'))

// Admin Pages
const AdminLogin = safeLazy(() => import('./pages/AdminLogin'))
const AdminDashboard = safeLazy(() => import('./pages/AdminDashboard'))
const AdminBlogManager = safeLazy(() => import('./pages/AdminBlogManager'))

// SEO & Legal Pages
const CommodityExportBekasi = safeLazy(() => import('./pages/CommodityExportBekasi'))
const SearchResults = safeLazy(() => import('./pages/SearchResults'))
const TermsOfService = safeLazy(() => import('./pages/TermsOfService'))
const ShippingInformation = safeLazy(() => import('./pages/ShippingInformation'))
const ImageLicense = safeLazy(() => import('./pages/ImageLicense'))

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

  // Auto-reload on unhandled ChunkLoadError promise rejections
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      const errorMsg = event.reason?.message || '';
      if (
        errorMsg.includes('ChunkLoadError') || 
        errorMsg.includes('Loading chunk') || 
        errorMsg.includes('Failed to fetch dynamically imported module')
      ) {
        console.warn('Chunk load error caught in promise rejection. Auto-reloading page...', event.reason);
        window.location.reload();
      }
    };

    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
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
