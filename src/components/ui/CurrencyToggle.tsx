import { motion } from 'framer-motion';
import { useCurrency } from '../../contexts/CurrencyContext';
import { easeOut } from '../../utils/accent';
import type { Currency } from '../../types/content';

const currencies: Currency[] = ['LKR', 'USD'];

export function CurrencyToggle({ showNote = true }: { showNote?: boolean }) {
  const { currency, setCurrency, lkrPerUsd, rateDate, isLiveRate } = useCurrency();
  return (
    <div className="flex flex-col gap-2">
      <div role="group" aria-label="Price currency" className="inline-flex w-fit rounded-full border border-line bg-white p-1 shadow-soft">
        {currencies.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCurrency(c)}
            aria-pressed={currency === c}
            className={`relative rounded-full px-5 py-2 text-sm font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-deep active:scale-[0.97] ${
              currency === c ? 'text-ink' : 'text-ink/55 hover:text-ink'
            }`}>
            {currency === c && (
              <motion.span
                layoutId="currency-pill"
                className="absolute inset-0 rounded-full bg-jade"
                transition={{ duration: 0.22, ease: easeOut }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      {showNote && (
        <p className="text-xs text-muted">
          {currency === 'USD'
            ? isLiveRate
              ? `Live rate: LKR ${lkrPerUsd.toFixed(2)} = $1${rateDate ? ` (${rateDate})` : ''}`
              : `Approximate, at LKR ${lkrPerUsd} = $1`
            : 'Starting prices, one-time'}
        </p>
      )}
    </div>
  );
}
