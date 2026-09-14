// ─────────────────────────────────────────────────────────────────────────────
//  EDIT YOUR DETAILS HERE. Everything the site shows comes from this one file.
//  Replace every [BRACKETED] placeholder with your real information, then delete
//  the brackets. Remove any section you don't want (e.g. drop education entries).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ngoc Phu Anh (John) Nguyen',
  // The one line under your name. Aim for a role + specialty, e.g.
  // "Full-stack developer — I build production web apps end to end".
  tagline: 'Full-stack developer. I build and look after the systems a business runs on, especially anything that touches money.',
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
    'I work at a Canberra cafe, and I also built the system it trades on. Muster ' +
    "POS takes card payments at the counter and online, prints the kitchen's " +
    'dockets, handles bookings and a loyalty card, and keeps selling when the ' +
    "internet drops out. I wrote it, deployed it on the shop's own computer, and " +
    'I am the one who keeps it running. Working the floor is why it is any good: ' +
    'I built the till I have to use. I have just finished my IT degree and I am ' +
    'looking for a full-stack or payments role.',

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
    'The point-of-sale system Ichi Cafe trades on every day, where I also work the ' +
    "counter. It takes card payments in the shop and online, prints the kitchen's " +
    "dockets, and runs on the shop's own computer, so only the customer-facing " +
    'pages are reachable from the internet. I am its only developer.',
  // The engineering decisions that make it portfolio-worthy. Keep these tight.
  // Two groups on purpose: "Running it" is the half most portfolios cannot show.
  // Every claim there is backed by a real test on the shop machine. Never name
  // addresses, remote-access tools or schedules: the cafe is named on this page.
  highlights: [
    {
      group: 'Building it',
      items: [
        "I have worked the counter at Ichi Cafe since 2023. In 2026 I built the cafe's till, because from the floor I could see what slowed service down and what went wrong under pressure. Every sale the cafe makes now runs through software I wrote and still look after on my own.",
        'The till accepts card payments through three different providers and behaves the same way whichever one is switched on. Each sale remembers who processed it, so a refund always goes back the way the money came in.',
        "For the newest of those I connected the till straight to the bank's card reader, writing the low-level messaging myself instead of using a ready-made plugin. It passed Linkly's accreditation in September 2026 and is listed in their public directory.",
        'Money is worked out exactly, never with the small rounding errors ordinary computer maths introduces, and a report flags any sale that disagrees with the payment provider by even one cent.',
        'Also built alongside the till: ordering online for pickup, a loyalty stamp card, table bookings including repeating weekly ones, staff clock-in, and the daily sales and tax reporting the owner uses.',
      ],
    },
    {
      group: 'Running it',
      items: [
        'The till runs on a small computer in the back of the shop with no screen. I look after it remotely, outside trading hours, and when something breaks before opening it is mine to fix before staff arrive. Before any change that could cut off that remote access, I arm a timer that puts it back unless I cancel it.',
        "In September the front printer started dropping out mid-service. I read the printer's own network counters and found my code was opening eight connections for every docket, more than its small buffer could keep up with. A docket now uses one connection, a printer that stops answering is left alone for 20 seconds instead of being retried into, and a daily job records those counters so a struggling printer can show up in the numbers before staff notice.",
        'It switches itself back on after a power cut, which I tested by pulling the plug at the wall. After every restart a check confirms the till is actually serving and emails me what broke if it is not. If the machine never comes back at all, the missing check-in raises the alert instead.',
        'Updates install themselves after close. The tests run before the till is stopped, and an update that leaves the till unhealthy is rolled back automatically. I proved both with deliberately broken updates on the live machine, and the rollback test caught a bug that would have reported a failed rollback as a success.',
        'Backups run every night, are kept on the machine and off site, and each one is read back before it counts. Four times a year the newest is rebuilt into a scratch copy of the shop, because a backup is only proven by restoring it.',
        'Windows security patches install overnight, but major Windows upgrades are held back until I do them by hand, so the operating system cannot change under the shop mid-service.',
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
      'A marketplace for antiques where each item’s ownership history is ' +
      'recorded on a blockchain, so it cannot be quietly rewritten later. ' +
      'Includes logins and printable certificates. My university capstone ' +
      'project, built with Node.js, Express, MongoDB and Solidity.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Solidity / Hardhat', 'ethers.js'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/AntiqueSystem',
    note: '',
  },
  {
    name: 'Identity',
    blurb:
      'A sign-in system using face recognition, built to practise security ' +
      'engineering. It rejects a photo held up to the camera, asks for a ' +
      'one-time code as a second step, and keeps biometric data encrypted so ' +
      'the original images are never stored. Python and FastAPI, with an ' +
      'Android app in Kotlin.',
    stack: ['Python', 'FastAPI', 'Kotlin / Android', 'Cryptography'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/Identity',
    note: '',
  },
  {
    name: 'CryptoWallet',
    blurb:
      'Send and receive cryptocurrency and check balances, with a React front ' +
      'end over a Node.js backend.',
    stack: ['Node.js', 'Express', 'ethers.js', 'React'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/CryptoWallet',
    note: '',
  },
  {
    name: 'WEThair',
    blurb:
      'Search any city, save the ones you check often, and see current ' +
      'conditions plus a five-day forecast as charts. Written in Java for ' +
      'Android.',
    stack: ['Java', 'Android', 'Retrofit', 'MPAndroidChart'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/WEThair',
    note: '',
  },
]
