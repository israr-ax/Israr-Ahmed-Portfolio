import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'

/**
 * This is a static site with no backend of its own, so submission is
 * simulated (status state machine below) rather than silently failing.
 * To make it actually deliver mail, wire `handleSubmit` to a form service —
 * Formspree, Resend, or EmailJS all work without standing up a server:
 *
 *   const res = await fetch('https://formspree.io/f/YOUR_ID', {
 *     method: 'POST',
 *     headers: { Accept: 'application/json' },
 *     body: new FormData(e.target),
 *   })
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('sending')
    // TODO: replace with a real form-service POST (see comment above).
    setTimeout(() => {
      setStatus('sent')
      setValues({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1200)
  }

  const fieldClass =
    'w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
          placeholder="Ada Lovelace"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What are you building?"
          className={`${fieldClass} mt-2 resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status !== 'idle'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3 font-mono text-xs uppercase tracking-wide text-bg font-medium disabled:opacity-80 hover:shadow-[0_0_32px_rgba(139,107,242,0.35)] transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'idle' && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="inline-flex items-center gap-2"
            >
              <Send size={14} /> Send message
            </motion.span>
          )}
          {status === 'sending' && (
            <motion.span
              key="sending"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="inline-flex items-center gap-2"
            >
              <Loader2 size={14} className="animate-spin" /> Sending
            </motion.span>
          )}
          {status === 'sent' && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="inline-flex items-center gap-2"
            >
              <Check size={14} /> 201 Created
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}
