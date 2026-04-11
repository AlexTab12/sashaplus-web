"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isLegal =
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/support";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0a0a0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-[17px] font-bold tracking-tight text-white/90 transition-opacity hover:opacity-70"
        >
          Sasha<span className="text-[#e8952a]">+</span>
        </Link>

        {/* Breadcrumb on legal pages */}
        {isLegal && (
          <>
            <span className="text-white/25">/</span>
            <span className="text-sm text-white/45 capitalize">
              {pathname.replace("/", "")}
            </span>
          </>
        )}

        <div className="flex-1" />

        {/* CTA — only on home */}
        {!isLegal && (
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#e8952a] px-4 py-2 text-[13px] font-semibold text-black transition-opacity hover:opacity-85"
          >
            Download
          </a>
        )}
      </div>
    </nav>
  );
}
