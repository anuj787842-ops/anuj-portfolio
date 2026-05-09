'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import { PERSONAL } from '@/lib/data'

const STATS = [
  { icon: '📦', value: '3+', label: 'Public Repos' },
  { icon: '⭐', value: 'Active', label: 'Contributions' },
  { icon: '🐍', value: 'Python', label: 'Top Language' },
  { icon: '🔀', value: 'Git', label: 'Version Control' },
]

export default function GitHub() {
  const u = PERSONAL.githubUser
  const theme = 'transparent&hide_border=true&title_color=00f5ff&icon_color=a855f7&text_color=e2e8f0&bg_color=0a0f1e'

  return (
    <section id="github" className="relative z-10 px-6 md:px-16 py-24 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      <SectionHeader tag="05 // GitHub" title="Open" highlight="Source" />

      <div className="max-w-4xl mx-auto">
        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center border border-white/[0.08] hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300">
              <p className="text-2xl mb-2">{s.icon}</p>
              <p className="text-xl font-bold gradient-text-cp">{s.value}</p>
              <p className="font-mono text-xs text-slate-500 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="text-center mt-8">
          <a href={PERSONAL.github} target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400/30 rounded-xl text-sm font-mono text-cyan-400 hover:bg-cyan-400/5 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
            View All Repositories →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
