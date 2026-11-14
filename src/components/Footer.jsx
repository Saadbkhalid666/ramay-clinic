import { CLINIC } from "../data";
import { useBooking } from "../hooks/BookingContext";
import Logo from "./Logo";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <Logo
              style={{ marginBottom: 14 }}
              nameColor="#fff"
              subColor="#94a3b8"
            />
            <p style={{ margin: 0, maxWidth: 300 }}>
              Multi-specialty clinic and 24/7 medical store. {CLINIC.address}.
            </p>
          </div>
          <div>
            <h4>Departments</h4>
            <a href="#departments">Internal Medicine &amp; Nephrology</a>
            <a href="#departments">Orthopedic Surgery</a>
            <a href="#departments">Dermatology</a>
            <a href="#departments">Pediatrics</a>
            <a href="#departments">Physiotherapy</a>
            <a href="#departments">Clinical Psychology</a>
          </div>
          <div>
            <h4>Quick links</h4>
            <a href="#doctors">Our Doctors</a>
            <a href="#pharmacy">Pharmacy</a>
            <a href="#location">Location</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQs</a>
            <a
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
            <h4>Contact</h4>
            <div className="emerg">
              <small>Call us any time</small>
              <b>{CLINIC.phone1}</b>
              <a href={CLINIC.phone2Href}>{CLINIC.phone2}</a>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 13.5 }}>
              For life-threatening emergencies, go to your nearest emergency
              department.
            </p>
          </div>
        </div>
        <div className="copy">
          <span>
            © <span id="yr">{new Date().getFullYear()}</span> Ramay Clinic – The
            Caring Specialists. All rights reserved.
          </span>
          <span>Bedian Road, Lahore</span>
        </div>
      </div>
    </footer>
  );
}
