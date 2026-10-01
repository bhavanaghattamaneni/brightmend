# BrightMend Website
**Domain:** brightment.com · **Stack:** React 18 + Vite + plain CSS

---

## Project Structure

```
brightmend/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                          ← Entry point
    ├── App.jsx                           ← Root — imports all sections
    │
    ├── data/
    │   └── content.js                   ← ✏️  ALL placeholder text lives here
    │
    ├── hooks/
    │   └── useInView.js                 ← Scroll animation hook
    │
    ├── components/
    │   ├── shared/
    │   │   ├── Logo.jsx                 ← BrightMend SVG logo
    │   │   └── FadeUp.jsx               ← Reusable scroll-fade wrapper
    │   └── sections/
    │       ├── Banner.jsx               ← Yellow announcement strip
    │       ├── Navbar.jsx               ← Sticky nav with mobile menu
    │       ├── Hero.jsx                 ← Hero with floating cards
    │       ├── PosterSlider.jsx         ← Auto-rotating dark banner
    │       ├── DescSlider.jsx           ← 6-card horizontal slider
    │       ├── StatsBar.jsx             ← 4 metric counters
    │       ├── About.jsx                ← Story + mission/vision + values
    │       ├── Services.jsx             ← 6 service cards grid
    │       ├── Projects.jsx             ← Tabbed projects (active/upcoming/done)
    │       ├── Team.jsx                 ← 4 team member cards
    │       ├── Testimonials.jsx         ← Quote carousel
    │       ├── Contact.jsx              ← Form + contact details + map slot
    │       └── Footer.jsx               ← 4-col dark footer
    │
    └── styles/
        ├── index.css                    ← Master importer (imports all below)
        ├── variables.css                ← 🎨 Design tokens (colors, fonts, spacing)
        ├── global.css                   ← Reset + base + shared utilities
        └── sections/
            ├── Banner.css
            ├── Navbar.css
            ├── Hero.css
            ├── PosterSlider.css
            ├── DescSlider.css
            ├── StatsBar.css
            ├── About.css
            ├── Services.css
            ├── Projects.css
            ├── Team.css
            ├── Testimonials.css
            ├── Contact.css
            └── Footer.css
```

---

## Quick Start

```bash
npm install
npm run dev       # → http://localhost:3000
npm run build     # production build → /dist
npm run preview   # preview production build
```

---

## How to Update Content

**One file, one source of truth:**

```
src/data/content.js
```

Open it and replace every `[PLACEHOLDER]` with real content.
The file exports these objects:

| Export | What it controls |
|---|---|
| `BRAND` | Company name, tagline, email, phone, social links |
| `POSTER_SLIDES` | The 3 dark hero banner slides |
| `DESC_CARDS` | The 6 feature cards in the slider |
| `STATS` | The 4 metric numbers + labels |
| `VALUES` | Core company values (used in About) |
| `SERVICES` | All 6 service cards |
| `PROJECTS` | Active / Upcoming / Completed projects |
| `TEAM` | 4 team member profiles |
| `TESTIMONIALS` | 3 user quotes |

---

## How to Change Colors / Theme

Open `src/styles/variables.css` and change the CSS custom properties:

```css
--color-primary:  #1A4A42;   /* Main green */
--color-yellow:   #F5C518;   /* Accent yellow */
--color-bg:       #F8F8F4;   /* Page background */
```

Every component inherits from these tokens — no hunting through files.

---

## How to Replace the Logo

1. Add your file to `public/logo.png`
2. Open `src/components/shared/Logo.jsx`
3. Replace the entire SVG with:

```jsx
export default function Logo({ height = 40 }) {
  return <img src="/logo.png" alt="BrightMend" style={{ height }} />
}
```

---

## How to Deploy

### Netlify (easiest)
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```
Or connect GitHub repo with:
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
```bash
npx vercel
```

### Custom domain (brightmend.com)
After deploying, point your domain's DNS:
- `A record` → host IP, or
- `CNAME` → provided subdomain URL

HTTPS is automatic on both Netlify and Vercel.

---

## How to Add a New Section

1. Create `src/components/sections/NewSection.jsx`
2. Create `src/styles/sections/NewSection.css`
3. Add `@import './sections/NewSection.css';` to `src/styles/index.css`
4. Import and add `<NewSection />` in `src/App.jsx`
