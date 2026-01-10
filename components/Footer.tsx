
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 md:col-span-1">
             <Link to="/" className="text-xl font-bold text-white uppercase tracking-tight mb-8 block">PIANALYTIX</Link>
             <p className="text-[13px] text-apple-gray font-medium leading-relaxed">
               Crafting the next generation of engineers through intensive, project-based industrial mastery.
             </p>
          </div>

          <div>
             <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-10">Programs</h4>
             <ul className="space-y-4 text-[13px] font-medium text-apple-gray">
               <li><Link to="/internship/ml" className="hover:text-white transition-colors">Machine Learning</Link></li>
               <li><Link to="/internship/ds" className="hover:text-white transition-colors">Data Science</Link></li>
               <li><Link to="/projects" className="hover:text-white transition-colors">Solved Projects</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-10">Company</h4>
             <ul className="space-y-4 text-[13px] font-medium text-apple-gray">
               <li><Link to="/contact" className="hover:text-white transition-colors">Contact Inquiry</Link></li>
               <li><Link to="/jobs" className="hover:text-white transition-colors">Engineering Roles</Link></li>
               <li><Link to="/blogs" className="hover:text-white transition-colors">Tech Talks</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-10">Follow</h4>
             <div className="flex space-x-6 text-2xl text-apple-gray">
               <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></a>
               <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-apple-gray uppercase tracking-widest">
           <div className="flex flex-col md:flex-row md:items-center">
             <p className="mb-4 md:mb-0 md:mr-10 italic">© 2024 PIANALYTIX EDUTECH PVT LTD. ALL RIGHTS RESERVED.</p>
             <div className="flex space-x-8">
                <Link to="#" className="hover:text-white">Privacy</Link>
                <Link to="#" className="hover:text-white">Terms</Link>
             </div>
           </div>
           <p>Global Engineering Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
