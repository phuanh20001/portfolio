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
    'running. Outside work, builds Tavernforge, an online tabletop for Dungeons & ' +
    'Dragons, in C# and .NET with one other developer. Recent IT graduate, open to ' +
    'IT roles in Canberra or remote.',

  // Group your skills however you like. Add/remove groups and items freely.
  // Kept short and moved below the work on purpose. A list of tool names proves
  // nothing on its own; it is here mainly because keyword screening software reads it.
  skills: [
    { group: 'Languages & data', items: ['JavaScript', 'C#', 'SQL', 'PostgreSQL'] },
    { group: 'Web', items: ['React', 'Next.js', 'Node.js', 'ASP.NET Core (.NET)', 'Prisma', 'Tailwind CSS'] },
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
      role: 'Software Developer Intern (Project Manager)',
      company: 'Bridgin Automation',
      location: 'Canberra, ACT',
      period: 'Sep–Nov 2026',
      points: [
        'Led a team of 3 to build Koto Kitchen, an ordering system that brings table QR, counter, phone and Uber Eats or DoorDash orders into one kitchen queue, with live order tracking for customers.',
        'Wrote most of the code (Next.js, PostgreSQL, Prisma, live on Vercel): a screen for each kitchen station, a waiter view on the phone, a front counter, email confirmations and a menu and prices screen.',
        'Agreed the operating rules with the team and mentor, split them into 24 tasks and sent weekly reports. Every change went through a pull request, automated checks and review.',
        'Every change had to pass 200+ automated tests on order rules, prices and duplicate orders, and all 104 checks on real phones passed.',
      ],
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
    {
      role: 'Volunteer Web Developer',
      company: 'Our Lady of the Sacred Heart Parish',
      location: 'West Belconnen, ACT',
      period: 'Nov 2026–Present',
      points: [
        'Designed three website options for the parish to choose from, then built a 20-page draft of the chosen design, easy to read on phones. Now moving it onto the parish’s Framer site.',
      ],
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
            "Kept it cheap to run, because it started as a self-funded project: free, open-source tools, one small computer in the shop instead of paid cloud hosting, and tills on devices the cafe already had, so the only running cost is the domain name for the online ordering and the website. For comparison, Lightspeed's cheapest restaurant plan in Australia is $79 a month for one register, and online ordering (+$59), bookings (+$69) and each extra register (+$39) cost extra, which comes to $246 a month for those three (Lightspeed's own pricing page, November 2026).",
            "Made budget part of the design, and left business choices to the owner: before the card terminal change, set out each provider's fees side by side so the owner could choose, which moved in-store payments to the bank's lower card rate.",
            'Designed it around how the shop runs: it lives on a computer in the shop, so orders and cash sales keep going if the internet drops, and it works on hardware the shop chooses.',
            'Wrote the documents a live shop needs: a launch checklist, a guide for when something goes wrong, a one-page staff guide, and a plan for moving to a new computer safely.',
            'Developed it with AI coding agents (Claude Code) with guardrails: a written plan the agents follow, automatic checks on anything that could cut access to the live till or take the shop offline, and 700+ automated tests on payments, refunds, prices and security that every release must pass.',
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
            "Built the till's direct connection to the bank's card terminal. Passed accreditation in September 2026 with Linkly, the company that connects tills to bank terminals (listed in their public directory), letting the cafe move its in-store card payments from Square to its bank's lower card rate that month.",
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
            'Every update must pass 700+ automated tests first. Over half check card payments, refunds and what happens when the card terminal drops out; the rest check prices, discounts and vouchers, the security that stops a customer changing a price, kitchen dockets and reports. They use a fake card terminal that replays real messages recorded from the terminal software, and they run on every push and again on the shop computer before each update, because a bad release stops the shop trading.',
            'Automated updates after close: an update that leaves the till unhealthy undoes itself. Proved it with deliberately broken updates on the live machine outside trading hours, which caught a bug that would have reported a failed undo as a success.',
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

// Second project, shown under Muster POS with less weight. A hobby that came from
// the developers' own D&D group, not coursework. The repository stays PRIVATE (it
// may hold Wizards of the Coast material): code on request only, never the
// database. Say "trialled", not "in use", until the group plays on it regularly.
export const sideProject = {
  name: 'Tavernforge',
  label: 'Hobby project, built in a team of two',
  status: 'Trialled with the group in November 2026',
  note: 'Private repository, code on request',
  blurb:
    'An online tabletop for Dungeons & Dragons, started with one other developer for ' +
    'the group they play in. Every game needed three apps: Owlbear Rodeo for maps and ' +
    'tokens, D&D Beyond for character sheets, and Discord for dice. Tavernforge puts ' +
    "the whole game in one place, with every player's screen updating live.",
  sections: [
    {
      title: 'Role in a team of two',
      items: [
        'Pitched the idea to the group: one place for the whole game, instead of switching between three apps.',
        'Main area: the Windows installer, backups and updates, and the load test that found the fog freeze. Every other part was read and discussed together before it was built.',
      ],
    },
    {
      title: 'What it does',
      items: [
        'The DM prepares scenes before the game: maps, tokens, drawings and fog of war that is opened up as the group explores. Players see only what the DM shows, and every move, ping, roll and message appears on every screen straight away.',
        'Players import their characters from D&D Beyond PDFs. A rules engine works out each character sheet from the choices made, and warns about a rule break instead of blocking it.',
        'Chat with dice commands, private whispers and rolls only the DM can see, plus turn-based combat where the rules engine works out attacks, damage and conditions and the DM keeps the final say.',
      ],
    },
    {
      title: 'How it is built',
      items: [
        'An ASP.NET Core (.NET 10) server split into 8 modules (accounts, campaigns, images, scenes, dice, rules content, characters and combat), each with its own database schema. Automatic architecture tests stop one module reaching into another.',
        'SignalR keeps every table in sync. Changes to one campaign are applied one at a time, in order, and a player who loses connection gets a fresh copy of the table when they reconnect.',
        'A React and TypeScript front end with a canvas map editor, served by the same server.',
        'Safe to open to the internet: no open sign-up (the host creates every account), limits on login attempts and requests, protection against forged requests, and an account lock after 10 wrong passwords in 15 minutes.',
        "Runs on the host's own Windows PC: one installer sets up the app and its database, players join over a secure link, backups run on their own, and updates download only the files that changed (29 of 1,920 in the first test). First stable release on 14 November 2026.",
      ],
    },
    {
      title: 'How we work',
      items: [
        'Every feature starts as a written spec, then a plan for each stage, code review and a test report before it is merged. About 100 design decisions are written down with the reasons behind them.',
        'Tested at every level: xUnit for the rules engine and the server, Vitest for screen components, Playwright for tests that play through the app in a real browser, and a load test.',
        'The load test (15 players across 3 tables) found that drawing a lot of fog froze token moves for everyone, because each point of fog was saved as a separate object. Fog now saves as one block, and the largest map saves in 0.37 seconds instead of over 2 minutes.',
      ],
    },
  ],
  stack: ['C# / .NET 10', 'ASP.NET Core', 'SignalR', 'React + TypeScript', 'PostgreSQL', 'Cloudflare Tunnel'],
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
      'antiques that records each expert’s authenticity decision on a blockchain, so ' +
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
