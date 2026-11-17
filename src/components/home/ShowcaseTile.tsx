import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';

interface ShowcaseTileProps {
  to: string;
  image: string;
  title: string;
  meta: string;
  className?: string;
}

export function ShowcaseTile({ to, image, title, meta, className = '' }: ShowcaseTileProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <Link
      ref={ref}
      to={to}
      className={`group relative block overflow-hidden rounded-[20px] bg-wine-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:rounded-[22px] ${className}`}>
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-[8%] inset-x-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </motion.div>
      <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-[opacity,transform] duration-200 ease-out group-hover:rotate-45 sm:right-5 sm:top-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-3 bottom-3 flex flex-col rounded-2xl bg-black/45 px-4 py-3.5 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:px-5 sm:py-4">
        <span className="font-display text-base font-bold text-white sm:text-lg md:text-xl">{title}</span>
        <span className="mt-0.5 text-xs text-white/75 sm:text-sm">{meta}</span>
      </span>
    </Link>
  );
}
