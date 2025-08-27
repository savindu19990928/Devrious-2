
'use client';

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactCTA from './ContactCTA';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setVisibleSections(prev => new Set([...prev, sectionName]));
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div data-section="hero" className={`transform transition-all duration-1000 ${visibleSections.has('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ContactHero />
      </div>
      <div data-section="form" className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transform transition-all duration-1000 delay-200 ${visibleSections.has('form') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ContactForm />
        <ContactInfo />
      </div>
      <div data-section="cta" className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ContactCTA />
      </div>
    </div>
  );
}
