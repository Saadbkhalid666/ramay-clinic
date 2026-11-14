import { IMG, initials } from "../data";
import { useBooking } from "../hooks/BookingContext";
import useTilt, { TILT } from "../hooks/useTilt";
import { btn, cardBase, tag } from "../ui";

export default function DoctorCard({ doc }) {
  const { openBooking } = useBooking();
  const [ref, tilting] = useTilt();
  const photo = IMG["d" + doc.i];

  /* whole card opens the profile, except clicks on its own links/buttons */
  const onCardClick = (e) => {
    if (!e.target.closest("a,button")) location.hash = "doctor-" + doc.id;
  };

  return (
    <article
      ref={ref}
      onClick={onCardClick}
      className={`${cardBase} bg-bg p-[26px] flex flex-col gap-[14px] cursor-pointer hover:shadow-[0_24px_44px_-28px_rgba(15,23,42,0.4)] ${
        tilting
          ? TILT
          : "transition-[transform,box-shadow] duration-200 hover:-translate-y-[5px]"
      }`}
    >
      <div className="flex gap-[14px] items-center">
        <div
          className="w-[60px] h-[60px] rounded-[20px] grid place-items-center font-h font-extrabold text-[20px] leading-[normal] text-white shrink-0 overflow-hidden"
          style={{ background: `linear-gradient(135deg,${doc.c})` }}
          aria-hidden="true"
        >
          {photo ? (
            <img src={photo} alt="" className="w-full h-full object-cover" />
          ) : (
            initials(doc.n)
          )}
        </div>
        <h3 className="text-[18px]">
          <a href={`#doctor-${doc.id}`} className="hover:text-teal">
            {doc.n}
          </a>
        </h3>
      </div>
      <span className={tag}>{doc.t}</span>
      <p className="font-semibold text-[15px] m-0">{doc.r}</p>
      <p className="text-[13.5px] text-muted m-0">{doc.q}</p>
      <div className="flex justify-between items-center text-sm text-muted border-t border-line pt-[14px] mt-auto">
        <span>{doc.y} Yrs Exp</span>
        {doc.s ? (
          <span
            className="text-amber font-bold"
            aria-label={`Rated ${doc.s} out of 5`}
          >
            ★ {doc.s}
          </span>
        ) : (
          <span className="inline-flex gap-[5px] items-center text-amber font-semibold text-[13px]">
            ✓ Verified specialist
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        <a className={`${btn("s")} w-full`} href={`#doctor-${doc.id}`}>
          View Profile
        </a>
        <button
          className={`${btn("p")} w-full`}
          onClick={() => openBooking({ doc: doc.i })}
        >
          Book Visit
        </button>
      </div>
    </article>
  );
}
