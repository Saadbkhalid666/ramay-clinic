import { DEPTS } from "../data";
import { useBooking } from "../hooks/BookingContext";
import useTilt, { TILT } from "../hooks/useTilt";
import { card, GRID3, ico } from "../ui";
import DeptIcon from "./DeptIcon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function DeptCard({ dept }) {
  const { openBooking } = useBooking();
  const [ref, tilting] = useTilt();
  return (
    <article
      ref={ref}
      className={`${card} p-7 hover:border-teal hover:shadow-[0_22px_40px_-26px_rgba(13,148,136,0.55)] ${
        tilting
          ? TILT
          : "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[5px]"
      }`}
    >
      <div className={ico}>
        <DeptIcon name={dept.k} />
      </div>
      <h3 className="text-[19px] mb-2">{dept.n}</h3>
      <p className="mt-0 mb-[14px] text-muted text-[15px]">{dept.d}</p>
      <button
        className="font-h font-semibold text-sm leading-[normal] text-teal cursor-pointer bg-transparent border-0 p-0"
        onClick={() => openBooking({ dept: dept.f })}
      >
        Book a visit
      </button>
    </article>
  );
}

export default function Departments() {
  return (
    <Section id="departments">
      <SectionHeader title="Medical departments">
        Six departments, one coordinated team, so your family doesn’t have to
        travel across the city for answers.
      </SectionHeader>
      <div className={GRID3}>
        {DEPTS.map((d) => (
          <DeptCard key={d.k} dept={d} />
        ))}
      </div>
    </Section>
  );
}
