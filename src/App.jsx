import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Writing from './sections/Writing'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
