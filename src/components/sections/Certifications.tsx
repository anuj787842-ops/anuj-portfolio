'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { CERTIFICATIONS } from '@/lib/data'

export default function Certifications() {
  return (
    <section id="certs" className="relative z-10 px-6 md:px-16 py-24 bg-[#0a0f1e]">
      <SectionHeader tag="06 // Certifications" title="Credentials &" highlight="Badges" />
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group hover:-translate-y-1 hover:border-cyan-400/20 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-3xl mb-4">{cert.icon}</p>
            <h3 className="text-sm font-semibold text-slate-100 leading-snug mb-2">{cert.title}</h3>
            <p className="font-mono text-xs text-cyan-400 mb-1">{cert.issuer}</p>
            <p className="text-xs text-slate-500 mb-3">{cert.date}</p>
            {cert.id && <p className="font-mono text-[10px] text-slate-600">{cert.id}</p>}
            <span className="inline-block mt-3 font-mono text-[10px] px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">✓ Verified</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
