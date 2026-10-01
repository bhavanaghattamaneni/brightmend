import FadeUp from '../shared/FadeUp'
import { TEAM } from '../../data/content'
import '../../styles/sections/Team.css'

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="team__inner">
        <FadeUp>
          <div className="team__header">
            <div className="eyebrow">The People</div>
            <h2 className="section-title">[PLACEHOLDER] Team Section Heading</h2>
            <p className="section-subtitle">
              [PLACEHOLDER] Team intro — who is behind BrightMend and what drives them?
            </p>
          </div>
        </FadeUp>

        <div className="team__grid">
          {TEAM.map((member, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="team-card">
                <div
                  className="team-card__avatar"
                  style={{ background: member.bg, boxShadow: `0 6px 20px ${member.bg}55` }}
                >
                  {member.initials}
                </div>
                <div className="team-card__name">{member.name}</div>
                <div className="team-card__role">{member.role}</div>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
