import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { FaqList } from '../components/common/FaqList';
import { ContactForm } from '../components/contact/ContactForm';
import { LocationMap } from '../components/contact/LocationMap';
import { Reveal } from '../components/motion/Reveal';
import { CONTACT, PORTAL_URL, SOCIAL_LINKS, STUDIO } from '../data/site';
import { CONTACT_FAQS } from '../data/faqs';
import { DUR, EASE, VIEWPORT } from '../utils/motion';

const NEXT_STEPS = [
{
  num: '01',
  title: 'We read it properly',
  copy: 'Your message goes straight to the people who would do the work — no sales filter in between.'
},
{
  num: '02',
  title: 'A first opinion, free',
  copy: 'You get a reply with our initial read on the problem and what we would explore first.'
},
{
  num: '03',
  title: 'A short call',
  copy: 'If it looks like a fit, we talk through the business, the constraints, and what a first phase could look like.'
}];


export function ContactPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={['Tell us what', "you're trying", 'to build.']}
        copy="Whether it is a defined project, a process that keeps breaking, or an idea with no shape yet — send it across and we will help you figure out the next step."
        index={[
        { label: 'Send a message', href: '#form' },
        { label: 'What happens next', href: '#next' },
        { label: 'Client portal', href: '#portal' },
        { label: 'Questions', href: '#contact-faqs' }]
        }
        stats={[
        { value: 'Direct', label: 'Reply from the team' },
        { value: 'Free', label: 'First opinion' },
        { value: 'NDA', label: 'On request' },
        { value: 'LK · AE', label: 'Where we work' }]
        } />
      

      <section id="form" className="w-full scroll-mt-28 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <h2 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold uppercase leading-[0.95] tracking-tightest text-paper">
                  Or reach us
                  <br />
                  directly.
                </h2>

                <ul className="mt-8 border-t border-white/12">
                  <li className="border-b border-white/12">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group flex items-center gap-4 py-5 transition-colors duration-150 ease-out hover:text-accent">
                      
                      <MailIcon className="h-5 w-5 text-ash" aria-hidden="true" />
                      <span className="font-display text-lg font-semibold tracking-tight text-paper group-hover:text-accent">
                        {CONTACT.email}
                      </span>
                      <ArrowUpRightIcon
                        className="ml-auto h-4 w-4 text-ash transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true" />
                      
                    </a>
                  </li>
                  <li className="border-b border-white/12">
                    <a
                      href={`tel:${CONTACT.phoneHref}`}
                      className="group flex items-center gap-4 py-5 transition-colors duration-150 ease-out hover:text-accent">
                      
                      <PhoneIcon className="h-5 w-5 text-ash" aria-hidden="true" />
                      <span className="font-display text-lg font-semibold tracking-tight text-paper group-hover:text-accent">
                        {CONTACT.phone}
                      </span>
                      <ArrowUpRightIcon
                        className="ml-auto h-4 w-4 text-ash transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true" />
                      
                    </a>
                  </li>
                  <li className="border-b border-white/12">
                    <a
                      href={STUDIO.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 py-5 transition-colors duration-150 ease-out hover:text-accent">
                      
                      <MapPinIcon className="h-5 w-5 shrink-0 text-ash" aria-hidden="true" />
                      <span className="font-display text-lg font-semibold tracking-tight text-paper group-hover:text-accent">
                        {STUDIO.city}, {STUDIO.country}
                      </span>
                      <ArrowUpRightIcon
                        className="ml-auto h-4 w-4 shrink-0 text-ash transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true" />
                      
                    </a>
                  </li>
                  <li className="flex items-center gap-4 border-b border-white/12 py-5">
                    <ClockIcon className="h-5 w-5 shrink-0 text-ash" aria-hidden="true" />
                    <span className="text-[15px] text-paper/80">
                      {STUDIO.hours} ({STUDIO.timezone})
                    </span>
                  </li>
                </ul>

                <LocationMap className="mt-8" />

                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                    Follow
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {SOCIAL_LINKS.map((social) =>
                    <li key={social.label}>
                        <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-display text-[13px] font-medium text-paper/80 transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                        
                          {social.label}
                          <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="next" className="w-full scroll-mt-28 bg-paper py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            tone="light"
            eyebrow="What happens next"
            lines={['No black box.']}
            copy="Three steps between your message and a plan you can act on." />
          

          <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {NEXT_STEPS.map((step, i) =>
            <motion.li
              key={step.num}
              className="border-t border-ink/15 pt-6"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE, delay: i * 0.05 }}>
              
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                  {step.num}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/65">{step.copy}</p>
              </motion.li>
            )}
          </ol>
        </div>
      </section>

      <section id="portal" className="w-full scroll-mt-28 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/12 bg-graphite p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Existing clients
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,5vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tightest text-paper">
                Your project,
                <br />
                open any time.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ash">
                Progress, decisions, releases, documents, and invoices in one shared
                workspace — so you never have to ask for a status update.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-between gap-6 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5">
                
                Open Client Portal
                <ArrowUpRightIcon
                  className="h-5 w-5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true" />
                
              </a>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                Opens in a new tab
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-faqs"
        className="w-full scroll-mt-28 border-t border-white/10 bg-ink py-14 md:py-20">
        
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" lines={['Before you', 'write.']} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList faqs={CONTACT_FAQS} />
            </div>
          </div>
        </div>
      </section>
    </>);

}