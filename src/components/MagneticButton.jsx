import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cx } from '../lib/utils'

/**
 * Desktop: the button nudges toward the cursor within its own bounds
 * ("magnetic" hover), on top of a scale + glow micro-interaction.
 * Touch devices get the scale/glow only — magnetic pull needs a hover
 * that touch doesn't have, so it's skipped rather than faked on tap.
 */
export default function MagneticButton({
  as: Tag = 'button',
  children,
  className,
  strength = 18,
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  const MotionTag = motion.create(Tag)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cx(
        'transition-shadow duration-300 will-change-transform',
        'hover:shadow-[0_0_32px_rgba(139,107,242,0.35)]',
        className
      )}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
