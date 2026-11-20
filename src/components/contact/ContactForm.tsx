import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { AlertCircleIcon, ArrowRightIcon, CheckIcon, Loader2Icon, MailIcon, MessageCircleIcon, RotateCcwIcon } from 'lucide-react';
import { budgetOptions, serviceOptions, useContactForm } from '../../hooks/useContactForm';
import { products } from '../../data/products';
import { easeOut } from '../../utils/accent';

const inputClass =
  'w-full rounded-2xl border bg-canvas/60 px-4 py-3.5 text-sm font-semibold text-ink transition-[border-color,box-shadow,background-color] duration-150 placeholder:font-medium placeholder:text-muted/80 focus:bg-white focus:outline-none focus:ring-4';

export function ContactForm() {
  const {
    values,
    errors,
    status,
    submitted,
    selectedOption,
    isDemoIntent,
    onChange,
    onSubmit,
    reset,
    mailtoHref,
    whatsappHref
  } = useContactForm();
  const reduce = useReducedMotion();
  const submitting = status === 'submitting';
  const showProductSelect = values.service === 'Pre Built system';

  const fieldClass = (key: keyof typeof values) =>
    `${inputClass} ${errors[key] ? 'border-[#E5484D] focus:ring-[#E5484D]/15' : 'border-line focus:border-jade focus:ring-jade/20'}`;

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-white p-5 shadow-soft sm:rounded-[2rem] sm:p-7 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="success"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="flex min-h-[420px] flex-col items-start justify-center sm:min-h-[520px]"
            role="status">
            <motion.span
              initial={reduce ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-jade text-ink shadow-glow sm:h-16 sm:w-16">
              <CheckIcon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
            </motion.span>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-ink sm:mt-8 sm:text-3xl md:text-4xl">
              Enquiry sent, {values.name.trim().split(' ')[0]}.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
              We’ve received your message and will reply to <strong className="font-semibold text-ink">{values.email}</strong> within
              one business day. Need a quicker chat?
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-150 hover:bg-violet hover:shadow-glow active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-deep focus-visible:ring-offset-2 sm:py-4">
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 w-full rounded-2xl bg-canvas p-4 sm:mt-8 sm:p-5">
              <p className="text-xs font-bold text-muted">Summary</p>
              <p className="mt-2 text-sm font-semibold text-ink">
                {values.service}
                {selectedOption !== 'N/A' && ` · ${selectedOption}`}
              </p>
              <p className="mt-1 line-clamp-3 text-sm text-muted">{values.description}</p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors duration-150 hover:text-ink sm:mt-6">
              <RotateCcwIcon className="h-4 w-4" aria-hidden="true" /> Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.2, ease: easeOut }}
            aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Tell us about your project
            </h2>
            <p className="mt-1.5 text-xs text-muted sm:mt-2 sm:text-sm">Fields marked * are required.</p>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              <Field id="name" label="Full name *" error={errors.name}>
                <input
                  id="field-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  className={fieldClass('name')}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                />
              </Field>
              <Field id="email" label="Email address *" error={errors.email}>
                <input
                  id="field-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  className={fieldClass('email')}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
              </Field>
              <Field id="phone" label="Phone number" error={errors.phone}>
                <input
                  id="field-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={onChange}
                  className={fieldClass('phone')}
                  placeholder="+94 7X XXX XXXX"
                />
              </Field>
              <Field id="company" label="Company name" error={errors.company}>
                <input
                  id="field-company"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  onChange={onChange}
                  className={fieldClass('company')}
                  placeholder="Company (optional)"
                />
              </Field>
              <Field id="service" label="Service required *" error={errors.service}>
                <select
                  id="field-service"
                  name="service"
                  value={values.service}
                  onChange={onChange}
                  className={fieldClass('service')}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'error-service' : undefined}>
                  <option value="">Choose a service</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="budget" label="Project budget" error={errors.budget}>
                <select id="field-budget" name="budget" value={values.budget} onChange={onChange} className={fieldClass('budget')}>
                  <option value="">Choose a range</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              {showProductSelect && (
                <div className="sm:col-span-2">
                  <Field id="product" label="Pre Built system" error={errors.product}>
                    <select id="field-product" name="product" value={values.product} onChange={onChange} className={fieldClass('product')}>
                      <option value="">Choose a system (optional)</option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              )}
              <div className="sm:col-span-2">
                <Field id="description" label="Project description *" error={errors.description}>
                  <textarea
                    id="field-description"
                    name="description"
                    rows={5}
                    value={values.description}
                    onChange={onChange}
                    className={`${fieldClass('description')} resize-y`}
                    placeholder="What are you building, who is it for, and when do you need it?"
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'error-description' : undefined}
                  />
                </Field>
              </div>
            </div>

            {status === 'error' && (
              <div
                role="alert"
                className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#E5484D]/30 bg-[#E5484D]/10 p-4 text-sm text-ink">
                <p className="flex items-start gap-2.5 font-semibold">
                  <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C62F35]" aria-hidden="true" />
                  <span>We couldn’t send your enquiry right now. Please try again, or send it directly below.</span>
                </p>
                <div className="flex flex-wrap gap-3 pl-6">
                  <a href={mailtoHref} className="inline-flex items-center gap-1.5 font-bold text-ink underline hover:text-brand">
                    <MailIcon className="h-3.5 w-3.5" aria-hidden="true" /> Open email app
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-brand underline hover:text-ink">
                    <MessageCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> Send via WhatsApp
                  </a>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-relaxed text-muted">
                We reply within one business day — no spam, no automated sequences.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto sm:py-4">
                {submitting && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
                <span>{submitting ? 'Sending…' : isDemoIntent ? 'Request a demo' : 'Send enquiry'}</span>
                {!submitting && (
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`error-${id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: easeOut }}
            className="mt-1.5 text-xs font-semibold text-[#C62F35]">
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
