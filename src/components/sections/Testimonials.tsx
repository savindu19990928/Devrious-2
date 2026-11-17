import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { featuredTestimonials } from '../../data/home';
import { easeOut } from '../../utils/accent';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const t = featuredTestimonials[index];
  const initials = t.name.
  replace(/^Mr\.\s*/, '').
  split(' ').
  map((p) => p[0]).
  join('').
  slice(0, 2);

  return (
    <section aria-labelledby="testimonial-title" className="bg-canvas py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <h2 id="testimonial-title" className="flex items-center gap-2.5 font-sans text-sm font-semibold text-ink/60">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              Client testimonial
            </h2>
          </Reveal>

          <div className="lg:col-span-9">
            <span aria-hidden="true" className="block font-display text-7xl font-bold leading-none text-brand md:text-8xl">
              “
            </span>
            <div className="min-h-[220px] md:min-h-[260px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={t.name}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: easeOut }}>
                  
                  <blockquote className="font-display text-[1.6rem] font-medium leading-[1.3] tracking-[-0.01em] text-ink md:text-[2.4rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-wine text-sm font-bold text-white">
                      {initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="block text-sm text-muted">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div role="tablist" aria-label="Choose testimonial" className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {featuredTestimonials.map((item, i) =>
              <button
                key={item.company}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                i === index ? 'bg-ink text-white' : 'border border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink'}`
                }>
                
                  {item.company}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}