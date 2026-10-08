import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CaseStudy } from '../components/CaseStudy';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';

export function Portfolio() {
  usePageTitle('Portfolio of Websites & Business Software Projects', {
    description:
      'Case studies and real projects engineered by Devrious: custom eCommerce, inventory systems, operational portals, and cloud platforms for leading brands.',
    canonicalPath: '/portfolio',
  });
  const clientProjects = projects.filter((p) => p.status !== 'product');
  const products = projects.filter((p) => p.status === 'product');

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Real projects, real constraints"
        description="Every client brought a different problem. Here’s what we built, what made it hard, and how we solved it."
        aside={
        <dl className="flex gap-8">
            <div className="flex flex-col-reverse">
              <dt className="text-sm text-ink-500">Client projects</dt>
              <dd className="font-display text-3xl font-extrabold text-ink-950">{clientProjects.length}</dd>
            </div>
            <div className="flex flex-col-reverse border-l border-ink-200 pl-8">
              <dt className="text-sm text-ink-500">In-house product</dt>
              <dd className="font-display text-3xl font-extrabold text-ink-950">{products.length}</dd>
            </div>
          </dl>
        } />
      

      <section className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Client projects">
        {clientProjects.map((p) =>
        <CaseStudy key={p.id} project={p} />
        )}
      </section>

      <section className="border-t border-ink-100 bg-ink-50" aria-labelledby="products-heading">
        <div className="mx-auto max-w-7xl px-6 pt-14 sm:pt-16 lg:px-8">
          <Reveal>
            <h2 id="products-heading" className="text-sm font-semibold text-brand-700">Built by Devrious</h2>
          </Reveal>
          {products.map((p) =>
          <CaseStudy key={p.id} project={p} />
          )}
        </div>
      </section>

      <CtaBand title="Your project could be next" />
    </>);

}