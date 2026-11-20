import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../../utils/accent';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  aside?: ReactNode;
  bannerImage?: string;
  orbs?: boolean;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  bannerImage = '/banners/services-banner.jpg'
}: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas p-2 sm:p-3 md:p-4">
      <div className="relative isolate overflow-hidden rounded-[20px] bg-wine-deep pb-12 pt-24 text-white sm:rounded-[22px] sm:pb-16 sm:pt-32 md:rounded-frame md:pb-20 md:pt-36 lg:pb-24 lg:pt-40">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <motion.img
            src={bannerImage}
            alt=""
            initial={reduce ? false : { opacity: 0.65, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#160307]/92 via-[#24060c]/75 to-[#160307]/45 md:from-[#160307]/90 md:via-[#24060c]/65 md:to-[#160307]/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_20%,rgba(226,58,76,0.28),transparent_55%)]"
        />

        <div
          className={`relative mx-auto grid max-w-[1320px] gap-8 px-4 sm:gap-12 sm:px-6 md:px-10 ${
            aside ? 'items-center lg:grid-cols-12' : ''
          }`}>
          <motion.div
            className={aside ? 'lg:col-span-7' : 'max-w-3xl'}
            variants={container}
            initial={reduce ? false : 'hidden'}
            animate="show">
            <motion.p variants={item} className="flex items-center gap-2 text-xs font-semibold text-white/80 sm:gap-2.5 sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#ff4d6d] shadow-[0_0_12px_#ff4d6d]" />
              <span>{eyebrow}</span>
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-4 font-display text-[1.9rem] font-bold leading-[1.06] tracking-[-0.02em] text-white xs:text-[2.25rem] sm:mt-6 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {title}
            </motion.h1>
            {description && (
              <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl">
                {description}
              </motion.p>
            )}
            {children && (
              <motion.div variants={item} className="mt-7 sm:mt-9">
                {children}
              </motion.div>
            )}
          </motion.div>

          {aside && (
            <motion.div
              className="relative lg:col-span-5"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.16, ease: easeOut }}>
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
