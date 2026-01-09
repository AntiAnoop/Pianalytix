
import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <Hero />
      
      {/* Featured Programs */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 italic uppercase">Specializations<span className="text-indigo-500 not-italic">.</span></h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { 
                title: 'Machine Learning & AI', 
                path: '/internship/ml', 
                icon: 'fa-brain', 
                tag: 'MOST POPULAR',
                desc: 'Master deep learning, NLP, and model deployment at scale.',
                accent: 'from-indigo-600 to-indigo-800'
              },
              { 
                title: 'Data Science Elite', 
                path: '/internship/ds', 
                icon: 'fa-chart-pie', 
                tag: 'HIGHEST RATING',
                desc: 'Strategic data analysis and business intelligence for decision makers.',
                accent: 'from-rose-600 to-rose-800'
              }
            ].map((tech, i) => (
              <Link key={i} to={tech.path} className="group relative glass p-12 rounded-[3rem] overflow-hidden transition-all hover:scale-[1.02]">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${tech.accent} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity blur-3xl`}></div>
                
                <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-widest text-indigo-400 mb-6 block uppercase">{tech.tag}</span>
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-all">
                    <i className={`fa-solid ${tech.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{tech.title}</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed max-w-sm">{tech.desc}</p>
                  
                  <div className="flex items-center space-x-3 text-white font-black text-xs uppercase tracking-widest">
                    <span>View Curriculum</span>
                    <i className="fa-solid fa-chevron-right text-indigo-500 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* Modern CTA */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
            Ready to <span className="italic underline decoration-indigo-500">Scale</span> Your Career?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
            Join the elite circle of 79,000+ students who transformed their technical trajectory with us.
          </p>
          <button className="px-14 py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-3xl text-lg tracking-widest uppercase shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105">
            APPLY FOR COHORT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
