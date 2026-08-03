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
      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-300/50 dark:hover:shadow-black/40 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
    >
      {copied ? 'Copied!' : 'Email'}
    </a>
  )
}
