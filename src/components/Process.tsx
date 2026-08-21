import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { PROCESS_STEPS } from '../data/process';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

/**
 * The journey from idea to system. A single progress line — vertical on
 * small screens, horizontal from lg — fills as the section is scrolled.
 */
export function Process({ id }: {id?: string;}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6']
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id={id} className="w-full bg-paper pb-12 pt-6 text-ink md:pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-6 border-t border-ink/12 pt-10 md:flex-row md:items-end md:justify-between md:pt-12">
          <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest">
            <MaskLines lines={['From idea', 'to system.']} />
          </h2>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
              Five stages, run in the open. You always know what is being decided and
              what comes next.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-10 md:mt-14">
          {/* progress rail — vertical on small screens */}
          <div className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-ink/12 lg:hidden">
            <motion.div
              className="h-full w-full origin-top bg-accent"
              style={reduce ? { scaleY: 1 } : { scaleY: progress }} />
            
          </div>
          {/* progress rail — horizontal from lg */}
          <div className="absolute left-0 top-[13px] hidden h-px w-full bg-ink/12 lg:block">
            <motion.div
              className="h-full w-full origin-left bg-accent"
              style={reduce ? { scaleX: 1 } : { scaleX: progress }} />
            
          </div>

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((step, i) =>
            <motion.li
              key={step.num}
              className="relative pl-12 lg:pl-0 lg:pt-12"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
              
                <span className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border border-ink/20 bg-paper lg:top-0">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
                  {step.num}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink/65 lg:max-w-none">
                  {step.copy}
                </p>
              </motion.li>
            )}
          </ol>
        </div>
      </div>
    </section>);

}