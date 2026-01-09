
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ML_INTERNSHIP, DS_INTERNSHIP } from '../constants';
import { InternshipConfig } from '../types';

const InternshipPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  let data: InternshipConfig;
  if (id === 'ml') data = ML_INTERNSHIP;
  else if (id === 'ds') data = DS_INTERNSHIP;
  else return <Navigate to="/" />;

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-grow">
            <div className="mb-12">
               <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 block">Elite Training Program</span>
               <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[0.9]">{data.title}</h1>
               <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">{data.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mb-20">
               <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                 <i className="fa-solid fa-clock text-indigo-400"></i>
                 <span className="text-sm font-bold text-white uppercase tracking-widest">{data.duration}</span>
               </div>
               <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                 <i className="fa-solid fa-star text-yellow-500"></i>
                 <span className="text-sm font-bold text-white uppercase tracking-widest">{data.rating} Avg. Rating</span>
               </div>
            </div>

            {/* Syllabus */}
            <div className="space-y-12">
              <h2 className="text-3xl font-black text-white tracking-tight flex items-center">
                <span className="w-1.5 h-8 bg-indigo-500 rounded-full mr-4"></span>
                Curriculum Blueprint
              </h2>

              <div className="space-y-4">
                {data.syllabus.map((item, idx) => (
                  <div key={idx} className={`glass rounded-3xl transition-all duration-500 overflow-hidden ${activeAccordion === idx ? 'ring-2 ring-indigo-500/50 bg-white/5' : ''}`}>
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                      className="w-full px-10 py-8 flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-6">
                        <span className="text-2xl font-black text-white/20 italic">0{idx + 1}</span>
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">{item.title}</span>
                      </div>
                      <i className={`fa-solid fa-chevron-right text-slate-600 transition-transform duration-500 ${activeAccordion === idx ? 'rotate-90 text-indigo-500' : ''}`}></i>
                    </button>
                    {activeAccordion === idx && (
                      <div className="px-24 pb-10 text-slate-400 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-500">
                        {item.description}
                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">Video Modules</span>
                          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">Live Sessions</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:w-[400px] shrink-0">
             <div className="sticky top-32 space-y-8">
               <div className="glass p-10 rounded-[3rem] relative overflow-hidden border-2 border-indigo-500/30">
                 <div className="absolute top-0 right-0 p-10 -mr-4 -mt-4">
                   <div className="w-20 h-20 bg-indigo-500/10 blur-3xl rounded-full"></div>
                 </div>

                 <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-black text-white tracking-tight italic">Enrollment</h3>
                   <div className="flex glass p-1 rounded-xl border-white/5">
                      {['INR', 'USD'].map((c) => (
                        <button 
                          key={c}
                          onClick={() => setCurrency(c as any)}
                          className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${currency === c ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                        >{c}</button>
                      ))}
                   </div>
                 </div>

                 <div className="mb-10">
                   <div className="text-slate-500 line-through font-bold">
                     {currency === 'INR' ? '₹9,999' : '$999'}
                   </div>
                   <div className="text-6xl font-black text-white tracking-tighter">
                     {currency === 'INR' ? `₹${data.priceInr.toLocaleString()}` : `$${data.priceUsd}`}
                   </div>
                   <p className="text-[10px] font-black text-indigo-400 mt-4 uppercase tracking-[0.2em]">Limited Spots Remaining</p>
                 </div>

                 <button className="w-full py-6 bg-white text-black font-black rounded-3xl text-lg tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-2xl">
                   Reserve My Spot
                 </button>
               </div>

               <div className="glass p-8 rounded-[2.5rem] bg-indigo-600/5">
                 <div className="flex items-center mb-6">
                    <img src="https://picsum.photos/seed/elite-inst/100" className="w-14 h-14 rounded-2xl mr-4 border border-white/10" alt="S Singhal" />
                    <div>
                      <h4 className="font-bold text-white">{data.instructor.name}</h4>
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Master Instructor</p>
                    </div>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed font-medium mb-6">{data.instructor.experience}</p>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                   <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Primary Stack</div>
                   <div className="text-[10px] font-bold text-slate-300">{data.instructor.stack}</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
