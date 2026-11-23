import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ServiceRow } from '../components/services/ServiceRow';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { cyberSecurityServices, cyberSecurityProcessSteps } from '../data/cyberSecurity';
import { usePageMeta } from '../hooks/usePageMeta';

export function CyberSecurity() {
  usePageMeta(
    'Cyber Security Services',
    'Vulnerability assessment & penetration testing (VAPT), web & application security, server/network/cloud hardening, digital forensics & incident response, and ISO 27001 compliance.'
  );

  return (
    <PageTransition>
      <PageHero
        immersive
        eyebrow="Cyber Security Services · Offensive Testing & Defense"
        bannerImage="/banners/cyber-security-banner.jpg"
        titleLines={[
          'Securing your',
          <>
            <span className="text-[#ff5c78]">digital</span>
          </>,
          'perimeter.'
        ]}
        description="End-to-end penetration testing, application hardening, infrastructure security reviews, incident forensics, and ISO 27001 risk readiness."
        tagline="VAPT · AppSec · Cloud · Forensics · Compliance">
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact?service=cyber-security" variant="light">
            Request a security assessment
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineLight">
            Explore engineering services
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-label="All cyber security services" className="bg-canvas pb-8 pt-6 sm:pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          {cyberSecurityServices.map((service, i) => (
            <ServiceRow key={service.slug} service={service} reversed={i % 2 === 1} basePath="/cyber-security" />
          ))}
        </div>
      </section>

      <StepsTimeline
        id="cyber-process-heading"
        label="How we secure"
        title="From threat modeling to verified remediation."
        steps={cyberSecurityProcessSteps}
      />
      <CtaBanner />
    </PageTransition>
  );
}
