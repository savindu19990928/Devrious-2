import { useState } from 'react';
import type { FormEvent } from 'react';

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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';else
  if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.type === 'demo' && !values.system) errors.system = 'Please choose a system for the demo.';
  if (values.message.trim().length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  return errors;
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
    await new Promise((resolve) => window.setTimeout(resolve, 1100));
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  const reset = () => {
    setValues({ ...initial, message: '' });
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, submit, reset };
}