import { useEffect, useRef, useState } from 'react'

const LERP_POS  = 0.22
const LERP_SIZE = 0.20
const SIZE_REST  = 32
const SIZE_HOVER = 48

export default function Cursor() {
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  )

  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  /* Mutable refs — no re-renders needed */
  const mouse   = useRef({ x: -200, y: -200 })
  const ringPos = useRef({ x: -200, y: -200 })
  const ringSize = useRef(SIZE_REST)
  const hovered = useRef(false)
  const rafId   = useRef(null)

  useEffect(() => {
    if (isMobile) return

    /* ── Move: update target instantly, check hover ── */
    function onMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      hovered.current = !!e.target.closest('a, button')

      /* Dot is instant */
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    /* ── Hide when cursor leaves the window ── */
    function onLeave() {
      mouse.current   = { x: -200, y: -200 }
      ringPos.current = { x: -200, y: -200 }
    }

    /* ── RAF loop: lerp ring position + size ── */
    function tick() {
      const rx = ringPos.current
      const mx = mouse.current

      rx.x += (mx.x - rx.x) * LERP_POS
      rx.y += (mx.y - rx.y) * LERP_POS

      const targetSize = hovered.current ? SIZE_HOVER : SIZE_REST
      ringSize.current += (targetSize - ringSize.current) * LERP_SIZE

      if (ringRef.current) {
        const s      = ringSize.current
        const half   = s / 2
        const border = hovered.current
          ? 'rgba(194,81,122,0.82)'
          : 'rgba(194,81,122,0.5)'

        ringRef.current.style.transform =
          `translate(${rx.x - half}px, ${rx.y - half}px)`
        ringRef.current.style.width        = `${s}px`
        ringRef.current.style.height       = `${s}px`
        ringRef.current.style.borderColor  = border
      }

      rafId.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseleave', onLeave)
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* ── Dot: instant ── */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         '8px',
          height:        '8px',
          borderRadius:  '50%',
          background:    '#c2517a',
          pointerEvents: 'none',
          zIndex:        9999,
          willChange:    'transform',
          transform:     'translate(-200px, -200px)',
        }}
      />

      {/* ── Ring: lerp ── */}
      <div
        ref={ringRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         `${SIZE_REST}px`,
          height:        `${SIZE_REST}px`,
          borderRadius:  '50%',
          border:        '1px solid rgba(194,81,122,0.5)',
          pointerEvents: 'none',
          zIndex:        9998,
          willChange:    'transform',
          transform:     'translate(-200px, -200px)',
          /* Only border-color gets a CSS transition — size/pos are raw RAF */
          transition:    'border-color 0.18s ease',
        }}
      />
    </>
  )
}
