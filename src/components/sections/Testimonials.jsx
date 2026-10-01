import { useState } from 'react'
import FadeUp from '../shared/FadeUp'
import { TESTIMONIALS } from '../../data/content'
import '../../styles/sections/Testimonials.css'

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const total = TESTIMONIALS.length
  const t = TESTIMONIALS[cur]

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <FadeUp>
          <div className="eyebrow testimonials__eyebrow">What People Say</div>
          <h2 className="section-title testimonials__title">
            [PLACEHOLDER] Testimonials Heading
          </h2>

          <div className="testimonials__card">
            <div className="testimonials__quote-mark">"</div>
            <p className="testimonials__quote">{t.quote}</p>
            <div className="testimonials__person">
              <div className="testimonials__avatar" style={{ background: t.bg }}>
                {t.initials}
              </div>
              <div>
                <div className="testimonials__name">{t.name}</div>
                <div className="testimonials__role">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonials__controls">
            <button
              className="arrow-btn arrow-btn--gold"
              onClick={() => setCur(c => (c - 1 + total) % total)}
              aria-label="Previous testimonial"
            >←</button>

            <div className="testimonials__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot slider-dot--gold ${i === cur ? 'slider-dot--active' : ''}`}
                  onClick={() => setCur(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="arrow-btn arrow-btn--gold"
              onClick={() => setCur(c => (c + 1) % total)}
              aria-label="Next testimonial"
            >→</button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
