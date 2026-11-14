import { IMG } from "../data";

/* Image placeholder. Fill the matching key in src/data/index.js (IMG) to show a photo. */
export default function ImageSlot({ k, label, className = "" }) {
  const src = IMG[k];
  return (
    <div
      className={`relative grid place-items-center text-center p-[14px] border-2 border-dashed ${
        src ? "border-transparent" : "border-teal"
      } text-teal-d font-h font-semibold text-[13px] leading-[1.4] overflow-hidden [background:repeating-linear-gradient(45deg,var(--tint)_0_12px,transparent_12px_24px),var(--bg)] ${className}`}
    >
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
