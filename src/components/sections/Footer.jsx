import Logo from '../shared/Logo'
import { BRAND } from '../../data/content'
import '../../styles/sections/Footer.css'

const FOOTER_COLS = [
  {
    heading: 'Company',
    links: [['Home','#home'],['About Us','#about'],['Services','#services'],['Projects','#projects'],['Team','#team'],['Contact','#contact']],
  },
  {
    heading: 'Projects',
    links: [['WeeConnect','#projects'],['[Placeholder Project]','#projects'],['[Future Initiative]','#projects']],
  },
  {
    heading: 'Connect',
    links: () => [
      [BRAND.email, `mailto:${BRAND.email}`],
      ['LinkedIn',  BRAND.social.linkedin],
      ['Twitter',   BRAND.social.twitter],
      ['Instagram', BRAND.social.instagram],
      ['Privacy Policy', '#'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <Logo height={38} />
            <p className="footer__brand-text">
              {BRAND.tagline}<br />
              <span>[PLACEHOLDER] Footer brand one-liner.</span>
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col, i) => {
            const links = typeof col.links === 'function' ? col.links() : col.links
            return (
              <div className="footer__col" key={i}>
                <div className="footer__col-heading">{col.heading}</div>
                <ul className="footer__links">
                  {links.map(([label, href], j) => (
                    <li key={j}>
                      <a href={href} className="footer__link">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="footer__bottom">
          <span>© 2025 BrightMend. All rights reserved. — {BRAND.domain}</span>
          <span>[PLACEHOLDER] Legal tagline or registration info</span>
        </div>
      </div>
    </footer>
  )
}
