import { useEffect, useRef, useState } from "react";

/* Classes applied while the 3D tilt + glow is active (desktop pointers only). */
export const TILT =
  "relative overflow-hidden will-change-transform transition-[transform,box-shadow] duration-[120ms] ease-out " +
  "[transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translateY(var(--ty,0px))] " +
  "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none " +
  "after:opacity-0 after:transition-opacity after:duration-200 " +
  "after:[background:radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,0%),rgba(13,148,136,0.16),transparent_62%)] " +
  "hover:after:opacity-100";

/* Usage:
   const [ref, tilting] = useTilt();
   <article ref={ref} className={`... ${tilting ? TILT : "simple hover lift classes"}`}> */
export default function useTilt() {
  const ref = useRef(null);
  const [tilting, setTilting] = useState(false);

  useEffect(() => {
    const c = ref.current;
    if (
      !c ||
      !matchMedia("(hover:hover) and (pointer:fine)").matches ||
      matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;

    setTilting(true);

    const move = (e) => {
      const b = c.getBoundingClientRect(),
        x = (e.clientX - b.left) / b.width,
        y = (e.clientY - b.top) / b.height;
      c.style.setProperty("--ry", (x - 0.5) * 12 + "deg");
      c.style.setProperty("--rx", (0.5 - y) * 12 + "deg");
      c.style.setProperty("--mx", x * 100 + "%");
      c.style.setProperty("--my", y * 100 + "%");
      c.style.setProperty("--ty", "-6px");
    };
    const leave = () =>
      ["--rx", "--ry", "--ty"].forEach((k) => c.style.removeProperty(k));

    c.addEventListener("pointermove", move);
    c.addEventListener("pointerleave", leave);
    return () => {
      c.removeEventListener("pointermove", move);
      c.removeEventListener("pointerleave", leave);
    };
  }, []);

  return [ref, tilting];
}
