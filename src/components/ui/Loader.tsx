'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEPS = ['Initializing...', 'Loading modules...', 'Fetching data...', 'Rendering UI...', 'Almost ready...']

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + 2
        if (next % 20 === 0) setStep(s => Math.min(s + 1, STEPS.length - 1))
        if (next >= 100) { clearInterval(interval); setTimeout(() => setDone(true), 400) }
        return Math.min(next, 100)
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-2xl text-cyan-400 tracking-[4px] mb-8">AS.dev</p>
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full top-bar-gradient"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
          <p className="font-mono text-xs text-slate-500 tracking-widest">{STEPS[step]}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
