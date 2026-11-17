import { SectionHeading } from '../ui/SectionHeading';
import { techGroups } from '../../data/devrious';
import type { TechItem } from '../../types/content';

export function TechStack() {
  const items = techGroups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.title })));
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];

  return (
    <section aria-labelledby="tech-title" className="overflow-hidden bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          id="tech-title"
          label="Built with"
          title="Proven tools, chosen for the long run."
          description="A stack we know deeply — so your product stays fast, secure and easy to extend." />
        
      </div>
      <div className="mt-14 flex flex-col gap-4">
        {rows.map((row, r) =>
        <div key={r} className="group flex overflow-hidden">
            <ul
            className={`flex w-max shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
            r === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`
            }>
            
              {[...row, ...row].map((item, i) =>
            <TechPill key={`${item.name}-${i}`} item={item} group={item.group} hidden={i >= row.length} />
            )}
            </ul>
          </div>
        )}
      </div>
    </section>);

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
      className="flex shrink-0 items-center gap-4 rounded-full border border-line bg-white py-2 pl-2 pr-7">
      
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">{item.mark}</span>
      <span className="flex flex-col">
        <span className="whitespace-nowrap font-display text-lg font-bold text-ink">{item.name}</span>
        <span className="text-xs text-muted">{group}</span>
      </span>
    </li>);

}