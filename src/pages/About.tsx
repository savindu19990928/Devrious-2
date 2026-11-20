import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { Timeline } from '../components/about/Timeline';
import { Statistics } from '../components/sections/Statistics';
import { TechStack } from '../components/sections/TechStack';
import { CtaBanner } from '../components/sections/CtaBanner';
import { pillars } from '../data/about';
import { usePageMeta } from '../hooks/usePageMeta';

export function About() {
  usePageMeta(
    'About',
    'Devrious is a software company founded in Colombo, Sri Lanka in 2024 — building custom software, AI and ready-made business systems.'
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="About Devrious · Est. 2024"
        bannerImage="/banners/about-banner.jpg"
        title={
          <>
            Technology with purpose. <span className="text-[#ff5c78]">Innovation with direction.</span>
          </>
        }
        description="Devrious is a software company founded in Colombo, Sri Lanka in 2024. We design, build and secure software that runs businesses — properly.">
        <ButtonLink to="/contact" variant="light">
          Work with us
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="pillars-heading" className="bg-canvas py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <p className="flex items-center gap-2 text-xs font-semibold text-brand sm:text-sm">
                <span aria-hidden="true" className="h-1.5 w-6 rounded-full bg-tri-gradient" />
                What drives us
              </p>
              <h2 id="pillars-heading" className="mt-3 text-3xl font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:mt-4 sm:text-4xl md:text-5xl">
                Built properly, <span className="text-gradient">for the long run.</span>
              </h2>
            </Reveal>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className="border-t border-line first:border-t-0 lg:first:border-t">
                <Reveal delay={i * 0.03} className="grid gap-2 py-6 sm:gap-3 sm:py-8 md:grid-cols-[200px_1fr] md:gap-10">
                  <h3 className="flex items-center gap-3 text-base font-extrabold tracking-tight text-ink sm:text-lg">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-jade" />
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">{pillar.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Timeline />
      <Statistics heading={false} />
      <TechStack />
      <CtaBanner />
    </PageTransition>
  );
}
