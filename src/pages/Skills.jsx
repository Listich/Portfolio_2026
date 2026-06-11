import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { skills } from '../data/content'

const SECTIONS = [
  {
    num:   '#01 / LANGUAGES',
    title: 'LANGUAGES',
    jp:    '言語',
    right: '3 LANGAGES',
    color: '#c2517a',
    bg:    '#fdf6f9',
    border: 'rgba(194,81,122,0.12)',
    items: skills.langages,
  },
  {
    num:   '#02 / FRONTEND',
    title: 'FRONTEND',
    jp:    'フロントエンド',
    right: '5 OUTILS',
    color: '#8b5cf6',
    bg:    '#fff0f5',
    border: 'rgba(139,92,246,0.12)',
    items: skills.frontend,
  },
  {
    num:   '#03 / BACKEND',
    title: 'BACKEND',
    jp:    'バックエンド',
    right: '5 OUTILS',
    color: '#d4a843',
    bg:    '#fdf6f9',
    border: 'rgba(212,168,67,0.15)',
    items: skills.backend,
  },
  {
    num:   '#04 / OUTILS',
    title: 'TOOLS',
    jp:    'ツール',
    right: '7 OUTILS',
    color: '#5a8a4a',
    bg:    '#fff0f5',
    border: 'rgba(90,138,74,0.15)',
    items: skills.outils,
  },
]

const LEVEL_CONFIG = {
  avancé:        (color) => ({ label: 'AVANCÉ',        bg: color,         text: 'white',    border: 'none' }),
  intermédiaire: (color) => ({ label: 'INTERMÉDIAIRE', bg: 'transparent', text: color,      border: `1px solid ${color}66` }),
  notions:       ()      => ({ label: 'EN COURS',       bg: 'transparent', text: '#5a8a4a',  border: '1px solid rgba(90,138,74,0.4)' }),
}

function SkillRow({ skill, color }) {
  const cfg = (LEVEL_CONFIG[skill.level] ?? LEVEL_CONFIG.notions)(color)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '0.5px solid rgba(194,81,122,0.08)',
    }}>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '13px',
        color: '#1a0a10',
        letterSpacing: '0.5px',
      }}>
        {skill.name}
      </span>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '8px',
        fontWeight: 700,
        letterSpacing: '1.5px',
        padding: '3px 10px',
        borderRadius: 2,
        background: cfg.bg,
        color: cfg.text,
        border: cfg.border,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        {cfg.label}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <PageHero
        chapter="05"
        chapterTitle='"SKILL TREE"'
        breadcrumb="LISTICH.FR / CH.05 / SKILL TREE"
        jp="スキルツリー"
        title="COMPÉTENCES"
        desc="Langages, frameworks, outils et environnements maîtrisés."
      />

      {SECTIONS.map(section => (
        <section
          key={section.num}
          style={{ background: section.bg, borderTop: `0.5px solid ${section.border}` }}
        >
          <div className="max-w-5xl mx-auto px-8 md:px-16 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              {/* Section head */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '3px',
                    color: section.color,
                    whiteSpace: 'nowrap',
                  }}>
                    {section.num}
                  </span>
                  <div style={{ flex: 1, height: '0.5px', background: `${section.color}33` }} />
                  <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 11, color: section.color }}>
                    {section.jp}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
                  <h2 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(60px, 8vw, 90px)',
                    fontWeight: 700,
                    color: '#1a0a10',
                    lineHeight: 0.88,
                    margin: 0,
                  }}>
                    {section.title}
                  </h2>
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 9,
                    color: '#7a4a5e',
                    letterSpacing: '2px',
                    paddingBottom: '0.5rem',
                    flexShrink: 0,
                  }}>
                    {section.right}
                  </span>
                </div>
              </div>

              {/* Skill rows */}
              <div>
                {section.items.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} color={section.color} />
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      ))}
    </>
  )
}
