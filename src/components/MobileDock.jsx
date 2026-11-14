import { CLINIC } from "../data";
import { useBooking } from "../hooks/BookingContext";
import { btn } from "../ui";

/* Sticky Call / Book bar, shown only on small screens */
export default function MobileDock() {
  const { openBooking } = useBooking();
  return (
    <div className="hidden m700:grid grid-cols-2 gap-[10px] fixed left-3 right-3 bottom-[calc(12px_+_env(safe-area-inset-bottom,0px))] z-[55] bg-glass backdrop-blur-[16px] border border-line rounded-[20px] p-2 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.5)]">
      <a className={btn("s", "p-3")} href={CLINIC.phone1Href}>
        Call Now
      </a>
      <button className={btn("p", "p-3")} onClick={() => openBooking()}>
        Book Visit
      </button>
    </div>
  );
}
