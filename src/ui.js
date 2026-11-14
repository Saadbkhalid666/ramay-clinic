/* Shared Tailwind class strings, so the design stays consistent across components. */

export const wrap = "max-w-[1160px] mx-auto px-[22px]";

/* buttons: btn("p") primary, btn("s") secondary; pass a custom padding if needed */
const btnBase =
  "inline-flex items-center justify-center gap-2 font-h font-semibold text-[15px] leading-[normal] rounded-[14px] cursor-pointer transition-[transform,box-shadow,background-color,border-color] duration-[180ms] hover:-translate-y-0.5";
export const btn = (kind = "p", pad = "px-[22px] py-[13px]") =>
  kind === "p"
    ? `${btnBase} ${pad} bg-teal text-white shadow-[0_8px_22px_-10px_var(--teal)] hover:bg-teal-d`
    : `${btnBase} ${pad} bg-card text-navy border-[1.5px] border-line hover:border-teal`;
/* secondary button on the dark hero */
export const btnGhost = `${btnBase} px-[22px] py-[13px] bg-[rgba(255,255,255,0.08)] border-[1.5px] border-[rgba(255,255,255,0.28)] text-white hover:border-[#5eead4]`;

export const cardBase = "border border-line rounded-3xl";
export const card = `bg-card ${cardBase}`;

/* section dot (pulsing-style status dot) */
export const dot =
  "w-[9px] h-[9px] rounded-full bg-teal shadow-[0_0_0_4px_var(--tint)]";

/* round icon tile used on departments / contact rows */
export const ico =
  "w-[52px] h-[52px] rounded-2xl bg-tint text-teal grid place-items-center mb-[18px]";

export const tag =
  "inline-block bg-tint text-teal-d font-b font-semibold text-[12.5px] leading-[normal] py-1 px-[11px] rounded-full self-start";

/* 3-column responsive card grid (3 -> 2 -> 1) */
export const GRID3 = "grid grid-cols-3 gap-5 m960:grid-cols-2 m600:grid-cols-1";

/* filter chip / pill link; pressed state is driven by aria-pressed */
export const CHIP =
  "font-h font-semibold text-sm leading-[normal] py-[9px] px-[18px] rounded-full border-[1.5px] border-line bg-card text-muted cursor-pointer transition-all duration-[180ms] hover:border-teal hover:text-teal aria-pressed:bg-teal aria-pressed:border-teal aria-pressed:text-white";
