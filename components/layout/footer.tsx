import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900">
      <div className="container">
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-100">
              John Fairfax-Ball
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Technology • AI • Automation • Business Development
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-zinc-900 py-6">
          <p className="text-xs text-zinc-500">
            © {year} John Fairfax-Ball. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
