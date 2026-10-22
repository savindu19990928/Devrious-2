import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Price } from './Price';
import type { PreBuild } from '../types/content';

interface SystemCardProps {
  system: PreBuild;
}

export function SystemCard({ system }: SystemCardProps) {
  const Icon = system.icon;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-200 bg-ink-50 p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-ink-500">{system.category}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink-950">
        <Link to={`/pre-builds/${system.slug}`} className="hover:text-brand-700">
          {system.name}
        </Link>
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{system.summary}</p>
      <div className="mt-auto pt-6">
        <p className="text-sm text-ink-500">
          Starting from <Price lkr={system.priceLKR} endsInNine={system.endsInNine} className="font-semibold text-ink-950" />
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to={`/contact?demo=${system.slug}`}
            className="inline-flex items-center rounded-lg bg-brand-500 px-3.5 py-2 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
            
            Request for Demo
          </Link>
          <Link
            to={`/pre-builds/${system.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 transition-colors duration-150 hover:bg-ink-50">
            
            Details <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>);

}