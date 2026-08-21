import React from 'react';
import { LogoMark } from './Logo';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';

export function About() {
  return (
    <section id="about" className="w-full bg-paper py-12 text-ink md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:text-[11px]">
            <LogoMark className="h-6 w-5" />
            Devrious · Est. 2024
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-display text-[clamp(2.6rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-tightest lg:col-span-7">
            <MaskLines lines={['We build', 'what should', 'exist.']} />
          </h2>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.08}>
              <p className="text-[17px] font-medium leading-relaxed text-ink md:text-xl">
                Devrious was founded in 2024 with a simple belief: ambitious ideas
                deserve technology built around them.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/65 md:text-base">
                We combine design, software engineering, systems thinking, and AI to turn
                ideas into useful digital products and business systems.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}