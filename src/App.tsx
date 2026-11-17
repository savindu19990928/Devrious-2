import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { PreBuilds } from './pages/PreBuilds';
import { ProductDetail } from './pages/ProductDetail';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Policy } from './pages/Policy';

export function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <div className="min-h-screen w-full bg-canvas font-sans text-ink">
          <Navbar />
          <AppRoutes />
        </div>
      </CurrencyProvider>
    </BrowserRouter>);

}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/pre-builds" element={<PreBuilds />} />
        <Route path="/pre-builds/:slug" element={<ProductDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal/:slug" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>);

}