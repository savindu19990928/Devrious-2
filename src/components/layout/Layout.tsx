import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SocialIcon } from '../SocialIcon';
import { company } from '../../data/site';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-canvas">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-50 focus:px-4 focus:py-2 focus:text-ink-950">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Devrious on WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-canvas shadow-lg shadow-black/40 transition-colors duration-150 hover:bg-brand-400">
        
        <SocialIcon name="whatsapp" className="h-6 w-6" />
      </a>
    </div>);

}