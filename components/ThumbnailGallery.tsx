import React from 'react';
import { THUMBNAILS } from '../constants';
import { ThumbnailItem } from '../types';

const ThumbnailCard: React.FC<{ item: ThumbnailItem }> = ({ item }) => {
  return (
    <div 
      className="relative group overflow-hidden bg-black border border-white/10 rounded-none transition-all hover:border-white/40"
    >
      <div className="aspect-video relative overflow-hidden bg-black">
        {/* Main Image */}
        <img 
          src={item.afterImage} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-[0.5]"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
           <span className="inline-block w-fit px-2 md:px-3 py-1 bg-white text-black text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-2 md:mb-3">
             {item.category}
           </span>
           <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white leading-none">
             {item.title}
           </h3>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 md:p-5 flex justify-between items-center bg-black border-t border-white/5">
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-widest truncate">{item.creator}</span>
          <span className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">{item.views} Views Potential</span>
        </div>
      </div>
    </div>
  );
};

const ThumbnailGallery: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-24">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
            THE <span className="text-gray-400">ARCHIVE.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md font-bold uppercase tracking-widest leading-relaxed">
            Visual intelligence applied to high-stakes niches.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {THUMBNAILS.map((item) => (
          <ThumbnailCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-20 md:mt-32 flex justify-center">
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="group flex flex-col items-center gap-6 text-center"
        >
          <span className="text-gray-600 font-black uppercase tracking-[0.4em] text-[10px] transition-colors group-hover:text-white">Request System Access</span>
          <div className="w-14 md:w-16 h-14 md:h-16 bg-white rounded-none flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all starlight-glow">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThumbnailGallery;