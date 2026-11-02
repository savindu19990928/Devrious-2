import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const PreBuilds = lazy(() => import('./pages/PreBuilds').then((m) => ({ default: m.PreBuilds })));
const PreBuildDetail = lazy(() => import('./pages/PreBuildDetail').then((m) => ({ default: m.PreBuildDetail })));
const Portfolio = lazy(() => import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity').then((m) => ({ default: m.Cybersecurity })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pre-builds" element={<PreBuilds />} />
              <Route path="/pre-builds/:slug" element={<PreBuildDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/cybersecurity-services" element={<Cybersecurity />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Legal doc="terms" />} />
              <Route path="/terms-and-conditions" element={<Legal doc="terms" />} />
              <Route path="/privacy" element={<Legal doc="privacy" />} />
              <Route path="/privacy-policy" element={<Legal doc="privacy" />} />
              <Route path="/refund" element={<Legal doc="refund" />} />
              <Route path="/refund-policy" element={<Legal doc="refund" />} />
              <Route path="/cancellation-refund" element={<Legal doc="refund" />} />
              <Route path="/cookies" element={<Legal doc="cookies" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CurrencyProvider>
  );
}