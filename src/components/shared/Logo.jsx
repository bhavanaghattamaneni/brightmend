/* ─────────────────────────────────────────
   BrightMend Logo
   To use a real image, replace this SVG with:
   <img src="/logo.png" alt="BrightMend" style={{ height }} />
───────────────────────────────────────── */
export default function Logo({ height = 40 }) {
  return (
    <svg
      height={height}
      viewBox="0 0 260 70"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      aria-label="BrightMend logo"
    >
      {/* Exclamation bolt */}
      <polygon points="28,4 38,4 34,34 26,34" fill="#F5C518" />
      <circle cx="30" cy="42" r="4" fill="#F5C518" />
      {/* Rays */}
      <line x1="12" y1="28" x2="4"  y2="28" stroke="#F5C518" strokeWidth="3"   strokeLinecap="round" />
      <line x1="14" y1="18" x2="8"  y2="12" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="18" x2="54" y2="12" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
      {/* Smile arc */}
      <path d="M10 52 Q30 66 50 52" fill="none" stroke="#1A4A42" strokeWidth="3" strokeLinecap="round" />
      <circle cx="14" cy="57" r="2.5" fill="#1A4A42" />
      <circle cx="46" cy="57" r="2.5" fill="#1A4A42" />
      {/* Wordmark */}
      <text
        x="62" y="44"
        fontFamily="'Plus Jakarta Sans','DM Sans',sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        <tspan fill="#F5C518">Bright</tspan>
        <tspan fill="#1A4A42">Mend</tspan>
      </text>
    </svg>
  )
}
