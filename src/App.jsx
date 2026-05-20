import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Mariam Abdan",
  title: "Cybersecurity Graduate | Working Student | SOC Analyst",
  location: "Bahrain",
  email: "mariamabdan13@gmail.com",
  phone: "+973 3990 3638",
  linkedin: "https://www.linkedin.com/in/mariamabdan",
  github: "https://github.com/your-github",
  cvUrl: "/Logos/Mariam-Abdan-CV.pdf",
};

const educationItems = [
  { name: "Bahrain Polytechnic", role: "Bachelor Of ICT In Cybersecurity", dates: "2022 – 2026", logo: "/Logos/bahrainpolytechniclogo.png" },
  { name: "General Assembly", role: "Data Analytics Bootcamp", dates: "July 2025 – October 2025", logo: "/Logos/generalassemblylogo.svg" },
  { name: "PwC Middle East", role: "PwC Elevate Program", dates: "December 2024 – March 2025", logo: "/Logos/pwclogo.png" },
];

const workExperienceItems = [
  { name: "Raincode", role: "Developer Intern", dates: "February 2026 – June 2026", logo: "/Logos/raincodelogo.png" },
  { name: "Lush Cosmetics", role: "Sales Associate", dates: "February 2024 – June 2026", logo: "/Logos/lushlogo.png" },
  { name: "The Collective Hub", role: "IT & Sales Trainee", dates: "September 2024 – November 2024", logo: "/Logos/thecollectivehublogo.png" },
  { name: "MENA Angel Investors Summit", role: "Team Leader – Volunteer Operations", dates: "November 2025 & November 2024", logo: "/Logos/MENAtenmoulogo.png" },
  { name: "Xerox", role: "Sales & Admin Coordinator", dates: "May 2022 – January 2024", logo: "/Logos/xeroxlogo.png" },
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
    date: "December 2024 – March 2025",
    logo: "/Logos/pwclogo.png",
    file: "/Logos/pwc-cert.png",
  },
  {
    title: "Data Analytics Bootcamp",
    issuer: "General Assembly",
    date: "July 2025 – October 2025",
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
  "Authentication & Authorization",
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

const projectCards = [
  {
    id: "amaan",
    title: "Amaan Travel Insurance Application",
    tagline: "Secure AI-powered travel insurance, built from idea to working product.",
    timeline: "February 2026 – May 2026",
    completed: "Completed May 2026",
    supervisor: "Supervised By Dr. Talha Khan",
    tags: ["Senior Year Project", "Flutter", "Dart", "Supabase", "Python", "AI Integration", "Secure APIs"],
    image: "/Logos/amaan/amaan-hero.png",
    summary: "Amaan is a secure travel insurance platform designed to make policy discovery, comparison, application tracking, and admin management easier through a clean mobile experience and protected backend workflows.",
  },
  {
    id: "securi-cata",
    title: "Securi-Cata: Real-Time Network Threat Detection & Analytics",
    tagline: "An in-house IDS lab turning raw network traffic into visible security intelligence.",
    timeline: "September 2025 – December 2025",
    completed: "Completed December 2025",
    supervisor: "Supervised By Mr. Ali AlAali",
    tags: ["In-House Project", "Suricata IDS", "Elastic", "Kibana", "Filebeat", "Python", "Kali Linux"],
    image: "/Logos/securicata/securi-cata-dashboard.png",
    summary: "Securi-Cata is a defensive monitoring project where I built a full detection pipeline using Suricata, Elastic, and Kibana to simulate attacks, capture alerts, visualize threats, and generate incident reports.",
  },
];

const amaanScreenshots = [
  { src: "/Logos/amaan/amaan-hero.png", label: "Amaan Final Mobile Interface" },
  { src: "/Logos/amaan/policy-browsing.png", label: "Policy Browsing And Comparison" },
  { src: "/Logos/amaan/admin-dashboard.png", label: "Admin Dashboard And Policy Management" },
  { src: "/Logos/amaan/ai-assistant.png", label: "AI Travel Assistant Experience" },
];

const securiCataScreenshots = [
  { src: "/Logos/securicata/elastic-alert-details.png", label: "Suricata Alert Details In Elastic" },
  { src: "/Logos/securicata/securi-cata-dashboard.png", label: "Elastic Securi-Cata Dashboard" },
  { src: "/Logos/securicata/attack-distribution.png", label: "Attack Distribution And Map View" },
  { src: "/Logos/securicata/report-generation.png", label: "Automated PDF Report Generation" },
];

const amaanProcess = [
  {
    step: "01",
    title: "Research & Planning",
    text: "I began by understanding the problem space: travel insurance can feel confusing, slow, and scattered. I mapped the main users, planned the customer and admin journeys, and identified where security mattered most: login, user data, policy records, admin access, and API communication.",
  },
  {
    step: "02",
    title: "System Design",
    text: "I shaped the app into clear modules: authentication, policy browsing, application handling, admin dashboard, data services, and AI support. The architecture focused on keeping the mobile frontend simple while protecting backend access and sensitive actions.",
  },
  {
    step: "03",
    title: "Build & Integration",
    text: "I developed Flutter interfaces, connected services through APIs, supported backend and data processing tasks using Python, and integrated secure workflows around authentication, role-based access, and protected communication.",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    text: "The final phase focused on debugging, improving UI and UX, testing flows, tightening validation, and preparing the application as a presentable senior-year product with clear documentation and a polished demo experience.",
  },
];

const securiCataProcess = [
  {
    step: "01",
    title: "Research & Planning",
    text: "I studied IDS workflows, network monitoring basics, Suricata rule logic, Elastic dashboards, and common attack patterns. The goal was to create a lab that behaved like a small SOC monitoring pipeline.",
  },
  {
    step: "02",
    title: "Environment Setup",
    text: "I configured Linux virtual machines, network interfaces, Suricata IDS, Filebeat, Elastic, and Kibana so traffic could be captured, parsed, shipped, indexed, and visualized.",
  },
  {
    step: "03",
    title: "Attack Simulation & Detection",
    text: "Using Kali Linux, I simulated activity such as port scanning, brute-force attempts, and suspicious web traffic. I wrote custom Suricata rules to detect patterns and tuned them using threshold-based alerting.",
  },
  {
    step: "04",
    title: "Analytics & Reporting",
    text: "I created Kibana dashboards for alert signatures, source IPs, destination ports, attack trends, and map views. Then I automated PDF report generation using Python to turn alert data into readable incident summaries.",
  },
];

const aboutHighlights = [
  "Bachelor Of ICT In Cybersecurity At Bahrain Polytechnic, Expected Graduation June 2026",
  "Hands-On Secure App Development Through Raincode And The Amaan Senior Year Project",
  "Data Analytics Training With General Assembly Using Python, SQL, Power BI, And Reporting",
  "Professional Growth Through PwC Middle East Elevate Program",
  "Working Student Experience Across Technology, Retail Operations, Administration, Client Support, IT Exposure, And Event Leadership",
];

const contactVCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${PROFILE.name}\nTITLE:${PROFILE.title}\nEMAIL:${PROFILE.email}\nTEL:${PROFILE.phone}\nADR:;;${PROFILE.location};;;;\nURL:${PROFILE.linkedin}\nEND:VCARD`;

function qrUrl(data) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}`;
}

