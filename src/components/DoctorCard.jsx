import { IMG, initials } from "../data";
import { useBooking } from "../hooks/BookingContext";
import useTilt from "../hooks/useTilt";

export default function DoctorCard({ doc }) {
  const { openBooking } = useBooking();
  const [ref, tilt] = useTilt();
  const photo = IMG["d" + doc.i];

  /* whole card opens the profile, except clicks on its own links/buttons */
  const onCardClick = (e) => {
    if (!e.target.closest("a,button")) location.hash = "doctor-" + doc.id;
  };

  return (
    <article
      ref={ref}
      className={`card doc ${tilt}`}
      data-f={doc.f}
      data-id={doc.id}
      onClick={onCardClick}
    >
      <div className="dtop">
        <div
          className="av"
          style={{ background: `linear-gradient(135deg,${doc.c})` }}
          aria-hidden="true"
        >
          {photo ? <img src={photo} alt="" /> : initials(doc.n)}
        </div>
        <h3>
          <a href={`#doctor-${doc.id}`}>{doc.n}</a>
        </h3>
      </div>
      <span className="tag">{doc.t}</span>
      <p className="role">{doc.r}</p>
      <p className="qual">{doc.q}</p>
      <div className="meta">
        <span>{doc.y} Yrs Exp</span>
        {doc.s ? (
          <span className="star" aria-label={`Rated ${doc.s} out of 5`}>
            ★ {doc.s}
          </span>
        ) : (
          <span className="ver">✓ Verified specialist</span>
        )}
      </div>
      <div className="two">
        <a className="btn btn-s" href={`#doctor-${doc.id}`}>
          View Profile
        </a>
        <button className="btn btn-p" onClick={() => openBooking({ doc: doc.i })}>
          Book Visit
        </button>
      </div>
    </article>
  );
}
