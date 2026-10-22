import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { SystemCard } from '../components/SystemCard';
import { BrowserFrame } from '../components/BrowserFrame';
import { Price } from '../components/Price';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { preBuilds, preBuildGroups } from '../data/preBuilds';
import { usePageTitle } from '../hooks/usePageTitle';

export function PreBuilds() {
  usePageTitle('Ready-Made POS, ERP & Business Management Systems', {
    description:
      'Ten enterprise-grade, ready-to-deploy software packages: Gym POS, Pharmacy POS, Tuition Institute POS, Grocery POS, Supermarket POS, ERP, Hotel Management, Fleet Management, and more.',
    canonicalPath: '/pre-builds',
  });
  const flexcore = preBuilds.find((p) => p.family === 'commerce');

  return (
    <>
      <PageHeader
        label="Pre Builds"
        title="Proven systems, ready to deploy"
        description="Ten ready-made systems we install, configure and support. Every one can also be custom-developed around your business. Request a demo to see any system in action."
        aside={
        <div className="flex items-center gap-3">
            <span className="text-sm text-ink-500">Show prices in</span>
            <CurrencyToggle />
          </div>
        } />
      

      {flexcore &&
      <section className="border-b border-ink-100">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold text-brand-700">E-Commerce template · Available to buy</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">{flexcore.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{flexcore.tagline}</p>
              <ul className="mt-6 space-y-2.5">
                {flexcore.modules.slice(0, 4).map((m) =>
              <li key={m.title} className="flex gap-3 text-ink-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    {m.title}
                  </li>
              )}
              </ul>
              <p className="mt-6 text-sm text-ink-500">
                Starting from <Price lkr={flexcore.priceLKR} endsInNine={flexcore.endsInNine} className="font-display text-lg font-extrabold text-ink-950" />
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                to={`/contact?demo=${flexcore.slug}`}
                className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
                
                  Request for Demo
                </Link>
                <Link
                to={`/pre-builds/${flexcore.slug}`}
                className="rounded-lg px-5 py-3 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition-colors duration-150 hover:bg-ink-50">
                
                  View details
                </Link>
                {flexcore.liveUrl &&
              <a
                href={flexcore.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-brand-700 hover:text-brand-800">
                
                    Live preview <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
              }
              </div>
            </Reveal>
            {flexcore.screenshot &&
          <Reveal x={24} y={0} delay={0.1} className="order-first lg:order-none">
                <BrowserFrame
              src={flexcore.screenshot}
              fallbackSrc={flexcore.screenshotFallback}
              url="flexcore.devrious.lk"
              alt="FlexCore e-commerce template storefront" />
            
              </Reveal>
          }
          </div>
        </section>
      }

      {preBuildGroups.map((group) =>
      <section key={group.family} className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">{group.title}</h2>
            <p className="mt-3 text-lg text-ink-600">{group.description}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {preBuilds.
          filter((p) => p.family === group.family).
          map((p) =>
          <SystemCard key={p.slug} system={p} />
          )}
          </div>
        </section>
      )}

      <CtaBand
        title="Not sure which system fits?"
        description="Tell us how your business runs and we’ll recommend a pre-built system or a custom build — with a live demo." />
      
    </>);

}