import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { preBuilds } from '../data/preBuilds';
import { cyberPackages } from '../data/cyberPackages';
import { services } from '../data/services';

export type InquiryType = 'project' | 'demo' | 'cyber' | 'general';

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: InquiryType;
  system: string;
  pkg: string;
  service: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error';

export const INQUIRY_LABELS: Record<InquiryType, string> = {
  project: 'Start a custom project',
  demo: 'Request for Demo',
  cyber: 'Cybersecurity services',
  general: 'General question'
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.type === 'demo' && !values.system) errors.system = 'Please choose a system for the demo.';
  if (values.message.trim().length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  return errors;
}

export function getSelectedOption(values: ContactValues): string {
  if (values.type === 'demo' && values.system) {
    const item = preBuilds.find((p) => p.slug === values.system);
    return item ? item.name : values.system;
  }
  if (values.type === 'cyber' && values.pkg) {
    const item = cyberPackages.find((p) => p.id === values.pkg);
    return item ? item.name : values.pkg;
  }
  if (values.type === 'project' && values.service) {
    const item = services.find((s) => s.id === values.service);
    return item ? item.name : values.service;
  }
  return 'N/A';
}

export function useContactForm(initial: ContactValues) {
  const [values, setValues] = useState<ContactValues>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');

  const setField = <K extends keyof ContactValues,>(key: K, value: ContactValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }

    setStatus('submitting');

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('Network offline');
      }

      const selectedOption = getSelectedOption(values);
      const service = INQUIRY_LABELS[values.type] || values.type || 'N/A';

      const templateParams = {
        service,
        selected_option: selectedOption,
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || 'N/A',
        company: values.company.trim() || 'N/A',
        message: values.message.trim() || 'N/A',
        // Common template aliases
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        reply_to: values.email.trim()
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.templateId,
          user_id: EMAILJS_CONFIG.publicKey,
          accessToken: EMAILJS_CONFIG.privateKey,
          template_params: templateParams
        })
      });

      if (!response.ok) {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams,
          EMAILJS_CONFIG.publicKey
        );
      }

      setStatus('success');
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ ...initial, message: '' });
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, submit, reset };
}