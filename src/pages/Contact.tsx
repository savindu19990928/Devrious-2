import type { ReactNode } from 'react';
import { ArrowUpRightIcon, ClockIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../components/contact/ContactForm';
import { contact } from '../data/devrious';
import { usePageMeta } from '../hooks/usePageMeta';

interface Method {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  highlight?: boolean;
}

const methods: Method[] = [
{ label: 'WhatsApp', value: 'Fastest reply', href: contact.whatsappHref, icon: <MessageCircleIcon className="h-5 w-5" />, external: true, highlight: true },
{ label: 'Email', value: contact.email, href: contact.emailHref, icon: <MailIcon className="h-5 w-5" /> },
{ label: 'Phone', value: contact.phone, href: contact.phoneHref, icon: <PhoneIcon className="h-5 w-5" /> }];


export function Contact() {
  usePageMeta('Contact', `Start a project with Devrious. Call ${contact.phone}, email ${contact.email} or visit us in Maharagama, Colombo.`);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact · We reply within one business day"
        title={
        <>
            Let’s build something <span className="text-gradient">meaningful.</span>
          </>
        }
        description="Tell us about your idea. Let's turn it into something real." />
      

      <section aria-label="Contact Devrious" className="bg-canvas pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-4 lg:col-span-5">
            <ul className="flex flex-col gap-3">
              {methods.map((m) =>
              <li key={m.label}>
                  <a
                  href={m.href}
                  target={m.external ? '_blank' : undefined}
                  rel={m.external ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 rounded-3xl border p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  m.highlight ? 'border-jade/40 bg-jade-light' : 'border-line bg-white'}`
                  }>
                  
                    <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${m.highlight ? 'bg-jade text-ink' : 'bg-canvas text-brand'}`}>
                    
                      {m.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-muted">{m.label}</span>
                      <span className="block truncate text-lg font-extrabold tracking-tight text-ink">{m.value}</span>
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 text-ink/40 transition-[transform,color] duration-200 group-hover:rotate-45 group-hover:text-ink" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>

            <div className="relative isolate flex flex-1 flex-col overflow-hidden rounded-3xl bg-ink p-7 text-white">
              <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10 opacity-20" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-jade">
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-sm font-semibold text-white/60">Colombo office</h2>
              <address className="mt-2 text-xl font-bold not-italic leading-snug">{contact.address}</address>
              <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-sm text-white/70">
                  <ClockIcon className="h-4 w-4 text-jade" aria-hidden="true" /> Reply within one business day
                </p>
                <a
                  href={contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-jade hover:underline">
                  
                  Open in Maps <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>);

}