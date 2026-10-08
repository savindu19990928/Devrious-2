import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { BrowserFrame } from '../BrowserFrame';
import { WordReveal } from '../WordReveal';
import { projects } from '../../data/projects';
import { easeOut } from '../../utils/motion';

const facts = [
{ value: '2024', label: 'Founded in Colombo' },
{ value: '10', label: 'Ready-to-deploy systems' },
{ value: 'LK & UK', label: 'Clients served' }];


const dots = ['bg-brand-500', 'bg-sun-500', 'bg-coral-500'];

export function HomeHero() {
  const reduce = useReducedMotion();
  const avenor = projects.find((p) => p.id === 'avenor-apparel');
  const zevora = projects.find((p) => p.id === 'zevora-custom');

  const fade = (delay: number, y = 12) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: easeOut, delay }
  });

  return (
    <section className="overflow-hidden border-b border-ink-100 bg-canvas">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <motion.p {...fade(0, 8)} className="inline-flex items-center gap-2 text-sm font-medium text-ink-600">
            <span className="flex gap-1" aria-hidden="true">
              {dots.map((c, i) =>
              <motion.span
                key={c}
                className={`h-2 w-2 rounded-sm ${c}`}
                initial={reduce ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut, delay: 0.05 + i * 0.05 }} />

              )}
            </span>
            Software company · Colombo, Sri Lanka
          </motion.p>
          <h1 className="mt-6 font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            <WordReveal text="Software that runs your business," accent="built properly." accentClassName="text-brand-600" delay={0.1} />
          </h1>
          <motion.p {...fade(0.36)} className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Devrious designs, builds and secures custom websites, business software and AI tools — and offers ready-made POS, ERP and management
            systems you can deploy in weeks, not months.
          </motion.p>
          <motion.div {...fade(0.44)} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
              
              Start a project <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              to="/pre-builds"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition-colors duration-150 hover:bg-ink-50">
              
              Explore Pre Builds
            </Link>
          </motion.div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-ink-100 border-t border-ink-100 pt-6 sm:mt-12">
            {facts.map((f, i) =>
            <motion.div key={f.label} {...fade(0.52 + i * 0.05, 8)} className="flex flex-col-reverse px-3 first:pl-0 sm:px-4">
                <dt className="mt-1 text-xs leading-snug text-ink-500">{f.label}</dt>
                <dd className="font-display text-lg font-extrabold text-ink-950 sm:text-xl">{f.value}</dd>
              </motion.div>
            )}
          </dl>
        </div>

        <div className="relative pb-10 pt-4 sm:pb-14 sm:pl-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.15 }}>
            
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              
              {avenor?.screenshot && <BrowserFrame src={avenor.screenshot} url="avenorapparel.lk" alt="Avenor Apparel website built by Devrious" />}
            </motion.div>
          </motion.div>

          {zevora?.screenshot &&
          <motion.div
            className="absolute -bottom-2 left-0 hidden w-[58%] sm:block"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.3 }}>
            
              <motion.div
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
              
                <BrowserFrame src={zevora.screenshot} url="zevoracustom.lk" alt="Zevora Custom website built by Devrious" />
              </motion.div>
            </motion.div>
          }

          <motion.div
            className="absolute right-3 top-0 flex items-center gap-2 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-lg shadow-black/40 ring-1 ring-ink-200 sm:-right-2"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: easeOut, delay: 0.5 }}>
            
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Live in production
          </motion.div>
        </div>
      </div>
    </section>);

}