import { useState } from "react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Mariam Abdan",
  title: "Cybersecurity Graduate | Working Student | SOC Analyst",
  location: "Bahrain",
  email: "mariamabdan13@gmail.com",
  phone: "+973 3990 3638",
  linkedin: "https://www.linkedin.com/in/mariamabdan",
  cvUrl: "/Logos/Mariam-Abdan-CV.pdf",
};

const quickStats = [
  { value: "2", label: "Major portfolio projects" },
  { value: "2026", label: "Expected graduation" },
  { value: "5+", label: "Workplace experiences" },
  { value: "20+", label: "Core skills shown clearly" },
];

const aboutPoints = [
  "I build secure and usable products, not just technical demos.",
  "My background combines cybersecurity, analytics, and real workplace experience.",
  "I prefer clean layouts, strong contrast, and short sections that are easy to scan.",
  "I like projects that show clear results, thoughtful process, and real-world problem solving.",
];

const educationItems = [
  {
    name: "Bahrain Polytechnic",
    role: "Bachelor of ICT in Cybersecurity",
    dates: "2022 - 2026",
    logo: "/Logos/bahrainpolytechniclogo.png",
  },
  {
    name: "General Assembly",
    role: "Data Analytics Bootcamp",
    dates: "July 2025 - October 2025",
    logo: "/Logos/generalassemblylogo.svg",
  },
  {
    name: "PwC Middle East",
    role: "PwC Elevate Program",
    dates: "December 2024 - March 2025",
    logo: "/Logos/pwclogo.png",
  },
];

const workExperienceItems = [
  {
    name: "Raincode",
    role: "Developer Intern",
    dates: "February 2026 - June 2026",
    logo: "/Logos/raincodelogo.png",
  },
  {
    name: "Lush Cosmetics",
    role: "Sales Associate",
    dates: "February 2024 - June 2026",
    logo: "/Logos/lushlogo.png",
  },
  {
    name: "The Collective Hub",
    role: "IT & Sales Trainee",
    dates: "September 2024 - November 2024",
    logo: "/Logos/thecollectivehublogo.png",
  },
  {
    name: "MENA Angel Investors Summit",
    role: "Team Leader - Volunteer Operations",
    dates: "November 2024 and November 2025",
    logo: "/Logos/MENAtenmoulogo.png",
  },
  {
    name: "Xerox",
    role: "Sales & Admin Coordinator",
    dates: "May 2022 - January 2024",
    logo: "/Logos/xeroxlogo.png",
  },
];

const certifications = [
  {
    title: "Reference Letter",
    issuer: "Tenmou",
    date: "November 2025",
    logo: "/Logos/MENAtenmoulogo.png",
    file: "/Logos/tenmou-cert.jpg",
  },
  {
    title: "PwC Elevate Program",
    issuer: "PwC Middle East",
    date: "December 2024 - March 2025",
    logo: "/Logos/pwclogo.png",
    file: "/Logos/pwc-cert.png",
  },
  {
    title: "Data Analytics Bootcamp",
    issuer: "General Assembly",
    date: "July 2025 - October 2025",
    logo: "/Logos/generalassemblylogo.svg",
    file: "/Logos/genasbm-cert.png",
  },
  {
    title: "Microsoft Power Platform Developer Associate",
    issuer: "Microsoft",
    date: "May 2024",
    logo: "/Logos/microsoftlogo.jpg",
    file: "/Logos/Developer-cert.png",
  },
];

const skills = [
  "OWASP Top 10",
  "NIST Cybersecurity Framework",
  "ISO 27001 Concepts",
  "Authentication and Authorization",
  "JWT Security",
  "Role-Based Access Control",
  "Input Validation",
  "Secure API Design",
  "Suricata IDS",
  "Elastic Stack",
  "Kibana Dashboards",
  "Threat Detection",
  "Flutter",
  "Dart",
  "Supabase",
  "Python",
  "SQL",
  "Power BI",
  "REST APIs",
  "Figma",
];

