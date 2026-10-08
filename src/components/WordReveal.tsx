import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../utils/motion';

interface WordRevealProps {
  text: string;
  accent?: string;
  accentClassName?: string;
  delay?: number;
}

export function WordReveal({ text, accent, accentClassName = '', delay = 0 }: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = [
  ...text.split(' ').map((w) => ({ w, accent: false })),
  ...(accent ? accent.split(' ').map((w) => ({ w, accent: true })) : [])];


  return (
    <>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <span aria-hidden="true">
        {words.map((item, i) =>
        <React.Fragment key={`${item.w}-${i}`}>
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
              className={`inline-block ${item.accent ? accentClassName : ''}`}
              initial={reduce ? false : { y: '105%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.3, ease: easeOut, delay: delay + i * 0.04 }}>
              
                {item.w}
              </motion.span>
            </span>
            {i < words.length - 1 && ' '}
          </React.Fragment>
        )}
      </span>
    </>);

}