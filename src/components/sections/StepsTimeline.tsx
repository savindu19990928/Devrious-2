import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import type { ProcessStep } from '../../types/content';

interface StepsTimelineProps {
  id: string;
  label: string;
  title: string;
  steps: ProcessStep[];
  tone?: 'white' | 'canvas';
}

export function StepsTimeline({ id, label, title, steps, tone = 'white' }: StepsTimelineProps) {
  return (
    <section aria-labelledby={id} className={`${tone === 'white' ? 'bg-white' : 'bg-canvas'} py-16 sm:py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <SectionHeading id={id} label={label} title={title} />
        <ol className={`relative mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 md:gap-6 ${steps.length === 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          <span
            aria-hidden="true"
            className={`absolute left-0 right-0 top-5 hidden h-px bg-line ${steps.length === 4 ? 'lg:block' : 'md:block'}`}
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.06}>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-sm font-extrabold text-ink shadow-soft">
                  {i + 1}
                  {i === 0 && <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-jade" />}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink sm:mt-6 sm:text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
