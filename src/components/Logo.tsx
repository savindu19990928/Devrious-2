import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DUR, EASE } from '../utils/motion';

/**
 * The Devrious mark, redrawn as vector geometry so it is always transparent
 * and never needs a white tile behind it. `mono` renders it in a single
 * colour for placement on the accent or paper surfaces.
 */
export const LOGO_VIEWBOX = '0 0 222 274';

const BOWL =
'M55 52 L222 52 L222 112 L77 112 A22 22 0 0 0 55 134 L55 192 A22 22 0 0 0 77 214 L168 214 L168 274 L55 274 A55 55 0 0 1 0 219 L0 107 A55 55 0 0 1 55 52 Z';
const STEM = 'M168 0 L196 0 A26 26 0 0 1 222 26 L222 60 L168 60 Z';
const NODE = 'M168 112 L222 112 L222 188 A26 26 0 0 1 196 214 L168 214 Z';

/** Shared with the favicon generator so the mark has exactly one definition. */
export const LOGO_PATHS = [
{ d: BOWL, fill: '#00b473' },
{ d: STEM, fill: '#ffd400' },
{ d: NODE, fill: '#ff5a52' }] as
const;

type LogoMarkProps = {
  className?: string;
  /** Accessible name. Omit for decorative placements. */
  title?: string;
  mono?: 'ink' | 'paper';
  animated?: boolean;
};

export function LogoMark({
  className = 'h-9 w-9',
  title,
  mono,
  animated = false
}: LogoMarkProps) {
  const reduce = useReducedMotion();
  const colors = mono ?
  { bowl: mono === 'ink' ? '#0a0a0a' : '#f4f3ef', stem: mono === 'ink' ? '#0a0a0a' : '#f4f3ef', node: mono === 'ink' ? '#0a0a0a' : '#f4f3ef' } :
  { bowl: '#00b473', stem: '#ffd400', node: '#ff5a52' };

  const shapes = [
  { d: BOWL, fill: colors.bowl },
  { d: STEM, fill: colors.stem },
  { d: NODE, fill: colors.node }];


  return (
    <svg
      viewBox="0 0 222 274"
      className={className}
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false">
      
      {shapes.map((shape, i) =>
      animated && !reduce ?
      <motion.path
        key={shape.d}
        d={shape.d}
        fill={shape.fill}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.06 }} /> :


      <path key={shape.d} d={shape.d} fill={shape.fill} />

      )}
    </svg>);

}