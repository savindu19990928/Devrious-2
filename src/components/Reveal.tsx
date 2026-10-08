import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../utils/motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, x = 0, y = 16 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, ease: easeOut, delay }}>
      
      {children}
    </motion.div>);

}