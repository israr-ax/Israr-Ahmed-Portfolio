import { motion } from 'framer-motion'

/**
 * `index` is an HTTP-style status/route string (e.g. "02 · GET /about")
 * rather than a bare number — ties every section header back to the
 * API metaphor established in the hero instead of a generic 01/02/03 list.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-dim text-base sm:text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
