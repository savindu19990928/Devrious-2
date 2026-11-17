import { useRef } from 'react';
import type { PointerEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

type Variant = 'primary' | 'jade' | 'secondary' | 'light' | 'outlineLight';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  arrow?: boolean;
  icon?: ReactNode;
  size?: 'md' | 'sm';
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-brand focus-visible:ring-brand',
  jade: 'bg-brand text-white hover:bg-violet focus-visible:ring-brand',
  secondary: 'border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white focus-visible:ring-brand',
  light: 'bg-white text-ink hover:bg-jade-light focus-visible:ring-white',
  outlineLight: 'border border-white/45 text-white hover:border-white hover:bg-white hover:text-ink focus-visible:ring-white'
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  external = false,
  arrow = true,
  icon,
  size = 'md',
  className = '',
  ariaLabel
}: ButtonLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.5 });

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full text-center font-semibold transition-[background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
    size === 'md' ? 'px-5 py-3.5 text-sm sm:px-7 sm:py-[15px] sm:text-[15px]' : 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm'
  } ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className="relative h-4 w-4 shrink-0 overflow-hidden">
          <ArrowRightIcon className="absolute inset-0 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-full" />
          <ArrowRightIcon className="absolute inset-0 h-4 w-4 -translate-x-full transition-transform duration-200 ease-out group-hover:translate-x-0" />
        </span>
      )}
    </>
  );

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.12 }}
      style={{ x, y }}
      className="inline-flex w-full sm:w-auto">
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
          {content}
        </a>
      ) : (
        <Link to={to} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      )}
    </motion.span>
  );
}
