export default function SectionHeader({ id, title, children }) {
  return (
    <div className="max-w-[620px] mb-10" id={id}>
      <h2 className="text-[length:clamp(28px,4vw,40px)] font-extrabold">
        {title}
      </h2>
      <p className="text-muted mt-3 mb-0 text-[17px]">{children}</p>
    </div>
  );
}