function runPortfolioTests() {
  console.assert(Boolean(PROFILE.name), "Profile name is required");
  console.assert(projectCards.length === 2, "Portfolio should include two featured projects");
  console.assert(projectCards.some((project) => project.id === "amaan"), "Amaan project should exist");
  console.assert(projectCards.some((project) => project.id === "securi-cata"), "Securi-Cata project should exist");
  console.assert(educationItems.length >= 1, "Education section should include at least one item");
  console.assert(workExperienceItems.length >= 1, "Work experience section should include at least one item");
  console.assert(qrUrl(PROFILE.email).includes(encodeURIComponent(PROFILE.email)), "QR function should encode input data");
}

runPortfolioTests();

function Icon({ name, size = 22, className = "" }) {
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

  const paths = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></>,
    external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14 21 3" /></>,
    qr: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h2v2h-2z" /><path d="M18 14h3v3" /><path d="M14 18h2v3" /><path d="M18 21h3" /></>,
    code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
    database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" /></>,
    check: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>,
    palette: <><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6 2 11c0 5.5 4.5 10 10 10h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h1.5A8.5 8.5 0 0 0 22 3.5C19.5 2.5 16 2 12 2z" /></>,
  };

  return <svg {...props}>{paths[name] || paths.shield}</svg>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 ${className}`}>{children}</div>;
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
        <Icon name={icon} size={24} />
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{subtitle}</p> : null}
    </div>
  );
}

function HeroImage({ src, alt }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-inner">
      <img src={src} alt={alt} className="h-72 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow">{project.completed}</div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{project.supervisor}</p>
        <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold text-slate-700">{project.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{project.summary}</p>
        <div className="mt-5"><TagList items={project.tags.slice(0, 5)} /></div>
        <button onClick={() => onOpen(project.id)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700">
          View Case Study <Icon name="arrow" size={16} />
        </button>
      </div>
    </Card>
  );
}

function ProjectCaseStudy({ project, type, process, screenshots, onBack, onImageClick }) {
  const isAmaan = type === "amaan";

  if (!project) {
    return (
      <section className="py-10">
        <Card>
          <h1 className="text-2xl font-black text-slate-950">Project Not Found</h1>
          <button onClick={onBack} className="mt-4 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">Back To Portfolio</button>
        </Card>
      </section>
    );
  }

  const planningFocus = isAmaan
    ? ["User Journey And Admin Journey", "Secure Login And Protected Sessions", "Policy Data Structure", "API Communication", "AI Assistant Use Cases"]
    : ["Virtual Lab Layout", "Network Interface Setup", "Attack Simulation Plan", "Custom Rule Design", "Dashboard And Reporting Metrics"];

  const codeSnippet = isAmaan
    ? `Future<void> secureApiCall() async {
  final token = await authService.getToken();
  final response = await http.get(
    Uri.parse(apiUrl),
    headers: {"Authorization": "Bearer $token"},
  );
}`
    : `alert tcp any any -> any any (flags:S; msg:"CUSTOM: Nmap SYN Scan Detected"; threshold:type both, track by_src, count 100, seconds 30; sid:2000001; rev:1;)
