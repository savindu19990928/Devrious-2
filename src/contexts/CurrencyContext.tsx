import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { formatPrice } from '../utils/currency';
import type { Currency } from '../types/content';

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  format: (lkr: number) => string;
}

const STORAGE_KEY = 'devrious-currency';

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: {children: React.ReactNode;}) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === 'undefined') return 'LKR';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'USD' ? 'USD' : 'LKR';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, currency);
  }, [currency]);

  const setCurrency = useCallback((next: Currency) => setCurrencyState(next), []);
  const format = useCallback((lkr: number) => formatPrice(lkr, currency), [currency]);

  const value = useMemo(() => ({ currency, setCurrency, format }), [currency, setCurrency, format]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}