import { IMG } from "../data";

/* Image placeholder. Fill the matching key in src/data/index.js (IMG) to show a photo. */
export default function ImageSlot({ k, label, className = "" }) {
  const src = IMG[k];
  return (
    <div className={`ph ${className} ${src ? "has" : ""}`}>
      <span>
        {label}
        <small>Image goes here</small>
      </span>
      {src && <img src={src} alt={label} />}
    </div>
  );
}
