import { useEffect, useRef } from "react";
import { useBooking } from "../hooks/BookingContext";
import Logo from "./Logo";

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
    <nav>
      <div id="prog" ref={prog}></div>
      <div className="wrap">
        <Logo href="#top" ariaLabel="Ramay Clinic home" />
        <div className="links">
          <a href="#departments">Departments</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#pharmacy">Pharmacy</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQs</a>
        </div>
        <button className="btn btn-p nav-cta" onClick={() => openBooking()}>
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
