import { useState } from 'react'
import '../../styles/sections/Banner.css'

export default function Banner() {
  const [show, setShow] = useState(true)
  if (!show) return null

  return (
    <div className="banner">
      🎉 [PLACEHOLDER] Announcement — launch date, campaign, or milestone message goes here.
      <button className="banner__close" onClick={() => setShow(false)} aria-label="Dismiss">✕</button>
    </div>
  )
}
