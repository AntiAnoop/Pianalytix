
import React from 'react';

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-32 bg-brand-dark px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-4">
              Engineered for <span className="text-indigo-500">Excellence.</span>
            </h2>
            <p className="text-slate-400 font-medium">Why top-tier engineers choose Pianalytix for their career pivot.</p>
          </div>
          <div className="text-right">
             <div className="text-4xl font-black text-white italic">4.9/5</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Student Satisfaction</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4">
          {/* Main Feature */}
          <div className="md:col-span-3 md:row-span-2 glass p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
              <i className="fa-solid fa-code text-9xl"></i>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/40">
                <i className="fa-solid fa-laptop-code text-white text-xl"></i>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Project-First Curriculum</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                We believe in learning by doing. Access over 300+ production-ready codebases used in modern tech stacks.
              </p>
            </div>
          </div>

          {/* Small Feature 1 */}
          <div className="md:col-span-3 glass p-10 rounded-[2.5rem] flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                <i className="fa-solid fa-user-tie text-slate-300 group-hover:text-rose-500"></i>
              </div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Industry Mentor</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Expert Access</h3>
              <p className="text-sm text-slate-400 font-medium">Direct mentorship from IIT Bombay alumni and FAANG engineers.</p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div className="md:col-span-1.5 glass p-10 rounded-[2.5rem] group">
             <div className="h-full flex flex-col justify-between">
                <i className="fa-solid fa-clock text-indigo-500 text-3xl mb-6"></i>
                <h3 className="text-lg font-bold text-white leading-tight">Elite Flexibility</h3>
             </div>
          </div>

          {/* Small Feature 3 */}
          <div className="md:col-span-3 glass p-10 rounded-[2.5rem] group bg-gradient-to-br from-brand-card to-brand-dark overflow-hidden relative">
            <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40"></div>
            <div className="relative z-10 flex items-center justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Career Certification</h3>
                <p className="text-xs text-slate-400 font-medium">Globally recognized credentials.</p>
              </div>
              <div className="w-20 h-20 border-2 border-white/5 rounded-full flex items-center justify-center italic font-black text-white/20">LOR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
