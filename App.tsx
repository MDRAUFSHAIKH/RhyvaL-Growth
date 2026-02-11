import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import ThumbnailGallery from './components/ThumbnailGallery';
import Process from './components/Process';
import WhyWorks from './components/WhyWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#A340FF] selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <MetricsStrip />

        <section id="thumbnails" className="pt-16 md:pt-24">
          <ThumbnailGallery />
        </section>

        <section id="process" className="pt-16 md:pt-24">
          <Process />
        </section>

        <section id="why" className="pt-16 md:pt-24">
          <WhyWorks />
        </section>

        <section id="pricing" className="pt-16 md:pt-24">
          <Pricing />
        </section>

        <section id="results" className="pt-16 md:pt-24">
          <Testimonials />
        </section>

        <section id="contact" className="pt-16 md:pt-24 pb-16 md:pb-24">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1zSvkd5xizmqgFp7h4tsmW-1LzN2JVrXJ" 
              className="w-10 h-10 object-contain" 
              alt="RhyvaL Logo" 
            />
            <span className="font-bold text-xl tracking-tighter uppercase">RHYVAL<span className="text-[#A340FF]">GROWTH</span></span>
          </div>
          <p className="text-gray-500 text-sm">© RHYVAL GROWTH. Performance First Design.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/rhyvalgrowth" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/rhyvalcreates/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;