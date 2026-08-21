import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { LogoMark } from './Logo';
import {
  CONTACT,
  FOOTER_LINKS,
  LEGAL_LINKS,
  PORTAL_URL,
  SOCIAL_LINKS } from
'../data/site';
import { SERVICES } from '../data/services';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ink pb-9 pt-12 md:pb-10 md:pt-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-8" title="Devrious" />
              <span className="font-display text-base font-extrabold uppercase tracking-[0.18em] text-paper">
                Devrious
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-display text-xl font-bold tracking-tight text-paper/80 md:text-2xl">
              Where Ambition Becomes Digital.
            </p>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-display text-[13px] font-semibold text-paper transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
              
              Client Portal
              <ArrowUpRightIcon
                className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true" />
              
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) =>
              <li key={link.to}>
                  <Link
                  to={link.to}
                  className="text-[15px] text-paper/75 transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
              What we build
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) =>
              <li key={service.num}>
                  <Link
                  to="/services"
                  className="text-[15px] text-paper/75 transition-colors duration-150 ease-out hover:text-accent">
                  
                    {service.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[15px] text-paper/75 transition-colors duration-150 ease-out hover:text-accent">
                  
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="text-[15px] text-paper/75 transition-colors duration-150 ease-out hover:text-accent">
                  
                  {CONTACT.phone}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
              Social
            </h2>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((social) =>
              <li key={social.label}>
                  <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[15px] text-paper/75 transition-colors duration-150 ease-out hover:text-accent">
                  
                    {social.label}
                    <ArrowUpRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true" />
                  
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
            © 2026 Devrious. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash transition-colors duration-150 ease-out hover:text-accent">
              
                {link.label}
              </Link>
            )}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash transition-colors duration-150 ease-out hover:text-accent">
              
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>);

}