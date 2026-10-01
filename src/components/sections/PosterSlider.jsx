import { useState, useEffect, useCallback } from 'react'
import { POSTER_SLIDES } from '../../data/content'
import '../../styles/sections/PosterSlider.css'

export default function PosterSlider() {
  const [cur, setCur] = useState(0)
  const total = POSTER_SLIDES.length

  const next = useCallback(() => setCur(c => (c + 1) % total), [total])
  const prev = () => setCur(c => (c - 1 + total) % total)

  useEffect(() => {
    const t = setInterval(next, 5800)
    return () => clearInterval(t)
  }, [next])

  const s = POSTER_SLIDES[cur]

  return (
    <section className="poster" style={{ background: s.bg }}>
      {/* Decorative geometry */}
      <div className="poster__circle poster__circle--lg" />
      <div className="poster__circle poster__circle--sm" />
      <div className="poster__blob" />
      <div className="poster__stripe" />

      {/* Content */}
      <div className="poster__inner">
        <div className="poster__content">
          <div className="poster__eyebrow">{s.eyebrow}</div>
          <h2 className="poster__title">
            <span>{s.title}</span>
            <em style={{ color: s.accent }}>{s.titleEm}</em>
          </h2>
          <p className="poster__body">{s.body}</p>
          <a href={s.href} className="poster__cta">{s.cta} →</a>
        </div>
      </div>

      {/* Slide counter */}
      <div className="poster__counter">
        {String(cur + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Dot nav */}
      <div className="poster__dots">
        {POSTER_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`poster__dot ${i === cur ? 'poster__dot--active' : ''}`}
            onClick={() => setCur(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow nav */}
      <div className="poster__arrows">
        <button className="poster__arrow" onClick={prev} aria-label="Previous slide">←</button>
        <button className="poster__arrow" onClick={next} aria-label="Next slide">→</button>
      </div>
    </section>
  )
}
