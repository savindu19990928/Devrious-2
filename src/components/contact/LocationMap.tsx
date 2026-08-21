import React, { useState } from 'react';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { STUDIO } from '../../data/site';

type LocationMapProps = {
  className?: string;
  /** Aspect of the map frame. Defaults to a compact sidebar ratio. */
  ratio?: string;
};

/**
 * The studio on Google Maps. The embed is framed and given a real caption so
 * it reads as part of the page rather than a pasted widget, and it holds its
 * own space with a placeholder until the tiles arrive.
 */
export function LocationMap({
  className = '',
  ratio = 'aspect-[4/3] sm:aspect-[16/10]'
}: LocationMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`overflow-hidden rounded-2xl border border-white/12 bg-graphite ${className}`}>
      <div className={`relative w-full ${ratio}`}>
        {!loaded &&
        <div
          className="absolute inset-0 grid place-items-center bg-graphite"
          aria-hidden="true">
          
            <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
              <MapPinIcon className="h-4 w-4 animate-pulse text-accent" />
              Loading map
            </span>
          </div>
        }
        <iframe
          title={`Map of the Devrious studio in ${STUDIO.city}, ${STUDIO.country}`}
          src={STUDIO.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-200 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'}`
          } />
        
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/12 bg-graphite px-5 py-4">
        <span>
          <span className="block font-display text-[15px] font-semibold tracking-tight text-paper">
            {STUDIO.city}, {STUDIO.country}
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
            {STUDIO.area} · {STUDIO.timezone}
          </span>
        </span>
        <a
          href={STUDIO.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-display text-[13px] font-semibold text-accent transition-colors duration-150 ease-out hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          
          Open in Maps
          <ArrowUpRightIcon
            className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true" />
          
        </a>
      </figcaption>
    </figure>);

}