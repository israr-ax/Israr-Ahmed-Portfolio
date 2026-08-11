import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

const socials = [
  { icon: FaGithub, label: 'GitHub', href: profile.socials.github },
  { icon: FaLinkedin, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="POST /contact"
          title="Let's build something."
          description="Open to backend developer internships and freelance API work — reach out below."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-ink hover:text-signal-bright transition-colors"
              >
                <Mail size={16} className="text-signal-bright shrink-0" />
                <span className="font-mono text-sm">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-ink hover:text-signal-bright transition-colors"
              >
                <Phone size={16} className="text-signal-bright shrink-0" />
                <span className="font-mono text-sm">{profile.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid place-items-center w-11 h-11 rounded-full glass text-ink-dim hover:text-signal-bright hover:border-signal transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-dim hover:text-ink hover:border-signal-200 transition-colors"
              >
                Download CV
              </a>
              <a
                href={profile.bookingUrl}
                className="inline-flex items-center gap-2 rounded-full border border-signal-200 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-signal-bright hover:bg-signal-50 hover:border-signal transition-colors"
              >
                Book a call
              </a>
            </div>

            <div className="rounded-xl glass p-5 font-mono text-xs text-ink-faint leading-relaxed">
              <span className="text-ok">200 OK</span>
              <br />
              location: {profile.location}
              <br />
              status: {profile.availability}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl glass p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
