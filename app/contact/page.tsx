import type { Metadata } from "next";
import Link from "next/link";

import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with John Fairfax-Ball for professional enquiries, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>

            <h1 className="heading-lg">
              Let’s connect and discuss opportunities.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I’m always open to discussing technology, AI, automation, and
              business development opportunities.
            </p>

            <div className="mt-10 space-y-4 text-zinc-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:john@example.com"
                  className="text-zinc-200 hover:text-white"
                >
                  john@example.com
                </a>
              </p>

              <p>
                LinkedIn:{" "}
                <a
                  href="#"
                  className="text-zinc-200 hover:text-white"
                >
                  linkedin.com
                </a>
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>

              <Link href="/" className="btn-secondary">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
