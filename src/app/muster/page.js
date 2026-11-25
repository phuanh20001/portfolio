import { featuredProject as p } from '@/data/profile'
import { real, Chip, LinkButton, Section, Bullets, Stats, PageHeader, Shot, MusterDiagram, focusRing } from '../ui'

export const metadata = {
  title: 'Muster POS | Ngoc Phu Anh Nguyen',
  description: p.blurb,
  alternates: { canonical: '/muster' },
}

export default function MusterPage() {
  const [till, phone, ...rest] = p.gallery
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-8 py-14 sm:py-20">
      <PageHeader eyebrow="Current work" title={p.name}>
        <div className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <p>
            <span className="inline-flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
              In production since {p.deployment.since}
            </span>
            {' at '}
            <a href={p.deployment.url} target="_blank" rel="noreferrer" className={'font-medium text-gray-800 dark:text-gray-200 underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 ' + focusRing}>
              {p.deployment.customer}
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-800 dark:text-gray-200">{p.accreditation.label}</span>
            {', '}
            <a href={p.accreditation.url} target="_blank" rel="noreferrer" className={'underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 ' + focusRing}>
              {p.accreditation.linkText}
            </a>
          </p>
        </div>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">{p.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <LinkButton href={p.deployment.liveUrl} primary>Live ordering page →</LinkButton>
          <LinkButton href={p.demoUrl}>Try the demo</LinkButton>
          <LinkButton href={p.siteUrl}>Product site</LinkButton>
          <LinkButton href={p.repoUrl}>Code</LinkButton>
        </div>
      </PageHeader>

      <Section id="screens" title="What it looks like">
        <div className="grid gap-6 lg:grid-cols-[1fr_220px] items-start">
          <Shot {...till} />
          <Shot {...phone} className="max-w-[220px] mx-auto lg:mx-0" />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((s) => (
            <Shot key={s.src} {...s} />
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">Screenshots from the public demo, with a made-up menu. The cafe&rsquo;s own screens and sales stay private.</p>
      </Section>

      <Section id="numbers" title="In numbers">
        <Stats items={p.stats} />
      </Section>

      <Section id="how" title="How it works">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
          <MusterDiagram />
        </div>
      </Section>

      {real(p.testimonial?.quote) && (
        <Section id="owner" title="From the owner">
          <figure className="max-w-3xl border-l-2 border-gray-900 dark:border-white pl-6">
            <blockquote className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">&ldquo;{p.testimonial.quote}&rdquo;</blockquote>
            <figcaption className="mt-2 text-sm text-gray-500">{p.testimonial.author}</figcaption>
          </figure>
        </Section>
      )}

      {p.highlights.map((g) => (
        <Section key={g.group} id={g.group.toLowerCase().replace(/\s+/g, '-')} title={g.group}>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {g.sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
                <Bullets items={s.items} />
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section id="stack" title="Built with">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Section>
    </main>
  )
}
