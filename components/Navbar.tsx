
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-500 apple-nav`}>
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center">
            <i className="fa-solid fa-code text-white text-[12px]"></i>
          </div>
          <span className="text-[15px] font-bold tracking-tight uppercase">Pianalytix</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] font-medium transition-all tracking-tight ${
                location.pathname === link.path ? 'text-white' : 'text-apple-gray hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/contact" className="hidden sm:block text-[12px] font-medium text-apple-gray hover:text-white transition-colors">
            Support
          </Link>
          <a
            href="https://learn.pianalytix.com/"
            className="apple-btn text-[11px] py-1.5 px-5 tracking-tight uppercase"
          >
            LMS Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
