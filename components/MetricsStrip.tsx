import React from 'react';
import { METRICS } from '../constants';

const MetricsStrip: React.FC = () => {
  return (
    <div className="w-full bg-white/5 border-y border-white/5 py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center group">
              <span className="block text-4xl md:text-6xl font-black text-[#A340FF] mb-2 group-hover:scale-110 transition-transform">
                {metric.value}
              </span>
              <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsStrip;