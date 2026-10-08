import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { company } from '../data/site';

interface CtaBandProps {
  title?: string;
  description?: string;
}

export function CtaBand({
  title = 'Have a project in mind?',
  description = 'Tell us what you need. We reply within one business day — or message us on WhatsApp for a faster answer.'
}: CtaBandProps) {
  return (
    <section className="band border-t border-white/5 bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base text-ink-300 sm:text-lg">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-150 hover:bg-brand-400">
            
            Contact us <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10">
            
            <SocialIcon name="whatsapp" className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>);

}