const projects = [
  {
    id: "amaan",
    title: "Amaan Travel Insurance Application",
    timeline: "February 2026 - May 2026",
    completion: "Completed in May 2026",
    supervisor: "Supervised by Dr. Talha Khan",
    image: "/Logos/amaan/amaan-hero.png",
    summary:
      "A secure travel insurance app that makes policy discovery, comparison, application tracking, and admin management easier through a clean mobile experience and protected backend workflows.",
    impact: [
      "Built a mobile-first experience that is easy to read on phones.",
      "Separated user and admin flows so the product stays simple.",
      "Focused on secure login, access control, and validation.",
    ],
    stack: ["Flutter", "Dart", "Supabase", "Python", "AI Integration", "Secure APIs"],
    role:
      "I contributed to the frontend, backend support, API integration, secure authentication, role-based access, testing, documentation, and demo preparation.",
    screenshots: [
      { src: "/Logos/amaan/amaan-hero.png", label: "Amaan mobile interface" },
      { src: "/Logos/amaan/policy-browsing.png", label: "Policy browsing and comparison" },
      { src: "/Logos/amaan/admin-dashboard.png", label: "Admin dashboard and policy management" },
      { src: "/Logos/amaan/ai-assistant.png", label: "AI assistant experience" },
    ],
    details: [
      "Clear customer journey from browsing to application tracking.",
      "Secure communication for sensitive user and policy data.",
      "Designed to be easy to demo and easy for employers to understand quickly.",
    ],
  },
  {
    id: "securicata",
    title: "Securi-Cata Real-Time Threat Detection Lab",
    timeline: "September 2025 - December 2025",
    completion: "Completed in December 2025",
    supervisor: "Supervised by Mr. Ali AlAali",
    image: "/Logos/securicata/securi-cata-dashboard.png",
    summary:
      "A defensive monitoring lab that turns raw network traffic into readable security intelligence using Suricata, Elastic, Kibana, and automated reporting.",
    impact: [
      "Converted noisy logs into readable security alerts and visuals.",
      "Built dashboards that show attack patterns, source IPs, and ports.",
      "Automated report generation to support incident review.",
    ],
    stack: ["Suricata IDS", "Elastic", "Kibana", "Filebeat", "Python", "Kali Linux"],
    role:
      "I configured the lab, simulated attacks, wrote detection rules, tuned alerts, built dashboards, and generated readable incident reports.",
    screenshots: [
      { src: "/Logos/securicata/elastic-alert-details.png", label: "Elastic alert details" },
      { src: "/Logos/securicata/securi-cata-dashboard.png", label: "Securi-Cata dashboard" },
      { src: "/Logos/securicata/attack-distribution.png", label: "Attack distribution and map view" },
      { src: "/Logos/securicata/report-generation.png", label: "Automated PDF report generation" },
    ],
    details: [
      "Shows practical IDS work, not just theory.",
      "Demonstrates monitoring, analysis, and reporting skills.",
      "Useful for SOC, security analyst, and threat detection roles.",
    ],
  },
];

const featuredHighlights = [
  "Bachelor of ICT in Cybersecurity at Bahrain Polytechnic, expected June 2026",
  "Secure mobile app development and backend integration at Raincode",
  "Data analytics training with Python, SQL, and Power BI",
  "Professional growth through PwC Middle East and real workplace experience",
];

function Icon({ name, size = 20, className = "" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    briefcase: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </>
    ),
    code: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
    check: <path d="m20 6-11 11-5-5" />,
    external: (
      <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </>
    ),
    palette: (
      <>
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6 2 11c0 5.5 4.5 10 10 10h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h1.5A8.5 8.5 0 0 0 22 3.5C19.5 2.5 16 2 12 2z" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s6-5.1 6-11a6 6 0 0 0-12 0c0 5.9 6 11 6 11z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
  };

  return <svg {...props}>{icons[name] || icons.shield}</svg>;
}

