import Link from 'next/link'
import { profile, featuredProject, sideProject } from '@/data/profile'
import EmailButton from './EmailButton'
import Reveal from './Reveal'
import { real, Chip, LinkButton, Section, Stats, focusRing } from './ui'

function ProjectCard({ href, title, kicker, children, image }) {
  return (
    <Link
      href={href}
      className={
        'group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-200/60 dark:hover:shadow-black/40 ' +
        focusRing
      }
    >
      {image && <img src={image.src} width={image.w} height={image.h} alt="" loading="lazy" className="w-full h-auto border-b border-gray-200 dark:border-gray-700" />}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">{kicker}</p>
        <h3 className="mt-1 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-1">{children}</p>
        <span className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
          Read more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  const email = real(profile.links.email)
  const internship = profile.experience.find((e) => e.company === 'Bridgin Automation')

  return (
    <main className="relative mx-auto max-w-6xl px-6 sm:px-8 py-14 sm:py-20">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[880px] max-w-[140vw] -translate-x-1/2 rounded-full bg-gray-200/60 dark:bg-gray-700/20 blur-3xl" />
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <header>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to work · Canberra &amp; Remote
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">{profile.name}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">{profile.tagline}</p>
            <p className="mt-1 text-sm text-gray-500">{profile.location}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap gap-3">
              {email && <EmailButton email={email} />}
              <LinkButton href={profile.links.github}>GitHub</LinkButton>
              <LinkButton href={profile.links.linkedin}>LinkedIn</LinkButton>
              <LinkButton href={profile.links.resumePdf}>Résumé (PDF)</LinkButton>
            </div>
          </Reveal>
        </header>

        <Section id="about" title="About" className="lg:mt-0">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{profile.about}</p>
        </Section>
      </div>

      <Section id="numbers" title="In numbers">
        <Stats items={profile.homeStats} cols="sm:grid-cols-2 lg:grid-cols-4" />
      </Section>

      <Section id="work" title="Work">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <ProjectCard href="/muster" kicker="Live in a Canberra cafe" title={featuredProject.name} image={featuredProject.gallery[0]}>
              {featuredProject.blurb}
            </ProjectCard>
          </div>
          <ProjectCard href="/tavernforge" kicker={sideProject.label} title={sideProject.name}>
            {sideProject.blurb}
          </ProjectCard>
          {internship && (
            <ProjectCard href="/experience#bridgin-automation" kicker={`Internship · ${internship.period}`} title="Koto Kitchen">
              {internship.points[0]}
            </ProjectCard>
          )}
        </div>
      </Section>

      <Section id="timeline" title="So far">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2 space-y-6">
          {profile.milestones.map((m) => (
            <li key={m.what} className="pl-6 relative">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-900 dark:bg-white" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">{m.when}</p>
              <p className="mt-0.5 text-base text-gray-800 dark:text-gray-200">{m.what}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm">
          <Link href="/experience" className={'font-semibold underline underline-offset-4 ' + focusRing}>Full experience and education →</Link>
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="space-y-4">
          {profile.skills.map((g) => (
            <div key={g.group} className="sm:flex sm:gap-6">
              <div className="w-36 shrink-0 text-sm font-semibold text-gray-500 mb-2 sm:mb-0">{g.group}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.filter(real).map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
