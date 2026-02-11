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
      <div className="text-center mb-16 md:mb-20 space-y-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
          ACQUIRE <span className="text-gray-500">ASSETS.</span>
        </h2>
        <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em] max-w-2xl mx-auto">
          Scale packages designed for peak channel performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {PACKAGES.map((pkg, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col p-8 md:p-10 rounded-none border transition-all ${
              pkg.isPopular 
                ? 'bg-white text-black border-white shadow-[0_0_60px_rgba(255,255,255,0.1)] md:scale-105 z-10' 
                : 'bg-black border-white/10'
            } ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-4 left-0 bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-4 py-2">
                RECOMMENDED_OPS
              </div>
            )}
            
            <div className="mb-8 md:mb-10">
              <h3 className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 ${pkg.isPopular ? 'text-black/60' : 'text-gray-500'}`}>{pkg.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-black tracking-tighter">{pkg.price}</span>
                <span className={`font-bold text-[10px] md:text-xs uppercase tracking-widest ${pkg.isPopular ? 'text-black/40' : 'text-gray-600'}`}>{pkg.name.includes('Partner') ? '' : '/mo'}</span>
              </div>
            </div>

            <ul className="flex-grow space-y-4 md:space-y-5 mb-10 md:mb-14">
              {pkg.features.map((feat, i) => (
                <li key={i} className={`flex items-start gap-3 md:gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-tight ${pkg.isPopular ? 'text-black' : 'text-gray-500'}`}>
                  <svg className={`w-3 h-3 mt-0.5 flex-shrink-0 ${pkg.isPopular ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={scrollToContact}
              className={`w-full py-4 md:py-5 rounded-none font-black uppercase tracking-[0.3em] text-[10px] transition-all ${
                pkg.isPopular 
                  ? 'bg-black text-white hover:bg-gray-900' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-700 font-black uppercase tracking-[0.4em] text-[9px]">
        <p>Custom payload sizes available upon request.</p>
      </div>
    </div>
  );
};

export default Pricing;