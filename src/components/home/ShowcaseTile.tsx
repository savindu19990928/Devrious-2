import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon, LockIcon } from 'lucide-react';
import { ProjectDevices } from '../portfolio/ProjectDevices';
import { formatProjectHost } from '../../utils/url';

interface ShowcaseTileProps {
  to: string;
  image: string;
  title: string;
  meta: string;
  desktopImage?: string;
  desktopVideo?: string;
  mobileImage?: string;
  externalUrl?: string;
  confidentialUi?: boolean;
  className?: string;
}

export function ShowcaseTile({
  to,
  image,
  title,
  meta,
  desktopImage,
  desktopVideo,
  mobileImage,
  externalUrl,
  confidentialUi = false,
  className = ''
}: ShowcaseTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const hasDevices = Boolean(desktopImage);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-[20px] bg-wine-deep sm:rounded-[22px] ${hasDevices ? 'flex flex-col justify-between' : ''} ${className}`}>
      {hasDevices && desktopImage ? (
        <ProjectDevices
          client={title}
          desktopImage={desktopImage}
          desktopVideo={desktopVideo}
          mobileImage={mobileImage}
          url={externalUrl}
          badge={meta}
          layout="tile"
        />
      ) : (
        <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-[8%] inset-x-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
      )}

      <Link
        to={to}
        aria-label={`${title} — ${meta}`}
        className="absolute inset-0 z-10 rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:rounded-[22px]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-[opacity,transform] duration-200 ease-out group-hover:rotate-45 sm:right-5 sm:top-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <ArrowUpRightIcon className="h-4 w-4" />
      </span>

      <div
        className={`pointer-events-none z-20 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-black/55 px-4 py-3 backdrop-blur-md sm:px-5 sm:py-3.5 ${
          hasDevices ? 'relative mx-3 mb-3 sm:mx-4 sm:mb-4' : 'absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4'
        }`}>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="block font-display text-base font-bold text-white sm:text-lg md:text-xl">{title}</span>
            {confidentialUi && (
              <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                <LockIcon className="h-2.5 w-2.5 shrink-0 text-[#ff5c78]" aria-hidden="true" />
                <span>Confidential — Visual Preview, Not the Actual UI</span>
              </span>
            )}
          </div>
          <span className="mt-0.5 block text-xs text-white/75 sm:text-sm">{meta}</span>
        </div>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} website (${formatProjectHost(externalUrl)})`}
            className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade">
            <span>{formatProjectHost(externalUrl)}</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
