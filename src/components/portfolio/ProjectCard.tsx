import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { easeOut } from '../../utils/accent';
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

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!frame.current) return;
    const rect = frame.current.getBoundingClientRect();
    cx.set(e.clientX - rect.left);
    cy.set(e.clientY - rect.top);
  };

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      aria-label={`${project.client} — ${project.type}. View project`}
      className="group block rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 sm:rounded-[2rem]">
      <motion.div
        ref={frame}
        onPointerMove={onMove}
        initial={reduce ? false : { clipPath: 'inset(12% 8% 12% 8% round 32px)', opacity: 0.4 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.3, delay: index * 0.06, ease: easeOut }}
        className={`relative overflow-hidden rounded-[1.5rem] border border-line bg-canvas sm:rounded-[2rem] md:cursor-none ${
          large ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[4/3]'
        }`}>
        <img
          src={project.image}
          alt={`${project.client} ${project.type} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
        <motion.span
          aria-hidden="true"
          style={{ x: cx, y: cy }}
          className="pointer-events-none absolute left-0 top-0 hidden md:block">
          <span className="flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-jade text-xs font-extrabold text-ink opacity-0 shadow-glow transition-[transform,opacity] duration-200 ease-out group-hover:scale-100 group-hover:opacity-100">
            View project
          </span>
        </motion.span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-[transform,background-color] duration-200 group-hover:rotate-45 group-hover:bg-jade sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 md:hidden">
          <ArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </span>
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold text-ink sm:left-5 sm:top-5 sm:py-1.5 sm:text-xs">
          {project.type}
        </span>
      </motion.div>
      <div className="mt-4 flex flex-col gap-1 sm:mt-6 sm:flex-row sm:items-baseline sm:justify-between">
        <h3
          className={`font-extrabold tracking-tight text-ink transition-colors duration-150 group-hover:text-brand ${
            large ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl'
          }`}>
          {project.client}
        </h3>
        <p className="text-xs font-semibold text-muted sm:text-sm">{project.type}</p>
      </div>
      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">{project.brief}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-ink/70 sm:px-3 sm:text-xs">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
