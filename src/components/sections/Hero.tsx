'use client'
import { motion } from 'framer-motion'
import { useTyped } from '@/hooks/useTyped'
import { PERSONAL, TYPED_PHRASES } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 2 + delay, duration: 0.7 },
})

export default function Hero() {
  const typed = useTyped(TYPED_PHRASES)

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center px-6 md:px-16 pt-24 pb-12 gap-10">
      {/* Left */}
      <div className="flex-1 max-w-2xl">
        <motion.p {...fadeUp(0)} className="font-mono text-xs text-cyan-400 tracking-[3px] mb-6">
          // Hello, World 👋
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-4">
          Anuj<br />
          <span className="gradient-text">Sharma</span>
        </motion.h1>

        <motion.div {...fadeUp(0.4)} className="font-mono text-lg text-slate-500 mb-8 min-h-7">
          <span className="text-cyan-400">{typed}</span>
          <span className="animate-blink text-cyan-400">_</span>
        </motion.div>

        <motion.p {...fadeUp(0.6)} className="text-slate-400 leading-relaxed max-w-md mb-10 text-sm md:text-base">
          Transforming raw data into intelligent insights. Building end-to-end ETL pipelines, ML systems, and analytics dashboards that drive real decisions.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-3">
          <a href="#projects" className="px-6 py-3 rounded-lg font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300">
            View Projects →
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg text-sm text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/5 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
            Get in Touch
          </a>
          <a href={PERSONAL.resumeUrl} download className="px-6 py-3 rounded-lg text-sm text-purple-400 border border-purple-400/30 hover:bg-purple-400/5 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300">
            ⬇ Resume
          </a>
        </motion.div>
      </div>

      {/* Right - Orbit Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="hidden lg:flex flex-1 justify-center"
      >
        <div className="relative w-80 h-80 xl:w-96 xl:h-96">
          {/* Orbit rings */}
          {[
            { size: 'w-48 h-48', anim: 'animate-orbit-1', dot: 'bg-cyan-400 shadow-[0_0_10px_#00f5ff]' },
            { size: 'w-72 h-72', anim: 'animate-orbit-2', dot: 'bg-purple-400 shadow-[0_0_10px_#a855f7]' },
            { size: 'w-80 h-80 xl:w-96 xl:h-96', anim: 'animate-orbit-3', dot: 'bg-blue-400 shadow-[0_0_10px_#4f8fff]' },
          ].map((ring, i) => (
            <div key={i} className={`absolute top-1/2 left-1/2 ${ring.size} ${ring.anim} rounded-full border border-cyan-400/10`}>
              <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${ring.dot}`} />
            </div>
          ))}

          {/* Center badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full glass flex items-center justify-center text-4xl">
            🧠
          </div>

          {/* Floating tech icons */}
          {[
            { label: 'Python 🐍', cls: 'top-[8%] -left-[12%] animate-float' },
            { label: 'SQL 📊', cls: 'top-[18%] -right-[16%] animate-float-2' },
            { label: 'Power BI 📈', cls: 'bottom-[14%] -left-[6%] animate-float-3' },
            { label: 'GCP ☁️', cls: 'bottom-[24%] -right-[12%] animate-float-4' },
          ].map((icon, i) => (
            <div key={i} className={`absolute glass rounded-xl px-3 py-2 font-mono text-xs text-cyan-400 whitespace-nowrap ${icon.cls}`}>
              {icon.label}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
