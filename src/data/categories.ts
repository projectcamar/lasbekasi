// Centralized categories for consistency across all pages (Steel Fabrication / Bengkel Las Mandiri)
export const CATEGORIES = [
  'Kanopi',
  'Pagar',
  'Teralis',
  'Railing',
  'Konstruksi',
  'Stainless Steel',
  'Premium',
  'Keamanan',
  'Interior',
  'Industri',
  'Layanan Utama',
  'Best Seller',
] as const

export const CATEGORY_MAP: { [key: string]: string } = {
  'kanopi': 'Kanopi',
  'pagar': 'Pagar',
  'teralis': 'Teralis',
  'railing': 'Railing',
  'konstruksi': 'Konstruksi Baja',
  'stainless-steel': 'Stainless Steel',
  'premium': 'Premium',
  'keamanan': 'Keamanan Jendela & Pintu',
  'interior': 'Railing Interior',
  'industri': 'Konstruksi Industri',
  'layanan-utama': 'Layanan Utama',
  'best-seller': 'Best Seller',
}
