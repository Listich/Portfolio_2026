import SectionHeader from '../components/SectionHeader'
import PageHero from '../components/PageHero'

const AWARDS = [
  {
    year: '2026', org: 'APPLE', badge: 'LAURÉATE',
    title: 'Falcis — Swift Student Challenge 2026',
    desc: 'Développement solo d\'une application SwiftUI éducative dédiée à la drépanocytose, maladie génétique particulièrement répandue en Afrique subsaharienne. Conçue pour sensibiliser le grand public de manière accessible et engageante, Falcis a été sélectionnée parmi les lauréats du Swift Student Challenge 2026 organisé par Apple.',
    tags: ['Swift', 'SwiftUI', 'iOS', 'Solo', 'WWDC26', 'Santé'],
    incoming: false,
  },
  {
    year: '???', org: 'SOON', badge: 'INCOMING',
    title: 'Prochain objectif — GSoC 2027',
    desc: 'Google Summer of Code 2027. Contribution open source C++ sur des projets structurants (XML libraries, ns-3, NASA cFS). Candidature prévue début 2027.',
    tags: ['C++', 'Open Source', 'Google'],
    incoming: true,
  },
]

const UPCOMING = [
  'Google Summer of Code 2027 — contribution C++ open source',
  'Certifications à venir — AWS / Swift Certification',
  'Concours à venir — hackathons IA / systèmes embarqués',
]

function AwardCard({ card }) {
  return (
    <div
      style={{
        background: 'white',
        border: card.incoming ? '1px dashed rgba(194,81,122,0.3)' : '0.5px solid rgba(194,81,122,0.18)',
        borderLeft: '3px solid #c2517a',
        borderRadius: 4,
        padding: '1.5rem 1.75rem',
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        opacity: card.incoming ? 0.65 : 1,
        boxShadow: '0 2px 12px rgba(194,81,122,0.07)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(194,81,122,0.13)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 2px 12px rgba(194,81,122,0.07)' }}
    >
      <div style={{
        width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
        background: card.incoming ? 'rgba(194,81,122,0.08)' : 'linear-gradient(135deg, #c2517a, #a83f64)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        boxShadow: card.incoming ? 'none' : '0 4px 16px rgba(194,81,122,0.25)',
      }}>
        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontWeight: 800, color: card.incoming ? '#c2517a' : 'white', lineHeight: 1 }}>{card.year}</span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 7, letterSpacing: '1px', color: card.incoming ? '#c2517a' : 'rgba(255,255,255,0.75)', marginTop: 3 }}>{card.org}</span>
      </div>
      <div style={{ flex: 1 }}>
        <span style={{
          display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '2px',
          padding: '3px 10px', borderRadius: 2, marginBottom: 10,
          background: card.incoming ? 'transparent' : '#c2517a',
          border: card.incoming ? '1px solid #c2517a' : 'none',
          color: card.incoming ? '#c2517a' : 'white',
        }}>{card.badge}</span>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 700, color: '#1a0a10', marginBottom: 8, lineHeight: 1.2 }}>{card.title}</div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7a4a5e', lineHeight: 1.8 }}>{card.desc}</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
          {card.tags.map(t => (
            <span key={t} style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, padding: '2px 8px', border: '0.5px solid rgba(194,81,122,0.25)', borderRadius: 2, color: '#c2517a', letterSpacing: '1px' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Awards() {
  return (
    <div style={{ background: '#fdf6f9', minHeight: '100vh' }}>
      <PageHero
        chapter="03"
        chapterTitle='"TROPHY ROOM"'
        breadcrumb="LISTICH.FR / CH.03 / TROPHY ROOM"
        jp="受賞歴"
        title="AWARDS"
        desc="Distinctions et reconnaissances obtenues."
      />
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-20">

        <SectionHeader chapter="CH.03 / AWARDS" title="TROPHY" titleEm="ROOM" jp="受賞歴" />

        {/* Grille des awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {AWARDS.map((card, i) => <AwardCard key={i} card={card} />)}
        </div>

        {/* Prochains objectifs */}
        <div style={{ borderTop: '0.5px solid rgba(194,81,122,0.15)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '0.25em', color: '#c2517a' }}>PROCHAINS OBJECTIFS</span>
            <span style={{ flex: 1, height: 1, background: 'rgba(194,81,122,0.2)' }} />
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {UPCOMING.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#c2517a', flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#7a4a5e', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
