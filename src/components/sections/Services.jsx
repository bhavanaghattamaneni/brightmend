import FadeUp from '../shared/FadeUp'
import { SERVICES } from '../../data/content'
import '../../styles/sections/Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <FadeUp>
          <div className="services__header">
            <div className="eyebrow">What We Do</div>
            <h2 className="section-title">[PLACEHOLDER] Services Heading</h2>
            <p className="section-subtitle">
              [PLACEHOLDER] Services section subtitle — what does BrightMend offer and who benefits from it?
            </p>
          </div>
        </FadeUp>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="service-card">
                <div className="service-card__icon" style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p  className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map((t, j) => (
                    <span className="tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
