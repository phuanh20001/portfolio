'use client'

import { useState } from 'react'

// Email CTA with a copy-to-clipboard fallback. It stays a real mailto: link so
// visitors with a mail client get the normal compose window, but a click also
// copies the address and briefly shows "Copied!" — so people with no default
// mail handler (the common mailto: dead-click) can just paste it into webmail.
export default function EmailButton({ email }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure context / permissions) — the mailto: still fires.
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={copy}
      title={copied ? 'Copied!' : email}
      aria-label={`Email ${email}`}
      className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 hover:opacity-90 transition"
    >
      {copied ? 'Copied!' : 'Email'}
    </a>
  )
}
