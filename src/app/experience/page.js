import { profile, otherProjects } from '@/data/profile'
import { real, Chip, Section, Bullets, PageHeader } from '../ui'

export const metadata = {
  title: 'Experience | Ngoc Phu Anh Nguyen',
  description: 'Work, internships, volunteering, education and other projects.',
  alternates: { canonical: '/experience' },
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 sm:px-8 py-14 sm:py-20">
      <PageHeader eyebrow="Background" title="Experience" />

      <Section id="work" title="Work and volunteering">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2 space-y-10">
          {profile.experience.map((e) => (
            <li key={e.role + e.company} id={slug(e.company)} className="pl-7 relative scroll-mt-24">
              <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900 bg-gray-900 dark:bg-white" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role} <span className="text-gray-500 font-normal">· {e.company}</span>
              </h3>
              {real(e.location) && <p className="text-sm text-gray-500">{e.location}</p>}
              {Array.isArray(e.points) && <Bullets items={e.points} />}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-4">
          {profile.education.map((e) => (
            <div key={e.qualification} className="flex items-baseline justify-between gap-4 flex-wrap rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
              <div>
                <h3 className="font-semibold">{e.qualification}</h3>
                <p className="text-sm text-gray-500">{e.institution}</p>
              </div>
              <span className="text-sm text-gray-500">{e.period}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Other projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {otherProjects.map((p) => (
            <article key={p.name} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-1">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              {real(p.repoUrl) && (
                <a href={p.repoUrl} target="_blank" rel="noreferrer" className="mt-4 text-sm font-semibold underline underline-offset-4">
                  Code
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
