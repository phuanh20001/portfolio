import { profile, featuredProject, otherProjects } from '@/data/profile'
import EmailButton from './EmailButton'

// A placeholder is any string still wrapped in [brackets]. We hide fields that
// haven't been filled in yet so a half-edited profile never ships broken links.
function isPlaceholder(v) {
  return typeof v === 'string' && v.trim().startsWith('[') && v.trim().endsWith(']')
}
function real(v) {
  return typeof v === 'string' && v.trim() && !isPlaceholder(v) ? v.trim() : ''
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300">
      {children}
    </span>
  )
}

function LinkButton({ href, children, primary }) {
  if (!real(href)) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={
        primary
          ? 'inline-flex items-center gap-1.5 rounded-lg bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 hover:opacity-90 transition'
          : 'inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition'
      }
    >
      {children}
    </a>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-16 scroll-mt-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function Home() {
  const email = real(profile.links.email)
  const github = real(profile.links.github)
  const linkedin = real(profile.links.linkedin)
  const website = real(profile.links.website)
  const resumePdf = real(profile.links.resumePdf)
  const hasExperience = Array.isArray(profile.experience) && profile.experience.some((e) => real(e.role) || real(e.company))
  const hasEducation = Array.isArray(profile.education) && profile.education.some((e) => real(e.qualification) || real(e.institution))
  const shownOthers = (otherProjects || []).filter(
    (p) => real(p.name) || real(p.blurb) || real(p.note),
  )

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">{profile.tagline}</p>
        {real(profile.location) && (
          <p className="mt-1 text-sm text-gray-500">{profile.location}</p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {email && <EmailButton email={email} />}
          {github && <LinkButton href={github}>GitHub</LinkButton>}
          {linkedin && <LinkButton href={linkedin}>LinkedIn</LinkButton>}
          {website && <LinkButton href={website}>Website</LinkButton>}
          {resumePdf && <LinkButton href={resumePdf}>Résumé (PDF)</LinkButton>}
        </div>
      </header>

      {/* ── About ────────────────────────────────────────────────────────── */}
      {real(profile.about) && (
        <Section id="about" title="About">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {profile.about}
          </p>
        </Section>
      )}

      {/* ── Featured project: DreamyCafe ─────────────────────────────────── */}
      <Section id="featured" title="Featured Project">
        <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3 className="text-2xl font-bold">{featuredProject.name}</h3>
            <div className="flex gap-2">
              <LinkButton href={featuredProject.demoUrl} primary>Live demo →</LinkButton>
              <LinkButton href={featuredProject.repoUrl}>Code</LinkButton>
            </div>
          </div>

          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {featuredProject.blurb}
          </p>

          <ul className="mt-5 space-y-2">
            {featuredProject.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </article>
      </Section>

      {/* ── Other projects ───────────────────────────────────────────────── */}
      {shownOthers.length > 0 && (
        <Section id="projects" title="Other Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {shownOthers.map((p, i) => (
              <article
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {real(p.blurb) && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                    {p.blurb}
                  </p>
                )}
                {Array.isArray(p.stack) && p.stack.some(real) && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.filter(real).map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-3 text-sm">
                  {real(p.demoUrl) && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
                      Demo
                    </a>
                  )}
                  {real(p.repoUrl) && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
                      Code
                    </a>
                  )}
                  {!real(p.demoUrl) && !real(p.repoUrl) && real(p.note) && (
                    <span className="text-gray-500">{p.note}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      {Array.isArray(profile.skills) && profile.skills.length > 0 && (
        <Section id="skills" title="Skills">
          <div className="space-y-4">
            {profile.skills.map((g) => (
              <div key={g.group} className="sm:flex sm:gap-6">
                <div className="w-32 shrink-0 text-sm font-semibold text-gray-500 mb-2 sm:mb-0">
                  {g.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.filter(real).map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Experience ───────────────────────────────────────────────────── */}
      {hasExperience && (
        <Section id="experience" title="Experience">
          <div className="space-y-8">
            {profile.experience.map((e, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-lg font-semibold">
                    {real(e.role)}
                    {real(e.company) && <span className="text-gray-500 font-normal"> · {e.company}</span>}
                  </h3>
                  <span className="text-sm text-gray-500">{real(e.period)}</span>
                </div>
                {real(e.location) && <p className="text-sm text-gray-500 mt-0.5">{e.location}</p>}
                {Array.isArray(e.points) && (
                  <ul className="mt-3 space-y-1.5">
                    {e.points.filter(real).map((pt, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Education ─────────────────────────────────────────────────────── */}
      {hasEducation && (
        <Section id="education" title="Education">
          <div className="space-y-4">
            {profile.education.map((e, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-semibold">{real(e.qualification)}</h3>
                  {real(e.institution) && <p className="text-sm text-gray-500">{e.institution}</p>}
                </div>
                <span className="text-sm text-gray-500">{real(e.period)}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-gray-500 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        {email && <a href={`mailto:${email}`} className="hover:text-gray-900 dark:hover:text-gray-200">{email}</a>}
        {github && <a href={github} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">GitHub</a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">LinkedIn</a>}
      </footer>
    </main>
  )
}
