import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { ProjectCard } from './work/ProjectCard';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { PROJECTS } from '../data/projects';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

const [LEAD, ...SUPPORTING] = PROJECTS.slice(0, 4);

/**
 * The work chapter is a normal, content-height section on every breakpoint.
 * It used to be a scroll-pinned horizontal track whose wrapper was sized
 * `100vh + travel`; any mismatch between that travel and the row's real width
 * left a tall band of empty `bg-ink` at the end of the section. One lead case
 * study plus three hairline rows carries the same content with real hierarchy
 * and no invented scroll height.
 */
export function Work() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="w-full bg-ink py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.2rem,7.5vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-paper">
            <MaskLines lines={['Built for', 'real businesses.']} />
          </h2>
          <Reveal delay={0.06}>
            <div className="max-w-sm">
              <p className="text-[15px] leading-relaxed text-ash">
                Ideas are easy to describe. The real test is what they become.
              </p>
              <Link
                to="/work"
                className="group mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-paper transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
                
                All {PROJECTS.length} case studies
                <ArrowUpRightIcon
                  className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true" />
                
              </Link>
            </div>
          </Reveal>
        </div>

        {/* lead case study — the one project that carries the section */}
        <Reveal className="mt-10 md:mt-12">
          <ProjectCard project={LEAD} index={0} layout="split" />
        </Reveal>

        {/* supporting case studies — deliberately lighter hairline rows */}
        <ul className="mt-12 border-t border-white/12 md:mt-14">
          {SUPPORTING.map((project, i) =>
          <motion.li
            key={project.name}
            className="border-b border-white/12"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
            
              <Link
              to="/work"
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 py-6 transition-colors duration-150 ease-out focus:outline-none md:grid-cols-[auto_1.1fr_1.4fr_auto] md:py-8">
              
                <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
                  0{i + 2}
                </span>
                <h3 className="font-display text-[clamp(1.35rem,3.4vw,2rem)] font-bold uppercase leading-none tracking-tightest text-paper transition-colors duration-150 ease-out group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="col-start-2 max-w-xl text-[14px] leading-relaxed text-ash md:col-start-3 md:text-[15px]">
                  {project.summary}
                </p>
                <ArrowUpRightIcon
                className="col-start-3 row-start-1 h-5 w-5 self-center text-ash transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:col-start-4"
                aria-hidden="true" />
              
              </Link>
            </motion.li>
          )}
        </ul>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold uppercase leading-[0.95] tracking-tightest text-paper">
              Your project <span className="text-accent">next.</span>
            </p>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-display text-sm font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
              
              Start a Project
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>);

}