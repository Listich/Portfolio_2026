import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const pages = {
  '/':           { num: '01', text: 'HOME',         jp: 'ホーム'    },
  '/about':      { num: '02', text: 'ABOUT',        jp: '人物紹介'  },
  '/awards':     { num: '03', text: 'AWARDS',       jp: '受賞歴'    },
  '/experience': { num: '04', text: 'TRACK RECORD', jp: '職歴'      },
  '/projects':   { num: '05', text: 'WORKS',        jp: '制作実績'  },
  '/skills':     { num: '06', text: 'SKILLS',       jp: 'スキル'    },
  '/contact':    { num: '07', text: 'CONTACT',      jp: '連絡先'    },
  '/blog':       { num: '08', text: 'BLOG',         jp: '日記'      },
}

export default function PageTransition() {
  const location = useLocation()
  const [show, setShow] = useState(false)
  const [page, setPage] = useState(pages['/'])

  useEffect(() => {
    const p = pages[location.pathname] || pages['/']
    setPage(p)
    setShow(true)
    const timer = setTimeout(() => setShow(false), 1000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'linear-gradient(135deg, #1a0a10 0%, #5c2d42 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            position: 'absolute',
            fontFamily: 'Noto Serif JP',
            fontSize: '30vw', fontWeight: 700,
            color: 'rgba(244,167,194,0.04)',
            lineHeight: 1, userSelect: 'none',
          }}>{page.jp}</div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            style={{
              fontFamily: 'DM Mono', fontSize: '11px',
              letterSpacing: '4px', color: '#f4a7c0',
              marginBottom: '8px',
            }}
          >CH.{page.num}</motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 800, color: 'white',
              letterSpacing: '-1px', lineHeight: 1,
            }}
          >{page.text}</motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            style={{
              fontFamily: 'Noto Serif JP', fontSize: '13px',
              letterSpacing: '4px', color: 'rgba(244,167,194,0.6)',
              marginTop: '10px',
            }}
          >{page.jp}</motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              height: '1px', background: '#c2517a',
              marginTop: '24px',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
