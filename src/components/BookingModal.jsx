import { useEffect, useRef, useState } from "react";
import { DEPTS, DOCS } from "../data";
import { useBooking } from "../hooks/BookingContext";

const pad = (n) => String(n).padStart(2, "0");
const todayISO = () => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};
const PHONE_RE = /^(\+?92|0)?3\d{9}$|^0?42\d{8}$/;
const docLabel = (d) => `${d.n} – ${d.t}`;

export default function BookingModal() {
  const { request } = useBooking();
  const dialog = useRef(null);

  const [choice, setChoice] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [dateErr, setDateErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [done, setDone] = useState(null);

  /* open whenever any "Book" button asks for it */
  useEffect(() => {
    const dlg = dialog.current;
    if (!request || !dlg) return;

    if (done) {
      setDone(null);
      setChoice("");
      setDate("");
      setPhone("");
      setDateErr("");
      setPhoneErr("");
    }
    if (request.doc !== undefined) {
      setChoice(docLabel(DOCS[request.doc]));
    } else if (request.dept) {
      const dept = DEPTS.find((d) => d.f === request.dept);
      if (dept) setChoice(dept.n);
    }
    if (!dlg.open) dlg.showModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  const close = () => dialog.current?.close();
  const min = todayISO();

  const onSubmit = (e) => {
    e.preventDefault();
    let e1 = "",
      e2 = "",
      ok = true;

    if (!choice || !date) {
      e1 = "Please choose a doctor or department and a date.";
      ok = false;
    } else if (date < min) {
      e1 = "Please choose today or a future date.";
      ok = false;
    }
    if (!PHONE_RE.test(phone.replace(/[\s-]/g, ""))) {
      e2 = "Enter a valid phone number, e.g. 0334-8211969.";
      ok = false;
    }
    setDateErr(e1);
    setPhoneErr(e2);
    if (!ok) return;

    const when = new Date(date + "T00:00").toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    setDone({ choice, when, phone });
  };

  return (
    <dialog
      id="modal"
      ref={dialog}
      aria-labelledby="mt"
      onClick={(e) => {
        if (e.target === dialog.current) close();
      }}
    >
      <button className="x" id="close" aria-label="Close" onClick={close}>
        ×
      </button>
      <div className="mb" id="mbody">
        {done ? (
          <div className="ok">
            <div className="ico">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 5 5 9-10" />
              </svg>
            </div>
            <h2>Request received</h2>
            <p className="s" style={{ marginTop: 10 }}>
              {done.choice}
              <br />
              {done.when}
            </p>
            <p className="s">
              We’ll call you on {done.phone} to confirm your time. Booking hours
              are 9:00 AM – 11:00 PM.
            </p>
            <button className="btn btn-p" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="mt">Book an appointment</h2>
            <p className="s">
              Tell us who you’d like to see and when. Our team will call to
              confirm your slot.
            </p>
            <form id="form" noValidate onSubmit={onSubmit}>
              <label htmlFor="doc">Doctor / department</label>
              <select
                id="doc"
                required
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
              >
                <option value="">Select doctor or department…</option>
                <optgroup label="Doctors">
                  {DOCS.map((d) => (
                    <option key={d.id} value={docLabel(d)}>
                      {docLabel(d)}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Departments">
                  {DEPTS.map((d) => (
                    <option key={d.k} value={d.n}>
                      {d.n}
                    </option>
                  ))}
                </optgroup>
              </select>

              <label htmlFor="date">Preferred date</label>
              <input
                id="date"
                type="date"
                required
                min={min}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <div className="err" id="e1">
                {dateErr}
              </div>

              <label htmlFor="ph">Phone number</label>
              <input
                id="ph"
                type="tel"
                inputMode="tel"
                placeholder="03XX-XXXXXXX"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="err" id="e2">
                {phoneErr}
              </div>

              <button className="btn btn-p" type="submit">
                Request Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
