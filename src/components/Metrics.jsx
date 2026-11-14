const METRICS = [
  ["6+", "Medical Specialties"],
  ["1,000+", "Verified Reviews"],
  ["Up to 18 Yrs", "Experience"],
  ["24/7", "Medical Store"],
];

export default function Metrics() {
  return (
    <div className="metrics">
      <div className="wrap">
        {METRICS.map(([value, label]) => (
          <div className="m" key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
