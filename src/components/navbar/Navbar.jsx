import { useState } from "react";
import rclogo from "../../assets/rc.jpeg";

export function Navbar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Departments", href: "#departments" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Pharmacy", href: "#pharmacy" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-[22px] flex items-center justify-between h-[70px] gap-2 sm:gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-[11px] shrink-0">
          <span className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-xl sm:rounded-[14px] bg-teal-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden shrink-0">
            <img src={rclogo} className="w-full h-full object-cover" alt="Ramay Clinic Logo" />
          </span>
          <span>
            <b className="block text-base sm:text-lg leading-tight text-slate-900">
              Ramay Clinic
            </b>
            <small className="block text-[11px] sm:text-xs text-slate-500 font-normal">
              The Caring Specialists
            </small>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-sm lg:text-base text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions: Glowing Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onOpenModal()}
            className="bg-teal-600 hover:bg-teal-500 text-xs sm:text-sm lg:text-base text-white font-semibold py-2 px-3 sm:py-2.5 sm:px-5 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.5)] hover:shadow-[0_0_25px_rgba(13,148,136,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Book Appointment
          </button>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-teal-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}