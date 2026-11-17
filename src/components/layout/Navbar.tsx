import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, PhoneIcon } from 'lucide-react';
import { Logo } from './Logo';
import { MenuOverlay } from './MenuOverlay';
import { contact, navLinks } from '../../data/devrious';
import { easeOut } from '../../utils/accent';

const circleClass =
'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2';

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
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) => to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 md:pt-7">
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
        className={`relative z-50 mx-auto flex h-[56px] max-w-[880px] items-center justify-between gap-4 rounded-full border px-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 md:h-[60px] ${
        scrolled || open ? 'border-white/70 bg-white/80 shadow-soft' : 'border-white/40 bg-white/45'}`
        }>
        
        <Link to="/" aria-label="Devrious home" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Logo showWordmark={false} />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  active ? 'text-ink' : 'text-ink/70 hover:text-ink'}`
                  }>
                  
                  {active &&
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/80"
                    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }} />

                  }
                  <span className="relative">{link.label}</span>
                </Link>
              </li>);

          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" aria-label="Start a project" className={`${circleClass} hidden sm:flex`}>
            <ArrowUpRightIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
          <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`} className={circleClass}>
            <PhoneIcon className="h-[17px] w-[17px]" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`${circleClass} relative`}>
            
            <motion.span
              aria-hidden="true"
              className="absolute h-[2px] w-[18px] rounded-full bg-white"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
              transition={{ duration: 0.2, ease: easeOut }} />
            
            <motion.span
              aria-hidden="true"
              className="absolute h-[2px] w-[18px] rounded-full bg-white"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }}
              transition={{ duration: 0.2, ease: easeOut }} />
            
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>{open && <MenuOverlay isActive={isActive} />}</AnimatePresence>
    </header>);

}