import { motion, useScroll, useTransform } from 'framer-motion'
import { Coins } from 'lucide-react'
import { useRef } from 'react'

export default function TokenVisualizer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const donut = useTransform(scrollYProgress, [0, 1], [1, 0])
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_20%_20%,rgba(52,211,153,0.12),transparent),radial-gradient(600px_280px_at_80%_60%,rgba(139,92,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Token Economy Visualizer</h3>
            <p className="mt-2 text-white/70">See how tokens flow between teaching and learning. Earn bonuses and share rewards with friends.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Teach 5 sessions → unlock bonus tokens',
                'Refer friends → share rewards',
              ].map((t, i) => (
                <div key={i} className="rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 text-white/90">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Donut morph to line */}
            <motion.div style={{ opacity: donut }} className="relative h-64 w-64 mx-auto">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <linearGradient id="vt" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" stroke="url(#vt)" strokeWidth="24" fill="none" strokeDasharray="440" strokeDashoffset="120" strokeLinecap="round" />
                <circle cx="100" cy="100" r="40" fill="rgba(15,23,42,0.8)" />
              </svg>
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} className="absolute -right-2 -top-2 p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <Coins className="text-lime-300" />
              </motion.div>
            </motion.div>

            <motion.div style={{ opacity: line }} className="relative h-64">
              <svg viewBox="0 0 400 220" className="h-full w-full">
                <defs>
                  <linearGradient id="lv" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <motion.path d="M10 180 C 80 120, 140 160, 210 100 S 340 40, 390 120" fill="none" stroke="url(#lv)" strokeWidth="6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
