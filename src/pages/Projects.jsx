import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { projects } from '../data/content'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function SectionHead({ num, en, jp, right, color }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '3px', color, whiteSpace: 'nowrap' }}>
          {num}
        </span>
        <div style={{ flex: 1, height: '0.5px', background: `${color}33` }} />
        <span style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 11, color }}>
          {jp}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(32px, 6vw, 70px)',
          fontWeight: 700,
          color: '#1a0a10',
          lineHeight: 0.9,
          margin: 0,
        }}>
          {en}
        </h2>
        {right && (
          <span className="hidden md:block" style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#7a4a5e', letterSpacing: '2px', paddingBottom: '0.5rem', flexShrink: 0 }}>
            {right}
          </span>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, color, delay }) {
  const badgeBg    = project.award ? 'rgba(212,168,67,0.12)' : `${color}18`
  const badgeColor = project.award ? '#d4a843' : color
  const badgeBorder = project.award ? 'rgba(212,168,67,0.35)' : `${color}55`

  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: 'white',
          border: '0.5px solid rgba(194,81,122,0.15)',
          borderTop: `3px solid ${color}`,
          borderRadius: '4px',
          padding: '1.5rem',
          boxShadow: '0 2px 12px rgba(194,81,122,0.07)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          height: '100%',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = '0 10px 32px rgba(194,81,122,0.14)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(194,81,122,0.07)'
        }}
      >
        {/* Badge + ID */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: '2px',
            padding: '2px 9px',
            borderRadius: 2,
            background: badgeBg,
            color: badgeColor,
            border: `0.5px solid ${badgeBorder}`,
          }}>
            {project.badge}
          </span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#c2517a', letterSpacing: '2px', opacity: 0.6 }}>
            {project.id}
          </span>
        </div>

        {/* Title */}
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 700, color: '#1a0a10', margin: 0, lineHeight: 1.2 }}>
          {project.title}
        </p>

        {/* Context */}
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, letterSpacing: '0.5px', color, margin: 0 }}>
          {project.context}
        </p>

        {/* Description */}
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7a4a5e', margin: 0, lineHeight: 1.75, flex: 1 }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 8,
                padding: '2px 8px',
                border: `0.5px solid ${color}44`,
                borderRadius: 2,
                color,
                letterSpacing: '1px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Lien externe si présent */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, fontWeight: 700, letterSpacing: '2px', color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4 }}
            onClick={e => e.stopPropagation()}
          >
            VOIR LE SITE →
          </a>
        )}
      </div>
    </FadeIn>
  )
}

export default function Projects() {
  const { professionnel, ecole, personnel } = projects

  return (
    <>
      <PageHero
        chapter="04"
        chapterTitle='"SELECTED WORKS"'
        breadcrumb="LISTICH.FR / CH.04 / SELECTED WORKS"
        jp="制作実績"
        title="PROJETS"
        desc="Applications mobiles, frameworks C++, outils et expériences web."
      />

      {/* ─── SECTION 1 — PROFESSIONNEL ─── */}
      <section style={{ background: '#fdf6f9', borderTop: '0.5px solid rgba(194,81,122,0.12)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-16 py-12 md:py-20">
          <FadeIn>
            <SectionHead
              num="#01 / PROFESSIONNEL"
              en="PROFESSIONAL"
              jp="業務"
              right="STAGES & FREELANCE"
              color="#c2517a"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {professionnel.map((p, i) => (
              <ProjectCard key={p.id} project={p} color="#c2517a" delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 — ÉCOLE ─── */}
      <section style={{ background: '#fff0f5', borderTop: '0.5px solid rgba(139,92,246,0.12)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-16 py-12 md:py-20">
          <FadeIn>
            <SectionHead
              num="#02 / ÉCOLE"
              en="SCHOOL"
              jp="学校"
              right="PROJETS EPITECH"
              color="#8b5cf6"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ecole.map((p, i) => (
              <ProjectCard key={p.id} project={p} color="#8b5cf6" delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 — PERSONNEL ─── */}
      <section style={{ background: '#fdf6f9', borderTop: '0.5px solid rgba(212,168,67,0.18)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-16 py-12 md:py-20">
          <FadeIn>
            <SectionHead
              num="#03 / PERSONNEL"
              en="PERSONAL"
              jp="個人"
              right="PROJETS SOLO"
              color="#d4a843"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personnel.map((p, i) => (
              <ProjectCard key={p.id} project={p} color="#d4a843" delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
