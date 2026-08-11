import { useEffect, useState } from 'react'

/**
 * True for narrow viewports OR coarse-pointer (touch) devices. Used to
 * simplify or fully disable expensive 3D work on phones — see HeroScene.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      const narrow = window.innerWidth < breakpoint
      const coarse = window.matchMedia('(pointer: coarse)').matches
      setIsMobile(narrow || coarse)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}
