import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceIllustration } from '../components/services/ServiceIllustration';
import { ServiceCard } from '../components/services/ServiceCard';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { NotFound } from './NotFound';
import { processSteps, services } from '../data/services';
import { techGroups } from '../data/devrious';
import { usePageMeta } from '../hooks/usePageMeta';

const techMarks = new Map(techGroups.flatMap((g) => g.items.map((t) => [t.name, t.mark] as const)));

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  usePageMeta(service?.title ?? 'Service not found', service?.description ?? 'This service could not be found.');

  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        aside={
        <div className="group">
            <ServiceIllustration service={service} size="lg" />
          </div>
        }>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink to={`/contact?service=${service.slug}`}>Discuss your project</ButtonLink>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-ink/70 transition-colors duration-150 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All services
          </Link>
        </div>
      </PageHero>

      <section aria-labelledby="overview-heading" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand">
              <span aria-hidden="true" className="h-1.5 w-6 rounded-full bg-tri-gradient" />
              Overview
            </p>
            <h2 id="overview-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-ink md:text-4xl">
              {service.overview}
            </h2>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.05}>
              <h3 className="text-sm font-bold text-ink">Key features</h3>
              <ul className="mt-5 flex flex-col">
                {service.features.map((feature) =>
                <li key={feature} className="flex items-start gap-4 border-b border-line py-4 text-base font-semibold text-ink">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-jade-light">
                      <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-sm font-bold text-jade">Business benefits</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {service.benefits.map((benefit) =>
                <li key={benefit} className="flex gap-3 text-lg font-bold leading-snug">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                    {benefit}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="tech-used-heading" className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading id="tech-used-heading" label="Technologies" title="What we build it with." />
          <ul className="mt-10 flex flex-wrap gap-3">
            {service.technologies.map((tech, i) =>
            <li key={tech}>
                <Reveal delay={i * 0.04}>
                  <span className="group flex items-center gap-3 rounded-2xl border border-line bg-white py-2 pl-2 pr-5 shadow-soft">
                    <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-[11px] font-extrabold text-brand transition-[transform,background-color,color] duration-200 ease-out group-hover:-rotate-6 group-hover:bg-jade-light group-hover:text-jade-deep">
                    
                      {techMarks.get(tech) ?? tech.slice(0, 2)}
                    </span>
                    <span className="font-bold text-ink">{tech}</span>
                  </span>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <StepsTimeline id="service-process-heading" label="How we work" title="A clear path from first call to go-live." steps={processSteps} />

      <section aria-labelledby="other-services-heading" className="bg-canvas py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading id="other-services-heading" label="Keep exploring" title="More ways we can help." action={{ label: 'All services', to: '/services' }} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((s, i) =>
            <li key={s.slug}>
                <Reveal delay={i * 0.05} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>);

}