import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Sasha+. Find answers to common questions or contact our team.",
};

const faqs = [
  {
    q: "How do I cancel my subscription?",
    a: 'Open iOS Settings → tap your name → Subscriptions → Sasha+ → Cancel Subscription. You keep Pro access until the end of your current billing period. You can also tap "Manage Subscription" inside the Sasha+ app.',
  },
  {
    q: "How do I restore a purchase on a new device?",
    a: 'Sign in to the same Apple ID you used to subscribe, then tap Settings → Restore Purchases inside the app. Your subscription will be restored automatically.',
  },
  {
    q: "How do I delete my account?",
    a: "Open the app → tap the profile icon (top right) → Delete Account. This permanently removes all your recordings, AI conversation history, and account data from our servers.",
  },
  {
    q: "Why does the app need camera and microphone access?",
    a: "The camera records your practice sessions, and the microphone captures audio so the AI can transcribe what you say and provide coaching feedback based on it.",
  },
  {
    q: "Is my video footage sent to AI services?",
    a: "No. Raw video files are never sent to any AI provider. Only a text summary of your session and the audio transcript are sent to OpenAI to generate coaching feedback. Session audio is sent to Groq Whisper only for transcription.",
  },
  {
    q: "How do I request a refund?",
    a: "Refunds are processed by Apple. Visit reportaproblem.apple.com, find your Sasha+ purchase, and submit a refund request. Apple typically responds within a few business days.",
  },
  {
    q: "The AI coaching isn't responding. What should I check?",
    a: "Make sure you have an active internet connection. If the problem persists, force-quit the app, reopen it, and try again. If you still experience issues, contact us at support@sashaplus.app.",
  },
  {
    q: "Where is my data stored?",
    a: "Your recordings and account data are stored securely in Supabase cloud storage with encryption at rest. AI provider API keys are stored exclusively on our servers and are never transmitted to your device.",
  },
];

export default function SupportPage() {
  return (
    <LegalPage title="Support" updated="April 11, 2026">

      {/* Contact card */}
      <div className="mb-10 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
        <p className="mb-1 text-[15px] font-semibold text-white/90">
          Need help? We&apos;re here.
        </p>
        <p className="mb-4 text-[14px] text-white/50">
          Email us and we&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="mailto:support@sashaplus.app"
          className="inline-flex items-center gap-2 rounded-lg bg-[#e8952a] px-4 py-2.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-85"
        >
          support@sashaplus.app
        </a>
      </div>

      <h2>Frequently Asked Questions</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          marginTop: "16px",
        }}
      >
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "2px",
            }}
          >
            <summary
              style={{
                padding: "14px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                userSelect: "none",
              }}
            >
              {q}
              <span
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                paddingBottom: "14px",
                fontSize: "14px",
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.50)",
              }}
            >
              {a}
            </p>
          </details>
        ))}
      </div>

      <h2>Useful Links</h2>
      <ul>
        <li>
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
            Request a refund from Apple →
          </a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy →</a>
        </li>
        <li>
          <a href="/terms">Terms of Service →</a>
        </li>
      </ul>

    </LegalPage>
  );
}
