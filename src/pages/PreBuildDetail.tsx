import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRightIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { BrowserFrame } from '../components/BrowserFrame';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { Price } from '../components/Price';
import { SystemCard } from '../components/SystemCard';
import { CtaBand } from '../components/CtaBand';
import { NotFound } from './NotFound';
import { preBuilds } from '../data/preBuilds';
import { usePageTitle } from '../hooks/usePageTitle';

export function PreBuildDetail() {
  const { slug } = useParams();
  const system = preBuilds.find((p) => p.slug === slug);
  usePageTitle(
    system ? `${system.name} — Ready-to-Deploy Business Software` : 'Ready-Made POS, ERP & Business Management Systems',
    system
      ? {
          description: `${system.name}: ${system.tagline} ${system.summary}`,
          canonicalPath: `/pre-builds/${system.slug}`,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: system.name,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All (Web / Cloud / On-Premise)',
            description: `${system.tagline} ${system.summary}`,
            offers: {
              '@type': 'Offer',
              price: system.priceLKR,
              priceCurrency: 'LKR',
            },
            provider: {
              '@type': 'Organization',
              name: 'Devrious',
              url: 'https://www.devrious.lk',
              logo: 'https://www.devrious.lk/logo.png',
            },
          },
        }
      : undefined
  );

  if (!system) return <NotFound />;

  const Icon = system.icon;
  const sameFamily = preBuilds.filter((p) => p.family === system.family && p.slug !== system.slug);
  const related = (sameFamily.length ? sameFamily : preBuilds.filter((p) => p.slug !== system.slug)).slice(0, 3);

  return (
    <>
      <section className="band bg-ink-950">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-400">
            <Link to="/pre-builds" className="hover:text-white">Pre Builds</Link>
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            <span className="text-ink-200" aria-current="page">{system.name}</span>
          </nav>

          <div className={`mt-12 grid gap-12 ${system.screenshot ? 'lg:grid-cols-[1fr_1.1fr] lg:items-center' : 'lg:grid-cols-[1.4fr_1fr]'}`}>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink-300">{system.category}</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{system.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">{system.tagline}</p>

              <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-3">
                <div>
                  <p className="text-sm text-ink-400">Starting from</p>
                  <Price lkr={system.priceLKR} className="font-display text-3xl font-extrabold text-white" />
                </div>
                <CurrencyToggle tone="dark" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={`/contact?demo=${system.slug}`}
                  className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-150 hover:bg-brand-400">
                  
                  Request for Demo
                </Link>
                <Link
                  to={`/contact?topic=custom&system=${system.slug}`}
                  className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                  
                  Ask about a custom build
                </Link>
                {system.liveUrl &&
                <a
                  href={system.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-brand-300 hover:text-brand-200">
                  
                    Live preview <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                }
              </div>
            </div>

            {system.screenshot ?
            <BrowserFrame src={system.screenshot} fallbackSrc={system.screenshotFallback} url={system.liveUrl?.replace('https://', '').replace(/\/$/, '') ?? ''} alt={`${system.name} screenshot`} zoomable /> :

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h2 className="text-sm font-semibold text-white">Ideal for</h2>
                <ul className="mt-4 space-y-3">
                  {system.idealFor.map((item) =>
                <li key={item} className="flex gap-3 text-ink-200">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                      {item}
                    </li>
                )}
                </ul>
              </div>
            }
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">Overview</h2>
          {system.overview.map((p) =>
          <p key={p} className="mt-4 text-lg leading-relaxed text-ink-700">{p}</p>
          )}
          {system.stack &&
          <div className="mt-6 flex flex-wrap gap-2">
              {system.stack.map((t) =>
            <span key={t} className="rounded-md bg-ink-50 px-2.5 py-1 text-sm font-semibold text-ink-800 ring-1 ring-ink-200">{t}</span>
            )}
            </div>
          }
          {system.screenshot &&
          <div className="mt-10">
              <h3 className="font-display text-lg font-bold text-ink-950">Ideal for</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {system.idealFor.map((item) =>
              <li key={item} className="flex gap-2.5 text-ink-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    {item}
                  </li>
              )}
              </ul>
            </div>
          }
        </div>
        <aside className="space-y-8 rounded-2xl bg-ink-50 p-7 lg:self-start">
          <div>
            <h2 className="text-sm font-semibold text-ink-950">What’s included</h2>
            <ul className="mt-3 space-y-2.5 text-ink-700">
              {system.included.map((i) =>
              <li key={i} className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  {i}
                </li>
              )}
            </ul>
          </div>
          <div className="border-t border-ink-200 pt-6">
            <h2 className="text-sm font-semibold text-ink-950">Deployment options</h2>
            <ul className="mt-3 space-y-2 text-ink-700">
              {system.deployment.map((d) =>
              <li key={d}>{d}</li>
              )}
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">Modules & features</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {system.modules.map((m) =>
            <div key={m.title} className="border-t border-ink-200 pt-5">
                <dt className="font-display text-lg font-bold text-ink-950">{m.title}</dt>
                <dd className="mt-2 text-ink-600">{m.description}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">How it works day to day</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {system.workflow.map((step, i) =>
          <li key={step.title} className="border-t-2 border-ink-950 pt-5">
              <span className="text-sm font-semibold text-brand-700">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
            </li>
          )}
        </ol>

        <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-ink-200 p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-bold text-ink-950">See it running with your own data</h2>
            <p className="mt-2 text-ink-600">
              Request a demo and we’ll walk you through {system.name} live — and show how it can be tailored to your business.
            </p>
          </div>
          <Link
            to={`/contact?demo=${system.slug}`}
            className="shrink-0 rounded-lg bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
            
            Request for Demo
          </Link>
        </div>
      </section>

      <section className="border-t border-ink-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">Related systems</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) =>
            <SystemCard key={p.slug} system={p} />
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>);

}