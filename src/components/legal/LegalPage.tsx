import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../layout/PageHero';
import { CONTACT, LEGAL_LINKS } from '../../data/site';
import type { LegalSection } from '../../data/legal';
import { LEGAL_UPDATED } from '../../data/legal';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

type LegalPageProps = {
  eyebrow: string;
  lines: string[];
  copy: string;
  sections: LegalSection[];
  current: string;
};

export function LegalPage({ eyebrow, lines, copy, sections, current }: LegalPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(sections[0]?.id ?? '');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.2', 'end 0.9']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.
        filter((entry) => entry.isIntersecting).
        sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        lines={lines}
        copy={copy}
        stats={[
        { value: LEGAL_UPDATED.split(' ')[0] + ' Aug', label: 'Last updated' },
        { value: `${sections.length}`, label: 'Sections' },
        { value: 'Plain', label: 'Language, no filler' },
        { value: 'Direct', label: 'Reply to requests' }]
        } />
      

      <section className="w-full bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="h-px w-full bg-white/12">
                  <motion.div
                    className="h-full origin-left bg-accent"
                    style={reduce ? { scaleX: 1 } : { scaleX: progress }} />
                  
                </div>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                  Contents
                </p>
                <nav aria-label="Document sections" className="mt-4">
                  <ul className="space-y-1">
                    {sections.map((section, i) => {
                      const isActive = active === section.id;
                      return (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className={`flex items-baseline gap-3 rounded-lg px-3 py-2 text-[14px] transition-colors duration-150 ease-out ${
                            isActive ?
                            'bg-white/[0.06] text-paper' :
                            'text-ash hover:text-paper'}`
                            }>
                            
                            <span
                              className={`font-mono text-[10px] ${
                              isActive ? 'text-accent' : 'text-ash/70'}`
                              }>
                              
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            {section.title}
                          </a>
                        </li>);

                    })}
                  </ul>
                </nav>

                <div className="mt-8 rounded-2xl border border-white/12 bg-graphite p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                    Need something clarified?
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group mt-3 flex items-center gap-2 font-display text-base font-semibold text-paper transition-colors duration-150 ease-out hover:text-accent">
                    
                    {CONTACT.email}
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true" />
                    
                  </a>
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-white/12 pt-4">
                    {LEGAL_LINKS.filter((link) => link.to !== current).map((link) =>
                    <Link
                      key={link.to}
                      to={link.to}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash transition-colors duration-150 ease-out hover:text-accent">
                      
                        {link.label} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            <div ref={ref} className="relative lg:col-span-8">
              {sections.map((section, i) =>
              <motion.section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-t border-white/12 py-9 first:border-t-0 first:pt-0"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: DUR.slow, ease: EASE }}>
                
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold uppercase leading-none tracking-tightest text-paper">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) =>
                <p
                  key={paragraph}
                  className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ash md:text-base">
                  
                      {paragraph}
                    </p>
                )}
                  {section.bullets &&
                <ul className="mt-6 space-y-3 border-l border-white/12 pl-5">
                      {section.bullets.map((bullet) =>
                  <li
                    key={bullet}
                    className="max-w-2xl text-[15px] leading-relaxed text-paper/80">
                    
                          {bullet}
                        </li>
                  )}
                    </ul>
                }
                </motion.section>
              )}

              <div className="mt-10 rounded-2xl border border-white/12 bg-graphite p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  Document status
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/80">
                  This version was published on {LEGAL_UPDATED}. Earlier versions are
                  available on request, and active clients are notified directly of any
                  material change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

}