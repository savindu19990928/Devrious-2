import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ButtonLink } from '../ui/ButtonLink';
import { homeImages } from '../../data/home';
import { easeOut } from '../../utils/accent';

const lines = ['Distinctive design.', 'Built around', 'your business.'];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } } };
const line = { hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 0.3, ease: easeOut } } };

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const px = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width - 0.5) * -18);
    py.set(((e.clientY - rect.top) / rect.height - 0.5) * -12);
  };

  return (
    <section ref={ref} aria-labelledby="hero-title" className="bg-canvas p-2 sm:p-3 md:p-4">
      <div
        onPointerMove={onMove}
        className="relative isolate flex min-h-[calc(100svh-1rem)] items-center overflow-hidden rounded-[20px] bg-wine-deep pb-8 pt-20 sm:min-h-[calc(100svh-1.5rem)] sm:rounded-[22px] sm:pb-12 sm:pt-24 md:min-h-[min(calc(100svh-2rem),900px)] md:rounded-frame md:pb-12 md:pt-24 xl:min-h-[min(calc(100svh-2rem),960px)] xl:pb-16 xl:pt-28">
        <motion.div style={{ y: reduce ? 0 : imageY }} className="absolute -inset-y-10 inset-x-0 -z-20">
          <motion.img
            src={homeImages.hero}
            alt=""
            style={{ x: px, y: py }}
            initial={reduce ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="h-full w-full object-cover object-[72%_center]"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-wine-deep/65 md:bg-gradient-to-r md:from-wine-deep/75 md:via-wine-deep/35 md:to-transparent"
        />

        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
          className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 md:px-16">
          <motion.div variants={container} initial={reduce ? false : 'hidden'} animate="show" className="max-w-[640px]">
            <motion.p
              variants={fade}
              className="font-display text-2xl font-bold italic lowercase leading-none tracking-tight text-white min-[360px]:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl">
              devrious
            </motion.p>
            <h1
              id="hero-title"
              className="mt-2.5 font-display text-[1.75rem] font-medium leading-[1.08] tracking-[-0.02em] text-white min-[360px]:text-[2.05rem] xs:text-[2.45rem] sm:mt-4 sm:text-[3rem] sm:leading-[1.06] md:text-[3.5rem] lg:text-[3.6rem] xl:text-[4.4rem]">
              {lines.map((l) => (
                <span key={l} className="block overflow-hidden pb-[0.1em]">
                  <motion.span variants={line} className="block">
                    {l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p variants={fade} className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-white/80 min-[360px]:text-base sm:mt-5 sm:text-lg xl:mt-6 xl:text-[19px]">
              Design-led websites, business systems and AI tools for brands that take their craft seriously.
            </motion.p>
            <motion.p
              variants={fade}
              className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:mt-4 sm:text-[11px] sm:tracking-[0.26em] xl:mt-5">
              Tech crafted with empathy · Purpose in every pixel
            </motion.p>
            <motion.div variants={fade} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 xl:mt-10">
              <ButtonLink to="/contact" variant="light" arrow={false}>
                Arrange a private consultation
              </ButtonLink>
              <ButtonLink to="/portfolio" variant="outlineLight" arrow={false}>
                See our work
              </ButtonLink>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-xs font-medium text-white/60 md:bottom-8 md:right-10 md:flex [@media(max-height:640px)]:hidden">
          <span>Scroll</span>
          <span aria-hidden="true" className="relative h-10 w-px overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-white"
              animate={reduce ? undefined : { y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
