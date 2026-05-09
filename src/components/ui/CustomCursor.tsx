'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 })
  const raf = useRef<number>()

  useEffect(() => {
    // Disable on touch / mobile
    if (window.matchMedia('(pointer: coarse)').matches) return
    setVisible(true)

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }

    const animate = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.12
      if (ring.current) {
        ring.current.style.left = pos.current.rx + 'px'
        ring.current.style.top = pos.current.ry + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', move)

    const grow = () => {
      if (dot.current) { dot.current.style.width = '6px'; dot.current.style.height = '6px' }
      if (ring.current) { ring.current.style.width = '60px'; ring.current.style.height = '60px'; ring.current.style.borderColor = 'rgba(0,245,255,0.5)' }
    }
    const shrink = () => {
      if (dot.current) { dot.current.style.width = '12px'; dot.current.style.height = '12px' }
      if (ring.current) { ring.current.style.width = '40px'; ring.current.style.height = '40px'; ring.current.style.borderColor = 'rgba(0,245,255,0.3)' }
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div ref={dot} className="fixed z-[9997] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 mix-blend-screen transition-[width,height] duration-200" style={{ left: '-100px', top: '-100px' }} />
      <div ref={ring} className="fixed z-[9996] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cyan-400/30 transition-[width,height,border-color] duration-200" style={{ left: '-100px', top: '-100px' }} />
    </>
  )
}
