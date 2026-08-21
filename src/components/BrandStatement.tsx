import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ScrollWords } from './motion/ScrollWords';
import { Reveal } from './motion/Reveal';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

const POINTS = [
{
  num: '01',
  title: 'Strategy before screens',
  copy: 'We map how the work actually happens before anyone opens a design file.'
},
{
  num: '02',
  title: 'Systems, not features',
  copy: 'Each piece we build knows about the others, so the business sees one truth.'
},
{
  num: '03',
  title: 'Built to keep changing',
  copy: 'The second year of a system should cost less than the first, not more.'
}];


export function BrandStatement() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-paper py-16 text-ink md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:text-[11px]">
            The idea behind the work
          </p>
        </Reveal>

        <ScrollWords
          text="We don't just build software. We build the system behind the idea."
          className="mt-8 max-w-[18ch] font-display text-[clamp(2.4rem,8.5vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-tightest md:mt-12"
          dimClassName="opacity-30" />
        

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-ink/12 pt-9 md:mt-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[16px] font-medium leading-relaxed text-ink md:text-lg">
              Every business works differently. Your technology should too. Devrious
              combines strategy, design, engineering, and AI to create digital products
              that fit the way your business operates.
            </p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {POINTS.map((point, i) =>
            <motion.li
              key={point.num}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
              
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  {point.num}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                  {point.copy}
                </p>
              </motion.li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}