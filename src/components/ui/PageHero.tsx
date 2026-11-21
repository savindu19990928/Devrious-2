import { useRef } from 'react';
import type { PointerEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { easeOut } from '../../utils/accent';

interface PageHeroProps {
  eyebrow: string;
  title?: ReactNode;
  titleLines?: ReactNode[];
  tagline?: string;
  description?: string;
  children?: ReactNode;
  aside?: ReactNode;
  bannerImage?: string;
  imagePosition?: string;
  immersive?: boolean;
  orbs?: boolean;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};
const line = {
  hidden: { y: '105%' },
  show: { y: '0%', transition: { duration: 0.3, ease: easeOut } }
};

export function PageHero({
  eyebrow,
  title,
  titleLines,
  tagline,
  description,
  children,
  aside,
  bannerImage = '/banners/services-banner.jpg',
  imagePosition = 'object-[72%_center]',
  immersive = false
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const px = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width - 0.5) * -18);
    py.set(((e.clientY - rect.top) / rect.height - 0.5) * -12);
  };

  const frameClass = immersive
    ? 'relative isolate flex min-h-[calc(100svh-1rem)] items-center overflow-hidden rounded-[20px] bg-wine-deep pb-20 pt-24 text-white sm:min-h-[calc(100svh-1.5rem)] sm:rounded-[22px] sm:pb-24 sm:pt-28 md:h-[calc(100svh-2rem)] md:max-h-[960px] md:min-h-[620px] md:rounded-frame md:py-0'
    : 'relative isolate overflow-hidden rounded-[20px] bg-wine-deep pb-12 pt-24 text-white sm:rounded-[22px] sm:pb-16 sm:pt-32 md:rounded-frame md:pb-20 md:pt-36 lg:pb-24 lg:pt-40';

  const contentInner = (
    <div
      className={`relative mx-auto w-full ${immersive && !aside ? 'max-w-[1400px] px-5 pt-4 sm:px-10 md:px-16 md:pt-16' : 'max-w-[1320px] px-4 sm:px-6 md:px-10'} grid gap-8 sm:gap-12 ${
        aside ? 'items-center lg:grid-cols-12' : ''
      }`}>
      <motion.div
        className={aside ? 'lg:col-span-7' : immersive ? 'max-w-[650px]' : 'max-w-3xl'}
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show">
        <motion.p variants={item} className="flex items-center gap-2 text-xs font-semibold text-white/80 sm:gap-2.5 sm:text-sm">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#ff4d6d] shadow-[0_0_12px_#ff4d6d]" />
          <span>{eyebrow}</span>
        </motion.p>

        <h1 className="mt-4 font-display text-[1.9rem] font-medium leading-[1.06] tracking-[-0.02em] text-white xs:text-[2.25rem] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          {titleLines
            ? titleLines.map((l, i) => (
                <span key={i} className="block overflow-hidden pb-[0.1em]">
                  <motion.span variants={line} className="block">
                    {l}
                  </motion.span>
                </span>
              ))
            : title}
        </h1>

        {description && (
          <motion.p variants={item} className="mt-5 max-w-[560px] text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-[19px]">
            {description}
          </motion.p>
        )}

        {tagline && (
          <motion.p
            variants={item}
            className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 sm:mt-5 sm:text-[11px] sm:tracking-[0.26em]">
            {tagline}
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
  );

  return (
    <section ref={ref} className="bg-canvas p-2 sm:p-3 md:p-4">
      <div onPointerMove={onMove} className={frameClass}>
        <motion.div style={{ y: reduce ? 0 : imageY }} className="absolute -inset-y-10 inset-x-0 -z-20">
          <motion.img
            src={bannerImage}
            alt=""
            loading="eager"
            decoding="async"
            style={{ x: px, y: py }}
            initial={reduce ? false : { opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className={`h-full w-full object-cover ${imagePosition}`}
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#160307]/85 via-[#1c070a]/62 to-[#160307]/45 md:bg-gradient-to-r md:from-[#160307]/82 md:via-[#1c070a]/32 md:to-transparent"
        />

        <motion.div
          aria-hidden="true"
          animate={reduce ? undefined : { opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_36%,rgba(226,58,76,0.24),transparent_55%)]"
        />

        {immersive && !aside ? (
          <motion.div
            style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
            className="w-full">
            {contentInner}
          </motion.div>
        ) : (
          contentInner
        )}

        {immersive && (
          <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-xs font-medium text-white/60 md:bottom-8 md:right-10 md:flex">
            <span>Scroll</span>
            <span aria-hidden="true" className="relative h-10 w-px overflow-hidden bg-white/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-white"
                animate={reduce ? undefined : { y: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
