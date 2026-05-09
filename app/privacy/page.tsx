import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sasha+ handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 9, 2026">

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
          <strong>AI conversations</strong> — messages you send and
          receive in the assistant chat.
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
          To generate personalised AI feedback from your sessions.
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
          <strong>OpenAI</strong> — receives text summaries and transcripts of
          your sessions to generate AI responses. Raw video is never sent
          to OpenAI.
        </li>
        <li>
          <strong>Groq</strong> — receives audio from your sessions to produce
          a text transcript used for AI analysis.
        </li>
        <li>
          <strong>RevenueCat</strong> — manages in-app subscription billing
          via Apple.
        </li>
        <li>
          <strong>Google</strong> — optional Sign in with Google
          authentication. We receive a Google-generated user identifier and
          email address solely to verify your identity.
        </li>
      </ul>
      <p>
        Each provider maintains their own privacy policy governing their data
        practices.
      </p>

      <h2>AI Assistant</h2>
      <p>
        Audio from your sessions is sent to Groq for transcription. The
        resulting transcript, along with a text summary of your session and any
        messages you type in the assistant chat, is sent to OpenAI to generate
        an AI response. Raw video files are never sent to either provider. We
        do not use your content to train AI models.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your data for as long as your account is active:
      </p>
      <ul>
        <li><strong>Video recordings</strong> — until you delete them or close your account.</li>
        <li><strong>Transcripts and AI conversations</strong> — until you delete your account.</li>
        <li><strong>Account information</strong> — until you delete your account.</li>
        <li><strong>Subscription records</strong> — as required by Apple receipt verification.</li>
        <li><strong>Crash logs</strong> — 30 days.</li>
      </ul>
      <p>
        You can delete your account at any time from within the app (Profile →
        Delete Account), which permanently removes your account and associated
        data from our systems.
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
        Sasha+ is intended for users 13 and older. We do not knowingly collect
        personal information from children under 13. If we learn that a child
        under 13 has created an account, we will delete their data promptly.
        If you believe this has occurred, contact us at{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
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
