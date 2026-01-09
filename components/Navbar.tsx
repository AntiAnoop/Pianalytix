
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-500">
      <nav className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ${scrolled ? 'glass py-3 px-6' : 'py-5 px-4'}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-rose-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
              <i className="fa-solid fa-bolt-lightning text-white text-lg"></i>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white uppercase italic">
              PIANALYTIX<span className="text-rose-500 not-italic">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            <a
              href="https://learn.pianalytix.com/"
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase hover:bg-indigo-50 transition-colors shadow-xl"
            >
              LMS LOGIN
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 glass rounded-3xl p-6 lg:hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <a href="#" className="w-full py-4 bg-indigo-600 text-center rounded-2xl font-black text-white">LOGIN</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
