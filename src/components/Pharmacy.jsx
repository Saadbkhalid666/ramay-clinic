import { CLINIC } from "../data";
import { btn } from "../ui";
import Location from "./Location";
import PharmacyScene from "./PharmacyScene";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Pharmacy() {
  return (
    <Section id="pharmacy">
      <SectionHeader id="location" title="On-site pharmacy & location">
        Consult, collect your prescription and get medicines in one visit. The
        medical store never closes.
      </SectionHeader>
      <div className="relative overflow-hidden rounded-[32px] text-white p-[46px] m700:py-[30px] m700:px-6 mb-6 min-h-[280px] grid items-center [background:radial-gradient(620px_320px_at_88%_30%,rgba(13,148,136,0.42),transparent_65%),#0b1220]">
        <PharmacyScene />
        <div className="relative z-[2] max-w-[480px]">
          <span className="block font-h font-extrabold text-[length:clamp(56px,9vw,100px)] leading-none text-[#5eead4] tracking-[-0.04em] mb-2">
            24/7
          </span>
          <h3 className="text-[length:clamp(22px,3vw,30px)] font-extrabold mb-[10px]">
            Medicines, at any hour.
          </h3>
          <p className="text-[#b6c4d9] mt-0 mb-[22px]">
            Our on-site medical store never closes. Collect your prescription
            after a consultation, or walk in whenever you need medicine.
          </p>
          <a className={btn("p")} href={CLINIC.phone1Href}>
            Call {CLINIC.phone1}
          </a>
        </div>
      </div>
      <Location />
    </Section>
  );
}
