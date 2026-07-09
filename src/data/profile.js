// ─────────────────────────────────────────────────────────────────────────────
//  EDIT YOUR DETAILS HERE. Everything the site shows comes from this one file.
//  Replace every [BRACKETED] placeholder with your real information, then delete
//  the brackets. Remove any section you don't want (e.g. drop education entries).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ngoc Phu Anh Nguyen',
  // The one line under your name. Aim for a role + specialty, e.g.
  // "Full-stack developer — I build production web apps end to end".
  tagline: 'Full-stack developer — I build and ship production web apps end to end',
  location: 'ACT, Australia',

  // Shown in the hero and footer. Delete any you don't use; the icons/links
  // only render for the ones you fill in.
  links: {
    email: 'phuanh20001@gmail.com',
    github: 'https://github.com/phuanh20001',
    linkedin: '',
    // Optional extras — leave '' to hide:
    website: '',
    resumePdf: '', // e.g. '/resume.pdf' if you drop a PDF into public/
  },

  // 2–4 sentences. Who you are, what you're good at, what you're looking for.
  about:
    "I'm a full-stack developer who likes taking systems all the way to " +
    'production, not just to a demo. My strongest work is DreamyCafe — a ' +
    "self-hosted point-of-sale and online-ordering platform that runs a real " +
    'coffee shop’s till, prints dockets, and takes Stripe and Square card ' +
    'payments. I care about the unglamorous parts that make software ' +
    'trustworthy: exact money handling, clear security boundaries, and graceful ' +
    'behaviour when the network drops. I’m looking for a graduate/junior ' +
    'full-stack role where I can keep building things people actually use.',

  // Group your skills however you like. Add/remove groups and items freely.
  skills: [
    { group: 'Languages', items: ['JavaScript', 'Java', 'Python', 'SQL'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Prisma'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite'] },
    { group: 'Payments & Web3', items: ['Stripe', 'Square', 'ethers.js', 'Solidity / Hardhat'] },
    { group: 'Mobile & Cloud', items: ['Android (Java/Kotlin)', 'Vercel', 'Cloudflare Tunnel', 'Git'] },
  ],

  // Work history. Most recent first. Delete the array if you have none yet and
  // the section will hide itself.
  experience: [],

  // Education. Delete entries you don't need.
  education: [
    {
      qualification: 'Bachelor of Information Technology',
      institution: 'Crown Institute of Higher Education, Australia',
      period: '2023 — 2026',
    },
    {
      qualification: 'Bachelor of English Pedagogy',
      institution: 'Saigon University, Vietnam',
      period: '2018 — 2023',
    },
  ],
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// The FEATURED project is DreamyCafe — your strongest asset, already filled in.
// Adjust the copy if you like. Update the demoUrl/repoUrl once the repo is public.

export const featuredProject = {
  name: 'DreamyCafe POS',
  blurb:
    'A production point-of-sale and online-ordering system for a coffee shop — ' +
    'built to run a real till, print real dockets, and take card payments over ' +
    'the counter and online. Self-hosted on the shop’s own PC, with only the ' +
    'customer-facing routes exposed to the internet.',
  // The engineering decisions that make it portfolio-worthy. Keep these tight.
  highlights: [
    'Exact money handling — decimal.js everywhere, never floating-point cents; server-side price recomputation on every online order.',
    'A hard LAN/public trust boundary: the full POS and admin stay on the shop network, only customer routes reach the internet through a Cloudflare Tunnel.',
    'Pluggable Stripe & Square payments with signed, idempotent webhooks and a server-driven card reader.',
    'Offline-tolerant PWA: cash sales keep working when the internet drops but the local server is up.',
  ],
  stack: ['Next.js 16', 'JavaScript', 'PostgreSQL', 'Prisma', 'Tailwind', 'Stripe', 'Square'],
  demoUrl: 'https://dreamy-cafe.vercel.app',
  repoUrl: 'https://github.com/phuanh20001/DreamyCafe',
}

// Supporting projects. Guidance:
//  ★ If it has a live demo OR a public repo, give it real links — it counts.
//  · If it's private with no demo, still list it, but say "code on request".
//  ✗ Skip tutorials, clones, and unfinished throwaways — they dilute the good ones.
// Fill these in from your other repos (CryptoWallet, Identity, AntiqueSystem, …).
// Delete any slot you don't use.
export const otherProjects = [
  {
    name: 'AntiqChain',
    blurb:
      'A blockchain-backed platform for authenticating antiques and fighting ' +
      'counterfeits. A Node/Express + MongoDB backend with an Ethereum ' +
      'smart-contract layer so provenance records are tamper-evident, plus JWT ' +
      'auth and PDF certificate generation. University capstone project.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Solidity / Hardhat', 'ethers.js'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/AntiqueSystem',
    note: '',
  },
  {
    name: 'Identity',
    blurb:
      'A biometric authentication system built to practise secure SDLC / ' +
      'DevSecOps. A FastAPI backend implementing role-based access control, ' +
      'TOTP two-factor auth, anti-spoofing liveness checks, and encrypted ' +
      'biometric templates (raw images are never stored), with a native Kotlin ' +
      'Android client.',
    stack: ['Python', 'FastAPI', 'Kotlin / Android', 'Cryptography'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/Identity',
    note: '',
  },
  {
    name: 'CryptoWallet',
    blurb:
      'An Ethereum crypto wallet. An Express backend uses ethers.js to talk to ' +
      'the network — sending transactions and reading balances — behind a React ' +
      'front end.',
    stack: ['Node.js', 'Express', 'ethers.js', 'React'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/CryptoWallet',
    note: '',
  },
  {
    name: 'WEThair',
    blurb:
      'A native Android weather app in Java. Search any city, save multiple ' +
      'locations, and view current conditions plus a 5-day forecast with charts. ' +
      'Uses Retrofit against the OpenWeatherMap API, with ViewModel/LiveData ' +
      'architecture and device-location support.',
    stack: ['Java', 'Android', 'Retrofit', 'MPAndroidChart'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/WEThair',
    note: '',
  },
]
