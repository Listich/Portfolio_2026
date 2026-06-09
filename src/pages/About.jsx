import { motion } from 'framer-motion'

import profileImg from '../assets/profile2.jpg'
import PageHero   from '../components/PageHero'

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const BADGE = {
  'EN COURS':  { bg: 'rgba(194,81,122,0.1)',   color: '#c2517a', border: 'rgba(194,81,122,0.3)'  },
  'À VENIR':   { bg: 'rgba(90,138,74,0.12)',   color: '#5a8a4a', border: 'rgba(90,138,74,0.35)'  },
  'PLANIFIÉ':  { bg: 'rgba(139,92,246,0.12)',  color: '#8b5cf6', border: 'rgba(139,92,246,0.35)' },
}

const TIMELINE = [
  { date: '2018 – 2020',                    degree: 'Bac ST2S',                              school: 'Lycée Stéphane Hessel, Toulouse', badge: null       },
  { date: 'Févr. – Juin 2022',              degree: 'BTS SIO',                               school: 'CNED',                           badge: null       },
  { date: 'Sept. 2023 – 2028',              degree: 'Master Informatique (RNCP Niv. 7)',     school: 'Epitech Toulouse',               badge: 'EN COURS' },
  { date: '28 Oct. 2026 – 1 Juin 2027',    degree: 'Cours ALI + Study Abroad (SA@B)',       school: 'CSULB Long Beach, Californie',   badge: 'À VENIR'  },
]

const MINI_CARDS = [
  { label: 'ANNÉE',   val: 'Master 4 / 5'    },
  { label: 'ÉCOLE',   val: 'Epitech'         },
  { label: 'BASE',    val: 'Toulouse, FR'    },
  { label: 'PROMO',   val: '2028'            },
  { label: 'FOCUS',   val: 'Dev · IA · C++' },
  { label: 'STATUS',  val: 'ACTIVE', accent: true },
]

const TABLE_ROWS = [
  { label: 'FULL NAME', val: 'Serena Kifoula' },
  { label: 'PSEUDO',    val: 'Listich' },
  { label: 'BASE',      val: 'Toulouse, France' },
  { label: 'ÉCOLE',     val: 'Epitech Toulouse — Master Informatique, 4ème année' },
  { label: 'FOCUS',     val: 'Dev · IA · C++ · Mobile · Entrepreneuriat' },
  { label: 'AWARD',     val: 'Swift Student Challenge 2026 — lauréate' },
  { label: 'STATUS',    val: null },
]

const EXTRA = [
  {
    type: 'ROLE',
    title: 'Référente',
    org: 'E-mma — Toulouse',
    date: 'Sept. 2023 – Mars 2026 · 2 ans 7 mois',
    desc: "Référente au sein de l'association E-mma, promouvant la diversité et l'inclusion dans la tech. Supervision d'une équipe de 10 étudiants Epitech animant des ateliers de programmation pour tous âges. Coordination d'événements de sensibilisation, conférences et actions contre les stéréotypes de genre dans le numérique.",
  },
  {
    type: 'BÉNÉVOLE',
    title: 'Événement',
    org: 'DevFest Toulouse',
    date: null,
    desc: 'Bénévole lors du DevFest, conférence développée par la communauté Google Developers Group de Toulouse.',
  },
  {
    type: 'AMBASSADRICE',
    title: 'Ambassadrice Epitech',
    org: 'Epitech Toulouse',
    date: null,
    desc: "Ambassadrice Epitech : représentation de l'école lors d'événements, témoignages et actions de promotion.",
  },
  {
    type: 'BÉNÉVOLE',
    title: 'Bénévole',
    org: 'FACE 31 — Toulouse',
    date: null,
    desc: "Bénévole pour FACE 31, association favorisant l'insertion professionnelle et la lutte contre les discriminations.",
  },
]

function SectionHead({ num, en, jp, right }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '3px', color: '#c2517a', whiteSpace: 'nowrap' }}>
          {num}
        </span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(194,81,122,0.2)' }} />
        <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 11, color: '#c2517a' }}>
          {jp}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(56px, 7vw, 80px)', fontWeight: 700, color: '#1a0a10', lineHeight: 0.88, margin: 0 }}>
          {en}
        </h2>
        {right && (
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#7a4a5e', letterSpacing: '2px', paddingBottom: '0.5rem', flexShrink: 0 }}>
            {right}
          </span>
        )}
      </div>
    </div>
  )
}

