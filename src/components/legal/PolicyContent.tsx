import type { PolicyBlock } from '../../types/legal';
import { InlineText } from './InlineText';

export function PolicyContent({ blocks }: {blocks: PolicyBlock[];}) {
  return (
    <div className="max-w-[720px]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                id={block.id}
                className="scroll-mt-32 border-t border-line pt-10 text-2xl font-bold leading-snug tracking-[-0.01em] text-ink first:border-t-0 first:pt-0 md:text-[1.75rem] [&:not(:first-child)]:mt-14">
                
                {block.text}
              </h2>);

          case 'h3':
            return (
              <h3 key={i} id={block.id} className="mt-9 scroll-mt-32 text-lg font-bold text-ink">
                {block.text}
              </h3>);

          case 'p':
            return (
              <p key={i} className="mt-4 text-[17px] leading-[1.75] text-muted">
                <InlineText text={block.text} />
              </p>);

          case 'ul':
            return (
              <ul key={i} className="mt-4 flex flex-col gap-2.5">
                {block.items.map((item) =>
                <li key={item} className="flex gap-3.5 text-[17px] leading-[1.7] text-muted">
                    <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>
                      <InlineText text={item} />
                    </span>
                  </li>
                )}
              </ul>);

          default:
            return null;
        }
      })}
    </div>);

}