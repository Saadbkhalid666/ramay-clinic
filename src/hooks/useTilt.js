import { useEffect, useRef, useState } from "react";

/* 3D hover tilt + glow for cards (desktop pointers only, respects reduced motion).
   Usage: const [ref, tilt] = useTilt();  <article ref={ref} className={`card dept ${tilt}`}> */
export default function useTilt() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState("");

  useEffect(() => {
    const c = ref.current;
    if (
      !c ||
      !matchMedia("(hover:hover) and (pointer:fine)").matches ||
      matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;

    setTilt("tilt");

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

  return [ref, tilt];
}
