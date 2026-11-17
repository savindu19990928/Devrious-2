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
      className={`group relative block overflow-hidden rounded-[22px] bg-wine-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${className}`}>
      
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-[8%] inset-x-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
        
      </motion.div>
      <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:rotate-45 group-hover:opacity-100 group-focus-visible:opacity-100">
        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-4 bottom-4 flex flex-col rounded-2xl bg-black/35 px-5 py-4 backdrop-blur-md">
        <span className="font-display text-lg font-bold text-white md:text-xl">{title}</span>
        <span className="mt-0.5 text-sm text-white/70">{meta}</span>
      </span>
    </Link>);

}