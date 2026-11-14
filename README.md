# Ramay Clinic – React + Tailwind CSS

React (Vite) + Tailwind CSS version of the single-file `index.html`. Same look, content and behaviour.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Structure

```
tailwind.config.js         theme: colors (CSS-variable based), fonts, keyframes,
                           max-width screens (m960, m900, m860, m820, m700, m600, m520)
postcss.config.js
index.html                 Vite entry (fonts + #root)
src/
  main.jsx                 mounts <App />
  App.jsx                  page layout + hash routing (#doctor-<slug> = profile page)
  ui.js                    shared Tailwind class strings (wrap, btn(), card, tag, GRID3, CHIP...)
  styles/index.css         Tailwind directives + light/dark theme variables + html/body base only
  data/index.js            all content: IMG slots, DEPTS, DOCS, BIO, TESTI, FAQ, CLINIC info
  hooks/                   BookingContext, useHashRoute, useTilt, useThreeScene
  components/              Navbar, Logo, Hero, HeroScene, Metrics, Section, SectionHeader,
                           Departments, DeptIcon, Doctors, DoctorCard, DoctorProfile,
                           Pharmacy, PharmacyScene, Location, Gallery, ImageSlot,
                           Testimonials, Faq, Footer, MobileDock, BookingModal
```

## Theming
Colors are Tailwind tokens (`bg-teal`, `text-muted`, `border-line`, `bg-card`, ...) that read CSS variables
from `src/styles/index.css`, so dark mode (OS setting or `data-theme="dark"`) switches everything at once.

## Adding photos
Fill the `IMG` object in `src/data/index.js` (hero, g1–g4, d0–d5) with image URLs.

`three` is pinned to 0.128.0 to match the original build.
