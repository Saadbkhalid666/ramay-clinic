const PATHS = {
  med: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />,
  ortho: (
    <path d="M7 4a2.5 2.5 0 1 1 3 3l6 6a2.5 2.5 0 1 1 3 3 2.5 2.5 0 1 1-3-3L10 7a2.5 2.5 0 0 1-3-3z" />
  ),
  derm: <path d="M12 3c3 4 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 3-6 6-10z" />,
  peds: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  physio: (
    <>
      <circle cx="13" cy="5" r="2" />
      <path d="m8 21 3-7 4 2 2 5M9 12l3-3 4 2 2-2" />
    </>
  ),
  psych: (
    <>
      <path d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3z" />
      <path d="M9.5 22h5" />
    </>
  ),
};

export default function DeptIcon({ name }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
