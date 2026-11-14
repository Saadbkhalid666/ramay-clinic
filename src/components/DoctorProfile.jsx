import { BIO, CLINIC, DOCS } from "../data";
import { useBooking } from "../hooks/BookingContext";
import { btn, card, CHIP, tag } from "../ui";
import ImageSlot from "./ImageSlot";

export default function DoctorProfile({ index: i }) {
  const { openBooking } = useBooking();
  const d = DOCS[i],
    b = BIO[i];

  const parts = d.n.split(" ");
  const short = parts[0] === "Dr." ? "Dr. " + parts[1] : parts[0];

  return (
    <div className="max-w-[1160px] mx-auto pt-10 px-[22px] pb-[84px]">
      <a
        className="inline-block font-h font-semibold text-sm leading-[normal] text-teal mb-[22px]"
        href="#doctors"
      >
        ← All doctors
      </a>
      <div className="grid grid-cols-[340px_1fr] gap-11 items-start m860:grid-cols-1">
        <aside>
          <ImageSlot k={"d" + i} label={d.n} className="aspect-[4/5] rounded-3xl" />
          <div className={`${card} p-[22px] mt-[18px] text-[14.5px] text-muted`}>
            <h3 className="text-base text-navy mb-[10px]">Visit details</h3>
            <p className="mt-0 mb-2">
              <b>Booking hours:</b> {CLINIC.hours}
            </p>
            <p className="mt-0 mb-2">
              <b>Phone:</b> {CLINIC.phone1} / {CLINIC.phone2}
            </p>
            <p className="mt-0 mb-2">
              <b>Address:</b> {CLINIC.address}
            </p>
          </div>
        </aside>

        <div>
          <span className={tag}>{d.t}</span>
          <h1 className="text-[length:clamp(30px,4.4vw,44px)] font-extrabold mt-3 mb-[6px]">
            {d.n}
          </h1>
          <p className="font-semibold text-[17px] m-0">{d.r}</p>
          <p className="text-muted mt-1 mb-0">{d.q}</p>

          <div className="flex gap-[30px] flex-wrap my-[22px]">
            <div>
              <b className="block font-h font-extrabold text-[26px] leading-[normal]">
                {d.y}
              </b>
              <span className="text-[13.5px] text-muted">Years experience</span>
            </div>
            <div>
              <b className="block font-h font-extrabold text-[26px] leading-[normal] text-amber">
                {d.s ? "★ " + d.s : "Verified"}
              </b>
              <span className="text-[13.5px] text-muted">
                {d.s ? "Patient rating" : "Specialist"}
              </span>
            </div>
          </div>

          <button className={btn("p")} onClick={() => openBooking({ doc: i })}>
            Book a Visit with {short}
          </button>

          <h2 className="text-[21px] mt-[30px] mb-[10px]">About</h2>
          <p style={{ color: "var(--muted)", margin: 0 }}>{b.b}</p>

          <h2 className="text-[21px] mt-[30px] mb-[10px]">Areas of care</h2>
          <ul className="grid gap-[10px] list-none m-0 p-0">
            {b.a.map((x) => (
              <li
                key={x}
                className="flex gap-[10px] text-muted before:content-['✓'] before:text-teal before:font-bold"
              >
                {x}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12 }}>
            Areas of care are general to the specialty. Please confirm specific
            services when booking.
          </p>

          <h2 className="text-[21px] mt-[30px] mb-[10px]">Other specialists</h2>
          <div className="flex flex-wrap gap-[10px]">
            {DOCS.filter((x) => x.i !== i).map((x) => (
              <a key={x.id} className={`${CHIP} inline-block`} href={`#doctor-${x.id}`}>
                {x.n}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
