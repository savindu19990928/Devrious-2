import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { keysToSuccess } from '../../data/about';
import { easeOut } from '../../utils/motion';

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};

export function KeysToSuccess() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8" aria-labelledby="keys-heading">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 id="keys-heading" className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Our keys to success
        </h2>
        <p className="max-w-[60ch] text-[1.0625rem] leading-[1.75] text-ink-600 sm:text-lg">
          Six habits we hold ourselves to on every project — they are why clients trust us with the systems their business runs on.
        </p>
      </div>
      <motion.ul
        className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        variants={list}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}>
        
        {keysToSuccess.map((k) => {
          const Icon = k.icon;
          return (
            <motion.li key={k.title} variants={item} className="border-t border-ink-200 pt-6">
              <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink-950">{k.title}</h3>
              <p className="mt-3 text-base leading-[1.8] text-ink-600 sm:text-[1.0625rem]">{k.description}</p>
            </motion.li>);

        })}
      </motion.ul>
    </section>);

}