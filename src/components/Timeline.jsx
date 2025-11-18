import { motion } from 'framer-motion'
import { UserCircle2, CalendarRange, Wallet2, Share2 } from 'lucide-react'

const steps = [
  { title: 'Create Profile', desc: 'Showcase your skills and goals', icon: UserCircle2 },
  { title: 'Teach & Earn', desc: 'Host sessions and earn tokens', icon: CalendarRange },
  { title: 'Learn & Spend', desc: 'Book sessions to grow skills', icon: Wallet2 },
  { title: 'Grow Your Network', desc: 'Meet peers worldwide', icon: Share2 },
]

export default function Timeline() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="hidden md:grid grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              <div className="h-24">
                <div className="inline-flex p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl">
                  <s.icon className="text-lime-300" />
                </div>
              </div>
              <h4 className="text-white font-semibold">{s.title}</h4>
              <p className="text-white/70 text-sm">{s.desc}</p>
              {i !== steps.length - 1 && (
                <motion.div className="absolute top-10 right-[-18px] left-auto h-[2px] w-full translate-x-1/2 bg-gradient-to-r from-teal-400/50 via-violet-400/50 to-lime-300/50" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex p-3 rounded-xl bg-white/10 border border-white/20">
                  <s.icon className="text-lime-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{s.title}</h4>
                  <p className="text-white/70 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
