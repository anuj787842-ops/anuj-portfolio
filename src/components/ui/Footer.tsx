import { PERSONAL } from '@/lib/data'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#020617] px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="font-mono text-cyan-400 text-sm">Anuj Sharma · 2026</p>
      <p className="text-slate-500 text-xs">Designed & Built with ❤️ · Jaipur, India</p>
      <div className="flex gap-4">
        <a href={PERSONAL.github} target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Github size={18} /></a>
        <a href={PERSONAL.linkedin} target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
        <a href={`mailto:${PERSONAL.email}`} className="text-slate-500 hover:text-cyan-400 transition-colors"><Mail size={18} /></a>
      </div>
    </footer>
  )
}
