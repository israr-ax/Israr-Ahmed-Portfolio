import { useEffect, useRef } from 'react'

/**
 * Tracks pointer position normalized to [-1, 1] on each axis (0,0 = center
 * of the viewport). Stored in a ref (not state) so consumers like the R3F
 * useFrame loop can read it every frame without triggering React re-renders.
 */
export function useMousePosition() {
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      pos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return pos
}
