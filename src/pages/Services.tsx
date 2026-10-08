import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { ServiceRow } from '../components/ServiceRow';
import { CtaBand } from '../components/CtaBand';
import { services, engagementSteps } from '../data/services';
import { preBuilds } from '../data/preBuilds';
import { usePageTitle } from '../hooks/usePageTitle';

export function Services() {
  usePageTitle('Web, Software, API & AI Development Services', {
    description:
      'Custom web development, software engineering, Django REST APIs, AI assistants, and intelligent automation systems. Designed around your process, tested thoroughly, and hosted on cloud infrastructure.',
    canonicalPath: '/services',
  });
  const customisable = preBuilds.filter((p) => p.family !== 'commerce');

  return (
    <>
      <PageHeader
        label="Services"
        title="Engineering for every stage of your business"
        description="Custom web and software development, APIs and AI — designed around your process, tested thoroughly and hosted on GCP, OCI or AWS."
        aside={
        <div className="flex items-center gap-3">
            <span className="text-sm text-ink-500">Show prices in</span>
            <CurrencyToggle />
          </div>
        } />
      

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {services.map((s, i) =>
        <ServiceRow key={s.id} service={s} isLast={i === services.length - 1} />
        )}
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">Systems available for custom development</h2>
            <p className="mt-4 text-lg text-ink-600">
              Every one of these is also available as a pre-built system. Start from ours and we’ll tailor it — or we’ll build one from scratch around your exact workflow.
            </p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {customisable.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.slug} className="border-b border-ink-200">
                  <Link to={`/pre-builds/${p.slug}`} className="group flex items-center gap-3 py-4">
                    <Icon className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <span className="flex-1 font-medium text-ink-900 group-hover:text-brand-700">{p.name}</span>
                    <ArrowRightIcon className="h-4 w-4 text-ink-300 group-hover:text-brand-600" aria-hidden="true" />
                  </Link>
                </li>);

            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">How a project runs</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {engagementSteps.map((step, i) =>
          <li key={step.title} className="border-t-2 border-ink-950 pt-5">
              <span className="text-sm font-semibold text-brand-700">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
            </li>
          )}
        </ol>

        <div className="band mt-20 flex flex-col gap-6 rounded-2xl bg-ink-950 p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
          <div className="flex gap-4">
            <ShieldCheckIcon className="h-8 w-8 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-bold text-white">Need a security check?</h2>
              <p className="mt-1 text-ink-300">Penetration testing and secure code review, with packages from LKR 45,000.</p>
            </div>
          </div>
          <Link
            to="/cybersecurity-services"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors duration-150 hover:bg-brand-400">
            
            Cybersecurity services <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>);

}