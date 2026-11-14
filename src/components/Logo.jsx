export default function Logo({ href, ariaLabel, className = "", nameColor, subColor }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      className={`flex items-center gap-[11px] ${className}`}
      href={href}
      aria-label={ariaLabel}
    >
      <span className="w-[42px] h-[42px] rounded-[14px] bg-teal grid place-items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
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
