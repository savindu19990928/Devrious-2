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
    <section aria-labelledby={id} className={`${tone === 'white' ? 'bg-white' : 'bg-canvas'} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id={id} label={label} title={title} />
        <ol className={`relative mt-14 grid gap-10 md:gap-6 ${steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          <span aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" />
          {steps.map((step, i) =>
          <li key={step.title} className="relative">
              <Reveal delay={i * 0.06}>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-sm font-extrabold text-ink shadow-soft">
                  {i + 1}
                  {i === 0 && <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-jade" />}
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            </li>
          )}
        </ol>
      </div>
    </section>);

}