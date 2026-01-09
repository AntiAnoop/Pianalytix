
import React, { useState } from 'react';
import { PROJECTS_LIST } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML', 'DS', 'Web', 'Python'];

  const filtered = filter === 'All' 
    ? PROJECTS_LIST 
    : PROJECTS_LIST.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">300+ Solved Projects</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Explore our massive library of ready-to-use professional projects across multiple tech domains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === c 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="h-56 relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-sm">
                  {p.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{p.description}</p>
                <button className="flex items-center text-sm font-black text-blue-600 group-hover:translate-x-2 transition-transform">
                  View Source Code <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Placeholder for "Load More" */}
        <div className="mt-20 text-center">
           <p className="text-slate-400 font-bold mb-6">Showing 6 of 300+ projects</p>
           <button className="px-12 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl">
             Load More Projects
           </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
