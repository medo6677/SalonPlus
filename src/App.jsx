import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Eagerly load critical components (Above the fold)
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical components (Below the fold)
const Problem = lazy(() => import('./components/Problem'));
const Solution = lazy(() => import('./components/Solution'));
const Features = lazy(() => import('./components/Features'));
const Mockups = lazy(() => import('./components/Mockups'));
const WhyChoose = lazy(() => import('./components/WhyChoose'));
const Technologies = lazy(() => import('./components/Technologies'));
const Pricing = lazy(() => import('./components/Pricing'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppModal = lazy(() => import('./components/WhatsAppModal'));

// Loading Fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="font-arabic bg-white min-h-screen text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <Problem />
        <Solution />
        <Features />
        <Mockups />
        <WhyChoose />
        <Technologies />
        <Pricing onSubscribeClick={() => setIsModalOpen(true)} />
        <CTA />
        <Footer />

        {/* WhatsApp Modal */}
        {isModalOpen && (
          <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
