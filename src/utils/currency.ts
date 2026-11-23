import type { Currency } from '../types/content';

export const DEFAULT_LKR_PER_USD = 300;
export const LKR_PER_USD = DEFAULT_LKR_PER_USD;
export const FRANKFURTER_USD_LKR_URL = 'https://api.frankfurter.dev/v2/rate/usd/lkr';

export function formatPrice(priceLkr: number, currency: Currency, lkrPerUsd: number = DEFAULT_LKR_PER_USD): string {
  if (currency === 'LKR') {
    return `LKR ${priceLkr.toLocaleString('en-US')}`;
  }
  const safeRate = Number.isFinite(lkrPerUsd) && lkrPerUsd > 0 ? lkrPerUsd : DEFAULT_LKR_PER_USD;
  const usd = Math.round(priceLkr / safeRate);
  return `$${usd.toLocaleString('en-US')}`;
}
