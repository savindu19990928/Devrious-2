import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { mission, vision } from '../../data/about';

export function VisionMission() {
  return (
    <section className="band bg-ink-950" aria-label="Vision and mission">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-0 lg:px-8">
        <Reveal className="lg:border-r lg:border-white/10 lg:pr-16">
          <h2 className="flex items-center gap-2.5 text-base font-semibold text-brand-300">
            <span className="h-2 w-2 rounded-sm bg-brand-500" aria-hidden="true" />
            Our vision
          </h2>
          <p className="mt-5 max-w-[34ch] font-display text-xl font-semibold leading-[1.45] tracking-tight text-ink-50 sm:text-2xl">
            {vision.statement}
          </p>
          <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.8] text-ink-200 sm:text-lg">{vision.detail}</p>
        </Reveal>
        <Reveal delay={0.08} className="border-t border-white/10 pt-14 lg:border-t-0 lg:pl-16 lg:pt-0">
          <h2 className="flex items-center gap-2.5 text-base font-semibold text-sun-400">
            <span className="h-2 w-2 rounded-sm bg-sun-500" aria-hidden="true" />
            Our mission
          </h2>
          <p className="mt-5 max-w-[34ch] font-display text-xl font-semibold leading-[1.45] tracking-tight text-ink-50 sm:text-2xl">
            {mission.statement}
          </p>
          <ul className="mt-6 space-y-4">
            {mission.commitments.map((c) =>
            <li key={c} className="flex gap-3 text-[1.0625rem] leading-[1.7] text-ink-200 sm:text-lg">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                {c}
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}