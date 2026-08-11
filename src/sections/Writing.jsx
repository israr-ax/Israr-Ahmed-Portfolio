import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

/**
 * Empty-state section reserved for future writing and the end-of-track
 * capstone project. Intentionally sparse — this is a placeholder card,
 * not content to fake. Once you publish something, turn `entries` below
 * into real cards (same shape as ProjectCard) or link out to a blog.
 */
const entries = []

export default function Writing() {
  return (
    <section id="writing" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="GET /writing · 204 No Content"
          title="Writing & capstone."
          description="Nothing published yet — this is where build logs and the end-of-track capstone project will live."
        />

        {entries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 rounded-2xl glass border-dashed p-10 sm:p-14 text-center max-w-xl mx-auto"
          >
            <Sparkles size={22} className="mx-auto text-signal-bright mb-4" />
            <p className="text-ink font-medium">Coming soon</p>
            <p className="mt-2 text-sm text-ink-dim leading-relaxed">
              First post lands once there's something worth writing about. The capstone project
              write-up will be pinned here when it's approved.
            </p>
          </motion.div>
        ) : (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Map real entries here once they exist. */}
          </div>
        )}
      </div>
    </section>
  )
}
