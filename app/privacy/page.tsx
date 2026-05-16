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
        (sole proprietor), New Brunswick, Canada. Contact:{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>
          <strong>Account information</strong> — your email address, display
          name, and authentication details when you create an account. If you
          use Sign in with Apple or Sign in with Google, we receive your name
          and email from that platform to create your account.
        </li>
        <li>
          <strong>Recordings</strong> — video and audio you capture during
          sessions. Video is stored locally on your device. Audio is sent to
          our transcription service to generate a text transcript used for AI
          analysis.
        </li>
        <li>
          <strong>AI conversations</strong> — messages you send and receive in
          the assistant chat, including any voice input you provide.
        </li>
        <li>
          <strong>Subscription status</strong> — whether you have an active
          Pro subscription, managed through Apple.
        </li>
        <li>
          <strong>App usage data</strong> — in-app events such as feature
          interactions, session starts, and screen views, linked to your
          account after you log in, used to understand and improve the app.
        </li>
        <li>
          <strong>Device information</strong> — device model, iOS version, and
          app version, collected alongside usage events.
        </li>
        <li>
          <strong>Push notification token</strong> — a device identifier
          issued by iOS used to deliver push notifications to your device.
        </li>
        <li>
          <strong>Crash and diagnostic data</strong> — information about app
          crashes and errors, including device state at the time of the crash,
          linked to your account and used to diagnose and fix issues.
        </li>
      </ul>
      <p>
        <strong>We do not collect:</strong> precise or coarse location,
        contacts, health or medical records, payment card information, or any
        other sensitive categories not listed above.
      </p>

      <h2>How We Use It</h2>
      <ul>
        <li>To provide and operate the app&apos;s features.</li>
        <li>To generate AI-powered feedback from your sessions.</li>
        <li>To manage your account and subscription.</li>
        <li>
          To send push notifications related to your subscription (such as
          trial reminders).
        </li>
        <li>To understand how the app is used, diagnose crashes, and improve it over time.</li>
      </ul>

      <h2>Ads and Data Sharing</h2>
      <p>
        No ads. We do not sell or share your personal information for
        cross-context behavioural advertising or targeted advertising of any
        kind.
      </p>

      <h2>Service Providers</h2>
      <p>
        We use a small number of third-party service providers to operate the
        app. We share only what each service needs to function:
      </p>
      <ul>
        <li>
          <strong>Cloud infrastructure and authentication</strong> — stores
          your account profile, subscription status, and push notification
          token.
        </li>
        <li>
          <strong>AI response generation</strong> — receives text summaries
          and transcripts of your sessions to generate responses. Raw video is
          never sent to this provider.
        </li>
        <li>
          <strong>Audio transcription</strong> — receives audio from your
          sessions to produce a text transcript used for AI analysis.
        </li>
        <li>
          <strong>Subscription and billing management</strong> — manages your
          in-app subscription via Apple. Receives a pseudonymous account
          identifier to verify your entitlement and deliver
          subscription-related notifications.
        </li>
        <li>
          <strong>Product analytics</strong> — receives in-app usage events
          and device metadata to help us understand and improve the app.
        </li>
        <li>
          <strong>Apple</strong> — Sign in with Apple authentication, in-app
          purchase processing, push notification delivery, and speech
          recognition for voice input. When you use voice input, Apple&apos;s
          Speech Recognition framework processes your audio; this may occur
          on-device or on Apple&apos;s servers depending on your device and
          iOS version.
        </li>
        <li>
          <strong>Google</strong> — optional Sign in with Google
          authentication. We receive a Google-generated identifier and your
          email address solely to verify your identity.
        </li>
        <li>
          <strong>Crash reporting</strong> — receives crash logs and
          diagnostic data linked to your account identifier to help us
          identify and fix technical issues.
        </li>
      </ul>
      <p>
        Each provider processes data in accordance with their own privacy
        policy.
      </p>

      <h2>AI Assistant</h2>
      <p>
        Audio from your sessions is sent to our transcription service. The
        resulting transcript, along with a text summary of your session and
        any messages you type or speak in the assistant chat, is sent to our
        AI provider to generate a response. Raw video files are never sent to
        any external provider. We do not use your content to train AI models.
      </p>

      <h2>Account Deletion and Authentication Tokens</h2>
      <p>
        When you delete your account, all associated data is permanently
        removed from our systems. If you used Sign in with Apple, we retain an
        Apple-issued authorization token in your account record solely to
        perform server-side revocation with Apple at the time of deletion, as
        required by Apple&apos;s guidelines. This token is deleted as part of
        the account deletion process.
      </p>

      <h2>Data Retention</h2>
      <ul>
        <li>
          <strong>Video recordings</strong> — stored locally on your device
          until you delete them.
        </li>
        <li>
          <strong>Transcripts and AI conversations</strong> — until you delete
          your account.
        </li>
        <li>
          <strong>Account information</strong> — until you delete your
          account.
        </li>
        <li>
          <strong>Subscription records</strong> — as required by Apple&apos;s
          receipt verification process.
        </li>
        <li>
          <strong>Usage and analytics data</strong> — subject to our analytics
          provider&apos;s standard retention periods.
        </li>
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
          <strong>Opt out of AI features:</strong> do not submit content to
          them. Deleting your account removes all stored content.
        </li>
        <li>
          <strong>Push notifications:</strong> disable at any time in iOS
          Settings → Notifications → Sasha+.
        </li>
      </ul>

      <h2>International Transfers</h2>
      <p>
        Your data may be processed or stored in Canada, the United States, or
        other countries where our service providers operate. By using the app,
        you consent to these transfers.
      </p>

      <h2>GDPR / UK-GDPR</h2>
      <p>
        If you are in the EU or UK, you have the right to access, correct,
        delete, port, and object to or restrict processing of your personal
        data. Our lawful bases for processing are contract performance and
        legitimate interests. Contact{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> to
        exercise any of these rights. We respond within 30 days.
      </p>

      <h2>CCPA / CPRA (California)</h2>
      <p>
        We do not &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal
        information as defined by the CPRA. California residents may request
        access to or deletion of their data by emailing{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
      </p>

      <h2>Children</h2>
      <p>
        Sasha+ is intended for users 13 and older. We do not knowingly collect
        personal information from children under 13. If we learn a child under
        13 has created an account, we will delete their data promptly. Contact{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> if
        you believe this has occurred.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard security measures including TLS encryption in
        transit and encryption at rest. No system is completely secure and we
        cannot guarantee absolute security.
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
