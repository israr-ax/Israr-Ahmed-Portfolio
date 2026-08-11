import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionHeading from '../components/SectionHeading'
import SkillChip from '../components/SkillChip'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="GET /skills · 200 OK"
          title="The stack, by layer."
          description="Grouped the way a service is actually built — data layer up through what the user touches."
        />

        <div className="mt-16 space-y-14">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs uppercase tracking-widest text-signal-bright mb-5"
              >
                {String(gi + 1).padStart(2, '0')} / {group.category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.items.map((item, i) => (
                  <SkillChip key={item.name} name={item.name} level={item.level} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
