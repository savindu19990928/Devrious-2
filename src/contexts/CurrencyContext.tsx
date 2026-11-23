import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Currency } from '../types/content';
import { DEFAULT_LKR_PER_USD, FRANKFURTER_USD_LKR_URL } from '../utils/currency';

const RATE_STORAGE_KEY = 'devrious_usd_lkr_rate';
const RATE_TTL_MS = 30 * 60 * 1000;

interface CachedRate {
  rate: number;
  date: string | null;
  fetchedAt: number;
}

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  lkrPerUsd: number;
  rateDate: string | null;
  isLiveRate: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function readCachedRate(): { rate: number; date: string | null; isLive: boolean } {
  try {
    const raw = window.sessionStorage.getItem(RATE_STORAGE_KEY);
    if (!raw) {
      return { rate: DEFAULT_LKR_PER_USD, date: null, isLive: false };
    }
    const parsed = JSON.parse(raw) as Partial<CachedRate>;
    const isFresh =
      typeof parsed.fetchedAt === 'number' &&
      Date.now() - parsed.fetchedAt < RATE_TTL_MS &&
      typeof parsed.rate === 'number' &&
      Number.isFinite(parsed.rate) &&
      parsed.rate > 0;
    if (isFresh && parsed.rate) {
      return {
        rate: parsed.rate,
        date: typeof parsed.date === 'string' ? parsed.date : null,
        isLive: true
      };
    }
  } catch {
    // Ignore storage errors and fall back to default rate.
  }
  return { rate: DEFAULT_LKR_PER_USD, date: null, isLive: false };
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('LKR');
  const [rateInfo, setRateInfo] = useState<{ rate: number; date: string | null; isLive: boolean }>(() =>
    typeof window !== 'undefined'
      ? readCachedRate()
      : { rate: DEFAULT_LKR_PER_USD, date: null, isLive: false }
  );

  useEffect(() => {
    if (rateInfo.isLive) return;
    const controller = new AbortController();

    fetch(FRANKFURTER_USD_LKR_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ rate?: unknown; date?: unknown }>;
      })
      .then((data) => {
        if (typeof data?.rate === 'number' && Number.isFinite(data.rate) && data.rate > 0) {
          const date = typeof data.date === 'string' ? data.date : null;
          setRateInfo({ rate: data.rate, date, isLive: true });
          try {
            const payload: CachedRate = { rate: data.rate, date, fetchedAt: Date.now() };
            window.sessionStorage.setItem(RATE_STORAGE_KEY, JSON.stringify(payload));
          } catch {
            // Ignore storage quota / privacy mode errors.
          }
        }
      })
      .catch(() => {
        // Retain fallback rate silently on network failure or abort.
      });

    return () => controller.abort();
  }, [rateInfo.isLive]);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      lkrPerUsd: rateInfo.rate,
      rateDate: rateInfo.date,
      isLiveRate: rateInfo.isLive
    }),
    [currency, rateInfo]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider');
  return ctx;
}
