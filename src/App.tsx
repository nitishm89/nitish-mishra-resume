import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillIcons = {
  "Cloud Platforms": Cloud,
  "Containers & Platform Engineering": Layers3,
  "DevOps & Automation": Sparkles,
  "Architecture & Governance": ShieldCheck,
  "Modern Technologies": Bot,
} as const;

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const assetBase = import.meta.env.BASE_URL;
  const profileImage = `${assetBase}assets/profile-photo.jpeg`;
  const resumeUrl = `${assetBase}assets/nitish-mishra-resume.pdf`;

  return (
    <div className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="section-grid pt-4">
          <div className="flex items-center justify-between rounded-full border border-white/80 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6">
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                NM
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  {portfolio.name}
                </p>
                <p className="text-xs text-slate-500">{portfolio.title}</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                asChild
                variant="ghost"
                className="rounded-full border border-slate-200 bg-white/80 px-5"
              >
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
              <Button
                asChild
                className="rounded-full px-5"
              >
                <a
                  href={resumeUrl}
                  download
                >
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="section-grid lg:hidden"
            >
              <div className="mt-3 rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-panel backdrop-blur-xl">
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm font-semibold text-slate-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download Resume
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section
          id="home"
          className="scroll-mt-24"
        >
          <BackgroundPaths
            title={portfolio.name}
            eyebrow={portfolio.eyebrow}
            description={portfolio.summary}
            primaryAction={{ href: "#projects", label: "Explore Projects" }}
            secondaryAction={{
              href: resumeUrl,
              label: "Download Resume",
              download: true,
            }}
            media={
              <div className="relative mx-auto max-w-[520px]">
                <div className="surface-card relative z-10 overflow-hidden p-4 sm:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.04),transparent_52%)]" />
                  <div className="relative rounded-[24px] border border-white/80 bg-gradient-to-br from-slate-100 via-white to-amber-50 p-3 shadow-inner">
                    <img
                      src={profileImage}
                      alt="Portrait of Nitish Mishra"
                      className="h-[520px] w-full rounded-[20px] object-cover object-top"
                    />
                  </div>

                  <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                    {portfolio.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4"
                      >
                        <p className="text-2xl font-extrabold text-slate-950">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </section>

        <div className="section-grid -mt-16 pb-24">
          <motion.section
            id="about"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="About"
              title="Architecture-minded cloud engineering with hands-on delivery."
              description="I work across enterprise cloud platforms with a bias for automation, security, and scalable operations. My goal is to make complex infrastructure easier to govern, faster to deliver, and more resilient in production."
            />

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="surface-card p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-slate-950/5 p-3 text-slate-900">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-slate-950">
                    What I bring
                  </h3>
                </div>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  {portfolio.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  {portfolio.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="surface-card p-7">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                        Based In
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-950">
                        {portfolio.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="surface-card p-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
                    {portfolio.education}
                  </p>
                </div>

                <div className="surface-card p-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Reach Out
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <a
                      href={portfolio.emailHref}
                      className="flex items-center gap-3 hover:text-slate-950"
                    >
                      <Mail className="h-4 w-4" />
                      {portfolio.email}
                    </a>
                    <a
                      href={portfolio.phoneHref}
                      className="flex items-center gap-3 hover:text-slate-950"
                    >
                      <Phone className="h-4 w-4" />
                      {portfolio.phone}
                    </a>
                    <a
                      href={portfolio.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 hover:text-slate-950"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="Skills"
              title="Multi-cloud, automation, platform reliability, and GenAI."
              description="My toolkit spans enterprise cloud design, container platforms, automation, governance, and operational excellence."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {portfolio.skills.map((skillGroup) => {
                const Icon = skillIcons[skillGroup.title as keyof typeof skillIcons];

                return (
                  <motion.div
                    key={skillGroup.title}
                    className="surface-card p-7"
                    {...fadeInUp}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-slate-950 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {skillGroup.title}
                      </h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            id="experience"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="Experience"
              title="Enterprise roles shaped around architecture, automation, and reliability."
              description="From software engineering foundations to cloud architecture and platform engineering, each role deepened my focus on scalable infrastructure and operational excellence."
            />

            <div className="relative space-y-6 before:absolute before:left-[22px] before:top-8 before:hidden before:h-[calc(100%-4rem)] before:w-px before:bg-slate-200 lg:before:block">
              {portfolio.experience.map((item) => (
                <motion.div
                  key={`${item.company}-${item.period}`}
                  className="surface-card relative p-7 lg:ml-14"
                  {...fadeInUp}
                >
                  <div className="absolute -left-[70px] top-8 hidden h-11 w-11 items-center justify-center rounded-full border border-white bg-slate-950 text-white shadow-lg lg:flex">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base font-medium text-slate-700">
                        {item.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {item.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 text-sm leading-7 text-slate-600"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="certifications"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="Certifications"
              title="Cloud, AI, and engineering credentials built around delivery."
              description="These certifications complement the practical enterprise work behind architecture, automation, and platform operations."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.certifications.map((certification) => (
                <motion.div
                  key={certification}
                  className="surface-card flex items-start gap-4 p-6"
                  {...fadeInUp}
                >
                  <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-800">
                    {certification}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="Projects"
              title="Selected initiatives pulled directly from real enterprise work."
              description="These project highlights are based on the platforms, prototypes, and automation initiatives described across the provided resume and profile."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              {portfolio.projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className={cn(
                    "surface-card overflow-hidden p-7",
                    index % 2 === 0 &&
                      "bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,247,237,0.85))]",
                    index % 2 === 1 &&
                      "bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(240,253,250,0.85))]",
                  )}
                  {...fadeInUp}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                        Featured Initiative
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                        {project.title}
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-slate-950 p-3 text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-700">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.impact}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="scroll-mt-28 py-16"
            {...fadeInUp}
          >
            <div className="surface-card overflow-hidden p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="eyebrow">Contact</div>
                  <h2 className="section-title mt-5">
                    Let&apos;s build the next cloud platform with clarity and momentum.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    {portfolio.contactPitch}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-7"
                    >
                      <a href={portfolio.emailHref}>
                        Email Me
                        <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="rounded-full border border-slate-200 bg-white/80 px-7"
                    >
                      <a
                        href={resumeUrl}
                        download
                      >
                        Download Resume
                        <Download className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: portfolio.email,
                      href: portfolio.emailHref,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: portfolio.phone,
                      href: portfolio.phoneHref,
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/nitishmishra2",
                      href: portfolio.linkedin,
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "github.com/PythonicCloudAI",
                      href: portfolio.github,
                    },
                    {
                      icon: Globe2,
                      label: "Blog",
                      value: "pythoniccloudai.hashnode.dev",
                      href: portfolio.blog,
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="rounded-[24px] border border-slate-200 bg-white/80 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl bg-slate-950 p-3 text-white">
                            <link.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              {link.label}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-900">
                              {link.value}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="pb-10">
        <div className="section-grid">
          <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{portfolio.name} | Senior Cloud Engineer</p>
            <p>Built with React, Tailwind CSS, Framer Motion, and GitHub Pages-ready configuration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
