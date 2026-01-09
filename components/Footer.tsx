
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-10 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-6 transition-transform">
                <i className="fa-solid fa-bolt-lightning text-white text-sm"></i>
              </div>
              <span className="text-lg font-black text-white italic tracking-tighter uppercase">PIANALYTIX</span>
            </Link>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
              Crafting high-performance educational experiences for the next generation of AI engineers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link to="/internship/ml" className="hover:text-indigo-400 transition-colors">Machine Learning</Link></li>
              <li><Link to="/internship/ds" className="hover:text-indigo-400 transition-colors">Data Analysis</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-400 transition-colors">Library (300+)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Studio</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Expert</Link></li>
              <li><Link to="/jobs" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400 transition-colors">Tech Talks</Link></li>
            </ul>
          </div>

          <div>
            <div className="glass p-8 rounded-3xl border-indigo-500/20 bg-indigo-500/5">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 italic">The Journal</h4>
              <p className="text-[10px] text-slate-500 mb-6 font-bold leading-relaxed">Weekly insights on AI deployment and career architecture.</p>
              <div className="relative">
                <input type="email" placeholder="email@pianalytix.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg text-[10px] font-black uppercase italic">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-widest uppercase text-slate-600">
          <p>© PIANALYTIX EDUTECH. BEYOND ACADEMIA.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
             <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link to="#" className="hover:text-white transition-colors">Terms</Link>
             <Link to="#" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
