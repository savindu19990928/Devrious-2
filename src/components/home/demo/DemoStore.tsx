import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ShoppingBagIcon } from 'lucide-react';
import { demoProducts } from '../../../data/demo';

export function DemoStore() {
  const [cart, setCart] = useState<string[]>([]);
  const subtotal = demoProducts.filter((p) => cart.includes(p.id)).reduce((sum, p) => sum + p.priceLkr, 0);

  const toggle = (id: string) => setCart((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id]);

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <span className="font-display text-lg font-bold italic lowercase text-ink">avenor</span>
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-ink">
          <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
          <AnimatePresence>
            {cart.length > 0 &&
            <motion.span
              key={cart.length}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-white">
              
                {cart.length}
              </motion.span>
            }
          </AnimatePresence>
          <span className="sr-only" aria-live="polite">
            {cart.length} items in cart
          </span>
        </span>
      </div>
      <ul className="grid flex-1 gap-4 overflow-y-auto p-6 sm:grid-cols-3">
        {demoProducts.map((p) => {
          const added = cart.includes(p.id);
          return (
            <li key={p.id} className="flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-canvas sm:aspect-[4/5]">
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 text-xs font-semibold text-muted">{p.tag}</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{p.name}</p>
              <p className="mt-0.5 text-sm text-muted">LKR {formatLkr(p.priceLkr)}</p>
              <button
                type="button"
                onClick={() => toggle(p.id)}
                aria-pressed={added}
                className={`mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                added ? 'bg-brand text-white' : 'bg-ink text-white hover:bg-brand'}`
                }>
                
                {added && <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                {added ? 'Added' : 'Add to cart'}
              </button>
            </li>);

        })}
      </ul>
      <div className="flex items-center justify-between border-t border-line px-6 py-4 text-sm">
        <span className="text-muted">Subtotal</span>
        <span className="font-semibold tabular-nums text-ink">LKR {formatLkr(subtotal)}</span>
      </div>
    </div>);

}

function formatLkr(value: number) {
  return new Intl.NumberFormat('en-LK').format(value);
}