import React from 'react';
import { METRICS } from '../constants';

const MetricsStrip: React.FC = () => {
  return (
    <div className="w-full bg-white/[0.02] border-y border-white/10 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center group">
              <span className="block text-5xl md:text-7xl font-black text-white mb-3 group-hover:scale-110 transition-transform tracking-tighter">
                {metric.value}
              </span>
              <div className="h-0.5 w-8 bg-white/20 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
              <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors">
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