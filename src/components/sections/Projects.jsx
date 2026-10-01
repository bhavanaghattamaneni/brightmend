import { useState } from 'react'
import FadeUp from '../shared/FadeUp'
import { PROJECTS } from '../../data/content'
import '../../styles/sections/Projects.css'

const TABS = [['active', 'Active'], ['upcoming', 'Upcoming'], ['completed', 'Completed']]

export default function Projects() {
  const [tab, setTab] = useState('active')

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <FadeUp>
          <div className="projects__header">
            <div className="eyebrow">Our Portfolio</div>
            <h2 className="section-title">[PLACEHOLDER] Projects Heading</h2>
            <p className="section-subtitle">
              [PLACEHOLDER] Projects subtitle — what stage is BrightMend at and what is in the pipeline?
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="projects__tabs" role="tablist">
            {TABS.map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                className={`projects__tab ${tab === key ? 'projects__tab--active' : ''}`}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="projects__grid">
          {PROJECTS[tab].map((p, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className={`project-card ${p.isFlagship ? 'project-card--flagship' : ''}`}>
                {p.isFlagship && <div className="project-card__flagship-badge">Flagship</div>}

                <div
                  className="project-card__image"
                  style={{ background: `linear-gradient(135deg, ${p.gradFrom}, ${p.gradTo})` }}
                >
                  <span className="project-card__emoji">{p.emoji}</span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span
                      className="project-card__badge"
                      style={{ background: p.badgeBg, color: p.badgeC }}
                    >
                      {p.badge}
                    </span>
                    {p.tagline && (
                      <span className="project-card__tagline">{p.tagline}</span>
                    )}
                  </div>
                  <h3 className="project-card__name">{p.name}</h3>
                  <p  className="project-card__desc">{p.desc}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
