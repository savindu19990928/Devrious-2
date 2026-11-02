import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { SocialIcon } from '../SocialIcon';
import { company, socials } from '../../data/site';
import { preBuilds } from '../../data/preBuilds';

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/cybersecurity-services', label: 'Cybersecurity services' },
  { to: '/contact', label: 'Contact' }];


const legalLinks = [
  { to: '/refund', label: 'Refund Policy' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/cookies', label: 'Cookie Policy' },
];


export function Footer() {
  return (
    <footer className="band border-t border-white/10 bg-ink-950 text-ink-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:px-8">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
            Custom software, ready-made business systems, AI and cybersecurity services — from Colombo, Sri Lanka, since {company.founded}.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) =>
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 transition-colors duration-150 hover:bg-white/10 hover:text-white">

                <SocialIcon name={s.name} className="h-4 w-4" />
              </a>
            )}
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 transition-colors duration-150 hover:bg-white/10 hover:text-white">

              <SocialIcon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {companyLinks.map((l) =>
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">{l.label}</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Pre Builds</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {preBuilds.map((p) =>
              <li key={p.slug}>
                <Link to={`/pre-builds/${p.slug}`} className="hover:text-white">{p.name}</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>
                <a href={company.phoneHref} className="hover:text-white">{company.phoneDisplay}</a>
                <span className="block text-ink-500">WhatsApp available</span>
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {company.addressLines.map((line) =>
                  <span key={line} className="block">{line}</span>
                )}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Devrious. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {legalLinks.map((l) =>
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">{l.label}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}