import { LockIcon, TerminalIcon } from 'lucide-react';
import { formatProjectHost } from '../../utils/url';

interface ProjectDevicesProps {
  client: string;
  desktopImage: string;
  desktopVideo?: string;
  mobileImage?: string;
  url?: string;
  badge?: string;
  layout?: 'overlap' | 'split' | 'tile';
}

function DesktopFrame({
  client,
  src,
  videoSrc,
  host,
  badge,
  className = ''
}: {
  client: string;
  src: string;
  videoSrc?: string;
  host?: string;
  badge?: string;
  className?: string;
}) {
  const pillText = host || badge;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/15 bg-ink shadow-[0_24px_50px_-14px_rgba(0,0,0,0.65)] sm:rounded-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#140a0c] px-2.5 py-1.5 sm:px-3.5 sm:py-2">
        <span className="flex shrink-0 gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
        </span>
        {pillText && (
          <span className="mx-auto flex max-w-[75%] items-center gap-1 truncate rounded-full bg-white/[0.07] px-2.5 py-0.5 text-[10px] font-medium text-white/70 sm:text-[11px]">
            {host ? (
              <LockIcon className="h-2.5 w-2.5 shrink-0 text-jade" aria-hidden="true" />
            ) : (
              <TerminalIcon className="h-2.5 w-2.5 shrink-0 text-jade" aria-hidden="true" />
            )}
            <span className="truncate">{pillText}</span>
          </span>
        )}
        <span className="w-6 shrink-0" aria-hidden="true" />
      </div>
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${client} desktop website view`}
          className="block h-auto w-full object-cover object-top"
        />
      ) : (
        <img
          src={src}
          alt={`${client} desktop view`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full object-cover object-top"
        />
      )}
    </div>
  );
}

function MobileFrame({ client, src, className = '' }: { client: string; src: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.2rem] border-[3px] border-ink bg-ink shadow-[0_24px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-white/20 sm:rounded-[1.5rem] sm:border-[4px] ${className}`}>
      <div className="flex justify-center bg-ink py-1" aria-hidden="true">
        <span className="h-1 w-7 rounded-full bg-white/20 sm:w-9" />
      </div>
      <img src={src} alt={`${client} mobile website view`} loading="lazy" decoding="async" className="block h-auto w-full object-cover object-top" />
    </div>
  );
}

export function ProjectDevices({
  client,
  desktopImage,
  desktopVideo,
  mobileImage,
  url,
  badge,
  layout = 'overlap'
}: ProjectDevicesProps) {
  const host = url ? formatProjectHost(url) : undefined;

  if (layout === 'split') {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-wine-deep p-4 shadow-lift sm:rounded-[2rem] sm:p-7 md:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,18,42,0.28),transparent_60%)]"
        />
        {mobileImage ? (
          <div className="relative grid items-center gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8 lg:col-span-9">
              <DesktopFrame client={client} src={desktopImage} videoSrc={desktopVideo} host={host} badge={badge} />
            </div>
            <div className="mx-auto w-[210px] xs:w-[240px] md:col-span-4 md:w-full md:max-w-[250px] lg:col-span-3">
              <MobileFrame client={client} src={mobileImage} />
            </div>
          </div>
        ) : (
          <div className="relative mx-auto max-w-5xl">
            <DesktopFrame client={client} src={desktopImage} videoSrc={desktopVideo} host={host} badge={badge} />
          </div>
        )}
      </div>
    );
  }

  if (layout === 'tile') {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-wine-deep px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,18,42,0.3),transparent_65%)]"
        />
        <div className="relative w-full transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:pb-6">
          <DesktopFrame
            client={client}
            src={desktopImage}
            videoSrc={desktopVideo}
            host={host}
            badge={badge}
            className={mobileImage ? 'w-[90%] sm:w-[84%]' : 'w-full'}
          />
          {mobileImage && (
            <MobileFrame
              client={client}
              src={mobileImage}
              className="relative z-10 ml-auto -mt-8 w-[108px] xs:w-[122px] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[22.5%] sm:max-w-[160px]"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-wine-deep p-4 pt-14 sm:p-6 sm:pt-16 lg:p-8 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,18,42,0.28),transparent_65%)]"
      />
      <div className={`relative transition-transform duration-300 ease-out group-hover:scale-[1.02] ${mobileImage ? 'sm:pb-8' : ''}`}>
        <DesktopFrame
          client={client}
          src={desktopImage}
          videoSrc={desktopVideo}
          host={host}
          badge={badge}
          className={mobileImage ? 'w-[92%] sm:w-[84%]' : 'w-full'}
        />
        {mobileImage && (
          <MobileFrame
            client={client}
            src={mobileImage}
            className="relative z-10 ml-auto -mt-8 w-[124px] xs:w-[140px] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[24%] sm:max-w-[170px]"
          />
        )}
      </div>
    </div>
  );
}
