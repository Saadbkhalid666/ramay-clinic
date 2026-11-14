export default function Logo({ href, ariaLabel, style, nameColor, subColor }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      className="logo"
      href={href}
      aria-label={ariaLabel}
      style={style}
    >
      <span className="logo-mark">
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
        <b style={nameColor ? { color: nameColor } : undefined}>Ramay Clinic</b>
        <small style={subColor ? { color: subColor } : undefined}>
          The Caring Specialists
        </small>
      </span>
    </Tag>
  );
}
