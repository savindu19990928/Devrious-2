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
      className="group block rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4">
      
      <motion.div
        ref={frame}
        onPointerMove={onMove}
        initial={reduce ? false : { clipPath: 'inset(12% 8% 12% 8% round 32px)', opacity: 0.4 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.3, delay: index * 0.06, ease: easeOut }}
        className={`relative overflow-hidden rounded-[2rem] border border-line bg-canvas md:cursor-none ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        
        <img
          src={project.image}
          alt={`${project.client} ${project.type} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
        
        <div aria-hidden="true" className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
        <motion.span
          aria-hidden="true"
          style={{ x: cx, y: cy }}
          className="pointer-events-none absolute left-0 top-0 hidden md:block">
          
          <span className="flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-jade text-xs font-extrabold text-ink opacity-0 shadow-glow transition-[transform,opacity] duration-200 ease-out group-hover:scale-100 group-hover:opacity-100">
            View project
          </span>
        </motion.span>
        <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-[transform,background-color] duration-200 group-hover:rotate-45 group-hover:bg-jade md:hidden">
          <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="glass absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs font-bold text-ink">{project.type}</span>
      </motion.div>
      <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className={`font-extrabold tracking-tight text-ink transition-colors duration-150 group-hover:text-brand ${large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
          {project.client}
        </h3>
        <p className="text-sm font-semibold text-muted">{project.type}</p>
      </div>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{project.brief}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) =>
        <li key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink/70">
            {tag}
          </li>
        )}
      </ul>
    </Link>);

}