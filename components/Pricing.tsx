import React from 'react';
import { PACKAGES } from '../constants';

const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          Invest in <span className="text-[#A340FF]">Growth.</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
          Choose a plan that fits your upload schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col p-8 rounded-2xl border transition-all hover:scale-[1.02] ${
              pkg.isPopular 
                ? 'bg-[#151515] border-[#A340FF] shadow-[0_0_40px_rgba(163,64,255,0.1)]' 
                : 'bg-[#111] border-white/5'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A340FF] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-black uppercase tracking-widest text-gray-400 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">{pkg.price}</span>
                <span className="text-gray-500 font-bold">{pkg.name.includes('Partner') ? '' : '/mo'}</span>
              </div>
            </div>

            <ul className="flex-grow space-y-4 mb-12">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-400">
                  <svg className="w-4 h-4 text-[#A340FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={scrollToContact}
              className={`w-full py-4 rounded font-black uppercase tracking-widest text-sm transition-all ${
                pkg.isPopular 
                  ? 'bg-[#A340FF] text-white neon-glow hover:brightness-110' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500 font-bold text-sm">
        <p>Custom packages or single thumbnails available on request.</p>
      </div>
    </div>
  );
};

export default Pricing;