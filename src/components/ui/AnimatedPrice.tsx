import { AnimatePresence, motion } from 'framer-motion';
import { useCurrency } from '../../contexts/CurrencyContext';
import { formatPrice } from '../../utils/currency';
import { easeOut } from '../../utils/accent';

interface AnimatedPriceProps {
  priceLkr: number;
  className?: string;
  heightClass?: string;
}

export function AnimatedPrice({ priceLkr, className = 'text-xl', heightClass = 'h-8' }: AnimatedPriceProps) {
  const { currency } = useCurrency();
  return (
    <span className={`relative block overflow-hidden ${heightClass}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currency}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.18, ease: easeOut }}
          className={`block font-extrabold tracking-tight text-ink ${className}`}>
          
          {formatPrice(priceLkr, currency)}
        </motion.span>
      </AnimatePresence>
    </span>);

}