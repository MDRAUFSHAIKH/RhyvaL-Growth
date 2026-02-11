import React from 'react';

const reasons = [
  {
    title: 'Neural Hooks',
    desc: 'Visual loops that force the human brain to seek closure via a click.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'Light Vectors',
    desc: 'Stark contrast lighting that highlights the "Hero" of your concept.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Text Compression',
    desc: 'High-legibility typography optimized for 1-second digestion on mobile.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )
  },
  {
    title: 'Subject Framing',
    desc: 'NASA-level precision in framing to ensure focal points are never missed.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const WhyWorks: React.FC = () => {
  return (
    <div className="bg-white/[0.02] py-24 md:py-40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-32 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            THE <span className="text-gray-500">LOGIC.</span>
          </h2>
          <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em] max-w-2xl mx-auto">
            Design is not decoration. It is propulsion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="space-y-8 group">
              <div className="text-white group-hover:scale-110 transition-transform origin-left border border-white/20 w-fit p-4 rounded-none">{r.icon}</div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-widest">{r.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorks;