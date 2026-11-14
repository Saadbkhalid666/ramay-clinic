
import { useEffect, useRef, useState } from "react";
import { DEPTS, DOCS } from "../data";
import { useBooking } from "../hooks/BookingContext";
import { btn } from "../ui";

const pad = (n) => String(n).padStart(2, "0");

const todayISO = () => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

const PHONE_RE = /^(\+?92|0)?3\d{9}$|^0?42\d{8}$/;

const WHATSAPP_NUMBER = "923004196455";

const docLabel = (d) => `${d.n} – ${d.t}`;

const LABEL =
  "block font-h font-semibold text-sm leading-[normal] mt-[14px] mb-[6px]";

const FIELD =
  "w-full font-b text-base leading-[normal] py-[13px] px-[14px] rounded-[14px] border-[1.5px] border-line bg-bg text-navy focus:outline-none focus:border-teal focus:shadow-[0_0_0_4px_var(--tint)]";

const ERR = "text-[#b91c1c] text-[13px] min-h-[18px] mt-1";

const SUBMIT = `${btn("p")} w-full mt-[14px]`;

export default function BookingModal() {
  const { request } = useBooking();
  const dialog = useRef(null);

  const [choice, setChoice] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [dateErr, setDateErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  /* Open whenever any "Book" button asks for it */
  useEffect(() => {
    const dlg = dialog.current;
    if (!request || !dlg) return;

    setChoice("");
    setDate("");
    setPhone("");
    setMessage("");
    setDateErr("");
    setPhoneErr("");

    if (request.doc !== undefined) {
      setChoice(docLabel(DOCS[request.doc]));
    } else if (request.dept) {
      const dept = DEPTS.find((d) => d.f === request.dept);
      if (dept) setChoice(dept.n);
    }

    if (!dlg.open) dlg.showModal();

  }, [request]);

  const close = () => dialog.current?.close();

  const min = todayISO();

  const onSubmit = (e) => {
    e.preventDefault();

    let e1 = "";
    let e2 = "";
    let ok = true;

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

    const when = new Date(date + "T00:00").toLocaleDateString(
      "en-GB",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    const whatsappMessage = `
Hello Ramay Clinic,

I would like to request an appointment.

Doctor / Department: ${choice}
Preferred Date: ${when}
Patient Phone: ${phone}

Additional Message:
${message.trim() || "No additional message."}

Please let me know your available appointment timings.

Thank you.
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <dialog
      ref={dialog}
      className="border-0 p-0 rounded-[28px] w-[min(480px,calc(100%_-_28px))] bg-card text-navy shadow-[0_40px_90px_-30px_rgba(15,23,42,0.6)] open:animate-pop backdrop:bg-[rgba(15,23,42,0.55)] backdrop:backdrop-blur-[4px]"
      aria-labelledby="mt"
      onClick={(e) => {
        if (e.target === dialog.current) close();
      }}
    >
      <button
        type="button"
        className="absolute top-4 right-4 w-[38px] h-[38px] rounded-xl border-0 bg-bg text-navy cursor-pointer text-[20px]"
        aria-label="Close"
        onClick={close}
      >
        ×
      </button>

      <div className="p-[30px]">
        <h2 id="mt" className="text-[24px] mb-[6px]">
          Book an appointment
        </h2>

        <p className="mt-0 mb-5 text-muted text-[15px]">
          Tell us who you'd like to see and when. Our team will contact
          you via WhatsApp to confirm your appointment.
        </p>

        <form noValidate onSubmit={onSubmit}>
          <label className={LABEL} htmlFor="doc">
            Doctor / department
          </label>

          <select
            id="doc"
            className={FIELD}
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

          <label className={LABEL} htmlFor="date">
            Preferred date
          </label>

          <input
            id="date"
            className={FIELD}
            type="date"
            required
            min={min}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className={ERR}>{dateErr}</div>

          <label className={LABEL} htmlFor="ph">
            Phone number
          </label>

          <input
            id="ph"
            className={FIELD}
            type="tel"
            inputMode="tel"
            placeholder="03XX-XXXXXXX"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className={ERR}>{phoneErr}</div>

          <label className={LABEL} htmlFor="msg">
            Additional message (optional)
          </label>

          <textarea
            id="msg"
            className={`${FIELD} min-h-[100px] resize-y`}
            placeholder="Tell us briefly about your appointment request..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
          />

          <button className={SUBMIT} type="submit">
            Request Appointment via WhatsApp
          </button>

          <p className="text-muted text-xs text-center mt-3 leading-relaxed">
            Your appointment is not confirmed until the clinic
            contacts you and confirms your booking.
          </p>
        </form>
      </div>
    </dialog>
  );
}
