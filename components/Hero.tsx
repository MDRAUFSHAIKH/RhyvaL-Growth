import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-6 pt-24 md:pt-32 lg:pt-20 overflow-hidden">
      {/* Space Background Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px'}}></div>
      
      {/* Background Starlight Orbs */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full z-10 text-center space-y-8 md:space-y-10 lg:space-y-12">
        <div className="inline-block bg-white/5 border border-white/10 px-4 md:px-6 py-2 rounded-none transform hover:scale-105 transition-transform cursor-default">
          <span className="text-white text-[9px] md:text-xs font-black tracking-[0.4em] uppercase">Scale to Infinity.</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase text-white flex flex-col items-center">
          <span className="block mb-1 md:mb-2 lg:mb-4">ENGINEERING</span>
          <span className="inline-block bg-white text-black px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 mb-2 md:mb-4 lg:mb-6 transform -skew-x-3 italic shadow-[0_0_40px_rgba(255,255,255,0.15)] md:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            THUMBNAILS
          </span>
          <span className="block mb-1 md:mb-2 lg:mb-4">FOR TOTAL</span>
          <span className="inline-block bg-white text-black px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 transform -skew-x-3 shadow-[0_0_40px_rgba(255,255,255,0.15)] md:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            GROWTH.
          </span>
        </h1>

        <div className="space-y-8 md:space-y-12">
          <p className="text-gray-500 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium leading-tight px-4 tracking-tight">
            The vacuum of the feed is competitive. We build visual engines that capture attention instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 px-4">
            <a 
              href="#thumbnails" 
              onClick={(e) => scrollTo(e, 'thumbnails')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs lg:text-sm starlight-glow hover:bg-gray-200 transition-all text-center"
            >
              The Archive
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-black border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs lg:text-sm hover:bg-white hover:text-black transition-all text-center"
            >
              Initiate Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;