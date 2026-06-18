import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jball348.co.uk"),
  title: {
    default: "John Fairfax-Ball",
    template: "%s | John Fairfax-Ball",
  },
  description:
    "Professional website of John Fairfax-Ball. Exploring technology, artificial intelligence, automation, business development, and modern software.",
  keywords: [
    "John Fairfax-Ball",
    "Technology",
    "Artificial Intelligence",
    "Automation",
    "Business Development",
    "Sales Enablement",
    "Software",
  ],
  authors: [{ name: "John Fairfax-Ball" }],
  creator: "John Fairfax-Ball",
  openGraph: {
    title: "John Fairfax-Ball",
    description:
      "Professional website showcasing projects, interests, and experience.",
    url: "https://jball348.co.uk",
    siteName: "John Fairfax-Ball",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Fairfax-Ball",
    description:
      "Professional website showcasing projects, interests, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
