import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Nav } from '../Nav';
import { Footer } from '../Footer';
import { ScrollToTop } from './ScrollToTop';
import { DUR, EASE } from '../../utils/motion';

/**
 * The page transition is opacity-only and enter-only on purpose. An
 * `AnimatePresence mode="wait"` exit left `main` empty for the length of the
 * fade — the footer jumped up under the nav and back down on every navigation
 * — and a `y` offset put a transform on the ancestor of every sticky/scroll
 * driven section on the page.
 */
export function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full flex-col bg-ink font-sans text-paper">
      <ScrollToTop />
      <Nav />
      <motion.main
        key={location.pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DUR.base, ease: EASE }}>
        
        <Outlet />
      </motion.main>
      <Footer />
    </div>);

}