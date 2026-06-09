import { NavLink } from 'react-router-dom'

const links = [
  { label: 'CH.01 HOME',     to: '/'           },
  { label: 'CH.02 ABOUT',    to: '/about'      },
  { label: 'CH.03 AWARDS',   to: '/awards'     },
  { label: 'CH.04 XP',       to: '/experience' },
  { label: 'CH.05 PROJECTS', to: '/projects'   },
  { label: 'CH.06 SKILLS',   to: '/skills'     },
  { label: 'CH.07 CONTACT',  to: '/contact'    },
]

export default function Navbar() {
  return (
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

      {/* Links */}
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

      {/* Badge */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[9px] font-semibold tracking-widest text-[#7a4a5e]">
          OPEN TO WORK
        </span>
      </div>
    </nav>
  )
}
