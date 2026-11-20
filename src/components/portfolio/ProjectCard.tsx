import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { easeOut } from '../../utils/accent';
import { ProjectDevices } from './ProjectDevices';
import { formatProjectHost } from '../../utils/url';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
  index: number;
  large?: boolean;
}

export function ProjectCard({ project, index, large = false }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const cx = useSpring(useMotionValue(0), { stiffness: 400, damping: 30 });
  const cy = useSpring(useMotionValue(0), { stiffness: 400, damping: 30 });
  const host = project.url ? formatProjectHost(project.url) : undefined;
  const heading = project.subtitle ?? project.title;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!frame.current) return;
    const rect = frame.current.getBoundingClientRect();
    cx.set(e.clientX - rect.left);
    cy.set(e.clientY - rect.top);
  };

  return (
    <article className="group">
      <Link
        to={`/portfolio/${project.slug}`}
        aria-label={`${heading} — ${project.category}. View project`}
        className="group/frame block rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 sm:rounded-[2rem]">
        <motion.div
          ref={frame}
          onPointerMove={onMove}
          initial={reduce ? false : { clipPath: 'inset(12% 8% 12% 8% round 32px)', opacity: 0.4 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.3, delay: index * 0.06, ease: easeOut }}
          className="relative overflow-hidden rounded-[1.5rem] border border-line bg-wine-deep sm:rounded-[2rem] md:cursor-none">
          <ProjectDevices
            client={project.title}
            desktopImage={project.desktopImage}
            desktopVideo={project.desktopVideo}
            mobileImage={project.mobileImage}
            url={project.url}
            badge={project.category}
            layout="overlap"
          />

          <motion.span
            aria-hidden="true"
            style={{ x: cx, y: cy }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block">
            <span className="flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-jade text-xs font-extrabold text-ink opacity-0 shadow-glow transition-[transform,opacity] duration-200 ease-out group-hover/frame:scale-100 group-hover/frame:opacity-100">
              View project
            </span>
          </motion.span>
          <span className="glass pointer-events-none absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-[11px] font-bold text-ink sm:left-5 sm:top-5 sm:py-1.5 sm:text-xs">
            {project.category}
          </span>
        </motion.div>
      </Link>

      <div className="mt-4 flex flex-col gap-1 sm:mt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3
          className={`font-extrabold tracking-tight text-ink transition-colors duration-150 ${
            large ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl'
          }`}>
          <Link
            to={`/portfolio/${project.slug}`}
            className="hover:text-brand focus-visible:outline-none focus-visible:underline">
            {heading}
          </Link>
        </h3>
        <p className="shrink-0 text-xs font-semibold text-muted sm:text-sm">
          {project.industry ?? project.type}
        </p>
      </div>

      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
        {project.description ?? project.brief}
      </p>

      {(project.clientRep || project.statusNote) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
          {project.clientRep && (
            <span>
              Client representative: <strong className="font-semibold text-ink">{project.clientRep}</strong>
            </span>
          )}
          {project.statusNote && (
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 font-semibold text-amber-800">
              {project.statusNote}
            </span>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:mt-5">
        <ul className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-ink/70 sm:px-3 sm:text-xs">
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-ink/75 transition-colors duration-150 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            Case study
          </Link>
          {project.url && host && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-xs font-bold text-ink transition-colors duration-150 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              <span>Visit {host}</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
