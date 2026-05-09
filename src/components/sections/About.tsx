'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { PERSONAL, STATS } from '@/lib/data'

const INFO = [
  { title: '// Current Focus', content: 'Data Engineering · Analytics · MLOps · Cloud (GCP)' },
  { title: '// Education', content: 'B.Tech CSE – AI & Data Science\nPoornima University, Jaipur (2022–2026)' },
  { title: '// Location', content: '📍 Jaipur, Rajasthan, India\nOpen to Remote & Relocation' },
  { title: '// Status', content: '🟢 Available for Opportunities', green: true },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen px-6 md:px-16 py-24 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <SectionHeader tag="01 // About" title="Who" highlight="Am I?" />
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {PERSONAL.bio.map((p, i) => (
            <p key={i} className="text-slate-400 leading-relaxed mb-5 text-sm md:text-base">{p}</p>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-4 text-center hover:-translate-y-1 hover:border-cyan-400/30 transition-all duration-300 border border-white/[0.08]">
                <p className="text-2xl font-bold gradient-text-cp">{s.value}</p>
                <p className="font-mono text-xs text-slate-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info cards */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-3">
          {INFO.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-400/20 hover:bg-white/[0.06] transition-all duration-300">
              <p className="font-mono text-xs text-cyan-400 tracking-widest mb-2">{card.title}</p>
              <p className={`text-sm leading-relaxed whitespace-pre-line ${card.green ? 'text-green-400' : 'text-slate-200'}`}>{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
