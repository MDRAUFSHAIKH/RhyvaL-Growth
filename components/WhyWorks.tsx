import React from 'react';

const reasons = [
  {
    title: 'Human Curiosity',
    desc: 'I use specific visual "loops" that force the brain to seek closure by clicking the video.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'Contrast & Emotion',
    desc: 'High-contrast lighting combined with micro-expressions of emotion to stop the scroll.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Text Hierarchy',
    desc: 'Never more than 4 words. Bold, legible, and strategically placed for 1-second digestion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )
  },
  {
    title: 'Face + Framing',
    desc: 'Golden-ratio framing of the subject ensures immediate focus on the hook.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const WhyWorks: React.FC = () => {
  return (
    <div className="bg-[#111] py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Why My <span className="text-[#A340FF]">Visuals</span> Win.
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
            It isn't art. It's conversion engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#0B0B0B] border border-white/5 p-8 rounded-xl hover:border-[#A340FF]/30 transition-all hover:-translate-y-2 group">
              <div className="text-[#A340FF] mb-6 group-hover:scale-110 transition-transform origin-left">{r.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{r.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorks;