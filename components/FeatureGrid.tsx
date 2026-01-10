
import React from 'react';

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Main Large Bento */}
          <div className="md:col-span-2 md:row-span-2 glass-card p-14 flex flex-col justify-end relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" 
              alt="Community" 
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Industrial Ecosystem.</h3>
              <p className="text-apple-gray text-xl font-medium leading-relaxed">
                Connect with 79k+ students and IIT graduates in an ecosystem designed for production deployment.
              </p>
            </div>
          </div>

          {/* Secondary Wide Bento */}
          <div className="md:col-span-2 glass-card p-12 flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
             <h3 className="text-3xl font-bold mb-4">300+ Projects.</h3>
             <p className="text-apple-gray text-lg font-medium leading-relaxed">
               Unlimited lifetime access to the world's largest repository of engineering codebases.
             </p>
          </div>

          {/* Small Bento 1 */}
          <div className="glass-card p-10 flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
              <i className="fa-solid fa-certificate text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Verified.</h3>
            <p className="text-apple-gray text-sm font-medium">Industry recognized certificates.</p>
          </div>

          {/* Small Bento 2 */}
          <div className="glass-card p-10 flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
              <i className="fa-solid fa-briefcase text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Placements.</h3>
            <p className="text-apple-gray text-sm font-medium">Global career assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
