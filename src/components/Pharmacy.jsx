import { CLINIC } from "../data";
import Location from "./Location";
import PharmacyScene from "./PharmacyScene";
import SectionHeader from "./SectionHeader";

export default function Pharmacy() {
  return (
    <section id="pharmacy">
      <div className="wrap">
        <SectionHeader id="location" title="On-site pharmacy & location">
          Consult, collect your prescription and get medicines in one visit. The
          medical store never closes.
        </SectionHeader>
        <div className="pharm">
          <PharmacyScene />
          <div>
            <span className="big">24/7</span>
            <h3>Medicines, at any hour.</h3>
            <p>
              Our on-site medical store never closes. Collect your prescription
              after a consultation, or walk in whenever you need medicine.
            </p>
            <a className="btn btn-p" href={CLINIC.phone1Href}>
              Call {CLINIC.phone1}
            </a>
          </div>
        </div>
        <Location />
      </div>
    </section>
  );
}
