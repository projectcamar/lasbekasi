import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use terser for better minification than esbuild
    minify: 'terser',
    cssMinify: true,
    target: 'es2015',
    terserOptions: {
      compress: {
        drop_console: true,        // Remove console.log
        drop_debugger: true,       // Remove debugger statements
        passes: 3,                 // Multiple passes for better compression
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific functions
        ecma: 2015,               // Target ES2015
        comparisons: true,        // Optimize comparisons
        inline: 2,                // Aggressive function inlining
        reduce_vars: true,        // Optimize variable usage
        dead_code: true,          // Remove unreachable code
        toplevel: true,           // Aggressive top-level optimization
        hoist_funs: true,         // Hoist function declarations
        hoist_vars: false         // Don't hoist var declarations
      },
      mangle: {
        toplevel: true,           // Mangle top-level names
        safari10: true            // Safari 10 bug workaround
      },
      format: {
        comments: false,          // Remove all comments
        ecma: 2015,              // Use ES2015 syntax for output
        ascii_only: false,       // Allow unicode characters
        beautify: false          // No beautification
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
          icons: ['lucide-react']
        },
        // Optimize chunk filenames
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimize bundle size
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  // Global esbuild optimization (for dev mode)
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none'
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false
    }
  }
})
