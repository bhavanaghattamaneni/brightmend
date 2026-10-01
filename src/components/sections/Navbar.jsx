import { useState, useEffect } from 'react'
import Logo from '../shared/Logo'
import '../../styles/sections/Navbar.css'

const NAV_LINKS = [
  ['Home',     '#home'],
  ['About',    '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Team',     '#team'],
  ['Contact',  '#contact'],
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <a href="#home" className="navbar__logo" aria-label="BrightMend home">
        <Logo height={36} />
      </a>

      {/* Desktop links */}
      <ul className="navbar__links">
        {NAV_LINKS.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="navbar__link" onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="navbar__cta">Get In Touch</a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  )
}
