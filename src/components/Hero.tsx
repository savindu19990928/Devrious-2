import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react';
import { HeroSystem } from './hero/HeroSystem';
import { MaskLines } from './motion/MaskLines';
import { WordCycle } from './motion/WordCycle';
import { DUR, EASE } from '../utils/motion';

const HEADLINE = ['Where', 'ambition', 'becomes', 'digital.'];

const NOW_BUILDING = [
'A document AI assistant',
'A retail POS platform',
'An onboarding portal',
'A freight pipeline CRM'];


const CREDENTIALS = [
{ value: 'Est. 2024', label: 'Independent studio' },
{ value: '23+', label: 'Practice areas' },
{ value: '67+', label: 'Clients served' },
{ value: '100%', label: 'Clients Satisfied' }];


export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-ink pb-12 pt-20 md:pb-14 md:pt-24">
      
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] grid-cols-6 px-5 md:grid md:px-10 lg:px-14"
        aria-hidden="true">
        
        {Array.from({ length: 6 }).map((_, i) =>
        <span key={i} className="border-l border-white/[0.045]" />
        )}
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.p
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ash md:text-[11px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DUR.base, ease: EASE }}>
              
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Digital Products · Systems · AI
            </motion.p>

            <h1 className="mt-5 font-display text-[clamp(2.9rem,12.5vw,7.5rem)] font-extrabold uppercase leading-[0.86] tracking-tightest text-paper md:mt-6">
              <MaskLines lines={HEADLINE} stagger={0.04} />
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-ash md:text-lg"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: 0.14 }}>
              
              We turn ambitious business ideas into intelligent digital systems
              — from websites and software to AI-powered products built around
              your business.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: 0.18 }}>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-accent px-7 py-4 font-display text-[15px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
                
                Start a Project
                <ArrowUpRightIcon
                  className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true" />
                
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center justify-between gap-6 rounded-full border border-white/15 px-7 py-4 font-display text-[15px] font-semibold text-paper transition-colors duration-150 ease-out hover:border-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                
                Explore Our Work
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
                  aria-hidden="true" />
                
              </Link>
            </motion.div>
          </div>

          {/* the system composition sits at the top of its column and a live
               status line closes it out, so the column fills the same height as
               the headline instead of leaving a band of empty ink */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <HeroSystem />

            <motion.div
              className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/12 pt-5"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: 0.3 }}>
              
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <motion.span
                  className="absolute inset-0 rounded-full bg-accent"
                  animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'linear'
                  }} />
                
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                In the studio now
              </span>
              <WordCycle
                words={NOW_BUILDING}
                className="font-display text-[15px] font-semibold tracking-tight text-paper" />
              
            </motion.div>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/12 md:mt-10 md:grid-cols-4">
          {CREDENTIALS.map((item, i) =>
          <motion.li
            key={item.label}
            className="bg-ink p-4 md:p-5"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DUR.base,
              ease: EASE,
              delay: 0.22 + i * 0.03
            }}>
            
              <p className="font-display text-[clamp(1.25rem,3.4vw,1.85rem)] font-extrabold leading-none tracking-tightest text-paper">
                {item.value}
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ash md:text-[10px]">
                {item.label}
              </p>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}