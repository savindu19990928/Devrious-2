import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { DUR, EASE } from '../../utils/motion';

type MaskLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
};

/**
 * Editorial line-by-line reveal: each line rises out of its own mask.
 *
 * The trigger is deliberately read from the OUTER wrapper, never from the
 * animated line. Each line starts translated 108% down inside an
 * `overflow-hidden` mask, so its clipped intersection rect is empty — an
 * observer attached to the line itself (what `whileInView` does) can report it
 * as permanently out of view and the headline then stays hidden forever:
 * selectable in the DOM, invisible on screen. The wrapper is never
 * transformed or clipped, so it always reports honestly.
 */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.06
}: MaskLinesProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [forced, setForced] = useState(false);

  /**
   * Safety net for anything already on screen at mount: if the observer has
   * not fired shortly after paint, reveal it anyway. Headlines further down
   * the page keep their scroll reveal.
   */
  useEffect(() => {
    if (inView || forced) return;
    const id = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
      if (onScreen) setForced(true);
    }, 800);
    return () => window.clearTimeout(id);
  }, [inView, forced]);

  const shown = inView || forced;

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) =>
      <span
        key={`${line}-${i}`}
        className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
        
          <motion.span
          className={`block ${lineClassName ?? ''}`}
          initial={reduce ? { opacity: 0 } : { y: '108%' }}
          animate={
          shown ?
          reduce ?
          { opacity: 1 } :
          { y: '0%' } :
          reduce ?
          { opacity: 0 } :
          { y: '108%' }
          }
          transition={{ duration: DUR.slow, ease: EASE, delay: delay + i * stagger }}>
          
            {line}
          </motion.span>
        </span>
      )}
    </span>);

}