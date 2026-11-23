import { useEffect, useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { services } from '../data/services';
import { cyberSecurityServices } from '../data/cyberSecurity';
import { products } from '../data/products';
import { contact } from '../data/devrious';

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  product: string;
  budget: string;
  description: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error';

export const serviceOptions = [...services.map((s) => s.title), 'Pre Built system', 'Cyber Security Services', 'Not sure yet'];

export const budgetOptions = [
  'Under LKR 100,000',
  'LKR 100,000 – 250,000',
  'LKR 250,000 – 500,000',
  'LKR 500,000+',
  'Not sure yet'
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSelectedOption(values: ContactValues, intent: string | null): string {
  const parts: string[] = [];
  if (values.service === 'Pre Built system' && values.product) {
    const matched = products.find((p) => p.slug === values.product || p.name === values.product);
    parts.push(matched ? matched.name : values.product);
  }
  if (intent === 'demo') parts.push('Request a demo');
  else if (intent === 'quote') parts.push('Request a quote');
  if (values.budget) parts.push(values.budget);
  return parts.length > 0 ? parts.join(' · ') : 'N/A';
}

export function useContactForm() {
  const [params] = useSearchParams();
  const intent = params.get('intent');

  const initial = useMemo<ContactValues>(() => {
    const product = products.find((p) => p.slug === params.get('product'));
    const serviceParam = params.get('service');
    const service = services.find((s) => s.slug === serviceParam);
    const cyberService = cyberSecurityServices.find((s) => s.slug === serviceParam);
    const isCyberQuery = serviceParam === 'cyber-security' || Boolean(cyberService);
    let description = '';
    if (product) {
      description =
        intent === 'quote'
          ? `I'd like a quote for the ${product.name}.`
          : `I'd like to request a demo of the ${product.name}.`;
    } else if (cyberService) {
      description = `I'd like to discuss ${cyberService.title}.`;
    } else if (serviceParam === 'cyber-security') {
      description = "I'd like to request a Cyber Security assessment.";
    } else if (intent === 'demo') {
      description = "I'd like to request a demo of a Pre Built system.";
    } else if (intent === 'quote') {
      description = "I'd like a quote for a Pre Built system.";
    }
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: service?.title ?? (isCyberQuery ? 'Cyber Security Services' : product || intent ? 'Pre Built system' : ''),
      product: product?.slug ?? '',
      budget: '',
      description
    };
  }, [params, intent]);

  const [values, setValues] = useState<ContactValues>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');

  useEffect(() => {
    setValues(initial);
    setErrors({});
    setStatus('idle');
  }, [initial]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({
      ...v,
      [name]: value,
      ...(name === 'service' && value !== 'Pre Built system' ? { product: '' } : {})
    }));
    if (errors[name as keyof ContactValues]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const validate = (v: ContactValues): ContactErrors => {
    const next: ContactErrors = {};
    if (!v.name.trim()) next.name = 'Please enter your name.';
    if (!emailPattern.test(v.email.trim())) next.email = 'Please enter a valid email address.';
    if (!v.service) next.service = 'Please choose a service.';
    if (v.description.trim().length < 10) next.description = 'Tell us a little more — at least 10 characters.';
    return next;
  };

  const selectedOption = getSelectedOption(values, intent);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setStatus('submitting');

    const templateParams = {
      service: values.service || 'N/A',
      selected_option: selectedOption,
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || 'N/A',
      company: values.company.trim() || 'N/A',
      message: values.description.trim(),
      from_name: values.name.trim(),
      from_email: values.email.trim(),
      reply_to: values.email.trim()
    };

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('Network offline');
      }

      try {
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, {
          publicKey: EMAILJS_CONFIG.publicKey
        });
      } catch (sdkErr) {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: EMAILJS_CONFIG.serviceId,
            template_id: EMAILJS_CONFIG.templateId,
            user_id: EMAILJS_CONFIG.publicKey,
            accessToken: EMAILJS_CONFIG.privateKey,
            template_params: templateParams
          })
        });
        if (!res.ok) {
          throw sdkErr;
        }
      }

      setStatus('success');
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus('idle');
  };

  const message = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.company ? `Company: ${values.company}` : null,
    `Service: ${values.service}`,
    selectedOption !== 'N/A' ? `Selection: ${selectedOption}` : null,
    '',
    values.description
  ]
    .filter((line): line is string => line !== null)
    .join('\n');

  const subject = `Project enquiry — ${values.service || 'General'}${values.company ? ` · ${values.company}` : ''}`;
  const mailtoHref = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const whatsappHref = `${contact.whatsappHref}?text=${encodeURIComponent(`Hi Devrious,\n\n${message}`)}`;

  return {
    values,
    errors,
    status,
    submitted: status === 'success',
    selectedOption,
    isDemoIntent: intent === 'demo',
    onChange,
    onSubmit,
    reset,
    mailtoHref,
    whatsappHref
  };
}
