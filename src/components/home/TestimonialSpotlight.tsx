import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

const ease = [0.23, 1, 0.32, 1] as const;

function initials(name: string): string {
  return name.
  replace('Mr. ', '').
  split(' ').
  map((n) => n[0]).
  join('').
  slice(0, 2);
}

export function TestimonialSpotlight() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = testimonials[index];

  return (
    <section className="bg-ink-50" aria-labelledby="testimonials-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[320px_1fr] lg:gap-12 lg:px-8">
        <div>
          <h2 id="testimonials-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink-950">
            What our clients say
          </h2>
          <p className="mt-3 text-ink-600">From apparel manufacturing to hospitality and public transport.</p>
          <div className="mt-8 flex flex-col gap-2" role="tablist" aria-label="Choose a testimonial">
            {testimonials.map((t, i) => {
              const selected = i === index;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="testimonial-panel"
                  onClick={() => setIndex(i)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-150 ${
                  selected ? 'bg-ink-100 ring-1 ring-ink-200' : 'hover:bg-ink-100/60'}`
                  }>
                  
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    selected ? 'bg-brand-500 text-canvas' : 'bg-ink-200 text-ink-700'}`
                    }>
                    
                    {initials(t.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink-950">{t.name}</span>
                    <span className="block truncate text-xs text-ink-500">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </button>);

            })}
          </div>
        </div>

        <div id="testimonial-panel" role="tabpanel" className="relative lg:min-h-[320px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease }}>
              
              <span className="font-display text-7xl font-extrabold leading-none text-brand-500" aria-hidden="true">“</span>
              <blockquote className="-mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-2xl lg:text-[1.7rem]">
                {active.quote}
              </blockquote>
              <figcaption className="mt-8 flex flex-col gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <span className="block font-semibold text-ink-950">{active.name}</span>
                  <span className="block text-sm text-ink-500">
                    {active.role}, {active.company}
                  </span>
                </span>
                <span className="flex flex-wrap gap-2">
                  {active.projects.map((p) =>
                  <span key={p} className="rounded-md bg-ink-100 px-2 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-200">
                      {p}
                    </span>
                  )}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}