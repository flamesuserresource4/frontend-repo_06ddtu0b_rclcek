import { motion } from 'framer-motion'

const sessions = [
  { title: 'Chemistry Workshop', status: 'Live Now', color: 'from-fuchsia-400 to-violet-500' },
  { title: 'Intro to Python', status: 'Starting Soon', color: 'from-teal-400 to-emerald-400' },
  { title: 'UX Design Crit', status: 'Live Now', color: 'from-lime-300 to-teal-300' },
]

export default function Showcase() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Live Community Showcase</h3>
          <div className="text-white/60 text-sm">Top tutors this week • +2,340 tokens</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 overflow-hidden">
              <div className={`absolute -inset-20 bg-gradient-to-br ${s.color} opacity-20 blur-3xl`} />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{s.title}</div>
                  <div className="text-white/70 text-sm">12 participants</div>
                </div>
                <div className="px-2 py-1 rounded bg-black/40 text-white/90 text-xs border border-white/10">{s.status}</div>
              </div>
              <div className="mt-4">
                <div className="h-24 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 relative overflow-hidden">
                  {/* Audio-like waveform */}
                  <motion.svg className="absolute inset-0" viewBox="0 0 400 100" preserveAspectRatio="none" initial={{ opacity: 0.6 }} animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ repeat: Infinity, duration: 3 }}>
                    {[...Array(20)].map((_, i) => (
                      <motion.rect key={i} x={i * 20} y={30} width={10} height={40} rx={2} fill="url(#g)" animate={{ y: [20, 30, 20], height: [60, 40, 60] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.05 }} />
                    ))}
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
