import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SocialIcon } from '../components/SocialIcon';
import { company, socials } from '../data/site';
import { preBuilds } from '../data/preBuilds';
import { cyberPackages } from '../data/cyberPackages';
import { services } from '../data/services';
import { useContactForm } from '../hooks/useContactForm';
import type { ContactValues, InquiryType } from '../hooks/useContactForm';
import { usePageTitle } from '../hooks/usePageTitle';

const inquiryOptions: {value: InquiryType;label: string;}[] = [
{ value: 'project', label: 'Start a custom project' },
{ value: 'demo', label: 'Request for Demo' },
{ value: 'cyber', label: 'Cybersecurity services' },
{ value: 'general', label: 'General question' }];


const inputClass =
'mt-1.5 block w-full rounded-lg border-0 bg-ink-50 px-3.5 py-2.5 text-ink-950 ring-1 ring-inset ring-ink-200 placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-500';

export function Contact() {
  usePageTitle('Contact Us for Software Development & Demos', {
    description:
      'Contact Devrious in Maharagama, Colombo, Sri Lanka. Reach out by phone (+94 70 661 1936), email (info@devrious.lk), or request a demo for custom software and pre-built solutions.',
    canonicalPath: '/contact',
  });
  const [params] = useSearchParams();

  const initial = useMemo<ContactValues>(() => {
    const demo = params.get('demo') ?? '';
    const topic = params.get('topic');
    const system = params.get('system') ?? '';
    const customSystem = preBuilds.find((p) => p.slug === system);
    let type: InquiryType = 'project';
    if (demo) type = 'demo';else
    if (topic === 'cyber') type = 'cyber';
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      type,
      system: demo,
      pkg: params.get('package') ?? '',
      service: params.get('service') ?? '',
      message: topic === 'custom' && customSystem ? `I'm interested in a custom build based on the ${customSystem.name}.` : ''
    };
  }, [params]);

  const { values, errors, status, setField, submit, reset } = useContactForm(initial);

  return (
    <div className="bg-canvas">
      <header className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold text-brand-700">Contact</p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">Let’s talk about your project</h1>
          <p className="mt-5 max-w-2xl text-base text-ink-600 sm:text-lg">
            Request a demo, ask for a quote or just tell us what you’re trying to solve. We reply within one business day.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:px-8">
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="sr-only">Contact form</h2>
          {status === 'success' ?
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8" role="status">
              <CheckCircle2Icon className="h-8 w-8 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-bold text-ink-950">Thank you, {values.name.split(' ')[0]}.</h3>
              <p className="mt-2 text-ink-700">
                Your message has been received. We’ll reply to <strong>{values.email}</strong> within one business day. For anything urgent, message us on WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-canvas hover:bg-brand-400">
                  <SocialIcon name="whatsapp" className="h-4 w-4" /> WhatsApp us
                </a>
                <button type="button" onClick={reset} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 hover:bg-ink-100">
                  Send another message
                </button>
              </div>
            </div> :

          <form onSubmit={submit} noValidate className="space-y-6">
              <fieldset>
                <legend className="text-sm font-semibold text-ink-950">How can we help?</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {inquiryOptions.map((o) => {
                  const checked = values.type === o.value;
                  return (
                    <label
                      key={o.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ring-1 transition-colors duration-150 ${
                      checked ? 'bg-brand-50 text-ink-950 ring-brand-500' : 'text-ink-700 ring-ink-200 hover:bg-ink-50'}`
                      }>
                      
                        <input
                        type="radio"
                        name="type"
                        value={o.value}
                        checked={checked}
                        onChange={() => setField('type', o.value)}
                        className="h-4 w-4 accent-brand-600" />
                      
                        {o.label}
                      </label>);

                })}
                </div>
              </fieldset>

              {values.type === 'demo' &&
            <Field id="system" label="Which system would you like a demo of?" error={errors.system}>
                  <select id="field-system" value={values.system} onChange={(e) => setField('system', e.target.value)} className={inputClass} aria-invalid={!!errors.system}>
                    <option value="">Choose a system</option>
                    {preBuilds.map((p) =>
                <option key={p.slug} value={p.slug}>{p.name}</option>
                )}
                  </select>
                </Field>
            }

              {values.type === 'cyber' &&
            <Field id="pkg" label="Package of interest (optional)">
                  <select id="field-pkg" value={values.pkg} onChange={(e) => setField('pkg', e.target.value)} className={inputClass}>
                    <option value="">Not sure yet — help me choose</option>
                    {cyberPackages.map((p) =>
                <option key={p.id} value={p.id}>{p.name}</option>
                )}
                  </select>
                </Field>
            }

              {values.type === 'project' &&
            <Field id="service" label="Service (optional)">
                  <select id="field-service" value={values.service} onChange={(e) => setField('service', e.target.value)} className={inputClass}>
                    <option value="">Not sure yet</option>
                    {services.map((s) =>
                <option key={s.id} value={s.id}>{s.name}</option>
                )}
                  </select>
                </Field>
            }

              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Full name" required error={errors.name}>
                  <input id="field-name" type="text" autoComplete="name" value={values.name} onChange={(e) => setField('name', e.target.value)} className={inputClass} aria-invalid={!!errors.name} />
                </Field>
                <Field id="email" label="Email" required error={errors.email}>
                  <input id="field-email" type="email" autoComplete="email" value={values.email} onChange={(e) => setField('email', e.target.value)} className={inputClass} aria-invalid={!!errors.email} />
                </Field>
                <Field id="phone" label="Phone / WhatsApp">
                  <input id="field-phone" type="tel" autoComplete="tel" placeholder="+94 7X XXX XXXX" value={values.phone} onChange={(e) => setField('phone', e.target.value)} className={inputClass} />
                </Field>
                <Field id="company" label="Company">
                  <input id="field-company" type="text" autoComplete="organization" value={values.company} onChange={(e) => setField('company', e.target.value)} className={inputClass} />
                </Field>
              </div>

              <Field id="message" label="Message" required error={errors.message}>
                <textarea id="field-message" rows={5} value={values.message} onChange={(e) => setField('message', e.target.value)} className={inputClass} aria-invalid={!!errors.message} placeholder="Tell us about your business and what you need." />
              </Field>

              {status === 'error' &&
            <p className="flex items-start gap-2 rounded-lg bg-coral-500/10 px-4 py-3 text-sm text-ink-900" role="alert">
                  <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral-500" aria-hidden="true" />
                  We couldn’t send your message. Check your connection and try again, or email us at {company.email}.
                </p>
            }

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-500">By sending, you agree to our Privacy Policy.</p>
                <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-70">
                
                  {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {status === 'submitting' ? 'Sending…' : values.type === 'demo' ? 'Request for Demo' : 'Send message'}
                </button>
              </div>
            </form>
          }
        </section>

        <aside className="space-y-8">
          <div className="band rounded-2xl bg-ink-950 p-6 text-ink-200 ring-1 ring-white/5 sm:p-7">
            <h2 className="font-display text-lg font-bold text-white">Contact details</h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  <a href={company.phoneHref} className="font-semibold text-white hover:text-brand-300">{company.phoneDisplay}</a>
                  <span className="block text-ink-400">Main line · WhatsApp available</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="font-semibold text-white hover:text-brand-300">{company.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {company.addressLines.map((l) =>
                  <span key={l} className="block">{l}</span>
                  )}
                </address>
              </li>
            </ul>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-ink-950 hover:bg-brand-400">
              
              <SocialIcon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <div className="mt-6 flex gap-2 border-t border-white/10 pt-6">
              {socials.map((s) =>
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:text-white">
                
                  <SocialIcon name={s.name} className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-200">
            <iframe
              title="Devrious office location on Google Maps"
              src={company.mapEmbed}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
            <a href={company.mapLink} target="_blank" rel="noreferrer" className="block border-t border-ink-200 px-4 py-3 text-sm font-semibold text-brand-700 hover:bg-ink-50">
              Open in Google Maps
            </a>
          </div>
        </aside>
      </div>
    </div>);

}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="block text-sm font-medium text-ink-900">
        {label}
        {required && <span className="text-coral-700"> *</span>}
      </label>
      {children}
      {error &&
      <p className="mt-1.5 text-sm text-coral-700" role="alert">
          {error}
        </p>
      }
    </div>);

}