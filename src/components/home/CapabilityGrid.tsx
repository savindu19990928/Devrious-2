import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CAPABILITIES, INDUSTRIES } from '../../data/engagements';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

export function CapabilityGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full border-t border-white/10 bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Capability"
          lines={['One team,', 'four disciplines.']}
          copy="Strategy, design, engineering, and applied AI sit in the same room, so decisions do not get lost between hand-offs." />
        

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((group, i) =>
          <motion.div
            key={group.group}
            className="bg-ink p-6 md:p-7"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
            
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tightest text-paper">
                {group.group}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) =>
              <li
                key={item}
                className="flex items-center gap-2.5 text-[14px] text-ash">
                
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        <div className="mt-10 border-t border-white/12 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
            Industries we work in
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((industry, i) =>
            <motion.li
              key={industry}
              className="rounded-full border border-white/12 px-4 py-2.5 font-display text-[13px] font-medium text-paper/80 transition-colors duration-150 ease-out hover:border-accent hover:text-accent md:text-sm"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.base, ease: EASE, delay: i * 0.03 }}>
              
                {industry}
              </motion.li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}