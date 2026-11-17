import { QuoteIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { CtaBanner } from '../components/sections/CtaBanner';
import { projects } from '../data/projects';
import { clients, testimonials } from '../data/devrious';
import { usePageMeta } from '../hooks/usePageMeta';

const comparison = [
  { label: 'Brief', values: ['Corporate and trustworthy', 'Movement and personality'] },
  { label: 'Audience', values: ['B2B buyers and export partners', 'Customers ready to order'] },
  { label: 'Delivered', values: ['Corporate website', 'Brand website & quote system'] }
];

export function Portfolio() {
  usePageMeta('Portfolio', 'Selected work by Devrious — Avenor Apparel corporate website and Zevora Custom brand website & quote system.');
  const featured = testimonials[0];

  return (
    <PageTransition>
      <PageHero
        eyebrow="Portfolio · Selected work"
        title={
          <>
            Digital experiences built to <span className="text-gradient">make an impact.</span>
          </>
        }
        description="Two brands, one client, opposite briefs — and both delivered."
      />

      <section aria-label="Projects" className="bg-canvas pb-16 sm:pb-20 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 sm:gap-20 sm:px-6 md:gap-24 md:px-10">
          {projects.map((project, i) => (
            <div key={project.slug} className={`grid gap-10 lg:grid-cols-12 ${i % 2 === 1 ? 'lg:[&>*:first-child]:col-start-5' : ''}`}>
              <div className="lg:col-span-8">
                <ProjectCard project={project} index={0} large />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="contrast-heading" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading id="contrast-heading" label="Same client, opposite briefs" title="One partner. Two very different personalities." />
          <Reveal delay={0.05} className="mt-10 sm:mt-12">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink">
                    <th scope="col" className="w-1/5 py-4 text-sm font-semibold text-muted">
                      <span className="sr-only">Attribute</span>
                    </th>
                    {projects.map((p) => (
                      <th key={p.slug} scope="col" className="py-4 text-xl font-extrabold tracking-tight text-ink">
                        {p.client}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.label} className="group border-b border-line">
                      <th scope="row" className="py-5 text-sm font-semibold text-muted">
                        {row.label}
                      </th>
                      {row.values.map((v) => (
                        <td key={v} className="py-5 pr-6 text-lg font-bold text-ink">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:hidden">
              {projects.map((p, idx) => (
                <div key={p.slug} className="rounded-3xl border border-line bg-canvas p-5">
                  <h3 className="text-lg font-extrabold tracking-tight text-ink">{p.client}</h3>
                  <dl className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                    {comparison.map((row) => (
                      <div key={row.label}>
                        <dt className="text-xs font-semibold text-muted">{row.label}</dt>
                        <dd className="mt-0.5 text-sm font-bold text-ink">{row.values[idx]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-canvas py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
          <Reveal>
            <figure>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white sm:h-12 sm:w-12">
                <QuoteIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <blockquote className="mt-6 text-lg font-bold leading-snug tracking-tight text-ink sm:mt-8 sm:text-2xl md:text-3xl">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-8">
                <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-jade" />
                <span className="font-bold text-ink">{featured.name}</span>
                <span className="text-sm text-muted sm:text-base">
                  {featured.role}, {featured.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.05} className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:mt-16 sm:gap-5 sm:pt-10 lg:flex-row lg:items-center lg:gap-12">
            <p className="shrink-0 text-xs font-semibold text-muted sm:text-sm">Trusted by</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4">
              {clients.map((client) => (
                <li key={client} className="text-base font-extrabold tracking-tight text-ink/50 sm:text-lg">
                  {client}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>
  );
}
