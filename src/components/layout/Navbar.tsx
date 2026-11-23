import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, PhoneIcon } from 'lucide-react';
import { Logo } from './Logo';
import { MenuOverlay } from './MenuOverlay';
import { contact, navLinks } from '../../data/devrious';
import { easeOut } from '../../utils/accent';

const circleClass =
  'flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    if (mq.matches) setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-3 sm:px-4 sm:pt-4 md:pt-6">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        Skip to content
      </a>
      <motion.nav
        aria-label="Main"
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
        className={`relative z-50 mx-auto flex h-[52px] max-w-[1220px] items-center justify-between gap-2 rounded-full border px-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 sm:h-[56px] sm:gap-3 sm:px-2.5 md:h-[60px] lg:px-3 ${
          scrolled || open ? 'border-white/80 bg-white/90 shadow-soft' : 'border-white/55 bg-white/75 shadow-soft'
        }`}>
        <Link
          to="/"
          aria-label="Devrious home"
          className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Logo wordmarkClassName="text-lg sm:text-xl" />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand xl:px-3.5 xl:text-[15px] ${
                    active ? 'text-brand font-semibold' : 'text-ink/75 hover:text-ink'
                  }`}>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-brand/10"
                      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/contact"
            aria-label="Start a project"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:h-10 sm:w-10 lg:flex xl:hidden">
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 xl:inline-flex">
            <span>Start a project</span>
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`} className={circleClass}>
            <PhoneIcon className="h-4 w-4 sm:h-[17px] sm:w-[17px]" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`${circleClass} relative lg:hidden`}>
            <motion.span
              aria-hidden="true"
              className="absolute h-[2px] w-4 rounded-full bg-white sm:w-[18px]"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
              transition={{ duration: 0.2, ease: easeOut }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-[2px] w-4 rounded-full bg-white sm:w-[18px]"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }}
              transition={{ duration: 0.2, ease: easeOut }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>{open && <MenuOverlay isActive={isActive} />}</AnimatePresence>
    </header>
  );
}
