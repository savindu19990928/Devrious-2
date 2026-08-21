import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { ProjectPreview } from './ProjectPreview';
import type { Project } from '../../data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
  /** 'split' keeps the card inside one viewport for the pinned desktop track. */
  layout?: 'stacked' | 'split';
  showMetrics?: boolean;
  cta?: {label: string;to: string;};
};

export function ProjectCard({
  project,
  index,
  layout = 'stacked',
  showMetrics = false,
  cta = { label: 'View Case Study', to: '/work' }
}: ProjectCardProps) {
  const split = layout === 'split';

  return (
    <article
      className={
      split ?
      'grid grid-cols-1 gap-7 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10' :
      'flex flex-col'
      }>
      
      <div
        className={
        split ?
        'aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/11]' :
        'aspect-[4/3] w-full sm:aspect-[16/10]'
        }>
        
        <ProjectPreview variant={project.variant} label={project.category} />
      </div>

      <div className={split ? 'flex flex-col lg:h-full lg:justify-center' : 'mt-6 flex flex-1 flex-col'}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
            0{index + 1}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
            {project.industry} · {project.location} · {project.year}
          </span>
        </div>

        <h3
          className={`mt-3 font-display font-extrabold uppercase leading-[0.95] tracking-tightest text-paper ${
          split ? 'text-[clamp(1.75rem,2.6vw,2.6rem)]' : 'text-[clamp(1.5rem,4.4vw,2.5rem)]'}`
          }>
          
          {project.name}
        </h3>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash md:text-base">
          {project.summary}
        </p>

        <dl
          className={`mt-6 grid grid-cols-1 gap-5 border-t border-white/12 pt-6 ${
          split ? '' : 'sm:grid-cols-2'}`
          }>
          
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
              The challenge
            </dt>
            <dd className="mt-2 text-[14px] leading-relaxed text-paper/80">
              {project.challenge}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
              What we built
            </dt>
            <dd className="mt-2 text-[14px] leading-relaxed text-paper/80">
              {project.built}
            </dd>
          </div>
        </dl>

        {showMetrics &&
        <ul className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/12">
            {project.metrics.map((metric) =>
          <li key={metric.label} className="bg-ink p-4">
                <p className="font-display text-[clamp(1.1rem,2.4vw,1.6rem)] font-extrabold leading-none tracking-tightest text-accent">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ash">
                  {metric.label}
                </p>
              </li>
          )}
          </ul>
        }

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) =>
            <li
              key={tech}
              className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/70">
              
                {tech}
              </li>
            )}
          </ul>
          <Link
            to={cta.to}
            className="group ml-auto inline-flex items-center gap-2 font-display text-sm font-semibold text-paper transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
            
            {cta.label}
            <ArrowUpRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true" />
            
          </Link>
        </div>
      </div>
    </article>);

}