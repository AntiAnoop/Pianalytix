
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
              Get in Touch with our <br />
              <span className="text-blue-600">Learning Experts</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Have questions about our internship programs or bulk enrollments? Our team is here to help you accelerate your career.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Our Office</h4>
                  <p className="text-slate-500">Pianalytix Edutech Pvt Ltd, Madhapur, Hyderabad, Telangana 500 081.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone Support</h4>
                  <p className="text-slate-500">04035835187</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fa-solid fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email Inquiry</h4>
                  <p className="text-slate-500">info@pianalytix.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="+91 00000 00000" required />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Year of Graduation</label>
                <select className="w-full bg-white border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                  <option>Select Year</option>
                  {[2025, 2024, 2023, 2022, 2021, 2020].map(y => <option key={y}>{y}</option>)}
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Tell us about your interests..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-blue-200">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
