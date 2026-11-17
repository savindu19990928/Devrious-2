import { PageTransition } from '../components/layout/PageTransition';
import { HomeHero } from '../components/home/HomeHero';
import { AboutIntro } from '../components/home/AboutIntro';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { Testimonials } from '../components/sections/Testimonials';
import { Statistics } from '../components/sections/Statistics';
import { TechStack } from '../components/sections/TechStack';
import { Difference } from '../components/home/Difference';
import { Industries } from '../components/home/Industries';
import { VisualShowcase } from '../components/home/VisualShowcase';
import { LiveDemo } from '../components/home/LiveDemo';
import { CtaBanner } from '../components/sections/CtaBanner';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta(
    'Devrious — Distinctive design, built around your business',
    'Devrious designs and builds design-led websites, business systems and AI tools for established brands. Colombo, Sri Lanka.'
  );
  return (
    <PageTransition>
      <HomeHero />
      <AboutIntro />
      <ServicesShowcase />
      <Testimonials />
      <Statistics />
      <TechStack />
      <Difference />
      <Industries />
      <VisualShowcase />
      <LiveDemo />
      <CtaBanner />
    </PageTransition>);

}