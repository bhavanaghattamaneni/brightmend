import { useInView } from '../../hooks/useInView'
import { STATS } from '../../data/content'
import '../../styles/sections/StatsBar.css'

export default function StatsBar() {
  const [ref, visible] = useInView()

  return (
    <div className="stats-bar" ref={ref}>
      <div className="stats-bar__grid">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="stats-bar__item"
            style={{
              opacity:    visible ? 1 : 0,
              transform:  visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all .6s ease ${i * 0.1}s`,
            }}
          >
            <div className="stats-bar__num">{s.num}</div>
            <div className="stats-bar__label">{s.label}</div>
            <div className="stats-bar__sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
