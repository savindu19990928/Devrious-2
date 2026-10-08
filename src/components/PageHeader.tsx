import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { WordReveal } from './WordReveal';
import { easeOut } from '../utils/motion';

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}

const dots = ['bg-brand-500', 'bg-sun-500', 'bg-coral-500'];

export function PageHeader({ label, title, description, aside }: PageHeaderProps) {
  const reduce = useReducedMotion();
  const titleDone = 0.12 + title.split(' ').length * 0.04;

  return (
    <header className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <motion.p
            className="flex items-center gap-2.5 text-sm font-semibold text-brand-700"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}>
            
            <span className="flex gap-1" aria-hidden="true">
              {dots.map((c, i) =>
              <motion.span
                key={c}
                className={`h-2 w-2 rounded-sm ${c}`}
                initial={reduce ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut, delay: 0.05 + i * 0.05 }} />

              )}
            </span>
            {label}
          </motion.p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            <WordReveal text={title} delay={0.12} />
          </h1>
          <motion.p
            className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: easeOut, delay: titleDone }}>
            
            {description}
          </motion.p>
        </div>
        {aside &&
        <motion.div
          className="shrink-0"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut, delay: titleDone + 0.06 }}>
          
            {aside}
          </motion.div>
        }
      </div>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-500"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: easeOut, delay: titleDone }} />
      
    </header>);

}