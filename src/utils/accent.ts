import type { Accent, ProductCategory } from '../types/content';

interface AccentClasses {
  solid: string;
  soft: string;
  text: string;
  ring: string;
}

const accentMap: Record<Accent, AccentClasses> = {
  brand: { solid: 'bg-brand text-white', soft: 'bg-brand/10', text: 'text-brand', ring: 'ring-brand/20' },
  violet: { solid: 'bg-violet text-white', soft: 'bg-violet/10', text: 'text-violet', ring: 'ring-violet/25' },
  jade: { solid: 'bg-jade text-white', soft: 'bg-jade-light', text: 'text-jade-deep', ring: 'ring-jade/30' }
};

const productCategoryAccent: Record<ProductCategory, Accent> = {
  POS: 'brand',
  Management: 'violet',
  ERP: 'brand',
  CMS: 'brand',
  Marketing: 'jade',
  'E-Commerce': 'jade'
};

export function accentClasses(accent: Accent): AccentClasses {
  return accentMap[accent];
}

export function productAccent(category: ProductCategory): Accent {
  return productCategoryAccent[category];
}

export const easeOut = [0.23, 1, 0.32, 1] as const;
