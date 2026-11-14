import { FAQ } from "../data";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Faq() {
  return (
    <Section id="faq" alt>
      <SectionHeader title="Frequently asked questions">
        Quick answers before you visit. Still unsure? Call 042-38900939.
      </SectionHeader>
      <div className="max-w-[780px]">
        {FAQ.map(([q, a]) => (
          <details
            key={q}
            className="group bg-bg border border-line rounded-[18px] px-[22px] mb-3 transition-colors duration-200 open:border-teal"
          >
            <summary className="cursor-pointer list-none font-h font-bold text-[17px] leading-[normal] py-5 flex justify-between gap-4 [&::-webkit-details-marker]:hidden after:content-['+'] after:text-teal after:text-[24px] after:leading-none group-open:after:content-['–']">
              {q}
            </summary>
            <p className="mt-0 mb-5 text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
