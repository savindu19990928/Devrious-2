import { accentClasses } from '../../utils/accent';
import type { Service } from '../../types/content';

interface ServiceIllustrationProps {
  service: Service;
  size?: 'md' | 'lg';
}

export function ServiceIllustration({ service, size = 'md' }: ServiceIllustrationProps) {
  const Icon = service.icon;
  const accent = accentClasses(service.accent);
  const lg = size === 'lg';

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-wine-deep ${
        lg ? 'aspect-[5/4] border border-line shadow-lift' : 'aspect-[16/10]'
      }`}>
      <img
        src={service.image}
        alt={`${service.title} visual`}
        loading={lg ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
      />
      <span
        aria-hidden="true"
        className={`absolute flex items-center justify-center rounded-2xl shadow-lift ring-2 ring-white/80 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 ${accent.solid} ${
          lg ? 'left-4 top-4 h-12 w-12 sm:left-5 sm:top-5 sm:h-14 sm:w-14' : 'left-3 top-3 h-10 w-10'
        }`}>
        <Icon className={lg ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4'} />
      </span>
    </div>
  );
}
