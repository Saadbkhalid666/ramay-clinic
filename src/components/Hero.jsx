import { useState } from "react";
import { IMG } from "../data";
import { useBooking } from "../hooks/BookingContext";
import HeroScene from "./HeroScene";

export default function Hero() {
  const { openBooking } = useBooking();
  const [glOn, setGlOn] = useState(false);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="badge">
            <i className="dot"></i>Multi-Specialty Clinic &amp; 24/7 Medical
            Store • Lahore
          </span>
          <h1>The Caring Specialists: Complete Healthcare for Your Family</h1>
          <p className="sub">
            Multidisciplinary care across 6 departments, from kidney and
            diabetes care to bones, skin, children’s health, rehabilitation and
            mental wellbeing, all under one roof on Bedian Road.
          </p>
          <div className="ctas">
            <button className="btn btn-p" onClick={() => openBooking()}>
              Book an Appointment
            </button>
            <a className="btn btn-s" href="#doctors">
              View Our Doctors
            </a>
          </div>
        </div>

        <div className={`visual${glOn ? " gl-on" : ""}`}>
          <div className="frame">
            <svg
              viewBox="0 0 400 408"
              width="100%"
              height="100%"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity=".16" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".04" />
                </linearGradient>
              </defs>
              <circle cx="330" cy="70" r="130" fill="url(#g)" />
              <circle cx="40" cy="380" r="150" fill="url(#g)" />
              <rect
                x="88"
                y="104"
                width="224"
                height="236"
                rx="20"
                fill="#fff"
                fillOpacity=".95"
              />
              <rect
                x="88"
                y="104"
                width="224"
                height="46"
                rx="20"
                fill="#0D9488"
              />
              <rect x="88" y="130" width="224" height="20" fill="#0D9488" />
              <path
                d="M200 116v22M189 127h22"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <g fill="#CCFBF1">
                <rect x="110" y="172" width="42" height="42" rx="8" />
                <rect x="179" y="172" width="42" height="42" rx="8" />
                <rect x="248" y="172" width="42" height="42" rx="8" />
                <rect x="110" y="232" width="42" height="42" rx="8" />
                <rect x="248" y="232" width="42" height="42" rx="8" />
              </g>
              <rect
                x="174"
                y="270"
                width="52"
                height="70"
                rx="10"
                fill="#0F172A"
              />
              <circle cx="216" cy="306" r="3" fill="#D97706" />
              <rect
                x="70"
                y="340"
                width="260"
                height="10"
                rx="5"
                fill="#0F172A"
                fillOpacity=".25"
              />
            </svg>
          </div>

          <HeroScene onReady={() => setGlOn(true)} />

          {IMG.hero && (
            <img
              id="heroImg"
              src={IMG.hero}
              alt="Ramay Clinic"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 36,
              }}
            />
          )}

          <div className="fl f1">
            <div className="ic">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12 2 3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9z" />
              </svg>
            </div>
            <div>
              <b>4.9★</b>
              <span>Patient Rating</span>
            </div>
          </div>

          <div className="fl f2">
            <div className="ic">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <div>
              <b>6+</b>
              <span>Specialties</span>
            </div>
          </div>

          <div className="fl f3">
            <div className="ic">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div>
              <b>24/7</b>
              <span>Pharmacy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
