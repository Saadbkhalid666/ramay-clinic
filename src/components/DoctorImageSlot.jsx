
import { useState } from "react";
import { IMG } from "../data";

export default function DoctorImageSlot({ k, label, className = "" }) {
  const src = IMG[k];
  const [imageError, setImageError] = useState(false);

  const hasImage = Boolean(src) && !imageError;

  return (
    <div
      className={`relative grid place-items-center text-center overflow-hidden ${
        hasImage
          ? "p-[14px] border-2 border-transparent"
          : "p-[14px] border-0"
      } text-teal-d font-h font-semibold text-[13px] leading-[1.4] ${className}`}
    >
      {hasImage && (
        <>
          {/* Original background - only when image exists */}
          <span className="[background:radial-gradient(720px_520px_at_78%_42%,rgba(13,148,136,0.38),transparent_65%),radial-gradient(520px_420px_at_8%_92%,rgba(217,119,6,0.16),transparent_70%),#0b1220] w-[16rem] absolute top-12 h-[26rem] rounded-tl-[6rem] rounded-br-[6rem] -skew-x-[10deg]"></span>

          <img
            src={src}
            alt={label}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </>
      )}

      {!hasImage && (
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          {/* Female avatar */}
          <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10 border border-white/20">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 55C18 15 39 5 61 5C91 5 103 28 96 68L89 94H31L24 55Z" fill="#33241F" />
              <ellipse cx="60" cy="48" rx="25" ry="32" fill="#D9A17F" />
              <path d="M35 30C35 12 48 7 65 9C82 11 89 25 86 43C78 32 70 27 56 27C47 27 41 30 35 38V30Z" fill="#33241F" />
              <path d="M49 75H71V94H49V75Z" fill="#C98D6C" />
              <path d="M12 120C15 94 32 84 49 82L60 94L71 82C91 84 106 97 108 120H12Z" fill="#0D9488" />
              <circle cx="50" cy="47" r="2" fill="#33241F" />
              <circle cx="70" cy="47" r="2" fill="#33241F" />
              <path d="M53 62C57 66 63 66 67 62" stroke="#8A4B3B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
