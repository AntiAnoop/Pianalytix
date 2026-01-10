import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16 transition-all duration-500 apple-nav`}>
        <div className="max-w-6xl mx-auto h-full px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center">
              <i className="fa-solid fa-code text-white text-[10px] md:text-[12px]"></i>
            </div>
            <span className="text-[13px] md:text-[15px] font-bold tracking-tight uppercase">Pianalytix</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/contact" className="text-[12px] font-medium text-apple-gray hover:text-white transition-colors">
              Support
            </Link>
            <a
              href="https://learn.pianalytix.com/"
              className="apple-btn text-[11px] py-1.5 px-5 tracking-tight uppercase"
            >
              LMS Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-xl z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-times"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-3xl font-bold transition-all ${
                location.pathname === link.path ? 'text-white scale-110' : 'text-apple-gray'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-3xl font-bold text-apple-gray"
          >
            Support
          </Link>
          <a
            href="https://learn.pianalytix.com/"
            className="apple-btn text-lg py-4 px-12 tracking-tight uppercase mt-8"
          >
            LMS Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
