/**
 * Category helper utilities
 * Maps category names to URL slugs and vice versa
 */

import { CATEGORY_MAP } from '../data/categories'

/**
 * Reverse map: category name -> slug
 */
const REVERSE_CATEGORY_MAP: { [key: string]: string } = {
  'Kanopi': 'kanopi',
  'Pagar': 'pagar',
  'Teralis': 'teralis',
  'Railing': 'railing',
  'Konstruksi Baja': 'konstruksi',
  'Stainless Steel': 'stainless-steel',
  'Premium': 'premium',
  'Keamanan Jendela & Pintu': 'keamanan',
  'Railing Interior': 'interior',
  'Konstruksi Industri': 'industri',
  'Layanan Utama': 'layanan-utama',
  'Best Seller': 'best-seller',
}

/**
 * Get category slug from category name
 */
export const getCategorySlug = (categoryName: string): string => {
  return REVERSE_CATEGORY_MAP[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-')
}

/**
 * Get category name from slug
 */
export const getCategoryName = (slug: string): string => {
  return CATEGORY_MAP[slug] || slug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}
