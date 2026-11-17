import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Footer } from './Footer';
import { easeOut } from '../../utils/accent';

export function PageTransition({ children }: {children: ReactNode;}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, filter: 'blur(6px)' }}
      transition={{ duration: 0.3, ease: easeOut }}>
      
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </motion.div>);

}