import { useState } from 'react';
import { homeImages } from '../../../data/home';

type Theme = 'crimson' | 'ivory' | 'noir';

const themes: Record<Theme, { label: string; bg: string; text: string; sub: string; button: string; swatch: string }> = {
  crimson: { label: 'Crimson', bg: 'bg-brand', text: 'text-white', sub: 'text-white/75', button: 'bg-white text-ink', swatch: 'bg-brand' },
  ivory: { label: 'Ivory', bg: 'bg-canvas', text: 'text-ink', sub: 'text-muted', button: 'bg-ink text-white', swatch: 'bg-canvas' },
  noir: { label: 'Noir', bg: 'bg-ink', text: 'text-white', sub: 'text-white/65', button: 'bg-jade text-white', swatch: 'bg-ink' }
};

export function DemoWebsite() {
  const [theme, setTheme] = useState<Theme>('crimson');
  const t = themes[theme];

  return (
    <div className={`flex h-full flex-col transition-colors duration-200 md:flex-row ${t.bg}`}>
      <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 md:p-8">
        <div className={`flex items-center justify-between text-xs font-semibold ${t.sub}`}>
          <span className={`font-display text-lg font-bold italic lowercase ${t.text}`}>zevora</span>
          <span className="flex gap-3 sm:gap-4">
            <span>Teams</span>
            <span>Custom</span>
            <span>Studio</span>
          </span>
        </div>
        <div className="py-2 sm:py-4 md:py-6">
          <p className={`text-xs font-semibold ${t.sub}`}>New season</p>
          <p className={`mt-1.5 font-display text-2xl font-bold leading-tight sm:mt-2 sm:text-3xl md:text-4xl ${t.text}`}>
            Kits made to move.
          </p>
          <p className={`mt-2.5 max-w-xs text-xs leading-relaxed sm:mt-3 sm:text-sm ${t.sub}`}>
            Custom teamwear designed with your club, made in Sri Lanka.
          </p>
          <span className={`mt-4 inline-flex rounded-full px-4 py-2 text-xs font-semibold sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm ${t.button}`}>
            Design your kit
          </span>
        </div>
        <div role="radiogroup" aria-label="Art direction" className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {(Object.keys(themes) as Theme[]).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={theme === key}
              onClick={() => setTheme(key)}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-colors duration-150 sm:gap-2 sm:px-3 ${
                theme === key ? 'border-current' : 'border-transparent opacity-70 hover:opacity-100'
              } ${t.text}`}>
              <span className={`h-3 w-3 rounded-full ring-1 ring-black/15 sm:h-3.5 sm:w-3.5 ${themes[key].swatch}`} aria-hidden="true" />
              {themes[key].label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative h-44 sm:h-52 md:h-auto md:w-[44%]">
        <img src={homeImages.fashion} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  );
}
