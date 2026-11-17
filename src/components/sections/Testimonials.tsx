import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { featuredTestimonials } from '../../data/home';
import { easeOut } from '../../utils/accent';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const t = featuredTestimonials[index];
  const initials = t.name
    .replace(/^Mr\.\s*/, '')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

  return (
    <section aria-labelledby="testimonial-title" className="bg-canvas py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <h2 id="testimonial-title" className="flex items-center gap-2.5 font-sans text-xs font-semibold text-ink/60 sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              Client testimonial
            </h2>
          </Reveal>

          <div className="lg:col-span-9">
            <span aria-hidden="true" className="block font-display text-5xl font-bold leading-none text-brand sm:text-7xl md:text-8xl">
              “
            </span>
            <div className="min-h-[190px] sm:min-h-[220px] md:min-h-[260px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={t.name}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: easeOut }}>
                  <blockquote className="font-display text-[1.25rem] font-medium leading-[1.32] tracking-[-0.01em] text-ink xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.4rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3.5 sm:mt-10 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wine text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
                      {initials}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="block text-xs text-muted sm:text-sm">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div role="tablist" aria-label="Choose testimonial" className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6 sm:mt-12 sm:pt-8">
              {featuredTestimonials.map((item, i) => (
                <button
                  key={item.company}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => setIndex(i)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:px-5 sm:py-2.5 sm:text-sm ${
                    i === index ? 'bg-ink text-white' : 'border border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink'
                  }`}>
                  {item.company}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
