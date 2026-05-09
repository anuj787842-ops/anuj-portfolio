'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PERSONAL } from '@/lib/data'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certs', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed top-0 w-full z-[100] px-6 md:px-16 py-4 flex justify-between items-center backdrop-blur-xl border-b border-white/[0.06] bg-[rgba(2,6,23,0.8)]"
    >
      <span className="font-mono text-cyan-400 tracking-[2px] text-sm">AS.dev</span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-7 list-none">
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono tracking-widest uppercase">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href={PERSONAL.resumeUrl} download className="px-4 py-1.5 border border-cyan-400/30 rounded-md text-cyan-400 text-xs font-mono tracking-widest hover:bg-cyan-400/10 hover:border-cyan-400 transition-all">
            Resume ↓
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button className="md:hidden text-cyan-400 cursor-pointer" onClick={() => setOpen(o => !o)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0a0f1e] border-b border-white/[0.06] flex flex-col px-6 py-4 gap-4 md:hidden"
        >
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono tracking-widest uppercase">
              {l.label}
            </a>
          ))}
          <a href={PERSONAL.resumeUrl} download className="w-fit px-4 py-1.5 border border-cyan-400/30 rounded-md text-cyan-400 text-xs font-mono">
            Resume ↓
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
