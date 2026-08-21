import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { InsightCover } from './InsightCover';
import type { Insight } from '../../data/insights';
import { DUR, EASE } from '../../utils/motion';

export function InsightCard({ insight }: {insight: Insight;}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/12 bg-ink p-5 transition-colors duration-200 ease-out hover:border-white/25 md:p-6">
      <div className="aspect-[16/9]">
        <InsightCover variant={insight.variant} />
      </div>

      <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
        <span className="rounded-full border border-accent/50 px-2.5 py-1 text-accent">
          {insight.topic}
        </span>
        <span>{insight.date}</span>
      </div>

      <h3 className="mt-4 font-display text-[clamp(1.25rem,3vw,1.65rem)] font-bold leading-tight tracking-tight text-paper">
        {insight.title}
      </h3>

      <p className="mt-3 text-[14px] leading-relaxed text-ash">{insight.excerpt}</p>

      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: DUR.base, ease: EASE }}>
          
            <ul className="mt-5 space-y-3 border-t border-white/12 pt-5">
              {insight.takeaways.map((point) =>
            <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-paper/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group mt-auto flex items-center gap-2 pt-6 font-display text-sm font-semibold text-paper transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
        
        {open ? 'Hide key points' : 'Key points'}
        <ArrowDownIcon
          className={`h-4 w-4 transition-transform duration-200 ease-out ${
          open ? 'rotate-180' : 'group-hover:translate-y-0.5'}`
          }
          aria-hidden="true" />
        
      </button>
    </article>);

}