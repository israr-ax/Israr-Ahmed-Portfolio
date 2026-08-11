import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * 3D tilt is driven by two spring-smoothed motion values mapped from the
 * cursor's position inside the card's own bounding box — no external tilt
 * library needed. Disabled under prefers-reduced-motion (card stays flat).
 */
export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springConf = { stiffness: 200, damping: 20 }
  const sx = useSpring(mx, springConf)
  const sy = useSpring(my, springConf)

  const rotateX = useTransform(sy, [0, 1], [8, -8])
  const rotateY = useTransform(sx, [0, 1], [-8, 8])
  const glowX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glowY = useTransform(sy, [0, 1], ['0%', '100%'])

  const handleMove = (e) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`group relative rounded-2xl glass p-6 sm:p-7 h-full flex flex-col overflow-hidden ${
          project.isTemplate ? 'border-dashed opacity-70' : ''
        }`}
      >
        {/* Cursor-follow glow, masked to card bounds */}
        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(320px circle at ${glowX} ${glowY}, rgba(139,107,242,0.14), transparent 70%)`,
            }}
          />
        )}

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-ink-faint">{project.subtitle}</p>
          </div>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-ok/30 text-ok">
            {project.status}
          </span>
        </div>

        <p className="relative mt-4 text-sm text-ink-dim leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-signal-50 text-signal-bright border border-signal-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-6 flex items-center gap-4 font-mono text-xs">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-dim hover:text-signal-bright transition-colors"
            >
              <FaGithub size={14} /> Source
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink-faint">
              <FaGithub size={14} /> —
            </span>
          )}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-dim hover:text-signal-bright transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Live
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink-faint">
              <FaExternalLinkAlt size={12} /> no deploy yet
            </span>
          )}
        </div>
      </motion.article>
    </motion.div>
  )
}
