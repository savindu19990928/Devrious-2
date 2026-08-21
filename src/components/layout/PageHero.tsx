import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LogoMark } from '../Logo';
import { MaskLines } from '../motion/MaskLines';
import { DUR, EASE } from '../../utils/motion';

export type PageHeroStat = {value: string;label: string;};
export type PageHeroIndexItem = {label: string;href: string;};

type PageHeroProps = {
  eyebrow: string;
  lines: string[];
  copy: string;
  index?: PageHeroIndexItem[];
  stats?: PageHeroStat[];
};

/**
 * Shared opening for every interior page: an oversized headline, a live index
 * of what the page contains, and a credential strip — so the top of each page
 * carries real content instead of empty space.
 */
export function PageHero({ eyebrow, lines, copy, index, stats }: PageHeroProps) {
  const reduce = useReducedMotion();
  /**
   * Without an index there is nothing to put in the right four columns, and a
   * half-empty grid reads as a hole under the nav. The headline block takes the
   * full width instead.
   */
  const hasIndex = Boolean(index && index.length > 0);

  return (
    <section className="relative w-full overflow-hidden border-b border-white/10 bg-ink pb-8 pt-20 md:pb-10 md:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] grid-cols-6 px-5 md:grid md:px-10 lg:px-14"
        aria-hidden="true">
        
        {Array.from({ length: 6 }).map((_, i) =>
        <span key={i} className="border-l border-white/[0.045]" />
        )}
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className={hasIndex ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <motion.p
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ash md:text-[11px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DUR.slow, ease: EASE }}>
              
              <LogoMark className="h-4 w-4" />
              {eyebrow}
            </motion.p>

            <h1 className="mt-4 font-display text-[clamp(2.6rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-tightest text-paper md:mt-5">
              <MaskLines lines={lines} stagger={0.055} />
            </h1>

            <motion.p
              className={`mt-5 text-[15px] leading-relaxed text-ash md:text-lg ${
              hasIndex ? 'max-w-2xl' : 'max-w-4xl'}`
              }
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: 0.24 }}>
              
              {copy}
            </motion.p>
          </div>

          {hasIndex && index &&
          <motion.nav
            aria-label="On this page"
            className="lg:col-span-4 lg:pt-4"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.slow, ease: EASE, delay: 0.3 }}>
            
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                On this page
              </p>
              <ul className="mt-4 border-t border-white/12">
                {index.map((item, i) =>
              <li key={item.href} className="border-b border-white/12">
                    <a
                  href={item.href}
                  className="group flex items-center gap-4 py-3 transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
                  
                      <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[15px] font-semibold tracking-tight text-paper group-hover:text-accent">
                        {item.label}
                      </span>
                      <span className="ml-auto h-px w-6 origin-right scale-x-50 bg-white/25 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </a>
                  </li>
              )}
              </ul>
            </motion.nav>
          }
        </div>

        {stats && stats.length > 0 &&
        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/12 md:mt-10 md:grid-cols-4">
            {stats.map((stat, i) =>
          <motion.li
            key={stat.label}
            className="bg-ink p-5 md:p-6"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.base, ease: EASE, delay: 0.36 + i * 0.05 }}>
            
                <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold leading-none tracking-tightest text-paper">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                  {stat.label}
                </p>
              </motion.li>
          )}
          </ul>
        }
      </div>
    </section>);

}