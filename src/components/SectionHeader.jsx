export default function SectionHeader({ id, title, children }) {
  return (
    <div className="sh" id={id}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
