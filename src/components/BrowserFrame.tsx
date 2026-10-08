import React, { useState } from 'react';
import { Maximize2Icon } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

interface BrowserFrameProps {
  src: string;
  url: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  zoomable?: boolean;
}

export function BrowserFrame({ src, url, alt, fallbackSrc, className = '', zoomable = false }: BrowserFrameProps) {
  const [current, setCurrent] = useState(src);
  const [open, setOpen] = useState(false);

  const image =
  <img
    src={current}
    alt={alt}
    className="block h-auto w-full bg-ink-50"
    loading="lazy"
    onError={() => {
      if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc);
    }} />;



  return (
    <figure className={`overflow-hidden rounded-xl border border-ink-200 bg-ink-50 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-coral-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-sun-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        </span>
        <span className="ml-2 min-w-0 truncate rounded-md bg-canvas px-2 py-0.5 text-[11px] font-medium text-ink-500 ring-1 ring-ink-200">
          {url}
        </span>
      </div>
      {zoomable ?
      <>
          <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full cursor-zoom-in"
          aria-label={`View full-size: ${alt}`}>
          
            {image}
            <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 text-xs font-semibold text-white opacity-100 transition-opacity duration-150 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              <Maximize2Icon className="h-3.5 w-3.5" aria-hidden="true" />
              View full size
            </span>
          </button>
          <ImageLightbox open={open} src={current} alt={alt} caption={url} onClose={() => setOpen(false)} />
        </> :

      image
      }
    </figure>);

}