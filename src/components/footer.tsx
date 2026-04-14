import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* Branding */}
          <div className="space-y-4">
            <span className="text-lg font-bold text-brand-gradient">
              WorthDoing AI
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              AI That Decides What Matters. Open-source AI tools built for
              developers who want full control.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/agent"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/WorthDoingAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/org/worthdoing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  npm Packages
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@worthdoing.ai"
                  className="text-sm text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  admin@worthdoing.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; 2026 WorthDoing AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            AI That Decides What Matters
          </p>
        </div>
      </div>
    </footer>
  );
}
