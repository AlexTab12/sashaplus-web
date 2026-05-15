import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sasha+ handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 14, 2026">

      <p>
        <strong>Who we are:</strong> Sasha+, operated by Alexander Tabachnik
        (sole proprietor), New Brunswick, Canada.
        Contact:{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>
          <strong>Account information</strong> — email address, display name,
          and authentication details when you sign up. If you use Sign in with
          Apple or Sign in with Google, we receive your name and email from
          that provider to create your account.
        </li>
        <li>
          <strong>Recordings</strong> — video and audio you capture during
          sessions. Video is stored locally on your device. Audio is sent to
          our transcription provider to generate a text transcript for AI
          analysis.
        </li>
        <li>
          <strong>AI conversations</strong> — messages you send and receive
          in the assistant chat, including any voice input you provide.
        </li>
        <li>
          <strong>Subscription status</strong> — whether you have an active
          Pro subscription, managed through Apple and our billing provider.
        </li>
        <li>
          <strong>App usage data</strong> — in-app events such as feature
          interactions, session starts, and screen views, linked to your
          account after you log in. This data is used to understand how the
          app is used and to improve it.
        </li>
        <li>
          <strong>Device information</strong> — device model, iOS version, and
          app version, collected alongside usage events.
        </li>
        <li>
          <strong>Push notification token</strong> — a device identifier
          issued by Apple used to deliver push notifications to your device.
          Stored in your account record and shared with our subscription
          provider for notification delivery.
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
        <li>To generate personalised AI feedback from your sessions.</li>
        <li>To manage your account and subscription.</li>
        <li>
          To send push notifications related to your subscription (e.g. trial
          reminders).
        </li>
        <li>
          To understand how the app is used and improve it over time.
        </li>
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
          database, and serverless functions. Stores your account profile,
          subscription status, and push notification token.
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
          via Apple. Receives a pseudonymous account identifier and your push
          notification token to verify entitlements and deliver
          subscription-related notifications.
        </li>
        <li>
          <strong>PostHog</strong> — product analytics. Receives in-app usage
          events and device metadata (device model, iOS version, app version)
          to help us understand how the app is used and improve it. Events are
          linked to your account identifier after you log in.
        </li>
        <li>
          <strong>Apple</strong> — Sign in with Apple authentication, payment
          processing, push notification delivery, and on-device speech
          recognition. When you use voice input in the assistant, Apple's
          Speech Recognition framework processes your audio; depending on your
          device and iOS version, this may occur on-device or on Apple's
          servers.
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
        messages you type or speak in the assistant chat, is sent to OpenAI to
        generate an AI response. Raw video files are never sent to either
        provider. We do not use your content to train AI models.
      </p>

      <h2>Sign in with Apple — Account Deletion</h2>
      <p>
        If you use Sign in with Apple, we temporarily retain an Apple
        authorization token in your account record. This token is used solely
        to perform server-side revocation with Apple when you delete your
        account, as required by Apple's guidelines. It is deleted as part of
        the account deletion process.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your data for as long as your account is active:
      </p>
      <ul>
        <li><strong>Video recordings</strong> — stored locally on your device until you delete them.</li>
        <li><strong>Transcripts and AI conversations</strong> — until you delete your account.</li>
        <li><strong>Account information</strong> — until you delete your account.</li>
        <li><strong>Subscription records</strong> — as required by Apple receipt verification.</li>
        <li><strong>Usage and analytics data</strong> — subject to PostHog's retention settings.</li>
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
        <li>
          <strong>Push notifications:</strong> you can disable push
          notifications at any time in iOS Settings → Notifications → Sasha+.
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
