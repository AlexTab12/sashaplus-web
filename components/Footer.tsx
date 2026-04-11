import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span className="text-[15px] font-bold tracking-tight text-white/90">
            Sasha<span className="text-[#e8952a]">+</span>
          </span>
          <span className="text-[12px] text-white/30">
            © {year} Alexander Tabachnik
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/privacy"
            className="text-[13px] text-white/40 transition-colors hover:text-white/75"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[13px] text-white/40 transition-colors hover:text-white/75"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="text-[13px] text-white/40 transition-colors hover:text-white/75"
          >
            Support
          </Link>
          <a
            href="mailto:support@sashaplus.app"
            className="text-[13px] text-white/40 transition-colors hover:text-white/75"
          >
            support@sashaplus.app
          </a>
        </nav>
      </div>
    </footer>
  );
}
