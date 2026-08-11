import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-20">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          israr<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide uppercase text-ink-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal-bright transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink-dim hover:text-ink hover:border-signal-200 transition-colors"
          >
            CV
          </a>
          <a
            href={profile.bookingUrl}
            className="inline-flex items-center gap-2 rounded-full border border-signal-200 px-4 py-2 font-mono text-xs uppercase tracking-wide text-signal-bright hover:bg-signal-50 hover:border-signal transition-colors"
          >
            Book a call
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4 font-mono text-sm uppercase tracking-wide text-ink-dim">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 hover:text-signal-bright transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex gap-3">
                <a
                  href={profile.cvUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center rounded-full border border-border px-4 py-2.5 text-xs"
                >
                  CV
                </a>
                <a
                  href={profile.bookingUrl}
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center rounded-full border border-signal-200 px-4 py-2.5 text-xs text-signal-bright"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
