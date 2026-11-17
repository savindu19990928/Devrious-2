import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { PolicyContent } from '../components/legal/PolicyContent';
import { PolicySidebar } from '../components/legal/PolicySidebar';
import { NotFound } from './NotFound';
import { policies } from '../data/legal/policies';
import { contact } from '../data/devrious';
import { usePageMeta } from '../hooks/usePageMeta';
import { useActiveHeading } from '../hooks/useActiveHeading';
import { getHeadings, parsePolicy } from '../utils/policyMarkdown';

export function Policy() {
  const { slug } = useParams();
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) return <NotFound />;
  return <PolicyView key={policy.slug} slug={policy.slug} />;
}

function PolicyView({ slug }: { slug: string }) {
  const policy = policies.find((p) => p.slug === slug)!;
  const blocks = useMemo(() => parsePolicy(policy.body), [policy.body]);
  const headings = useMemo(() => getHeadings(blocks), [blocks]);
  const ids = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useActiveHeading(ids);

  usePageMeta(policy.title, policy.summary);

  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title={policy.title} description={policy.summary}>
        <p className="text-xs text-muted sm:text-sm">
          Last updated <time className="font-semibold text-ink">{policy.lastUpdated}</time>
        </p>
      </PageHero>

      <div className="border-b border-line lg:hidden">
        <nav aria-label="Policies" className="mx-auto max-w-[1320px] overflow-x-auto px-4 sm:px-6 md:px-10">
          <ul className="flex gap-2 pb-5">
            {policies.map((p) => {
              const current = p.slug === policy.slug;
              return (
                <li key={p.slug} className="shrink-0">
                  <Link
                    to={`/legal/${p.slug}`}
                    aria-current={current ? 'page' : undefined}
                    className={`block whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-150 sm:px-4 sm:text-sm ${
                      current ? 'bg-ink text-white' : 'bg-white text-ink/70 hover:text-ink'
                    }`}>
                    {p.navLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <section className="bg-canvas pb-16 pt-8 sm:pb-24 sm:pt-12 md:pb-32 lg:pt-4">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:gap-12 sm:px-6 md:px-10 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <PolicySidebar policies={policies} currentSlug={policy.slug} headings={headings} activeId={activeId} />
          </aside>

          <article className="min-w-0 lg:col-span-8 lg:col-start-5">
            <PolicyContent blocks={blocks} />

            <div className="mt-12 max-w-[720px] rounded-[20px] bg-ink p-6 text-white sm:mt-16 sm:rounded-frame sm:p-8 md:p-10">
              <h2 className="text-lg font-bold sm:text-xl">Questions about this policy?</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-white/60 sm:mt-3 sm:text-[15px]">
                Our team is happy to clarify anything before you buy or start a project.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={contact.emailHref}
                  className="break-all font-display text-base font-bold text-white transition-colors duration-150 hover:text-jade sm:break-normal sm:text-lg">
                  {contact.email}
                </a>
                <a href={contact.phoneHref} className="text-sm text-white/60 transition-colors duration-150 hover:text-white sm:text-[15px]">
                  {contact.phone}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </PageTransition>
  );
}
