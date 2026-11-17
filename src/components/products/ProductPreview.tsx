import { accentClasses } from '../../utils/accent';
import type { Accent, Product, ProductCategory } from '../../types/content';

interface ProductPreviewProps {
  product: Product;
  size?: 'md' | 'lg';
}

const categoryAccent: Record<ProductCategory, Accent> = {
  POS: 'brand',
  Management: 'violet',
  ERP: 'brand',
  Marketing: 'jade',
  'E-Commerce': 'jade'
};

export function productAccent(category: ProductCategory): Accent {
  return categoryAccent[category];
}

export function ProductPreview({ product, size = 'md' }: ProductPreviewProps) {
  const Icon = product.icon;
  const accent = accentClasses(categoryAccent[product.category]);
  const bars = barHeights(product.slug);
  const lg = size === 'lg';

  return (
    <div aria-hidden="true" className={`relative overflow-hidden rounded-2xl ${accent.soft} ${lg ? 'p-6 md:p-10' : 'p-4'}`}>
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="relative overflow-hidden rounded-xl border border-white bg-white/90 shadow-soft transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FF6B6B]/70" />
          <span className="h-2 w-2 rounded-full bg-[#FFC75F]/80" />
          <span className="h-2 w-2 rounded-full bg-jade/80" />
          <span className="ml-3 h-2 w-16 rounded-full bg-canvas" />
        </div>
        <div className={`flex ${lg ? 'h-72 md:h-80' : 'h-32'}`}>
          <div className={`flex flex-col gap-2 border-r border-line ${lg ? 'w-36 p-4' : 'w-12 p-2'}`}>
            <span className={`flex items-center justify-center rounded-lg ${accent.solid} ${lg ? 'h-10 w-10' : 'h-7 w-7'}`}>
              <Icon className={lg ? 'h-5 w-5' : 'h-3.5 w-3.5'} />
            </span>
            {[0, 1, 2, 3].map((i) =>
            <span key={i} className={`h-1.5 rounded-full ${i === 0 ? 'bg-jade/60' : 'bg-canvas'} ${lg ? 'mt-2 w-full' : 'w-full'}`} />
            )}
          </div>
          <div className={`flex flex-1 flex-col ${lg ? 'gap-4 p-5' : 'gap-2 p-2.5'}`}>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) =>
              <div key={i} className={`rounded-lg bg-canvas ${lg ? 'p-3' : 'p-1.5'}`}>
                  <span className={`block rounded-full ${i === 1 ? 'bg-jade/50' : 'bg-ink/10'} ${lg ? 'h-2 w-10' : 'h-1 w-5'}`} />
                  <span className={`mt-1.5 block rounded-full bg-ink/70 ${lg ? 'h-3 w-14' : 'h-1.5 w-7'}`} />
                </div>
              )}
            </div>
            <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-canvas/70 p-2">
              {bars.map((h, i) =>
              <span
                key={i}
                className={`flex-1 origin-bottom rounded-t-md transition-transform duration-300 ease-out group-hover:scale-y-110 ${
                i === bars.length - 3 ? 'bg-jade' : i % 2 === 0 ? 'bg-brand/70' : 'bg-violet/60'}`
                }
                style={{ height: `${h}%`, transitionDelay: `${i * 20}ms` }} />

              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}

function barHeights(seed: string): number[] {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n * 31 + seed.charCodeAt(i)) % 9973;
  return Array.from({ length: 9 }, (_, i) => 30 + n * (i + 3) * 17 % 60);
}