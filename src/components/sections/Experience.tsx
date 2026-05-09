'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { EXPERIENCE } from '@/lib/data'

const DOT_COLORS: Record<string, string> = {
  cyan: 'bg-cyan-400 shadow-[0_0_15px_#00f5ff]',
  purple: 'bg-purple-400 shadow-[0_0_15px_#a855f7]',
  blue: 'bg-blue-400 shadow-[0_0_15px_#4f8fff]',
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 min-h-screen px-6 md:px-16 py-24 bg-[#0a0f1e]">
      <SectionHeader tag="04 // Experience" title="My" highlight="Journey" />

      {/* Mobile: stacked, Desktop: alternating */}
      <div className="relative max-w-3xl mx-auto">
        {/* Center line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-purple-500 -translate-x-1/2" />

        {EXPERIENCE.map((exp, i) => (
          <div key={i} className={`relative mb-10 md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? '' : ''}`}>
            {/* Dot (desktop) */}
            <div className={`hidden md:block absolute left-1/2 top-6 w-3.5 h-3.5 rounded-full -translate-x-1/2 border-[3px] border-[#0a0f1e] ${DOT_COLORS[exp.color]}`} />

            {/* Card placement */}
            {i % 2 === 0 ? (
              <>
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="glass rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300 md:text-right">
                  <p className="font-mono text-xs text-cyan-400 tracking-widest mb-1">{exp.date}</p>
                  <p className="font-semibold text-slate-100 text-base">{exp.company}</p>
                  <p className="font-mono text-xs text-slate-500 mb-3">{exp.role} · {exp.location}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
                <div />
              </>
            ) : (
              <>
                <div />
                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="glass rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300">
                  <p className="font-mono text-xs text-cyan-400 tracking-widest mb-1">{exp.date}</p>
                  <p className="font-semibold text-slate-100 text-base">{exp.company}</p>
                  <p className="font-mono text-xs text-slate-500 mb-3">{exp.role} · {exp.location}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              </>
            )}

            {/* Mobile: simple stacked */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="md:hidden glass rounded-2xl p-5 border border-white/[0.08] mt-3">
              <p className="font-mono text-xs text-cyan-400 tracking-widest mb-1">{exp.date}</p>
              <p className="font-semibold text-slate-100">{exp.company}</p>
              <p className="font-mono text-xs text-slate-500 mb-2">{exp.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
