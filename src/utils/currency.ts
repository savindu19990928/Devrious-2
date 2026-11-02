import type { Currency } from '../types/content';

/** Default fallback conversion rate for 1 USD in LKR if live fetch fails. */
export const LKR_PER_USD = 332.06;

/** Endpoint for live USD to LKR conversion rate. */
export const FRANKFURTER_USD_LKR_ENDPOINT = 'https://api.frankfurter.dev/v2/rates?base=usd&quotes=lkr';

export interface FrankfurterRateItem {
  date: string;
  base: string;
  quote: string;
  rate: number;
}

const RATE_CACHE_KEY = 'devrious-usd-lkr-rate';
const RATE_CACHE_TS_KEY = 'devrious-usd-lkr-rate-ts';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

/**
 * Returns the cached LKR/USD exchange rate from localStorage if available,
 * otherwise returns the default fallback rate.
 */
export function getCachedLkrPerUsd(): number {
  if (typeof window === 'undefined') return LKR_PER_USD;
  try {
    const cached = window.localStorage.getItem(RATE_CACHE_KEY);
    const rate = cached ? parseFloat(cached) : NaN;
    if (!isNaN(rate) && rate > 0) {
      return rate;
    }
  } catch {
    // Ignore localStorage access issues
  }
  return LKR_PER_USD;
}

/**
 * Fetches the live USD to LKR exchange rate from the Frankfurter API endpoint.
 * Caches the result in localStorage with a 1-hour TTL.
 */
export async function fetchLkrPerUsdRate(): Promise<number> {
  if (typeof window !== 'undefined') {
    try {
      const cached = window.localStorage.getItem(RATE_CACHE_KEY);
      const ts = window.localStorage.getItem(RATE_CACHE_TS_KEY);
      const rate = cached ? parseFloat(cached) : NaN;
      const timestamp = ts ? parseInt(ts, 10) : 0;
      if (!isNaN(rate) && rate > 0 && Date.now() - timestamp < CACHE_TTL_MS) {
        return rate;
      }
    } catch {
      // Ignore cache read failures and proceed with fetch
    }
  }

  const response = await fetch(FRANKFURTER_USD_LKR_ENDPOINT);
  if (!response.ok) {
    throw new Error(`Failed to fetch exchange rate (${response.status})`);
  }

  const data = (await response.json()) as FrankfurterRateItem[];
  if (Array.isArray(data) && data.length > 0 && typeof data[0]?.rate === 'number' && data[0].rate > 0) {
    const rate = data[0].rate;
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(RATE_CACHE_KEY, rate.toString());
        window.localStorage.setItem(RATE_CACHE_TS_KEY, Date.now().toString());
      } catch {
        // Ignore localStorage write failures
      }
    }
    return rate;
  }

  throw new Error('Unexpected response format from rate endpoint');
}

export interface PriceFormatOptions {
  /** If true, rounds up to the next whole number ending in 9. Otherwise rounds up to the next whole integer. */
  endsInNine?: boolean;
}

/**
 * Converts LKR to USD using the specified or default conversion rate.
 * Always rounds UP to the next whole integer without cent values (do not round down).
 * If endsInNine is true, further rounds UP to the next integer ending in 9.
 * e.g.
 * without endsInNine: 135.90 → 136, 362.40 → 363.
 * with endsInNine:    135.90 → 139, 362.40 → 369.
 */
export function toUsdRounded(
  lkr: number,
  endsInNine: boolean = false,
  rate: number = LKR_PER_USD
): number {
  const effectiveRate = rate > 0 ? rate : LKR_PER_USD;
  const raw = lkr / effectiveRate;
  const whole = Math.ceil(raw - 1e-9);
  if (!endsInNine) {
    return whole;
  }
  const lastDigit = whole % 10;
  return whole + (9 - lastDigit + 10) % 10;
}

export function formatPrice(
  lkr: number,
  currency: Currency,
  options?: PriceFormatOptions,
  rate?: number
): string {
  if (currency === 'USD') {
    return `USD ${toUsdRounded(lkr, options?.endsInNine, rate).toLocaleString('en-US')}`;
  }
  return `LKR ${lkr.toLocaleString('en-US')}`;
}