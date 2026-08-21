import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { DUR, EASE } from '../../utils/motion';

type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const BUDGETS = [
'Not sure yet',
'Under $5k',
'$5k – $15k',
'$15k – $40k',
'$40k+',
'Ongoing retainer'];


const EMPTY: Fields = {
  name: '',
  email: '',
  company: '',
  service: SERVICES[0].title,
  budget: BUDGETS[0],
  message: ''
};

const inputClass =
'w-full rounded-xl border border-white/15 bg-ink px-4 py-3.5 text-[15px] text-paper placeholder:text-ash transition-colors duration-150 ease-out focus:border-accent focus:outline-none';
const labelClass =
'mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ash';

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = 'Enter a valid email address.';
    if (fields.message.trim().length < 12) next.message = 'A sentence or two about the problem helps.';

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        className="flex h-full flex-col justify-center rounded-2xl border border-accent bg-accent/[0.07] p-8 md:p-12"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DUR.slow, ease: EASE }}>
        
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent">
          <CheckIcon className="h-7 w-7 text-ink" aria-hidden="true" />
        </span>
        <h3 className="mt-8 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold uppercase leading-none tracking-tightest text-paper">
          Message received.
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
          Thanks {fields.name.split(' ')[0]} — we read every enquiry ourselves and reply
          personally, usually with a first opinion attached.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSent(false);
          }}
          className="mt-8 inline-flex w-fit items-center gap-2 font-display text-sm font-semibold text-paper transition-colors duration-150 ease-out hover:text-accent">
          
          Send another message
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </motion.div>);

  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-2xl border border-white/12 bg-graphite p-6 md:p-9">
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your name *
          </label>
          <input
            id="name"
            className={inputClass}
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Amaya Perera"
            aria-invalid={Boolean(errors.name)} />
          
          {errors.name && <p className="mt-2 text-[13px] text-coral">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)} />
          
          {errors.email && <p className="mt-2 text-[13px] text-coral">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className={inputClass}
            value={fields.company}
            onChange={(e) => update('company', e.target.value)}
            placeholder="Optional" />
          
        </div>

        <div>
          <label className={labelClass} htmlFor="budget">
            Budget range
          </label>
          <select
            id="budget"
            className={inputClass}
            value={fields.budget}
            onChange={(e) => update('budget', e.target.value)}>
            
            {BUDGETS.map((budget) =>
            <option key={budget} value={budget} className="bg-ink">
                {budget}
              </option>
            )}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="service">
            What do you need?
          </label>
          <select
            id="service"
            className={inputClass}
            value={fields.service}
            onChange={(e) => update('service', e.target.value)}>
            
            {SERVICES.map((service) =>
            <option key={service.num} value={service.title} className="bg-ink">
                {service.title}
              </option>
            )}
            <option value="Not sure yet" className="bg-ink">
              Not sure yet
            </option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            What are you trying to build, improve, or solve? *
          </label>
          <textarea
            id="message"
            rows={5}
            className={`${inputClass} resize-none`}
            value={fields.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="The workflow that is slowing you down, the system you outgrew, or the idea you want built."
            aria-invalid={Boolean(errors.message)} />
          
          {errors.message &&
          <p className="mt-2 text-[13px] text-coral">{errors.message}</p>
          }
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ash">
          A person reads every message. NDA on request.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-[15px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-graphite">
          
          Send message
          <ArrowUpRightIcon
            className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true" />
          
        </button>
      </div>
    </form>);

}