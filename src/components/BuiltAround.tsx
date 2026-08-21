import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { LogoMark } from './Logo';
import { DUR, EASE } from '../utils/motion';

const MODULES = ['People', 'Processes', 'Data', 'Customers', 'Technology'];

/**
 * Shows the modules of a business being assembled into one connected system.
 * The connectors draw themselves once, when the diagram enters the viewport.
 */
export function BuiltAround() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-paper py-12 text-ink md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest lg:col-span-7">
            <MaskLines lines={['Built around', 'your business.']} />
          </h2>
          <Reveal delay={0.08} className="lg:col-span-5 lg:pt-3">
            <p className="max-w-md text-[15px] leading-relaxed text-ink/70 md:text-lg">
              No two businesses operate the same way. We don't force your workflow into a
              template. We understand how your business works, then build the technology
              around it.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="mt-12 md:mt-16">
          {/* Source */}
          <div className="flex justify-center">
            <motion.div
              className="rounded-full border border-ink/15 bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-paper"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: DUR.base, ease: EASE }}>
              
              Your business
            </motion.div>
          </div>

          {/* Connectors down to modules */}
          <div className="relative h-14 md:h-20">
            <svg
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true">
              
              {[100, 300, 500, 700, 900].map((x, i) =>
              <motion.path
                key={x}
                d={`M500 0 C500 55, ${x} 45, ${x} 100`}
                fill="none"
                stroke="#0a0a0a"
                strokeOpacity="0.22"
                strokeWidth="1.5"
                initial={reduce ? { opacity: 1 } : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={{ duration: DUR.slow, ease: EASE, delay: 0.1 + i * 0.05 }} />

              )}
            </svg>
          </div>

          {/* Modules */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {MODULES.map((mod, i) =>
            <motion.div
              key={mod}
              className="flex items-center justify-between rounded-xl border border-ink/12 bg-white px-4 py-4 md:flex-col md:items-start md:gap-6 md:py-5"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: DUR.base, ease: EASE, delay: 0.25 + i * 0.05 }}>
              
                <span className="font-display text-[15px] font-semibold tracking-tight md:text-base">
                  {mod}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-ink/35">
                  0{i + 1}
                </span>
              </motion.div>
            )}
          </div>

          {/* Connectors down to the system */}
          <div className="relative h-14 md:h-20">
            <svg
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true">
              
              {[100, 300, 500, 700, 900].map((x, i) =>
              <motion.path
                key={x}
                d={`M${x} 0 C${x} 55, 500 45, 500 100`}
                fill="none"
                stroke="#00b473"
                strokeWidth="1.5"
                initial={reduce ? { opacity: 1 } : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={{ duration: DUR.slow, ease: EASE, delay: 0.5 + i * 0.05 }} />

              )}
            </svg>
          </div>

          {/* Result */}
          <div className="flex justify-center">
            <motion.div
              className="flex items-center gap-3 rounded-2xl bg-accent px-6 py-4 md:px-8 md:py-5"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: DUR.base, ease: EASE, delay: 0.75 }}>
              
              <LogoMark className="h-8 w-7" mono="ink" />
              <span className="font-display text-[clamp(1.1rem,4vw,1.75rem)] font-extrabold uppercase leading-none tracking-tightest text-ink">
                One connected system
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}