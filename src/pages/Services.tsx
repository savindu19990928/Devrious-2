import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ServiceRow } from '../components/services/ServiceRow';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { services, processSteps } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

const SERVICES_IMAGE = "/67a46086-98f9-4661-81a0-cef413519935.jpg";

export function Services() {
  usePageMeta(
    'Services',
    'Custom web development, custom software, API development, AI assistants and AI systems — engineered by Devrious in Colombo, Sri Lanka.'
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="Services · Five disciplines, one team"
        title={
        <>
            Engineering the <span className="text-gradient">future</span> of your business.
          </>
        }
        description="From custom digital experiences to intelligent automation, we build technology that helps businesses move forward."
        aside={
        <img
          src={SERVICES_IMAGE}
          alt="Three interlocking glossy rings in blue, purple and emerald"
          className="mx-auto w-full max-w-md mix-blend-multiply" />

        }>
        
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact">Start a project</ButtonLink>
          <ButtonLink to="/pre-builds" variant="secondary">
            See ready-made systems
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-label="All services" className="bg-canvas pb-8">
        <div className="mx-auto max-w-7xl px-6">
          {services.map((service, i) =>
          <ServiceRow key={service.slug} service={service} reversed={i % 2 === 1} />
          )}
        </div>
      </section>

      <StepsTimeline id="process-heading" label="How we work" title="A clear path from first call to go-live." steps={processSteps} />
      <CtaBanner />
    </PageTransition>);

}