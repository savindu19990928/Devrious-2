import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]} reduce={Boolean(reduce)}>
            {word}
          </Word>);

      })}
    </p>);

}

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  reduce: boolean;
}

function Word({ children, progress, range, reduce }: WordProps) {
  const opacity = useTransform(progress, range, [0.35, 1]);
  return (
    <>
      <motion.span style={{ opacity: reduce ? 1 : opacity }}>{children}</motion.span>{' '}
    </>);

}