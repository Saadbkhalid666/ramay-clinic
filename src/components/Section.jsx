import { wrap } from "../ui";

/* Page section with the standard vertical rhythm; `alt` gives the tinted band. */
export default function Section({ id, alt = false, children }) {
  return (
    <section
      id={id}
      className={`py-[84px] ${alt ? "bg-card border-y border-line" : ""}`}
    >
      <div className={wrap}>{children}</div>
    </section>
  );
}
