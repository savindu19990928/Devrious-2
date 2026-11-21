import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ServiceRow } from '../components/services/ServiceRow';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { services, processSteps } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

export function Services() {
  usePageMeta(
    'Services',
    'Custom web development, custom software, API development, AI assistants and AI systems — engineered by Devrious in Colombo, Sri Lanka.'
  );

  return (
    <PageTransition>
      <PageHero
        immersive
        eyebrow="Services · Five disciplines, one team"
        bannerImage="/banners/services-banner.jpg"
        titleLines={[
          'Engineering the',
          <>
            <span className="text-[#ff5c78]">future</span> of
          </>,
          'your business.'
        ]}
        description="From custom digital experiences to intelligent automation, we build technology that helps businesses move forward."
        tagline="Custom Web · Software · APIs · Practical AI">
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact" variant="light">
            Start a project
          </ButtonLink>
          <ButtonLink to="/pre-builts" variant="outlineLight">
            See ready-made systems
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-label="All services" className="bg-canvas pb-8 pt-6 sm:pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <StepsTimeline id="process-heading" label="How we work" title="A clear path from first call to go-live." steps={processSteps} />
      <CtaBanner />
    </PageTransition>
  );
}
