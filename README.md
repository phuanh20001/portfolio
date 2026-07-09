# Portfolio / CV site

A small, fast personal site — your resume plus a featured case study for
**DreamyCafe**, linking to the live demo and repo. Built with Next.js (App
Router) + Tailwind, so it matches the DreamyCafe stack and deploys to Vercel the
same way.

## Edit your content (one file)

Everything the site shows lives in **[`src/data/profile.js`](src/data/profile.js)**.
Open it and replace every `[bracketed]` placeholder with your real details, then
delete the brackets. Anything still in `[brackets]` is treated as unfilled and
**hidden automatically**, so a half-finished profile never ships broken links.

- **You** — name, tagline, location, links (email / GitHub / LinkedIn).
- **About** — 2–4 sentences.
- **Skills** — grouped chips; add/remove groups freely.
- **Experience / Education** — most recent first; delete blocks you don't need.
- **Featured project** — DreamyCafe, already written. Update `repoUrl` once you
  make the repo public.
- **Other projects** — three placeholder slots. Fill them from your other repos.

### How to choose which other projects to include

- ★ **Has a live demo or public repo** → give it real links. It counts.
- · **Private, no demo** → still list it, set `note: 'Private — code on request'`.
- ✗ **Tutorial / clone / unfinished** → delete the slot. Fewer strong projects
  beat a long weak list.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

1. Push this folder to its **own** GitHub repo (separate from DreamyCafe).
2. [vercel.com](https://vercel.com) → Add New → Project → import it.
3. Framework preset **Next.js**, all defaults. No environment variables needed.
4. Deploy. Optionally add a custom domain in Vercel → Settings → Domains.

## Optional: add a résumé PDF

Drop `resume.pdf` into a `public/` folder and set
`links.resumePdf: '/resume.pdf'` in `profile.js` — a "Résumé (PDF)" button
appears in the hero.
