interface LogoProps {
  inverted?: boolean;
  showWordmark?: boolean;
}

export function Logo({ inverted = false, showWordmark = true }: LogoProps) {
  return (
    <span className="group/logo flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-brand ring-2 ring-white/70">
        
        <span className="font-display text-lg font-bold italic leading-none text-white transition-transform duration-200 ease-out group-hover/logo:-rotate-12">
          d
        </span>
      </span>
      {showWordmark &&
      <span
        className={`font-display text-2xl font-bold italic lowercase tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
        
          devrious
        </span>
      }
    </span>);

}