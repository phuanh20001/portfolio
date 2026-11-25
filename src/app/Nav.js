'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { focusRing } from './ui'

const links = [
  { href: '/', label: 'Home' },
  { href: '/muster', label: 'Muster POS' },
  { href: '/tavernforge', label: 'Tavernforge' },
  { href: '/experience', label: 'Experience' },
]

// One row of links on every page; the current page is marked for screen readers too.
export default function Nav({ resumePdf }) {
  const path = usePathname()
  return (
    <nav aria-label="Main" className="sticky top-0 z-20 border-b border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 flex items-center gap-1 overflow-x-auto">
        {links.map((l) => {
          const on = l.href === '/' ? path === '/' : path.startsWith(l.href)
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={on ? 'page' : undefined}
              className={
                'whitespace-nowrap px-3 py-4 text-sm font-medium border-b-2 transition-colors ' +
                (on
                  ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200') +
                ' ' + focusRing
              }
            >
              {l.label}
            </Link>
          )
        })}
        {resumePdf && (
          <a href={resumePdf} className={'ml-auto whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 ' + focusRing}>
            Résumé (PDF)
          </a>
        )}
      </div>
    </nav>
  )
}
