import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sasha+ — AI Video Coaching for Athletes",
    template: "%s — Sasha+",
  },
  description:
    "Record your practice sessions and get instant AI-powered coaching feedback. Improve faster with Sasha+.",
  metadataBase: new URL("https://sashaplus.app"),
  openGraph: {
    siteName: "Sasha+",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex min-h-screen flex-col bg-[#0a0a0a] text-white/[0.88] antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
