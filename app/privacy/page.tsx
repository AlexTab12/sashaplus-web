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
        <strong>Who we are:</strong> Sasha+, operated by Alexander Tabachnik
        (sole proprietor), New Brunswick, Canada.
        Contact:{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>
          <strong>Account information</strong> — email address and
          authentication details when you sign up.
        </li>
        <li>
          <strong>Recordings</strong> — video and audio you capture during
          sessions, stored in the cloud.
        </li>
        <li>
          <strong>Coaching conversations</strong> — messages you send and
          receive in the AI coaching chat.
        </li>
        <li>
          <strong>Subscription status</strong> — whether you have an active
          Pro subscription.
        </li>
        <li>
          <strong>Analytics and crash data</strong> — anonymous app events and
          technical logs to help us fix bugs and improve the app.
        </li>
      </ul>
      <p>
        <strong>We do not collect:</strong> precise or coarse location,
        contacts, health or medical records, or any other sensitive categories
        not listed above.
      </p>

      <h2>How We Use It</h2>
      <ul>
        <li>To provide and operate the app's features.</li>
        <li>
          To generate personalised AI coaching feedback from your sessions.
        </li>
        <li>To manage your account and subscription.</li>
        <li>To diagnose and fix technical issues.</li>
      </ul>

      <h2>Ads and Data Sharing</h2>
      <p>
        No ads. We do not sell or share your personal information for
        cross-context behavioural advertising.
      </p>

      <h2>Service Providers</h2>
      <p>
        We use a small number of third-party providers to operate the app. We
        share only what each service needs to function:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — cloud infrastructure, authentication,
          database, and file storage.
        </li>
        <li>
          <strong>OpenAI</strong> — processes text summaries of your sessions
          to generate coaching responses. Raw video is not sent to OpenAI.
        </li>
        <li>
          <strong>Groq</strong> — transcribes audio from your sessions to
          text for coaching analysis.
        </li>
        <li>
          <strong>RevenueCat</strong> — manages in-app subscription billing
          via Apple.
        </li>
      </ul>
      <p>
        Each provider has their own privacy policy governing their data
        practices.
      </p>

      <h2>AI Coaching</h2>
      <p>
        We send text summaries of your sessions to third-party AI providers
        only to generate your coaching response. Raw video files are not sent
        to AI providers. We do not use your content to train AI models.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep your data for as long as your account is active. You can
        delete your account at any time from within the app (Profile → Delete
        Account), which removes your account and associated data from our
        systems.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>
          <strong>Delete your account:</strong> in-app via Profile → Delete
          Account, or email{" "}
          <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
        </li>
        <li>
          <strong>Opt out of AI features:</strong> simply do not submit content
          to them. Deleting your account removes stored content.
        </li>
      </ul>

      <h2>International Transfers</h2>
      <p>
        Your data may be processed or stored in Canada, the United States, or
        other regions used by our service providers. By using the app, you
        consent to this transfer.
      </p>

      <h2>GDPR / UK-GDPR</h2>
      <p>
        If you are in the EU or UK, you have the right to access, correct,
        delete, port, and object to or restrict processing of your personal
        data. To exercise any of these rights, contact us at{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>. We
        will respond within 30 days.
      </p>

      <h2>CCPA / CPRA (California)</h2>
      <p>
        We do not "sell" or "share" personal information as defined by the
        CPRA. California residents may request access to or deletion of their
        data by emailing{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
      </p>

      <h2>Children</h2>
      <p>
        Sasha+ is rated 9+. We do not knowingly collect data from children
        under 9.
      </p>

      <h2>Security</h2>
      <p>
        We use TLS in transit and rely on our cloud providers' encryption at
        rest. No system is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. When we do, we will
        update the date at the top of this page. Continued use after changes
        constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

    </LegalPage>
  );
}
