import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DUR.slow, ease: EASE, delay }}>
      
      {children}
    </motion.div>);

}