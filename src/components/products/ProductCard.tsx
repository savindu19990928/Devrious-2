import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { ProductPreview, productAccent } from './ProductPreview';
import { AnimatedPrice } from '../ui/AnimatedPrice';
import { accentClasses } from '../../utils/accent';
import type { Product } from '../../types/content';

interface ProductCardProps {
  product: Product;
  showActions?: boolean;
}

export function ProductCard({ product, showActions = true }: ProductCardProps) {
  const accent = accentClasses(productAccent(product.category));

  return (
    <article className="gradient-ring group relative flex h-full flex-col rounded-3xl border border-line bg-white p-3 shadow-soft transition-[transform,box-shadow] duration-200 ease-out focus-within:-translate-y-1 hover:-translate-y-1.5 hover:shadow-lift">
      <ProductPreview product={product} />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold ${accent.soft} ${accent.text}`}>
            {product.category}
          </span>
          <span className="truncate text-xs font-semibold text-muted">{product.bestFor}</span>
        </div>
        <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-ink">
          <Link
            to={`/pre-builds/${product.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand">
            
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="text-xs font-semibold text-muted">Starting from</p>
            <AnimatedPrice priceLkr={product.priceLkr} className="text-xl" />
          </div>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas text-ink transition-[transform,background-color] duration-200 ease-out group-hover:rotate-45 group-hover:bg-jade">
            
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
        {showActions &&
        <div className="relative z-10 mt-5 grid grid-cols-2 gap-2 border-t border-line pt-4">
            <Link
            to={`/contact?product=${product.slug}&intent=demo`}
            className="whitespace-nowrap rounded-full bg-ink px-3 py-2.5 text-center text-xs font-bold text-white transition-colors duration-150 hover:bg-brand active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
            
              Request a demo
            </Link>
            <Link
            to={`/contact?product=${product.slug}&intent=quote`}
            className="whitespace-nowrap rounded-full border border-line px-3 py-2.5 text-center text-xs font-bold text-ink transition-colors duration-150 hover:border-jade hover:bg-jade-light active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
            
              Get a quote
            </Link>
          </div>
        }
      </div>
    </article>);

}