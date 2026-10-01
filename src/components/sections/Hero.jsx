import { useInView } from '../../hooks/useInView'
import { BRAND, STATS } from '../../data/content'
import '../../styles/sections/Hero.css'

export default function Hero() {
  const [ref, visible] = useInView(0.1)

  const fade = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(36px)',
    transition: `all .7s ease ${delay}s`,
  })

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Background orbs */}
      <div className="hero__orb hero__orb--yellow" />
      <div className="hero__orb hero__orb--green" />

      {/* Dot grid */}
      <svg className="hero__dots" width="320" height="320" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="2.5" fill="#1A4A42" />
          ))
        )}
      </svg>

      <div className="hero__inner">
        {/* ── Left ── */}
        <div className="hero__left">
          <div className="hero__pill" style={fade(0)}>
            <span className="hero__pill-dot" />
            [PLACEHOLDER] Status Label
          </div>

          <h1 className="hero__title" style={fade(0.05)}>
            Brighter Minds,<br />
            <em>Mending the World.</em>
          </h1>

          <p className="hero__subtitle" style={fade(0.1)}>
            {BRAND.description}
          </p>

          <div className="hero__buttons" style={fade(0.15)}>
            <a href="#projects" className="btn btn--primary">Explore Our Work →</a>
            <a href="#about"    className="btn btn--ghost">About BrightMend ›</a>
          </div>

          <div className="hero__stats" style={fade(0.2)}>
            {STATS.slice(0, 3).map((s, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — floating cards ── */}
        <div className="hero__right" style={fade(0.2)}>
          <div className="hero__cards">
            {/* Card 1 — WeeConnect feature */}
            <div className="hero-card hero-card--top">
              <div className="hero-card__header">
                <div className="hero-card__icon">🔗</div>
                <div>
                  <div className="hero-card__name">WeeConnect</div>
                  <div className="hero-card__sub">Flagship Project</div>
                </div>
                <span className="hero-card__live">LIVE</span>
              </div>
              <p className="hero-card__body">
                Community platform — post a need, find someone who can help.
                Rides, tutoring, services &amp; more.
              </p>
              <div className="hero-card__tags">
                {['Community', 'Marketplace', 'Mobile'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 2 — Mission quote */}
            <div className="hero-card hero-card--mid">
              <div className="hero-card__eyebrow">Mission</div>
              <div className="hero-card__quote">
                "Brighter Minds,<br />Mending the World."
              </div>
            </div>

            {/* Card 3 — Next initiative */}
            <div className="hero-card hero-card--bottom">
              <div className="hero-card__next-label">[PLACEHOLDER] Next Initiative</div>
              <div className="hero-card__next-row">
                <span className="hero-card__dot" />
                <span>Coming soon on brightmend.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
