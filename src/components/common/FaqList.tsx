import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import type { Faq } from '../../data/faqs';
import { DUR, EASE } from '../../utils/motion';

type FaqListProps = {
  faqs: Faq[];
  tone?: 'dark' | 'light';
};

export function FaqList({ faqs, tone = 'dark' }: FaqListProps) {
  const [open, setOpen] = useState<number | null>(0);
  const isDark = tone === 'dark';

  return (
    <ul className={`border-t ${isDark ? 'border-white/12' : 'border-ink/12'}`}>
      {faqs.map((faq, i) => {
        const expanded = open === i;
        return (
          <li
            key={faq.q}
            className={`border-b ${isDark ? 'border-white/12' : 'border-ink/12'}`}>
            
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="flex w-full items-center gap-5 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              
              <span
                className={`flex-1 font-display text-lg font-semibold tracking-tight md:text-xl ${
                isDark ? 'text-paper' : 'text-ink'}`
                }>
                
                {faq.q}
              </span>
              <motion.span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                isDark ? 'border-white/20' : 'border-ink/20'}`
                }
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: DUR.fast, ease: EASE }}>
                
                <PlusIcon
                  className={`h-4 w-4 ${expanded ? 'text-accent' : isDark ? 'text-paper' : 'text-ink'}`}
                  aria-hidden="true" />
                
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {expanded &&
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: DUR.base, ease: EASE }}>
                
                  <p
                  className={`max-w-2xl pb-6 text-[15px] leading-relaxed ${
                  isDark ? 'text-ash' : 'text-ink/65'}`
                  }>
                  
                    {faq.a}
                  </p>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}