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
    <div aria-hidden="true" className={`relative overflow-hidden rounded-3xl ${accent.soft} ${lg ? 'aspect-[16/10] sm:aspect-[5/4]' : 'h-44'}`}>
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute rounded-full border border-ink/[0.06] ${lg ? 'h-64 w-64 sm:h-[22rem] sm:w-[22rem]' : 'h-56 w-56 sm:h-64 sm:w-64'}`} />
        <div className={`absolute rounded-full border border-ink/[0.08] ${lg ? 'h-44 w-44 sm:h-64 sm:w-64' : 'h-36 w-36 sm:h-40 sm:w-40'}`} />
        <div
          className={`absolute rounded-full border border-dashed border-ink/15 transition-transform duration-300 ease-out group-hover:rotate-90 ${
            lg ? 'h-32 w-32 sm:h-44 sm:w-44' : 'h-24 w-24 sm:h-28 sm:w-28'
          }`}>
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-jade shadow-glow" />
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet" />
        </div>
        <span
          className={`relative flex items-center justify-center rounded-2xl shadow-lift transition-transform duration-200 ease-out group-hover:-translate-y-1 ${accent.solid} ${
            lg ? 'h-16 w-16 sm:h-24 sm:w-24' : 'h-14 w-14'
          }`}>
          <Icon className={lg ? 'h-7 w-7 sm:h-10 sm:w-10' : 'h-6 w-6'} />
          <span className="absolute inset-x-2 top-1.5 h-1/3 rounded-xl bg-white/20" />
        </span>
      </div>
    </div>
  );
}
