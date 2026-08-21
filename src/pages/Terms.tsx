import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';
import { TERMS_SECTIONS } from '../data/legal';

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Terms"
      lines={['Terms &', 'conditions.']}
      copy="How this website may be used, and the terms that sit behind an engagement with Devrious before a signed agreement takes over."
      sections={TERMS_SECTIONS}
      current="/terms" />);


}