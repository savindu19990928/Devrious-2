import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { BrowserFrame } from './BrowserFrame';
import { Reveal } from './Reveal';
import { testimonials } from '../data/testimonials';
import { easeOut } from '../utils/motion';
import type { Project, ProjectStatus } from '../types/content';

const statusLabel: Record<ProjectStatus, {text: string;className: string;}> = {
  live: { text: 'Live', className: 'bg-brand-50 text-brand-800 ring-brand-200' },
  internal: { text: 'In use by client', className: 'bg-ink-50 text-ink-700 ring-ink-200' },
  retired: { text: 'Retired at client’s request', className: 'bg-coral-500/10 text-ink-800 ring-coral-400/40' },
  product: { text: 'Devrious product', className: 'bg-sun-500/20 text-ink-900 ring-sun-500/50' }
};

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};
const chips: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } } };
const chip: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: easeOut } }
};

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const reduce = useReducedMotion();
  const testimonial = testimonials.find((t) => t.id === project.testimonialId);
  const status = statusLabel[project.status];
  const host = project.url?.replace('https://', '').replace(/\/$/, '');
  const inView = { initial: reduce ? false : 'hidden' as const, whileInView: 'show', viewport: { once: true, margin: '-60px' } };

  return (
    <motion.article
      id={project.id}
      className="relative scroll-mt-24 border-b border-ink-100 py-12 last:border-b-0 sm:py-16"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.3, ease: easeOut }}>
      
      <div className={`grid gap-10 ${project.screenshot ? 'lg:grid-cols-[1fr_1.1fr] lg:items-start' : ''}`}>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ${status.className}`}>{status.text}</span>
            <span className="text-sm text-ink-500">{project.type}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">{project.name}</h2>
          <p className="mt-1 text-sm font-medium text-ink-500">Client: {project.client}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700 sm:text-lg">{project.summary}</p>
          <motion.ul className="mt-5 flex flex-wrap gap-2" variants={chips} {...inView} aria-label="Technology used">
            {project.stack.map((t) =>
            <motion.li key={t} variants={chip} className="rounded-md bg-ink-50 px-2 py-0.5 text-xs font-semibold text-ink-700 ring-1 ring-ink-200">
                {t}
              </motion.li>
            )}
          </motion.ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {project.url &&
            <a href={project.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
                Visit {host}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            }
            {project.internalLink &&
            <Link to={project.internalLink} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-700">
                View product details
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
              </Link>
            }
          </div>
        </Reveal>
        {project.screenshot && host &&
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
          className="min-w-0">
          
            <BrowserFrame
            src={project.screenshot}
            fallbackSrc={project.screenshotFallback}
            url={host}
            alt={`${project.name} screenshot`}
            zoomable
            className="transition-transform duration-200 ease-out hover:-translate-y-1" />
          
          </motion.div>
        }
      </div>

      {project.challenges.length > 0 &&
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-200 bg-canvas">
          <div className="hidden grid-cols-2 bg-ink-50 text-sm font-semibold text-ink-950 md:grid">
            <p className="px-6 py-3">The challenge</p>
            <p className="border-l border-ink-200 px-6 py-3">How we solved it</p>
          </div>
          <motion.ul className="divide-y divide-ink-200" variants={list} {...inView}>
            {project.challenges.map((c, i) =>
          <motion.li key={c} variants={row} className="grid md:grid-cols-2">
                <div className="px-5 py-4 sm:px-6">
                  <span className="mb-1 block text-xs font-semibold text-coral-700 md:hidden">Challenge</span>
                  <p className="text-ink-800">{c}</p>
                </div>
                <div className="border-t border-dashed border-ink-200 px-5 py-4 sm:px-6 md:border-l md:border-t-0 md:border-solid">
                  <span className="mb-1 block text-xs font-semibold text-brand-700 md:hidden">Solution</span>
                  <p className="text-ink-700">{project.solutions[i]}</p>
                </div>
              </motion.li>
          )}
          </motion.ul>
        </div>
      }

      {testimonial &&
      <Reveal className="relative mt-8 pl-5 sm:pl-6">
          <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 origin-top rounded-full bg-brand-500"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }} />
        
          <figure>
            <blockquote className="max-w-4xl text-base leading-relaxed text-ink-800 sm:text-lg">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-3 text-sm">
              <span className="font-semibold text-ink-950">{testimonial.name}</span>
              <span className="text-ink-500"> — {testimonial.role}, {testimonial.company}</span>
            </figcaption>
          </figure>
        </Reveal>
      }
    </motion.article>);

}