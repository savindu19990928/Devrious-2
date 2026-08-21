import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { StorySection } from '../components/about/StorySection';
import { ApproachSection } from '../components/about/ApproachSection';
import { WhyDevrious } from '../components/WhyDevrious';
import { CTASection } from '../components/CTASection';
import { LogoMark } from '../components/Logo';
import { LOCATIONS, MILESTONES, TEAM } from '../data/team';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

export function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Devrious · Est. 2024"
        lines={['We build', 'what should', 'exist.']}
        copy="A small, senior team that combines design, engineering, systems thinking, and AI — built to be the technology partner a growing business actually needs."
        index={[
        { label: 'Why we exist', href: '#story' },
        { label: 'How we got here', href: '#milestones' },
        { label: 'Who you work with', href: '#team' },
        { label: 'Where we are', href: '#locations' },
        { label: 'How we work', href: '#approach' }]
        }
        stats={[
        { value: '2024', label: 'Founded' },
        { value: '6', label: 'People in the studio' },
        { value: '2', label: 'Countries served' },
        { value: 'Senior', label: 'Only staffing model' }]
        } />
      

      <StorySection />

      <section id="milestones" className="w-full scroll-mt-24 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Milestones"
            lines={['A short', 'history.']}
            copy="Founded in 2024, and deliberately grown around the work rather than a headcount target." />
          

          <ol className="relative mt-10 border-l border-white/12 pl-8 md:pl-12">
            {MILESTONES.map((milestone, i) =>
            <motion.li
              key={milestone.title}
              className="relative pb-12 last:pb-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.04 }}>
              
                <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-white/20 bg-ink md:-left-[57px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {milestone.year}
                </span>
                <h3 className="mt-3 font-display text-[clamp(1.4rem,4vw,2.25rem)] font-bold uppercase leading-none tracking-tightest text-paper">
                  {milestone.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ash">
                  {milestone.copy}
                </p>
              </motion.li>
            )}
          </ol>
        </div>
      </section>

      <section id="team" className="w-full scroll-mt-24 bg-paper py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            tone="light"
            eyebrow="The studio"
            lines={['Who you', 'work with.']}
            copy="No account layer between you and the people building. The team you meet is the team that delivers." />
          

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) =>
            <motion.li
              key={member.name}
              className="group flex flex-col rounded-2xl border border-ink/12 bg-white p-6 transition-colors duration-200 ease-out hover:border-accent md:p-7"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i % 3 * 0.05 }}>
              
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-ink/10 bg-paper">
                    <LogoMark className="h-7 w-6" />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-ink/35">
                    {member.initials}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight md:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {member.role}
                </p>
                <p className="mt-auto border-t border-ink/10 pt-5 text-[14px] leading-relaxed text-ink/65">
                  {member.focus}
                </p>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <WhyDevrious />

      <section id="locations" className="w-full scroll-mt-24 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Where we are"
            lines={['Colombo based.', 'Working further.']}
            copy="Delivery is remote-first with a real studio behind it, so time zones never become an excuse." />
          

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/12 md:grid-cols-3">
            {LOCATIONS.map((location, i) =>
            <motion.li
              key={location.city}
              className="flex flex-col bg-ink p-7 md:p-8"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
              
                <p className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold uppercase leading-none tracking-tightest text-paper">
                  {location.city}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  {location.country}
                </p>
                <p className="mt-auto border-t border-white/12 pt-4 text-[14px] text-paper/75">
                  {location.note}
                </p>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <ApproachSection />

      <CTASection
        lines={['Want to work', 'with this team?']}
        copy="Tell us about the business and what you are trying to change. We will tell you if we are the right people for it." />
      
    </>);

}