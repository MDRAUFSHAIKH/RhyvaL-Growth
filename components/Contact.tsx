import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    channelName: '',
    email: '',
    ctr: '1% - 3% (Needs Help)',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xojnjeok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          channelName: formData.channelName,
          email: formData.email,
          current_ctr: formData.ctr,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          channelName: '',
          email: '',
          ctr: '1% - 3% (Needs Help)',
          message: ''
        });
      } else {
        setStatus('error');
        alert('Transmission failed. Re-initiating protocol required.');
      }
    } catch (error) {
      setStatus('error');
      alert('Network blackout. Check telemetry and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeSuccessModal = () => setStatus('idle');

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6">
      {/* Success Modal */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
          <div className="bg-black border border-white/30 p-8 md:p-16 rounded-none max-w-lg w-full text-center space-y-6 md:space-y-8 shadow-[0_0_100px_rgba(255,255,255,0.1)]">
            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-none flex items-center justify-center mx-auto mb-4 starlight-glow">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">UP_LINK SUCCESS.</h3>
              <p className="text-gray-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] leading-relaxed">
                Mission briefing received. We'll descend shortly.
              </p>
            </div>
            <button 
              onClick={closeSuccessModal}
              className="w-full bg-white text-black font-black uppercase py-4 md:py-5 rounded-none hover:bg-gray-200 transition-all tracking-[0.3em] text-[10px]"
            >
              Back to Command
            </button>
          </div>
        </div>
      )}

      <div className="bg-black rounded-none overflow-hidden border border-white/10 relative">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-24 space-y-10 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block border border-white/30 px-4 md:px-6 py-1.5 rounded-none">
                <span className="text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em]">Command Center Active</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                INITIATE THE <span className="text-gray-500">LAUNCH.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-bold uppercase tracking-widest leading-relaxed max-w-sm">
              Propel your channel into the next dimension of growth.
            </p>
            
            <div className="space-y-8 md:space-y-10 pt-4 md:pt-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white/5 rounded-none flex items-center justify-center border border-white/10 group-hover:border-white transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-gray-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-1">Secure Channel</span>
                  <span className="text-lg md:text-xl font-black text-white truncate block">contactrhyval@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white/5 rounded-none flex items-center justify-center border border-white/10 group-hover:border-white transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 011.664.89l.812 1.22A2 2 0 0010.07 10H19a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-gray-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-1">Visual Log</span>
                  <a href="https://instagram.com/rhyvalgrowth" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-black hover:text-gray-400 transition-colors text-white truncate block">@rhyvalgrowth</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] p-8 md:p-12 lg:p-24 border-t lg:border-t-0 lg:border-l border-white/10">
            <form 
              className="space-y-10 md:space-y-12" 
              onSubmit={handleSubmit}
            >
              <div className="space-y-10 md:space-y-12">
                <div className="space-y-4">
                  <label className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white">MISSION_ID (Channel Name)</label>
                  <input 
                    type="text" 
                    name="channelName"
                    required
                    value={formData.channelName}
                    onChange={handleChange}
                    placeholder="E.G. MRBEAST"
                    className="w-full bg-black border-b border-white/40 pb-4 focus:border-white transition-all text-white outline-none font-black uppercase tracking-tighter text-xl md:text-3xl placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white">UP_LINK_ADDR (Email)</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR@STUDIO.COM"
                    className="w-full bg-black border-b border-white/40 pb-4 focus:border-white transition-all text-white outline-none font-black uppercase tracking-tighter text-xl md:text-3xl placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white">TELEMETRY (CTR)</label>
                  <div className="relative">
                    <select 
                      name="ctr"
                      value={formData.ctr}
                      onChange={handleChange}
                      className="w-full bg-black border-b border-white/40 pb-4 focus:border-white transition-all text-white outline-none appearance-none font-black uppercase tracking-tighter text-xl md:text-3xl cursor-pointer"
                    >
                      <option>1% - 3% (Needs Help)</option>
                      <option>4% - 6% (Average)</option>
                      <option>7%+ (Scaling Higher)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white">MISSION_BRIEF (Goals)</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="WHAT ARE WE BUILDING?"
                    rows={1}
                    className="w-full bg-black border-b border-white/40 pb-4 focus:border-white transition-all text-white outline-none resize-none font-black uppercase tracking-tighter text-xl md:text-3xl placeholder:text-white/10"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-black font-black uppercase py-6 md:py-8 rounded-none starlight-glow hover:bg-gray-200 active:scale-95 transition-all text-sm md:text-base tracking-[0.5em] mt-8"
              >
                {status === 'submitting' ? 'SYNCHRONIZING...' : 'START_TRANSMISSION'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;