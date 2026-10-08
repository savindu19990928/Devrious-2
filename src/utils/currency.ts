import type { Currency } from '../types/content';

/** Conversion rate calibrated so 45,000 LKR ≈ 135.90 USD. */
export const LKR_PER_USD = 331.13;

/**
 * Converts LKR to USD and always rounds UP to the next whole number ending in 9.
 * e.g. 135.90 → 139, 140.00 → 149, 139.00 → 139.
 */
export function toUsdRounded(lkr: number): number {
  const raw = lkr / LKR_PER_USD;
  const whole = Math.ceil(raw - 1e-9);
  const lastDigit = whole % 10;
  return whole + (9 - lastDigit + 10) % 10;
}

export function formatPrice(lkr: number, currency: Currency): string {
  if (currency === 'USD') {
    return `USD ${toUsdRounded(lkr).toLocaleString('en-US')}`;
  }
  return `LKR ${lkr.toLocaleString('en-US')}`;
}