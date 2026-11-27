import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { showcaseServices } from '../../data/home';
import { easeOut } from '../../utils/accent';

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = showcaseServices[active];

  const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    if (index !== active && typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches) {
      e.preventDefault();
      setActive(index);
    }
  };

  return (
    <section aria-labelledby="services-title" className="bg-canvas px-2 sm:px-3 md:px-4">
      <div className="rounded-[20px] bg-wine-deep py-14 text-white sm:rounded-[22px] sm:py-20 md:rounded-frame md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="services-title"
            label="Services"
            title="Six disciplines. One studio."
            description="From the first sketch to the systems that run behind it — designed, engineered and supported by the same team."
            action={{ label: 'All services', to: '/services' }}
            inverted
          />

          <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-12 lg:mt-20 lg:grid-cols-12">
            <ol className="lg:col-span-7">
              {showcaseServices.map((service, i) => {
                const isActive = i === active;
                return (
                  <li key={service.number} className="border-t border-white/[0.12] last:border-b">
                    <Link
                      to={service.to}
                      onClick={(e) => handleItemClick(e, i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group block py-5 focus-visible:outline-none sm:py-6 md:py-7">
                      <div className="flex items-center gap-3.5 sm:gap-5 md:gap-8">
                        <span
                          className={`w-6 shrink-0 text-xs tabular-nums transition-colors duration-200 sm:w-7 sm:text-sm ${
                            isActive ? 'text-jade' : 'text-white/40'
                          }`}>
                          {service.number}
                        </span>
                        <h3
                          className={`flex-1 font-display text-[1.125rem] font-bold leading-[1.24] tracking-[-0.01em] transition-colors duration-200 group-focus-visible:underline xs:text-[1.25rem] sm:text-[1.5rem] md:text-[1.85rem] lg:text-[1.8rem] xl:text-[2.1rem] ${
                            isActive ? 'text-white' : 'text-white/55'
                          }`}>
                          {service.title}
                        </h3>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-200 ease-out sm:h-11 sm:w-11 ${
                            isActive ? 'rotate-45 bg-white text-ink' : 'bg-white/10 text-white'
                          }`}>
                          <ArrowUpRightIcon className="h-4 w-4 -rotate-45" aria-hidden="true" />
                        </span>
                      </div>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: easeOut }}
                            className="overflow-hidden">
                            <p className="max-w-xl pl-0 pt-3.5 text-sm leading-relaxed text-white/70 sm:pl-12 sm:pt-4 sm:text-base md:pl-[60px]">
                              {service.description}
                            </p>
                            <div className="mt-4 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                              <img src={service.image} alt="" className="h-full w-full object-cover" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Link>
                  </li>
                );
              })}
            </ol>

            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-[22px] bg-wine">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt=""
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-black/35 px-5 py-4 backdrop-blur-md">
                  <span className="truncate text-sm font-semibold text-white">{current.title}</span>
                  <span className="shrink-0 text-sm tabular-nums text-white/60">{current.number} / 06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
