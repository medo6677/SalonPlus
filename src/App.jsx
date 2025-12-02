import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Mockups from './components/Mockups';
import WhyChoose from './components/WhyChoose';
import Technologies from './components/Technologies';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';

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
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
