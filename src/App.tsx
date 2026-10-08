import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { PreBuilds } from './pages/PreBuilds';
import { PreBuildDetail } from './pages/PreBuildDetail';
import { Portfolio } from './pages/Portfolio';
import { Cybersecurity } from './pages/Cybersecurity';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';
import { company } from './data/site';
import { setFavicon } from './utils/document';

export function App() {
  useEffect(() => {
    setFavicon(company.logo);
  }, []);

  return (
    <CurrencyProvider>
      <BrowserRouter>
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
            <Route path="/privacy" element={<Legal doc="privacy" />} />
            <Route path="/cookies" element={<Legal doc="cookies" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrencyProvider>);

}