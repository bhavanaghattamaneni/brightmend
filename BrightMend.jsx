import { useState, useEffect, useRef, useCallback } from "react";

/* ════════════════════════════════════════
   ✏️  PLACEHOLDER DATA — swap these objects with real content
════════════════════════════════════════ */
const BRAND = {
  name: "BrightMend",
  tagline: "Brighter Minds, Mending the World.",
  description:
    "[PLACEHOLDER] BrightMend is a ventures & innovation company building purposeful products that connect people, solve real problems, and create lasting impact in communities worldwide.",
  email: "hello@brightmend.com",
  phone: "+91 [PLACEHOLDER] Phone Number",
  location: "[PLACEHOLDER] City, Country",
  domain: "brightmend.com",
  social: { linkedin: "#", twitter: "#", instagram: "#" },
};

const POSTER_SLIDES = [
  {
    id: 1,
    eyebrow: "Our Mission",
    title: "Brighter Minds,",
    titleEm: "Mending the World.",
    body: "[PLACEHOLDER] Replace with BrightMend's primary hero message — what drives the company, who it serves, and why it exists.",
    cta: "Discover Our Story",
    href: "#about",
    bg: "#1A4A42",
    accent: "#F5C518",
    shape: "#163D36",
  },
  {
    id: 2,
    eyebrow: "Flagship Project",
    title: "Introducing",
    titleEm: "WeeConnect.",
    body: "[PLACEHOLDER] WeeConnect is BrightMend's flagship platform — a community app where people post what they need and connect with those who can help. Rides, tutoring, services and more.",
    cta: "Explore WeeConnect",
    href: "#projects",
    bg: "#2D3A1A",
    accent: "#F5C518",
    shape: "#243015",
  },
  {
    id: 3,
    eyebrow: "Join Us",
    title: "Building the",
    titleEm: "Future Together.",
    body: "[PLACEHOLDER] Third poster — ideal for partnership, hiring, or investment messaging. Replace with a real campaign once BrightMend content is finalised.",
    cta: "Work With Us",
    href: "#contact",
    bg: "#1A2A4A",
    accent: "#F5C518",
    shape: "#152238",
  },
];

const DESC_CARDS = [
  {
    icon: "💡",
    colorBg: "rgba(245,197,24,0.12)",
    color: "#B8940A",
    tag: "Innovation",
    title: "[PLACEHOLDER] What BrightMend Does",
    body: "[PLACEHOLDER] Describe the first core capability of BrightMend — what kind of products it builds and why they matter.",
  },
  {
    icon: "🌐",
    colorBg: "rgba(45,107,90,0.12)",
    color: "#2D6B5A",
    tag: "Community",
    title: "[PLACEHOLDER] Who We Serve",
    body: "[PLACEHOLDER] Describe the target audience — students, service providers, local communities, or specific demographics BrightMend focuses on.",
  },
  {
    icon: "🚀",
    colorBg: "rgba(74,127,165,0.12)",
    color: "#2D5A8A",
    tag: "Growth",
    title: "[PLACEHOLDER] How We Scale",
    body: "[PLACEHOLDER] Explain BrightMend's growth model — how it expands projects, enters new markets, or builds new ventures over time.",
  },
  {
    icon: "🤝",
    colorBg: "rgba(245,197,24,0.1)",
    color: "#A07800",
    tag: "Partnerships",
    title: "[PLACEHOLDER] Our Partnerships",
    body: "[PLACEHOLDER] Describe the kinds of partnerships BrightMend builds — institutions, corporates, NGOs, or community organisations.",
  },
  {
    icon: "⚙️",
    colorBg: "rgba(45,107,90,0.1)",
    color: "#1A5045",
    tag: "Technology",
    title: "[PLACEHOLDER] Tech & Platform",
    body: "[PLACEHOLDER] Explain the technology approach — mobile-first, AI-assisted, or platform-based thinking that underpins BrightMend's products.",
  },
  {
    icon: "📊",
    colorBg: "rgba(74,127,165,0.1)",
    color: "#1A3D6A",
    tag: "Impact",
    title: "[PLACEHOLDER] Our Impact",
    body: "[PLACEHOLDER] What measurable impact does BrightMend aim to achieve? Users helped, problems solved, communities transformed.",
  },
];

const STATS = [
  { num: "[#]", label: "[PLACEHOLDER] Metric 1", sub: "e.g. Active Users" },
  { num: "[#]", label: "[PLACEHOLDER] Metric 2", sub: "e.g. Cities Reached" },
  { num: "[#]", label: "[PLACEHOLDER] Metric 3", sub: "e.g. Projects Launched" },
  { num: "[#]", label: "[PLACEHOLDER] Metric 4", sub: "e.g. Community Members" },
];

const VALUES = [
  { icon: "🌱", title: "Purpose-driven", desc: "[PLACEHOLDER] What does being purpose-driven mean at BrightMend?" },
  { icon: "💡", title: "Innovation", desc: "[PLACEHOLDER] How does BrightMend approach innovation in its products?" },
  { icon: "🤝", title: "Community", desc: "[PLACEHOLDER] How does BrightMend put community at the centre of everything?" },
  { icon: "🔒", title: "Trust & Integrity", desc: "[PLACEHOLDER] How does BrightMend build trust with users and partners?" },
];

const SERVICES = [
  {
    icon: "📱",
    bg: "rgba(245,197,24,0.1)",
    accent: "#A07800",
    title: "[PLACEHOLDER] Service / Capability 1",
    desc: "[PLACEHOLDER] Describe this service or capability area — what BrightMend offers, to whom, and how it delivers value.",
    tags: ["Tag A", "Tag B", "Tag C"],
  },
  {
    icon: "🏗️",
    bg: "rgba(45,107,90,0.1)",
    accent: "#2D6B5A",
    title: "[PLACEHOLDER] Service / Capability 2",
    desc: "[PLACEHOLDER] Second capability area — product development, venture building, or a specific domain expertise.",
    tags: ["Tag D", "Tag E"],
  },
  {
    icon: "🎓",
    bg: "rgba(74,127,165,0.1)",
    accent: "#2D5A8A",
    title: "[PLACEHOLDER] Service / Capability 3",
    desc: "[PLACEHOLDER] Third area — could be education, training, community programmes, or consulting.",
    tags: ["Tag F", "Tag G", "Tag H"],
  },
  {
    icon: "🌍",
    bg: "rgba(245,197,24,0.08)",
    accent: "#8A6500",
    title: "[PLACEHOLDER] Service / Capability 4",
    desc: "[PLACEHOLDER] Fourth capability — geographic expansion, social impact, or strategic partnerships.",
    tags: ["Tag I", "Tag J"],
  },
  {
    icon: "⚡",
    bg: "rgba(45,107,90,0.08)",
    accent: "#1A5045",
    title: "[PLACEHOLDER] Service / Capability 5",
    desc: "[PLACEHOLDER] Fifth area — technology platform, API, or developer ecosystem BrightMend provides.",
    tags: ["Tag K", "Tag L", "Tag M"],
  },
  {
    icon: "📊",
    bg: "rgba(74,127,165,0.08)",
    accent: "#1A3D6A",
    title: "[PLACEHOLDER] Service / Capability 6",
    desc: "[PLACEHOLDER] Sixth capability — data, analytics, insights, or research that BrightMend offers to partners.",
    tags: ["Tag N", "Tag O"],
  },
];

