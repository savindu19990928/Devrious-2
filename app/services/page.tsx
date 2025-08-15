
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from './ServiceHero';
import ServicesGrid from './ServicesGrid';
import ProcessSection from './ProcessSection';
import TechnologyStack from './TechnologyStack';
import ServiceCTA from './ServiceCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero />
      <ServicesGrid />
      <ProcessSection />
      <TechnologyStack />
      <ServiceCTA />
      <Footer />
    </div>
  );
}
