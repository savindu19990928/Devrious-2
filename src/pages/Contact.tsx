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
  {
    label: 'WhatsApp',
    value: 'Fastest reply',
    href: contact.whatsappHref,
    icon: <MessageCircleIcon className="h-5 w-5" />,
    external: true,
    highlight: true
  },
  { label: 'Email', value: contact.email, href: contact.emailHref, icon: <MailIcon className="h-5 w-5" /> },
  { label: 'Phone', value: contact.phone, href: contact.phoneHref, icon: <PhoneIcon className="h-5 w-5" /> }
];

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
        description="Tell us about your idea. Let's turn it into something real."
      />

      <section aria-label="Contact Devrious" className="bg-canvas pb-16 sm:pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-4 lg:col-span-5">
            <ul className="flex flex-col gap-3">
              {methods.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target={m.external ? '_blank' : undefined}
                    rel={m.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-3.5 rounded-3xl border p-4 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:gap-4 sm:p-5 ${
                      m.highlight ? 'border-jade/40 bg-jade-light' : 'border-line bg-white'
                    }`}>
                    <span
                      aria-hidden="true"
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${
                        m.highlight ? 'bg-jade text-ink' : 'bg-canvas text-brand'
                      }`}>
                      {m.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-muted sm:text-sm">{m.label}</span>
                      <span className="block truncate text-base font-extrabold tracking-tight text-ink sm:text-lg">{m.value}</span>
                    </span>
                    <ArrowUpRightIcon
                      className="h-5 w-5 shrink-0 text-ink/40 transition-[transform,color] duration-200 group-hover:rotate-45 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative isolate flex flex-1 flex-col overflow-hidden rounded-3xl bg-ink p-5 text-white sm:p-7">
              <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10 opacity-20" />
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-jade sm:h-12 sm:w-12">
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xs font-semibold text-white/60 sm:mt-6 sm:text-sm">Colombo office</h2>
              <address className="mt-1.5 text-lg font-bold not-italic leading-snug sm:mt-2 sm:text-xl">{contact.address}</address>
              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
                <p className="flex items-center gap-2 text-xs text-white/70 sm:text-sm">
                  <ClockIcon className="h-4 w-4 shrink-0 text-jade" aria-hidden="true" /> Reply within one business day
                </p>
                <a
                  href={contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold text-jade hover:underline sm:text-sm">
                  Open in Maps <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