const PROJECTS = {
  active: [
    {
      emoji: "🔗",
      gradFrom: "rgba(245,197,24,0.2)",
      gradTo: "rgba(45,107,90,0.25)",
      badge: "Active",
      badgeBg: "rgba(45,107,90,0.12)",
      badgeC: "#1A5045",
      name: "WeeConnect",
      tagline: "Connect. Grow. Create.",
      desc: "BrightMend's flagship community platform where people post needs and connect with those who can help — rides, tutoring, local services, jobs, and more.",
      tags: ["Community App", "Marketplace", "Mobile"],
      isFlagship: true,
    },
    {
      emoji: "🚧",
      gradFrom: "rgba(74,127,165,0.15)",
      gradTo: "rgba(74,127,165,0.28)",
      badge: "Active",
      badgeBg: "rgba(74,127,165,0.12)",
      badgeC: "#1A3D6A",
      name: "[PLACEHOLDER] Project 2",
      tagline: "[PLACEHOLDER] Project tagline",
      desc: "[PLACEHOLDER] Description of BrightMend's second active initiative — what it is, who it serves, and what stage it's in.",
      tags: ["Tag A", "Tag B"],
      isFlagship: false,
    },
  ],
  upcoming: [
    {
      emoji: "🔭",
      gradFrom: "rgba(245,197,24,0.1)",
      gradTo: "rgba(245,197,24,0.22)",
      badge: "Upcoming",
      badgeBg: "rgba(245,197,24,0.15)",
      badgeC: "#8A6500",
      name: "[PLACEHOLDER] Upcoming Project 1",
      tagline: "[PLACEHOLDER] Tagline",
      desc: "[PLACEHOLDER] Describe what's next on BrightMend's roadmap — a new product vertical, feature expansion, or geographic launch.",
      tags: ["Tag C", "Tag D"],
      isFlagship: false,
    },
    {
      emoji: "🌱",
      gradFrom: "rgba(45,107,90,0.1)",
      gradTo: "rgba(45,107,90,0.22)",
      badge: "Upcoming",
      badgeBg: "rgba(45,107,90,0.12)",
      badgeC: "#1A5045",
      name: "[PLACEHOLDER] Upcoming Project 2",
      tagline: "[PLACEHOLDER] Tagline",
      desc: "[PLACEHOLDER] Second upcoming project — could be a community initiative, strategic partnership, or new venture under BrightMend.",
      tags: ["Tag E", "Tag F"],
      isFlagship: false,
    },
  ],
  completed: [
    {
      emoji: "✅",
      gradFrom: "rgba(180,180,180,0.12)",
      gradTo: "rgba(180,180,180,0.22)",
      badge: "Completed",
      badgeBg: "rgba(180,180,180,0.2)",
      badgeC: "#555",
      name: "[PLACEHOLDER] Completed Milestone 1",
      tagline: "[PLACEHOLDER] Tagline",
      desc: "[PLACEHOLDER] A completed milestone — research phase, MVP, pilot programme, or strategic initiative that shaped BrightMend.",
      tags: ["Tag G", "Tag H"],
      isFlagship: false,
    },
    {
      emoji: "🎯",
      gradFrom: "rgba(180,180,180,0.1)",
      gradTo: "rgba(45,107,90,0.18)",
      badge: "Completed",
      badgeBg: "rgba(180,180,180,0.2)",
      badgeC: "#555",
      name: "[PLACEHOLDER] Completed Milestone 2",
      tagline: "[PLACEHOLDER] Tagline",
      desc: "[PLACEHOLDER] Second completed item — brand identity, market research, technical foundation, or partnership established.",
      tags: ["Tag I", "Tag J"],
      isFlagship: false,
    },
  ],
};

const TEAM = [
  { initials: "[AB]", bg: "#2D6B5A", name: "[PLACEHOLDER] Founder Name", role: "Founder & CEO", bio: "[PLACEHOLDER] Founder bio — background, expertise, and what inspired them to start BrightMend." },
  { initials: "[CD]", bg: "#1A3D6A", name: "[PLACEHOLDER] Co-founder Name", role: "Co-Founder & CTO", bio: "[PLACEHOLDER] Technical co-founder bio — engineering background and vision for BrightMend's technology." },
  { initials: "[EF]", bg: "#8A6500", name: "[PLACEHOLDER] Team Member", role: "[PLACEHOLDER] Role Title", bio: "[PLACEHOLDER] Team member bio — what they bring to BrightMend and their area of expertise." },
  { initials: "[GH]", bg: "#1A5045", name: "[PLACEHOLDER] Team Member", role: "[PLACEHOLDER] Role Title", bio: "[PLACEHOLDER] Another team member — growth, product, operations, or design lead." },
];

const TESTIMONIALS = [
  { initials: "[RM]", bg: "#2D6B5A", name: "[PLACEHOLDER] Person Name", role: "[PLACEHOLDER] Role, City", quote: "[PLACEHOLDER] Replace with a real testimonial from a user, partner, or community member. Specific, authentic, story-driven quotes build the most trust." },
  { initials: "[SP]", bg: "#1A3D6A", name: "[PLACEHOLDER] Person Name", role: "[PLACEHOLDER] Role, Institution", quote: "[PLACEHOLDER] Second testimonial — ideally from a different audience segment, like a service provider, institutional partner, or investor." },
  { initials: "[AK]", bg: "#8A6500", name: "[PLACEHOLDER] Person Name", role: "[PLACEHOLDER] Role, Organisation", quote: "[PLACEHOLDER] Third testimonial — student, community leader, or early adopter perspective on BrightMend's impact." },
];

