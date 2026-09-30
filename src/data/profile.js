// ─────────────────────────────────────────────────────────────────────────────
//  EDIT YOUR DETAILS HERE. Everything the site shows comes from this one file.
//  Replace every [BRACKETED] placeholder with your real information, then delete
//  the brackets. Remove any section you don't want (e.g. drop education entries).
//  Copy style matches the Harvard-format résumé: lines start with a verb, and
//  no "I", "my" or "me" anywhere on the page.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ngoc Phu Anh (John) Nguyen',
  // The one line under your name: role + specialty.
  tagline: 'Full-stack developer building and running the systems a business trades on, especially anything that touches money.',
  location: 'ACT, Australia',

  // The public URL this site is served from. Used for the canonical link and the
  // social preview card. If you move to a custom domain, change it here only.
  canonicalUrl: 'https://johnnguyen-portfolio.vercel.app',

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
    'Waiter at a Canberra cafe and sole developer of Muster POS, the point-of-sale ' +
    'system it trades on. Designed it to take card payments at the counter and ' +
    "online, print the kitchen's dockets, run bookings and a loyalty card, and keep " +
    "selling when the internet drops out. Deployed it on the shop's own computer, " +
    'took its card terminal integration through Linkly accreditation, and keep it ' +
    'running. Recent IT graduate seeking a full-stack or payments role.',

  // Group your skills however you like. Add/remove groups and items freely.
  // Kept short and moved below the work on purpose. A list of tool names proves
  // nothing on its own; it is here mainly because keyword screening software reads it.
  skills: [
    { group: 'Languages & data', items: ['JavaScript', 'Java', 'Python', 'SQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
    { group: 'Web', items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Prisma', 'Tailwind CSS'] },
    { group: 'Payments', items: ['Stripe', 'Square', 'Linkly / PC-EFTPOS card terminals'] },
    { group: 'Other', items: ['Android (Java/Kotlin)', 'Solidity', 'Git', 'Vercel', 'Cloudflare', 'Windows server administration'] },
  ],

  // Work history. Most recent first. Delete the array if you have none yet and
  // the section will hide itself.
  experience: [],

  // Education. Delete entries you don't need.
  education: [
    {
      qualification: 'Bachelor of Information Technology',
      institution: 'Crown Institute of Higher Education, Australia',
      period: '2023–2026',
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
    'The point-of-sale system Ichi Cafe trades on every day. It takes card payments ' +
    "in the shop and online, prints the kitchen's dockets, and runs on the shop's " +
    'own computer, so only the customer-facing pages are reachable from the internet.',
  // The engineering decisions that make it portfolio-worthy. Keep these tight.
  // Two groups on purpose: "Running it" is the half most portfolios cannot show.
  // Every claim there is backed by a real test on the shop machine. Never name
  // addresses, remote-access tools or schedules: the cafe is named on this page.
  highlights: [
    {
      group: 'Building it',
      items: [
        "Built the cafe's till in 2026, after working its counter since 2023, to fix what slowed service down and what went wrong under pressure. Maintain it single-handedly; every sale the cafe makes now runs through it.",
        "Integrated three card payment providers (Stripe, Square and the bank's EFTPOS terminal) behind one interface, so the till behaves the same whichever is switched on. Recorded the processor on every sale, so a refund always goes back the way the money came in.",
        "Connected the till straight to the bank's card reader, writing the low-level messaging instead of using a ready-made plugin. Passed Linkly's accreditation in September 2026 (listed in their public directory), letting the cafe move its in-store card payments from Square to its bank's lower card rate that month.",
        'Implemented exact decimal arithmetic for every money calculation, avoiding the small rounding errors ordinary computer maths introduces. Built a report that flags any sale disagreeing with the payment provider by even one cent.',
        'Added online ordering for pickup, a loyalty stamp card, one-off and weekly table bookings, staff clock-in, and the daily sales and tax reporting the owner uses.',
        "Created the cafe's public website as a static site hosted apart from the till, with business details for Google search, delivery links, and an Order Online button that hands customers straight to the till's online ordering. A pre-deploy check catches broken search data and wrong order links, two faults that otherwise fail silently.",
      ],
    },
    {
      group: 'Running it',
      items: [
        'Administer the till remotely on a screenless computer in the back of the shop, outside trading hours, and fix anything that breaks before opening, ahead of staff arriving. Guard every change that could cut off that remote access with a timer that reverts it unless cancelled.',
        "Diagnosed the front printer dropping out mid-service in September: its own network counters showed the till's code opening eight connections for every docket, more than the printer's small buffer could keep up with. Cut that to one connection per docket, left a printer that stops answering alone for 20 seconds instead of retrying into it, and added a daily job that records those counters so a struggling printer shows up in the numbers before staff notice.",
        'Set the machine to switch itself back on after a power cut, tested by pulling the plug at the wall. Added a check after every restart that confirms the till is actually serving and emails what broke if it is not, plus an alert when the machine never checks in at all.',
        'Automated updates after close: 500+ tests run before the till is stopped, and an update that leaves it unhealthy rolls back automatically. Proved both with deliberately broken updates on the live machine; the rollback test caught a bug that would have reported a failed rollback as a success.',
        'Set up nightly backups, kept on the machine and off site, each read back before it counts. Rebuild the newest into a scratch copy of the shop four times a year, because a backup is only proven by restoring it.',
        'Configured Windows security patches to install overnight while holding major upgrades for manual installs, so the operating system cannot change under the shop mid-service.',
      ],
    },
  ],
  stack: ['Next.js 16', 'JavaScript', 'PostgreSQL', 'Prisma', 'Tailwind', 'Stripe', 'Square', 'Linkly / EFTPOS'],
  demoUrl: 'https://dreamy-cafe.vercel.app',
  repoUrl: 'https://github.com/phuanh20001/Muster-POS',
  // The product's own site. Leave '' to hide the button.
  siteUrl: 'https://musterpos.com',
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
      'Developed a marketplace for antiques that records each item’s ownership ' +
      'history on a blockchain, so it cannot be quietly rewritten later, with ' +
      'logins and printable certificates. University capstone project.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Solidity / Hardhat', 'ethers.js'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/AntiqueSystem',
    note: '',
  },
  {
    name: 'Identity',
    blurb:
      'Designed a face-recognition sign-in system to practise security ' +
      'engineering, with checks that reject a photo held up to the camera, a ' +
      'one-time code as a second step, and encrypted biometric data so the ' +
      'original images are never stored.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Kotlin / Android', 'Cryptography'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/Identity',
    note: '',
  },
  {
    name: 'CryptoWallet',
    blurb:
      'Built an Ethereum wallet to send and receive cryptocurrency and check ' +
      'balances, with a React front end over a Node.js backend.',
    stack: ['Node.js', 'Express', 'ethers.js', 'React'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/CryptoWallet',
    note: '',
  },
  {
    name: 'WEThair',
    blurb:
      'Programmed an Android weather app with city search, saved favourites, ' +
      'and current conditions plus a five-day forecast as charts.',
    stack: ['Java', 'Android', 'Retrofit', 'MPAndroidChart'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/WEThair',
    note: '',
  },
]
