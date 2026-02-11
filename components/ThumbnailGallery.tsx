import React from 'react';
import { THUMBNAILS } from '../constants';
import { ThumbnailItem } from '../types';

const ThumbnailCard: React.FC<{ item: ThumbnailItem }> = ({ item }) => {
  return (
    <div 
      className="relative group overflow-hidden bg-[#111] border border-white/5 rounded-xl transition-all hover:border-[#A340FF]/50"
    >
      <div className="aspect-video relative overflow-hidden bg-[#000]">
        {/* Main Image */}
        <img 
          src={item.afterImage} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
        />
        
        {/* Prominent Hover Overlay - Now positioned at the top */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-start items-start p-6 text-left">
           <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white leading-tight mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             {item.title}
           </h3>
           <span className="px-4 py-1.5 bg-[#A340FF] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
             {item.category}
           </span>
        </div>
      </div>
      
      {/* Label Below (Kept for accessibility and mobile clarity) */}
      <div className="p-4 flex justify-between items-center bg-[#0d0d0d]">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-400 truncate max-w-[200px]">{item.title}</span>
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{item.creator}</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A340FF]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
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
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The <span className="text-[#A340FF]">Showcase.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md font-medium">
            Browse high-performing designs that dominated their respective niches.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {THUMBNAILS.map((item) => (
          <ThumbnailCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="group flex flex-col items-center gap-4 text-center"
        >
          <span className="text-gray-500 font-bold uppercase tracking-widest text-sm transition-colors group-hover:text-white">Get designs like these for your channel</span>
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#A340FF] transition-colors">
            <svg className="w-6 h-6 text-[#A340FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThumbnailGallery;