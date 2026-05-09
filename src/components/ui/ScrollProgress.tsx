'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 z-[1001] h-[3px] top-bar-gradient pointer-events-none transition-[width] duration-100" style={{ width: `${progress}%` }} />
  )
}
