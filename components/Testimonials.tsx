import React from 'react';

const testimonials = [
  {
    name: 'Aditya Saini Finance',
    handle: '@adityasainifinance',
    quote: 'Saw a noticeable improvement in our CTR. The team really understood the vision for the channel.',
    stat: '+3% CTR LIFT'
  },
  {
    name: 'IND Money',
    handle: '@indmoney',
    quote: 'Solid designs that helped our videos stand out in a crowded niche. Reliable and high quality.',
    stat: 'ORBITAL QUALITY'
  },
  {
    name: 'Growvento',
    handle: '@growvento',
    quote: 'Consistent turnarounds and clean branding. Definitely helped streamline our content production.',
    stat: '+24% WATCH_TIME'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white/[0.02] py-24 md:py-32 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              TELEMETRY <span className="text-gray-500">PROOF.</span>
            </h2>
            <p className="text-gray-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">
              Data-backed feedback from the front lines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`bg-black p-8 md:p-10 rounded-none border border-white/10 space-y-8 md:space-y-10 group hover:border-white transition-colors ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-white flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white text-lg md:text-xl font-bold italic leading-tight tracking-tight">"{t.quote}"</p>
              <div className="flex justify-between items-center pt-6 md:pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm">{t.name}</h4>
                  <p className="text-gray-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{t.handle}</p>
                </div>
                <div className="text-right">
                  <span className="block text-white font-black text-[10px] md:text-xs tracking-widest">{t.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;