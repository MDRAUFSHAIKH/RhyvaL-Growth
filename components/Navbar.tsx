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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1vb4Q3jSNxPxp0g8sVHxG2qmzUVdTQEM3" 
            className="w-10 h-10 object-contain invert transition-transform group-hover:scale-110" 
            alt="RhyvaL Logo" 
          />
          <span className="font-black text-2xl tracking-tighter uppercase text-white flex items-center">
            RHYVAL<span className="bg-white text-black px-2 py-0.5 ml-1.5 inline-block">GROWTH</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                activeSection === link.href.slice(1) ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-white text-black px-8 py-2.5 rounded-none font-black uppercase text-[11px] tracking-widest hover:bg-gray-200 transition-all starlight-glow"
          >
            Mission Start
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/5 p-8 space-y-6 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-2xl font-black uppercase tracking-tighter transition-colors ${
                activeSection === link.href.slice(1) ? 'text-white underline underline-offset-8' : 'text-gray-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block bg-white text-black text-center py-5 rounded-none font-black uppercase tracking-widest"
          >
            Mission Start
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;