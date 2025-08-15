'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './PortfolioHero';
import WebProjectsGrid from './WebProjectsGrid';
import ServiceCapabilities from './ServiceCapabilities';
import PortfolioCTA from './PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioHero />
      <WebProjectsGrid />
      <ServiceCapabilities />
      <PortfolioCTA />
      <Footer />
    </div>
  );
}