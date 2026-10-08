import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Price } from './Price';
import { easeOut } from '../utils/motion';
import type { services } from '../data/services';

type Service = (typeof services)[number];

const row: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const column: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};
const badge: Variants = {
  hidden: { opacity: 0, scale: 0.96, rotate: -8 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.3, ease: easeOut } }
};
const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } };
const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: easeOut } }
};
const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.3, ease: easeOut } }
};

interface ServiceRowProps {
  service: Service;
  isLast?: boolean;
}

export function ServiceRow({ service: s, isLast = false }: ServiceRowProps) {
  const reduce = useReducedMotion();
  const Icon = s.icon;

  return (
    <motion.article
      id={s.id}
      className="relative grid scroll-mt-24 gap-8 py-14 lg:grid-cols-[1fr_1fr_220px]"
      variants={row}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}>
      
      {!isLast && <motion.span aria-hidden="true" variants={rule} className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink-100" />}
      <motion.div variants={column}>
        <motion.span variants={badge} className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.span>
        <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink-950">{s.name}</h2>
        <p className="mt-3 leading-relaxed text-ink-600">{s.description}</p>
      </motion.div>
      <motion.ul variants={list} className="space-y-3 lg:pt-16">
        {s.includes.map((item) =>
        <motion.li key={item} variants={listItem} className="flex gap-3 text-ink-700">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            {item}
          </motion.li>
        )}
      </motion.ul>
      <motion.div variants={column} className="lg:pt-16">
        <p className="text-sm text-ink-500">Starting from</p>
        <Price lkr={s.priceLKR} className="mt-1 block font-display text-2xl font-extrabold text-ink-950" />
        <p className="mt-1 text-xs text-ink-500">Final price depends on scope</p>
        <Link
          to={`/contact?topic=service&service=${s.id}`}
          className="group mt-5 inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-brand-400 active:scale-[0.97]">
          
          Discuss your project
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </motion.article>);

}