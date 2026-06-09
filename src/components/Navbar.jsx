import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'CH.01 HOME',     to: '/'           },
  { label: 'CH.02 ABOUT',    to: '/about'      },
  { label: 'CH.03 AWARDS',   to: '/awards'     },
  { label: 'CH.04 XP',       to: '/experience' },
  { label: 'CH.05 PROJECTS', to: '/projects'   },
  { label: 'CH.06 SKILLS',   to: '/skills'     },
  { label: 'CH.07 CONTACT',  to: '/contact'    },
]

const mobileLinks = [
  { to: '/',           num: 'CH.01', label: 'HOME',     jp: 'ホーム'   },
  { to: '/about',      num: 'CH.02', label: 'ABOUT',    jp: '人物紹介' },
  { to: '/awards',     num: 'CH.03', label: 'AWARDS',   jp: '受賞歴'   },
  { to: '/experience', num: 'CH.04', label: 'XP',       jp: '職歴'     },
  { to: '/projects',   num: 'CH.05', label: 'PROJECTS', jp: '制作実績' },
  { to: '/skills',     num: 'CH.06', label: 'SKILLS',   jp: 'スキル'   },
  { to: '/contact',    num: 'CH.07', label: 'CONTACT',  jp: '連絡先'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        style={{ borderBottomColor: 'rgba(194,81,122,0.25)' }}
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-3
                   bg-white/70 backdrop-blur-md border-b"
      >
        {/* Logo */}
        <span
          className="text-base font-bold tracking-widest whitespace-nowrap"
          style={{ fontFamily: '"Noto Serif JP", serif', color: '#c2517a' }}
        >
          鬼滅 LISTICH.FR
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'text-[10px] font-semibold tracking-widest transition-colors duration-200',
                    'relative after:absolute after:left-0 after:-bottom-0.5 after:h-px',
                    'after:bg-[#c2517a] after:transition-all after:duration-200',
                    isActive
                      ? 'text-[#c2517a] after:w-full'
                      : 'text-[#7a4a5e] hover:text-[#c2517a] after:w-0 hover:after:w-full',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop badge + mobile hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-[#7a4a5e]">
              OPEN TO WORK
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="hamburger-btn md:hidden"
            aria-label="Ouvrir le menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            <div style={{ width: '22px', height: '1.5px', background: '#c2517a' }} />
            <div style={{ width: '22px', height: '1.5px', background: '#c2517a' }} />
            <div style={{ width: '14px', height: '1.5px', background: '#c2517a' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'linear-gradient(135deg, #1a0a10 0%, #3d1428 100%)',
              display: 'flex', flexDirection: 'column',
              padding: '80px 2rem 2rem',
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '9px', letterSpacing: '3px', color: '#f4a7c0', marginBottom: '4px' }}>LISTICH.FR / INDEX</div>
              <div style={{ fontFamily: 'Noto Serif JP', fontSize: '11px', color: '#f4a7c0', opacity: 0.6 }}>目次 ／ MENU</div>
            </div>

            {mobileLinks.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0', borderBottom: '0.5px solid rgba(244,167,194,0.1)' }}
                >
                  <span style={{ fontFamily: 'DM Mono', fontSize: '10px', color: '#f4a7c0', letterSpacing: '2px', minWidth: '48px' }}>{item.num}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '28px', fontWeight: 700, color: 'white', flex: 1 }}>{item.label}</span>
                  <span style={{ fontFamily: 'Noto Serif JP', fontSize: '11px', color: 'rgba(244,167,194,0.5)' }}>{item.jp}</span>
                </Link>
              </motion.div>
            ))}

            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '10px', color: '#c2517a', letterSpacing: '2px' }}>serena.kifoula@epitech.eu →</div>
              <div style={{ fontFamily: 'DM Mono', fontSize: '9px', color: 'rgba(244,167,194,0.3)', marginTop: '8px', letterSpacing: '2px' }}>© 2026 / TOULOUSE, FRANCE</div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#f4a7c0', fontSize: '24px', cursor: 'pointer' }}
            >×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
