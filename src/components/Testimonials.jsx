
import { FaStar } from "react-icons/fa";
import { TESTI } from "../data";
import useTilt, { TILT } from "../hooks/useTilt";
import { card } from "../ui";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { useEffect, useRef, useState } from "react";

const Marquee = ({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  className = "",
}) => {
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const updateWidth = () => {
      setContentWidth(element.scrollWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex w-max gap-4"
        style={{
          animation: contentWidth
            ? `marquee-${direction} ${contentWidth / speed}s linear infinite`
            : "none",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>

        <div
          className="flex gap-4 shrink-0"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 8px));
            }
          }

          @keyframes marquee-right {
            from {
              transform: translateX(calc(-50% - 8px));
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

function Testimonial({ t }) {
  const [ref, tilting] = useTilt();

  return (
    <figure
      ref={ref}
      className={`${card} p-[26px] flex flex-col gap-[14px] m-0 w-[320px] min-h-[220px] shrink-0 ${
        tilting ? TILT : ""
      }`}
    >
      <div
        className="text-amber font-bold flex flex-row"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${i < t.r ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
            />
          ))}
      </div>

      <p className="m-0">{t.q}</p>

      <figcaption className="flex gap-3 items-center mt-auto">
        <div className="w-[42px] h-[42px] rounded-[14px] text-[15px] bg-teal grid place-items-center font-h font-extrabold leading-[normal] text-white shrink-0">
          {t.n
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>

        <div>
          <b className="font-h">{t.n}</b>
          <br />
          <small className="text-muted">{t.d}</small>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHeader title="What our patients say">
        Rated 4.9★ across 1,000+ verified reviews.
      </SectionHeader>

      <Marquee
        speed={30}
        direction="left"
        className="py-4"
      >
        {TESTI.map((t, index) => (
          <Testimonial key={`${t.n}-${index}`} t={t} />
        ))}
      </Marquee>
    </Section>
  );
}
