import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { easeOut } from '../../utils/motion';

function initials(name: string): string {
  return name.
  replace('Mr. ', '').
  split(' ').
  map((n) => n[0]).
  join('').
  slice(0, 2);
}

export function TestimonialCarousel() {
  const reduce = useReducedMotion();
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const total = testimonials.length;
  const active = testimonials[index];

  const paginate = (step: number) => setState(([i]) => [(i + step + total) % total, step]);
  const goTo = (i: number) => setState(([current]) => [i, i > current ? 1 : -1]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) paginate(1);else
    if (info.offset.x > 60 || info.velocity.x > 400) paginate(-1);
  };

  const offset = reduce ? 0 : 48;

  return (
    <section className="bg-ink-50" aria-labelledby="about-testimonials-heading" aria-roledescription="carousel">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="about-testimonials-heading" className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
            What our clients say
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-[1.75] text-ink-600 sm:text-base">From apparel manufacturing to hospitality and public transport.</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-canvas ring-1 ring-ink-200">
          <div className="relative p-6 sm:p-8 lg:min-h-[300px] lg:p-10" aria-live="polite">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.figure
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? offset : -offset }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -offset : offset }}
                transition={{ duration: 0.25, ease: easeOut }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={handleDragEnd}
                className="cursor-grab touch-pan-y active:cursor-grabbing"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}>
                
                <span className="block font-display text-4xl font-bold leading-none text-brand-600 sm:text-5xl" aria-hidden="true">
                  “
                </span>
                <blockquote className="-mt-1 max-w-[68ch] select-none text-[0.9375rem] font-normal leading-[1.8] text-ink-700 sm:text-base">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-6 flex flex-col gap-4 border-t border-ink-100 pt-5 md:flex-row md:items-center md:justify-between">
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-canvas">
                      {initials(active.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-ink-950">{active.name}</span>
                      <span className="block text-sm text-ink-500">
                        {active.role}, {active.company}
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {active.projects.map((p) =>
                    <span key={p} className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-200">
                        {p}
                      </span>
                    )}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-ink-100 px-6 py-4 sm:px-10 lg:px-12">
            <div className="flex items-center gap-2" role="group" aria-label="Choose a testimonial">
              {testimonials.map((t, i) => {
                const selected = i === index;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    aria-current={selected}
                    className="flex h-8 items-center">
                    
                    <span
                      className={`block h-2 rounded-full transition-[width,background-color] duration-200 ease-out ${
                      selected ? 'w-8 bg-brand-600' : 'w-2 bg-ink-300 hover:bg-ink-400'}`
                      } />
                    
                  </button>);

              })}
              <span className="ml-2 text-sm tabular-nums text-ink-500">
                {index + 1} / {total}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-200 transition-[background-color,transform] duration-150 ease-out hover:bg-ink-100 active:scale-95">
                
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-brand-400 active:scale-95">
                
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}