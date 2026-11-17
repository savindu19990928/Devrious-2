import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ShoppingBagIcon } from 'lucide-react';
import { demoProducts } from '../../../data/demo';

export function DemoStore() {
  const [cart, setCart] = useState<string[]>([]);
  const subtotal = demoProducts.filter((p) => cart.includes(p.id)).reduce((sum, p) => sum + p.priceLkr, 0);

  const toggle = (id: string) => setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6 sm:py-4">
        <span className="font-display text-lg font-bold italic lowercase text-ink">avenor</span>
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-ink sm:h-10 sm:w-10">
          <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
          <AnimatePresence>
            {cart.length > 0 && (
              <motion.span
                key={cart.length}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-white">
                {cart.length}
              </motion.span>
            )}
          </AnimatePresence>
          <span className="sr-only" aria-live="polite">
            {cart.length} items in cart
          </span>
        </span>
      </div>
      <ul className="grid flex-1 gap-3 overflow-y-auto p-4 sm:grid-cols-3 sm:gap-4 sm:p-6">
        {demoProducts.map((p) => {
          const added = cart.includes(p.id);
          return (
            <li
              key={p.id}
              className="flex items-center gap-3.5 rounded-2xl border border-line/60 p-2.5 sm:flex-col sm:items-stretch sm:gap-0 sm:border-0 sm:p-0">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-canvas sm:aspect-[4/5] sm:h-auto sm:w-full">
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1 sm:mt-3">
                <p className="text-[11px] font-semibold text-muted sm:text-xs">{p.tag}</p>
                <p className="mt-0.5 truncate text-sm font-semibold text-ink">{p.name}</p>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">LKR {formatLkr(p.priceLkr)}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(p.id)}
                aria-pressed={added}
                className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors duration-150 sm:mt-3 sm:px-4 ${
                  added ? 'bg-brand text-white' : 'bg-ink text-white hover:bg-brand'
                }`}>
                {added && <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                {added ? 'Added' : 'Add to cart'}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between border-t border-line px-4 py-3 text-sm sm:px-6 sm:py-4">
        <span className="text-muted">Subtotal</span>
        <span className="font-semibold tabular-nums text-ink">LKR {formatLkr(subtotal)}</span>
      </div>
    </div>
  );
}

function formatLkr(value: number) {
  return new Intl.NumberFormat('en-LK').format(value);
}
