import { CLINIC } from "../data";
import { useBooking } from "../hooks/BookingContext";
import { wrap } from "../ui";
import Logo from "./Logo";

const H4 = "font-h font-bold text-[15px] leading-[normal] text-white mt-0 mb-[14px]";
const LINK = "block py-[3px] text-[#cbd5e1] hover:text-[#5eead4]";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-[#0f172a] text-[#cbd5e1] pt-16 pb-7 text-[15px]">
      <div className={wrap}>
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-[34px] m860:grid-cols-2 m520:grid-cols-1">
          <div>
            <Logo className="mb-[14px]" nameColor="#fff" subColor="#94a3b8" />
            <p className="m-0 max-w-[300px]">
              Multi-specialty clinic and 24/7 medical store. {CLINIC.address}.
            </p>
          </div>
          <div>
            <h4 className={H4}>Departments</h4>
            <a className={LINK} href="#departments">Internal Medicine &amp; Nephrology</a>
            <a className={LINK} href="#departments">Orthopedic Surgery</a>
            <a className={LINK} href="#departments">Dermatology</a>
            <a className={LINK} href="#departments">Pediatrics</a>
            <a className={LINK} href="#departments">Physiotherapy</a>
            <a className={LINK} href="#departments">Clinical Psychology</a>
          </div>
          <div>
            <h4 className={H4}>Quick links</h4>
            <a className={LINK} href="#doctors">Our Doctors</a>
            <a className={LINK} href="#pharmacy">Pharmacy</a>
            <a className={LINK} href="#location">Location</a>
            <a className={LINK} href="#reviews">Reviews</a>
            <a className={LINK} href="#faq">FAQs</a>
            <a
              className={LINK}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
            >
              Book Appointment
            </a>
          </div>
          <div>
            <h4 className={H4}>Contact</h4>
            <div className="bg-[#134e4a] rounded-2xl p-4 mt-[6px]">
              <small>Call us any time</small>
              <b className="block font-h font-bold text-[18px] leading-[normal] text-white">
                {CLINIC.phone1}
              </b>
              <a className={LINK} href={CLINIC.phone2Href}>
                {CLINIC.phone2}
              </a>
            </div>
            <p className="mt-3 mb-0 text-[13.5px]">
              For life-threatening emergencies, go to your nearest emergency
              department.
            </p>
          </div>
        </div>
        <div className="border-t border-[#1e293b] mt-10 pt-[22px] text-[13.5px] text-[#94a3b8] flex justify-between flex-wrap gap-2">
          <span>
            © {new Date().getFullYear()} Ramay Clinic – The Caring Specialists.
            All rights reserved.
          </span>
          <span>Bedian Road, Lahore</span>
        </div>
      </div>
    </footer>
  );
}
