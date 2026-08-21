import React from 'react';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion';
import { DUR, EASE } from '../../utils/motion';

type FloaterProps = {
  children: React.ReactNode;
  className?: string;
  /** Parallax depth multiplier. Negative values move against the pointer. */
  depth: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  delay?: number;
  /** Idle drift distance in px — keeps the composition alive on touch devices. */
  drift?: number;
};

/**
 * A single module of the hero system: enters on load, drifts gently on its own,
 * and shifts with the pointer on devices that have one.
 */
export function Floater({
  children,
  className,
  depth,
  pointerX,
  pointerY,
  delay = 0,
  drift = 6
}: FloaterProps) {
  const reduce = useReducedMotion();
  const x = useTransform(pointerX, (v) => v * depth);
  const y = useTransform(pointerY, (v) => v * depth);

  return (
    <motion.div className={`absolute ${className ?? ''}`} style={{ x, y }}>
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: DUR.slow, ease: EASE, delay }}>
        
        <motion.div
          animate={reduce ? undefined : { y: [0, -drift, 0] }}
          transition={{
            duration: 6 + depth * 40,
            repeat: Infinity,
            ease: 'easeInOut',
            delay
          }}>
          
          {children}
        </motion.div>
      </motion.div>
    </motion.div>);

}