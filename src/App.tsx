/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import ServiceGrid from './components/ServiceGrid';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AboutNarrative from './components/AboutNarrative';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    // Smooth scroll down to the quote form section
    setTimeout(() => {
      handleScrollToSection('quote-form');
    }, 50);
  };

  return (
    <div className="bg-[#FDFBF7] text-[#1C2421] min-h-screen selection:bg-[#D94A38]/10 selection:text-[#D94A38] antialiased">
      {/* Sticky Top Navigation */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Sections */}
      <main>
        {/* Component A: Hero Section */}
        <Hero onScrollToQuoteForm={() => handleScrollToSection('quote-form')} />

        {/* Component B: Trust & Social Proof Anchor */}
        <TrustBanner />

        {/* Component C: Visual Service Grid */}
        <ServiceGrid onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Component E: Before & After Conversion Carousel */}
        <BeforeAfterSlider />

        {/* Component D: About & Brand Narrative */}
        <AboutNarrative />

        {/* Component F: Quote Request Lead Capture Form */}
        <QuoteForm
          preselectedServiceId={selectedServiceForQuote}
          onClearPreselectedService={() => setSelectedServiceForQuote(null)}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}

