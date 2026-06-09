export default function Footer() {
  return (
    <footer
      className="w-full px-8 py-4 flex items-center justify-between"
      style={{
        background: '#fff0f5',
        borderTop: '1px solid rgba(194,81,122,0.2)',
      }}
    >
      <span className="text-[9px] tracking-widest" style={{ color: '#7a4a5e' }}>
        © 2026 SERENA LISTICH
      </span>

      <span className="text-[9px] tracking-widest" style={{ color: '#7a4a5e' }}>
        THÈME NEZUKO · DEMON SLAYER
      </span>

      <a
        href="https://listich.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[9px] tracking-widest transition-colors duration-200"
        style={{ color: '#c2517a' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#7a4a5e')}
        onMouseLeave={e => (e.currentTarget.style.color = '#c2517a')}
      >
        listich.fr
      </a>
    </footer>
  )
}
