import { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Timeline from './components/Timeline'
import Showcase from './components/Showcase'
import TokenVisualizer from './components/TokenVisualizer'
import Testimonials from './components/Testimonials'
import Globe from './components/Globe'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Prefers-reduced-motion support
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    document.documentElement.style.setProperty('--prm', media.matches ? '1' : '0')
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-violet-500" />
            <span className="font-extrabold tracking-tight">Peer2Learn</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#pillars" className="hover:text-white">Product</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="hover:text-white">Status</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20">Sign in</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Pillars />
      <Timeline />
      <Showcase />
      <TokenVisualizer />
      <Testimonials />
      <Globe />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
