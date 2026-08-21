import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { LogoMark } from './Logo';
import { CONTACT, LEGAL_LINKS, NAV_LINKS, PORTAL_URL } from '../data/site';
import { DUR, EASE } from '../utils/motion';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ease-out ${
        scrolled || open ?
        'border-white/10 bg-ink/85 backdrop-blur-xl' :
        'border-transparent bg-transparent'}`
        }>
        
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:h-20 md:px-10 lg:px-14">
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
            
            <LogoMark className="h-8 w-7 md:h-9 md:w-8" title="Devrious home" />
            <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.18em] text-paper md:text-base">
              Devrious
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex xl:gap-8">
            
            {NAV_LINKS.map((link) =>
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
              `group relative whitespace-nowrap py-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-150 ease-out focus:outline-none ${
              isActive ? 'text-paper' : 'text-ash hover:text-paper'}`

              }>
              
                {({ isActive }) =>
              <>
                    {link.label}
                    <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-200 ease-out ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`
                  } />
                
                  </>
              }
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-4 py-2.5 font-display text-[13px] font-semibold text-paper transition-colors duration-150 ease-out hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:inline-flex">
              
              Client Portal
              <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 font-display text-[13px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:inline-flex">
              
              Start a Project
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition-colors duration-150 ease-out hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden">
              
              {open ?
              <XIcon className="h-5 w-5" aria-hidden="true" /> :

              <MenuIcon className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open &&
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-between gap-8 overflow-y-auto bg-ink px-5 pb-8 pt-20 md:px-10 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DUR.base, ease: EASE }}>
          
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link, i) =>
            <div key={link.label} className="overflow-hidden border-b border-white/10">
                  <motion.div
                initial={reduce ? { opacity: 0 } : { y: '100%' }}
                animate={reduce ? { opacity: 1 } : { y: '0%' }}
                transition={{
                  duration: DUR.slow,
                  ease: EASE,
                  delay: 0.04 + i * 0.04
                }}>
                
                    <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                  `flex items-baseline justify-between py-3 font-display text-[1.75rem] font-bold leading-none tracking-tightest sm:text-[2rem] ${
                  isActive ? 'text-accent' : 'text-paper'}`

                  }>
                  
                      {link.label}
                      <span className="font-mono text-[11px] tracking-[0.16em] text-ash">
                        0{i + 1}
                      </span>
                    </NavLink>
                  </motion.div>
                </div>
            )}
            </nav>

            <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.slow, ease: EASE, delay: 0.24 }}>
            
              <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-full bg-accent px-6 py-4 font-display text-base font-semibold text-ink">
              
                Start a Project
                <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-full border border-white/20 px-6 py-4 font-display text-base font-semibold text-paper">
              
                Client Portal
                <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <div className="mt-2 flex flex-col gap-1 font-mono text-[12px] tracking-[0.06em] text-ash">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </div>
              <div className="mt-2 flex gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                {LEGAL_LINKS.map((link) =>
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
              )}
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}