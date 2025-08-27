
'use client';

import PortfolioHero from './PortfolioHero';
import WebProjectsGrid from './WebProjectsGrid';
import ServiceCapabilities from './ServiceCapabilities';
import PortfolioCTA from './PortfolioCTA';
import { useEffect, useState } from 'react';

export default function PortfolioPage() {
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
        <PortfolioHero />
      </div>
      <div data-section="projects" className={`transform transition-all duration-1000 delay-200 ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <WebProjectsGrid />
      </div>
      <div data-section="capabilities" className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('capabilities') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ServiceCapabilities />
      </div>
      <div data-section="cta" className={`transform transition-all duration-1000 delay-400 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <PortfolioCTA />
      </div>
    </div>
  );
}
