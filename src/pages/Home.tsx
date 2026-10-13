import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon, ChevronRightIcon } from 'lucide-react';
import { HomeHero } from '../components/home/HomeHero';
import { TestimonialSpotlight } from '../components/home/TestimonialSpotlight';
import { Price } from '../components/Price';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { TechStackTable } from '../components/TechStackTable';
import { CtaBand } from '../components/CtaBand';
import { clientNames } from '../data/site';
import { services } from '../data/services';
import { preBuilds } from '../data/preBuilds';
import { projects } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';

export function Home() {
  usePageTitle('Custom Software, Web & AI Development in Sri Lanka', {
    description:
      'Devrious is a premier software engineering studio in Sri Lanka. We build high-performance web applications, custom business software, Django DRF platforms, AI assistants, and enterprise POS & ERP systems.',
    canonicalPath: '/',
  });
  const featuredWork = projects.filter((p) => p.id === 'zevora-custom' || p.id === 'avenor-apparel');

  return (
    <>
      <HomeHero />

      <section aria-label="Clients" className="border-b border-ink-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:gap-10 lg:px-8">
          <p className="shrink-0 text-sm text-ink-500">Trusted by</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {clientNames.map((name) =>
              <li key={name} className="font-display text-lg font-bold tracking-tight text-ink-400">
                {name}
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">What we build</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            One team for the whole job — design, engineering, testing, hosting and search visibility — on a stack we know inside out.
          </p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
            All services <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <ul className="divide-y divide-ink-100 border-y border-ink-100">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="group flex items-start gap-5 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-bold text-ink-950 group-hover:text-brand-700">{s.name}</span>
                    <span className="mt-1 block text-ink-600">{s.summary}</span>
                  </span>
                  <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition-colors duration-150 group-hover:text-brand-600" aria-hidden="true" />
                </Link>
              </li>);

          })}
        </ul>
      </section>

      <section className="band bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                Ready-made systems, tailored to you
              </h2>
              <p className="mt-3 text-base text-ink-300 sm:mt-4 sm:text-lg leading-relaxed">
                Proven POS, ERP and management systems you can deploy quickly — or use as the starting point for a custom build.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-medium text-ink-400 sm:hidden">Currency:</span>
              <CurrencyToggle tone="dark" />
            </div>
          </div>
          <ul className="mt-8 grid gap-x-8 border-t border-white/10 sm:mt-12 lg:gap-x-12 md:grid-cols-2">
            {preBuilds.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.slug} className="border-b border-white/10">
                  <Link
                    to={`/pre-builds/${p.slug}`}
                    className="group -mx-2 flex items-center gap-3.5 rounded-xl px-2 py-3.5 transition-colors duration-150 hover:bg-white/[0.04] active:bg-white/[0.08] sm:mx-0 sm:gap-4 sm:rounded-none sm:px-0 sm:py-5 sm:hover:bg-transparent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 text-brand-400 transition-colors duration-150 group-hover:bg-brand-500/15 group-hover:ring-brand-400/30 group-hover:text-brand-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-semibold text-white transition-colors duration-150 group-hover:text-brand-300 text-sm sm:text-base leading-snug">
                          {p.name}
                        </span>
                        <span className="hidden sm:inline-flex shrink-0 items-baseline gap-1 text-right text-sm text-ink-400">
                          from <Price lkr={p.priceLKR} className="font-semibold text-white" />
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-ink-400">
                        <span>{p.category}</span>
                        <span className="text-white/20 sm:hidden">·</span>
                        <span className="sm:hidden text-ink-300">
                          from <Price lkr={p.priceLKR} className="font-semibold text-white" />
                        </span>
                      </div>
                    </div>
                    <ChevronRightIcon
                      className="h-4 w-4 shrink-0 text-ink-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-brand-300 sm:hidden"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 sm:mt-10">
            <Link
              to="/pre-builds"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-ink-950 transition-colors duration-150 hover:bg-brand-400 active:scale-[0.99]"
            >
              Browse all Pre Builds <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">Selected work</h2>
            <p className="mt-4 text-lg text-ink-600">Two brands, one client, opposite briefs — and both delivered.</p>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
            View full portfolio <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {featuredWork.map((p) => {
            if (!p.screenshot) return null;
            const webpSrc = p.screenshot.replace(/\.(png|jpe?g)$/i, '.webp');
            const width = p.id === 'zevora-custom' ? 1918 : 1897;
            const height = p.id === 'zevora-custom' ? 863 : 865;
            return (
              <article key={p.id} className="flex flex-col">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-ink-200 bg-ink-50 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-1 hover:border-brand-500"
                >
                  <picture className="block w-full">
                    {webpSrc !== p.screenshot && <source srcSet={webpSrc} type="image/webp" />}
                    <img
                      src={p.screenshot}
                      alt={`${p.name} website built by Devrious`}
                      width={width}
                      height={height}
                      style={{ aspectRatio: `${width} / ${height}` }}
                      className="block h-auto w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </a>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-ink-950">{p.name}</h3>
                  <span className="text-sm text-ink-500">{p.type}</span>
                </div>
                <p className="mt-2 text-ink-600">
                  <span className="font-semibold text-ink-900">The challenge: </span>
                  {p.challenges[0]}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <TestimonialSpotlight />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">One stack, used on every project</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            We standardise on proven tools so every system we ship is consistent, testable and easy to maintain long after launch.
          </p>
        </div>
        <TechStackTable />
      </section>

      <CtaBand />
    </>);

}