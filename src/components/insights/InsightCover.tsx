import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { InsightVariant } from '../../data/insights';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

/** Abstract, typographic covers instead of stock imagery. */
export function InsightCover({ variant }: {variant: InsightVariant;}) {
  const reduce = useReducedMotion();

  const enter = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: VIEWPORT,
    transition: { duration: DUR.base, ease: EASE }
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-graphite p-5"
      aria-hidden="true">
      
      {variant === 'grid' &&
      <motion.div className="grid h-full grid-cols-4 grid-rows-3 gap-1.5" {...enter}>
          {Array.from({ length: 12 }).map((_, i) =>
        <span
          key={i}
          className={`rounded-[3px] ${
          [2, 5, 9].includes(i) ? 'bg-accent' : 'bg-white/[0.08]'}`
          } />

        )}
        </motion.div>
      }

      {variant === 'flow' &&
      <motion.svg viewBox="0 0 200 120" className="h-full w-full" {...enter}>
          {[30, 60, 90].map((y, i) =>
        <path
          key={y}
          d={`M10 ${y} C70 ${y}, 90 60, 150 60`}
          fill="none"
          stroke={i === 1 ? '#00b473' : '#2f2f2f'}
          strokeWidth="2" />

        )}
          <circle cx="150" cy="60" r="14" fill="#00b473" />
          <rect x="176" y="46" width="14" height="28" rx="4" fill="#2f2f2f" />
        </motion.svg>
      }

      {variant === 'stack' &&
      <motion.div className="flex h-full flex-col justify-center gap-2" {...enter}>
          {[100, 82, 64, 46].map((w, i) =>
        <span
          key={w}
          className={`h-4 rounded-md ${i === 0 ? 'bg-accent' : 'bg-white/[0.08]'}`}
          style={{ width: `${w}%` }} />

        )}
        </motion.div>
      }

      {variant === 'orbit' &&
      <motion.div className="grid h-full place-items-center" {...enter}>
          <span className="relative grid h-20 w-20 place-items-center rounded-full border border-white/12">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="absolute -left-2 top-1/2 h-2 w-2 rounded-full bg-signal" />
            <span className="absolute -right-2 top-1/3 h-2 w-2 rounded-full bg-coral" />
            <span className="absolute inset-[-14px] rounded-full border border-dashed border-white/12" />
          </span>
        </motion.div>
      }

      {variant === 'bars' &&
      <motion.div className="flex h-full items-end gap-2" {...enter}>
          {[40, 68, 52, 88, 34, 74].map((h, i) =>
        <span
          key={h}
          className={`w-full rounded-t-sm ${i === 3 ? 'bg-accent' : 'bg-white/[0.08]'}`}
          style={{ height: `${h}%` }} />

        )}
        </motion.div>
      }

      {variant === 'nodes' &&
      <motion.svg viewBox="0 0 200 120" className="h-full w-full" {...enter}>
          <path d="M40 30 L100 60 L40 90" fill="none" stroke="#2f2f2f" strokeWidth="2" />
          <path d="M100 60 L160 60" fill="none" stroke="#00b473" strokeWidth="2" />
          <rect x="20" y="18" width="24" height="24" rx="6" fill="#2f2f2f" />
          <rect x="20" y="78" width="24" height="24" rx="6" fill="#2f2f2f" />
          <rect x="86" y="46" width="28" height="28" rx="8" fill="#00b473" />
          <rect x="158" y="46" width="28" height="28" rx="8" fill="#2f2f2f" />
        </motion.svg>
      }
    </div>);

}