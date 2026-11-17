import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LockIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { DemoWebsite } from './demo/DemoWebsite';
import { DemoStore } from './demo/DemoStore';
import { DemoDashboard } from './demo/DemoDashboard';
import { demoTabs } from '../../data/demo';
import type { DemoTabId } from '../../types/content';
import { easeOut } from '../../utils/accent';

export function LiveDemo() {
  const [active, setActive] = useState<DemoTabId>('website');
  const tab = demoTabs.find((t) => t.id === active) ?? demoTabs[0];

  return (
    <section aria-labelledby="demo-title" className="bg-canvas px-2 pb-24 sm:px-3 md:px-4 md:pb-36">
      <div className="rounded-[22px] bg-wine py-20 text-white md:rounded-frame md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            id="demo-title"
            label="Live demo"
            title="Try the kind of thing we build."
            description="Three working previews — a brand site, a store and a production system. Click around."
            inverted />
          

          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div role="tablist" aria-label="Demo type" className="flex flex-col gap-2 lg:col-span-4">
              {demoTabs.map((t) => {
                const selected = t.id === active;
                return (
                  <button
                    key={t.id}
                    id={`demo-tab-${t.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="demo-panel"
                    onClick={() => setActive(t.id)}
                    className={`rounded-2xl border px-5 py-4 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    selected ? 'border-white/30 bg-white/10' : 'border-transparent hover:bg-white/5'}`
                    }>
                    
                    <span className={`block font-display text-lg font-bold ${selected ? 'text-white' : 'text-white/60'}`}>{t.title}</span>
                    <span className="mt-1 block text-sm text-white/55">{t.description}</span>
                  </button>);

              })}
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-[20px] bg-white text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-4 border-b border-line bg-white px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </span>
                  <span className="mx-auto flex items-center gap-1.5 rounded-full bg-canvas px-4 py-1 text-xs text-muted">
                    <LockIcon className="h-3 w-3" aria-hidden="true" />
                    {tab.url}
                  </span>
                  <span className="w-[42px]" aria-hidden="true" />
                </div>
                <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${active}`} className="relative h-[520px] md:h-[460px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="absolute inset-0">
                      
                      {active === 'website' && <DemoWebsite />}
                      {active === 'store' && <DemoStore />}
                      {active === 'system' && <DemoDashboard />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}