import { BIO, CLINIC, DOCS } from "../data";
import { useBooking } from "../hooks/BookingContext";
import ImageSlot from "./ImageSlot";

export default function DoctorProfile({ index: i }) {
  const { openBooking } = useBooking();
  const d = DOCS[i],
    b = BIO[i];

  const parts = d.n.split(" ");
  const short = parts[0] === "Dr." ? "Dr. " + parts[1] : parts[0];

  return (
    <div className="wrap pf">
      <a className="back" href="#doctors">
        ← All doctors
      </a>
      <div className="pg">
        <aside>
          <ImageSlot k={"d" + i} label={d.n} className="pp" />
          <div className="card side">
            <h3>Visit details</h3>
            <p>
              <b>Booking hours:</b> {CLINIC.hours}
            </p>
            <p>
              <b>Phone:</b> {CLINIC.phone1} / {CLINIC.phone2}
            </p>
            <p>
              <b>Address:</b> {CLINIC.address}
            </p>
          </div>
        </aside>

        <div>
          <span className="tag">{d.t}</span>
          <h1>{d.n}</h1>
          <p className="role">{d.r}</p>
          <p className="qual">{d.q}</p>

          <div className="stats">
            <div>
              <b>{d.y}</b>
              <span>Years experience</span>
            </div>
            <div>
              <b className="star">{d.s ? "★ " + d.s : "Verified"}</b>
              <span>{d.s ? "Patient rating" : "Specialist"}</span>
            </div>
          </div>

          <button className="btn btn-p" onClick={() => openBooking({ doc: i })}>
            Book a Visit with {short}
          </button>

          <h2>About</h2>
          <p style={{ color: "var(--muted)", margin: 0 }}>{b.b}</p>

          <h2>Areas of care</h2>
          <ul>
            {b.a.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12 }}>
            Areas of care are general to the specialty. Please confirm specific
            services when booking.
          </p>

          <h2>Other specialists</h2>
          <div className="others">
            {DOCS.filter((x) => x.i !== i).map((x) => (
              <a key={x.id} className="chip" href={`#doctor-${x.id}`}>
                {x.n}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
