import { CLINIC } from "../data";
import { useBooking } from "../hooks/BookingContext";

function InfoRow({ title, icon, children }) {
  return (
    <div className="row">
      <div className="ico">{icon}</div>
      <div>
        <b>{title}</b>
        {children}
      </div>
    </div>
  );
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
};

export default function Location() {
  const { openBooking } = useBooking();

  return (
    <div className="loc">
      <div className="card info">
        <span className="open">
          <i className="dot"></i>Ramay Clinic &amp; Medical Store • Open 24/7
        </span>

        <InfoRow
          title="Address"
          icon={
            <svg {...iconProps}>
              <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
          }
        >
          <span>{CLINIC.address}</span>
        </InfoRow>

        <InfoRow
          title="Booking hours"
          icon={
            <svg {...iconProps}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          }
        >
          <span>{CLINIC.hours}</span>
        </InfoRow>

        <InfoRow
          title="Phone"
          icon={
            <svg {...iconProps} strokeLinejoin="round">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
          }
        >
          <a href={CLINIC.phone1Href}>{CLINIC.phone1}</a> /{" "}
          <a href={CLINIC.phone2Href}>{CLINIC.phone2}</a>
        </InfoRow>

        <button className="btn btn-p" onClick={() => openBooking()}>
          Book Appointment
        </button>
      </div>

      <div
        className="map"
        role="img"
        aria-label="Map placeholder showing Ramay Clinic on Bedian Road, Lahore"
      >
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="600" height="400" fill="#E6F4F1" />
          <g fill="#fff">
            <rect
              x="-10"
              y="170"
              width="640"
              height="56"
              transform="rotate(-8 300 200)"
            />
            <rect
              x="250"
              y="-10"
              width="40"
              height="420"
              transform="rotate(12 270 200)"
            />
            <rect
              x="-10"
              y="320"
              width="640"
              height="26"
              transform="rotate(4 300 330)"
            />
            <rect
              x="430"
              y="-10"
              width="24"
              height="420"
              transform="rotate(-6 440 200)"
            />
          </g>
          <g fill="#CFE7E2">
            <rect x="40" y="40" width="150" height="90" rx="12" />
            <rect x="330" y="30" width="80" height="100" rx="12" />
            <rect x="480" y="60" width="90" height="70" rx="12" />
            <rect x="50" y="250" width="160" height="80" rx="12" />
            <rect x="340" y="260" width="120" height="70" rx="12" />
          </g>
          <text
            x="95"
            y="212"
            fontFamily="Inter,sans-serif"
            fontSize="14"
            fill="#64748B"
            transform="rotate(-8 95 212)"
          >
            Bedian Road
          </text>
        </svg>

        <div className="pin">
          <svg width="46" height="56" viewBox="0 0 46 56">
            <path
              d="M23 54s19-16 19-31A19 19 0 0 0 4 23c0 15 19 31 19 31z"
              fill="#0D9488"
            />
            <circle cx="23" cy="23" r="9" fill="#fff" />
            <path
              d="M23 17v12M17 23h12"
              stroke="#0D9488"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="lab">
          <div>
            <b style={{ fontFamily: "var(--h)" }}>Ramay Clinic</b>
            <br />
            <small>Bedian Road, Lahore</small>
          </div>
          <a
            className="btn btn-p"
            style={{ padding: "10px 16px" }}
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/search/?api=1&query=Ramay+Clinic+Bedian+Road+Lahore"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
