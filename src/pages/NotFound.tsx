import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { LogoMark } from '../components/Logo';
import { MaskLines } from '../components/motion/MaskLines';
import { Reveal } from '../components/motion/Reveal';
import { NAV_LINKS } from '../data/site';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[72svh] w-full items-center bg-ink px-5 pb-16 pt-28 md:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <LogoMark className="h-12 w-10" animated />
        <h1 className="mt-8 font-display text-[clamp(2.8rem,12vw,7rem)] font-extrabold uppercase leading-[0.88] tracking-tightest text-paper">
          <MaskLines lines={['This page', "doesn't exist", 'yet.']} />
        </h1>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-ash md:text-lg">
            The link may be old, or the page may have moved. Everything we have is one
            click away.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-display text-[15px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5">
              
              Back to home
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-display text-[15px] font-semibold text-paper transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
              
              Talk to us
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-6">
            {NAV_LINKS.map((link) =>
            <li key={link.to}>
                <Link
                to={link.to}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ash transition-colors duration-150 ease-out hover:text-accent">
                
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}