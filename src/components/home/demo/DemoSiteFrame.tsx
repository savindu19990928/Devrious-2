import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { DemoDeviceMode, DemoSitePreview } from '../../../types/content';
import { easeOut } from '../../../utils/accent';

interface DemoSiteFrameProps {
  sites: DemoSitePreview[];
  activeSlug: string;
  onSelectSlug: (slug: string) => void;
  device: DemoDeviceMode;
}

export function DemoSiteFrame({ sites, activeSlug, onSelectSlug, device }: DemoSiteFrameProps) {
  const reduce = useReducedMotion();
  const site = sites.find((s) => s.slug === activeSlug) ?? sites[0];

  return (
    <div className="flex h-full min-w-0 flex-col bg-[#140a0c] text-white">
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-5 sm:px-6 sm:py-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,18,42,0.28),transparent_65%)]"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${site.slug}-${device}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="relative w-full">
            {device === 'desktop' && (
              <div className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-ink shadow-[0_24px_50px_-14px_rgba(0,0,0,0.65)]">
                <img
                  src={site.desktopImage}
                  alt={`${site.name} desktop website`}
                  decoding="async"
                  className="block h-auto w-full object-cover object-top"
                />
              </div>
            )}
            {device === 'tablet' && (
              <div className="relative mx-auto w-[80%] max-w-[460px] overflow-hidden rounded-2xl border-[4px] border-ink bg-ink shadow-[0_24px_50px_-14px_rgba(0,0,0,0.7)] ring-1 ring-white/20">
                <img
                  src={site.desktopImage}
                  alt={`${site.name} tablet website preview`}
                  decoding="async"
                  className="block h-auto w-full object-cover object-top"
                />
              </div>
            )}
            {device === 'mobile' && (
              <div className="relative mx-auto w-[210px] max-w-full overflow-hidden rounded-[1.5rem] border-[4px] border-ink bg-ink shadow-[0_24px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-white/20 xs:w-[225px] md:w-[200px]">
                <div className="flex justify-center bg-ink py-1.5" aria-hidden="true">
                  <span className="h-1 w-9 rounded-full bg-white/20" />
                </div>
                <img
                  src={site.mobileImage}
                  alt={`${site.name} mobile website`}
                  decoding="async"
                  className="block h-auto w-full object-cover object-top"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#1a0c0f] px-3.5 py-3 sm:px-5">
        <div role="radiogroup" aria-label="Select website" className="flex min-w-0 flex-wrap items-center gap-1.5">
          {sites.map((item) => {
            const selected = item.slug === site.slug;
            return (
              <button
                key={item.slug}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onSelectSlug(item.slug)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  selected
                    ? 'bg-white text-ink'
                    : 'border border-white/15 bg-white/5 text-white/75 hover:border-white/30 hover:text-white'
                }`}>
                {item.name}
              </button>
            );
          })}
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/85 transition-colors duration-150 hover:border-white hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <span>Visit live</span>
          <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
