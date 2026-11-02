import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  formatPrice,
  fetchLkrPerUsdRate,
  getCachedLkrPerUsd,
  type PriceFormatOptions,
} from '../utils/currency';
import type { Currency } from '../types/content';

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  format: (lkr: number, options?: PriceFormatOptions) => string;
  rate: number;
}

const STORAGE_KEY = 'devrious-currency';

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: {children: React.ReactNode;}) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === 'undefined') return 'LKR';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'USD' ? 'USD' : 'LKR';
  });

  const [rate, setRate] = useState<number>(() => getCachedLkrPerUsd());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, currency);
  }, [currency]);

  useEffect(() => {
    let isMounted = true;
    fetchLkrPerUsdRate()
      .then((liveRate) => {
        if (isMounted && liveRate > 0) {
          setRate(liveRate);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch live USD/LKR rate, using fallback rate:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const setCurrency = useCallback((next: Currency) => setCurrencyState(next), []);
  const format = useCallback(
    (lkr: number, options?: PriceFormatOptions) => formatPrice(lkr, currency, options, rate),
    [currency, rate]
  );

  const value = useMemo(
    () => ({ currency, setCurrency, format, rate }),
    [currency, setCurrency, format, rate]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}