/* ════════════════════════════════════════
   LOGO — recreated from image
════════════════════════════════════════ */
function BrightMendLogo({ height = 40 }) {
  return (
    <svg height={height} viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      {/* Exclamation bolt */}
      <polygon points="28,4 38,4 34,34 26,34" fill="#F5C518" />
      <circle cx="30" cy="42" r="4" fill="#F5C518" />
      {/* Rays */}
      <line x1="12" y1="28" x2="4" y2="28" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="18" x2="8" y2="12" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="18" x2="54" y2="12" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
      {/* Smile arc */}
      <path d="M10 52 Q30 66 50 52" fill="none" stroke="#1A4A42" strokeWidth="3" strokeLinecap="round" />
      <circle cx="14" cy="57" r="2.5" fill="#1A4A42" />
      <circle cx="46" cy="57" r="2.5" fill="#1A4A42" />
      {/* Text */}
      <text x="62" y="44" fontFamily="'Plus Jakarta Sans','DM Sans',sans-serif" fontSize="28" fontWeight="800" letterSpacing="-0.5">
        <tspan fill="#F5C518">Bright</tspan><tspan fill="#1A4A42">Mend</tspan>
      </text>
    </svg>
  );
}

/* ════════════════════════════════════════
   HOOKS
════════════════════════════════════════ */
function useInView(threshold = 0.14) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)", transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

