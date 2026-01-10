
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=2500" 
          className="w-full h-full object-cover opacity-40 img-mask" 
          alt="Hero Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-8 animate-fade-in">
          The Future of Engineering
        </span>
        
        <h1 className="hero-title mb-10 tracking-tighter">
          Master the <br /> 
          <span className="gradient-text">Engineering Edge.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          The ultimate platform for project-driven excellence. Build, deploy, and scale with 300+ professional industrial projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
          <Link to="/internship/ml" className="apple-btn px-12 py-4 text-lg">
            Get Started
          </Link>
          <Link to="/projects" className="text-white text-lg font-semibold flex items-center group transition-all">
            Explore Repository <i className="fa-solid fa-chevron-right text-xs ml-2.5 transition-transform group-hover:translate-x-1.5"></i>
          </Link>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="absolute bottom-12 z-10 w-full px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale invert">
          <span className="text-xl font-black italic">GOOGLE</span>
          <span className="text-xl font-black">DELL</span>
          <span className="text-xl font-black tracking-tighter">WIPRO</span>
          <span className="text-xl font-black">TCS</span>
          <span className="text-xl font-black">PWC</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
