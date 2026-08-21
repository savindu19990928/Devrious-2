import React from 'react';
import { LogoMark } from '../Logo';
import type { ProjectVariant } from '../../data/projects';

const chip =
'rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ash';

function body(variant: ProjectVariant) {
  switch (variant) {
    case 'ems':
      return (
        <div className="flex h-full gap-3">
          <div className="hidden w-1/5 flex-col gap-2 border-r border-white/8 pr-3 sm:flex">
            {[0, 1, 2, 3].map((i) =>
            <span
              key={i}
              className={`h-2 rounded-full ${i === 0 ? 'w-full bg-accent' : 'w-3/4 bg-white/10'}`} />

            )}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            {[0, 1, 2, 3].map((i) =>
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5">
              
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 font-mono text-[8px] text-paper">
                  {['AR', 'KM', 'SD', 'PJ'][i]}
                </span>
                <span className="h-1.5 w-1/3 rounded-full bg-white/12" />
                <span
                className={`ml-auto h-1.5 w-10 rounded-full ${
                i === 1 ? 'bg-signal' : 'bg-accent'}`
                } />
              
              </div>
            )}
          </div>
        </div>);

    case 'pos':
      return (
        <div className="flex h-full gap-3">
          <div className="grid flex-1 grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) =>
            <span key={i} className="rounded-lg border border-white/8 bg-white/[0.03]" />
            )}
          </div>
          <div className="hidden w-1/3 flex-col justify-between rounded-lg border border-white/8 bg-white/[0.02] p-3 sm:flex">
            <div className="space-y-2">
              {[0, 1, 2].map((i) =>
              <div key={i} className="flex items-center justify-between">
                  <span className="h-1.5 w-1/2 rounded-full bg-white/12" />
                  <span className="h-1.5 w-6 rounded-full bg-white/20" />
                </div>
              )}
            </div>
            <div className="rounded-md bg-accent px-3 py-2 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
              checkout
            </div>
          </div>
        </div>);

    case 'docai':
      return (
        <div className="flex h-full gap-3">
          <div className="flex-1 space-y-1.5 rounded-lg border border-white/8 bg-white/[0.02] p-3">
            {[100, 92, 78, 96, 60, 88, 70].map((w, i) =>
            <span
              key={i}
              className={`block h-1.5 rounded-full ${
              i === 2 || i === 5 ? 'bg-accent/70' : 'bg-white/10'}`
              }
              style={{ width: `${w}%` }} />

            )}
          </div>
          <div className="hidden w-2/5 flex-col gap-2 sm:flex">
            {['party · verified', 'value · 4.2m', 'term · 24 mo'].map((t) =>
            <span
              key={t}
              className="rounded-md border border-white/10 px-2.5 py-2 font-mono text-[9px] tracking-[0.08em] text-paper/75">
              
                {t}
              </span>
            )}
            <span className="mt-auto rounded-md bg-signal px-2.5 py-2 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink">
              review
            </span>
          </div>
        </div>);

    case 'crm':
      return (
        <div className="grid h-full grid-cols-4 gap-2">
          {['New', 'Quoted', 'Won', 'Active'].map((col, i) =>
          <div key={col} className="flex flex-col gap-2">
              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-ash">
                {col}
              </span>
              {Array.from({ length: 3 - i % 2 }).map((_, k) =>
            <span
              key={k}
              className={`h-9 rounded-md border ${
              i === 2 && k === 0 ?
              'border-accent/50 bg-accent/10' :
              'border-white/8 bg-white/[0.03]'}`
              } />

            )}
            </div>
          )}
        </div>);

    case 'portal':
      return (
        <div className="flex h-full flex-col gap-2.5">
          <div className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ash">
              onboarding path
            </span>
            <span className="ml-auto font-mono text-[9px] text-accent">72%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-[72%] rounded-full bg-accent" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            {['Paperwork', 'Systems access', 'Team intro', 'First task'].map((step, i) =>
            <span
              key={step}
              className={`flex items-center gap-2 rounded-lg border px-3 text-[10px] ${
              i < 3 ?
              'border-accent/40 bg-accent/[0.07] text-paper' :
              'border-white/8 bg-white/[0.02] text-ash'}`
              }>
              
                <span
                className={`h-1.5 w-1.5 rounded-full ${i < 3 ? 'bg-accent' : 'bg-white/25'}`} />
              
                {step}
              </span>
            )}
          </div>
        </div>);

    case 'web':
    default:
      return (
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="font-display text-[clamp(1.5rem,3.6vw,2.75rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-paper">
              Precision
              <br />
              <span className="text-accent">manufactured.</span>
            </p>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-2/5 rounded-full bg-white/10" />
              <span className="block h-1.5 w-1/4 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) =>
            <span key={i} className="h-10 rounded-md border border-white/8 bg-white/[0.03]" />
            )}
          </div>
        </div>);

  }
}

/**
 * Product previews are drawn as abstract interface compositions rather than
 * screenshots — the same fragments the hero system is built from.
 */
export function ProjectPreview({
  variant,
  label



}: {variant: ProjectVariant;label: string;}) {
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink"
      aria-hidden="true">
      
      <div className="flex items-center gap-2.5 border-b border-white/8 px-3 py-2.5">
        <LogoMark className="h-5 w-4" />
        <span className={chip}>{label}</span>
        <span className="ml-auto flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </span>
      </div>
      <div className="flex-1 p-3">{body(variant)}</div>
    </div>);

}