/* ════════════════════════════════════════
   NAV
════════════════════════════════════════ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["Home","#home"],["About","#about"],["Services","#services"],["Projects","#projects"],["Team","#team"],["Contact","#contact"]];
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, height:68,
      background: scrolled ? "rgba(248,248,244,0.96)" : "rgba(248,248,244,0.85)",
      backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(26,74,66,0.12)" : "1px solid transparent",
      display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 clamp(16px,5vw,60px)",
      transition:"all .3s ease" }}>
      <a href="#home" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
        <BrightMendLogo height={36} />
      </a>
      <ul style={{ display:"flex", alignItems:"center", gap:"clamp(1rem,2vw,2rem)", listStyle:"none",
        "@media(max-width:768px)":{ display:"none" } }} id="navLinks" className="nav-ul">
        {links.map(([lbl, href]) => (
          <li key={lbl}>
            <a href={href} onClick={() => setOpen(false)} style={{ fontSize:"0.86rem", fontWeight:500, color:"#3A3A2A", textDecoration:"none", transition:"color .2s" }}
              onMouseEnter={e => e.target.style.color="#1A4A42"}
              onMouseLeave={e => e.target.style.color="#3A3A2A"}>
              {lbl}
            </a>
          </li>
        ))}
        <li><a href="#contact" style={{ background:"#1A4A42", color:"#fff", padding:"0.45rem 1.2rem", borderRadius:60, fontSize:"0.84rem", fontWeight:600, textDecoration:"none" }}>Get In Touch</a></li>
      </ul>
      {/* Hamburger */}
      <button onClick={() => setOpen(o => !o)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", flexDirection:"column", gap:5, padding:4 }} className="hamburger">
        <span style={{ display:"block", width:24, height:2, background:"#1A4A42", borderRadius:2, transition:"all .3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
        <span style={{ display:"block", width:24, height:2, background:"#1A4A42", borderRadius:2, transition:"all .3s", opacity: open ? 0 : 1 }} />
        <span style={{ display:"block", width:24, height:2, background:"#1A4A42", borderRadius:2, transition:"all .3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>
      {/* Mobile menu */}
      {open && (
        <div style={{ position:"absolute", top:68, left:0, right:0, background:"#F8F8F4", borderBottom:"1px solid rgba(26,74,66,0.1)", padding:"1rem clamp(16px,5vw,60px)", display:"flex", flexDirection:"column", gap:"0.9rem" }}>
          {links.map(([lbl,href]) => <a key={lbl} href={href} onClick={() => setOpen(false)} style={{ fontSize:"0.9rem", fontWeight:500, color:"#3A3A2A", textDecoration:"none" }}>{lbl}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} style={{ background:"#1A4A42", color:"#fff", padding:"0.6rem 1.2rem", borderRadius:60, fontSize:"0.88rem", fontWeight:600, textDecoration:"none", textAlign:"center" }}>Get In Touch</a>
        </div>
      )}
      <style>{`
        @media(max-width:768px){.nav-ul{display:none!important}.hamburger{display:flex!important}}
      `}</style>
    </nav>
  );
}

/* ════════════════════════════════════════
   ANNOUNCEMENT BANNER
════════════════════════════════════════ */
function Banner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div style={{ background:"#F5C518", color:"#1A2A1A", textAlign:"center", padding:"0.55rem 3rem", fontSize:"0.8rem", fontWeight:600, position:"relative", letterSpacing:"0.01em" }}>
      🎉 [PLACEHOLDER] Announcement — launch date, campaign, or milestone message goes here.
      <button onClick={() => setShow(false)} style={{ position:"absolute", right:"1rem", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:"0.85rem", color:"rgba(26,42,26,0.5)", fontWeight:700 }}>✕</button>
    </div>
  );
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
function Hero() {
  const [ref, vis] = useInView(0.1);
  const fade = (d = 0) => ({ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)", transition: `all .7s ease ${d}s` });
  return (
    <section id="home" ref={ref} style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"100px clamp(16px,5vw,60px) 80px", background:"#F8F8F4", position:"relative", overflow:"hidden" }}>
      {/* Background geometry */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,197,24,0.08) 0%,transparent 70%)", top:-180, right:-100 }} />
        <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(26,74,66,0.07) 0%,transparent 70%)", bottom:-80, left:-60 }} />
        {/* Grid dots */}
        <svg style={{ position:"absolute", right:0, top:80, opacity:0.06 }} width="320" height="320">
          {Array.from({length:8}).map((_,r) => Array.from({length:8}).map((_,c) =>
            <circle key={`${r}-${c}`} cx={c*40+20} cy={r*40+20} r="2.5" fill="#1A4A42" />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth:1200, width:"100%", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }}>
        {/* LEFT */}
        <div>
          <div style={{ ...fade(0), display:"inline-flex", alignItems:"center", gap:8, background:"rgba(245,197,24,0.15)", color:"#7A5800", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"6px 16px", borderRadius:60, marginBottom:"1.2rem" }}>
            <span style={{ width:6, height:6, background:"#F5C518", borderRadius:"50%", animation:"blink 2s infinite", display:"inline-block" }} />
            [PLACEHOLDER] Status Label
          </div>
          <h1 style={{ ...fade(0.05), fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(2.6rem,4.5vw,4rem)", fontWeight:800, lineHeight:1.08, color:"#1A2A1A", letterSpacing:"-0.03em", marginBottom:"1.25rem" }}>
            Brighter Minds,<br />
            <em style={{ fontStyle:"italic", color:"#1A4A42", fontWeight:700 }}>Mending the World.</em>
          </h1>
          <p style={{ ...fade(0.1), fontSize:"1rem", color:"#5A6050", lineHeight:1.78, marginBottom:"2.25rem", maxWidth:460 }}>
            {BRAND.description}
          </p>
          <div style={{ ...fade(0.15), display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
            <a href="#projects" style={{ background:"#1A4A42", color:"#fff", padding:"0.8rem 1.8rem", borderRadius:60, fontWeight:700, fontSize:"0.9rem", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8, boxShadow:"0 4px 24px rgba(26,74,66,0.28)" }}>
              Explore Our Work →
            </a>
            <a href="#about" style={{ color:"#1A4A42", fontWeight:600, fontSize:"0.9rem", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, padding:"0.8rem 0" }}>
              About BrightMend ›
            </a>
          </div>
          {/* Stats row */}
          <div style={{ ...fade(0.2), display:"flex", gap:"2rem", paddingTop:"1.75rem", borderTop:"1px solid rgba(26,74,66,0.1)" }}>
            {STATS.slice(0,3).map((s,i) => (
              <div key={i}>
                <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"1.8rem", fontWeight:800, color:"#1A2A1A", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:"0.74rem", color:"#7A8070", marginTop:3 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — floating cards */}
        <div style={{ ...fade(0.2), position:"relative", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div style={{ position:"relative", width:320, height:420 }}>
            {/* Main feature card */}
            <div style={{ position:"absolute", top:0, left:10, width:290, background:"#fff", borderRadius:22, padding:"1.5rem", boxShadow:"0 12px 48px rgba(26,74,66,0.14)", zIndex:3, border:"1px solid rgba(245,197,24,0.2)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1rem" }}>
                <div style={{ width:42, height:42, background:"rgba(245,197,24,0.15)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem" }}>🔗</div>
                <div>
                  <div style={{ fontWeight:800, fontSize:"0.95rem", color:"#1A2A1A" }}>WeeConnect</div>
                  <div style={{ fontSize:"0.72rem", color:"#1A4A42", fontWeight:600 }}>Flagship Project</div>
                </div>
                <div style={{ marginLeft:"auto", background:"rgba(245,197,24,0.15)", color:"#8A6500", fontSize:"0.65rem", fontWeight:700, padding:"3px 9px", borderRadius:60, letterSpacing:"0.06em" }}>LIVE</div>
              </div>
              <p style={{ fontSize:"0.8rem", color:"#5A6050", lineHeight:1.6, marginBottom:"1rem" }}>
                Community platform — post a need, find someone who can help. Rides, tutoring, services &amp; more.
              </p>
              <div style={{ display:"flex", gap:6 }}>
                {["Community","Marketplace","Mobile"].map(t => <span key={t} style={{ fontSize:"0.66rem", fontWeight:600, background:"#F0F4EE", color:"#3A4A38", padding:"3px 9px", borderRadius:60 }}>{t}</span>)}
              </div>
            </div>
            {/* Background card 1 */}
            <div style={{ position:"absolute", top:120, left:0, width:260, background:"#1A4A42", borderRadius:18, padding:"1.2rem", boxShadow:"0 8px 30px rgba(26,74,66,0.2)", zIndex:2, transform:"rotate(-3deg)" }}>
              <div style={{ fontSize:"0.68rem", fontWeight:700, color:"rgba(245,197,24,0.7)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Mission</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"1rem", fontWeight:700, color:"#fff", fontStyle:"italic", lineHeight:1.4 }}>"Brighter Minds,<br/>Mending the World."</div>
            </div>
            {/* Background card 2 */}
            <div style={{ position:"absolute", top:230, left:40, width:270, background:"#fff", borderRadius:18, padding:"1.2rem", boxShadow:"0 6px 24px rgba(26,74,66,0.1)", zIndex:1, transform:"rotate(2deg)", border:"1px solid rgba(26,74,66,0.06)" }}>
              <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#5A6050", marginBottom:"0.5rem" }}>[PLACEHOLDER] Next Initiative</div>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:8, height:8, background:"#F5C518", borderRadius:"50%" }} />
                <span style={{ fontSize:"0.8rem", color:"#1A2A1A", fontWeight:600 }}>Coming soon on brightmend.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}`}</style>
    </section>
  );
}

/* ════════════════════════════════════════
   POSTER SLIDER
════════════════════════════════════════ */
function PosterSlider() {
  const [cur, setCur] = useState(0);
  const total = POSTER_SLIDES.length;
  const next = useCallback(() => setCur(c => (c + 1) % total), [total]);
  const prev = () => setCur(c => (c - 1 + total) % total);
  useEffect(() => { const t = setInterval(next, 5800); return () => clearInterval(t); }, [next]);
  const s = POSTER_SLIDES[cur];
  return (
    <section id="poster" style={{ padding:0, overflow:"hidden" }}>
      <div style={{ position:"relative", height:500, background:s.bg, transition:"background 0.9s ease", overflow:"hidden" }}>
        {/* Decorative shapes */}
        <div style={{ position:"absolute", width:560, height:560, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.05)", top:-180, right:-100, pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"rgba(245,197,24,0.05)", top:60, right:200, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-80, left:"35%", width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.03)", pointerEvents:"none" }} />
        {/* Yellow accent stripe */}
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:5, background:"#F5C518" }} />

        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 clamp(24px,8vw,80px)", maxWidth:1200, margin:"0 auto", left:0, right:0 }}>
          <div style={{ maxWidth:600 }}>
            <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(245,197,24,0.75)", marginBottom:"1rem" }}>{s.eyebrow}</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(2rem,4vw,3.4rem)", fontWeight:800, color:"#fff", lineHeight:1.08, letterSpacing:"-0.03em", marginBottom:"1.25rem" }}>
              <span style={{ display:"block" }}>{s.title}</span>
              <em style={{ fontStyle:"italic", color:s.accent, display:"block" }}>{s.titleEm}</em>
            </h2>
            <p style={{ fontSize:"0.98rem", color:"rgba(255,255,255,0.7)", lineHeight:1.8, marginBottom:"2.25rem", maxWidth:480 }}>{s.body}</p>
            <a href={s.href} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#F5C518", color:"#1A2A1A", padding:"0.78rem 1.7rem", borderRadius:60, fontWeight:700, fontSize:"0.88rem", textDecoration:"none" }}>
              {s.cta} →
            </a>
          </div>
        </div>

        {/* Slide counter top-right */}
        <div style={{ position:"absolute", top:28, right:"clamp(24px,8vw,80px)", color:"rgba(255,255,255,0.35)", fontSize:"0.78rem", fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontWeight:700, letterSpacing:"0.05em" }}>
          {String(cur+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
        </div>

        {/* Nav dots */}
        <div style={{ position:"absolute", bottom:28, left:"clamp(24px,8vw,80px)", display:"flex", gap:8, alignItems:"center" }}>
          {POSTER_SLIDES.map((_, i) => (
            <div key={i} onClick={() => setCur(i)} style={{ height:4, borderRadius:2, cursor:"pointer", transition:"all .4s ease", background: i===cur?"#F5C518":"rgba(255,255,255,0.25)", width: i===cur?44:24 }} />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ position:"absolute", bottom:20, right:"clamp(24px,8vw,80px)", display:"flex", gap:9 }}>
          {[["←",prev],["→",next]].map(([lbl,fn],i) => (
            <button key={i} onClick={fn} style={{ width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", transition:"background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.1)"}>
              {lbl}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   DESCRIPTION CARDS SLIDER
════════════════════════════════════════ */
function DescSlider() {
  const [idx, setIdx] = useState(0);
  const perView = 3;
  const max = DESC_CARDS.length - perView;
  const canPrev = idx > 0;
  const canNext = idx < max;
  const cardW = 320;
  const gap = 20;
  return (
    <section style={{ padding:"90px clamp(16px,5vw,60px)", background:"#EEF0E8" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"2.5rem", flexWrap:"wrap", gap:"1rem" }}>
          <FadeUp>
            <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>Why BrightMend</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.7rem,3vw,2.5rem)", fontWeight:800, color:"#1A2A1A", letterSpacing:"-0.025em", marginBottom:"0.6rem" }}>
              [PLACEHOLDER] Section Heading
            </h2>
            <p style={{ fontSize:"0.92rem", color:"#5A6050", maxWidth:500, lineHeight:1.75 }}>
              [PLACEHOLDER] Subtitle — what makes BrightMend uniquely positioned to build products that matter?
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ display:"flex", gap:9 }}>
              {[["←", () => canPrev && setIdx(i=>i-1), canPrev], ["→", () => canNext && setIdx(i=>i+1), canNext]].map(([lbl,fn,en],i) => (
                <button key={i} onClick={fn} style={{ width:42, height:42, borderRadius:"50%", background:"rgba(26,74,66,0.08)", border:"1px solid rgba(26,74,66,0.18)", color:"#1A4A42", cursor:en?"pointer":"default", opacity:en?1:0.35, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem" }}>{lbl}</button>
              ))}
            </div>
          </FadeUp>
        </div>

        <div style={{ overflow:"hidden" }}>
          <div style={{ display:"flex", gap:gap, transform:`translateX(-${idx*(cardW+gap)}px)`, transition:"transform .5s cubic-bezier(.4,0,.2,1)" }}>
            {DESC_CARDS.map((c, i) => (
              <div key={i} style={{ minWidth:cardW, background:"#fff", borderRadius:22, padding:"1.75rem", flexShrink:0, display:"flex", flexDirection:"column", boxShadow:"0 4px 20px rgba(26,74,66,0.08)", border:"1px solid rgba(26,74,66,0.06)" }}>
                <div style={{ width:50, height:50, background:c.colorBg, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", marginBottom:"1rem" }}>{c.icon}</div>
                <span style={{ display:"inline-block", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.09em", textTransform:"uppercase", background:c.colorBg, color:c.color, padding:"3px 10px", borderRadius:60, marginBottom:"0.7rem" }}>{c.tag}</span>
                <h3 style={{ fontWeight:700, fontSize:"0.97rem", color:"#1A2A1A", marginBottom:"0.5rem" }}>{c.title}</h3>
                <p style={{ fontSize:"0.84rem", color:"#5A6050", lineHeight:1.68, flex:1, marginBottom:"1.25rem" }}>{c.body}</p>
                <div style={{ paddingTop:"1rem", borderTop:"1px solid rgba(26,74,66,0.07)" }}>
                  <a href="#contact" style={{ fontSize:"0.8rem", fontWeight:700, color:c.color, textDecoration:"none" }}>Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:"2rem" }}>
          {Array.from({ length: max+1 }).map((_,i) => (
            <div key={i} onClick={() => setIdx(i)} style={{ height:8, borderRadius:4, cursor:"pointer", transition:"all .3s", width:i===idx?32:8, background:i===idx?"#1A4A42":"rgba(26,74,66,0.2)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   STATS BAR
════════════════════════════════════════ */
function StatsBar() {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ background:"#1A4A42", padding:"60px clamp(16px,5vw,60px)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"2rem", textAlign:"center" }}>
        {STATS.map((s,i) => (
          <div key={i} style={{ opacity:vis?1:0, transform:vis?"none":"translateY(20px)", transition:`all .6s ease ${i*.1}s` }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"2.8rem", fontWeight:800, color:"#F5C518", lineHeight:1 }}>{s.num}</div>
            <div style={{ fontSize:"0.92rem", fontWeight:600, color:"rgba(255,255,255,0.88)", marginTop:"0.4rem" }}>{s.label}</div>
            <div style={{ fontSize:"0.76rem", color:"rgba(255,255,255,0.5)", marginTop:"0.2rem" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ABOUT
════════════════════════════════════════ */
function About() {
  return (
    <section id="about" style={{ padding:"100px clamp(16px,5vw,60px)", background:"#F8F8F4" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"5rem", alignItems:"start" }}>
        <FadeUp>
          <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>About BrightMend</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#1A2A1A", lineHeight:1.12, letterSpacing:"-0.025em", marginBottom:"1rem" }}>
            [PLACEHOLDER] About Heading
          </h2>
          <p style={{ fontSize:"0.92rem", color:"#5A6050", lineHeight:1.8, marginBottom:"1.25rem" }}>
            [PLACEHOLDER] Paragraph 1 — company origin story. Why was BrightMend founded? What problem does it solve? What gap in the market does it address?
          </p>
          <p style={{ fontSize:"0.92rem", color:"#5A6050", lineHeight:1.8, marginBottom:"2rem" }}>
            [PLACEHOLDER] Paragraph 2 — progress so far. What has been built? What milestones have been hit? Where is BrightMend today in its journey?
          </p>
          {/* Mission / Vision */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2rem" }}>
            {[
              { lbl:"Our Mission", text:"[PLACEHOLDER] Mission — what BrightMend does every day and for whom." },
              { lbl:"Our Vision", text:"[PLACEHOLDER] Vision — the future world state BrightMend is working toward." },
            ].map((mv,i) => (
              <div key={i} style={{ background:"#EEF0E8", borderRadius:16, padding:"1.2rem" }}>
                <div style={{ fontSize:"0.64rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.4rem" }}>{mv.lbl}</div>
                <p style={{ fontSize:"0.84rem", color:"#5A6050", lineHeight:1.65 }}>{mv.text}</p>
              </div>
            ))}
          </div>
          {/* Chips */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
            {VALUES.map((v,i) => (
              <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#EEF0E8", color:"#1A2A1A", fontSize:"0.78rem", fontWeight:600, padding:"5px 12px", borderRadius:60 }}>
                {v.icon} {v.title}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Values grid */}
        <FadeUp delay={0.15}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
            {VALUES.map((v,i) => (
              <div key={i} style={{ background:"#fff", borderRadius:20, padding:"1.5rem", boxShadow:"0 2px 16px rgba(26,74,66,0.07)", border:"1px solid rgba(26,74,66,0.06)" }}>
                <div style={{ fontSize:"1.8rem", marginBottom:"0.65rem" }}>{v.icon}</div>
                <div style={{ fontWeight:700, fontSize:"0.9rem", color:"#1A2A1A", marginBottom:"0.35rem" }}>{v.title}</div>
                <p style={{ fontSize:"0.79rem", color:"#5A6050", lineHeight:1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          {/* Quote card */}
          <div style={{ marginTop:"1.25rem", background:"#1A4A42", borderRadius:20, padding:"1.75rem", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", width:120, height:120, borderRadius:"50%", background:"rgba(245,197,24,0.08)", top:-30, right:-30 }} />
            <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"1.3rem", fontWeight:300, fontStyle:"italic", color:"#fff", lineHeight:1.5, marginBottom:"1rem" }}>
              "[PLACEHOLDER] Replace with an inspiring quote from the founder or the company's guiding principle."
            </div>
            <div style={{ fontSize:"0.78rem", color:"rgba(245,197,24,0.75)", fontWeight:600 }}>— [PLACEHOLDER] Founder, BrightMend</div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SERVICES
════════════════════════════════════════ */
function Services() {
  return (
    <section id="services" style={{ padding:"100px clamp(16px,5vw,60px)", background:"#EEF0E8" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <FadeUp>
          <div style={{ marginBottom:"3.5rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>What We Do</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#1A2A1A", letterSpacing:"-0.025em", marginBottom:"0.75rem" }}>
              [PLACEHOLDER] Services Heading
            </h2>
            <p style={{ fontSize:"0.92rem", color:"#5A6050", maxWidth:540, lineHeight:1.75 }}>
              [PLACEHOLDER] Services section subtitle — what does BrightMend offer and who benefits from it?
            </p>
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
          {SERVICES.map((s,i) => (
            <FadeUp key={i} delay={i*0.07}>
              <div style={{ background:"#fff", borderRadius:22, padding:"1.75rem", display:"flex", flexDirection:"column", minHeight:260, boxShadow:"0 3px 16px rgba(26,74,66,0.07)", border:"1px solid rgba(26,74,66,0.06)", transition:"transform .25s,box-shadow .25s", cursor:"default" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 10px 36px rgba(26,74,66,0.13)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 3px 16px rgba(26,74,66,0.07)"; }}>
                <div style={{ width:52, height:52, background:s.bg, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", marginBottom:"1.1rem" }}>{s.icon}</div>
                <h3 style={{ fontWeight:700, fontSize:"0.97rem", color:"#1A2A1A", marginBottom:"0.45rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.83rem", color:"#5A6050", lineHeight:1.68, flex:1, marginBottom:"1.1rem" }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                  {s.tags.map((t,j) => <span key={j} style={{ fontSize:"0.69rem", fontWeight:600, background:"#F0F4EE", color:"#3A4A38", padding:"3px 9px", borderRadius:60 }}>{t}</span>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   PROJECTS
════════════════════════════════════════ */
function Projects() {
  const [tab, setTab] = useState("active");
  const tabs = [["active","Active"],["upcoming","Upcoming"],["completed","Completed"]];
  return (
    <section id="projects" style={{ padding:"100px clamp(16px,5vw,60px)", background:"#F8F8F4" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <FadeUp>
          <div style={{ marginBottom:"3rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>Our Portfolio</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#1A2A1A", letterSpacing:"-0.025em", marginBottom:"0.75rem" }}>
              [PLACEHOLDER] Projects Heading
            </h2>
            <p style={{ fontSize:"0.92rem", color:"#5A6050", maxWidth:540, lineHeight:1.75 }}>
              [PLACEHOLDER] Projects subtitle — what stage is BrightMend at and what is in the pipeline?
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div style={{ display:"flex", gap:"0.4rem", marginBottom:"2.5rem", borderBottom:"2px solid #E4E8DC", paddingBottom:0 }}>
            {tabs.map(([key,lbl]) => (
              <button key={key} onClick={() => setTab(key)} style={{ fontSize:"0.88rem", fontWeight:600, padding:"0.6rem 1.2rem", border:"none", background:"none", cursor:"pointer", color: tab===key?"#1A4A42":"#7A8070", borderBottom: tab===key?"2px solid #1A4A42":"2px solid transparent", marginBottom:-2, transition:"all .2s" }}>
                {lbl}
              </button>
            ))}
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.25rem" }}>
          {PROJECTS[tab].map((p,i) => (
            <FadeUp key={i} delay={i*0.08}>
              <div style={{ background:"#fff", borderRadius:22, overflow:"hidden", boxShadow:"0 3px 16px rgba(26,74,66,0.07)", border: p.isFlagship ? "2px solid #F5C518" : "1px solid rgba(26,74,66,0.06)", position:"relative" }}>
                {p.isFlagship && (
                  <div style={{ position:"absolute", top:12, right:12, zIndex:2, background:"#F5C518", color:"#1A2A1A", fontSize:"0.64rem", fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase", padding:"4px 10px", borderRadius:60 }}>
                    Flagship
                  </div>
                )}
                <div style={{ height:130, background:`linear-gradient(135deg,${p.gradFrom},${p.gradTo})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2.6rem" }}>{p.emoji}</div>
                <div style={{ padding:"1.5rem" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"0.6rem" }}>
                    <span style={{ background:p.badgeBg, color:p.badgeC, fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", padding:"3px 9px", borderRadius:60 }}>{p.badge}</span>
                    {p.tagline && <span style={{ fontSize:"0.72rem", color:"#7A8070", fontStyle:"italic" }}>{p.tagline}</span>}
                  </div>
                  <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#1A2A1A", marginBottom:"0.45rem" }}>{p.name}</h3>
                  <p style={{ fontSize:"0.83rem", color:"#5A6050", lineHeight:1.68, marginBottom:"1rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                    {p.tags.map((t,j) => <span key={j} style={{ fontSize:"0.69rem", fontWeight:600, background:"#F0F4EE", color:"#3A4A38", padding:"3px 9px", borderRadius:60 }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TEAM
════════════════════════════════════════ */
function Team() {
  return (
    <section id="team" style={{ padding:"100px clamp(16px,5vw,60px)", background:"#EEF0E8" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <FadeUp>
          <div style={{ marginBottom:"3.5rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>The People</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#1A2A1A", letterSpacing:"-0.025em", marginBottom:"0.75rem" }}>
              [PLACEHOLDER] Team Section Heading
            </h2>
            <p style={{ fontSize:"0.92rem", color:"#5A6050", maxWidth:520, lineHeight:1.75 }}>
              [PLACEHOLDER] Team intro — who is behind BrightMend and what drives them?
            </p>
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.25rem" }}>
          {TEAM.map((m,i) => (
            <FadeUp key={i} delay={i*0.08}>
              <div style={{ background:"#fff", borderRadius:22, padding:"2rem", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", boxShadow:"0 3px 16px rgba(26,74,66,0.07)", border:"1px solid rgba(26,74,66,0.06)" }}>
                <div style={{ width:72, height:72, borderRadius:"50%", background:m.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", fontWeight:800, color:"#fff", marginBottom:"1.1rem", boxShadow:`0 6px 20px ${m.bg}55` }}>{m.initials}</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"1rem", fontWeight:800, color:"#1A2A1A", marginBottom:"0.2rem" }}>{m.name}</div>
                <div style={{ fontSize:"0.74rem", fontWeight:700, color:"#1A4A42", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"0.75rem" }}>{m.role}</div>
                <p style={{ fontSize:"0.82rem", color:"#5A6050", lineHeight:1.65 }}>{m.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TESTIMONIALS
════════════════════════════════════════ */
function Testimonials() {
  const [cur, setCur] = useState(0);
  const t = TESTIMONIALS[cur];
  return (
    <section style={{ padding:"90px clamp(16px,5vw,60px)", background:"#1A4A42" }}>
      <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
        <FadeUp>
          <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(245,197,24,0.75)", marginBottom:"0.6rem" }}>
            What People Say
          </div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.7rem,3vw,2.3rem)", fontWeight:800, color:"#fff", marginBottom:"3rem", letterSpacing:"-0.025em" }}>
            [PLACEHOLDER] Testimonials Heading
          </h2>
          <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:24, padding:"2.5rem", marginBottom:"2rem", border:"1px solid rgba(245,197,24,0.1)" }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"2.8rem", color:"rgba(245,197,24,0.25)", lineHeight:1, marginBottom:"1rem" }}>"</div>
            <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.85)", lineHeight:1.82, marginBottom:"2rem", fontStyle:"italic" }}>{t.quote}</p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:t.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.85rem", fontWeight:800, color:"#fff" }}>{t.initials}</div>
              <div style={{ textAlign:"left" }}>
                <div style={{ fontWeight:700, color:"#fff", fontSize:"0.9rem" }}>{t.name}</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.55)" }}>{t.role}</div>
              </div>
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:14 }}>
            {[["←", () => setCur(c=>(c-1+TESTIMONIALS.length)%TESTIMONIALS.length)], ["→", () => setCur(c=>(c+1)%TESTIMONIALS.length)]].map(([lbl,fn],i) => (
              <button key={i} onClick={fn} style={{ width:40, height:40, borderRadius:"50%", background:"rgba(245,197,24,0.15)", border:"1px solid rgba(245,197,24,0.25)", color:"#F5C518", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem" }}>{lbl}</button>
            ))}
            <div style={{ display:"flex", gap:7 }}>
              {TESTIMONIALS.map((_,i) => <div key={i} onClick={() => setCur(i)} style={{ height:8, borderRadius:4, cursor:"pointer", transition:"all .3s", width:i===cur?28:8, background:i===cur?"#F5C518":"rgba(245,197,24,0.3)" }} />)}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   CONTACT
════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({ fname:"", lname:"", email:"", type:"", msg:"" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const up = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const submit = () => {
    if (!form.fname.trim()||!form.email.trim()){setErr("Please enter your name and email.");return;}
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)){setErr("Please enter a valid email address.");return;}
    setErr(""); setSent(true);
  };
  const iStyle = { width:"100%", padding:"0.68rem 1rem", border:"1.5px solid rgba(26,74,66,0.18)", borderRadius:8, fontFamily:"'DM Sans',sans-serif", fontSize:"0.88rem", color:"#1A2A1A", background:"#F8F8F4", outline:"none" };
  return (
    <section id="contact" style={{ padding:"100px clamp(16px,5vw,60px)", background:"#EEF0E8" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <FadeUp>
          <div style={{ marginBottom:"3.5rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#1A4A42", marginBottom:"0.5rem" }}>Get In Touch</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#1A2A1A", letterSpacing:"-0.025em", marginBottom:"0.75rem" }}>
              [PLACEHOLDER] Contact Heading
            </h2>
            <p style={{ fontSize:"0.92rem", color:"#5A6050", maxWidth:520, lineHeight:1.75 }}>
              [PLACEHOLDER] Contact subtitle — invite users, partners, investors to reach out.
            </p>
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem", alignItems:"start" }}>
          <FadeUp>
            <h3 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontSize:"1.5rem", fontWeight:800, color:"#1A2A1A", marginBottom:"0.65rem" }}>
              [PLACEHOLDER] Contact Info Heading
            </h3>
            <p style={{ fontSize:"0.9rem", color:"#5A6050", lineHeight:1.78, marginBottom:"2rem" }}>
              [PLACEHOLDER] Contact intro — who should reach out and how can BrightMend help them?
            </p>
            {[{ icon:"✉️", lbl:"Email", val:BRAND.email },{ icon:"📱", lbl:"Phone", val:BRAND.phone },{ icon:"📍", lbl:"Location", val:BRAND.location },{ icon:"🌐", lbl:"Domain", val:BRAND.domain }].map((d,i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom:"1.2rem" }}>
                <div style={{ width:40, height:40, background:"#fff", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0, boxShadow:"0 2px 10px rgba(26,74,66,0.08)" }}>{d.icon}</div>
                <div>
                  <strong style={{ display:"block", fontSize:"0.8rem", color:"#1A2A1A", fontWeight:700 }}>{d.lbl}</strong>
                  <span style={{ fontSize:"0.84rem", color:"#5A6050" }}>{d.val}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop:"2rem", background:"rgba(245,197,24,0.1)", borderRadius:16, padding:"1.4rem", border:"1px solid rgba(245,197,24,0.2)" }}>
              <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#8A6500", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.5rem" }}>📍 Map Placeholder</div>
              <p style={{ fontSize:"0.82rem", color:"#5A6050" }}>[PLACEHOLDER] Embed Google Maps here once office or HQ address is confirmed.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ background:"#fff", borderRadius:24, padding:"2.5rem", boxShadow:"0 4px 24px rgba(26,74,66,0.09)", border:"1px solid rgba(26,74,66,0.07)" }}>
              {!sent ? (
                <>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    {[["First Name","fname","[First name]"],["Last Name","lname","[Last name]"]].map(([lbl,k,ph]) => (
                      <div key={k} style={{ marginBottom:"1.1rem" }}>
                        <label style={{ display:"block", fontSize:"0.78rem", fontWeight:700, color:"#1A2A1A", marginBottom:"0.35rem" }}>{lbl}</label>
                        <input value={form[k]} onChange={up(k)} placeholder={ph} style={iStyle} />
                      </div>
                    ))}
                  </div>
                  {[["Email Address","email","email","your@email.com"],["Message","msg","textarea","[PLACEHOLDER] Your message..."]].map(([lbl,k,type,ph]) => (
                    <div key={k} style={{ marginBottom:"1.1rem" }}>
                      <label style={{ display:"block", fontSize:"0.78rem", fontWeight:700, color:"#1A2A1A", marginBottom:"0.35rem" }}>{lbl}</label>
                      {type==="textarea"
                        ? <textarea value={form[k]} onChange={up(k)} placeholder={ph} rows={4} style={{...iStyle,resize:"vertical"}} />
                        : <input type={type} value={form[k]} onChange={up(k)} placeholder={ph} style={iStyle} />}
                    </div>
                  ))}
                  <div style={{ marginBottom:"1.1rem" }}>
                    <label style={{ display:"block", fontSize:"0.78rem", fontWeight:700, color:"#1A2A1A", marginBottom:"0.35rem" }}>I am a...</label>
                    <select value={form.type} onChange={up("type")} style={iStyle}>
                      <option value="">Select one</option>
                      <option>[PLACEHOLDER] Option 1 — e.g. Potential User</option>
                      <option>[PLACEHOLDER] Option 2 — e.g. Service Provider</option>
                      <option>[PLACEHOLDER] Option 3 — e.g. Investor / Partner</option>
                      <option>[PLACEHOLDER] Option 4 — e.g. Institution / College</option>
                      <option>[PLACEHOLDER] Option 5 — e.g. Media / Press</option>
                    </select>
                  </div>
                  {err && <div style={{ fontSize:"0.8rem", color:"#A32D2D", marginBottom:"0.75rem" }}>{err}</div>}
                  <button onClick={submit} style={{ width:"100%", background:"#1A4A42", color:"#fff", border:"none", padding:"0.88rem", borderRadius:60, fontFamily:"'DM Sans',sans-serif", fontSize:"0.95rem", fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                    Send Message →
                  </button>
                </>
              ) : (
                <div style={{ textAlign:"center", padding:"2.5rem 1rem" }}>
                  <div style={{ fontSize:"2.8rem", marginBottom:"0.75rem" }}>✅</div>
                  <h3 style={{ fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif", fontWeight:800, color:"#1A4A42", marginBottom:"0.5rem" }}>Message received!</h3>
                  <p style={{ fontSize:"0.88rem", color:"#5A6050" }}>The BrightMend team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FOOTER
════════════════════════════════════════ */
function Footer() {
  const cols = [
    { heading:"Company", links:[["Home","#home"],["About Us","#about"],["Services","#services"],["Projects","#projects"],["Team","#team"],["Contact","#contact"]] },
    { heading:"Projects", links:[["WeeConnect","#projects"],["[Placeholder Project]","#projects"],["[Future Initiative]","#projects"]] },
    { heading:"Connect", links:[[BRAND.email,`mailto:${BRAND.email}`],["LinkedIn",BRAND.social.linkedin],["Twitter",BRAND.social.twitter],["Instagram",BRAND.social.instagram],["Privacy Policy","#"]] },
  ];
  return (
    <footer style={{ background:"#111F1A", padding:"60px clamp(16px,5vw,60px) 28px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"3rem", marginBottom:"3rem" }}>
          <div>
            <BrightMendLogo height={38} />
            <p style={{ fontSize:"0.86rem", color:"rgba(255,255,255,0.45)", lineHeight:1.75, marginTop:"1rem", maxWidth:260 }}>
              {BRAND.tagline}<br />
              <span style={{ fontSize:"0.8rem", marginTop:"0.4rem", display:"block" }}>[PLACEHOLDER] Footer brand one-liner.</span>
            </p>
          </div>
          {cols.map((col,i) => (
            <div key={i}>
              <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.85)", marginBottom:"1rem" }}>{col.heading}</div>
              <ul style={{ listStyle:"none" }}>
                {col.links.map(([lbl,href],j) => <li key={j} style={{ marginBottom:"0.55rem" }}><a href={href} style={{ color:"rgba(255,255,255,0.45)", textDecoration:"none", fontSize:"0.86rem", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color="#F5C518"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.45)"}>{lbl}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:"1.5rem", display:"flex", justifyContent:"space-between", fontSize:"0.76rem", color:"rgba(255,255,255,0.3)", flexWrap:"wrap", gap:"0.5rem" }}>
          <span>© 2025 BrightMend. All rights reserved. — brightmend.com</span>
          <span>[PLACEHOLDER] Legal tagline or registration info</span>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   APP ROOT
════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:#F8F8F4;color:#1A2A1A;overflow-x:hidden;line-height:1.6}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-visual{display:none!important}
          .about-grid{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:600px){
          .footer-grid{grid-template-columns:1fr!important}
          .mv-grid{grid-template-columns:1fr!important}
          .form-row{grid-template-columns:1fr!important}
        }
      `}</style>
      <Banner />
      <Nav />
      <main style={{ paddingTop:68 }}>
        <Hero />
        <PosterSlider />
        <DescSlider />
        <StatsBar />
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
