import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: {label: string;to: string;};
  inverted?: boolean;
}

export function SectionHeading({ id, label, title, description, action, inverted = false }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <Reveal className="max-w-3xl">
        <p className={`flex items-center gap-2.5 text-sm font-semibold ${inverted ? 'text-white/70' : 'text-ink/60'}`}>
          <span aria-hidden="true" className={`h-2 w-2 rounded-full ${inverted ? 'bg-jade' : 'bg-brand'}`} />
          {label}
        </p>
        <h2
          id={id}
          className={`mt-5 font-display text-[2.25rem] font-bold leading-[1.06] tracking-[-0.02em] md:text-[3.25rem] ${
          inverted ? 'text-white' : 'text-ink'}`
          }>
          
          {title}
        </h2>
        {description &&
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${inverted ? 'text-white/65' : 'text-muted'}`}>
            {description}
          </p>
        }
      </Reveal>
      {action &&
      <Reveal delay={0.05} className="shrink-0">
          <Link
          to={action.to}
          className={`group inline-flex items-center gap-3 whitespace-nowrap rounded-full py-2 text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
          inverted ? 'text-white hover:text-jade' : 'text-ink hover:text-brand'}`
          }>
          
            {action.label}
            <span
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:rotate-45 ${
            inverted ? 'bg-white text-ink' : 'bg-ink text-white'}`
            }>
            
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      }
    </div>);

}