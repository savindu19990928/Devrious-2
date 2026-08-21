import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { FaqList } from '../common/FaqList';
import { Process } from '../Process';
import { BuiltAround } from '../BuiltAround';
import { RITUALS } from '../../data/engagements';
import { APPROACH_FAQS } from '../../data/faqs';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

const FACTS = [
{ value: '5', label: 'Delivery stages' },
{ value: 'One', label: 'Shared board' },
{ value: 'Written', label: 'Decision record' },
{ value: 'Zero', label: 'Status-only meetings' }];


const CYCLE = [
{
  step: '01',
  label: 'Priorities set',
  detail: 'The scope of the cycle is agreed in writing before work starts.'
},
{
  step: '02',
  label: 'Build & review',
  detail: 'Design and engineering work together, reviewed as the work lands.'
},
{
  step: '03',
  label: 'Working demo',
  detail: 'You see the real thing, decide what moves, and we log the decision.'
}];


/**
 * How we work — the full delivery model, kept as one chapter of the About
 * page rather than a route of its own. Reads top to bottom: the promise, the
 * delivery rhythm, how a business becomes a system, the five stages, the
 * habits we hold to, and the questions clients ask before starting.
 */
export function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section id="approach" className="w-full scroll-mt-24 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 md:px-10 md:pt-20 lg:px-14">
        <SectionHeading
          tone="light"
          eyebrow="How we work"
          lines={['Think first.', 'Then build', 'the system.']}
          copy="A calm, visible process. Five stages from idea to system, a steady delivery rhythm, and decisions recorded so nobody has to remember why something was chosen." />
        

        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/12 md:mt-12 md:grid-cols-4">
          {FACTS.map((fact, i) =>
          <motion.li
            key={fact.label}
            className="bg-paper p-5 md:p-6"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DUR.base, ease: EASE, delay: i * 0.05 }}>
            
              <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold leading-none tracking-tightest">
                {fact.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                {fact.label}
              </p>
            </motion.li>
          )}
        </ul>

        <div className="mt-6 overflow-hidden rounded-3xl bg-ink p-7 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent md:text-[11px]">
                The delivery rhythm
              </p>
              <h3 className="mt-5 font-display text-[clamp(1.9rem,5vw,3rem)] font-extrabold uppercase leading-[0.92] tracking-tightest text-paper">
                A cycle looks
                <br />
                like this.
              </h3>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ash">
                Short cycles keep risk small. Nothing sits in the dark waiting for a
                big reveal.
              </p>
            </div>

            <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-3 lg:col-span-8">
              {CYCLE.map((item, i) =>
              <motion.li
                key={item.step}
                className="flex flex-col bg-ink p-6 md:p-7"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
                
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {item.step}
                  </span>
                  <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-paper md:text-2xl">
                    {item.label}
                  </h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-ash">
                    {item.detail}
                  </p>
                </motion.li>
              )}
            </ol>
          </div>
        </div>
      </div>

      <BuiltAround />

      <Process />

      <div className="mx-auto max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20 lg:px-14">
        <div className="border-t border-ink/12 pt-10 md:pt-12">
          <SectionHeading
            tone="light"
            eyebrow="Working rules"
            lines={['Four habits', 'we never drop.']}
            copy="These are the parts of the process that make a project feel calm instead of chaotic." />
          

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RITUALS.map((ritual, i) =>
            <motion.li
              key={ritual.title}
              className="flex flex-col border-t border-ink/15 pt-6"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
              
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight md:text-2xl">
                  {ritual.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                  {ritual.copy}
                </p>
              </motion.li>
            )}
          </ul>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              tone="light"
              eyebrow="Questions"
              lines={['Working', 'together.']} />
            
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList faqs={APPROACH_FAQS} tone="light" />
          </div>
        </div>
      </div>
    </section>);

}