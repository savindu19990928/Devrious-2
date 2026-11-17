import { motion } from 'framer-motion';
import { SearchIcon, XIcon } from 'lucide-react';
import { CurrencyToggle } from '../ui/CurrencyToggle';
import { productCategories } from '../../data/products';
import { easeOut } from '../../utils/accent';
import type { ProductCategory } from '../../types/content';

type CategoryFilter = 'All' | ProductCategory;

interface ProductFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  category: CategoryFilter;
  onCategoryChange: (value: CategoryFilter) => void;
  resultCount: number;
}

export function ProductFilters({ query, onQueryChange, category, onCategoryChange, resultCount }: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="relative w-full lg:max-w-md">
          <label htmlFor="product-search" className="sr-only">
            Search Pre Builds
          </label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted sm:left-5" aria-hidden="true" />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search systems — e.g. pharmacy, hotel, ERP"
            className="w-full rounded-full border border-line bg-white py-3.5 pl-11 pr-11 text-sm font-semibold text-ink shadow-soft transition-[border-color,box-shadow] duration-150 placeholder:font-medium placeholder:text-muted focus:border-jade focus:outline-none focus:ring-4 focus:ring-jade/20 sm:py-4 sm:pl-12 sm:pr-12"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink">
              <XIcon className="h-4 w-4" />
            </button>
          )}
        </div>
        <CurrencyToggle />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:gap-2 sm:px-0">
          {productCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => onCategoryChange(c)}
                aria-pressed={active}
                className={`relative shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:px-4 sm:py-2 sm:text-sm ${
                  active ? 'border-ink text-white' : 'border-line bg-white text-ink/70 hover:border-ink/25 hover:text-ink'
                }`}>
                {active && (
                  <motion.span layoutId="category-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ duration: 0.2, ease: easeOut }} />
                )}
                <span className="relative flex items-center gap-1.5 sm:gap-2">
                  {active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-jade" />}
                  {c}
                </span>
              </button>
            );
          })}
        </div>
        <p className="shrink-0 text-xs font-semibold text-muted sm:text-sm" aria-live="polite">
          {resultCount} {resultCount === 1 ? 'system' : 'systems'}
        </p>
      </div>
    </div>
  );
}
