import { sideProject as p } from '@/data/profile'
import { Chip, Section, Bullets, Stats, PageHeader } from '../ui'

export const metadata = {
  title: 'Tavernforge | Ngoc Phu Anh Nguyen',
  description: p.blurb,
  alternates: { canonical: '/tavernforge' },
}

export default function TavernforgePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-8 py-14 sm:py-20">
      <PageHeader eyebrow="Side project" title={p.name}>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-800 dark:text-gray-200">{p.label}</span> · {p.status} · {p.note}
        </p>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">{p.blurb}</p>
      </PageHeader>

      <Section id="numbers" title="In numbers">
        <Stats items={p.stats} cols="sm:grid-cols-2 lg:grid-cols-4" />
      </Section>

      <Section id="details" title="The project">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {p.sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
              <Bullets items={s.items} />
            </div>
          ))}
        </div>
      </Section>

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
