
import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-black space-y-4 px-4 pb-20">
      <Hero />
      
      {/* Product Billboards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { 
            id: 'ml', 
            name: 'Machine Learning', 
            subtitle: 'The Core of Intelligence',
            desc: 'Neural Networks, NLP & Transformers.',
            img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
            grad: 'from-blue-600/20'
          },
          { 
            id: 'ds', 
            name: 'Data Science', 
            subtitle: 'Insights at Scale',
            desc: 'Big Data, Analytics & Visualization.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
            grad: 'from-purple-600/20'
          }
        ].map((track) => (
          <Link key={track.id} to={`/internship/${track.id}`} className="glass-card group h-[700px] overflow-hidden relative flex flex-col items-center text-center pt-24 px-10">
            <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tighter">{track.name}</h3>
              <p className="text-xl text-apple-gray mb-8 font-medium">{track.subtitle}</p>
              <div className="flex space-x-6 justify-center">
                <span className="text-apple-blue font-bold text-lg hover:underline decoration-2 underline-offset-4">Learn more &gt;</span>
                <span className="text-apple-blue font-bold text-lg hover:underline decoration-2 underline-offset-4">Join &gt;</span>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img 
                src={track.img} 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" 
                alt={track.name} 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${track.grad} to-transparent`}></div>
            </div>
          </Link>
        ))}
      </section>

      <FeatureGrid />

      {/* Immersive CTA Section */}
      <section className="glass-card h-[600px] overflow-hidden relative flex flex-col items-center justify-center text-center px-6">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
          alt="CTA Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-pink-900/40"></div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tighter">Start your <br /> <span className="gradient-text">mastery journey.</span></h2>
          <p className="text-xl md:text-2xl text-apple-gray mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
            300+ professional industrial projects are waiting for your touch. Built by engineers, for engineers.
          </p>
          <button className="apple-btn px-16 py-5 text-xl tracking-tight">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
