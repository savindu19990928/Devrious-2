import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MaskLines } from './motion/MaskLines';
import { PRINCIPLES } from '../data/principles';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

export function WhyDevrious() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-paper pb-12 text-ink md:pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <h2 className="border-t border-ink/12 pt-10 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest md:pt-12">
          <MaskLines lines={['Why Devrious?']} />
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/12 md:mt-12 md:grid-cols-2">
          {PRINCIPLES.map((principle, i) =>
          <motion.li
            key={principle.title}
            className="group bg-paper p-7 md:p-10"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
            
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-[clamp(1.6rem,4.5vw,2.5rem)] font-extrabold uppercase leading-[0.95] tracking-tightest">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/65">
                {principle.copy}
              </p>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}