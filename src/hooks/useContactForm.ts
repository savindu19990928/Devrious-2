import { useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import { products } from '../data/products';
import { contact } from '../data/devrious';

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const serviceOptions = [...services.map((s) => s.title), 'Pre Build system', 'Cybersecurity services', 'Not sure yet'];

export const budgetOptions = [
'Under LKR 100,000',
'LKR 100,000 – 250,000',
'LKR 250,000 – 500,000',
'LKR 500,000+',
'Not sure yet'];


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const [params] = useSearchParams();
  const initial = useMemo<ContactValues>(() => {
    const product = products.find((p) => p.slug === params.get('product'));
    const service = services.find((s) => s.slug === params.get('service'));
    const intent = params.get('intent');
    let description = '';
    if (product) {
      description =
      intent === 'quote' ?
      `I'd like a quote for the ${product.name}.` :
      `I'd like to request a demo of the ${product.name}.`;
    } else if (intent === 'demo') {
      description = "I'd like to request a demo of a Pre Build system.";
    } else if (intent === 'quote') {
      description = "I'd like a quote for a Pre Build system.";
    }
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: service?.title ?? (product || intent ? 'Pre Build system' : ''),
      budget: '',
      description
    };
  }, [params]);

  const [values, setValues] = useState<ContactValues>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof ContactValues]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = (v: ContactValues): ContactErrors => {
    const next: ContactErrors = {};
    if (!v.name.trim()) next.name = 'Please enter your name.';
    if (!emailPattern.test(v.email.trim())) next.email = 'Please enter a valid email address.';
    if (!v.service) next.service = 'Please choose a service.';
    if (v.description.trim().length < 20) next.description = 'Tell us a little more — at least 20 characters.';
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
  };

  const message = [
  `Name: ${values.name}`,
  `Email: ${values.email}`,
  values.phone ? `Phone: ${values.phone}` : null,
  values.company ? `Company: ${values.company}` : null,
  `Service: ${values.service}`,
  values.budget ? `Budget: ${values.budget}` : null,
  '',
  values.description].

  filter((line): line is string => line !== null).
  join('\n');

  const subject = `Project enquiry — ${values.service || 'General'}${values.company ? ` · ${values.company}` : ''}`;
  const mailtoHref = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const whatsappHref = `${contact.whatsappHref}?text=${encodeURIComponent(`Hi Devrious,\n\n${message}`)}`;

  return { values, errors, submitted, onChange, onSubmit, reset, mailtoHref, whatsappHref };
}