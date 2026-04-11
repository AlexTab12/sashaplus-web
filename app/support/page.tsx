import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Sasha+.",
};

export default function SupportPage() {
  return (
    <LegalPage title="Support" updated="April 11, 2026">

      <p>
        Having an issue or have a question? Reach out and we'll get back to you
        as soon as possible.
      </p>

      <div className="callout">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
        </p>
      </div>

      <h2>Common Questions</h2>

      <h3>How do I cancel my subscription?</h3>
      <p>
        Open iOS Settings → tap your name → Subscriptions → Sasha+ → Cancel
        Subscription. You keep Pro access until the end of your current billing
        period.
      </p>

      <h3>How do I restore a previous purchase?</h3>
      <p>
        Open the app → Settings → Restore Purchases. Make sure you're signed
        in with the same Apple ID you used to subscribe.
      </p>

      <h3>How do I delete my account?</h3>
      <p>
        Open the app → tap the profile icon → Delete Account. This permanently
        removes all your data from our servers.
      </p>

      <h3>How do I request a refund?</h3>
      <p>
        Refunds are handled by Apple. Visit{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>{" "}
        and find your Sasha+ purchase.
      </p>

      <h2>More</h2>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>

    </LegalPage>
  );
}
