import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="GET /experience · 200 OK"
          title="Timeline."
          description="Ordered chronologically — this one's a real sequence, so the line matters."
        />

        <div className="mt-16 relative max-w-2xl">
          {/* The spine — grows in on scroll rather than appearing fully drawn */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-signal-dim to-transparent"
          />

          <ol className="space-y-14">
            {timeline.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-signal shadow-[0_0_12px_rgba(139,107,242,0.5)]"
                />

                <p className="font-mono text-xs text-signal-bright tracking-wide">
                  {item.period}
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-faint">{item.org}</p>

                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point, pi) => (
                    <li key={pi} className="text-sm text-ink-dim leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-signal-dim" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
