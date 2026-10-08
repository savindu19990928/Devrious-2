import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { BugIcon, CheckIcon, FileSearchIcon, ShieldCheckIcon } from 'lucide-react';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { Price } from '../components/Price';
import { CtaBand } from '../components/CtaBand';
import { WordReveal } from '../components/WordReveal';
import { cyberPackages, cyberProcess, cyberCoverage } from '../data/cyberPackages';
import { usePageTitle } from '../hooks/usePageTitle';

const ease = [0.23, 1, 0.32, 1] as const;

const heroPoints = [
{ icon: BugIcon, text: 'Penetration testing for web apps and APIs' },
{ icon: FileSearchIcon, text: 'Manual and automated secure code review' },
{ icon: ShieldCheckIcon, text: 'Clear reports, remediation help and retesting' }];


export function Cybersecurity() {
  usePageTitle('Penetration Testing & Secure Code Review Services', {
    description:
      'Penetration testing, API security assessments, secure code reviews, and cloud security audits. Find vulnerabilities before attackers do with clear remediation guidance.',
    canonicalPath: '/cybersecurity-services',
  });
  const reduce = useReducedMotion();

  return (
    <>
      <section className="band bg-ink-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12 lg:px-8 lg:py-24">
          <div>
            <motion.p
              className="text-sm font-semibold text-brand-400"
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease }}>
              
              Cybersecurity services
            </motion.p>
            <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              <WordReveal text="Find the weaknesses before attackers do" delay={0.1} />
            </h1>
            <motion.p
              className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: 0.35 }}>
              
              Penetration testing and secure code review for websites, APIs and business systems — delivered by engineers who build production software every day.
            </motion.p>
          </div>
          <ul className="space-y-4 text-ink-200">
            {heroPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.li
                  key={point.text}
                  className="flex gap-3"
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease, delay: 0.4 + i * 0.06 }}>
                  
                  <Icon className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" /> {point.text}
                </motion.li>);

            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">Packages</h2>
            <p className="mt-3 text-lg text-ink-600">
              All cybersecurity work is custom-priced. These packages are starting points — your final quote is confirmed after a free scoping call.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-ink-500">Show prices in</span>
            <CurrencyToggle />
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}>
          
          {cyberPackages.map((pkg) =>
          <article
            key={pkg.id}
            className={`relative flex flex-col rounded-2xl p-7 ${pkg.featured ? 'band bg-ink-950 text-white ring-1 ring-brand-500/40' : 'border border-ink-200 bg-ink-50'}`}>
            
              {pkg.featured &&
            <span className="absolute right-5 top-5 rounded-md bg-brand-500 px-2 py-0.5 text-xs font-semibold text-ink-950">Most requested</span>
            }
              <h3 className={`pr-24 font-display text-lg font-bold ${pkg.featured ? 'text-white' : 'text-ink-950'}`}>{pkg.name}</h3>
              <p className={`mt-2 min-h-[72px] text-sm leading-relaxed ${pkg.featured ? 'text-ink-300' : 'text-ink-600'}`}>{pkg.description}</p>
              <div className="mt-5">
                <p className={`text-sm ${pkg.featured ? 'text-ink-400' : 'text-ink-500'}`}>Starting from</p>
                <Price lkr={pkg.priceLKR} className={`font-display text-3xl font-extrabold ${pkg.featured ? 'text-white' : 'text-ink-950'}`} />
              </div>
              <ul className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${pkg.featured ? 'border-white/10 text-ink-200' : 'border-ink-100 text-ink-700'}`}>
                {pkg.includes.map((item) =>
              <li key={item} className="flex gap-2.5">
                    <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? 'text-brand-400' : 'text-brand-600'}`} aria-hidden="true" />
                    {item}
                  </li>
              )}
              </ul>
              <div className="mt-auto pt-7">
                <Link
                to={`/contact?topic=cyber&package=${pkg.id}`}
                className={`block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-150 ${
                pkg.featured ? 'bg-brand-500 text-ink-950 hover:bg-brand-400' : 'bg-ink-950 text-canvas hover:bg-ink-800'}`
                }>
                
                  Request a custom quote
                </Link>
              </div>
            </article>
          )}
        </motion.div>
        <p className="mt-6 text-sm text-ink-500">
          Prices are indicative starting points. Scope, number of targets and urgency affect the final quote.
        </p>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">What we test for</h2>
            <p className="mt-3 text-lg text-ink-600">Testing is aligned with OWASP guidance and focused on the risks that matter to your business.</p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {cyberCoverage.map((c) =>
            <li key={c} className="flex gap-3 border-b border-ink-200 py-4 text-ink-800">
                <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                {c}
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">How an engagement works</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {cyberProcess.map((step, i) =>
          <li key={step.title} className="border-t-2 border-ink-950 pt-5">
              <span className="text-sm font-semibold text-brand-700">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
            </li>
          )}
        </ol>
      </section>

      <CtaBand
        title="Get a custom security quote"
        description="Share what you’d like tested. We’ll schedule a short scoping call and send a fixed quote." />
      
    </>);

}