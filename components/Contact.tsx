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
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Oops! Submission failed. Please check your connection and try again.');
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
    <div className="max-w-7xl mx-auto px-6">
      {/* Success Modal */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
          <div className="bg-[#000] border-2 border-[#A340FF] p-10 md:p-14 rounded-[2.5rem] max-w-lg w-full text-center space-y-8 shadow-[0_0_80px_rgba(163,64,255,0.4)]">
            <div className="w-24 h-24 bg-[#A340FF] rounded-full flex items-center justify-center mx-auto mb-2 neon-glow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Message Sent!</h3>
              <p className="text-gray-400 text-lg font-bold leading-relaxed">
                We've received your inquiry and the RhyvaL team will reach out shortly.
              </p>
            </div>
            <button 
              onClick={closeSuccessModal}
              className="w-full bg-[#A340FF] text-white font-black uppercase py-5 rounded-2xl hover:brightness-110 transition-all tracking-widest text-lg neon-glow"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#111] rounded-[3rem] overflow-hidden border border-white/5 relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A340FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A340FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 space-y-10">
            <div className="space-y-4">
              <div className="inline-block bg-[#A340FF]/10 border border-[#A340FF]/20 px-4 py-1 rounded-full">
                <span className="text-[#A340FF] text-xs font-black uppercase tracking-widest">Available Now</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Get Designs That Get <span className="text-[#A340FF]">Clicked.</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xl font-medium max-w-md leading-relaxed">
              Scale your views with performance-driven visuals. Let's build your channel's future.
            </p>
            
            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#A340FF]/50 transition-colors">
                  <svg className="w-7 h-7 text-[#A340FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs font-black uppercase tracking-[0.2em]">Drop an Email</span>
                  <span className="text-xl md:text-2xl font-black text-white">contactrhyval@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#A340FF]/50 transition-colors">
                  <svg className="w-7 h-7 text-[#A340FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 011.664.89l.812 1.22A2 2 0 0010.07 10H19a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs font-black uppercase tracking-[0.2em]">Instagram DM</span>
                  <a href="https://instagram.com/rhyvalgrowth" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-black hover:text-[#A340FF] transition-colors text-white">@rhyvalgrowth</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.02] p-12 md:p-20 border-l border-white/5 backdrop-blur-sm">
            <form 
              className="space-y-8" 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xojnjeok"
              method="POST"
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Channel Name</label>
                  <input 
                    type="text" 
                    name="channelName"
                    required
                    value={formData.channelName}
                    onChange={handleChange}
                    placeholder="e.g. MrBeast" 
                    className="w-full bg-black border border-white/10 p-5 rounded-xl focus:border-[#A340FF] transition-all text-white outline-none placeholder:text-gray-700 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Professional Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@creator.com" 
                    className="w-full bg-black border border-white/10 p-5 rounded-xl focus:border-[#A340FF] transition-all text-white outline-none placeholder:text-gray-700 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Target Growth / Current CTR</label>
                  <div className="relative">
                    <select 
                      name="ctr"
                      value={formData.ctr}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-5 rounded-xl focus:border-[#A340FF] transition-all text-white outline-none appearance-none font-bold"
                    >
                      <option>1% - 3% (Needs Help)</option>
                      <option>4% - 6% (Average)</option>
                      <option>7%+ (Scaling Higher)</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Project Brief</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your niche and goals..." 
                    className="w-full bg-black border border-white/10 p-5 rounded-xl focus:border-[#A340FF] transition-all text-white outline-none resize-none placeholder:text-gray-700 font-bold"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#A340FF] disabled:bg-gray-800 disabled:opacity-50 text-white font-black uppercase py-6 rounded-2xl neon-glow hover:scale-[1.01] active:scale-95 transition-all text-xl tracking-widest"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;