import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/Home';
import { AboutPage, ServicesPage, PortfolioPage, PartnersPage, ContactPage } from './pages/ContentPages';
import { GetQuotePage } from './pages/GetQuote';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const RoutesWithKey = Routes as any;
  return (
    <AnimatePresence mode="wait">
      <RoutesWithKey location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
      </RoutesWithKey>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main className="flex-grow pt-16 transition-all duration-300">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}