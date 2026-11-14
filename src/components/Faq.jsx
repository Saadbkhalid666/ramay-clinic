import { FAQ } from "../data";
import SectionHeader from "./SectionHeader";

export default function Faq() {
  return (
    <section id="faq" className="alt">
      <div className="wrap">
        <SectionHeader title="Frequently asked questions">
          Quick answers before you visit. Still unsure? Call 042-38900939.
        </SectionHeader>
        <div className="faq" id="fgrid">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
