import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sasha+ — AI Video Coaching for Athletes",
  description:
    "Record your practice sessions and get instant AI-powered coaching feedback. Improve faster with Sasha+.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-6 py-28 text-center sm:py-40">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8952a]/30 bg-[#e8952a]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e8952a]" />
          <span className="text-[12px] font-semibold tracking-wide text-[#e8952a]">
            NOW AVAILABLE ON IOS
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-[44px] font-bold leading-[1.1] tracking-[-1.5px] text-white sm:text-[60px]">
          Your AI coach,{" "}
          <span className="text-[#e8952a]">every rep.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/50">
          Record your practice sessions and get instant, personalised coaching
          feedback powered by AI. Spot mistakes faster. Improve with intent.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-opacity hover:opacity-85"
          >
            {/* App Store icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>

          <Link
            href="/support"
            className="text-[14px] text-white/40 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
          >
            Learn more →
          </Link>
        </div>

        {/* App Store sub-label */}
        <p className="mt-4 text-[12px] text-white/20">
          Free to download · iOS 17+
        </p>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Feature highlights placeholder ───────────────────────── */}
      {/*
        TODO: Add feature section here after MVP launch.
        Suggested structure:
          <section className="mx-auto max-w-5xl px-6 py-24">
            <h2>...</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <FeatureCard ... />
            </div>
          </section>
      */}

      {/* ── Screenshots placeholder ──────────────────────────────── */}
      {/*
        TODO: Add app screenshots / mockup after MVP launch.
        Suggested structure:
          <section className="overflow-hidden py-24">
            <div className="flex gap-4 ...">
              <img src="/screenshots/home.png" ... />
            </div>
          </section>
      */}

      {/* ── Simple value props (interim until screenshots) ───────── */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              icon: "🎥",
              title: "Record",
              body: "Capture your sessions directly in the app with one tap.",
            },
            {
              icon: "🤖",
              title: "Analyse",
              body: "AI reviews your footage and transcribes what matters.",
            },
            {
              icon: "📈",
              title: "Improve",
              body: "Get targeted coaching feedback to sharpen your technique.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6"
            >
              <div className="mb-3 text-3xl">{icon}</div>
              <h3 className="mb-1.5 text-[15px] font-semibold text-white/90">
                {title}
              </h3>
              <p className="text-[14px] leading-relaxed text-white/45">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="px-6 pb-28 pt-4 text-center">
        <p className="mb-4 text-[15px] text-white/40">
          Start improving today. Free 7-day trial.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#e8952a]/30 bg-[#e8952a]/10 px-6 py-3 text-[14px] font-semibold text-[#e8952a] transition-all hover:bg-[#e8952a]/20"
        >
          Get Sasha+ Free →
        </a>
      </section>
    </div>
  );
}
