import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PHRASE = 'Where Ambition Becomes Digital';
const REPEATS = 8;

function Group({ hidden }: {hidden?: boolean;}) {
  return (
    <span
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
      aria-hidden={hidden ? 'true' : undefined}>
      
      {Array.from({ length: REPEATS }).map((_, i) =>
      <span key={i} className="flex items-center gap-8 md:gap-12">
          <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-ash md:text-xs">
            {PHRASE}
          </span>
          <span
          className="h-1 w-1 shrink-0 rounded-full bg-accent/70"
          aria-hidden="true" />
        
        </span>
      )}
    </span>);

}

/**
 * Continuous brand band — the one piece of always-on motion, kept linear and
 * slow so it reads as a rhythm rather than an attention grab. Two identical
 * groups travel exactly one group width, so the loop is seamless at any
 * viewport rather than opening a gap on very wide screens.
 */
export function Marquee() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-ink py-3 md:py-3.5">
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}>
        
        <Group />
        <Group hidden />
      </motion.div>
    </div>);

}