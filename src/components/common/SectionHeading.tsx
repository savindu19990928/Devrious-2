import React from 'react';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  lines: string[];
  copy?: string;
  tone?: 'dark' | 'light';
  id?: string;
};

/** The standard section opener: oversized headline left, supporting copy right. */
export function SectionHeading({
  eyebrow,
  lines,
  copy,
  tone = 'dark',
  id
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div
      id={id}
      className="flex scroll-mt-28 flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
      
      <div>
        {eyebrow &&
        <Reveal>
            <p
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.22em] md:text-[11px] ${
            isDark ? 'text-ash' : 'text-ink/45'}`
            }>
            
              {eyebrow}
            </p>
          </Reveal>
        }
        <h2
          className={`font-display text-[clamp(2.2rem,7vw,4.75rem)] font-extrabold uppercase leading-[0.9] tracking-tightest ${
          isDark ? 'text-paper' : 'text-ink'}`
          }>
          
          <MaskLines lines={lines} />
        </h2>
      </div>

      {copy &&
      <Reveal delay={0.08}>
          <p
          className={`max-w-sm text-[15px] leading-relaxed ${
          isDark ? 'text-ash' : 'text-ink/65'}`
          }>
          
            {copy}
          </p>
        </Reveal>
      }
    </div>);

}