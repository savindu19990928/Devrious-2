import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { DUR, EASE } from '../../utils/motion';

type WordCycleProps = {
  words: string[];
  className?: string;
  /** Time each word is held, in ms. */
  interval?: number;
};

/**
 * One live line of copy that swaps its subject on a timer.
 *
 * Every word is rendered into the same grid cell — the inactive ones hidden —
 * so the cell is always as wide and as tall as the longest word. An earlier
 * version reserved width from the longest *string* and positioned the live
 * word absolutely, which clipped any word that measured wider than that guess.
 */
export function WordCycle({ words, className, interval = 2400 }: WordCycleProps) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(
      () => setI((prev) => (prev + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span
      className={`inline-grid overflow-hidden pb-[0.14em] -mb-[0.14em] leading-[1.3] ${
      className ?? ''}`
      }>
      
      {words.map((word) =>
      <span
        key={word}
        className="invisible col-start-1 row-start-1 whitespace-nowrap"
        aria-hidden="true">
        
          {word}
        </span>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-110%' }}
          transition={{ duration: DUR.base, ease: EASE }}>
          
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>);

}