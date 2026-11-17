import type { PolicyBlock } from '../../types/legal';
import { InlineText } from './InlineText';

export function PolicyContent({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <div className="max-w-[720px] break-words">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                id={block.id}
                className="scroll-mt-28 border-t border-line pt-8 text-xl font-bold leading-snug tracking-[-0.01em] text-ink first:border-t-0 first:pt-0 sm:scroll-mt-32 sm:pt-10 sm:text-2xl md:text-[1.75rem] [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-14">
                {block.text}
              </h2>
            );

          case 'h3':
            return (
              <h3 key={i} id={block.id} className="mt-7 scroll-mt-28 text-base font-bold text-ink sm:mt-9 sm:scroll-mt-32 sm:text-lg">
                {block.text}
              </h3>
            );

          case 'p':
            return (
              <p key={i} className="mt-3.5 text-base leading-[1.75] text-muted sm:mt-4 sm:text-[17px]">
                <InlineText text={block.text} />
              </p>
            );

          case 'ul':
            return (
              <ul key={i} className="mt-3.5 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-[1.7] text-muted sm:gap-3.5 sm:text-[17px]">
                    <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="min-w-0 flex-1">
                      <InlineText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
