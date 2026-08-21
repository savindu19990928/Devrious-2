import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { ServiceVisual } from './services/ServiceVisual';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { SERVICES } from '../data/services';
import { DUR, EASE } from '../utils/motion';

export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="services" className="w-full bg-ink py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-paper">
            <MaskLines lines={['What', 'we build']} />
          </h2>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ash">
              Five ways we help businesses move from an idea to something that runs every
              day.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ul className="border-t border-white/12">
              {SERVICES.map((service, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={service.num}
                    className="border-b border-white/12"
                    onMouseEnter={() => setActive(i)}>
                    
                    <button
                      type="button"
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group flex w-full items-center gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:gap-8 md:py-8">
                      
                      <motion.span
                        className="font-mono text-[11px] tracking-[0.14em]"
                        animate={{
                          color: isActive ? '#00b473' : '#8c8c86',
                          scale: isActive && !reduce ? 1.35 : 1
                        }}
                        style={{ originX: 0, originY: 0.5 }}
                        transition={{ duration: DUR.base, ease: EASE }}>
                        
                        {service.num}
                      </motion.span>

                      <motion.span
                        className="flex-1 font-display text-[clamp(1.5rem,5vw,2.6rem)] font-bold uppercase leading-[1.02] tracking-tightest"
                        animate={{ color: isActive ? '#f4f3ef' : '#6f6f6a' }}
                        transition={{ duration: DUR.base, ease: EASE }}>
                        
                        {service.title}
                      </motion.span>

                      <ArrowUpRightIcon
                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ease-out ${
                        isActive ?
                        'translate-x-0 text-accent' :
                        '-translate-x-1 text-ash/50'}`
                        }
                        aria-hidden="true" />
                      
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive &&
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: DUR.base, ease: EASE }}>
                        
                          <div className="pb-8 pl-[3.25rem] md:pl-[4.5rem]">
                            <p className="max-w-md text-[14px] leading-relaxed text-ash md:text-[15px]">
                              {service.blurb}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                              {service.items.map((item, k) =>
                            <motion.li
                              key={item}
                              className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/80"
                              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: DUR.fast,
                                ease: EASE,
                                delay: 0.04 + k * 0.035
                              }}>
                              
                                  {item}
                                </motion.li>
                            )}
                            </ul>
                            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-graphite lg:hidden">
                              <ServiceVisual variant={service.variant} />
                            </div>
                          </div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </li>);

              })}
            </ul>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/12 bg-graphite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={SERVICES[active].variant}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: DUR.fast, ease: EASE }}>
                    
                    <ServiceVisual variant={SERVICES[active].variant} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                {SERVICES[active].num} — {SERVICES[active].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}