import type { Policy } from '../../types/legal';
import { privacyPolicyBody } from './privacyPolicy';
import { termsAndConditionsBody } from './termsAndConditions';
import { refundPolicyBody } from './refundPolicy';
import { cookiePolicyBody } from './cookiePolicy';

export const policies: Policy[] = [
{
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  navLabel: 'Privacy Policy',
  summary: 'How Devrious collects, uses, stores and protects personal information when you visit devrious.lk or work with us.',
  lastUpdated: 'November 2, 2026',
  body: privacyPolicyBody
},
{
  slug: 'terms-and-conditions',
  title: 'Terms and Conditions',
  navLabel: 'Terms & Conditions',
  summary: 'The terms that govern your use of devrious.lk and the products and services provided by Devrious.',
  lastUpdated: 'November 2, 2026',
  body: termsAndConditionsBody
},
{
  slug: 'refund-policy',
  title: 'Refund and Cancellation Policy',
  navLabel: 'Refund Policy',
  summary: 'When refunds, cancellations and other remedies apply — including the 14-day refund period for eligible prebuilt systems.',
  lastUpdated: 'November 2, 2026',
  body: refundPolicyBody
},
{
  slug: 'cookie-policy',
  title: 'Cookie Policy',
  navLabel: 'Cookie Policy',
  summary: 'What cookies are, how our website uses them, and how you can manage them in your browser.',
  lastUpdated: 'October 8, 2026',
  body: cookiePolicyBody
}];