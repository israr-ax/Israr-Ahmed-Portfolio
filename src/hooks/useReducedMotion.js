import { useEffect, useState } from 'react'

/**
 * Tracks the user's `prefers-reduced-motion` OS setting live (it can change
 * without a reload). Every animated component in this project should check
 * this before running scroll-triggered or continuous motion.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return reduced
}
