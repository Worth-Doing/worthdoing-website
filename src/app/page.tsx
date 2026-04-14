import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Icon components (inline SVG, no external deps)                    */
/* ------------------------------------------------------------------ */

function CapabilityIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function ModelsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" y1="2" x2="12" y2="8.5" />
    </svg>
  );
}

function AcademicIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function FinanceIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: CapabilityIcon,
    title: "Capability-First",
    description:
      "Structured, portable agent actions. 31 capabilities across 8 providers — ready to compose, test, and deploy.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
  },
  {
    icon: ServerIcon,
    title: "Local-First",
    description:
      "Run models locally with zero cloud dependency. Custom C++ inference engine for maximum performance and privacy.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
  },
  {
    icon: CpuIcon,
    title: "Agent System",
    description:
      "WD Agent: a local AI operating system powered by Claude and capabilities. Your AI, your rules.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
  },
  {
    icon: ModelsIcon,
    title: "350+ Models",
    description:
      "Access any LLM through OpenRouter integration. Claude, GPT, Gemini, Llama, and hundreds more.",
    color: "text-violet-500",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
  },
  {
    icon: AcademicIcon,
    title: "Academic Research",
    description:
      "Search 250M+ scholarly papers via OpenAlex integration. Instant access to the world's research.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
  },
  {
    icon: FinanceIcon,
    title: "Financial Data",
    description:
      "Real-time quotes, financials, and historical data via FMP and EODHD. Market intelligence on demand.",
    color: "text-rose-500",
    bg: "bg-rose-500/10 dark:bg-rose-500/15",
  },
];

const stats = [
  { value: "31+", label: "Capabilities" },
  { value: "350+", label: "Models" },
  { value: "8", label: "Providers" },
  { value: "6", label: "Repositories" },
  { value: "188+", label: "Tests" },
];

/* ------------------------------------------------------------------ */
/*  Neural network decoration (pure CSS dots & lines)                 */
/* ------------------------------------------------------------------ */

function NeuralDecoration() {
  const dots = [
    { top: "10%", left: "8%", delay: "0s" },
    { top: "20%", right: "12%", delay: "1.2s" },
    { top: "35%", left: "15%", delay: "0.6s" },
    { top: "55%", right: "8%", delay: "1.8s" },
    { top: "70%", left: "5%", delay: "0.3s" },
    { top: "80%", right: "18%", delay: "1.5s" },
    { top: "15%", left: "25%", delay: "2.1s" },
    { top: "45%", right: "22%", delay: "0.9s" },
    { top: "65%", left: "20%", delay: "2.4s" },
    { top: "85%", right: "6%", delay: "1.1s" },
    { top: "25%", left: "4%", delay: "1.7s" },
    { top: "50%", right: "15%", delay: "0.4s" },
  ];

  const lines = [
    { top: "18%", left: "6%", width: "120px", rotate: "25deg", delay: "0s" },
    { top: "30%", right: "10%", width: "90px", rotate: "-15deg", delay: "1.5s" },
    { top: "60%", left: "3%", width: "100px", rotate: "40deg", delay: "0.8s" },
    { top: "75%", right: "5%", width: "130px", rotate: "-30deg", delay: "2s" },
    { top: "42%", left: "12%", width: "80px", rotate: "10deg", delay: "1.2s" },
    { top: "88%", right: "20%", width: "70px", rotate: "-45deg", delay: "0.5s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="neural-dot"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animationDelay: dot.delay,
          } as React.CSSProperties}
        />
      ))}
      {lines.map((line, i) => (
        <div
          key={`line-${i}`}
          className="neural-line"
          style={{
            top: line.top,
            left: line.left,
            right: line.right,
            width: line.width,
            transform: `rotate(${line.rotate})`,
            animationDelay: line.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ====== HERO ====== */}
      <section className="relative hero-gradient min-h-[90vh] flex items-center justify-center overflow-hidden">
        <NeuralDecoration />

        {/* Radial glow behind heading */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-brand-gradient">AI That Decides</span>
            <br />
            <span className="text-gray-900 dark:text-white">What Matters</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Open-source AI tools built for developers who want full control over
            their AI stack. Local inference, portable capabilities, and a
            complete agent system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Worth-Doing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 px-8 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-8 text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:border-gray-400 dark:hover:border-gray-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FEATURES GRID ====== */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Everything you need to build with AI
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              A modular, open-source ecosystem designed for full developer
              autonomy. No lock-in. No black boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-0.5"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} mb-5`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-number text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Ready to build with WorthDoing AI?
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
            Get started in seconds with npm. Full documentation on GitHub.
          </p>

          {/* Install commands */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-12 max-w-2xl mx-auto">
            <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-5 py-4 text-left">
              <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                Capabilities
              </div>
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                npm i worthdoing-capabilities
              </code>
            </div>
            <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-5 py-4 text-left">
              <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                Agent
              </div>
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                npm i wd-agent
              </code>
            </div>
          </div>

          <a
            href="https://github.com/Worth-Doing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 px-8 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            View on GitHub
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
