 import React from 'react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-[22px] flex items-center justify-between h-[70px] gap-4">
        <a href="#top" className="flex items-center gap-[11px]">
          <span className="w-[42px] h-[42px] rounded-[14px] bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
            +
          </span>
          <span>
            <b className="block text-[18px]">Ramay Clinic</b>
            <small className="block text-xs text-slate-500 font-normal">The Caring Specialists</small>
          </span>
        </a>
        <div className="hidden md:flex gap-6 font-medium text-[15px] text-slate-600">
          <a href="#departments" className="hover:text-teal-600 transition-colors">Departments</a>
          <a href="#doctors" className="hover:text-teal-600 transition-colors">Our Doctors</a>
          <a href="#pharmacy" className="hover:text-teal-600 transition-colors">Pharmacy</a>
          <a href="#reviews" className="hover:text-teal-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-teal-600 transition-colors">FAQs</a>
        </div>
        <button 
          onClick={() => onOpenModal()}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all cursor-pointer"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
}