function ProfileFrame() {
  return (
    <div style={{
      position: 'relative',
      width: '340px',
      flexShrink: 0,
      border: '0.5px solid rgba(194,81,122,0.25)',
      borderRadius: '4px',
      overflow: 'hidden',
      background: 'white',
      boxShadow: '0 8px 32px rgba(194,81,122,0.12)',
    }}>
      {/* Crochet haut gauche */}
      <div style={{
        position: 'absolute', top: '10px', left: '10px',
        width: '20px', height: '20px',
        borderTop: '2px solid #c2517a',
        borderLeft: '2px solid #c2517a',
        zIndex: 2,
      }} />

      {/* Photo */}
      <img
        src={profileImg}
        alt="Serena Kifoula"
        fetchPriority="high"
        style={{
          width: '100%',
          height: '380px',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />

      {/* Barre info superposée */}
      <div style={{
        position: 'absolute',
        bottom: '80px', left: 0, right: 0,
        background: 'rgba(253,246,249,0.88)',
        backdropFilter: 'blur(8px)',
        padding: '6px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '2px', color: '#7a4a5e' }}>
          ID / LISTICH
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#c2517a',
            animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
          }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '2px', color: '#c2517a' }}>
            REC
          </span>
        </div>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '2px', color: '#7a4a5e' }}>
          2026.06
        </span>
      </div>

      {/* Bloc nom */}
      <div style={{
        padding: '12px 14px',
        borderTop: '0.5px solid rgba(194,81,122,0.15)',
        background: 'white',
      }}>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', fontWeight: 800, color: '#1a0a10', letterSpacing: '1px' }}>
          SERENA / LISTICH
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '2px', color: '#7a4a5e', marginTop: '4px' }}>
          SERENA KIFOULA · セレナ・キフーラ
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>

      <PageHero
        chapter="02"
        chapterTitle='"CHARACTER SHEET"'
        breadcrumb="LISTICH.FR / CH.02 / CHARACTER SHEET"
        jp="人物紹介"
        title="À PROPOS"
        desc="Étudiante Epitech Toulouse · C++ · Mobile · IA · Entrepreneuriat"
      />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — PROFILE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fdf6f9', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">

          <FadeIn>
            <SectionHead num="#01 / PROFILE" en="PROFILE" jp="基本情報" right="UPDATED 2026.06 / 4ÈME ANNÉE" />
          </FadeIn>

          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* Colonne gauche — photo + stats */}
            <FadeIn delay={0.08}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '320px', flexShrink: 0 }}>

                <ProfileFrame />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  {MINI_CARDS.map(({ label, val, accent }) => (
                    <div
                      key={label}
                      style={{ display: 'flex', flexDirection: 'column', gap: 3, padding: '10px 8px', background: 'rgba(255,240,245,0.55)', border: '0.5px solid rgba(194,81,122,0.15)', borderRadius: 4 }}
                    >
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, letterSpacing: '2px', color: '#c2517a' }}>
                        {label}
                      </span>
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 14, fontWeight: 700, color: accent ? '#c2517a' : '#1a0a10', lineHeight: 1.2 }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Colonne droite — texte + tableau */}
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <FadeIn delay={0.14}>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, fontStyle: 'italic', color: '#1a0a10', lineHeight: 1.2, margin: 0 }}>
                  Bonjour — Je suis <em style={{ color: '#c2517a' }}>Serena.</em>
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#7a4a5e', lineHeight: 1.9, margin: 0 }}>
                    Actuellement en <strong style={{ color: '#c2517a' }}>4ᵉ année à EPITECH</strong> et lauréate du <strong style={{ color: '#c2517a' }}>Swift Student Challenge 2026</strong>, je conçois des solutions logicielles innovantes avec une approche centrée sur l'impact et l'utilité concrète.
                  </p>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#7a4a5e', lineHeight: 1.9, margin: 0 }}>
                    Passionnée par l'ingénierie logicielle, j'évolue aussi bien sur des projets low-level en <strong style={{ color: '#1a0a10' }}>C/C++</strong> que sur le développement d'applications mobiles et web. J'apprécie particulièrement les défis techniques complexes, l'apprentissage continu et la création de produits capables de transformer des idées en solutions utiles au quotidien.
                  </p>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#7a4a5e', lineHeight: 1.9, margin: 0 }}>
                    Intéressée par l'intelligence artificielle, la data et les systèmes à grande échelle, je cherche constamment à approfondir mes compétences et à contribuer à des projets ambitieux.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.26}>
                <blockquote style={{ margin: 0, paddingLeft: '1.25rem', paddingTop: 4, paddingBottom: 4, borderLeft: '3px solid #c2517a', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 18, color: '#7a4a5e', lineHeight: 1.6 }}>
                  « Construire ce qu'on aurait voulu que quelqu'un d'autre ait déjà créé. »
                </blockquote>
              </FadeIn>

              <FadeIn delay={0.32}>
                <dl style={{ margin: 0 }}>
                  {TABLE_ROWS.map(({ label, val }, i) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'baseline',
                        padding: '12px 0',
                        borderTop: '0.5px solid rgba(194,81,122,0.15)',
                        ...(i === TABLE_ROWS.length - 1 ? { borderBottom: '0.5px solid rgba(194,81,122,0.15)' } : {}),
                      }}
                    >
                      <dt style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '2px', color: '#c2517a', textTransform: 'uppercase', width: 88, flexShrink: 0 }}>
                        {label}
                      </dt>
                      <dd style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#1a0a10', margin: 0, lineHeight: 1.5 }}>
                        {label === 'STATUS' ? (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span className="relative inline-flex" style={{ width: 8, height: 8 }}>
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            Open to work
                          </span>
                        ) : val}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — EDUCATION
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff0f5', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">

          <FadeIn>
            <SectionHead num="#02 / EDUCATION" en="EDUCATION" jp="学歴" right="5 FORMATIONS / FR × US" />
          </FadeIn>

          <div style={{ position: 'relative', paddingLeft: 36 }}>
            {/* Ligne verticale */}
            <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: '0.5px', background: 'rgba(194,81,122,0.25)' }} />

            {TIMELINE.map((item, i) => {
              const badge = item.badge ? BADGE[item.badge] : null
              const isActive = item.badge === 'EN COURS'
              return (
                <FadeIn key={item.degree} delay={i * 0.07}>
                  <div style={{ position: 'relative', marginBottom: '1.75rem' }}>
                    {/* Point sur la timeline */}
                    {isActive ? (
                      <div style={{ position: 'absolute', left: -32, top: 3 }}>
                        <span className="relative flex" style={{ width: 14, height: 14 }}>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ background: '#c2517a' }} />
                          <span className="relative inline-flex rounded-full" style={{ width: 14, height: 14, background: '#c2517a' }} />
                        </span>
                      </div>
                    ) : (
                      <div style={{ position: 'absolute', left: -28, top: 5, width: 8, height: 8, borderRadius: '50%', background: 'white', border: '1.5px solid rgba(194,81,122,0.5)' }} />
                    )}

                    {/* Card */}
                    <div style={{ background: 'white', border: '0.5px solid rgba(194,81,122,0.15)', borderRadius: 4, padding: '1rem 1.25rem', boxShadow: '0 2px 8px rgba(194,81,122,0.06)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '2px', color: '#c2517a' }}>
                          {item.date}
                        </span>
                        {badge && (
                          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, fontWeight: 700, letterSpacing: '1px', padding: '2px 8px', borderRadius: 20, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, flexShrink: 0 }}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontWeight: 700, color: '#1a0a10', margin: 0, lineHeight: 1.2 }}>
                        {item.degree}
                      </p>
                      <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7a4a5e', margin: 0 }}>
                        {item.school}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — EXTRACURRICULAR
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fdf6f9', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">

          <FadeIn>
            <SectionHead num="#03 / EXTRACURRICULAR" en="EXTRA" jp="課外活動" right="RÔLES & PROJETS" />
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {EXTRA.map((item, i) => (
              <FadeIn key={item.org} delay={i * 0.07}>
                <div style={{ background: 'white', border: '0.5px solid rgba(194,81,122,0.15)', borderRadius: 4, padding: '1.25rem 1.5rem', boxShadow: '0 2px 8px rgba(194,81,122,0.06)', display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, fontWeight: 700, letterSpacing: '2px', padding: '2px 8px', borderRadius: 2, background: 'rgba(194,81,122,0.08)', color: '#c2517a', border: '0.5px solid rgba(194,81,122,0.25)' }}>
                      {item.type}
                    </span>
                    {item.date && (
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#7a4a5e', letterSpacing: '1px' }}>
                        {item.date}
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontWeight: 700, color: '#1a0a10', margin: 0, lineHeight: 1.2 }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, letterSpacing: '1px', color: '#c2517a', margin: 0 }}>
                    {item.org}
                  </p>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7a4a5e', margin: 0, lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
