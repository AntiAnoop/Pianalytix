
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">New Cohort Starts Monday</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          <span className="text-white block">ELITE SKILLS.</span>
          <span className="text-gradient block">REAL PROJECTS.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          The ultimate project-based learning ecosystem for high-performing engineers. Bridge the gap between theory and industry excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/internship/ml" className="group relative px-10 py-5 bg-white text-black font-black text-sm tracking-widest uppercase rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5">
            <span className="relative z-10">Start Training Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
          </Link>
          <Link to="/projects" className="px-10 py-5 glass text-white font-black text-sm tracking-widest uppercase rounded-2xl hover:bg-white/10 transition-all">
            Explore 300+ Projects
          </Link>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Trusted by talent at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <span className="text-xl font-bold tracking-tighter">GOOGLE</span>
             <span className="text-xl font-bold tracking-tighter">AMAZON</span>
             <span className="text-xl font-bold tracking-tighter">STRIPE</span>
             <span className="text-xl font-bold tracking-tighter">MICROSOFT</span>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
};

export default Hero;
