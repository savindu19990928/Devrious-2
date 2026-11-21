import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Footer } from './Footer';
import { easeOut } from '../../utils/accent';

export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: easeOut }}>
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
}
