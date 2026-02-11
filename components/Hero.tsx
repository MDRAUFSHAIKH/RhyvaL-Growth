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
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#A340FF]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#A340FF]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full z-10 text-center space-y-8 md:space-y-10">
        <div className="inline-block bg-[#1a1a1a] border border-white/10 px-4 md:px-6 py-2 rounded-full transform hover:scale-105 transition-transform cursor-default">
          <span className="text-[#A340FF] text-[10px] sm:text-xs md:text-base font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">Trusted by 1M+ Sub creators</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[1.2] tracking-tighter uppercase text-white flex flex-col items-center">
          <span className="block mb-2 md:mb-4">I Design</span>
          <span className="inline-block bg-[#A340FF] text-white px-4 sm:px-8 md:px-12 py-1 md:py-4 mb-4 md:mb-6 transform -skew-x-6 italic shadow-[0_0_40px_rgba(163,64,255,0.4)]">
            Thumbnails
          </span>
          <span className="block mb-2 md:mb-4">That Get</span>
          <span className="inline-block bg-[#A340FF] text-white px-4 sm:px-8 md:px-12 py-1 md:py-4 transform -skew-x-6 shadow-[0_0_40px_rgba(163,64,255,0.4)]">
            Clicked.
          </span>
        </h1>

        <div className="space-y-8">
          <p className="text-gray-400 text-lg md:text-3xl max-w-2xl mx-auto font-medium leading-tight px-4">
            Stop losing views to bad design. I help creators skyrocket their CTR with psychological hooks and high-contrast visuals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4">
            <a 
              href="#thumbnails" 
              onClick={(e) => scrollTo(e, 'thumbnails')}
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#A340FF] text-white font-black uppercase tracking-widest text-base md:text-lg neon-glow hover:scale-105 transition-all text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-base md:text-lg hover:bg-white/10 transition-all text-center"
            >
              Scale Your Views
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;