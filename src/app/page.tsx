import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern" />

        {/* Glow orbs */}
        <div className="glow-orb w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 top-1/4 -left-48" />
        <div className="glow-orb w-[600px] h-[600px] bg-cyan-500/15 dark:bg-cyan-500/8 top-1/3 right-[-200px]" />
        <div className="glow-orb w-[400px] h-[400px] bg-green-500/15 dark:bg-green-500/8 bottom-0 left-1/3" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm mb-8 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400">Open Source &middot; MIT Licensed</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 animate-fade-up" style={{animationDelay: "0.1s"}}>
            <span className="text-gradient">AI That Decides</span>
            <br />
            <span className="text-gray-900 dark:text-white">What Matters</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12 animate-fade-up" style={{animationDelay: "0.2s"}}>
            Open-source AI tools for developers who refuse to compromise.
            Local inference. Portable capabilities. A complete agent system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: "0.3s"}}>
            <a href="https://github.com/Worth-Doing" target="_blank" rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 px-8 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get Started
              <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link href="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-xl glass-card px-8 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:scale-[1.02] active:scale-[0.98] transition-all">
              View Projects
            </Link>
          </div>

          {/* Terminal preview */}
          <div className="mt-20 mx-auto max-w-2xl animate-fade-up" style={{animationDelay: "0.5s"}}>
            <div className="rounded-2xl glass-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200/10 dark:border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 font-mono">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm text-left space-y-3">
                <div><span className="text-gray-400 dark:text-gray-500">$</span> <span className="text-cyan-500">npm install</span> <span className="text-gray-700 dark:text-gray-300">worthdoing-capabilities</span></div>
                <div><span className="text-gray-400 dark:text-gray-500">$</span> <span className="text-cyan-500">npx</span> <span className="text-gray-700 dark:text-gray-300">wd-agent</span></div>
                <div className="text-green-400 dark:text-green-500">&#10003; WD Agent ready — 22+ capabilities loaded</div>
                <div className="text-gray-400 dark:text-gray-500">&#10095; <span className="text-gray-700 dark:text-gray-300 animate-pulse">_</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[400px] h-[400px] bg-cyan-500/10 top-0 right-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to <span className="text-gradient">build with AI</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A modular ecosystem. No lock-in. No black boxes. Full control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "\u26A1", title: "Capability-First", desc: "31 portable capabilities across 8 providers. Compose, test, and deploy structured agent actions.", gradient: "from-blue-500 to-cyan-500" },
              { icon: "\uD83D\uDD12", title: "Local-First", desc: "Custom C++ inference engine. Zero cloud dependency. Your data never leaves your machine.", gradient: "from-cyan-500 to-teal-500" },
              { icon: "\uD83E\uDD16", title: "Agent System", desc: "WD Agent — a complete AI operating system in your terminal. Think, act, observe, persist.", gradient: "from-teal-500 to-emerald-500" },
              { icon: "\uD83C\uDF10", title: "350+ Models", desc: "Access Claude, GPT, Gemini, Llama, and hundreds more through OpenRouter integration.", gradient: "from-violet-500 to-blue-500" },
              { icon: "\uD83D\uDCDA", title: "Academic Research", desc: "Search 250M+ scholarly papers via OpenAlex. Authors, institutions, citations.", gradient: "from-amber-500 to-orange-500" },
              { icon: "\uD83D\uDCC8", title: "Financial Data", desc: "Real-time quotes, financials, historical data. FMP and EODHD integrated.", gradient: "from-rose-500 to-pink-500" },
            ].map((f, i) => (
              <div key={f.title} className="group rounded-2xl glass-card p-7 animate-fade-up" style={{animationDelay: `${i * 0.08}s`}}>
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white text-lg mb-5 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl glass-card p-10 sm:p-14">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
              {[
                { value: "31+", label: "Capabilities" },
                { value: "350+", label: "Models" },
                { value: "8", label: "Providers" },
                { value: "7", label: "Repositories" },
                { value: "188+", label: "Tests" },
              ].map((s, i) => (
                <div key={s.label} className="text-center animate-fade-up" style={{animationDelay: `${i * 0.1}s`}}>
                  <div className="text-4xl sm:text-5xl font-extrabold text-gradient mb-1">{s.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-blue-500/10 -bottom-48 left-0" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Install in <span className="text-gradient">seconds</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Capabilities card */}
            <div className="rounded-2xl glass-card gradient-border p-6">
              <div className="relative z-10">
                <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-3">Capabilities SDK</div>
                <div className="rounded-xl bg-gray-950 dark:bg-black/50 p-4 font-mono text-sm mb-4">
                  <span className="text-gray-500">$</span> <span className="text-cyan-400">npm i</span> <span className="text-white">worthdoing-capabilities</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">31 capabilities &middot; 8 providers &middot; TypeScript + Python &middot; Interactive CLI</p>
              </div>
            </div>

            {/* Agent card */}
            <div className="rounded-2xl glass-card gradient-border p-6">
              <div className="relative z-10">
                <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3">AI Agent</div>
                <div className="rounded-xl bg-gray-950 dark:bg-black/50 p-4 font-mono text-sm mb-4">
                  <span className="text-gray-500">$</span> <span className="text-cyan-400">npx</span> <span className="text-white">wd-agent</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Claude Opus 4.6 &middot; 350+ models &middot; Sequential agent loop &middot; Local-first</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/Worth-Doing" target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl glass-card px-8 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:scale-[1.02] transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
