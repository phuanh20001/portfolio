// ─────────────────────────────────────────────────────────────────────────────
//  EDIT YOUR DETAILS HERE. Everything the site shows comes from this one file.
//  Replace every [BRACKETED] placeholder with your real information, then delete
//  the brackets. Remove any section you don't want (e.g. drop education entries).
//  Copy style matches the Harvard-format résumé: lines start with a verb, and
//  no "I", "my" or "me" anywhere on the page.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ngoc Phu Anh Nguyen',
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
    'Sole developer of Muster POS, the point-of-sale system a Canberra cafe ' +
    'has traded on since August 2026. Designed it to take card payments at the counter and ' +
    "online, print the kitchen's dockets, run bookings and a loyalty card, and keep " +
    "selling when the internet drops out. Set it up on the shop's own computer, " +
    'got its card terminal connection accredited by Linkly, and keep it ' +
    'running. Recent IT graduate, open to IT roles in Canberra or remote.',

  // Group your skills however you like. Add/remove groups and items freely.
  // Kept short and moved below the work on purpose. A list of tool names proves
  // nothing on its own; it is here mainly because keyword screening software reads it.
  skills: [
    { group: 'Languages & data', items: ['JavaScript', 'SQL', 'PostgreSQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Node.js', 'Prisma', 'Tailwind CSS'] },
    { group: 'Payments & hardware', items: ['Stripe', 'Square', 'Linkly / PC-EFTPOS card terminals', 'ESC/POS receipt printers'] },
    { group: 'Testing & DevOps', items: ['Node.js test runner', 'ESLint', 'GitHub Actions', 'Git', 'PowerShell', 'Cloudflare', 'Vercel'] },
    { group: 'Practices', items: ['AI coding agents (Claude Code) with guardrails', 'CI/CD', 'Windows administration'] },
  ],

  // Work history. Most recent first. Delete the array if you have none yet and
  // the section will hide itself.
  experience: [
    {
      role: 'Software Engineer (Maintenance and Support)',
      company: 'Ichi Cafe',
      location: 'Kippax, ACT',
      period: '2026–Present',
      points: ["Maintain Muster POS, the cafe's till, and build its website and online ordering."],
    },
    {
      role: 'Web Development Intern',
      company: 'Onyamarks',
      period: 'Nov 2025–Feb 2026',
      points: [
        'Designed front-end layouts in Canva and made small code changes for a web design and SEO agency; supported its SEO work, including Google Business Profile updates.',
      ],
    },
    {
      role: 'Waiter',
      company: 'Ichi Cafe',
      location: 'Kippax, ACT',
      period: '2023–Present',
    },
    {
      role: 'Customer and Food Service',
      company: 'Kingsley’s Chicken',
      location: 'Canberra, ACT',
      period: '2023–Present',
      points: ['Cover counter, kitchen and some manager shifts in a high-volume fast-food restaurant.'],
    },
  ],

  // Education. Delete entries you don't need.
  education: [
    {
      qualification: 'Bachelor of Information Technology',
      institution: 'Crown Institute of Higher Education, Canberra, ACT',
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
    since: 'August 2026',
    // The real thing, not the demo. This is the first button on the card.
    liveUrl: 'https://ichicafekippax.com/order',
  },
  // Third-party proof. Leave url '' to hide the line.
  accreditation: {
    label: 'Linkly accredited',
    linkText: "listed in Linkly's directory",
    url: 'https://www.linkly.com.au/technical-resources/accredited-pos-vendors.html',
  },
  // Both hide until filled in. The quote must be the owner's own words (tidied
  // wording only, and he sees it first), and the photo must show no sales
  // figures, customers or staff who haven't agreed.
  testimonial: {
    quote:
      'Muster puts our walk-in and online orders on one screen. We used to run two ' +
      'separate apps, which sometimes confused staff. It also covers transactions, ' +
      'the dashboard, stock counts and staff hours. The biggest benefit is that it ' +
      "works with Linkly, so in the shop we can use our own bank's terminal instead of " +
      'being tied to a generic POS like Square. That gives us same-day settlement and ' +
      'lower transaction fees, which save us a lot of money.',
    author: 'Owner, Ichi Cafe',
  },
  photo: { src: '', alt: 'Muster POS on the counter at Ichi Cafe, with its card terminal and docket printer' },
  blurb:
    'The point-of-sale system Ichi Cafe trades on every day. It takes card payments ' +
    "in the shop and online, prints the kitchen's dockets, and runs on the shop's " +
    'own computer, so only the customer-facing pages are reachable from the internet.',
  // The engineering decisions that make it portfolio-worthy. Keep these tight.
  // Two groups on purpose: "Running it" is the half most portfolios cannot show.
  // The sections inside them let a recruiter jump to one area of the stack.
  // Plain English only: not every recruiter is technical, so tool names and
  // keywords belong in Skills and the stack chips, not in these bullets.
  // Every claim there is backed by a real test on the shop machine. Never name
  // addresses, remote-access tools or schedules: the cafe is named on this page.
  highlights: [
    {
      group: 'Building it',
      sections: [
        {
          title: 'Planning',
          items: [
            "Built the cafe's till in 2026 as a self-funded project, at night alongside hospitality work, after working its counter since 2023, to fix what slowed service down and what went wrong under pressure. Once every in-store sale ran through it, moved into a paid role to maintain it and build the cafe's website and online ordering.",
            'Designed it around how the shop runs: it lives on a computer in the shop, so orders and cash sales keep going if the internet drops, and it works on hardware the shop chooses.',
            'Wrote the documents a live shop needs: a launch checklist, a guide for when something goes wrong, a one-page staff guide, and a plan for moving to a new computer safely.',
            'Developed it with AI coding agents (Claude Code) with guardrails: a written plan the agents follow, automatic checks on anything that could cut access to the live till or take the shop offline, and 700+ automated tests before every release.',
          ],
        },
        {
          title: 'Core features',
          items: [
            'Added the day-to-day tools: combos and add-ons, split bills, cash drawer tracking, end-of-day reports, stock counts, staff clock-in, table bookings, a loyalty stamp card, and the sales and tax reports the owner uses.',
            'Added online ordering for pickup with live order tracking, and a chime on the till so staff see each new paid order straight away.',
            "Created the cafe's public website, kept separate from the till, with its business details for Google search, delivery links, and an Order Online button. An automatic check before each update catches broken search details and wrong links.",
          ],
        },
        {
          title: 'Frontend and database',
          items: [
            'Built the till screens to work by touch or mouse, on an iPad or a desktop, with an on-screen keyboard. An open till keeps its menu if its connection to the shop computer drops.',
            'Designed the database behind it (40 tables), storing money as exact amounts. Changes to it are made so the till can safely go back to the previous version if an update fails.',
          ],
        },
        {
          title: 'Payments',
          items: [
            "Connected three card payment services (Stripe, Square and the bank's terminal), so the till works the same whichever one is switched on. Every sale records which one took it, so a refund goes back the way the money came in.",
            "Built the till's direct connection to the bank's card terminal instead of using a ready-made plugin. Passed accreditation in September 2026 with Linkly, the company that connects tills to bank terminals (listed in their public directory), letting the cafe move its in-store card payments from Square to its bank's lower card rate that month.",
            "Made every money calculation exact to the cent, and built a report that flags any sale that differs from the payment provider's records by even one cent.",
            'Planned for sales that end unclearly: after a crash or power cut, the till checks with the terminal what happened to the last sale and tells staff. A payment nobody can confirm is flagged for checking, not recorded as paid or failed.',
            'Made the system work out every online price itself, so changing a price in the browser does nothing. An online order only goes through once the payment provider confirms it, and it cannot be processed twice.',
          ],
        },
      ],
    },
    {
      group: 'Running it',
      sections: [
        {
          title: 'Hosting and updates',
          items: [
            'Look after the till remotely on a computer with no screen in the back of the shop, outside trading hours, and fix anything that breaks before staff arrive. Any risky change to that remote access undoes itself unless cancelled.',
            'Automated updates after close: 700+ tests run first, and an update that leaves the till unhealthy undoes itself. Proved it with deliberately broken updates on the live machine outside trading hours, which caught a bug that would have reported a failed undo as a success.',
            'Set up nightly backups, kept in the shop and off site, each checked after it is made. Restore one to a test copy of the shop four times a year, because a backup only counts once it has been restored.',
            "Set Windows to install security patches overnight and hold big upgrades for manual installs, so the system can't change during service.",
          ],
        },
        {
          title: 'Hardware and networking',
          items: [
            'Set the computer to turn itself back on after a power cut, tested by pulling the plug at the wall. After every restart it checks the till is really working and emails what broke if not, and an alert goes out if the computer stops checking in.',
            'Fixed the front printer dropping out mid-service in September: its own records showed the till connecting eight times for every docket, more than it could handle. Cut that to one, and added a daily check so a struggling printer shows up before staff notice.',
            "Kept staff screens on the shop's private network and put only the customer pages online, with everything else refused. Tested it from outside with about 70 requests and found no data leak.",
            "Traced a till with no internet to a blocking setting on the shop's router, by showing the router still answered but nothing beyond it did.",
          ],
        },
        {
          title: 'Monitoring and support',
          items: [
            'Gave every error staff can see a short support code (82 so far) that also appears in the logs, so a problem reported from the counter can be found straight away. Anything where money or records may be wrong is marked critical.',
            "Built a separate monitoring service that checks a shop's public pages from outside and emails alerts. Kept it apart from the till on purpose, so it can never stop a sale.",
          ],
        },
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
      'Led a team of 4 as project manager and architect on a marketplace for ' +
      'antiques that records each item’s ownership history on a blockchain, so ' +
      'it cannot be quietly rewritten later, with logins and printable ' +
      'certificates. University capstone project.',
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
      'original images are never stored. University project.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Kotlin / Android', 'Cryptography'],
    demoUrl: '',
    repoUrl: 'https://github.com/phuanh20001/Identity',
    note: '',
  },
]
