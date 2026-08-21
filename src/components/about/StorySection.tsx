import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';
import { LogoMark } from '../Logo';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

const BELIEFS = [
{
  title: 'The business comes first',
  copy: 'We map how the work actually happens before anyone opens a design file. Software that ignores the operation gets abandoned.'
},
{
  title: 'Senior people, no layers',
  copy: 'The people in the first call are the people who design and build it. Nothing is briefed down a chain until the intent is gone.'
},
{
  title: 'Built to be handed over',
  copy: 'Documented, tested, and explained — so the system belongs to you, not to whoever wrote it.'
}];


/**
 * Why Devrious exists. Deliberately distinct from the page headline above it
 * so the top of the About page does not say the same sentence twice.
 */
export function StorySection() {
  const reduce = useReducedMotion();

  return (
    <section id="story" className="w-full scroll-mt-24 bg-paper py-14 text-ink md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:text-[11px]">
                <LogoMark className="h-5 w-4" />
                Why we exist
              </p>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,7vw,4.75rem)] font-extrabold uppercase leading-[0.9] tracking-tightest md:mt-8">
              <MaskLines lines={['Ambition deserves', 'better technology.']} />
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.08}>
              <p className="text-[17px] font-medium leading-relaxed text-ink md:text-xl">
                Devrious was founded in 2024 on a simple observation: growing
                businesses were being sold either template software that ignored how
                they work, or custom projects that arrived late and unexplained.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/65 md:text-base">
                We combine design, software engineering, systems thinking, and AI in
                one small senior team — so the thing that gets built is the thing the
                business actually needed.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/12 md:mt-14 md:grid-cols-3">
          {BELIEFS.map((belief, i) =>
          <motion.li
            key={belief.title}
            className="flex flex-col bg-paper p-7 md:p-9"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
            
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight md:text-[1.75rem]">
                {belief.title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                {belief.copy}
              </p>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}