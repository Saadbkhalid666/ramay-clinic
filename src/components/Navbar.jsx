import { useEffect, useRef } from "react";
import { useBooking } from "../hooks/BookingContext";
import { btn, wrap } from "../ui";
import Logo from "./Logo";

const LINKS = [
  ["#departments", "Departments"],
  ["#doctors", "Our Doctors"],
  ["#pharmacy", "Pharmacy"],
  ["#reviews", "Reviews"],
  ["#faq", "FAQs"],
];

export default function Navbar() {
  const prog = useRef(null);
  const { openBooking } = useBooking();

  /* scroll progress bar */
  useEffect(() => {
    const f = () => {
      if (!prog.current) return;
      prog.current.style.width =
        (scrollY /
          Math.max(1, document.documentElement.scrollHeight - innerHeight)) *
          100 +
        "%";
    };
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);

  return (
    <nav className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-glass backdrop-blur-[14px] border-b border-line">
      <div
        ref={prog}
        className="absolute left-0 -bottom-px h-[3px] w-0 z-[2] bg-[linear-gradient(90deg,var(--teal),var(--amber))]"
      ></div>
      <div className={`${wrap} flex items-center justify-between h-[70px] gap-4`}>
        <Logo href="#top" ariaLabel="Ramay Clinic home" />
        <div className="flex gap-6 font-medium text-[15px] text-muted m820:hidden">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-teal">
              {label}
            </a>
          ))}
        </div>
        <button
          className={btn("p", "px-[18px] py-[10px]")}
          onClick={() => openBooking()}
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
