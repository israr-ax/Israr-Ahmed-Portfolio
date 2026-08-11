import { motion } from 'framer-motion'
import { MapPin, Clock, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import profileImage from '../assets/PROFILE.jpeg'
const facts = [
  { icon: Clock, label: 'Experience', value: profile.experienceYears },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: GraduationCap, label: 'Status', value: profile.availability },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="GET /about · 200 OK"
          title="Behind the API."
          description="A little about who's writing the backend."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Avatar — a code-referencing panel rather than a stock headshot,
              since no photo asset was provided. Swap the initials block
              for an <img> whenever you have a real photo/3D avatar. */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl glass overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={profileImage}
                alt="PROFILE"
                classname="w-full h-full object-cover objectcover"/>
                
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg/80 to-transparent" />
            
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {profile.bio.map((p, i) => (
                <p key={i} className="text-ink-dim text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl glass p-4">
                  <Icon size={16} className="text-signal-bright mb-3" />
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink font-medium">{value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  )
}
