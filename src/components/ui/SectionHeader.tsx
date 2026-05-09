import { motion } from 'framer-motion'

interface Props { tag: string; title: string; highlight: string }

export default function SectionHeader({ tag, title, highlight }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p className="font-mono text-xs text-cyan-400 tracking-[3px] uppercase mb-3">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold">
        {title} <span className="gradient-text-cp">{highlight}</span>
      </h2>
      <div className="w-14 h-0.5 top-bar-gradient mx-auto mt-4 rounded-full" />
    </motion.div>
  )
}
