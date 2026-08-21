import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { FaqList } from '../components/common/FaqList';
import { Services } from '../components/Services';
import { ServiceVisual } from '../components/services/ServiceVisual';
import { CapabilityGrid } from '../components/home/CapabilityGrid';
import { CTASection } from '../components/CTASection';
import { SERVICES } from '../data/services';
import { ENGAGEMENTS } from '../data/engagements';
import { SERVICE_FAQS } from '../data/faqs';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

export function ServicesPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="What we build"
        lines={['Systems for', 'how you', 'actually work.']}
        copy="Five practices that combine into one delivery team: digital products, websites and experiences, AI systems, business systems, and product engineering."
        index={[
          { label: 'The five practices', href: '#practices' },
          { label: 'Inside each practice', href: '#detail' },
          { label: 'Ways to work with us', href: '#engagements' },
          { label: 'Questions', href: '#service-faqs' }]
        }
        stats={[
          { value: '23+', label: 'Practice areas' },
          { value: 'Fixed', label: 'Discovery fee' },
          { value: 'Live', label: 'Working demos' },
          { value: '24/7', label: 'Technical support' }]
        } />


      <div id="practices" className="scroll-mt-28">
        <Services />
      </div>

      <section id="detail" className="w-full scroll-mt-28 bg-paper py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            tone="light"
            eyebrow="Inside each practice"
            lines={['What you', 'actually get.']}
            copy="No mystery deliverables. Each practice has a clear output, a clear owner, and a clear point where you can judge it." />


          <div className="mt-12 space-y-12 md:mt-14 md:space-y-16">
            {SERVICES.map((service, i) =>
              <motion.article
                key={service.num}
                className="grid grid-cols-1 items-center gap-8 border-t border-ink/12 pt-10 lg:grid-cols-12 lg:gap-12"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: DUR.slow, ease: EASE }}>

                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>

                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink/12 bg-ink">
                    <ServiceVisual variant={service.variant} />
                  </div>
                </div>

                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
                    {service.num}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-tightest">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70 md:text-lg">
                    {service.blurb}
                  </p>
                  <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item, k) =>
                      <motion.li
                        key={item}
                        className="flex items-center gap-3 border-b border-ink/10 pb-3 text-[14px] font-medium text-ink md:text-[15px]"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VIEWPORT}
                        transition={{
                          duration: DUR.base,
                          ease: EASE,
                          delay: k * 0.04
                        }}>

                        <CheckIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {item}
                      </motion.li>
                    )}
                  </ul>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <section id="engagements" className="w-full scroll-mt-28 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Ways to work with us"
            lines={['Three ways', 'to start.']}
            copy="Most engagements begin with a discovery sprint, because a defined problem is cheaper to build than a described one." />


          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ENGAGEMENTS.map((engagement, i) =>
              <motion.article
                key={engagement.num}
                className={`flex flex-col rounded-2xl border p-7 md:p-8 ${i === 1 ? 'border-accent bg-accent/[0.06]' : 'border-white/12 bg-graphite'}`
                }
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>

                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                    {engagement.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                    {engagement.scope}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-extrabold uppercase leading-none tracking-tightest text-paper">
                  {engagement.name}
                </h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {engagement.bestFor}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-ash">
                  {engagement.copy}
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/12 pt-6">
                  {engagement.includes.map((item) =>
                    <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  )}
                </ul>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <CapabilityGrid />

      <section id="service-faqs" className="w-full scroll-mt-28 bg-paper py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                tone="light"
                eyebrow="Questions"
                lines={['Before you', 'ask.']} />

            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList faqs={SERVICE_FAQS} tone="light" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        lines={['Know what', 'you need?']}
        copy="Send the outline. We will come back with scope, sequence, and an honest view of what it takes." />

    </>);

}