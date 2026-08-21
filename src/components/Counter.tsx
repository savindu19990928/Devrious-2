import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE } from '../utils/motion';

type CounterProps = {
  to: number;
  suffix?: string;
  className?: string;
};

export function Counter({ to, suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.1,
      ease: EASE,
      onUpdate: (v) => setValue(v)
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className={className}>
      {Math.round(value)}
      {suffix}
    </span>);

}