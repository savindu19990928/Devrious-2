import React from 'react';
import { motion, useTransform, type MotionValue } from 'framer-motion';

type ScrollWordProps = {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  dim: string;
};

export function ScrollWord({ word, progress, range, dim }: ScrollWordProps) {
  /** Floor stays legible so a word is never effectively invisible mid-scroll. */
  const opacity = useTransform(progress, range, [0.4, 1]);

  return (
    <span className="relative mr-[0.24em] inline-block">
      <span aria-hidden="true" className={dim}>
        {word}
      </span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {word}
      </motion.span>
    </span>);

}