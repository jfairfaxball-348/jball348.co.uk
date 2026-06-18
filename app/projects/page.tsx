import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects and work by John Fairfax-Ball across technology, automation, and business-focused initiatives.",
};

const projects = [
  {
    title: "AI Exploration Notes",
    description:
      "A collection of practical observations and experiments with modern AI tools and workflows.",
    tags: ["AI", "Productivity", "Automation"],
  },
  {
    title: "Sales Enablement Systems",
    description:
      "Conceptual work on improving sales processes using automation and structured data flows.",
    tags: ["Sales", "Automation", "CRM"],
  },
  {
    title: "Technology Research",
    description:
      "Ongoing research into emerging software platforms and their business applications.",
    tags: ["Research", "Technology", "Strategy"],
  },
];

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Projects
            </p>

            <h1 className="heading-lg">
              Work exploring technology, automation, and business systems.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              These projects reflect ongoing curiosity and applied thinking
              around how modern tools and systems can improve business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-zinc-900">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="surface rounded-2xl p-6"
              >
                <h2 className="heading-md">{project.title}</h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-800 px-2 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
