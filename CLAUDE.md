# Portfolio + CV — Agent Guide

This repo is the owner's personal portfolio site **and the home for all CV and job-application work**:
the master CV, tailored CVs, cover letters, selection-criteria statements and job searches are all
driven from a session opened here.

> 🔒 **This repository is PUBLIC and every push redeploys the live site on Vercel.**
> Private context (background, work rights, career goals, application history, verified facts,
> owner conditions on what may be published, where the tools and application folders live) is kept
> in **Claude's project memory for this folder**, not in the repo. Read `MEMORY.md` there first and
> follow its links. Never copy anything private into a file in this repo.

## Layout

| Path | What it is |
|---|---|
| `src/data/profile.js` | **Single source of the site's content**: profile, skills, experience, milestones, home stats, Muster POS (`featuredProject`), Tavernforge (`sideProject`), other projects. Edit content here, not in the pages. |
| `src/app/page.js` | Home: intro, "In numbers" tiles, work cards, timeline, skills |
| `src/app/muster/page.js` | Muster POS case study: screenshots, stats, "How it works" diagram, owner quote, details |
| `src/app/tavernforge/page.js`, `src/app/experience/page.js` | Side project; work, education and other projects |
| `src/app/ui.js`, `src/app/Nav.js`, `src/app/layout.js` | Shared components (stat tiles, diagram, screenshots), top nav, footer |
| `public/muster/*.webp` | Screenshots of the **public demo only** (made-up menu, no sales) |
| `resume.html` | **Master developer CV** (HTML source). Its PDF is `public/resume.pdf`, a separate file that must be re-rendered after every CV edit |
| `.claude/skills/humanizer` | Rewrites AI-sounding prose; use it for customer-facing copy only |

## Where skills and facts come from

The CV and site describe work done in the owner's **other repositories** (the point-of-sale system,
the internship project, the hobby project and others; memory lists each one and what to read in it).
Before writing or changing a bullet, a skill or a number, **read the repository it describes**: its
changelog, spec, `package.json`, tests and git history. Those repositories are **read-only** from
here: never edit, run, commit or push in them. The point-of-sale repository is live shop code.

## How work gets done here

- **Site change:** edit `profile.js` (or a page), then `npm run build` must pass. Check desktop and
  phone width, light and dark mode, and no sideways scroll on a phone.
- **CV change:** edit the HTML, render it to PDF with the render script recorded in memory, confirm
  **one page**, then copy the PDF to every place memory lists. A tailored CV is a copy in that job's
  application folder; never edit the master for one job.
- **Job search:** run the full source checklist and score each lead with the 70% rule, giving a
  link to the employer's own posting (both are in memory).

## Writing rules (apply to the CV, the site, letters and emails)

- Documents are signed with the owner's full name as written in `profile.js`.
- **No em dashes.** Plain English a non-technical recruiter can follow; tool names go in Skills.
- The CV and portfolio describe work without "I", "my" or "me" (verb-led bullets).
- **Never a bare "700+ tests"**: always say what they cover and when they run.
- Tavernforge is described as the whole project, plus one "Pitched the idea" and one "Main area" line.
- **Numbers on the site come from the engineering only** (tests, printer connections, update sizes,
  load-test timings). Never publish a figure derived from the cafe's sales, takings or card rates,
  and never name the cafe's bank. Screenshots come from the public demo, never the shop's own screens.
- Never claim a skill, date or title that isn't verified; read the source repo or the employer's
  own page before stating a fact.

## Git

The owner commits and pushes. Do not `git add`, commit or push; write the files, check them, report.
