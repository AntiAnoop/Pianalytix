
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternshipPage from './pages/InternshipPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internship/:id" element={<InternshipPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home for other paths in this demo */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Mobile Enrollment CTA */}
        <div className="md:hidden sticky bottom-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 p-4 animate-in slide-in-from-bottom duration-500">
           <button className="w-full py-4 bg-orange-500 text-white font-black rounded-xl shadow-lg shadow-orange-100 flex items-center justify-center">
             Enroll Now <i className="fa-solid fa-arrow-right ml-2"></i>
           </button>
        </div>
      </div>
    </Router>
  );
};

export default App;
