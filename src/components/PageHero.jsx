import bgImg from '../assets/bg.jpg'

export default function PageHero({ chapter, chapterTitle, breadcrumb, jp, title, desc }) {
  return (
    <div style={{
      position: 'relative',
      height: '45vh',
      minHeight: '280px',
      overflow: 'hidden',
      marginTop: '64px',
    }}>
      {/* Fond bg.jpg */}
      <img
        src={bgImg}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          opacity: 0.35,
        }}
      />

      {/* Overlay sombre */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(26,10,16,0.85) 0%, rgba(90,30,55,0.7) 100%)',
      }} />

      {/* Diagonale blanche en bas */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '80px',
        background: '#fdf6f9',
        clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)',
      }} />

      {/* Indicateur CHAPTER haut droite */}
      <div style={{
        position: 'absolute', top: '24px', right: '2.5rem',
        textAlign: 'right', zIndex: 3,
      }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', letterSpacing: '4px', color: '#f4a7c0', opacity: 0.7 }}>
          CHAPTER
        </div>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '64px', fontWeight: 800, color: 'white', opacity: 0.15, lineHeight: 1 }}>
          {chapter}
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', fontStyle: 'italic', color: '#f4a7c0', opacity: 0.5 }}>
          {chapterTitle}
        </div>
      </div>

      {/* Contenu */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex',
        flexDirection: 'column', justifyContent: 'center',
        padding: '0 8vw',
      }}>
        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '9px',
          letterSpacing: '3px', color: '#f4a7c0',
          marginBottom: '8px', textTransform: 'uppercase',
        }}>
          {breadcrumb}
        </div>

        <div style={{
          fontFamily: '"Noto Serif JP", serif', fontSize: '12px',
          letterSpacing: '4px', color: '#f4a7c0',
          opacity: 0.8, marginBottom: '6px',
        }}>
          {jp}
        </div>

        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(60px, 9vw, 110px)',
          fontWeight: 800, lineHeight: 0.9,
          color: 'white',
          letterSpacing: '-2px',
          marginBottom: '16px',
          textShadow: '0 2px 20px rgba(0,0,0,0.3)',
        }}>
          {title}
        </h1>

        {desc && (
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '12px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '500px', lineHeight: 1.7,
            letterSpacing: '0.5px',
            margin: 0,
          }}>
            {desc}
          </p>
        )}
      </div>
    </div>
  )
}
