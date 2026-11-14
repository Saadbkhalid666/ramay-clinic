import { CLINIC } from "../data";
import { useBooking } from "../hooks/BookingContext";

/* Sticky Call / Book bar, shown only on small screens (see .dock in global.css) */
export default function MobileDock() {
  const { openBooking } = useBooking();
  return (
    <div className="dock">
      <a className="btn btn-s" href={CLINIC.phone1Href}>
        Call Now
      </a>
      <button className="btn btn-p" onClick={() => openBooking()}>
        Book Visit
      </button>
    </div>
  );
}
