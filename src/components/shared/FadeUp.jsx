import { useInView } from '../../hooks/useInView'

/* Wraps any content with a scroll-triggered fade-up animation */
export default function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
