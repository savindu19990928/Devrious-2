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

const ABOUT_IMAGE = "/60a326ce-bd29-4d29-a30c-088e2944da03.jpg";

export function About() {
  usePageMeta('About', 'Devrious is a software company founded in Colombo, Sri Lanka in 2024 — building custom software, AI and ready-made business systems.');

  return (
    <PageTransition>
      <PageHero
        eyebrow="About Devrious · Est. 2024"
        title={
        <>
            Technology with purpose. <span className="text-gradient">Innovation with direction.</span>
          </>
        }
        description="Devrious is a software company founded in Colombo, Sri Lanka in 2024. We design, build and secure software that runs businesses — properly."
        aside={
        <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img src={ABOUT_IMAGE} alt="Abstract composition of frosted glass panels, a glossy sphere and a torus" className="aspect-[4/5] w-full object-cover" />
          </div>
        }>
        
        <ButtonLink to="/contact">Work with us</ButtonLink>
      </PageHero>

      <section aria-labelledby="pillars-heading" className="bg-canvas py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand">
                <span aria-hidden="true" className="h-1.5 w-6 rounded-full bg-tri-gradient" />
                What drives us
              </p>
              <h2 id="pillars-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl">
                Built properly, <span className="text-gradient">for the long run.</span>
              </h2>
            </Reveal>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {pillars.map((pillar, i) =>
            <li key={pillar.title} className="border-t border-line first:border-t-0 lg:first:border-t">
                <Reveal delay={i * 0.03} className="grid gap-3 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                  <h3 className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-ink">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-jade" />
                    {pillar.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted">{pillar.body}</p>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <Timeline />
      <Statistics heading={false} />
      <TechStack />
      <CtaBanner />
    </PageTransition>);

}