import React from 'react';

const steps = [
  {
    num: 'SYSTEM_01',
    title: 'Research',
    desc: 'Deep space analysis of competitor visual patterns and feed saturation levels.'
  },
  {
    num: 'SYSTEM_02',
    title: 'Curiosity Hooks',
    desc: 'Engineered emotional triggers designed to create immediate cognitive dissonance.'
  },
  {
    num: 'SYSTEM_03',
    title: 'Luminance Fix',
    desc: 'High-contrast lighting arrays ensuring the subject pops against any UI background.'
  },
  {
    num: 'SYSTEM_04',
    title: 'Performance',
    desc: 'Continuous iteration based on real-world CTR telemetry and audience retention.'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="space-y-20">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            THE <span className="text-gray-500">PROTOCOL.</span>
          </h2>
          <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em] max-w-2xl mx-auto">
            A methodical approach to capturing attention in the digital vacuum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group border-l border-white/10 pl-8 py-2 hover:border-white transition-colors">
              <span className="text-gray-700 text-[10px] font-black tracking-widest block mb-4 group-hover:text-white transition-colors">
                {step.num}
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{step.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;