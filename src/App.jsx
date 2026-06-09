import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import About      from './pages/About'
import Awards     from './pages/Awards'
import Experience from './pages/Experience'
import Projects   from './pages/Projects'
import Skills     from './pages/Skills'
import Contact    from './pages/Contact'

const PAGE_VARIANTS = {
  initial:    { opacity: 0, y: 16  },
  animate:    { opacity: 1, y: 0   },
  exit:       { opacity: 0, y: -16 },
}

function Layout() {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen">
      <Cursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={PAGE_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"           element={<Home />}       />
        <Route path="/about"      element={<About />}      />
        <Route path="/awards"     element={<Awards />}     />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects"   element={<Projects />}   />
        <Route path="/skills"     element={<Skills />}     />
        <Route path="/contact"    element={<Contact />}    />
      </Route>
    </Routes>
  )
}
