import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Counter } from './Counter';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { OUTCOMES } from '../data/principles';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

export function Results() {
  const reduce = useReducedMotion();
  const [lead, ...rest] = OUTCOMES;

  return (
    <section className="w-full bg-paper py-12 text-ink md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest">
          <MaskLines lines={['Technology should', 'make business', 'simpler.']} />
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-12 lg:gap-8">
          {/* lead outcome — carries the visual weight */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-7 text-paper md:p-9">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                The headline outcome
              </span>
              <p className="mt-10 font-display text-[clamp(4rem,14vw,7rem)] font-extrabold leading-[0.85] tracking-tightest">
                <Counter to={60} suffix="%" />
              </p>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ash">
                {lead.copy} Typical reduction in repeated manual steps once the workflow
                lives in one system.
              </p>
            </div>
          </Reveal>

          {/* supporting outcomes — hairline rows, deliberately lighter */}
          <div className="lg:col-span-7">
            <ul className="border-t border-ink/12">
              {rest.map((outcome, i) =>
              <motion.li
                key={outcome.title}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-ink/12 py-7 md:grid-cols-[auto_1fr_1.1fr] md:items-baseline md:py-9"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
                
                  <span className="font-mono text-[10px] tracking-[0.16em] text-ink/40">
                    0{i + 2}
                  </span>
                  <h3 className="font-display text-[clamp(1.35rem,3.4vw,2rem)] font-bold uppercase leading-none tracking-tightest">
                    {outcome.title}
                  </h3>
                  <p className="col-start-2 text-[14px] leading-relaxed text-ink/65 md:col-start-3 md:text-[15px]">
                    {outcome.copy}
                  </p>
                </motion.li>
              )}
            </ul>
            <Reveal delay={0.1}>
              <p className="pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                Outcomes we design for, measured after launch
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}