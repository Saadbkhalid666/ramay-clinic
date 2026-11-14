/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    /* max-width breakpoints used by the original design (largest -> smallest) */
    screens: {
      m960: { max: "960px" },
      m900: { max: "900px" },
      m860: { max: "860px" },
      m820: { max: "820px" },
      m700: { max: "700px" },
      m600: { max: "600px" },
      m520: { max: "520px" },
    },
    extend: {
      /* colors point at CSS variables so light/dark theming lives in one place (src/styles/index.css) */
      colors: {
        navy: "var(--navy)",
        teal: "var(--teal)",
        "teal-d": "var(--teal-d)",
        bg: "var(--bg)",
        card: "var(--card)",
        amber: "var(--amber)",
        muted: "var(--muted)",
        line: "var(--line)",
        tint: "var(--tint)",
        glass: "var(--glass)",
      },
      fontFamily: {
        h: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        b: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        bob: { "50%": { transform: "translateY(-8px)" } },
        pop: {
          from: { opacity: "0", transform: "translateY(14px) scale(0.97)" },
        },
      },
      animation: {
        bob: "bob 6s ease-in-out infinite",
        pop: "pop 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
