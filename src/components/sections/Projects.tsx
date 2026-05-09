'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/lib/data'

type Project = typeof PROJECTS[0]

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative z-10 min-h-screen px-6 md:px-16 py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <SectionHeader tag="03 // Projects" title="Featured" highlight="Work" />

      <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 0.1} onClick={() => setSelected(p)} />
        ))}
        {/* Coming soon */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="rounded-2xl border border-dashed border-cyan-400/15 flex items-center justify-center min-h-[250px] text-center p-8">
          <div>
            <p className="text-3xl mb-3">⚡</p>
            <p className="font-mono text-sm text-slate-500">More projects coming soon...</p>
            <a href="https://github.com/Anuj7878" target="_blank" className="font-mono text-xs text-cyan-400 mt-2 inline-block hover:opacity-70 transition-opacity">
              → github.com/Anuj7878
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, delay, onClick }: { project: Project; delay: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className={`glass rounded-2xl p-6 border border-white/[0.08] cursor-pointer group relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] ${project.featured ? 'bg-gradient-to-br from-cyan-400/5 to-purple-500/5 border-cyan-400/15' : ''}`}
    >
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <p className="font-mono text-xs text-slate-500 mb-2">// Project {project.number}{project.featured ? ' — Featured' : ''}</p>
      <h3 className="text-lg font-semibold text-slate-100 mb-3">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

      {/* Metrics */}
      <div className="flex gap-3 mb-4">
        {project.metrics.map((m, i) => (
          <div key={i} className="text-center px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="font-mono text-xs text-cyan-400 font-bold">{m.value}</p>
            <p className="font-mono text-[10px] text-slate-500 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/8 border border-blue-500/20 text-blue-400">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <a href={project.github} target="_blank" onClick={e => e.stopPropagation()}
            className="font-mono text-xs text-cyan-400 flex items-center gap-1 hover:opacity-70 transition-opacity">
            <Github size={12} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" onClick={e => e.stopPropagation()}
            className="font-mono text-xs text-cyan-400 flex items-center gap-1 hover:opacity-70 transition-opacity">
            <ExternalLink size={12} /> Live
          </a>
        )}
        <button onClick={onClick} className="ml-auto font-mono text-xs px-3 py-1 border border-cyan-400/25 rounded-md text-cyan-400 hover:bg-cyan-400/8 hover:border-cyan-400 transition-all">
          Details ↗
        </button>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-[#0a0f1e] border border-cyan-400/20 rounded-3xl p-6 md:p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 glass border border-white/[0.08] text-slate-400 hover:text-cyan-400 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
          <X size={14} />
        </button>

        <p className="font-mono text-xs text-cyan-400 tracking-widest mb-2">{`// Project ${project.number}`}</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.fullDesc}</p>

        {/* Metrics */}
        <div className="flex gap-3 mb-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="flex-1 text-center py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="font-mono text-sm text-cyan-400 font-bold">{m.value}</p>
              <p className="font-mono text-[10px] text-slate-500 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="font-mono text-xs text-cyan-400 tracking-widest mb-3">// Key Highlights</p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-slate-400 text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-cyan-400 before:text-xs">{h}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-lg bg-cyan-400/5 border border-cyan-400/15 text-cyan-400">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all">
              <Github size={14} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/5 transition-all">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
