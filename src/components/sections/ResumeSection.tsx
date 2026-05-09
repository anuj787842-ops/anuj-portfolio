'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { PERSONAL } from '@/lib/data'

export default function ResumeSection() {
  return (
    <section id="resume" className="relative z-10 px-6 md:px-16 py-16 bg-gradient-to-br from-cyan-400/5 to-purple-500/5">
      <SectionHeader tag="07 // Resume" title="My" highlight="Resume" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-lg mx-auto glass rounded-3xl p-8 md:p-10 border border-white/[0.08] text-center">
        <p className="text-5xl mb-5">📄</p>
        <h3 className="text-xl font-bold mb-3">Anuj Sharma — Data Analyst</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Covers Python, SQL, Power BI, GCP, internship experience, ML projects, and certifications. One-page, ATS-optimized.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={PERSONAL.resumeUrl} download
            className="px-6 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300">
            ⬇ Download Resume
          </a>
          <a href={PERSONAL.resumeUrl} target="_blank"
            className="px-6 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/5 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
            👁 View Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
