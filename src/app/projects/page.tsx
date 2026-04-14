"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Project = {
  name: string;
  emoji: string;
  description: string;
  tech: string[];
  status: string;
  npm?: string;
  github: string;
  highlights: string[];
  category: string;
};

const projects: Project[] = [
  {
    name: "WD Agent",
    emoji: "\u{1F916}",
    description:
      "A local AI agent operating system for your terminal. Think, act, execute, persist \u2014 all powered by Claude and WorthDoing Capabilities.",
    tech: ["TypeScript", "Node.js", "Claude API"],
    status: "Active Development",
    npm: "wd-agent",
    github: "https://github.com/Worth-Doing/wd-agent",
    highlights: [
      "Interactive CLI",
      "22+ capabilities",
      "Sequential agent loop",
      "Persistent conversations",
    ],
    category: "AI Tools",
  },
  {
    name: "WorthDoing Capabilities (Python)",
    emoji: "\u{1F40D}",
    description:
      "Production-grade capability package for portable, composable agent actions. Runtime, registry, CLI, and 31 built-in capabilities.",
    tech: ["Python", "Pydantic", "httpx", "Typer"],
    status: "Active Development",
    github: "https://github.com/Worth-Doing/worthdoing-capabilities",
    highlights: ["31 capabilities", "188 tests", "YAML contracts", "CLI (wdcap)"],
    category: "Capabilities",
  },
  {
    name: "WorthDoing Capabilities (TypeScript)",
    emoji: "\u{1F4E6}",
    description:
      "TypeScript SDK \u2014 same capabilities on npm. Zero dependencies, ESM + CJS, fully typed, with interactive CLI explorer.",
    tech: ["TypeScript", "Node.js"],
    status: "Published on npm",
    npm: "worthdoing-capabilities",
    github: "https://github.com/Worth-Doing/worthdoing-capabilities-js",
    highlights: ["Zero deps", "ESM + CJS", "Interactive CLI", "Typed clients"],
    category: "Capabilities",
  },
  {
    name: "AI Playground",
    emoji: "\u{1F3AE}",
    description:
      "A unified AI playground to explore, test, compare, and understand 350+ AI models from 55+ providers through OpenRouter.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    status: "Production Ready",
    github: "https://github.com/Worth-Doing/ai-playground",
    highlights: [
      "350+ models",
      "Compare Lab",
      "Embeddings Lab",
      "Image Lab",
      "Cost Tracker",
    ],
    category: "AI Tools",
  },
  {
    name: "Local LLM Inference",
    emoji: "\u26A1",
    description:
      "Custom C++ inference engine for Apple Silicon. Run GGUF models locally with maximum performance and zero cloud dependency.",
    tech: ["C++", "Metal", "Next.js", "TypeScript"],
    status: "Active Development",
    github: "https://github.com/Worth-Doing/local-llm-inference",
    highlights: [
      "Custom C++ engine",
      "Apple Silicon optimized",
      "GGUF support",
      "Web UI",
    ],
    category: "Infrastructure",
  },
  {
    name: "WorthDoing Website",
    emoji: "\u{1F310}",
    description:
      "Official website and landing page for WorthDoing AI. Built with Next.js 15, TypeScript, and Tailwind CSS 4.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    status: "Active Development",
    github: "https://github.com/Worth-Doing/worthdoing-website",
    highlights: ["Dark/light theme", "Responsive", "Zero UI deps", "Static export"],
    category: "Infrastructure",
  },
  {
    name: "Brand Assets",
    emoji: "\u{1F3A8}",
    description:
      "Official logo and brand assets \u2014 12 variants in SVG and PNG. Neural network icon with blue\u2192cyan\u2192green gradient.",
    tech: ["SVG", "PNG"],
    status: "Complete",
    github: "https://github.com/Worth-Doing/brand-assets",
    highlights: ["12 variants", "Vector SVG", "Dark & light", "Favicon included"],
    category: "Infrastructure",
  },
];

const categories = ["All", "AI Tools", "Capabilities", "Infrastructure"] as const;

// ---------------------------------------------------------------------------
// Tech badge colour map
// ---------------------------------------------------------------------------

const techColors: Record<string, string> = {
  TypeScript:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Python:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  "C++": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "Node.js":
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Next.js":
    "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
  React: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  TailwindCSS:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Metal:
    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
};

const defaultTechColor =
  "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";

// ---------------------------------------------------------------------------
// Status badge helper
// ---------------------------------------------------------------------------

function statusColor(status: string) {
  if (status === "Published on npm" || status === "Production Ready") {
    return "bg-emerald-500";
  }
  if (status === "Active Development") {
    return "bg-blue-500";
  }
  return "bg-gray-400 dark:bg-gray-500";
}

// ---------------------------------------------------------------------------
// Icons (inline SVGs to avoid extra deps)
// ---------------------------------------------------------------------------

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0h-2.666V8.667h5.334v5.331h-2.668v1.332zm12-5.331v4h-2.668v-4h-1.332v4h-1.334v-4h-1.332v4h-2.668V8.667h9.334zM11.332 12v1.332h1.336V10h-1.336V12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.182a.75.75 0 01.75-.75h4a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V6.56l-5.22 5.22a.75.75 0 11-1.06-1.06l5.22-5.22H12.25a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ----------------------------------------------------------------- */}
      {/* Hero */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* faint gradient backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #3b82f6 0%, #06b6d4 40%, #22c55e 100%)",
          }}
        />

        <div className="mx-auto max-w-5xl px-6 pt-28 pb-16 text-center sm:pt-36 sm:pb-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Open-source tools powering the next generation of AI applications.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Filter tabs */}
      {/* ----------------------------------------------------------------- */}
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-6 pb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeCategory === cat
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* ----------------------------------------------------------------- */}
      {/* Card grid */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={project.name}>
                      {project.emoji}
                    </span>
                    <h2 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      {project.name}
                    </h2>
                  </div>

                  {/* Status badge */}
                  <span className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${statusColor(
                        project.status
                      )}`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-1.5">
                      <span className="text-green-500">&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        techColors[t] ?? defaultTechColor
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer — links */}
              <div className="flex items-center gap-3 border-t border-gray-100 px-6 py-4 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                  <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
                </a>

                {project.npm && (
                  <a
                    href={`https://www.npmjs.com/package/${project.npm}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <NpmIcon className="h-4 w-4" />
                    npm
                    <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
