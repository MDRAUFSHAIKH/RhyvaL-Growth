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
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#A340FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#A340FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10 text-center space-y-10">
        <div className="inline-block bg-[#1a1a1a] border border-white/10 px-6 py-2 rounded-full transform hover:scale-105 transition-transform cursor-default">
          <span className="text-[#A340FF] text-sm md:text-base font-black tracking-[0.3em] uppercase">Trusted by 1M+ Sub creators</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase">
          I Design <span className="text-[#A340FF] italic">Thumbnails</span> <br />
          That Get <span className="text-[#A340FF]">Clicked.</span>
        </h1>

        <div className="space-y-8">
          <p className="text-gray-400 text-xl md:text-3xl max-w-2xl mx-auto font-medium leading-tight">
            Stop losing views to bad design. I help creators skyrocket their CTR with psychological hooks and high-contrast visuals.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="#thumbnails" 
              onClick={(e) => scrollTo(e, 'thumbnails')}
              className="px-10 py-5 bg-[#A340FF] text-white font-black uppercase tracking-widest text-lg neon-glow hover:scale-105 transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-lg hover:bg-white/10 transition-all"
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