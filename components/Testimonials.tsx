import React from 'react';

const testimonials = [
  {
    name: 'Aditya Saini Finance',
    handle: '@adityasainifinance',
    quote: 'Saw a noticeable improvement in our CTR. The team really understood the vision for the channel.',
    stat: '+3% CTR Increase'
  },
  {
    name: 'IND Money',
    handle: '@indmoney',
    quote: 'Solid designs that helped our videos stand out in a crowded niche. Reliable and high quality.',
    stat: 'Consistent Quality'
  },
  {
    name: 'Growvento',
    handle: '@growvento',
    quote: 'Consistent turnarounds and clean branding. Definitely helped streamline our content production.',
    stat: '+24% Watch Time'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white/5 py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Proof in the <span className="text-[#A340FF]">Performance.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-lg">
              Feedback from creators I work with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#111] p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="text-[#A340FF] flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white text-lg font-bold italic leading-relaxed">"{t.quote}"</p>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <div>
                  <h4 className="font-black uppercase tracking-tight">{t.name}</h4>
                  <p className="text-gray-500 text-sm font-bold">{t.handle}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[#A340FF] font-black">{t.stat}</span>
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