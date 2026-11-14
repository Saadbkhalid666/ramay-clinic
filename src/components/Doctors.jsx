import { useState } from "react";
import { DOCS, FILTERS } from "../data";
import { CHIP, GRID3 } from "../ui";
import DoctorCard from "./DoctorCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Doctors() {
  const [filter, setFilter] = useState("All");

  return (
    <Section id="doctors" alt>
      <SectionHeader title="Meet our specialists">
        Experienced, qualified and approachable. Filter by department or book
        directly with the doctor you need.
      </SectionHeader>
      <div
        className="flex flex-wrap gap-[10px] mb-[30px]"
        role="group"
        aria-label="Filter doctors by department"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            className={CHIP}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={GRID3}>
        {DOCS.filter((d) => filter === "All" || d.f === filter).map((d) => (
          <DoctorCard key={d.id} doc={d} />
        ))}
      </div>
    </Section>
  );
}
