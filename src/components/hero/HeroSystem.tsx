import React, { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Floater } from './Floater';
import { LogoMark } from '../Logo';
import { DUR, EASE } from '../../utils/motion';

const BAR_HEIGHTS = [38, 62, 44, 78, 56, 92];

/**
 * Abstract "chaos becomes system" composition: loose interface fragments held
 * together by connector lines that draw themselves in on load.
 */
export function HeroSystem() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.4 });
  const pointerY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX - window.innerWidth / 2);
      rawY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [rawX, rawY]);

  const line = (d: string, delay: number) =>
  <motion.path
    key={d}
    d={d}
    fill="none"
    stroke="#2d2d2d"
    strokeWidth="1"
    initial={reduce ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: DUR.slow, ease: EASE, delay }} />;



  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px] select-none"
      aria-hidden="true">
      
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none">
        
        {line('M78 96 L200 178', 0.28)}
        {line('M322 108 L214 176', 0.34)}
        {line('M96 306 L188 216', 0.4)}
        {line('M318 292 L222 214', 0.46)}
        {line('M200 178 L200 130', 0.52)}
      </svg>

      {/* Core system card */}
      <Floater
        depth={0.014}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.1}
        drift={5}
        className="left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2">
        
        <div className="rounded-2xl border border-white/12 bg-graphite p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
            <LogoMark className="h-6 w-5" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ash">
              system.core
            </span>
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div className="mt-3 flex items-end gap-1.5">
            {BAR_HEIGHTS.map((h, i) =>
            <motion.span
              key={h}
              className={`w-full rounded-sm ${i === 5 ? 'bg-accent' : 'bg-white/12'}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scaleY: 0.14 }}
              animate={{ opacity: 1, scaleY: 1 }}
              style={{ height: h * 0.42, originY: 1 }}
              transition={{ duration: DUR.base, ease: EASE, delay: 0.5 + i * 0.04 }} />

            )}
          </div>
          <div className="mt-3 space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-white/10" />
            <span className="block h-1.5 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </Floater>

      {/* Metric fragment */}
      <Floater
        depth={0.03}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.16}
        className="left-0 top-[14%] w-[38%]">
        
        <div className="rounded-xl border border-white/12 bg-ink/90 p-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ash">
            throughput
          </span>
          <p className="mt-1 font-display text-2xl font-bold leading-none tracking-tightest text-paper">
            +42%
          </p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.span
              className="block h-full w-[72%] origin-left rounded-full bg-accent"
              initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
              animate={reduce ? { opacity: 1 } : { scaleX: 1 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: 0.6 }} />
            
          </div>
        </div>
      </Floater>

      {/* AI node */}
      <Floater
        depth={-0.026}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.22}
        className="right-0 top-[18%] w-[26%]">
        
        <div className="grid aspect-square place-items-center rounded-xl border border-white/12 bg-ink/90">
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-full border border-dashed border-accent/60"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
            
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </motion.span>
        </div>
      </Floater>

      {/* Code fragment */}
      <Floater
        depth={0.034}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.28}
        className="bottom-[12%] left-[2%] w-[40%]">
        
        <div className="space-y-1.5 rounded-xl border border-white/12 bg-ink/90 p-3 font-mono text-[9px] leading-relaxed text-ash">
          <p className="text-accent">workflow.connect()</p>
          <p>people · data · process</p>
          <p className="text-paper">→ one system</p>
        </div>
      </Floater>

      {/* Status chip */}
      <Floater
        depth={-0.038}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.34}
        className="bottom-[16%] right-[2%]">
        
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-ink/90 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper">
            shipped
          </span>
        </div>
      </Floater>

      {/* Accent geometry */}
      <Floater
        depth={0.05}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.4}
        drift={9}
        className="right-[16%] top-[4%] h-6 w-6 rounded-md bg-signal">
        
        <span className="block h-6 w-6" />
      </Floater>
      <Floater
        depth={-0.045}
        pointerX={pointerX}
        pointerY={pointerY}
        delay={0.44}
        drift={8}
        className="bottom-[2%] left-[38%] h-5 w-5 rounded-full bg-coral">
        
        <span className="block h-5 w-5" />
      </Floater>
    </div>);

}