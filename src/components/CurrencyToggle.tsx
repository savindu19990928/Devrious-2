import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import type { Currency } from '../types/content';

const options: Currency[] = ['LKR', 'USD'];

interface CurrencyToggleProps {
  tone?: 'light' | 'dark';
}

export function CurrencyToggle({ tone = 'light' }: CurrencyToggleProps) {
  const { currency, setCurrency } = useCurrency();
  const onDark = tone === 'dark';
  return (
    <div
      role="radiogroup"
      aria-label="Show prices in"
      className={`inline-flex rounded-lg p-0.5 text-xs font-semibold ${onDark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-ink-100 ring-1 ring-ink-200'}`}>
      
      {options.map((option) => {
        const active = currency === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setCurrency(option)}
            className={`rounded-md px-2.5 py-1 transition-colors duration-150 ${
            active ?
            onDark ?
            'bg-white text-ink-950' :
            'bg-brand-500 text-canvas shadow-sm' :
            onDark ?
            'text-ink-300 hover:text-white' :
            'text-ink-500 hover:text-ink-900'}`
            }>
            
            {option}
          </button>);

      })}
    </div>);

}