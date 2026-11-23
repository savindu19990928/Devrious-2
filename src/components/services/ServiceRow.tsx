import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ChevronDownIcon, SparklesIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ButtonLink } from '../ui/ButtonLink';
import { ServiceIllustration } from './ServiceIllustration';
import { easeOut } from '../../utils/accent';
import type { Service } from '../../types/content';

interface ServiceRowProps {
  service: Service;
  reversed: boolean;
  basePath?: string;
}

export function ServiceRow({ service, reversed, basePath = '/services' }: ServiceRowProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${service.slug}-benefits`;

  return (
    <article
      aria-labelledby={`${service.slug}-title`}
      className="grid items-center gap-8 border-t border-line py-12 sm:gap-10 sm:py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
      <Reveal className={`group lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
        <ServiceIllustration service={service} size="lg" />
      </Reveal>

      <Reveal delay={0.05} className="lg:col-span-7">
        <h2
          id={`${service.slug}-title`}
          className="text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl md:text-4xl">
          {service.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">{service.overview}</p>

        <h3 className="mt-6 text-sm font-bold text-ink sm:mt-8">Key features</h3>
        <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink/80">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8" aria-label="Technologies used">
          {service.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink/70">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white sm:mt-8">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-bold text-ink transition-colors duration-150 hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:px-5 sm:py-4">
            <span className="flex items-center gap-2">
              <SparklesIcon className="h-4 w-4 text-brand" aria-hidden="true" />
              Business benefits
            </span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: easeOut }}>
                <ul className="flex flex-col gap-2 border-t border-line bg-jade-light/50 px-4 py-3.5 sm:px-5 sm:py-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm font-semibold text-ink">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade-deep" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 sm:mt-8">
          <ButtonLink to={`${basePath}/${service.slug}`} ariaLabel={`Learn more about ${service.title}`}>
            Learn more
          </ButtonLink>
        </div>
      </Reveal>
    </article>
  );
}
