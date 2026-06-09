import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import PageHero from '../components/PageHero'
import { experiences } from '../data/content'

const PREVIEW = 3

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function BulletList({ bullets }) {
  const [open, setOpen] = useState(false)
  const hasMore = bullets.length > PREVIEW
  const visible = open ? bullets : bullets.slice(0, PREVIEW)

  return (
    <div>
      <ul className="flex flex-col gap-1.5 mt-0.5">
        {visible.map(b => (
          <li key={b} className="flex gap-2 text-sm leading-snug">
            <span className="mt-0.5 shrink-0" style={{ color: '#c2517a' }}>›</span>
            <span style={{ color: '#1a0a10' }}>{b}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'DM Mono, monospace',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: '#c2517a',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            opacity: 0.75,
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}
        >
          <span style={{
            display: 'inline-block',
            transition: 'transform 0.25s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}>
            ↓
          </span>
          {open ? 'RÉDUIRE' : `VOIR LA SUITE (${bullets.length - PREVIEW})`}
        </button>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <PageHero
        chapter="03"
        chapterTitle='"TRACK RECORD"'
        breadcrumb="LISTICH.FR / CH.03 / TRACK RECORD"
        jp="職歴"
        title="EXPÉRIENCE"
        desc="Stages, projets et expériences professionnelles."
      />
      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto" style={{ color: '#1a0a10' }}>
      <FadeIn>
        <SectionHeader chapter="CH.03" title="Expériences " titleEm="pro" jp="職歴" />
      </FadeIn>

      {/* Timeline */}
      <div className="relative mt-4">
        {/* Vertical rose line */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '9px',
            width: '1px',
            background: 'rgba(194,81,122,0.22)',
          }}
        />

        <div className="flex flex-col gap-12 pl-10">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.title} delay={i * 0.12} className="relative">

              {/* Dot on the line */}
              <div
                className="absolute rounded-full"
                style={{
                  left: '-30px',
                  top: '4px',
                  width: '11px',
                  height: '11px',
                  background: '#c2517a',
                  border: '2px solid #fdf6f9',
                  boxShadow: '0 0 0 1.5px rgba(194,81,122,0.4)',
                }}
              />

              <div className="flex flex-col gap-2.5">
                {/* Date */}
                <span
                  className="text-[9px] font-bold tracking-[0.28em] uppercase"
                  style={{ color: '#c2517a' }}
                >
                  {exp.date}
                </span>

                {/* Title */}
                <p className="text-lg font-bold leading-snug" style={{ color: '#1a0a10' }}>
                  {exp.title}
                </p>

                {/* Company */}
                <p
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ color: '#8b5cf6' }}
                >
                  {exp.company}
                </p>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <BulletList bullets={exp.bullets} />
                )}

                {/* Tech pills */}
                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-widest"
                        style={{
                          background: 'rgba(194,81,122,0.07)',
                          border: '0.5px solid rgba(194,81,122,0.28)',
                          color: '#c2517a',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
