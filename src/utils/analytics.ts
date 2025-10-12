/**
 * Google Analytics Event Tracking Helper
 * 
 * Usage:
 * import { trackEvent } from '@/utils/analytics'
 * 
 * trackEvent('button_click', {
 *   button_name: 'whatsapp_cta',
 *   page: '/layanan-las-bekasi'
 * })
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track custom events to Google Analytics
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track page views (for SPA navigation)
 * @param pagePath - Page path
 * @param pageTitle - Page title
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-BR85RR2ZHX', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
}

/**
 * Track WhatsApp button clicks
 * @param location - Where the button was clicked (e.g., 'hero', 'footer')
 */
export const trackWhatsAppClick = (location: string) => {
  trackEvent('contact_whatsapp', {
    contact_method: 'whatsapp',
    button_location: location
  });
}

/**
 * Track service page views
 * @param serviceName - Name of the service
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', {
    service_name: serviceName,
    content_type: 'service_page'
  });
}

/**
 * Track portfolio item views
 * @param itemName - Name of the portfolio item
 */
export const trackPortfolioView = (itemName: string) => {
  trackEvent('view_item', {
    item_name: itemName,
    content_type: 'portfolio'
  });
}

/**
 * Track form submissions
 * @param formName - Name of the form
 */
export const trackFormSubmit = (formName: string) => {
  trackEvent('generate_lead', {
    form_name: formName,
    value: 1
  });
}

/**
 * Track phone clicks
 */
export const trackPhoneClick = () => {
  trackEvent('contact_phone', {
    contact_method: 'phone'
  });
}

/**
 * Track button clicks
 * @param buttonName - Name/label of the button
 * @param location - Where the button is located
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location
  });
}

/**
 * Track scroll depth
 * @param percentage - Scroll percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    percent_scrolled: percentage
  });
}

/**
 * Track video plays (if you add videos later)
 * @param videoName - Name of the video
 */
export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_start', {
    video_title: videoName
  });
}

/**
 * Track search queries (if you add search later)
 * @param searchTerm - Search term
 */
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm
  });
}

/**
 * Track errors
 * @param errorMessage - Error message
 * @param errorPage - Page where error occurred
 */
export const trackError = (errorMessage: string, errorPage: string) => {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    page: errorPage
  });
}

export default {
  trackEvent,
  trackPageView,
  trackWhatsAppClick,
  trackServiceView,
  trackPortfolioView,
  trackFormSubmit,
  trackPhoneClick,
  trackButtonClick,
  trackScrollDepth,
  trackVideoPlay,
  trackSearch,
  trackError
}

