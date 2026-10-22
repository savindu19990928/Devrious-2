import type { Currency } from '../types/content';

/** Conversion rate calibrated so 45,000 LKR ≈ 135.90 USD. */
export const LKR_PER_USD = 332.23;

export interface PriceFormatOptions {
  /** If true, rounds up to the next whole number ending in 9. Otherwise rounds up to the next whole integer. */
  endsInNine?: boolean;
}

/**
 * Converts LKR to USD.
 * Always rounds UP to the next whole integer without cent values (do not round down).
 * If endsInNine is true, further rounds UP to the next integer ending in 9.
 * e.g.
 * without endsInNine: 135.90 → 136, 362.40 → 363.
 * with endsInNine:    135.90 → 139, 362.40 → 369.
 */
export function toUsdRounded(lkr: number, endsInNine: boolean = false): number {
  const raw = lkr / LKR_PER_USD;
  const whole = Math.ceil(raw - 1e-9);
  if (!endsInNine) {
    return whole;
  }
  const lastDigit = whole % 10;
  return whole + (9 - lastDigit + 10) % 10;
}

export function formatPrice(lkr: number, currency: Currency, options?: PriceFormatOptions): string {
  if (currency === 'USD') {
    return `USD ${toUsdRounded(lkr, options?.endsInNine).toLocaleString('en-US')}`;
  }
  return `LKR ${lkr.toLocaleString('en-US')}`;
}