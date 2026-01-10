
import React, { useState } from 'react';
import { PROJECTS_LIST } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML', 'DS', 'Web', 'Python'];

  const filtered = filter === 'All' 
    ? PROJECTS_LIST 
    : PROJECTS_LIST.filter(p => p.category === filter);

  return (
    <div className="bg-black min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <span className="gradient-text font-black text-sm uppercase tracking-[0.4em] mb-6 block">The Project Vault</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-10 italic">BUILD ANYTHING.</h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto font-medium">
            300+ professional industrial solutions across every technical domain.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-full text-[12px] font-bold transition-all border ${
                filter === c 
                  ? 'bg-white text-black border-white' 
                  : 'bg-white/5 text-apple-gray border-white/10 hover:border-white/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="glass-card group h-[450px] overflow-hidden relative flex flex-col justify-end p-10">
               <img 
                 src={p.image} 
                 alt={p.title} 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               
               <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                 <span className="px-3 py-1 rounded-lg bg-indigo-600 text-[10px] font-bold text-white uppercase tracking-widest mb-4 inline-block">
                   {p.category}
                 </span>
                 <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight">{p.title}</h3>
                 <p className="text-apple-gray text-sm mb-6 leading-relaxed font-medium line-clamp-2">
                   {p.description}
                 </p>
                 <button className="text-white font-bold text-sm flex items-center group-hover:underline underline-offset-8 decoration-2">
                   View Project Details <i className="fa-solid fa-chevron-right text-[10px] ml-2"></i>
                 </button>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center border-t border-white/10 pt-20">
           <button className="apple-btn px-16 py-5 text-xl tracking-tight">
             Explore 250+ More
           </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
