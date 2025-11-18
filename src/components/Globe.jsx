import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Globe() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
    }
    resize()

    const arcs = new Array(40).fill(0).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      p: Math.random(),
    }))

    const render = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      // globe circle
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      const r = Math.min(w, h) / 2 - 10
      ctx.translate(w / 2, h / 2)

      const gradient = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r)
      gradient.addColorStop(0, 'rgba(45,212,191,0.2)')
      gradient.addColorStop(1, 'rgba(139,92,246,0.2)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, r, 0, Math.PI * 2)
      ctx.fill()

      // arcs
      ctx.strokeStyle = 'rgba(255,255,255,0.35)'
      ctx.lineWidth = 1.6
      arcs.forEach((a, i) => {
        const ang1 = (a.x * 2 + (t * 0.0002)) * Math.PI
        const ang2 = (a.y * 2 - (t * 0.0003)) * Math.PI
        const r1 = r * (0.5 + 0.5 * Math.sin(a.p * Math.PI))
        const r2 = r * (0.5 + 0.5 * Math.cos(a.p * Math.PI))
        const x1 = Math.cos(ang1) * r1
        const y1 = Math.sin(ang1) * r1
        const x2 = Math.cos(ang2) * r2
        const y2 = Math.sin(ang2) * r2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.quadraticCurveTo(0, 0, x2, y2)
        ctx.stroke()
      })

      ctx.restore()
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-xl">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Join thousands of learners exchanging knowledge every day.</h3>
            <p className="mt-2 text-white/70">Global connections, local impact. See knowledge flow across the world in real-time.</p>
            <div className="mt-6 flex gap-6 text-white">
              <Counter label="Countries" target={72} />
              <Counter label="Sessions hosted" target={1284} />
              <Counter label="Tokens exchanged" target={54012} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({ label, target }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <motion.div initial={{ textContent: 0 }} whileInView={{ textContent: target }} transition={{ duration: 1.6, ease: 'easeOut' }} className="text-3xl font-extrabold">
        {target.toLocaleString()}
      </motion.div>
      <div className="text-white/70 text-sm">{label}</div>
    </motion.div>
  )
}
