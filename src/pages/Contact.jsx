import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import kimetsuImg from '../assets/kimetsu.png'

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

const CONTACT_LINKS = [
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/Listich',
    href: 'https://github.com/Listich',
  },
  {
    icon: '◈',
    label: 'Site',
    value: 'listich.fr',
    href: 'https://listich.fr',
  },
  {
    icon: '✉',
    label: 'Email',
    value: 'serena.kifoula@epitech.eu',
    href: 'mailto:serena.kifoula@epitech.eu',
  },
  {
    icon: '◎',
    label: 'Lieu',
    value: 'Toulouse, France',
    href: null,
  },
]

const INPUT_STYLE = {
  background: 'rgba(244,167,194,0.06)',
  border: '1px solid rgba(194,81,122,0.22)',
  color: '#1a0a10',
  borderRadius: '4px',
  outline: 'none',
  width: '100%',
  fontSize: '14px',
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[9px] font-bold tracking-[0.25em] uppercase"
        style={{ color: '#7a4a5e' }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  return (
    <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto" style={{ color: '#1a0a10' }}>
      <FadeIn>
        <SectionHeader chapter="CH.06" title="Me " titleEm="contacter" jp="連絡先" />
      </FadeIn>

      <div className="contact-split grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-2">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">

          {/* Quote */}
          <FadeIn delay={0.08}>
            <blockquote
              className="pl-5 py-1 leading-relaxed"
              style={{
                borderLeft: '2px solid #c2517a',
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#7a4a5e',
              }}
            >
              "Construire ce qu'on aurait voulu que quelqu'un d'autre ait déjà créé."
            </blockquote>
          </FadeIn>

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link, i) => {
              const Tag = link.href ? 'a' : 'div'
              const extra = link.href
                ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <FadeIn key={link.label} delay={0.12 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <Tag
                      {...extra}
                      className="flex items-center gap-4 p-3 rounded group transition-all duration-200 no-underline"
                      style={{
                        border: '0.5px solid rgba(194,81,122,0.15)',
                        background: 'rgba(244,167,194,0.04)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(194,81,122,0.5)'
                        e.currentTarget.style.background = 'rgba(194,81,122,0.05)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(194,81,122,0.15)'
                        e.currentTarget.style.background = 'rgba(244,167,194,0.04)'
                      }}
                    >
                      {/* Round icon */}
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm"
                        style={{
                          background: 'rgba(194,81,122,0.1)',
                          border: '1px solid rgba(194,81,122,0.25)',
                          color: '#c2517a',
                        }}
                      >
                        {link.icon}
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span
                          className="text-[8px] font-bold tracking-widest uppercase"
                          style={{ color: '#7a4a5e' }}
                        >
                          {link.label}
                        </span>
                        <span
                          className="text-sm truncate"
                          style={{ color: '#1a0a10' }}
                        >
                          {link.value}
                        </span>
                      </div>
                    </Tag>
                  </motion.div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* ── Right column — Form ── */}
        <FadeIn delay={0.15}>
          <form
            className="flex flex-col gap-5"
            onSubmit={e => e.preventDefault()}
          >
            <Field label="Nom">
              <input
                type="text"
                placeholder="Votre nom"
                className="px-4 py-2.5 transition-shadow duration-200"
                style={INPUT_STYLE}
                onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194,81,122,0.3)')}
                onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                placeholder="votre@email.com"
                className="px-4 py-2.5 transition-shadow duration-200"
                style={INPUT_STYLE}
                onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194,81,122,0.3)')}
                onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
              />
            </Field>

            <Field label="Message">
              <textarea
                rows={6}
                placeholder="Votre message…"
                className="px-4 py-2.5 resize-none transition-shadow duration-200"
                style={{ ...INPUT_STYLE, lineHeight: '1.6' }}
                onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194,81,122,0.3)')}
                onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
              />
            </Field>

            <motion.button
              type="submit"
              className="self-start px-8 py-2.5 text-[10px] font-bold tracking-widest rounded"
              style={{ background: '#c2517a', color: '#fff' }}
              whileHover={{ background: '#a83f64' }}
              transition={{ duration: 0.15 }}
            >
              ENVOYER →
            </motion.button>
          </form>
        </FadeIn>

      </div>

      {/* Personnages Demon Slayer — glissent depuis la droite */}
      <motion.img
        src={kimetsuImg}
        alt=""
        className="contact-deco"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 0.92 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          right: 0,
          bottom: '80px',
          width: '240px',
          objectFit: 'contain',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
