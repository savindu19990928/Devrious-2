import { accentClasses, productAccent } from '../../utils/accent';
import type { Product } from '../../types/content';

interface ProductPreviewProps {
  product: Product;
  size?: 'md' | 'lg';
}

export function ProductPreview({ product, size = 'md' }: ProductPreviewProps) {
  const Icon = product.icon;
  const accent = accentClasses(productAccent(product.category));
  const lg = size === 'lg';

  return (
    <div
      className={`relative overflow-hidden bg-wine-deep ${
        lg ? 'aspect-[16/10] rounded-[1.5rem] border border-line shadow-lift sm:rounded-[2rem]' : 'aspect-[16/10] rounded-2xl'
      }`}>
      <img
        src={product.image}
        alt={`${product.name} preview`}
        loading={lg ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
      />
      <span
        aria-hidden="true"
        className={`absolute flex items-center justify-center rounded-xl shadow-soft ring-2 ring-white/80 ${accent.solid} ${
          lg ? 'left-4 top-4 h-11 w-11 sm:left-5 sm:top-5 sm:h-12 sm:w-12' : 'left-3 top-3 h-9 w-9'
        }`}>
        <Icon className={lg ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4'} />
      </span>
    </div>
  );
}
