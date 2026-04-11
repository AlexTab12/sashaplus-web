import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Sasha+.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="April 11, 2026">

      <p>
        These Terms of Service ("Terms") govern your use of the Sasha+ mobile
        application. By creating an account or using the app, you agree to
        these Terms.
      </p>
      <p>
        Questions? Email{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 9 years old to use Sasha+. By using the app, you
        confirm you meet this requirement.
      </p>

      <h2>Your Account</h2>
      <p>
        You are responsible for keeping your login credentials secure and for
        all activity under your account. Notify us immediately if you suspect
        unauthorized access.
      </p>

      <h2>Subscriptions</h2>
      <p>
        Sasha+ offers auto-renewable subscriptions. Your subscription renews
        automatically unless cancelled at least 24 hours before the end of the
        current period via <strong>iOS Settings → [your name] → Subscriptions → Sasha+</strong>.
        Cancellation takes effect at the end of the paid period — you are not
        refunded for the remaining time.
      </p>
      <p>
        All billing is handled by Apple. For refund requests, visit{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>
        . To restore a previous subscription, use the Restore Purchases option
        in the app's Settings screen.
      </p>

      <h2>Your Content</h2>
      <p>
        You own the recordings and content you create in the app. By using the
        app, you grant us a limited licence to store and process your content
        solely to provide the app's features to you. We do not use your content
        for any purpose other than operating the service.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree to use the app lawfully and not to misuse, reverse engineer,
        or attempt to circumvent any security features of the app.
      </p>

      <h2>AI Coaching Disclaimer</h2>
      <p>
        AI-generated coaching feedback is for informational purposes only. It
        is not a substitute for professional coaching, medical advice, or
        physical therapy. We are not responsible for any injury or loss
        resulting from reliance on AI feedback.
      </p>

      <h2>Termination</h2>
      <p>
        You can delete your account at any time from within the app. We may
        suspend accounts that violate these Terms. Deleting your account does
        not automatically cancel your subscription — cancel separately in iOS
        Settings.
      </p>

      <h2>Disclaimers and Liability</h2>
      <p>
        The app is provided "as is" without warranties of any kind. To the
        fullest extent permitted by law, our total liability for any claim
        shall not exceed the amount you paid us in the 12 months prior to the
        claim, or $50 USD, whichever is greater.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> is part of these Terms.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms at any time. When we do, we will update the
        date at the top of this page. Continued use after changes constitutes
        acceptance.
      </p>

      <h2>Apple</h2>
      <p>
        These Terms are between you and us, not Apple. Apple has no
        responsibility for the app or its content. Apple and its subsidiaries
        are third-party beneficiaries of these Terms. You confirm you are not
        located in an embargoed country or on any U.S. prohibited parties list.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of New Brunswick, Canada.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

    </LegalPage>
  );
}
