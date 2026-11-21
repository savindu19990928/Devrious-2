import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, QuoteIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { formatProjectHost } from '../utils/url';
import { CtaBanner } from '../components/sections/CtaBanner';
import { projects } from '../data/projects';
import { clients, testimonials } from '../data/devrious';
import { usePageMeta } from '../hooks/usePageMeta';

type FilterGroup = 'All' | 'Web & E-Commerce' | 'Enterprise & Management' | 'API & IoT Platforms';

const filterGroups: FilterGroup[] = ['All', 'Web & E-Commerce', 'Enterprise & Management', 'API & IoT Platforms'];

function matchesGroup(slug: string, group: FilterGroup): boolean {
  if (group === 'All') return true;
  if (group === 'Web & E-Commerce') {
    return ['avenor-apparel', 'zevora-custom', 'universal-tool-depot', 'arrow-ventures'].includes(slug);
  }
  if (group === 'Enterprise & Management') {
    return ['sunrise-residencies-ams', 'avenor-apparel-production-system', 'universal-tool-depot'].includes(slug);
  }
  return ['smart-metro-tech', 'smart-part-and-fly'].includes(slug);
}

export function Portfolio() {
  usePageMeta(
    'Portfolio',
    'Selected work by Devrious — Avenor Apparel, Zevora Custom, Universal Tool Depot, Arrow Ventures, Sunrise Residencies AMS, Smart Metro Tech and Smart Part and Fly.'
  );
  const [activeGroup, setActiveGroup] = useState<FilterGroup>('All');
  const filteredProjects = useMemo(
    () => projects.filter((p) => matchesGroup(p.slug, activeGroup)),
    [activeGroup]
  );

  return (
    <PageTransition>
      <PageHero
        immersive
        eyebrow={`Portfolio · ${projects.length} delivered systems & platforms`}
        bannerImage="/banners/portfolio-banner.jpg"
        titleLines={[
          'Digital craft &',
          'systems built to',
          <span className="text-[#ff5c78]">make an impact.</span>
        ]}
        description="From e-commerce storefronts and equipment rental platforms to factory floor production systems, accommodation management and REST API infrastructure."
        tagline="Websites · E-Commerce · Enterprise Systems · APIs"
      />

      <section aria-label="Projects" className="bg-canvas pb-16 pt-6 sm:pb-20 sm:pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3 sm:mb-14">
            <div role="tablist" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
              {filterGroups.map((group) => {
                const active = activeGroup === group;
                return (
                  <button
                    key={group}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveGroup(group)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-sm ${
                      active
                        ? 'bg-ink text-white shadow-soft'
                        : 'border border-line bg-white text-ink/75 hover:border-ink/30 hover:text-ink'
                    }`}>
                    {group}
                  </button>
                );
              })}
            </div>
            <p className="text-xs font-semibold text-muted sm:text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
            {filteredProjects.map((project, i) => (
              <div
                key={project.slug}
                className={`grid gap-10 lg:grid-cols-12 ${i % 2 === 1 ? 'lg:[&>*:first-child]:col-start-4' : ''}`}>
                <div className="lg:col-span-9">
                  <ProjectCard project={project} index={0} large />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="directory-heading" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="directory-heading"
            label="Project index"
            title="Every engagement at a glance."
            description="Websites, e-commerce platforms, enterprise operations software and backend APIs delivered by Devrious."
          />
          <div className="mt-10 sm:mt-12">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink">
                    <th scope="col" className="py-4 pr-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      Project
                    </th>
                    <th scope="col" className="py-4 pr-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      Portfolio category
                    </th>
                    <th scope="col" className="py-4 pr-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      Industry
                    </th>
                    <th scope="col" className="py-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      Access / Case study
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.slug} className="border-b border-line transition-colors hover:bg-canvas/60">
                      <th scope="row" className="py-4 pr-4 text-base font-extrabold text-ink">
                        <Link to={`/portfolio/${p.slug}`} className="hover:text-brand">
                          {p.subtitle ?? p.title}
                        </Link>
                      </th>
                      <td className="py-4 pr-4 text-sm font-bold text-ink/80">{p.category}</td>
                      <td className="py-4 pr-4 text-sm text-muted">{p.industry ?? p.type}</td>
                      <td className="py-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            to={`/portfolio/${p.slug}`}
                            className="text-xs font-bold text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                            Case study
                          </Link>
                          {p.url && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-ink">
                              <span>{formatProjectHost(p.url)}</span>
                              <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 md:hidden">
              {projects.map((p) => (
                <div key={p.slug} className="rounded-3xl border border-line bg-canvas p-5">
                  <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2.5 text-base font-extrabold tracking-tight text-ink">
                    <Link to={`/portfolio/${p.slug}`} className="hover:text-brand">
                      {p.subtitle ?? p.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-muted">{p.industry ?? p.type}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
                    <Link to={`/portfolio/${p.slug}`} className="text-xs font-bold text-ink hover:text-brand">
                      Read case study →
                    </Link>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline">
                        <span>{formatProjectHost(p.url)}</span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Client testimonials" className="bg-canvas py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="portfolio-testimonials-heading"
            label="Client voices"
            title="Trusted by the leaders who run these systems."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                      <QuoteIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <blockquote className="mt-5 text-sm font-semibold leading-relaxed text-ink sm:text-base">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <span className="block font-bold text-ink">{t.name}</span>
                    <span className="text-xs text-muted sm:text-sm">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

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
