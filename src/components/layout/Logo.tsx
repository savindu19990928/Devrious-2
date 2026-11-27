interface LogoProps {
  inverted?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export function Logo({ inverted = false, showWordmark = true, wordmarkClassName = '' }: LogoProps) {
  return (
    <span className="group/logo inline-flex items-center gap-2 sm:gap-2.5">
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/70 sm:h-10 sm:w-10">
        <img
          src="/DevriousLogoV2.png"
          alt=""
          width={40}
          height={40}
          className="h-full w-full scale-[1.06] object-contain transition-transform duration-200 ease-out group-hover/logo:-rotate-12"
        />
      </span>
      {showWordmark && (
        <span
          className={`font-display font-bold italic lowercase tracking-tight ${
            inverted ? 'text-white' : 'text-ink'
          } ${wordmarkClassName || 'text-xl sm:text-2xl'}`}>
          devrious
        </span>
      )}
    </span>
  );
}
