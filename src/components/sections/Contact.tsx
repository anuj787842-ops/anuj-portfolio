'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { PERSONAL } from '@/lib/data'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const LINKS = [
  { icon: <Mail size={18} />, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'anuj-sharma-a8884a279', href: PERSONAL.linkedin },
  { icon: <Github size={18} />, label: 'GitHub', value: 'Anuj7878', href: PERSONAL.github },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Jaipur, India · Open to Remote', href: null },
]

export default function Contact() {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    try {
      await emailjs.sendForm(
        'service_n09hj8v',
        'template_mojal9i',
        form.current,
        'zydGJoVbGZug21RAU'
      )

      alert('Message sent successfully!')
      form.current.reset()
    } catch (error) {
      alert('Failed to send message')
    }
  }

  return (
    <section id="contact" className="relative z-10 px-6 md:px-16 py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <SectionHeader tag="08 // Contact" title="Let's" highlight="Connect" />

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 md:p-10 border border-white/[0.08] backdrop-blur-xl"
        >

          <p className="text-slate-400 text-sm text-center leading-relaxed mb-8">
            Open to full-time roles, internships, and freelance data projects. Let's build something intelligent together.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {LINKS.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {l.href ? (
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto') ? undefined : '_blank'}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-cyan-400/4 hover:-translate-y-0.5 transition-all duration-300 no-underline"
                  >
                    <span className="text-cyan-400">{l.icon}</span>

                    <div>
                      <p className="text-slate-200 text-xs font-medium">{l.value}</p>
                      <p className="font-mono text-[10px] text-slate-500">{l.label}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-cyan-400">{l.icon}</span>

                    <div>
                      <p className="text-slate-200 text-xs font-medium">{l.value}</p>
                      <p className="font-mono text-[10px] text-slate-500">{l.label}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-3">

            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="font-mono text-xs text-slate-500 tracking-widest block mb-1.5">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-400/40 focus:outline-none transition-colors placeholder-slate-600"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-500 tracking-widest block mb-1.5">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-400/40 focus:outline-none transition-colors placeholder-slate-600"
                />
              </div>

            </div>

            <div>
              <label className="font-mono text-xs text-slate-500 tracking-widest block mb-1.5">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Data Analyst Role / Collaboration..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-400/40 focus:outline-none transition-colors placeholder-slate-600"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-slate-500 tracking-widest block mb-1.5">
                Message
              </label>

              <textarea
                rows={4}
                name="message"
                placeholder="Tell me about the opportunity..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-400/40 focus:outline-none transition-colors placeholder-slate-600 resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,245,255,0.35)] transition-all duration-300 mt-1"
            >
              Send Message →
            </button>

          </form>

        </motion.div>
      </div>
    </section>
  )
}