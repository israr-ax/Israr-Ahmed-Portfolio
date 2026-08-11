import { motion } from 'framer-motion'
import { skillIconMap, fallbackIcon } from '../data/skillIcons'

export default function SkillChip({ name, level, index }) {
  const Icon = skillIconMap[name] || fallbackIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-xl glass p-4 hover:border-signal-200 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-9 h-9 rounded-lg bg-signal-50 text-signal-bright group-hover:bg-signal-100 group-hover:shadow-[0_0_18px_rgba(139,107,242,0.35)] transition-all">
          <Icon size={18} />
        </span>
        <span className="text-sm font-medium text-ink">{name}</span>
      </div>
      <div className="mt-3 h-1 rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="h-full rounded-full bg-signal"
        />
      </div>
    </motion.div>
  )
}
