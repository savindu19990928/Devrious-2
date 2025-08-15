'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import StorySection from './StorySection';
import TeamValues from './TeamValues';
import ExpertiseAreas from './ExpertiseAreas';
import TeamStats from './TeamStats';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <StorySection />
      <TeamValues />
      <ExpertiseAreas />
      <TeamStats />
      <AboutCTA />
      <Footer />
    </div>
  );
}