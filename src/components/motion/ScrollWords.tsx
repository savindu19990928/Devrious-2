import React, { useRef } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';
import { ScrollWord } from './ScrollWord';

type ScrollWordsProps = {
  text: string;
  className?: string;
  dimClassName?: string;
};

/**
 * Scroll-linked typography: the statement lights up word by word as the
 * section moves through the viewport. Scroll-driven, so nothing animates
 * on its own and reduced-motion users simply get the finished state.
 */
export function ScrollWords({
  text,
  className,
  dimClassName = 'opacity-30'
}: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  /**
   * The range has to stay positive for any element height. `start 0.85 →
   * end 0.55` inverts once the statement is shorter than 30% of the viewport
   * (tall desktop screens), which pinned progress at 0 and left every word
   * sitting at its dim opacity — the statement read as invisible.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center']
  });

  const words = text.split(' ');

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={`relative ${className || ''}`}>
      {words.map((word, i) =>
      <ScrollWord
        key={`${word}-${i}`}
        word={word}
        progress={scrollYProgress}
        range={[i / words.length, (i + 1) / words.length]}
        dim={dimClassName} />

      )}
    </p>);

}