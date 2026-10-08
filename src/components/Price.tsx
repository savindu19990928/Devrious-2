import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';

interface PriceProps {
  lkr: number;
  className?: string;
}

export function Price({ lkr, className = '' }: PriceProps) {
  const { format } = useCurrency();
  return <span className={`tabular-nums ${className}`}>{format(lkr)}</span>;
}