import type { Metadata } from "next";
import Link from "next/link";

import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional website of John Fairfax-Ball, focused on technology, AI, automation, and business development.",
};

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Account Manager • Technology Enthusiast
            </p>

            <h1 className="heading-xl">
              Building connections between people, technology, and opportunity.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              I'm John Fairfax-Ball, an Account Manager with a strong interest
              in artificial intelligence, automation, business development, and
              modern software. I enjoy exploring how technology can create
              practical business value and unlock new opportunities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>

              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-zinc-900">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="surface rounded-2xl p-6">
              <h2 className="heading-md">Technology</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Exploring emerging technologies and how they influence business,
                productivity, and customer outcomes.
              </p>
            </article>

            <article className="surface rounded-2xl p-6">
              <h2 className="heading-md">Artificial Intelligence</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Investigating practical AI applications, workflows, and tools
                that help individuals and organisations work more effectively.
              </p>
            </article>

            <article className="surface rounded-2xl p-6">
              <h2 className="heading-md">Automation</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Building knowledge around automation platforms, process
                optimisation, and scalable business systems.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
