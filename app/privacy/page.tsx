import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sasha+ collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="April 11, 2026">

      <h2>1. Introduction</h2>
      <p>
        Welcome to Sasha+ ("we," "us," or "our"). We build AI-powered video
        coaching tools that help athletes analyze and improve their technique.
        This Privacy Policy explains what personal information we collect, how
        we use it, and your rights regarding that information.
      </p>
      <p>
        By creating an account or using the Sasha+ app (the "App"), you agree
        to the collection and use of information described in this policy.
      </p>
      <p>
        <strong>Contact us:</strong>{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information You Provide</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>How We Collect It</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Email address</td><td>When you create an account with email/password</td></tr>
          <tr><td>Name</td><td>Optionally provided during sign-up</td></tr>
          <tr><td>Video recordings</td><td>When you record a practice session in the App</td></tr>
          <tr><td>Audio recordings</td><td>Captured alongside video during sessions</td></tr>
          <tr><td>Speech transcripts</td><td>Generated from your audio by Groq&apos;s Whisper AI model</td></tr>
          <tr><td>AI coaching messages</td><td>Text you send and receive in the AI chat interface</td></tr>
        </tbody>
      </table>

      <h3>2.2 Information Collected Automatically</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Device model and iOS version</td><td>Compatibility and crash reporting</td></tr>
          <tr><td>App crash logs</td><td>Diagnosing bugs via Xcode Organizer — no third-party analytics SDK</td></tr>
          <tr><td>Subscription and purchase status</td><td>Gating Pro features via RevenueCat</td></tr>
          <tr><td>Session timestamps</td><td>Organizing your recorded takes</td></tr>
        </tbody>
      </table>

      <h3>2.3 Authentication Identifiers</h3>
      <ul>
        <li>
          <strong>Sign in with Apple:</strong> We receive an Apple-generated
          user identifier and optionally an email. Apple handles authentication;
          we store only the identifier provided.
        </li>
        <li>
          <strong>Sign in with Google:</strong> We receive a Google user
          identifier and email. Google handles authentication; we store only
          the identifier and email.
        </li>
        <li>
          <strong>Email/Password:</strong> We store your email and a securely
          hashed credential via Supabase Auth.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ol>
        <li>
          <strong>Provide AI coaching feedback.</strong> Your video context and
          coaching questions are sent to OpenAI (GPT-4o mini). Your session
          audio is transcribed by Groq Whisper. See Section 5 for details.
        </li>
        <li>
          <strong>Store and organize your sessions.</strong> Recordings are
          stored in Supabase cloud storage so you can access them across
          sessions and devices.
        </li>
        <li>
          <strong>Manage your subscription.</strong> Purchase history is
          maintained by RevenueCat to verify your Pro entitlement.
        </li>
        <li>
          <strong>Authenticate your account.</strong> Sign-in identifiers are
          used solely to verify your identity.
        </li>
        <li>
          <strong>Improve reliability.</strong> On-device crash logs help us
          diagnose and fix bugs.
        </li>
      </ol>
      <p>
        We do <strong>not</strong> use your data to serve ads, build marketing
        profiles, sell to third parties, or train AI models.
      </p>

      <h2>4. Third-Party Services</h2>

      <h3>Supabase, Inc.</h3>
      <p>
        Backend infrastructure — database, authentication, file storage, and
        serverless functions. Processes your account credentials, session
        metadata, video/audio recordings, and AI conversation history.{" "}
        <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy policy →
        </a>
      </p>

      <h3>OpenAI, LLC</h3>
      <p>
        AI coaching model (GPT-4o mini). Your coaching questions and video
        context summaries are sent to OpenAI&apos;s API via our Supabase
        backend. The API key never exists on your device. Raw video is{" "}
        <strong>never</strong> sent to OpenAI.{" "}
        <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy policy →
        </a>
      </p>

      <h3>Groq, Inc.</h3>
      <p>
        Audio transcription (Whisper large-v3). Session audio is sent to
        Groq&apos;s API via our Supabase backend to produce a text transcript.
        The API key never exists on your device.{" "}
        <a href="https://groq.com/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy policy →
        </a>
      </p>

      <h3>RevenueCat, Inc.</h3>
      <p>
        Subscription management. Verifies App Store entitlements using a
        pseudonymous user identifier.{" "}
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy policy →
        </a>
      </p>

      <h3>Apple, Inc. &amp; Google LLC</h3>
      <p>
        App distribution, payment processing, and optional authentication. All
        payment transactions are processed by Apple; we receive only a receipt
        confirmation.
      </p>

      <h2>5. AI Feature Disclosure</h2>
      <div className="callout">
        <p>
          <strong>Transparency:</strong> Sasha+ uses two third-party AI
          services. API keys are stored exclusively in our Supabase backend and
          are never transmitted to or stored on your device.
        </p>
      </div>

      <h3>Audio Transcription — Groq Whisper</h3>
      <p>
        Audio from your sessions is sent to Groq&apos;s Whisper API (proxied
        through our Supabase Edge Function) to produce a text transcript stored
        in your account.
      </p>

      <h3>Coaching Chat — OpenAI GPT-4o mini</h3>
      <p>
        Your coaching questions, session transcript, and a video summary are
        sent to OpenAI&apos;s API (proxied through our Supabase Edge Function)
        to generate a coaching response.
      </p>

      <p><strong>What is sent to AI providers:</strong></p>
      <ul>
        <li>A text description of your recorded session (duration, key moments)</li>
        <li>The transcript of audio from your session</li>
        <li>Questions or messages you type in the coaching chat</li>
        <li>Session audio (Groq only, for transcription)</li>
      </ul>

      <p><strong>What is NOT sent to AI providers:</strong></p>
      <ul>
        <li>Raw video files</li>
        <li>Your name or email address</li>
        <li>Payment information</li>
      </ul>

      <h2>6. Data Retention</h2>
      <table>
        <thead>
          <tr><th>Data Type</th><th>Retention Period</th></tr>
        </thead>
        <tbody>
          <tr><td>Video recordings</td><td>Until you delete them or close your account</td></tr>
          <tr><td>AI conversation history</td><td>Until you delete your account</td></tr>
          <tr><td>Account information</td><td>Until you delete your account</td></tr>
          <tr><td>Subscription records</td><td>Retained as required by Apple&apos;s receipt verification</td></tr>
          <tr><td>Crash logs</td><td>30 days (Xcode Organizer default)</td></tr>
        </tbody>
      </table>
      <p>
        When you delete your account (Settings → Delete Account), we permanently
        delete your profile, videos, and conversation history from Supabase.
        RevenueCat records are anonymized per their deletion process.
      </p>

      <h2>7. Your Rights</h2>

      <h3>All Users</h3>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li>
          <strong>Deletion:</strong> Delete your account from within the App,
          or email{" "}
          <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>.
        </li>
        <li><strong>Correction:</strong> Correct inaccurate information by contacting us.</li>
      </ul>

      <h3>California Residents (CCPA/CPRA)</h3>
      <p>
        You have the right to know what data we collect, the right to delete it,
        and the right to opt out of data sales (we don&apos;t sell data). Email{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> with
        subject "California Privacy Request."
      </p>

      <h3>European Residents (GDPR)</h3>
      <p>
        You have the right to access, rectify, erase, restrict, and port your
        data. Email{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> with
        subject "GDPR Request." We respond within 30 days.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Sasha+ is intended for users 13 and older. We do not knowingly collect
        data from children under 13. Contact{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> if you
        believe this has occurred.
      </p>

      <h2>9. Data Security</h2>
      <ul>
        <li>Video recordings are stored in Supabase with server-side encryption at rest.</li>
        <li>All data is transmitted over HTTPS/TLS.</li>
        <li>Authentication tokens are stored in iOS Keychain.</li>
        <li>AI provider API keys are stored exclusively in Supabase secrets — never on your device.</li>
        <li>Payment data is never stored by us; all payments are processed by Apple.</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>
        We will update the "Last updated" date and notify you via in-app notice
        or email for material changes. Continued use of the App constitutes
        acceptance of the revised policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
        <br />
        Subject line for data requests: <em>"Privacy Request"</em>
        <br />
        We respond within 30 days.
      </p>

    </LegalPage>
  );
}
