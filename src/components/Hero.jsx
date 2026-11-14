import { useState } from "react";
import { IMG } from "../data";
import { useBooking } from "../hooks/BookingContext";
import { btn, btnGhost, dot, wrap } from "../ui";
import HeroScene from "./HeroScene";

/* floating stat cards around the hero visual */
const FLOAT =
  "absolute z-[2] bg-glass backdrop-blur-[12px] border border-line rounded-[18px] py-3 px-4 flex items-center gap-[11px] shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)] animate-bob";
const FLOAT_B = "block font-h font-extrabold text-[18px] leading-[1.1]";
const FLOAT_IC =
  "w-[38px] h-[38px] rounded-xl grid place-items-center";

export default function Hero() {
  const { openBooking } = useBooking();
  const [glOn, setGlOn] = useState(false);

  return (
    <header
      id="top"
      className="relative overflow-hidden text-white pt-[76px] pb-[110px] [background:radial-gradient(720px_520px_at_78%_42%,rgba(13,148,136,0.38),transparent_65%),radial-gradient(520px_420px_at_8%_92%,rgba(217,119,6,0.16),transparent_70%),#0b1220]"
    >
      <div
        className={`${wrap} grid grid-cols-[1.05fr_0.95fr] gap-[52px] items-center m900:grid-cols-1`}
      >
        <div>
          <span className="inline-flex items-center gap-[9px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.18)] rounded-full py-[7px] pr-[15px] pl-[10px] text-[13.5px] font-medium text-[#cbd5e1] backdrop-blur-[10px]">
            <i className={dot}></i>Multi-Specialty Clinic &amp; 24/7 Medical
            Store • Lahore
          </span>
          <h1 className="text-[length:clamp(34px,5.2vw,58px)] font-extrabold text-white mt-[22px] mb-[18px]">
            The Caring Specialists: Complete Healthcare for Your Family
          </h1>
          <p className="text-[18px] text-[#b6c4d9] max-w-[520px] mt-0 mb-[30px]">
            Multidisciplinary care across 6 departments, from kidney and
            diabetes care to bones, skin, children’s health, rehabilitation and
            mental wellbeing, all under one roof on Bedian Road.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className={btn("p")} onClick={() => openBooking()}>
              Book an Appointment
            </button>
            <a className={btnGhost} href="#doctors">
              View Our Doctors
            </a>
          </div>
        </div>

        <div className="relative aspect-[1/1.1] max-w-[580px] w-full ml-auto m900:mx-auto m900:mt-[10px]">
          <div
            className={`absolute inset-0 rounded-[36px] overflow-hidden bg-[linear-gradient(160deg,#0f172a,#134e4a_70%,#0d9488)] ${
              glOn ? "hidden" : ""
            }`}
          >
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
              src={IMG.hero}
              alt="Ramay Clinic"
              className="absolute inset-0 w-full h-full object-cover rounded-[36px]"
            />
          )}

          <div className={`${FLOAT} top-[7%] -left-[6%] m900:left-0`}>
            <div className={`${FLOAT_IC} bg-[#fef3c7] text-amber`}>
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
              <b className={FLOAT_B}>4.9★</b>
              <span className="text-[12.5px] text-muted">Patient Rating</span>
            </div>
          </div>

          <div
            className={`${FLOAT} top-[44%] -right-[5%] m900:right-0 [animation-delay:-2s]`}
          >
            <div className={`${FLOAT_IC} bg-tint text-teal`}>
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
              <b className={FLOAT_B}>6+</b>
              <span className="text-[12.5px] text-muted">Specialties</span>
            </div>
          </div>

          <div
            className={`${FLOAT} bottom-[6%] left-[6%] [animation-delay:-4s]`}
          >
            <div className={`${FLOAT_IC} bg-tint text-teal`}>
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
              <b className={FLOAT_B}>24/7</b>
              <span className="text-[12.5px] text-muted">Pharmacy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
