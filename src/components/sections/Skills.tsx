'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { SKILLS, EXTRA_TAGS } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 min-h-screen px-6 md:px-16 py-24 bg-[#0a0f1e]">
      <SectionHeader tag="02 // Skills" title="Technical" highlight="Arsenal" />
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {SKILLS.map((cat, ci) => (
          <SkillCard key={ci} category={cat.category} items={cat.items} delay={ci * 0.15} />
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-2 mt-10 max-w-4xl mx-auto">
        {EXTRA_TAGS.map(tag => (
          <span key={tag} className="font-mono text-xs px-3 py-1 rounded-lg bg-cyan-400/5 border border-cyan-400/15 text-cyan-400">{tag}</span>
        ))}
      </motion.div>
    </section>
  )
}

function SkillCard({ category, items, delay }: { category: string; items: { name: string; pct: number }[]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }}
      className="glass rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
      <p className="font-mono text-xs text-cyan-400 tracking-widest mb-5 flex items-center gap-2">
        <span className="w-4 h-px bg-cyan-400 inline-block" />{category}
      </p>
      {items.map((item, i) => (
        <div key={i} className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-200">{item.name}</span>
            <span className="font-mono text-xs text-cyan-400">{item.pct}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="skill-bar-fill" style={{ width: inView ? `${item.pct}%` : '0%' }} />
          </div>
        </div>
      ))}
    </motion.div>
  )
}
