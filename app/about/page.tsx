import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about John Fairfax-Ball, his background, interests, and professional focus.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <h1 className="heading-lg">
              Curious about technology and focused on creating value.
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              John Fairfax-Ball is an Account Manager with a strong interest in
              technology, artificial intelligence, automation, and modern
              software. He enjoys understanding how emerging technologies can
              support business growth, improve efficiency, and create meaningful
              outcomes.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              His professional interests sit at the intersection of business
              development and technology adoption, with a particular focus on
              helping organisations understand and leverage new capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-zinc-900">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="surface rounded-2xl p-6">
              <h2 className="heading-md">Professional Focus</h2>

              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>• Account Management</li>
                <li>• Business Development</li>
                <li>• Sales Enablement</li>
                <li>• Technology Adoption</li>
              </ul>
            </article>

            <article className="surface rounded-2xl p-6">
              <h2 className="heading-md">Areas of Interest</h2>

              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>• Artificial Intelligence</li>
                <li>• Automation</li>
                <li>• Modern Software</li>
                <li>• Emerging Technologies</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
