import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Niche Research',
    desc: 'I analyze your competitors and current trending visual patterns in your specific niche to find a "gap" in the viewer\'s feed.'
  },
  {
    num: '02',
    title: 'Hook Psychology',
    desc: 'We define the core curiosity gap or emotional trigger. Whether it is "fear of missing out" or "pure disbelief", the concept comes first.'
  },
  {
    num: '03',
    title: 'Visual Contrast',
    desc: 'Using high-saturation colors and sharp lighting to ensure your thumbnail pops even at 10% brightness on a mobile device.'
  },
  {
    num: '04',
    title: 'Test & Iterate',
    desc: 'Delivery isn\'t the end. I monitor initial performance and provide variations if the CTR doesn\'t hit the target benchmarks.'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            How I <span className="text-[#A340FF]">Manufacture</span> Clicks.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A data-driven workflow designed to remove the guesswork from your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
              <span className="text-[#A340FF] text-3xl md:text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity italic leading-none">
                {step.num}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-[#A340FF] transition-colors">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-300 transition-colors text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;