import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { BrandStatement } from '../components/BrandStatement';
import { Services } from '../components/Services';
import { BuiltAround } from '../components/BuiltAround';
import { Process } from '../components/Process';
import { Work } from '../components/Work';
import { Results } from '../components/Results';
import { AISection } from '../components/AISection';
import { CapabilityGrid } from '../components/home/CapabilityGrid';
import { About } from '../components/About';
import { WhyDevrious } from '../components/WhyDevrious';
import { CTASection } from '../components/CTASection';

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandStatement />
      <Services />
      <BuiltAround />
      <Process />
      <Work />
      <Results />
      <AISection />
      <CapabilityGrid />
      <About />
      <WhyDevrious />
      <CTASection />
    </>);

}