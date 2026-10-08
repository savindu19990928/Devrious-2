import React from 'react';
import { MapPinIcon, UserIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { TechStackTable } from '../components/TechStackTable';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { VisionMission } from '../components/about/VisionMission';
import { KeysToSuccess } from '../components/about/KeysToSuccess';
import { TestimonialCarousel } from '../components/about/TestimonialCarousel';
import { company, founders } from '../data/site';
import { aboutFacts, story, workProcess } from '../data/about';
import { usePageTitle } from '../hooks/usePageTitle';

export function About() {
  usePageTitle('About Our Software Development Company', {
    description:
      'Devrious was founded in Colombo, Sri Lanka, by Savindu Shiranjaya and Rangana Munasinghe to deliver engineered, thoroughly tested, and long-term supported software for growing businesses.',
    canonicalPath: '/about',
  });

  return (
    <>
      <PageHeader
        label="About Devrious"
        title="A software company built on doing things properly"
        description={`Devrious was founded in ${company.founded} in Colombo, Sri Lanka, by Mr. Savindu Shiranjaya and Mr. Rangana Munasinghe — to give businesses software that is engineered, tested and supported to a professional standard.`} />
      

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:py-24 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24 lg:px-8" aria-labelledby="story-heading">
        <Reveal>
          <h2 id="story-heading" className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
            Our story
          </h2>
          <div className="mt-6 max-w-[68ch] space-y-5">
            {story.map((p, i) =>
            <p
              key={p}
              className={i === 0 ? 'text-base leading-[1.8] text-ink-700' : 'text-[0.9375rem] leading-[1.8] text-ink-600 sm:text-base'}>
              
                {p}
              </p>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="grid grid-cols-2 gap-x-6 border-t border-ink-300 lg:grid-cols-1">
            {aboutFacts.map((f) =>
            <div key={f.label} className="flex flex-col-reverse border-b border-ink-200 py-6">
                <dt className="mt-1.5 text-[0.9375rem] leading-snug text-ink-600">{f.label}</dt>
                <dd className="font-display text-2xl font-bold text-brand-700 sm:text-3xl">{f.value}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>

      <VisionMission />

      <KeysToSuccess />

      <section className="border-t border-ink-100" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <Reveal>
            <h2 id="process-heading" className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.75] text-ink-600 sm:text-lg">
              The same four stages on every project, so you always know what happens next.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step, i) =>
            <li key={step.title}>
                <Reveal delay={i * 0.06} className="h-full border-t-2 border-brand-500 pt-6">
                  <span className="text-sm font-semibold text-brand-700">Stage {i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink-950">{step.title}</h3>
                  <p className="mt-3 text-base leading-[1.75] text-ink-600">{step.description}</p>
                </Reveal>
              </li>
            )}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink-100" aria-labelledby="founders-heading">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <Reveal>
            <h2 id="founders-heading" className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Founders
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-12">
            {founders.map((f, i) =>
            <Reveal key={f.name} delay={i * 0.08}>
                <article className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <div className="aspect-[4/5] w-full max-w-xs shrink-0 overflow-hidden rounded-2xl bg-ink-100 sm:w-44 lg:w-48">
                    {f.photo ?
                  <img src={f.photo} alt={`Mr. ${f.name}`} className="h-full w-full object-cover" style={{ objectPosition: '30% 35%' }} /> :

                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-400">
                        <UserIcon className="h-12 w-12" aria-hidden="true" />
                        <span className="text-sm font-medium">Photo coming soon</span>
                      </div>
                  }
                  </div>
                  <div className="min-w-0 sm:pt-1">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950">Mr. {f.name}</h3>
                    <p className="mt-1.5 text-[0.9375rem] font-semibold text-brand-700">{f.role}</p>
                    <p className="mt-4 text-base leading-[1.8] text-ink-600 sm:text-[1.0625rem]">{f.bio}</p>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Our tech stack</h2>
          <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.75] text-ink-600 sm:text-lg">
            Every Devrious project is built, hosted, optimised and tested with the same proven tools.
          </p>
          <div className="mt-8 flex gap-3 text-base leading-relaxed text-ink-700">
            <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <address className="not-italic">
              {company.addressLines.map((l) =>
              <span key={l} className="block">
                  {l}
                </span>
              )}
            </address>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="min-w-0">
          <TechStackTable />
        </Reveal>
      </section>

      <CtaBand />
    </>);

}