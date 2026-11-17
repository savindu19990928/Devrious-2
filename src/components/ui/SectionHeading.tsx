import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: { label: string; to: string };
  inverted?: boolean;
}

export function SectionHeading({ id, label, title, description, action, inverted = false }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
      <Reveal className="max-w-3xl">
        <p className={`flex items-center gap-2.5 text-xs font-semibold sm:text-sm ${inverted ? 'text-white/70' : 'text-ink/60'}`}>
          <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${inverted ? 'bg-jade' : 'bg-brand'}`} />
          {label}
        </p>
        <h2
          id={id}
          className={`mt-3 font-display text-[1.8rem] font-bold leading-[1.08] tracking-[-0.02em] xs:text-[2.1rem] sm:mt-5 sm:text-[2.5rem] md:text-[3.25rem] ${
            inverted ? 'text-white' : 'text-ink'
          }`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-3 max-w-2xl text-base leading-relaxed sm:mt-5 sm:text-lg ${inverted ? 'text-white/65' : 'text-muted'}`}>
            {description}
          </p>
        )}
      </Reveal>
      {action && (
        <Reveal delay={0.05} className="shrink-0">
          <Link
            to={action.to}
            className={`group inline-flex items-center gap-3 whitespace-nowrap rounded-full py-1.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:py-2 sm:text-[15px] ${
              inverted ? 'text-white hover:text-jade' : 'text-ink hover:text-brand'
            }`}>
            {action.label}
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:rotate-45 sm:h-11 sm:w-11 ${
                inverted ? 'bg-white text-ink' : 'bg-ink text-white'
              }`}>
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      )}
    </div>
  );
}