alert tcp any any -> any any (msg:"CUSTOM: SSH BruteForce Attempt Detected"; flags:S; threshold:type both, track by_src, count 100, seconds 10; sid:2000002; rev:1;)`;

  return (
    <section className="py-10">
      <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:border-cyan-200 hover:text-cyan-800">
        ← Back To Portfolio
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-800">
            <Icon name="calendar" size={15} /> {project.completed}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#001f54] md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-xl font-semibold leading-8 text-slate-700">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold">{project.timeline}</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold">{project.supervisor}</span>
          </div>
          <div className="mt-5"><TagList items={project.tags} /></div>
        </div>
        <HeroImage src={project.image} alt={project.title} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card>
          <h2 className="text-xl font-black text-slate-950">1. Project Overview</h2>
          <p className="mt-3 text-sm font-bold text-cyan-800">The Brief</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {isAmaan ? "Create a secure travel insurance application that simplifies policy discovery, application handling, and admin management while keeping security and usability at the center." : "Build a real-time network threat detection and analytics project that can capture traffic, detect suspicious behavior, visualize alerts, and support incident reporting."}
          </p>
          <p className="mt-4 text-sm font-bold text-cyan-800">My Role</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {isAmaan ? "I contributed across the senior-year project lifecycle: frontend development, backend support, API integration, dashboard functionality, secure authentication, RBAC, testing, documentation, and presentation preparation." : "I engineered the lab workflow from environment setup to detection rules, attack simulation, Kibana dashboarding, packet and alert analysis, and automated PDF reporting."}
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-950">Problem & Solution</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {isAmaan ? "Travel insurance users often face scattered information, unclear policy options, and slow application workflows. Amaan solves this through a guided mobile experience, secure user access, organized policy management, and smart AI-powered support." : "Raw security logs are hard to read without structure. Securi-Cata turns packet activity into meaningful security alerts, dashboard insights, and incident reports that are easier to investigate and explain."}
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-950">Final Deliverable</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {isAmaan ? "A working secure mobile application prototype with user flows, admin policy management, AI-assisted features, protected API communication, and polished demo-ready screens." : "A working IDS monitoring pipeline using Suricata, Elastic, Kibana, Filebeat, custom detection rules, attack simulations, alert dashboards, and generated incident reports."}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#contact" className="rounded-2xl bg-slate-950 px-4 py-2 text-xs font-bold text-white">Contact For Demo</a>
            <a href={PROFILE.github} className="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700">GitHub Placeholder</a>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-2xl font-black text-slate-950">2. Research & Planning</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {isAmaan ? "The project started with understanding the travel insurance journey: what users need before travelling, how policies are reviewed, and how admins manage policy information. I broke the system into user-facing and admin-facing flows, then planned the secure touchpoints before implementation." : "The project started with a clear question: how can I make network threats visible in a small lab environment? I planned the IDS architecture, selected Suricata for detection, Elastic and Kibana for analysis, and Kali Linux for controlled attack simulation."}
          </p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            <p className="font-black text-slate-950">Early Planning Focus:</p>
            <ul className="mt-2 space-y-2">
              {planningFocus.map((item) => (
                <li key={item} className="flex gap-2"><Icon name="check" size={16} className="mt-1 text-cyan-700" />{item}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-slate-950">3. The Process</h2>
          <div className="mt-5 space-y-4">
            {process.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 font-black text-white">{item.step}</div>
                <div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card>
          <h2 className="text-xl font-black text-slate-950">
            {isAmaan ? "Development Snippet" : "Detection Logic & Architecture"}
          </h2>

          {isAmaan ? (
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-cyan-100"><code>{codeSnippet}</code></pre>
          ) : (
            <button
              type="button"
              onClick={() =>
                onImageClick({
                  src: "/Logos/securicata/elastic-alert-details.png",
                  label: "Securi-Cata Detection Logic & Architecture",
                })
              }
              className="mt-4 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left shadow-lg transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex min-h-[220px] items-center justify-center bg-slate-50">
                <img
                  src="/Logos/securicata/elastic-alert-details.png"
                  alt="Securi-Cata Detection Logic & Architecture"
                  className="max-h-[320px] w-full object-contain"
                />
              </div>
              <p className="p-3 text-center text-sm font-semibold text-slate-600">Click To Expand Detection Preview</p>
            </button>
          )}
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-950">Challenge Faced</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {isAmaan ? "The hardest part was balancing a smooth user experience with secure backend behavior. I had to think carefully about authentication, admin access, API protection, and validation without making the app feel complicated for normal users." : "The biggest challenge was making the IDS alerts meaningful instead of noisy. I had to test traffic repeatedly, adjust rule thresholds, validate the alerts, and organize the dashboard so the evidence was understandable."}
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-950">Reflection</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {isAmaan ? "Amaan taught me how much secure development depends on planning, not just coding. If I continue improving it, I would expand testing, strengthen monitoring, and make the AI and admin analytics more advanced." : "Securi-Cata made cybersecurity feel practical and real. I learned how detection rules, packet traffic, logs, dashboards, and reporting all connect. Next, I would add more attack scenarios and stronger alert prioritization."}
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="mb-6 text-center text-2xl font-black text-slate-950">4. Final Screens & Results</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {screenshots.map((shot) => (
            <button
              key={shot.label}
              type="button"
              onClick={() => onImageClick(shot)}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-lg shadow-slate-200/70 transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex min-h-[260px] items-center justify-center bg-slate-50">
                <img src={shot.src} alt={shot.label} className="max-h-[500px] w-full object-contain" />
              </div>
              <p className="p-4 text-center text-lg font-semibold text-slate-600">{shot.label}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceLogoCard({ item }) {
  return (
    <Card className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <img src={item.logo} alt={`${item.name} Logo`} className="h-full w-full object-contain p-2" />
      </div>
      <div>
        <h3 className="font-black text-slate-950">{item.name}</h3>
        <p className="text-sm font-semibold text-slate-700">{item.role}</p>
        <p className="text-xs text-slate-500">{item.dates}</p>
      </div>
    </Card>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-14">
      <SectionTitle
        icon="file"
        title="Certifications"
        subtitle="A focused collection of certifications and professional learning programs that support my cybersecurity, analytics, and digital skills."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex h-full flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <img src={cert.logo} alt={`${cert.issuer} Logo`} className="h-full w-full object-contain p-3" />
            </div>
            <h3 className="mt-5 text-lg font-black text-slate-950">{cert.title}</h3>
            <p className="mt-2 text-sm font-semibold text-cyan-800">{cert.issuer}</p>
            <p className="mt-1 text-xs text-slate-500">{cert.date}</p>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-800"
            >
              View Certificate <Icon name="external" size={14} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Home({ onOpenProject }) {
  const contactQR = "/Logos/Mariam-Linkedin-QR.png";
  const cvQR = "/Logos/Mariam-CV-QR.png";

  return (
    <>
      <section className="grid items-center gap-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
            <Icon name="shield" size={16} /> Cybersecurity Portfolio
          </p>
<h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-950"> Building Secure Ideas Into Real Products.
</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I’m Mariam, a cybersecurity student and working student who enjoys learning fast, building with purpose, and turning complex technical ideas into simple, useful systems. My work moves between secure mobile apps, IDS monitoring, data analytics, dashboards, customer-facing operations, and real-world teamwork.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            In December 2025, I completed Securi-Cata, an in-house threat detection lab supervised by Mr. Ali AlAali. In May 2026, I completed Amaan, my senior-year secure travel insurance application supervised by Dr. Talha Khan. Both projects started from research and planning, went through technical build and testing, and ended as polished products I can confidently present.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-cyan-700">Explore Projects</a>
            <a href={PROFILE.cvUrl} download className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-800"><Icon name="file" size={18} /> Download CV</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-cyan-50">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-200/70 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-white">
                <Icon name="shield" size={42} />
              </div>
              <h2 className="text-2xl font-black text-slate-950">{PROFILE.title}</h2>
              <p className="mt-3 text-slate-600">Passionate, curious, practical, and open to learning across security, software, analytics, and professional teamwork.</p>
              <div className="mt-6 grid gap-3 text-sm">
                {["Cybersecurity Student Since 2022", "Expected Graduation: June 2026", "Working Student With Real Workplace Experience", "Focused On Secure And Usable Systems"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                    <Icon name="check" className="text-cyan-700" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="about" className="py-14">
        <SectionTitle icon="briefcase" title="A Little About Me" subtitle="A balanced snapshot of my journey as a cybersecurity student, working student, and creative problem solver." />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="flex h-full flex-col justify-between bg-white">
            <div>
              <h3 className="text-3xl font-black text-slate-950">Working Student</h3>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-600">
                <p>
                  I am completing my <strong className="text-slate-950">Bachelor Of ICT In Cybersecurity</strong> at Bahrain Polytechnic, expected to graduate in <strong className="text-slate-950">June 2026</strong>.
                </p>
                <p>
                  Alongside my studies, I have worked across development, retail operations, administration, client support, IT exposure, and event leadership.
                </p>
                <p>
                  That mix shaped the way I work: technical, organized, people-aware, adaptable, and always ready to learn something new.
                </p>
                <p>
                  My journey includes hands-on secure app development at Raincode, cybersecurity project work, data analytics training with General Assembly, professional development with PwC Middle East, Microsoft Power Platform exposure, and workplace experience with companies including Lush, Xerox, and The Collective Hub.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-cyan-50 p-4 text-center ring-1 ring-cyan-100">
                <p className="text-3xl font-black text-cyan-700">2022</p>
                <p className="mt-2 text-xs font-bold text-slate-600">Started Cybersecurity Journey</p>
              </div>
              <div className="rounded-2xl bg-cyan-50 p-4 text-center ring-1 ring-cyan-100">
                <p className="text-3xl font-black text-cyan-700">2026</p>
                <p className="mt-2 text-xs font-bold text-slate-600">Expected Graduation</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-gradient-to-br from-cyan-50 to-white text-center">
              <h3 className="text-3xl font-black text-slate-950">Fun Facts About Me</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <Icon name="shield" size={30} className="text-cyan-700" />
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    I love detecting threats, understanding attack behavior, and staying proactive rather than reactive in cybersecurity.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <Icon name="palette" size={30} className="text-cyan-700" />
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    Outside of technology, I enjoy creating art. It keeps me creative, focused, and balanced.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.slice(0, 4).map((item) => (
                <div key={item} className="flex min-h-[132px] items-center gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50">
                  <Icon name="check" size={18} className="shrink-0 text-cyan-700" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <SectionTitle icon="briefcase" title="Education And Work Experience" subtitle="A structured snapshot of my academic, professional, and practical learning journey." />

        <div className="space-y-10">
          <div>
            <h3 className="mb-5 text-2xl font-black text-slate-950">Education</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {educationItems.map((item) => <ExperienceLogoCard key={item.name} item={item} />)}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-black text-slate-950">Work Experience</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workExperienceItems.map((item) => <ExperienceLogoCard key={item.name} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      <CertificationsSection />

      <section id="skills" className="py-14">
        <SectionTitle icon="code" title="Skills" subtitle="A practical blend of cybersecurity, secure development, analytics, dashboards, and implementation tools." />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-800">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-14">
        <SectionTitle icon="database" title="Featured Projects" subtitle="Two major projects, each built from the first idea into a final product with planning, development, testing, and presentation-ready outcomes." />
        <div className="grid gap-6 lg:grid-cols-2">
          {projectCards.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />)}
        </div>
      </section>

      <section id="contact" className="py-14">
        <SectionTitle icon="mail" title="Contact & QR Codes" subtitle="Scan to save my contact details or open my CV quickly." />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card>
            <h3 className="text-xl font-black text-slate-950">Let’s Connect</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">I’m open to learning opportunities, cybersecurity roles, secure development projects, internships, and spaces where I can keep growing technically and professionally.</p>
            <div className="mt-5 space-y-3 text-slate-700">
              <p><strong className="text-slate-950">Email:</strong> {PROFILE.email}</p>
              <p><strong className="text-slate-950">Phone:</strong> {PROFILE.phone}</p>
              <p><strong className="text-slate-950">Location:</strong> {PROFILE.location}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-bold text-white"><Icon name="mail" size={18} /> Email Me</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 font-bold text-slate-800 hover:border-cyan-200"><Icon name="linkedin" size={18} /> LinkedIn</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 font-bold text-slate-800 hover:border-cyan-200"><Icon name="github" size={18} /> GitHub</a>
            </div>
          </Card>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="text-center">
              <h3 className="mb-4 font-black text-slate-950">Contact QR</h3>
              <img src={contactQR} alt="QR Code For Contact Info" className="mx-auto rounded-2xl bg-white p-3 shadow" />
              <p className="mt-4 text-xs leading-5 text-slate-500">Scans as a vCard contact.</p>
            </Card>
            <Card className="text-center">
              <h3 className="mb-4 font-black text-slate-950">CV QR</h3>
              <img src={cvQR} alt="QR Code For CV" className="mx-auto rounded-2xl bg-white p-3 shadow" />
              <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-600">Open CV <Icon name="external" size={14} /></a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CybersecurityPortfolio() {
  const [activeProject, setActiveProject] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedProject = projectCards.find((project) => project.id === activeProject);

  function openProject(id) {
    setActiveProject(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setActiveProject("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <nav className="mb-10 flex items-center justify-between rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 shadow-lg shadow-slate-200/60 backdrop-blur">
          <button onClick={goHome} className="flex items-center gap-3 font-black text-slate-950">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Icon name="shield" size={22} />
            </div>
            <span>{PROFILE.name}</span>
          </button>
          <div className="hidden gap-6 text-sm font-bold text-slate-600 md:flex">
            <button onClick={goHome} className="hover:text-cyan-800">Home</button>
            <a href="#about" onClick={() => setActiveProject("home")} className="hover:text-cyan-800">About</a>
            <a href="#skills" onClick={() => setActiveProject("home")} className="hover:text-cyan-800">Skills</a>
            <a href="#projects" onClick={() => setActiveProject("home")} className="hover:text-cyan-800">Projects</a>
            <a href="#certifications" onClick={() => setActiveProject("home")} className="hover:text-cyan-800">Certifications</a>
            <a href="#contact" onClick={() => setActiveProject("home")} className="hover:text-cyan-800">Contact</a>
          </div>
        </nav>

        {activeProject === "home" ? (
          <Home onOpenProject={openProject} />
        ) : (
          <ProjectCaseStudy
            project={selectedProject}
            type={activeProject}
            process={activeProject === "amaan" ? amaanProcess : securiCataProcess}
            screenshots={activeProject === "amaan" ? amaanScreenshots : securiCataScreenshots}
            onBack={goHome}
            onImageClick={setSelectedImage}
          />
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-5xl font-bold text-white"
                aria-label="Close image preview"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-h-[90vh] w-full rounded-2xl bg-white object-contain"
              />
              <p className="mt-4 text-center text-xl font-semibold text-white">{selectedImage.label}</p>
            </div>
          </div>
        )}

        <footer className="mt-10 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. Cybersecurity portfolio built to present projects clearly, confidently, and professionally.
        </footer>
      </div>
    </main>
  );
}
