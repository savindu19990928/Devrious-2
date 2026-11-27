import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LockIcon, MonitorIcon, SmartphoneIcon, TabletIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { DemoWebsite } from './demo/DemoWebsite';
import { DemoStore } from './demo/DemoStore';
import { DemoDashboard } from './demo/DemoDashboard';
import { demoBrandSites, demoStoreSites, demoTabs } from '../../data/demo';
import type { DemoDeviceMode, DemoTabId } from '../../types/content';
import { easeOut } from '../../utils/accent';

function getResponsiveDevice(): DemoDeviceMode {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(max-width: 639px)').matches) return 'mobile';
  if (window.matchMedia('(max-width: 1023px)').matches) return 'tablet';
  return 'desktop';
}

export function LiveDemo() {
  const [active, setActive] = useState<DemoTabId>('website');
  const [brandSlug, setBrandSlug] = useState<string>(demoBrandSites[0].slug);
  const [storeSlug, setStoreSlug] = useState<string>(demoStoreSites[0].slug);
  const [device, setDevice] = useState<DemoDeviceMode>(getResponsiveDevice);

  useEffect(() => {
    const mobileMq = window.matchMedia('(max-width: 639px)');
    const tabletMq = window.matchMedia('(max-width: 1023px)');
    const sync = () => setDevice(getResponsiveDevice());
    sync();
    mobileMq.addEventListener('change', sync);
    tabletMq.addEventListener('change', sync);
    return () => {
      mobileMq.removeEventListener('change', sync);
      tabletMq.removeEventListener('change', sync);
    };
  }, []);

  const tab = demoTabs.find((t) => t.id === active) ?? demoTabs[0];
  const displayUrl =
    active === 'website'
      ? (demoBrandSites.find((s) => s.slug === brandSlug) ?? demoBrandSites[0]).host
      : active === 'store'
        ? (demoStoreSites.find((s) => s.slug === storeSlug) ?? demoStoreSites[0]).host
        : tab.url;

  return (
    <section aria-labelledby="demo-title" className="bg-canvas px-2 pb-16 sm:px-3 sm:pb-24 md:px-4 md:pb-36">
      <div className="overflow-hidden rounded-[20px] bg-wine py-14 text-white sm:rounded-[22px] sm:py-20 md:rounded-frame md:py-28">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="demo-title"
            label="Live demo"
            title="Try the kind of thing we build."
            description="Three real previews — a brand site, an online store and a production system. Click around."
            inverted
          />

          <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-12">
            <div role="tablist" aria-label="Demo type" className="grid min-w-0 gap-2 sm:grid-cols-3 lg:col-span-4 lg:flex lg:flex-col">
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
                    className={`min-w-0 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:py-4 ${
                      selected ? 'border-white/30 bg-white/10' : 'border-transparent hover:bg-white/5'
                    }`}>
                    <span className={`block font-display text-base font-bold sm:text-lg ${selected ? 'text-white' : 'text-white/60'}`}>
                      {t.title}
                    </span>
                    <span className="mt-1 block text-xs text-white/55 sm:text-sm">{t.description}</span>
                  </button>
                );
              })}
            </div>

            <div className="min-w-0 lg:col-span-8">
              <div className="overflow-hidden rounded-[20px] bg-white text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between gap-2 border-b border-line bg-white px-3.5 py-2.5 sm:gap-4 sm:px-4 sm:py-3">
                  <span className="flex shrink-0 gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </span>
                  <span className="mx-auto flex min-w-0 items-center gap-1.5 rounded-full bg-canvas px-3 py-1 text-xs text-muted sm:px-4">
                    <LockIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                    <span className="truncate">{displayUrl}</span>
                  </span>
                  {active !== 'system' ? (
                    <div
                      role="group"
                      aria-label="Preview size"
                      className="hidden shrink-0 items-center gap-0.5 rounded-full bg-canvas p-0.5 sm:inline-flex">
                      {(
                        [
                          { id: 'desktop', label: 'Desktop preview', Icon: MonitorIcon },
                          { id: 'tablet', label: 'Tablet preview', Icon: TabletIcon },
                          { id: 'mobile', label: 'Mobile preview', Icon: SmartphoneIcon }
                        ] as const
                      ).map(({ id, label, Icon }) => {
                        const selected = device === id;
                        return (
                          <button
                            key={id}
                            type="button"
                            aria-label={label}
                            aria-pressed={selected}
                            onClick={() => setDevice(id)}
                            className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                              selected ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                            }`}>
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="hidden w-[42px] sm:block" aria-hidden="true" />
                  )}
                </div>
                <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${active}`} className="relative md:h-[500px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="relative h-full md:absolute md:inset-0">
                      {active === 'website' && <DemoWebsite activeSlug={brandSlug} onSelectSlug={setBrandSlug} device={device} />}
                      {active === 'store' && <DemoStore activeSlug={storeSlug} onSelectSlug={setStoreSlug} device={device} />}
                      {active === 'system' && <DemoDashboard />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
