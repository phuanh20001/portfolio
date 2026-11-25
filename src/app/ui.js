import Reveal from './Reveal'

// Shared pieces for every page. A placeholder is any string still wrapped in
// [brackets]; real() hides it so a half-edited profile never ships broken links.
export function real(v) {
  const s = typeof v === 'string' ? v.trim() : ''
  return s && !(s.startsWith('[') && s.endsWith(']')) ? s : ''
}

export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900'

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300">
      {children}
    </span>
  )
}

export function LinkButton({ href, children, primary }) {
  if (!real(href)) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={
        (primary
          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 hover:shadow-gray-400/50 dark:hover:shadow-black/50'
          : 'border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-gray-300/50 dark:hover:shadow-black/40') +
        ' inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold hover:-translate-y-1 hover:shadow-md active:translate-y-0 transition-all duration-200 ' +
        focusRing
      }
    >
      {children}
    </a>
  )
}

export function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`mt-16 scroll-mt-24 ${className}`.trim()}>
      <Reveal>
        {title && (
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">{title}</h2>
        )}
        {children}
      </Reveal>
    </section>
  )
}

export function Bullets({ items }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.filter(real).map((h, i) => (
        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
          <span className="leading-relaxed">{h}</span>
        </li>
      ))}
    </ul>
  )
}

// Big number + one plain line under it. Used for the "in numbers" strips.
export function Stats({ items, cols = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <dl className={`grid gap-4 ${cols}`}>
      {items.map((s) => (
        <div key={s.label} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/40 p-5">
          <dt className="sr-only">{s.label}</dt>
          <dd className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{s.value}</dd>
          <dd className="mt-2 text-sm leading-snug text-gray-600 dark:text-gray-400">{s.label}</dd>
        </div>
      ))}
    </dl>
  )
}

// Title block at the top of each inner page.
export function PageHeader({ eyebrow, title, children }) {
  return (
    <header>
      <Reveal>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
      </Reveal>
      {children && <Reveal delay={100}>{children}</Reveal>}
    </header>
  )
}

export function Shot({ src, w, h, alt, caption, className = '' }) {
  return (
    <figure className={className}>
      <img
        src={src}
        width={w}
        height={h}
        alt={alt}
        loading="lazy"
        className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
      />
      {caption && <figcaption className="mt-2 text-sm text-gray-500">{caption}</figcaption>}
    </figure>
  )
}

// How Muster fits together, drawn in SVG so it stays sharp and follows dark mode.
// No addresses, no remote-access tools: the cafe is named on the page.
export function MusterDiagram() {
  const box = 'fill-white dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600'
  const hub = 'fill-gray-900 dark:fill-white'
  const t = 'fill-gray-800 dark:fill-gray-100 text-[13px] font-semibold'
  const s = 'fill-gray-500 dark:fill-gray-400 text-[11px]'
  const line = 'stroke-gray-400 dark:stroke-gray-500'
  const left = [
    { y: 30, a: 'Counter till', b: 'iPad or PC, by touch' },
    { y: 130, a: 'Kitchen and receipt printers', b: 'dockets over the shop network' },
    { y: 230, a: "Customers' phones", b: 'online ordering, via a secure tunnel' },
  ]
  const right = [
    { y: 30, a: 'Bank card terminal', b: 'Linkly accredited' },
    { y: 130, a: 'Online payments', b: 'Square or Stripe' },
    { y: 230, a: 'Nightly backups', b: 'in the shop and off site' },
  ]
  return (
    <figure>
      {/* Phones: the same picture as a stacked list, because the SVG text would be too small to read. */}
      <div className="sm:hidden space-y-2">
        {left.map((n) => (
          <div key={n.a} className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2.5">
            <p className="text-sm font-semibold">{n.a}</p>
            <p className="text-xs text-gray-500">{n.b}</p>
          </div>
        ))}
        <p className="text-center text-gray-400" >↓ ↑</p>
        <div className="rounded-xl bg-gray-900 dark:bg-white px-4 py-3 text-center">
          <p className="font-bold text-white dark:text-gray-900">Muster POS</p>
          <p className="text-xs text-gray-300 dark:text-gray-600">one small PC in the shop: app + database, no cloud bill</p>
        </div>
        <p className="text-center text-gray-400">↓ ↑</p>
        {right.map((n) => (
          <div key={n.a} className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2.5">
            <p className="text-sm font-semibold">{n.a}</p>
            <p className="text-xs text-gray-500">{n.b}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 820 320" role="img" aria-labelledby="muster-diagram-title" className="hidden sm:block w-full h-auto">
        <title id="muster-diagram-title">
          Muster runs on one small computer in the shop. The counter till, printers and customers' phones connect to it, and it
          connects to the bank card terminal, online payments and backups.
        </title>
        {left.map((n) => (
          <g key={n.a}>
            <line x1="250" y1={n.y + 30} x2="310" y2="160" className={line} strokeWidth="1.5" />
            <rect x="10" y={n.y} width="240" height="60" rx="12" className={box} strokeWidth="1.5" />
            <text x="26" y={n.y + 27} className={t}>{n.a}</text>
            <text x="26" y={n.y + 45} className={s}>{n.b}</text>
          </g>
        ))}
        {right.map((n) => (
          <g key={n.a}>
            <line x1="510" y1="160" x2="570" y2={n.y + 30} className={line} strokeWidth="1.5" />
            <rect x="570" y={n.y} width="240" height="60" rx="12" className={box} strokeWidth="1.5" />
            <text x="586" y={n.y + 27} className={t}>{n.a}</text>
            <text x="586" y={n.y + 45} className={s}>{n.b}</text>
          </g>
        ))}
        <rect x="310" y="105" width="200" height="110" rx="16" className={hub} />
        <text x="410" y="148" textAnchor="middle" className="fill-white dark:fill-gray-900 text-[15px] font-bold">Muster POS</text>
        <text x="410" y="170" textAnchor="middle" className="fill-gray-300 dark:fill-gray-600 text-[11px]">one small PC in the shop</text>
        <text x="410" y="188" textAnchor="middle" className="fill-gray-300 dark:fill-gray-600 text-[11px]">app + database, no cloud bill</text>
      </svg>
      <figcaption className="mt-3 text-sm text-gray-500">
        Everything runs on one computer in the shop, so orders and cash sales keep going if the internet drops. Only the customer
        pages are reachable from the internet.
      </figcaption>
    </figure>
  )
}
