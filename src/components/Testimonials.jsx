import { TESTI } from "../data";
import useTilt from "../hooks/useTilt";
import SectionHeader from "./SectionHeader";

function Testimonial({ t }) {
  const [ref, tilt] = useTilt();
  return (
    <figure ref={ref} className={`card t ${tilt}`} style={{ margin: 0 }}>
      <div className="star" aria-label="5 out of 5 stars">
        ★★★★★
      </div>
      <p>{t.q}</p>
      <figcaption className="who">
        <div className="av">
          {t.n
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>
        <div>
          <b style={{ fontFamily: "var(--h)" }}>{t.n}</b>
          <br />
          <small style={{ color: "var(--muted)" }}>{t.d}</small>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews">
      <div className="wrap">
        <SectionHeader title="What our patients say">
          Rated 4.9★ across 1,000+ verified reviews.
        </SectionHeader>
        <div className="grid3" id="tgrid">
          {TESTI.map((t) => (
            <Testimonial key={t.n} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
