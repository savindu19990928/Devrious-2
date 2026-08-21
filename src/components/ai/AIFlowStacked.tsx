import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DUR, EASE, VIEWPORT } from '../../utils/motion';

const INPUTS = ['Documents', 'Business data', 'Team requests'];
const OUTPUTS = ['Automated actions', 'Clear summaries', 'Faster decisions'];

/**
 * Mobile and tablet version of the AI diagram. Built from DOM elements so the
 * labels stay legible and the motion stays cheap on touch devices.
 */
export function AIFlowStacked() {
  const reduce = useReducedMotion();

  const connector = (delay: number) =>
  <div className="relative mx-auto h-12 w-px bg-white/15">
      {!reduce &&
    <motion.span
      className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-accent"
      animate={{ y: [0, 40], opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay }} />

    }
    </div>;


  const chip = (text: string, i: number, accent: boolean) =>
  <motion.li
    key={text}
    className={`rounded-xl border bg-graphite px-4 py-3.5 text-[14px] font-medium text-paper ${
    accent ? 'border-accent/45' : 'border-white/12'}`
    }
    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT}
    transition={{ duration: DUR.base, ease: EASE, delay: i * 0.05 }}>
    
      {text}
    </motion.li>;


  return (
    <div className="mx-auto w-full max-w-sm">
      <ul className="space-y-2.5">{INPUTS.map((t, i) => chip(t, i, false))}</ul>

      {connector(0)}

      <motion.div
        className="relative mx-auto grid h-36 w-36 place-items-center rounded-full border border-white/12 bg-graphite"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: DUR.base, ease: EASE }}>
        
        <motion.span
          className="absolute inset-[-14px] rounded-full border border-dashed border-accent/45"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
        
        <span className="text-center">
          <span className="block font-display text-base font-bold text-paper">
            Devrious
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
            AI layer
          </span>
        </span>
      </motion.div>

      {connector(0.9)}

      <ul className="space-y-2.5">{OUTPUTS.map((t, i) => chip(t, i, true))}</ul>
    </div>);

}