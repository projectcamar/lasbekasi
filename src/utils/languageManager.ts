/**
 * Language management utility
 * Persists language preference across pages to maintain consistency
 * Supports: English (en), Indonesian (id)
 */

const LANGUAGE_STORAGE_KEY = 'Mandiri_lang_preference'

export type LanguageCode = 'id' | 'en'

/**
 * Get stored language preference from localStorage
 */
export const getStoredLanguage = (): LanguageCode | null => {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'id' || stored === 'en') {
      return stored as LanguageCode
    }
  } catch (error) {
    console.log('Failed to read language from localStorage')
  }
  return null
}

/**
 * Store language preference to localStorage
 */
export const storeLanguage = (lang: LanguageCode): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  } catch (error) {
    console.log('Failed to store language to localStorage')
  }
}

/**
 * Get language from URL location (synchronous)
 */
export const getLanguageFromLocation = (
  pathname: string,
  search: string
): LanguageCode | null => {
  // 1) Check query parameter ?lang=
  const searchParams = new URLSearchParams(search)
  const langParam = searchParams.get('lang')
  if (langParam === 'id' || langParam === 'en') {
    return langParam as LanguageCode
  }

  // 2) Check URL for language prefix
  if (pathname.startsWith('/id') || pathname.startsWith('/id/')) return 'id'
  if (pathname.startsWith('/eng') || pathname.startsWith('/eng/')) return 'en'

  return null
}

/**
 * Get current language with consistent priority
 */
export const getCurrentLanguage = (
  pathname: string,
  search: string
): LanguageCode => {
  // 1) Check URL first
  const urlLang = getLanguageFromLocation(pathname, search)
  if (urlLang) {
    storeLanguage(urlLang)
    return urlLang
  }

  // 2) Check stored preference
  const stored = getStoredLanguage()
  if (stored) {
    return stored
  }

  // 3) Fallback to browser language
  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang?.startsWith('id')) {
    storeLanguage('id')
    return 'id'
  }

  // Default to English
  storeLanguage('en')
  return 'en'
}

/**
 * Generate URL with language parameter
 */
export const getLinkWithLanguage = (path: string, currentLanguage: LanguageCode): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const hasQuery = cleanPath.includes('?')
  const separator = hasQuery ? '&' : '?'
  
  return `${cleanPath}${separator}lang=${currentLanguage}`
}

/**
 * Detect language from IP
 */
export const detectLanguageFromIP = async (): Promise<LanguageCode | null> => {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Timeout')), 2000)
    })
    
    const fetchPromise = fetch('https://ipapi.co/json/')
      .then(response => response.json())
    
    const data = await Promise.race([fetchPromise, timeoutPromise]) as any
    const countryCode = data.country_code
    
    let resolvedLang: LanguageCode | null = null
    if (countryCode === 'ID') {
      resolvedLang = 'id'
    } else {
      resolvedLang = 'en'
    }
    
    if (resolvedLang) {
      storeLanguage(resolvedLang)
    }
    return resolvedLang
  } catch (error) {
    console.log('IP detection failed')
    return null
  }
}

/**
 * Detect language from various sources in priority order
 */
export const detectLanguage = async (
  pathname: string,
  search: string
): Promise<LanguageCode> => {
  const langParam = getLanguageFromLocation(pathname, search)
  if (langParam) {
    storeLanguage(langParam)
    return langParam
  }

  const stored = getStoredLanguage()
  if (stored) {
    return stored
  }

  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    const countryCode = data.country_code
    
    if (countryCode === 'ID') {
      storeLanguage('id')
      return 'id'
    }
  } catch (error) {
    console.log('IP detection failed, checking browser language')
  }

  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang?.startsWith('id')) {
    storeLanguage('id')
    return 'id'
  }

  storeLanguage('en')
  return 'en'
}
