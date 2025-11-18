import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Book, Laptop, Coins, Video, Users } from 'lucide-react'

const words = [
  'Learn Together.',
  'Teach Anywhere.',
  'Grow Faster.',
]

function OrbitingIcon({ Icon, radius = 140, delay = 0, size = 18 }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: size, height: size }}
      initial={{ rotate: 0 }}
      animate={prefersReducedMotion ? {} : { rotate: 360 }}
      transition={{ duration: 18, ease: 'linear', repeat: Infinity, delay }}
    >
      <div
        className="absolute"
        style={{ transform: `translate(${radius}px, -50%)` }}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-teal-500/10">
          <Icon className="text-lime-300" size={size} />
        </div>
      </div>
    </motion.div>
  )
}

function Particle({ delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.span
      className="absolute rounded-full bg-gradient-to-tr from-teal-300/40 to-violet-400/40 blur-[2px]"
      style={{ width: 6, height: 6 }}
      initial={{ x: Math.random() * 800 - 400, y: 200 + Math.random() * 160, opacity: 0 }}
      animate={prefersReducedMotion ? {} : { y: -220, opacity: [0, 1, 0] }}
      transition={{ duration: 6 + Math.random() * 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])

  const particles = useMemo(() => new Array(32).fill(0).map((_, i) => (
    <Particle key={i} delay={i * 0.25} />
  )), [])

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(45,212,191,0.25),transparent),radial-gradient(1000px_600px_at_80%_30%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_60%_80%,rgba(190,242,100,0.2),transparent)]" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      {/* Particle trails */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs text-white shadow-lg shadow-teal-500/10">
                <span className="inline-flex h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
                100 free tokens for new members
              </div>
            </motion.div>

            <div className="h-10" />

            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={i === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                    style={{ position: i === index ? 'relative' : 'absolute' }}
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>
              <motion.span
                aria-hidden
                className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-teal-400/20 via-violet-500/20 to-lime-300/20 blur-2xl rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
            </div>

            <div className="mt-6 max-w-xl text-lg text-teal-100/90">
              Earn tokens tutoring peers, spend them unlocking skills worldwide.
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-300 text-slate-900 font-semibold shadow-lg shadow-teal-500/30">
                Join as Learner
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#pricing" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-md shadow-lg hover:bg-white/20">
                Start Tutoring
              </motion.a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
              <div className="flex -space-x-2">
                {[0,1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-white/20 bg-gradient-to-br from-violet-400 to-teal-400" />
                ))}
              </div>
              <span>Trusted by 5,000+ learners worldwide</span>
            </div>
          </div>

          {/* Illustration side */}
          <div className="relative h-[520px] md:h-[620px]">
            {/* Orbiting icons */}
            <OrbitingIcon Icon={Book} radius={150} delay={0} />
            <OrbitingIcon Icon={Laptop} radius={200} delay={3} />
            <OrbitingIcon Icon={Coins} radius={250} delay={6} />

            {/* Floating UI panels */}
            <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }} className="absolute left-6 right-6 top-10 mx-auto max-w-md rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500" />
                  <div className="text-white/90 text-sm">
                    <div className="font-semibold">Chemistry Workshop</div>
                    <div className="text-white/60">Live • 24 learners</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 text-xs rounded bg-black/40 text-lime-300 border border-white/10">+12 tokens</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-white/10" />
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.5 }} className="absolute right-4 top-2/3 w-56 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center">
                  <Video className="text-slate-900" size={20} />
                </div>
                <div className="text-white text-sm">
                  <div className="font-semibold">Whiteboard</div>
                  <div className="text-white/70 text-xs">Live cursors enabled</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.8 }} className="absolute left-2 top-1/2 w-48 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center">
                  <Users className="text-slate-900" size={20} />
                </div>
                <div className="text-white text-sm">
                  <div className="font-semibold">Peers matched</div>
                  <div className="text-white/70 text-xs">+8 online</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* gradient vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
    </section>
  )
}
