const METRICS = [
  ["6+", "Medical Specialties"],
  ["1,000+", "Verified Reviews"],
  ["Up to 18 Yrs", "Experience"],
  ["24/7", "Medical Store"],
];

export default function Metrics() {
  return (
    <div className="relative z-[3] -mt-[52px] m700:-mt-9">
      <div className="max-w-[1116px] mx-auto px-[22px] grid grid-cols-4 m700:grid-cols-2 m700:mx-[14px] bg-glass backdrop-blur-[18px] border border-line rounded-[28px] shadow-[0_36px_70px_-34px_rgba(15,23,42,0.45)]">
        {METRICS.map(([value, label]) => (
          <div
            key={label}
            className="py-[30px] px-[18px] text-center border-r border-line last:border-r-0 m700:[&:nth-child(2)]:border-r-0 m700:[&:nth-child(-n+2)]:border-b"
          >
            <b className="block font-h font-extrabold text-[length:clamp(26px,3.4vw,38px)] leading-[normal] text-teal">
              {value}
            </b>
            <span className="text-sm text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