function SectionHeading({ icon, eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 ring-1 ring-sky-200">
        <Icon name={icon} size={22} />
      </div>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-6 ${className}`}>
      {children}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <Card className="text-center">
      <p className="text-3xl font-black tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </Card>
  );
}

function TimelineItem({ item }) {
  return (
    <Card className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <img src={item.logo} alt={`${item.name} logo`} className="h-full w-full object-contain p-2" />
      </div>
      <div className="min-w-0">
        <h3 className="font-black text-slate-950">{item.name}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-700">{item.role}</p>
        <p className="mt-1 text-xs text-slate-500">{item.dates}</p>
      </div>
    </Card>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onImageClick }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-slate-200 bg-slate-50 lg:border-b-0 lg:border-r">
          <div className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                {project.completion}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                {project.timeline}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {project.supervisor}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {project.summary}
            </p>
            <div className="mt-5">
              <TagList items={project.stack} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onImageClick({ src: project.image, label: project.title })}
            className="block w-full overflow-hidden border-t border-slate-200 text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </button>
        </div>

        <div className="p-5 md:p-6">
          <div>
            <h4 className="text-lg font-black text-slate-950">What employers should notice</h4>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-sky-700">
                    <Icon name="check" size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-black text-slate-950">My role</h4>
            <p className="mt-3 text-sm leading-7 text-slate-700">{project.role}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-black text-slate-950">Clear takeaway</h4>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              {project.details.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-black text-slate-950">Screenshots</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <button
                  key={shot.label}
                  type="button"
                  onClick={() => onImageClick(shot)}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <img src={shot.src} alt={shot.label} className="h-40 w-full object-cover" />
                  <p className="border-t border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">
                    {shot.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <SectionHeading
        icon="briefcase"
        eyebrow="Proof of growth"
        title="Certifications"
        subtitle="A focused collection of certifications and professional learning programs that support my cybersecurity, analytics, and digital skills."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex h-full flex-col text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <img src={cert.logo} alt={`${cert.issuer} logo`} className="h-full w-full object-contain p-3" />
            </div>
            <h3 className="mt-5 text-lg font-black text-slate-950">{cert.title}</h3>
            <p className="mt-2 text-sm font-semibold text-sky-700">{cert.issuer}</p>
            <p className="mt-1 text-xs text-slate-500">{cert.date}</p>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-800"
            >
              View Certificate <Icon name="external" size={14} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Home({ onImageClick }) {
  const contactLinks = [
    {
      label: "Email me",
      href: `mailto:${PROFILE.email}`,
      icon: "mail",
      style: "bg-slate-950 text-white hover:bg-sky-700",
    },
    {
      label: "LinkedIn",
      href: PROFILE.linkedin,
      icon: "linkedin",
      style: "border border-slate-200 bg-white text-slate-800 hover:border-sky-200 hover:text-sky-800",
    },
    {
      label: "Download CV",
      href: PROFILE.cvUrl,
      icon: "download",
      style: "border border-slate-200 bg-white text-slate-800 hover:border-sky-200 hover:text-sky-800",
      download: true,
    },
  ];

  return (
    <>
      <section className="grid items-center gap-8 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-800">
            <Icon name="shield" size={16} /> Cybersecurity Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Easy to scan, easy to trust, and built for employers.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I am Mariam, a cybersecurity graduate and working student who likes to turn complex ideas into clear, useful systems. This portfolio is designed to be readable on mobile, simple to scroll, and focused on the work that matters most.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            The CV linked here is the updated version you shared. I also removed the old e-card QR section so the portfolio now points directly to the information employers need.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              See Projects <Icon name="arrow" size={18} />
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-800"
            >
              Open CV <Icon name="download" size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Card className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                <Icon name="shield" size={34} />
              </div>
              <h2 className="text-2xl font-black text-slate-950">{PROFILE.title}</h2>
              <p className="mt-3 text-slate-600">
                Clear communication, secure thinking, and polished delivery.
              </p>

              <div className="mt-6 grid gap-3">
                {featuredHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <Icon name="check" size={18} className="mt-1 text-sky-700" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-950 p-4 text-center text-white">
                  <p className="text-2xl font-black">2026</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">Graduate year</p>
                </div>
                <div className="rounded-2xl bg-sky-100 p-4 text-center text-slate-900">
                  <p className="text-2xl font-black">2</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">Featured projects</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center text-slate-900">
                  <p className="text-2xl font-black">5+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">Experiences</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="about" className="py-16">
        <SectionHeading
          icon="briefcase"
          eyebrow="Quick overview"
          title="A little about me"
          subtitle="Short, clear context for employers who want to understand the person behind the projects."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h3 className="text-2xl font-black text-slate-950">What I bring</h3>
            <div className="mt-5 space-y-4 text-sm leading-8 text-slate-700">
              <p>
                I am completing my Bachelor of ICT in Cybersecurity at Bahrain Polytechnic and I like work that combines security, structure, and usability.
              </p>
              <p>
                Alongside study, I have worked in development, retail operations, administration, client support, IT exposure, and event leadership. That mix helps me communicate well and stay organized in fast-moving environments.
              </p>
              <p>
                My goal with this portfolio is simple: make the important information easy to find, easy to read, and easy to remember.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-sky-700" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
            <h3 className="text-2xl font-black text-slate-950">At a glance</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickStats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "Cybersecurity student since 2022",
                "Expected graduation: June 2026",
                "Focus on secure and usable systems",
                "Comfortable working across technical and non-technical tasks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="rounded-full bg-sky-100 p-2 text-sky-800">
                    <Icon name="check" size={16} />
                  </span>
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <SectionHeading
          icon="briefcase"
          eyebrow="Experience"
          title="Education and work experience"
          subtitle="A compact history that gives employers context without making them dig."
        />

        <div className="space-y-10">
          <div>
            <h3 className="mb-5 text-2xl font-black text-slate-950">Education</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {educationItems.map((item) => (
                <TimelineItem key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-black text-slate-950">Work experience</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workExperienceItems.map((item) => (
                <TimelineItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16">
        <SectionHeading
          icon="code"
          eyebrow="Capabilities"
          title="Skills"
          subtitle="A practical mix of cybersecurity, secure development, analytics, and visual tooling."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16">
        <SectionHeading
          icon="database"
          eyebrow="Portfolio focus"
          title="Featured projects"
          subtitle="Each project is presented in a single readable block so employers can understand the problem, the role, the stack, and the outcome quickly."
        />
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onImageClick={onImageClick} />
          ))}
        </div>
      </section>

      <CertificationsSection />

      <section id="contact" className="py-16">
        <SectionHeading
          icon="mail"
          eyebrow="Contact"
          title="Let’s connect"
          subtitle="Direct links only, no QR scan needed."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <h3 className="text-2xl font-black text-slate-950">Contact details</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              I’m open to cybersecurity roles, secure development work, internships, and opportunities where I can keep learning and contributing.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-3">
                <span className="rounded-full bg-sky-100 p-2 text-sky-800">
                  <Icon name="mail" size={16} />
                </span>
                <a className="font-semibold text-slate-800 hover:text-sky-800" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="rounded-full bg-sky-100 p-2 text-sky-800">
                  <Icon name="location" size={16} />
                </span>
                <span className="font-semibold text-slate-800">{PROFILE.location}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="rounded-full bg-sky-100 p-2 text-sky-800">
                  <Icon name="calendar" size={16} />
                </span>
                <span className="font-semibold text-slate-800">CV updated from your uploaded PDF</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel="noreferrer"
                  download={link.download ? true : undefined}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${link.style}`}
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </Card>

          <Card className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
            <h3 className="text-2xl font-black text-slate-950">Want to add video later?</h3>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>1. Put the video file in `public/videos/` so Vite can serve it directly.</li>
              <li>2. Use a video element with controls, a poster image, and a clear title inside the project section.</li>
              <li>3. Add `poster` for a strong thumbnail, and keep the file compressed for mobile.</li>
              <li>4. If the video is large, link to YouTube or Vimeo instead of autoplaying it.</li>
            </ol>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
              <p className="font-black text-slate-950">Free deployment</p>
              <p className="mt-2">
                The easiest free option is Netlify. Build the site with <code>npm run build</code>, then deploy the `dist` folder or connect the repo directly.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default function CybersecurityPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef6fb_100%)] text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-4 md:px-8 md:pt-6">
        <nav className="sticky top-3 z-40 mb-8 rounded-[28px] border border-white/70 bg-white/85 px-4 py-3 shadow-[0_15px_50px_rgba(15,23,42,0.1)] backdrop-blur md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <a href="#top" className="flex items-center gap-3 font-black text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon name="shield" size={22} />
              </span>
              <span>{PROFILE.name}</span>
            </a>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
              {["about", "skills", "projects", "certifications", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="rounded-full px-3 py-2 transition hover:bg-sky-50 hover:text-sky-800"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div id="top">
          <Home onImageClick={setSelectedImage} />
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="mb-4 ml-auto block rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-800"
              >
                Close
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-h-[82vh] w-full rounded-[24px] bg-white object-contain p-2"
              />
              <p className="mt-3 text-center text-sm font-semibold text-white">
                {selectedImage.label}
              </p>
            </div>
          </div>
        ) : null}

        <footer className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            {new Date().getFullYear()} {PROFILE.name}. Built to be easy to read, easy to scroll, and easy to trust.
          </p>
        </footer>
      </div>
    </main>
  );
}
