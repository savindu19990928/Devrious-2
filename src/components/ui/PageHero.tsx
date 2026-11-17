import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../../utils/accent';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  aside?: ReactNode;
  orbs?: boolean;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};

export function PageHero({ eyebrow, title, description, children, aside }: PageHeroProps) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-36 md:pb-24 md:pt-48">
      <div className={`relative mx-auto grid max-w-[1320px] gap-12 px-6 md:px-10 ${aside ? 'items-center lg:grid-cols-12' : ''}`}>
        <motion.div
          className={aside ? 'lg:col-span-7' : 'max-w-4xl'}
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show">
          
          <motion.p variants={item} className="flex items-center gap-2.5 text-sm font-semibold text-ink/60">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.5rem] font-bold leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.5rem]">
            
            {title}
          </motion.h1>
          {description &&
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {description}
            </motion.p>
          }
          {children &&
          <motion.div variants={item} className="mt-10">
              {children}
            </motion.div>
          }
        </motion.div>
        {aside &&
        <motion.div
          className="relative lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: easeOut }}>
          
            {aside}
          </motion.div>
        }
      </div>
    </section>);

}