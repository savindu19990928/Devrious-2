import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LogoMark } from '../Logo';
import type { ServiceVariant } from '../../data/services';
import { DUR, EASE } from '../../utils/motion';

const label =
'font-mono text-[9px] uppercase tracking-[0.18em] text-ash';

function renderVariant(variant: ServiceVariant, reduce: boolean | null) {
  switch (variant) {
    case 'products':
      return (
        <div className="flex h-full flex-col gap-2.5">
          {['Workflows', 'Records', 'Permissions'].map((row, i) =>
          <motion.div
            key={row}
            className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink px-4 py-3"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: DUR.base, ease: EASE, delay: i * 0.05 }}>
            
              <span className={`h-6 w-6 rounded-md ${i === 0 ? 'bg-accent' : 'bg-white/10'}`} />
              <span className="font-display text-sm font-semibold text-paper">{row}</span>
              <span className="ml-auto h-1.5 w-10 rounded-full bg-white/12" />
            </motion.div>
          )}
          <div className="mt-auto flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3">
            <span className={label}>one platform</span>
            <LogoMark className="h-6 w-5" />
          </div>
        </div>);

    case 'web':
      return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-ink">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div className="flex flex-1 flex-col justify-center px-5">
            <motion.p
              className="font-display text-3xl font-extrabold uppercase leading-none tracking-tightest text-paper"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, ease: EASE }}>
              
              Brand
              <br />
              <span className="text-accent">in motion</span>
            </motion.p>
            <div className="mt-4 space-y-1.5">
              <span className="block h-1.5 w-3/4 rounded-full bg-white/10" />
              <span className="block h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-3">
            {[0, 1, 2].map((i) =>
            <span key={i} className="h-9 rounded-md bg-white/[0.06]" />
            )}
          </div>
        </div>);

    case 'ai':
      return (
        <div className="relative grid h-full place-items-center rounded-lg border border-white/10 bg-ink">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
            {[
            'M40 60 L100 100',
            'M40 140 L100 100',
            'M160 60 L100 100',
            'M160 140 L100 100'].
            map((d, i) =>
            <motion.path
              key={d}
              d={d}
              stroke="#2d2d2d"
              strokeWidth="1"
              fill="none"
              initial={reduce ? { opacity: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }} />

            )}
          </svg>
          {[
          'left-4 top-8',
          'left-4 bottom-8',
          'right-4 top-8',
          'right-4 bottom-8'].
          map((pos, i) =>
          <span
            key={pos}
            className={`absolute ${pos} h-7 w-7 rounded-md border border-white/12 bg-graphite`} />

          )}
          <motion.span
            className="relative grid h-16 w-16 place-items-center rounded-full border border-accent/50"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
            
            <span className="h-3 w-3 rounded-full bg-accent" />
          </motion.span>
          <span className={`absolute bottom-3 ${label}`}>decide · act</span>
        </div>);

    case 'systems':
      return (
        <div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => {
            const center = i === 4;
            return (
              <motion.span
                key={i}
                className={`grid place-items-center rounded-lg border ${
                center ?
                'border-accent bg-accent' :
                'border-white/10 bg-ink'}`
                }
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: DUR.base, ease: EASE, delay: i * 0.03 }}>
                
                {center ?
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-ink">
                    core
                  </span> :

                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                }
              </motion.span>);

          })}
        </div>);

    case 'engineering':
    default:
      return (
        <div className="flex h-full flex-col justify-center gap-3">
          {['Concept', 'Design', 'Build', 'Launch'].map((step, i) =>
          <motion.div
            key={step}
            className="flex items-center gap-3"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.base, ease: EASE, delay: i * 0.05 }}>
            
              <span className="font-mono text-[9px] tracking-[0.14em] text-ash">
                0{i + 1}
              </span>
              <span className="font-display text-sm font-semibold text-paper">{step}</span>
              <span className="ml-auto h-px flex-1 bg-white/10" />
              <motion.span
              className="h-2 w-2 rounded-full bg-accent"
              initial={reduce ? { opacity: 0 } : { scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: DUR.fast, ease: EASE, delay: 0.1 + i * 0.05 }} />
            
            </motion.div>
          )}
        </div>);

  }
}

export function ServiceVisual({ variant }: {variant: ServiceVariant;}) {
  const reduce = useReducedMotion();

  return (
    <div className="h-full w-full p-5" aria-hidden="true">
      {renderVariant(variant, reduce)}
    </div>);

}