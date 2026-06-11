import { useState, useMemo, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import profileImg  from '../assets/profile.jpg'
import nezukoImg   from '../assets/nezuko.png'
import nezuko2Img  from '../assets/nezuko2.png'
import frameImg    from '../assets/frame.png'
import bgImg       from '../assets/bg.jpg'

// ── Icône ronde Nezuko (fallback emoji) ───────────────────────────────
function NezukoIcon({ size = 32 }) {
  const [err, setErr] = useState(false)
  if (err) return <span style={{ fontSize: size * 0.56, lineHeight: 1, flexShrink: 0 }}>🌸</span>
  return (
    <img
      src={nezukoImg}
      alt=""
      onError={() => setErr(true)}
      style={{
        width: size, height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '1px solid rgba(255,255,255,0.3)',
        flexShrink: 0,
        display: 'block',
      }}
    />
  )
}

// ── Icône Nezuko dans son panier (banderole WORKS) ────────────────────
function Nezuko2Icon() {
  const [err, setErr] = useState(false)
  if (err) return <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>🧃</span>
  return (
    <img
      src={nezuko2Img}
      alt=""
      loading="lazy"
      onError={() => setErr(true)}
      style={{
        width: 48, height: 48,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
        border: '2px solid rgba(255,255,255,0.4)',
        flexShrink: 0,
        background: 'white',
        display: 'block',
      }}
    />
  )
}

// ── Fond hero : couleur de base (fallback) ────────────────────────────
const HERO_BG = { backgroundColor: '#fdf6f9' }

// ── Grille + halos radiaux (div overlay z-index 1) ───────────────────
const GRID_OVERLAY = {
  backgroundImage: [
    'linear-gradient(rgba(194,81,122,0.035) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(194,81,122,0.035) 1px, transparent 1px)',
    'radial-gradient(ellipse at 15% 60%, rgba(242,167,194,0.14) 0%, transparent 55%)',
    'radial-gradient(ellipse at 85% 15%, rgba(194,81,122,0.06) 0%, transparent 45%)',
  ].join(', '),
  backgroundSize: '40px 40px, 40px 40px, auto, auto',
}

function fade(delay = 0) {
  return {
    initial:    { opacity: 0, y: 22 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }
}

// ── Data ─────────────────────────────────────────────────────────────
const BAND_ITEMS = [
  { ep: 'EP.01', title: 'FIRST CONTACT',   jp: '初接触',   to: '/'           },
  { ep: 'EP.02', title: 'CHARACTER SHEET', jp: '人物紹介', to: '/about'      },
  { ep: 'EP.03', title: 'TRACK RECORD',    jp: '職歴',     to: '/experience' },
  { ep: 'EP.04', title: 'SELECTED WORKS',  jp: '制作実績', to: '/projects'   },
  { ep: 'EP.05', title: 'SKILL TREE',      jp: 'スキル',   to: '/skills'     },
  { ep: 'EP.06', title: 'TRANSMISSION',    jp: '連絡先',   to: '/contact'    },
]

const WORKS_BAND = [
  '制作実績', 'SELECTED WORKS', 'EPISODE 04',
  'NOW SHOWING', 'ON AIR', 'LISTICH.FR', 'GITHUB',
]

const WORKS_ITEMS = [
  { text: 'NOW SHOWING',    jp: '上映中'       },
  { text: 'ON AIR',         jp: '放送中'       },
  { text: 'SELECTED WORKS', jp: '制作実績'     },
  { text: 'LISTICH.FR',     jp: 'ポートフォリオ' },
  { text: 'EPISODE 04',     jp: '第4話'        },
  { text: 'GITHUB',         jp: 'コード'       },
]

const FEATURED_PROJECTS = [
  {
    id: 'PJ.01',
    title: 'NutriApp',
    jp: 'ニュートリアップ',
    desc: 'App mobile scan codes-barres, scoring nutritionnel en temps réel.',
    tags: ['REACT NATIVE', 'EXPO', 'SUPABASE'],
    year: '2025',
    github: 'https://github.com/Listich',
  },
  {
    id: 'PJ.02',
    title: 'Leip Filgood',
    jp: 'フィルグッド',
    desc: "Scan étiquettes vêtements ISO 3758, score durabilité. Seule dev ML de l'équipe.",
    tags: ['REACT NATIVE', 'PYTHON', 'ML'],
    year: '2024',
    github: 'https://github.com/Listich',
  },
  {
    id: 'PJ.03',
    title: 'XsdGenerator',
    jp: 'XSD生成',
    desc: 'Framework C++ solo, génération XSD + publication automatisée Confluence. Stage Telespazio.',
    tags: ['C++17', 'CMAKE', 'REST'],
    year: '2026',
    github: 'https://github.com/Listich',
  },
]

export default function Home() {
  const [frameErr, setFrameErr] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 })
  const rotateX    = useTransform(springY, [-300, 300], [8, -8])
  const rotateY    = useTransform(springX, [-500, 500], [-8, 8])
  const translateX = useTransform(springX, [-500, 500], [-15, 15])
  const translateY = useTransform(springY, [-300, 300], [-10, 10])

  useEffect(() => {
    let rafId = null
    let cachedRect = null
    const section = document.getElementById('hero-section')

    const updateRect = () => { cachedRect = section?.getBoundingClientRect() ?? null }
    updateRect()
    window.addEventListener('resize', updateRect, { passive: true })

    const handleMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        if (cachedRect) {
          mouseX.set(e.clientX - cachedRect.left - cachedRect.width / 2)
          mouseY.set(e.clientY - cachedRect.top - cachedRect.height / 2)
        }
        rafId = null
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', updateRect)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const petals = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    width: `${12 + Math.random() * 14}px`,
    height: `${16 + Math.random() * 18}px`,
    animationDuration: `${8 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 12}s`,
    opacity: 0.55 + Math.random() * 0.35,
    color: i % 3 === 0 ? '#f4a7c0' : i % 3 === 1 ? '#e8789a' : '#fce8f0',
    colorDark: i % 3 === 0 ? '#e8789a' : i % 3 === 1 ? '#c2517a' : '#f4a7c0',
  })), [])

  const particles = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    bottom: `${Math.random() * 30}%`,
    size: `${3 + Math.random() * 4}px`,
    duration: `${5 + Math.random() * 7}s`,
    delay: `${Math.random() * 6}s`,
    color: i % 2 === 0 ? '#d4a843' : '#f4c842',
  })), [])

  return (
    <div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section id="hero-section" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#fdf6f9' }}>

        {/* ── Image de fond — z-index 0 ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <img
            src={bgImg}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.45 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(253,246,249,0.3) 0%, rgba(253,246,249,0.15) 40%, rgba(253,246,249,0.7) 85%, rgba(253,246,249,1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(253,246,249,0.85) 0%, rgba(253,246,249,0.4) 45%, transparent 100%)' }} />
        </div>

        {/* ── Grille + halos radiaux — z-index 1 ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', ...GRID_OVERLAY }} />

        {/* ── Pétales qui tombent — z-index 2 ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
          {petals.map(p => (
            <div
              key={p.id}
              className="petal"
              style={{
                left: p.left,
                top: '-20px',
                width: p.width,
                height: p.height,
                background: `radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.85) 0%, ${p.color} 55%, ${p.colorDark} 100%)`,
                boxShadow: `0 1px 6px ${p.colorDark}55, inset 0 1px 2px rgba(255,255,255,0.6)`,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        {/* ── Particules dorées flottantes — z-index 2 ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
          {particles.map(p => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                bottom: p.bottom,
                width: p.size,
                height: p.size,
                background: `radial-gradient(circle at 35% 35%, #fff 0%, ${p.color} 45%, ${p.color}99 100%)`,
                boxShadow: `0 0 8px 2px ${p.color}bb, 0 0 20px 6px ${p.color}44`,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* ── Indicateur gauche : CHAPTER / 01 / FIRST CONTACT ── */}
        <div
          className="hidden md:flex"
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            flexDirection: 'row',
            alignItems: 'baseline',
            gap: 10,
            userSelect: 'none',
            zIndex: 4,
          }}
        >
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, fontWeight: 700, letterSpacing: '4px', color: '#c2517a', opacity: 0.5 }}>
            CHAPTER
          </span>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, fontWeight: 700, color: '#1a0a10', opacity: 0.12, lineHeight: 1 }}>
            01
          </span>
          <em style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, color: '#c2517a', opacity: 0.35, fontStyle: 'italic' }}>
            "FIRST CONTACT"
          </em>
        </div>

        {/* ── Indicateur droit : VOL.01 ── */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            userSelect: 'none',
            zIndex: 4,
          }}
        >
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#1a0a10', opacity: 0.18, letterSpacing: '3px' }}>
            VOL.01
          </span>
        </div>

        {/* ── Zone 1 : Contenu principal ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8vw',
          paddingTop: '64px',
          gap: '2rem',
          position: 'relative',
          zIndex: 3,
          perspective: '1200px',
        }}>

          {/* Colonne texte gauche */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Labels */}
            <motion.div {...fade(0)} style={{ marginBottom: 16 }}>
              <span style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '3px', color: '#c2517a' }}>
                FILE 001 / KEY VISUAL —— TOULOUSE / FRANCE
              </span>
              <span style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '2px', color: '#7a4a5e', marginTop: 4 }}>
                ÉTUDIANTE EN INFORMATIQUE / C++ · MOBILE · IA
              </span>
            </motion.div>

            {/* Nom */}
            <motion.div {...fade(0.08)}>
              <span style={{
                display: 'block',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(80px, 11vw, 130px)',
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: '-3px',
                color: '#1a0a10',
              }}>SERENA</span>
              <span style={{
                display: 'block',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(80px, 11vw, 130px)',
                fontWeight: 800,
                fontStyle: 'italic',
                lineHeight: 0.88,
                letterSpacing: '-3px',
                color: '#c2517a',
              }}>LISTICH</span>
              <div style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 12, letterSpacing: '4px', color: '#7a4a5e', marginTop: 16, marginBottom: 16 }}>
                セレナ・キフーラ ／ Serena Kifoula
              </div>
            </motion.div>

            {/* Statuts */}
            <motion.div {...fade(0.26)} style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '2px', color: '#7a4a5e' }}>
                <span style={{ color: '#7a4a5e' }}>●</span>
                TOULOUSE, FRANCE
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '2px', color: '#7a4a5e' }}>
                <span style={{ color: '#7a4a5e' }}>●</span>
                EPITECH 2028
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '2px', color: '#5a8a4a' }}>
                <span className="relative inline-flex" style={{ width: 8, height: 8 }}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                OPEN TO WORK
              </span>
            </motion.div>

          </div>

          {/* Colonne photo droite — cadre ornemental */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex"
            style={{ flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}
          >
            {/* Conteneur cadre + photo — parallax souris */}
            <motion.div style={{
              position: 'relative',
              width: '540px',
              height: '640px',
              flexShrink: 0,
              rotateX,
              rotateY,
              translateX,
              translateY,
              willChange: 'transform',
              ...(frameErr ? { border: '3px solid #c2517a', borderRadius: 4 } : {}),
            }}>
              {/* Photo EN PREMIER — z-index bas, centrée dans l'ouverture ovale du cadre */}
              <img
                src={profileImg}
                alt="Serena Listich"
                fetchPriority="high"
                style={{
                  position: 'absolute',
                  top: '18%',
                  left: '22%',
                  width: '56%',
                  height: '52%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '50%',
                  zIndex: 1,
                }}
              />
              {/* Cadre PAR-DESSUS la photo — masque les bords */}
              {!frameErr && (
                <img
                  src={frameImg}
                  alt=""
                  fetchPriority="high"
                  onError={() => setFrameErr(true)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </motion.div>

            {/* Badge sous le cadre */}
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <span style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 9,
                letterSpacing: '2px',
                color: '#7a4a5e',
              }}>
                ID / LISTICH ● ACTIVE 2026.06
              </span>
            </div>
          </motion.div>

        </div>

        {/* ── Zone 2 : Banderole EP — style manga ── */}
        <div
          className="band-wrapper"
          style={{
            flexShrink: 0,
            height: 120,
            marginTop: '-20px',
            position: 'relative',
            zIndex: 4,
            transform: 'skewY(-1.5deg)',
            background: 'linear-gradient(135deg, #c2517a 0%, #a83f64 50%, #c2517a 100%)',
            borderTop: '2px solid rgba(255,255,255,0.3)',
            borderBottom: '2px solid rgba(255,255,255,0.15)',
            boxShadow: '0 -8px 32px rgba(194,81,122,0.4), 0 8px 32px rgba(194,81,122,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            overflow: 'hidden',
          }}
        >
          <div style={{ transform: 'skewY(1.5deg)', height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div
              className="band-track"
              style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
            >
              {[...BAND_ITEMS, ...BAND_ITEMS].map((item, i) => (
                <Fragment key={i}>
                  <Link to={item.to} style={{ textDecoration: 'none', flexShrink: 0 }}>
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 32px', flexShrink: 0, cursor: 'pointer', borderRadius: 4, transition: 'background 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <NezukoIcon size={48} />
                      <div>
                        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: 'rgba(255,255,255,0.6)', lineHeight: 1, marginBottom: 4 }}>
                          {item.ep}
                        </div>
                        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '1px', lineHeight: 1, marginBottom: 3 }}>
                          {item.title}
                        </div>
                        <div style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: '2px' }}>
                          {item.jp}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div aria-hidden style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)', flexShrink: 0, margin: '0 8px' }} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — PROFIL RAPIDE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fdf6f9', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">

          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', color: '#7a4a5e' }}>
                #01 / PROFIL
              </span>
              <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 12, color: '#7a4a5e' }}>
                人物紹介
              </span>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(48px, 7vw, 88px)',
                fontWeight: 700, color: '#1a0a10',
                lineHeight: 0.88, margin: 0,
              }}>
                WHO AM I
              </h2>
            </div>
            <Link
              to="/about"
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#c2517a', textDecoration: 'none', alignSelf: 'flex-end', paddingBottom: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              EN SAVOIR PLUS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01', label: 'FORMATION',
                title: 'Master Informatique',
                desc: 'Epitech Toulouse · 2023–2028',
                tags: ['RNCP Niv. 7', 'Toulouse', '4ème année'],
                to: '/about',
              },
              {
                num: '02', label: 'EXPÉRIENCE',
                title: 'Stagiaire C++',
                desc: 'Telespazio France · Avr.–Août 2026',
                tags: ['C++17', 'CMake', 'XML/XSD'],
                to: '/experience',
              },
              {
                num: '03', label: 'DISTINCTION',
                title: 'Swift Student Challenge',
                desc: 'Apple WWDC26 · Lauréate 2026',
                tags: ['Swift', 'SwiftUI', 'iOS', '☆ Solo'],
                to: '/awards',
              },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white',
                  border: '0.5px solid rgba(194,81,122,0.18)',
                  borderTop: '3px solid #c2517a',
                  borderRadius: 4,
                  padding: '1.75rem 1.75rem',
                  boxShadow: '0 2px 16px rgba(194,81,122,0.07)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(194,81,122,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(194,81,122,0.07)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                  <span style={{
                    fontFamily: 'DM Mono, monospace', fontSize: 8, fontWeight: 700,
                    letterSpacing: '2px', color: 'white',
                    background: '#c2517a', padding: '3px 9px', borderRadius: 2,
                  }}>
                    {item.num}
                  </span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '3px', color: '#c2517a' }}>
                    {item.label}
                  </span>
                </div>

                <div style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 700, color: '#1a0a10',
                  lineHeight: 1.1, marginBottom: 10,
                }}>
                  {item.title}
                </div>

                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7a4a5e', lineHeight: 1.8, marginBottom: 16 }}>
                  {item.desc}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
                  {item.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'DM Mono, monospace', fontSize: 9,
                      padding: '2px 8px',
                      border: '0.5px solid rgba(194,81,122,0.25)',
                      borderRadius: 2, color: '#c2517a', letterSpacing: '1px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — BANDEROLE BORDEAUX SELECTED WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="band-wrapper"
        style={{
          position: 'relative',
          height: 120,
          background: 'linear-gradient(135deg, #8b3a5a 0%, #5c2d42 40%, #7a2d50 70%, #8b3a5a 100%)',
          borderTop: '1.5px solid rgba(255,200,220,0.25)',
          borderBottom: '1.5px solid rgba(92,45,66,0.8)',
          boxShadow: [
            '0 -4px 0 rgba(139,58,90,0.5)',
            '0 4px 0 rgba(92,45,66,0.6)',
            '0 -12px 40px rgba(139,58,90,0.35)',
            '0 12px 40px rgba(92,45,66,0.3)',
            'inset 0 1px 0 rgba(255,255,255,0.18)',
            'inset 0 -1px 0 rgba(0,0,0,0.2)',
          ].join(', '),
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
          <div className="band-track" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            {[...WORKS_ITEMS, ...WORKS_ITEMS].map((item, i) => (
              <Fragment key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 28px', flexShrink: 0 }}>
                  <img
                    src={nezuko2Img}
                    alt=""
                    loading="lazy"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '2px solid rgba(255,200,220,0.5)', background: 'white', display: 'block', flexShrink: 0, boxShadow: '0 0 10px 3px rgba(255,180,200,0.35)' }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                      {item.text}
                    </span>
                    <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 9, color: 'rgba(255,200,220,0.7)', letterSpacing: '3px' }}>
                      {item.jp}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '0 8px', flexShrink: 0 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,200,220,0.5)' }} />
                  <div style={{ width: 1, height: 20, background: 'rgba(255,200,220,0.25)' }} />
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,200,220,0.5)' }} />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — SELECTED WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff0f5', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">

          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', color: '#7a4a5e' }}>
                #02 / WORKS
              </span>
              <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 12, color: '#7a4a5e' }}>
                制作実績
              </span>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(48px, 7vw, 88px)',
                fontWeight: 700, color: '#1a0a10',
                lineHeight: 0.88, margin: 0,
              }}>
                SELECTED<br />WORKS
              </h2>
            </div>
            <Link
              to="/projects"
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#c2517a', textDecoration: 'none', alignSelf: 'flex-end', paddingBottom: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              FEATURED 3 / SEE ALL →
            </Link>
          </div>

          <div>
            {FEATURED_PROJECTS.map(project => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-row"
              >
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#c2517a', width: 52, flexShrink: 0 }}>
                  {project.id}
                </span>
                <div style={{ width: '22%', minWidth: 110, flexShrink: 0 }}>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 600, color: '#1a0a10', lineHeight: 1.1 }}>
                    {project.title}
                  </div>
                  <div style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 9, color: '#7a4a5e', marginTop: 2 }}>
                    {project.jp}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 12, color: '#7a4a5e', margin: '0 0 6px 0', lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', padding: '2px 6px', border: '1px solid rgba(194,81,122,0.3)', color: '#c2517a' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0, textAlign: 'right' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#c2517a', marginBottom: 2 }}>
                    {project.year}
                  </div>
                  <span className="project-arrow" style={{ fontSize: 16, color: '#c2517a' }}>→</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link
              to="/projects"
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#c2517a', textDecoration: 'none', borderBottom: '1px solid #c2517a', paddingBottom: 4, display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
