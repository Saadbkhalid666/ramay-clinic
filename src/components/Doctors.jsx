import { useState } from "react";
import { DOCS, FILTERS } from "../data";
import DoctorCard from "./DoctorCard";
import SectionHeader from "./SectionHeader";

export default function Doctors() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="doctors" className="alt">
      <div className="wrap">
        <SectionHeader title="Meet our specialists">
          Experienced, qualified and approachable. Filter by department or book
          directly with the doctor you need.
        </SectionHeader>
        <div
          className="filters"
          id="filters"
          role="group"
          aria-label="Filter doctors by department"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid3" id="docGrid">
          {DOCS.filter((d) => filter === "All" || d.f === filter).map((d) => (
            <DoctorCard key={d.id} doc={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
