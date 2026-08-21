import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';
import { PRIVACY_SECTIONS } from '../data/legal';

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      lines={['Privacy', 'policy.']}
      copy="What we collect, why we collect it, and what you can ask us to do with it. Written to be read, not to be survived."
      sections={PRIVACY_SECTIONS}
      current="/privacy" />);


}