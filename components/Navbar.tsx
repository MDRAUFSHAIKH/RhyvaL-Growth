import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Thumbnails', href: '#thumbnails' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-lg border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1zSvkd5xizmqgFp7h4tsmW-1LzN2JVrXJ" 
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110" 
            alt="RhyvaL Logo" 
          />
          <span className="font-black text-2xl tracking-tighter uppercase">RHYVAL<span className="text-[#A340FF]">GROWTH</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                activeSection === link.href.slice(1) ? 'text-[#A340FF]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-[#A340FF] text-white px-6 py-2 rounded font-black uppercase text-sm hover:brightness-110 transition-all neon-glow"
          >
            Let's Work
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-[#A340FF] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0B] border-b border-white/5 p-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-xl font-black uppercase tracking-widest transition-colors ${
                activeSection === link.href.slice(1) ? 'text-[#A340FF]' : 'text-gray-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block bg-[#A340FF] text-white text-center py-4 rounded font-black uppercase tracking-widest shadow-lg shadow-[#A340FF]/20"
          >
            Let's Work
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;