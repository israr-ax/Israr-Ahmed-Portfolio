import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-10">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {profile.name}. Built with React, R3F &amp; Tailwind.
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-ink-dim hover:text-signal-bright transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
