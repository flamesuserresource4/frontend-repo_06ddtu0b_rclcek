import { motion } from 'framer-motion'

const tiers = [
  { name: 'Community', price: 0, features: ['Live sessions', 'Basic matching', '100 starter tokens'], highlight: true },
  { name: 'Pro Learner', price: 12, features: ['Priority booking', 'Advanced tools', 'Token boosts'] },
  { name: 'Master Tutor', price: 24, features: ['Featured profile', 'Higher token rates', 'Insights dashboard'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <h3 className="text-3xl font-extrabold text-white text-center mb-10">Getting Started</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 140, damping: 18, delay: i * 0.05 }} className={`relative rounded-2xl p-6 backdrop-blur-xl border border-white/20 ${t.highlight ? 'bg-gradient-to-br from-teal-400/10 via-violet-400/10 to-lime-300/10' : 'bg-white/10'}`}>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-white">{t.name}</h4>
                {t.highlight && (
                  <span className="px-2 py-1 rounded bg-black/40 text-lime-300 text-xs border border-white/10">100 starter tokens</span>
                )}
              </div>
              <div className="mt-4 text-4xl font-extrabold text-white">{t.price === 0 ? 'Free' : `$${t.price}`}</div>
              <ul className="mt-4 space-y-2 text-white/80">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-300 text-slate-900 font-semibold shadow-lg">
                Choose {t.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
