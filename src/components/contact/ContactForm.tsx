import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, MailIcon, MessageCircleIcon, RotateCcwIcon } from 'lucide-react';
import { budgetOptions, serviceOptions, useContactForm } from '../../hooks/useContactForm';
import { easeOut } from '../../utils/accent';

const inputClass =
'w-full rounded-2xl border bg-canvas/60 px-4 py-3.5 text-sm font-semibold text-ink transition-[border-color,box-shadow,background-color] duration-150 placeholder:font-medium placeholder:text-muted/80 focus:bg-white focus:outline-none focus:ring-4';

export function ContactForm() {
  const { values, errors, submitted, onChange, onSubmit, reset, mailtoHref, whatsappHref } = useContactForm();
  const reduce = useReducedMotion();

  const fieldClass = (key: keyof typeof values) =>
  `${inputClass} ${errors[key] ? 'border-[#E5484D] focus:ring-[#E5484D]/15' : 'border-line focus:border-jade focus:ring-jade/20'}`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-soft md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ?
        <motion.div
          key="success"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="flex min-h-[520px] flex-col items-start justify-center"
          role="status">
          
            <motion.span
            initial={reduce ? false : { scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-jade text-ink shadow-glow">
            
              <CheckIcon className="h-8 w-8" aria-hidden="true" />
            </motion.span>
            <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Your brief is ready, {values.name.split(' ')[0]}.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              One last step — choose how to send it. We’ve prepared your message so it opens ready to go in your email app or
              WhatsApp. We reply within one business day.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
              
                <MailIcon className="h-4 w-4" aria-hidden="true" /> Send via email
              </a>
              <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-150 hover:bg-violet hover:shadow-glow active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-deep focus-visible:ring-offset-2">
              
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" /> Send via WhatsApp
              </a>
            </div>
            <div className="mt-8 w-full rounded-2xl bg-canvas p-5">
              <p className="text-xs font-bold text-muted">Summary</p>
              <p className="mt-2 text-sm font-semibold text-ink">
                {values.service}
                {values.budget && ` · ${values.budget}`}
              </p>
              <p className="mt-1 line-clamp-3 text-sm text-muted">{values.description}</p>
            </div>
            <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors duration-150 hover:text-ink">
            
              <RotateCcwIcon className="h-4 w-4" aria-hidden="true" /> Start a new message
            </button>
          </motion.div> :

        <motion.form
          key="form"
          noValidate
          onSubmit={onSubmit}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.2, ease: easeOut }}
          aria-labelledby="form-heading">
          
            <h2 id="form-heading" className="text-2xl font-extrabold tracking-tight text-ink">
              Tell us about your project
            </h2>
            <p className="mt-2 text-sm text-muted">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name *" error={errors.name}>
                <input id="field-name" name="name" autoComplete="name" value={values.name} onChange={onChange} className={fieldClass('name')} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} />
              </Field>
              <Field id="email" label="Email address *" error={errors.email}>
                <input id="field-email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className={fieldClass('email')} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'error-email' : undefined} />
              </Field>
              <Field id="phone" label="Phone number" error={errors.phone}>
                <input id="field-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} className={fieldClass('phone')} placeholder="+94 7X XXX XXXX" />
              </Field>
              <Field id="company" label="Company name" error={errors.company}>
                <input id="field-company" name="company" autoComplete="organization" value={values.company} onChange={onChange} className={fieldClass('company')} placeholder="Company (optional)" />
              </Field>
              <Field id="service" label="Service required *" error={errors.service}>
                <select id="field-service" name="service" value={values.service} onChange={onChange} className={fieldClass('service')} aria-invalid={!!errors.service} aria-describedby={errors.service ? 'error-service' : undefined}>
                  <option value="">Choose a service</option>
                  {serviceOptions.map((o) =>
                <option key={o} value={o}>
                      {o}
                    </option>
                )}
                </select>
              </Field>
              <Field id="budget" label="Project budget" error={errors.budget}>
                <select id="field-budget" name="budget" value={values.budget} onChange={onChange} className={fieldClass('budget')}>
                  <option value="">Choose a range</option>
                  {budgetOptions.map((o) =>
                <option key={o} value={o}>
                      {o}
                    </option>
                )}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id="description" label="Project description *" error={errors.description}>
                  <textarea id="field-description" name="description" rows={5} value={values.description} onChange={onChange} className={`${fieldClass('description')} resize-y`} placeholder="What are you building, who is it for, and when do you need it?" aria-invalid={!!errors.description} aria-describedby={errors.description ? 'error-description' : undefined} />
                </Field>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-relaxed text-muted">
                Next, you’ll choose to send your brief by email or WhatsApp — nothing is sent until you do.
              </p>
              <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
              
                Prepare my brief
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}

function Field({ id, label, error, children }: {id: string;label: string;error?: string;children: ReactNode;}) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error &&
        <motion.p
          id={`error-${id}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.15, ease: easeOut }}
          className="mt-1.5 text-xs font-semibold text-[#C62F35]">
          
            {error}
          </motion.p>
        }
      </AnimatePresence>
    </div>);

}