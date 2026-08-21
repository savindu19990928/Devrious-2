import React from 'react';
import { AIFlowWide } from './ai/AIFlowWide';
import { AIFlowStacked } from './ai/AIFlowStacked';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function AISection() {
  const isWide = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="insights" className="w-full bg-ink py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-paper lg:col-span-7">
            <MaskLines lines={["AI isn't the product.", 'The outcome is.']} />
          </h2>
          <Reveal delay={0.08} className="lg:col-span-5 lg:pt-3">
            <p className="max-w-md text-[15px] leading-relaxed text-ash md:text-lg">
              We use AI where it creates real value — automating work, understanding
              information, assisting teams, and making business systems smarter.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-14">
          {isWide ? <AIFlowWide /> : <AIFlowStacked />}
        </div>
      </div>
    </section>);

}