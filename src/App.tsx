import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { WorkPage } from './pages/Work';
import { ServicesPage } from './pages/Services';
import { AboutPage } from './pages/About';
import { InsightsPage } from './pages/Insights';
import { ContactPage } from './pages/Contact';
import { PrivacyPage } from './pages/Privacy';
import { TermsPage } from './pages/Terms';
import { NotFoundPage } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* How we work now lives inside About. Old links keep working. */}
          <Route path="/approach" element={<Navigate to="/about#approach" replace />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}