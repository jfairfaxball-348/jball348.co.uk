import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-100">
      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
