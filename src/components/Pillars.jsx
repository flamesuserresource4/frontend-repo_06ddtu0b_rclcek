import { motion } from 'framer-motion'
import { Video, MousePointer2, Coins } from 'lucide-react'

const pillars = [
  {
    title: 'Live Video Sessions',
    desc: 'Crystal-clear calls with low-latency and collaborative tools built-in.',
    icon: Video,
    glow: 'from-teal-400 to-emerald-400',
  },
  {
    title: 'Real-Time Collaboration',
    desc: 'Shared whiteboards, cursors, and code editors synced instantly.',
    icon: MousePointer2,
    glow: 'from-violet-400 to-fuchsia-400',
  },
  {
    title: 'Token Marketplace',
    desc: 'Earn as you teach. Spend tokens to learn and unlock achievements.',
    icon: Coins,
    glow: 'from-lime-300 to-teal-300',
  },
]

export default function Pillars() {
  return (
    <section className="relative py-24" id="pillars">
      <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_10%_20%,rgba(20,184,166,0.12),transparent),radial-gradient(600px_280px_at_80%_40%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/30 to-white/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.glow} text-slate-900 shadow-lg`}>
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl border border-transparent"
                  whileHover={{ boxShadow: '0 0 0 2px rgba(255,255,255,0.15)', scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
