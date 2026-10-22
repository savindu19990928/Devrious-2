import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';

interface PriceProps {
  lkr: number;
  className?: string;
  endsInNine?: boolean;
}

export function Price({ lkr, className = '', endsInNine = false }: PriceProps) {
  const { format } = useCurrency();
  return <span className={`tabular-nums ${className}`}>{format(lkr, { endsInNine })}</span>;
}