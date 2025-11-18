import { motion } from 'framer-motion'

const quotes = [
  { name: 'Aisha — Student', text: 'I learned Python in weeks by tutoring math. The token system keeps me motivated.' },
  { name: 'Marco — Designer', text: 'Pair sessions feel natural and fun. Sharing skills has never felt this rewarding.' },
  { name: 'Lin — Engineer', text: 'Taught 10 sessions and booked a pro mentor with my tokens. Love the community.' },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">What the community says</h3>
          <div className="space-y-4">
            {quotes.map((q, i) => (
              <motion.blockquote key={q.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6 text-white/90">
                <span className="absolute -top-4 left-6 text-5xl text-violet-300/50">“</span>
                <p className="relative z-10">{q.text}</p>
                <footer className="mt-3 text-white/70 text-sm">{q.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[0,1].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative aspect-video rounded-2xl overflow-hidden bg-slate-900/60 border border-white/20">
              <video className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="/video-placeholder.mp4" muted loop playsInline autoPlay />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
