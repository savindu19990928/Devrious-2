import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { CurrencyToggle } from '../CurrencyToggle';
import { navLinks } from '../../data/site';
import { easeOut } from '../../utils/motion';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }: {isActive: boolean;}) =>
  `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
  isActive ? 'text-brand-700' : 'text-ink-600 hover:text-ink-950'}`;


  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-canvas/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) =>
          <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          )}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <CurrencyToggle />
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
            
            Contact us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 ring-1 ring-ink-200 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
      {open &&
        <motion.div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-100 bg-canvas xl:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: easeOut }}>
          
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
              `rounded-lg px-3 py-2.5 text-base font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-50'}`
              }>
              
                {link.label}
              </NavLink>
            )}
            <div className="mt-3 flex items-center justify-between border-t border-ink-100 pt-4">
              <span className="text-sm text-ink-500">Show prices in</span>
              <CurrencyToggle />
            </div>
            <Link to="/contact" className="mt-3 rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-canvas">
              Contact us
            </Link>
          </div>
        </motion.div>
        }
      </AnimatePresence>
    </header>);

}