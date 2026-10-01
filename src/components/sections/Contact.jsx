import { useState } from 'react'
import FadeUp from '../shared/FadeUp'
import { BRAND } from '../../data/content'
import '../../styles/sections/Contact.css'

const CONTACT_DETAILS = [
  { icon: '✉️', label: 'Email',    val: () => BRAND.email    },
  { icon: '📱', label: 'Phone',    val: () => BRAND.phone    },
  { icon: '📍', label: 'Location', val: () => BRAND.location },
  { icon: '🌐', label: 'Domain',   val: () => BRAND.domain   },
]

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', type: '', msg: '' })
  const [sent, setSent] = useState(false)
  const [err,  setErr]  = useState('')

  const update = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = () => {
    if (!form.fname.trim() || !form.email.trim()) {
      setErr('Please enter your name and email.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setErr('Please enter a valid email address.')
      return
    }
    setErr('')
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <FadeUp>
          <div className="contact__header">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="section-title">[PLACEHOLDER] Contact Heading</h2>
            <p className="section-subtitle">
              [PLACEHOLDER] Contact subtitle — invite users, partners, investors to reach out.
            </p>
          </div>
        </FadeUp>

        <div className="contact__grid">
          {/* ── Info column ── */}
          <FadeUp>
            <h3 className="contact__info-heading">[PLACEHOLDER] Contact Info Heading</h3>
            <p className="contact__info-body">
              [PLACEHOLDER] Contact intro — who should reach out and how can BrightMend help them?
            </p>

            {CONTACT_DETAILS.map((d, i) => (
              <div className="contact__detail" key={i}>
                <div className="contact__detail-icon">{d.icon}</div>
                <div>
                  <strong className="contact__detail-label">{d.label}</strong>
                  <span   className="contact__detail-val">{d.val()}</span>
                </div>
              </div>
            ))}

            <div className="contact__map-placeholder">
              <div className="contact__map-label">📍 Map Placeholder</div>
              <p>[PLACEHOLDER] Embed Google Maps here once office or HQ address is confirmed.</p>
            </div>
          </FadeUp>

          {/* ── Form column ── */}
          <FadeUp delay={0.15}>
            <div className="contact__form-card">
              {!sent ? (
                <>
                  <div className="contact__form-row">
                    {[['First Name', 'fname', '[First name]'], ['Last Name', 'lname', '[Last name]']].map(([label, key, ph]) => (
                      <div className="form-group" key={key}>
                        <label className="form-label">{label}</label>
                        <input
                          className="form-input"
                          value={form[key]}
                          onChange={update(key)}
                          placeholder={ph}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">I am a...</label>
                    <select className="form-input" value={form.type} onChange={update('type')}>
                      <option value="">Select one</option>
                      <option>[PLACEHOLDER] Option 1 — e.g. Potential User</option>
                      <option>[PLACEHOLDER] Option 2 — e.g. Service Provider</option>
                      <option>[PLACEHOLDER] Option 3 — e.g. Investor / Partner</option>
                      <option>[PLACEHOLDER] Option 4 — e.g. Institution / College</option>
                      <option>[PLACEHOLDER] Option 5 — e.g. Media / Press</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input form-input--textarea"
                      value={form.msg}
                      onChange={update('msg')}
                      placeholder="[PLACEHOLDER] Your message..."
                      rows={4}
                    />
                  </div>

                  {err && <p className="form-error">{err}</p>}

                  <button className="btn btn--primary btn--full" onClick={handleSubmit}>
                    Send Message →
                  </button>
                </>
              ) : (
                <div className="contact__success">
                  <div className="contact__success-icon">✅</div>
                  <h3>Message received!</h3>
                  <p>The BrightMend team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
