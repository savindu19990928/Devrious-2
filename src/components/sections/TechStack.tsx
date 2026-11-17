import { SectionHeading } from '../ui/SectionHeading';
import { techGroups } from '../../data/devrious';
import type { TechItem } from '../../types/content';

export function TechStack() {
  const items = techGroups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.title })));
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];

  return (
    <section aria-labelledby="tech-title" className="overflow-hidden bg-canvas py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <SectionHeading
          id="tech-title"
          label="Built with"
          title="Proven tools, chosen for the long run."
          description="A stack we know deeply — so your product stays fast, secure and easy to extend."
        />
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:mt-14 sm:gap-4">
        {rows.map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <ul
              className={`flex w-max shrink-0 gap-3 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-4 sm:pr-4 ${
                r === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
              }`}>
              {[...row, ...row].map((item, i) => (
                <TechPill key={`${item.name}-${i}`} item={item} group={item.group} hidden={i >= row.length} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

interface TechPillProps {
  item: TechItem;
  group: string;
  hidden: boolean;
}

function TechPill({ item, group, hidden }: TechPillProps) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-5 sm:gap-4 sm:py-2 sm:pl-2 sm:pr-7">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white sm:h-12 sm:w-12 sm:text-xs">
        {item.mark}
      </span>
      <span className="flex flex-col">
        <span className="whitespace-nowrap font-display text-sm font-bold text-ink sm:text-lg">{item.name}</span>
        <span className="text-[11px] text-muted sm:text-xs">{group}</span>
      </span>
    </li>
  );
}
