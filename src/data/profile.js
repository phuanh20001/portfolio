// ─────────────────────────────────────────────────────────────────────────────
//  EDIT YOUR DETAILS HERE. Everything the site shows comes from this one file.
//  Replace every [BRACKETED] placeholder with your real information, then delete
//  the brackets. Remove any section you don't want (e.g. drop education entries).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ngoc Phu Anh Nguyen',
  // The one line under your name. Aim for a role + specialty, e.g.
  // "Full-stack developer — I build production web apps end to end".
  tagline: 'Full-stack developer who builds and ships production systems, with a focus on payments & integrations',
  location: 'ACT, Australia',

  // Shown in the hero and footer. Delete any you don't use; the icons/links
  // only render for the ones you fill in.
  links: {
    email: 'john.phuanhnguyen.dev@gmail.com',
    github: 'https://github.com/phuanh20001',
    linkedin: 'https://www.linkedin.com/in/john-phuanhnguyen-dev',
    // Optional extras — leave '' to hide:
    website: '',
    resumePdf: '/resume.pdf', // e.g. '/resume.pdf' if you drop a PDF into public/
  },

  // 2–4 sentences. Who you are, what you're good at, what you're looking for.
  about:
    "I'm a full-stack developer who likes taking systems all the way to " +
    'production, not just to a demo. My strongest work is Muster POS, a ' +
    'self-hosted point-of-sale and online-ordering platform that runs the ' +
    'till at Ichi Cafe in Kippax, ACT, prints their dockets, and takes card ' +
    'payments over the counter and online. I care ' +
    'about the unglamorous parts that make software trustworthy: exact money ' +
    'handling, clear security boundaries, and graceful behaviour when the ' +
    'network drops. I have just finished my IT degree and I am looking for a ' +
    'full-stack or payments-integration role where I can keep building things ' +
    'people actually use.',

  // Group your skills however you like. Add/remove groups and items freely.
  skills: [
    { group: 'Languages', items: ['JavaScript', 'Java', 'Python', 'SQL'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Prisma'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite'] },
    { group: 'Payments & Web3', items: ['Stripe', 'Square', 'Linkly / EFTPOS', 'ethers.js', 'Solidity / Hardhat'] },
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
      period: 'Completed 2026',
    },
    {
      qualification: 'Bachelor of English Pedagogy',
      institution: 'Saigon University, Vietnam',
      period: '2018–2023',
    },
  ],
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// The FEATURED project is Muster POS — your strongest asset, already filled in.
// Adjust the copy if you like. Update the demoUrl/repoUrl once the repo is public.

export const featuredProject = {
  name: 'Muster POS',
  // The shop actually running it. This is the credibility line: it says the
  // software has a real user, not just a demo URL. Leave either field blank to
  // hide the line entirely.
  deployment: {
    customer: 'Ichi Cafe, Kippax ACT',
    url: 'https://ichicafekippax.com',
  },
  blurb:
    'A production point-of-sale and online-ordering system for cafés, running ' +
    'the till at Ichi Cafe. It takes card payments over the counter and ' +
    'online, prints real dockets, and is self-hosted on the shop’s own PC, ' +
    'with only the customer-facing routes exposed to the internet.',
  // The engineering decisions that make it portfolio-worthy. Keep these tight.
  highlights: [
    'Three card processors behind one interface (Stripe, Square, and a direct bank-terminal integration), so checkout, split-tender and refunds behave identically whichever is active; every order records which processor charged it, so a refund always routes back to the one that took the money.',
    'A bank EFTPOS terminal integrated at the protocol level rather than through an SDK: binary TCP/IP framing to a CommBank pinpad via Linkly, mid-sale prompts such as signature approval answered from the till, and a durable in-flight record so a crash mid-transaction is recovered on the next boot rather than lost. Built and submitted for Linkly accreditation.',
    'Exact money handling: decimal.js everywhere, never floating-point cents. Server-side price recomputation on every online order, plus a reconciliation report that flags any order drifting from the processor by more than a cent.',
    'A hard LAN/public trust boundary: the full POS and admin stay on the shop network, only customer routes reach the internet through a Cloudflare Tunnel.',
    'Offline-tolerant PWA: cash sales keep working when the internet drops but the local server is up.',
  ],
  stack: ['Next.js 16', 'JavaScript', 'PostgreSQL', 'Prisma', 'Tailwind', 'Stripe', 'Square', 'Linkly / EFTPOS'],
  demoUrl: 'https://dreamy-cafe.vercel.app',
  repoUrl: 'https://github.com/phuanh20001/Muster-POS',
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
      'the network, sending transactions and reading balances, behind a React ' +
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
