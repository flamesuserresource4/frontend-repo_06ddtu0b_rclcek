import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(45,212,191,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-violet-500/20 via-teal-400/20 to-lime-300/20 border border-white/20 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-2xl font-extrabold">Ready to start your peer journey?</div>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#pricing" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg">
              Get Started
            </motion.a>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 items-center text-white/70">
          <div>Peer2Learn © {new Date().getFullYear()}</div>
          <div className="flex justify-center gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="text-right text-sm">Privacy • Terms • Contact</div>
        </div>
      </div>
    </footer>
  )
}
