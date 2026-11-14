import { TESTI } from "../data";
import useTilt, { TILT } from "../hooks/useTilt";
import { card, GRID3 } from "../ui";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function Testimonial({ t }) {
  const [ref, tilting] = useTilt();
  return (
    <figure
      ref={ref}
      className={`${card} p-[26px] flex flex-col gap-[14px] m-0 ${
        tilting ? TILT : ""
      }`}
    >
      <div className="text-amber font-bold" aria-label="5 out of 5 stars">
        ★★★★★
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
      <div className={GRID3}>
        {TESTI.map((t) => (
          <Testimonial key={t.n} t={t} />
        ))}
      </div>
    </Section>
  );
}
