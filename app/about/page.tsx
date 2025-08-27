
'use client';

import AboutHero from './AboutHero';
import StorySection from './StorySection';
import TeamValues from './TeamValues';
import ExpertiseAreas from './ExpertiseAreas';
import TeamStats from './TeamStats';
import AboutCTA from './AboutCTA';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
        <AboutHero />
      </div>
      <div data-section="story" className={`transform transition-all duration-1000 delay-200 ${visibleSections.has('story') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <StorySection />
      </div>
      <div data-section="values" className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <TeamValues />
      </div>
      <div data-section="expertise" className={`transform transition-all duration-1000 delay-400 ${visibleSections.has('expertise') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ExpertiseAreas />
      </div>
      <div data-section="stats" className={`transform transition-all duration-1000 delay-500 ${visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <TeamStats />
      </div>
      <div data-section="cta" className={`transform transition-all duration-1000 delay-600 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <AboutCTA />
      </div>
    </div>
  );
}
