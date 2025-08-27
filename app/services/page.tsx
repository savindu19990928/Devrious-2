
'use client';

import ServiceHero from './ServiceHero';
import ServicesGrid from './ServicesGrid';
import ProcessSection from './ProcessSection';
import TechnologyStack from './TechnologyStack';
import ServiceCTA from './ServiceCTA';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
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
        <ServiceHero />
      </div>
      <div data-section="grid" className={`transform transition-all duration-1000 delay-200 ${visibleSections.has('grid') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ServicesGrid />
      </div>
      <div data-section="process" className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('process') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ProcessSection />
      </div>
      <div data-section="tech" className={`transform transition-all duration-1000 delay-400 ${visibleSections.has('tech') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <TechnologyStack />
      </div>
      <div data-section="cta" className={`transform transition-all duration-1000 delay-500 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ServiceCTA />
      </div>
    </div>
  );
}
