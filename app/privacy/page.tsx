import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sasha+ handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="April 11, 2026">

      <p>
        Sasha+ ("we," "us," or "our") is committed to protecting your privacy.
        This policy explains what information we collect, how we use it, and
        your choices. By using the app, you agree to these practices.
      </p>
      <p>
        Questions? Email us at{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Account information</strong> — email address and authentication details when you sign up.</li>
        <li><strong>Recordings</strong> — video and audio you capture during sessions.</li>
        <li><strong>Coaching conversations</strong> — messages you send and receive in the AI coaching chat.</li>
        <li><strong>Subscription status</strong> — whether you have an active Pro subscription.</li>
        <li><strong>Crash data</strong> — anonymous technical logs to help us fix bugs.</li>
      </ul>

      <h2>How We Use It</h2>
      <ul>
        <li>To provide and operate the app's features.</li>
        <li>To generate personalised AI coaching feedback from your sessions.</li>
        <li>To manage your account and subscription.</li>
        <li>To diagnose and fix technical issues.</li>
      </ul>
      <p>We do not sell your data or use it for advertising.</p>

      <h2>Third Parties</h2>
      <p>
        We work with a small number of trusted service providers to operate the
        app. These include cloud infrastructure, AI model providers, and
        subscription management. Each provider is contractually required to
        handle your data securely and only for the purposes we specify. We do
        not share your data with anyone else.
      </p>

      <h2>AI Coaching</h2>
      <p>
        To generate coaching feedback, text summaries of your sessions are
        processed by a third-party AI model. Raw video files are never sent
        externally. AI providers do not use your content to train their models.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep your data for as long as your account is active. You can delete
        your account at any time from within the app (Settings → Delete
        Account), which permanently removes all your recordings and personal
        data from our systems.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can access, correct, or delete your personal data at any time.
        Email us at{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> and we
        will respond within 30 days. California and EEA residents may have
        additional rights under applicable law — contact us to exercise them.
      </p>

      <h2>Children</h2>
      <p>
        Sasha+ is not intended for children under 9. We do not knowingly
        collect data from anyone under 9.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard security measures to protect your data,
        including encryption in transit and at rest. No system is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. We will notify you of
        material changes via the app or email. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

    </LegalPage>
  );
}
