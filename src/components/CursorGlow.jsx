import { useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * A soft violet glow that trails the cursor with easing, layered behind
 * content (pointer-events: none). Skipped entirely on touch devices and
 * when reduced-motion is on — it's pure atmosphere, never load-bearing.
 */
export default function CursorGlow() {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (isMobile || reducedMotion) return
    const el = ref.current
    if (!el) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let curX = mouseX
    let curY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('pointermove', onMove)

    const loop = () => {
      curX += (mouseX - curX) * 0.08
      curY += (mouseY - curY) * 0.08
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [isMobile, reducedMotion])

  if (isMobile || reducedMotion) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[420px] h-[420px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(139,107,242,0.10) 0%, rgba(139,107,242,0) 70%)',
      }}
    />
  )
}
