import { DEPTS } from "../data";
import { useBooking } from "../hooks/BookingContext";
import useTilt from "../hooks/useTilt";
import DeptIcon from "./DeptIcon";
import SectionHeader from "./SectionHeader";

function DeptCard({ dept }) {
  const { openBooking } = useBooking();
  const [ref, tilt] = useTilt();
  return (
    <article ref={ref} className={`card dept ${tilt}`}>
      <div className="ico">
        <DeptIcon name={dept.k} />
      </div>
      <h3>{dept.n}</h3>
      <p>{dept.d}</p>
      <button className="a" onClick={() => openBooking({ dept: dept.f })}>
        Book a visit
      </button>
    </article>
  );
}

export default function Departments() {
  return (
    <section id="departments">
      <div className="wrap">
        <SectionHeader title="Medical departments">
          Six departments, one coordinated team, so your family doesn’t have to
          travel across the city for answers.
        </SectionHeader>
        <div className="grid3" id="deptGrid">
          {DEPTS.map((d) => (
            <DeptCard key={d.k} dept={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
