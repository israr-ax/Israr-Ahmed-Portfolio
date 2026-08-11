import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Simulated progress + a terminal-style boot line. There's no real asset
 * manifest to track (the hero is procedural geometry, not a loaded model),
 * so progress is a deliberate, capped-length ramp — long enough to mask
 * the Canvas/font initialization, never so long it feels fake.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    const duration = 1100
    let frame

    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setVisible(false)
          onDone?.()
        }, 250)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-xs text-ink-faint mb-4 tracking-widest">
            GET /portfolio
          </div>
          <div className="font-display text-2xl sm:text-3xl text-ink mb-8 tracking-tight">
            israr<span className="text-signal">.</span>dev
          </div>
          <div className="w-48 sm:w-64 h-px bg-surface-2 overflow-hidden">
            <motion.div
              className="h-full bg-signal"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono text-xs text-ink-faint mt-4">
            {Math.floor(progress)}% · {progress >= 100 ? '200 OK' : 'connecting'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
