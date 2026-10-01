import { useState } from 'react'
import { DESC_CARDS } from '../../data/content'
import FadeUp from '../shared/FadeUp'
import '../../styles/sections/DescSlider.css'

const CARD_W  = 320
const GAP     = 20
const PER_VIEW = 3

export default function DescSlider() {
  const [idx, setIdx] = useState(0)
  const max     = DESC_CARDS.length - PER_VIEW
  const canPrev = idx > 0
  const canNext = idx < max

  return (
    <section className="desc-slider">
      <div className="desc-slider__inner">
        {/* Header */}
        <div className="desc-slider__header">
          <FadeUp>
            <div className="eyebrow">Why BrightMend</div>
            <h2 className="section-title">[PLACEHOLDER] Section Heading</h2>
            <p className="section-subtitle">
              [PLACEHOLDER] Subtitle — what makes BrightMend uniquely positioned to build products that matter?
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="desc-slider__arrows">
              <button
                className="arrow-btn"
                onClick={() => canPrev && setIdx(i => i - 1)}
                disabled={!canPrev}
                aria-label="Previous cards"
              >←</button>
              <button
                className="arrow-btn"
                onClick={() => canNext && setIdx(i => i + 1)}
                disabled={!canNext}
                aria-label="Next cards"
              >→</button>
            </div>
          </FadeUp>
        </div>

        {/* Cards viewport */}
        <div className="desc-slider__viewport">
          <div
            className="desc-slider__track"
            style={{ transform: `translateX(-${idx * (CARD_W + GAP)}px)` }}
          >
            {DESC_CARDS.map((card, i) => (
              <div className="desc-card" key={i}>
                <div className="desc-card__icon" style={{ background: card.colorBg }}>
                  {card.icon}
                </div>
                <span className="desc-card__tag" style={{ background: card.colorBg, color: card.color }}>
                  {card.tag}
                </span>
                <h3 className="desc-card__title">{card.title}</h3>
                <p  className="desc-card__body">{card.body}</p>
                <div className="desc-card__footer">
                  <a href="#contact" className="desc-card__link" style={{ color: card.color }}>
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="desc-slider__dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === idx ? 'slider-dot--active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
