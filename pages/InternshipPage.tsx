
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ML_INTERNSHIP, DS_INTERNSHIP } from '../constants';
import { InternshipConfig } from '../types';

const InternshipPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeTab, setActiveTab] = useState<number | null>(0);

  let data: InternshipConfig;
  if (id === 'ml') data = ML_INTERNSHIP;
  else if (id === 'ds') data = DS_INTERNSHIP;
  else return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Product Hero */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
        <img 
          src={id === 'ml' ? 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=2000' : 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=2000'} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 img-mask" 
          alt="Course Hero" 
        />
        <div className="relative z-10 max-w-4xl">
          <span className="text-indigo-400 font-bold text-xs uppercase tracking-[0.3em] mb-6 block">The Masterclass</span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto font-medium">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            <div className="glass-card p-12 mb-10">
              <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">Program Blueprint.</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
                {[
                  { label: 'Duration', val: data.duration, icon: 'fa-clock' },
                  { label: 'Rating', val: `${data.rating} Avg`, icon: 'fa-star' },
                  { label: 'Level', val: 'Advanced', icon: 'fa-signal' },
                  { label: 'Projects', val: `${data.projects.length} Practical`, icon: 'fa-code' }
                ].map((item, i) => (
                  <div key={i}>
                    <i className={`fa-solid ${item.icon} text-indigo-400 mb-3`}></i>
                    <p className="text-[10px] font-bold text-apple-gray uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white tracking-tight">{item.val}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-white mb-8">Curriculum.</h3>
                 {data.syllabus.map((item, idx) => (
                   <div key={idx} className="border-b border-white/10 pb-6 last:border-0">
                     <button 
                       onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                       className="w-full text-left flex justify-between items-center group py-2"
                     >
                       <span className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">{item.title}</span>
                       <i className={`fa-solid fa-plus text-apple-gray transition-transform duration-500 ${activeTab === idx ? 'rotate-45' : ''}`}></i>
                     </button>
                     {activeTab === idx && (
                       <p className="mt-4 text-apple-gray text-lg font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 italic">
                         {item.description}
                       </p>
                     )}
                   </div>
                 ))}
              </div>
            </div>

            {/* Instructor Card */}
            <div className="glass-card p-10 flex flex-col md:flex-row items-center gap-10">
               <img src="https://picsum.photos/seed/inst/300" className="w-40 h-40 rounded-3xl object-cover border border-white/10" alt="Instructor" />
               <div>
                  <h4 className="text-2xl font-extrabold text-white mb-2">{data.instructor.name}</h4>
                  <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">{data.instructor.role}</p>
                  <p className="text-apple-gray font-medium leading-relaxed italic mb-6">
                    {data.instructor.experience} {data.instructor.credentials}.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.instructor.stack.split(',').map((s, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.trim()}</span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Pricing Column */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 glass-card p-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                 <i className="fa-solid fa-crown text-8xl"></i>
              </div>
              
              <div className="flex justify-between items-center mb-10">
                <h4 className="text-sm font-bold text-apple-gray uppercase tracking-widest">Enrolling Now</h4>
                <div className="flex bg-white/10 p-1 rounded-full border border-white/5">
                  {['INR', 'USD'].map(c => (
                    <button 
                      key={c}
                      onClick={() => setCurrency(c as any)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${currency === c ? 'bg-white text-black' : 'text-apple-gray hover:text-white'}`}
                    >{c}</button>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="text-6xl font-extrabold text-white tracking-tighter mb-4">
                  {currency === 'INR' ? `₹${data.priceInr.toLocaleString()}` : `$${data.priceUsd}`}
                </div>
                <div className="text-apple-gray line-through text-lg font-bold">
                  {currency === 'INR' ? '₹9,999' : '$199'}
                </div>
              </div>

              <button className="apple-btn w-full py-5 text-xl mb-10 shadow-2xl shadow-indigo-500/20">
                Enroll in Program
              </button>

              <div className="space-y-6 pt-10 border-t border-white/10">
                {[
                  { icon: 'fa-certificate', text: 'Verified Internship Certificate' },
                  { icon: 'fa-file-signature', text: 'Letter of Recommendation' },
                  { icon: 'fa-laptop-code', text: '300+ Solved Project Access' },
                  { icon: 'fa-infinity', text: 'Lifetime Updates' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 text-sm font-bold text-apple-gray">
                    <i className={`fa-solid ${item.icon} text-indigo-400`}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
