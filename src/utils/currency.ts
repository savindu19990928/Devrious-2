import type { Currency } from '../types/content';

export const LKR_PER_USD = 300;

export function formatPrice(priceLkr: number, currency: Currency): string {
  if (currency === 'LKR') {
    return `LKR ${priceLkr.toLocaleString('en-US')}`;
  }
  const usd = Math.round(priceLkr / LKR_PER_USD / 5) * 5;
  return `$${usd.toLocaleString('en-US')}`;
}