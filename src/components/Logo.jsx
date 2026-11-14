import rclogo from "../assets/rc.jpeg"

export default function Logo({ href, ariaLabel, className = "", nameColor, subColor }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      className={`flex items-center gap-[11px] ${className}`}
      href={href}
      aria-label={ariaLabel}
    >
      <span className="w-[42px] h-[42px] rounded-[14px]   grid place-items-center">
       <img src={rclogo} alt="Ramay Clinic" />
      </span>
      <span>
        <b
          className="block font-h font-extrabold text-[18px] leading-[1.1]"
          style={nameColor ? { color: nameColor } : undefined}
        >
          Ramay Clinic
        </b>
        <small
          className="block text-xs text-muted m820:hidden"
          style={subColor ? { color: subColor } : undefined}
        >
          The Caring Specialists
        </small>
      </span>
    </Tag>
  );
}
