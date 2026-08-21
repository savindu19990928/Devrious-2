import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/work/ProjectCard';
import { Results } from '../components/Results';
import { CTASection } from '../components/CTASection';
import { Reveal } from '../components/motion/Reveal';
import { PROJECTS } from '../data/projects';
import { INDUSTRIES } from '../data/engagements';
import { DUR, EASE } from '../utils/motion';

const FILTERS = ['All', 'Custom Software', 'Business Systems', 'AI Systems', 'Digital Products', 'Websites & Digital Experiences'];

export function WorkPage() {
  const [filter, setFilter] = useState('All');
  const reduce = useReducedMotion();

  const projects = useMemo(
    () => filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Selected work · 2024 — 2026"
        lines={['Built for', 'real businesses.']}
        copy="Ideas are easy to describe. The real test is what they become. Six systems, each shaped around how a specific business actually runs."
        index={[
        { label: 'Case studies', href: '#case-studies' },
        { label: 'Sectors we know', href: '#sectors' },
        { label: 'What changes after launch', href: '#outcomes' }]
        }
        stats={[
        { value: '6', label: 'Systems shipped' },
        { value: '5', label: 'Industries served' },
        { value: '2', label: 'Countries' },
        { value: '100%', label: 'Custom built' }]
        } />
      

      <section className="w-full bg-ink py-10 md:py-12">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            id="case-studies"
            eyebrow="Case studies"
            lines={['The work', 'in detail.']}
            copy="Every project below started as a business problem, not a feature request." />
          

          <Reveal>
            <ul className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
              {FILTERS.map((item) => {
                const active = filter === item;
                return (
                  <li key={item} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setFilter(item)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      active ?
                      'border-accent bg-accent text-ink' :
                      'border-white/15 text-ash hover:border-white/35 hover:text-paper'}`
                      }>
                      
                      {item}
                    </button>
                  </li>);

              })}
            </ul>
          </Reveal>

          <div key={filter} className="mt-10 space-y-12 md:space-y-16">
            {projects.map((project, i) =>
            <motion.div
              key={project.name}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}
              className="border-t border-white/12 pt-10 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-12 lg:gap-10">
              
                <div className="lg:col-span-12">
                  <ProjectCard
                  project={project}
                  index={PROJECTS.indexOf(project)}
                  showMetrics
                  cta={{ label: 'Start something similar', to: '/contact' }} />
                
                </div>
              </motion.div>
            )}

            {projects.length === 0 &&
            <p className="py-16 text-center font-display text-xl text-ash">
                No case studies in this category yet — but we have probably built
                something close.
              </p>
            }
          </div>
        </div>
      </section>

      <section id="sectors" className="w-full scroll-mt-28 border-t border-white/10 bg-ink py-10 md:py-12">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Sectors"
            lines={['Businesses we', 'already understand.']}
            copy="We learn a sector properly before we design for it. These are the ones we have worked in most." />
          
          <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, i) =>
            <motion.li
              key={industry}
              className="bg-ink p-5 md:p-6"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: DUR.base, ease: EASE, delay: i % 5 * 0.04 }}>
              
                <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 font-display text-[15px] font-semibold leading-tight tracking-tight text-paper md:text-base">
                  {industry}
                </p>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <div id="outcomes" className="scroll-mt-28">
        <Results />
      </div>

      <CTASection
        lines={['Have a system', 'in mind?']}
        copy="Bring us the problem, the workflow, or the half-built thing that stalled. We will tell you what we would do next." />
      
    </>);

}