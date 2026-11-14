import { IMG } from "../data";

/* Image placeholder. Fill the matching key in src/data/index.js (IMG) to show a photo. */
export default function DoctorImageSlot({ k, label, className = "" }) {
  const src = IMG[k];
  return (
    <div
      className={`relative grid place-items-center text-center p-[14px] border-2 border-dashed ${
        src ? "border-transparent" : "border-teal"
      } text-teal-d font-h font-semibold text-[13px] leading-[1.4] overflow-hidden  ${className}`}
    >
      <span className="[background:radial-gradient(720px_520px_at_78%_42%,rgba(13,148,136,0.38),transparent_65%),radial-gradient(520px_420px_at_8%_92%,rgba(217,119,6,0.16),transparent_70%),#0b1220] w-[16rem]  absolute top-12 right-8 h-[18rem] rounded-tl-[6rem] rounded-br-[6rem] -skew-x-[10deg]"></span>
      <span>
        {label}
        <small className="block font-b font-normal text-xs opacity-80">
          Image goes here
        </small>
      </span>
      {src && (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
