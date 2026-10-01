import FadeUp from '../shared/FadeUp'
import { VALUES } from '../../data/content'
import '../../styles/sections/About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* ── Left ── */}
        <FadeUp>
          <div className="eyebrow">About BrightMend</div>
          <h2 className="section-title">[PLACEHOLDER] About Heading</h2>

          <p className="about__para">
            [PLACEHOLDER] Paragraph 1 — company origin story. Why was BrightMend founded?
            What problem does it solve? What gap in the market does it address?
          </p>
          <p className="about__para">
            [PLACEHOLDER] Paragraph 2 — progress so far. What has been built?
            What milestones have been hit? Where is BrightMend today in its journey?
          </p>

          {/* Mission / Vision */}
          <div className="about__mv-grid">
            {[
              { label: 'Our Mission', text: '[PLACEHOLDER] Mission — what BrightMend does every day and for whom.' },
              { label: 'Our Vision',  text: '[PLACEHOLDER] Vision — the future world state BrightMend is working toward.' },
            ].map((mv, i) => (
              <div className="mv-card" key={i}>
                <div className="mv-card__label">{mv.label}</div>
                <p className="mv-card__text">{mv.text}</p>
              </div>
            ))}
          </div>

          {/* Value chips */}
          <div className="about__chips">
            {VALUES.map((v, i) => (
              <span className="chip" key={i}>{v.icon} {v.title}</span>
            ))}
          </div>
        </FadeUp>

        {/* ── Right — value cards + quote ── */}
        <FadeUp delay={0.15}>
          <div className="about__values-grid">
            {VALUES.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <div className="value-card__title">{v.title}</div>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Founder quote */}
          <div className="about__quote-card">
            <div className="about__quote-text">
              "[PLACEHOLDER] Replace with an inspiring quote from the founder
              or the company's guiding principle."
            </div>
            <div className="about__quote-attr">— [PLACEHOLDER] Founder, BrightMend</div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
