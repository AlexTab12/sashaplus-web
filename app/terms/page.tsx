import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Sasha+.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="May 14, 2026">

      <p>
        <strong>Operator:</strong> Alexander Tabachnik (sole proprietor), New
        Brunswick, Canada. Contact:{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

      <h2>1. Acceptance</h2>
      <p>
        By creating an account or using Sasha+, you agree to these Terms and
        our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree, do not use
        the app.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Sasha+. By using the app, you
        confirm you meet this requirement. If you are between 13 and 18, you
        confirm you have the consent of a parent or legal guardian.
      </p>

      <h2>3. Your Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your
        credentials and for all activity that occurs under your account. Notify
        us immediately at{" "}
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a> if
        you suspect unauthorized access.
      </p>

      <h2>4. Subscriptions and Billing</h2>
      <p>
        Sasha+ offers auto-renewable subscriptions. Prices are shown in-app
        and may vary by region.
      </p>
      <ul>
        <li>
          <strong>Payment:</strong> Charged to your Apple ID at confirmation
          of purchase.
        </li>
        <li>
          <strong>Auto-renewal:</strong> Subscriptions renew automatically
          unless cancelled at least 24 hours before the end of the current
          period via{" "}
          <strong>iOS Settings → [your name] → Subscriptions → Sasha+</strong>.
        </li>
        <li>
          <strong>Renewal charges:</strong> Your Apple ID will be charged
          within 24 hours prior to the end of the current period.
        </li>
        <li>
          <strong>Free trial (if offered):</strong> Trials convert to a paid
          subscription unless cancelled at least 24 hours before the trial
          ends. Any unused portion is forfeited upon purchase.
        </li>
        <li>
          <strong>Cancellation:</strong> Takes effect at the end of the
          current paid period. No refund is issued for the remaining time.
        </li>
        <li>
          <strong>Restore Purchases:</strong> If you reinstall the app or
          change devices, use the Restore Purchases option within the app to
          restore your active subscription.
        </li>
        <li>
          <strong>Refunds:</strong> All billing is processed by Apple. For
          refund requests, visit{" "}
          <a
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            reportaproblem.apple.com
          </a>
          . We do not offer direct refunds or proration.
        </li>
      </ul>

      <h2>5. Your Content</h2>
      <p>
        You retain ownership of all recordings and content you create in the
        app. By using the app, you grant us a limited, non-exclusive,
        royalty-free licence to store and process your content solely to
        provide the app&apos;s features to you. We do not use your content for
        advertising, sale to third parties, or AI model training.
      </p>

      <h2>6. AI Feedback Disclaimer</h2>
      <p>
        AI-generated feedback is provided for informational and educational
        purposes only. It is not a substitute for professional coaching,
        instruction, medical advice, or physical therapy, and does not
        represent the opinion of a qualified professional. AI outputs may be
        inaccurate, incomplete, or inapplicable to your specific circumstances.
        We are not responsible for any injury, loss, or damage resulting from
        reliance on AI-generated feedback.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree to use the app lawfully and in accordance with these Terms. You must not:</p>
      <ul>
        <li>Record others without their consent where consent is legally required.</li>
        <li>
          Attempt to reverse engineer, decompile, or extract source code from
          the app.
        </li>
        <li>
          Attempt to circumvent any security, rate limiting, or access control
          features.
        </li>
        <li>
          Use the app in any way that damages, overburdens, or impairs our
          systems.
        </li>
        <li>
          Submit content that is illegal, harmful, threatening, or violates
          third-party rights.
        </li>
      </ul>
      <p>
        We may suspend or permanently terminate accounts that violate these
        Terms without notice.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may delete your account at any time via Profile → Delete Account
        in the app. Deleting your account does not automatically cancel your
        App Store subscription — cancel separately in iOS Settings.
      </p>
      <p>
        We may suspend or terminate your access to the app at any time, with
        or without notice, for violations of these Terms or for any other
        reason at our discretion.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, ACCURACY, OR NON-INFRINGEMENT. WE DO NOT WARRANT THE APP
        WILL BE UNINTERRUPTED OR ERROR-FREE. YOUR USE IS AT YOUR SOLE RISK.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
        ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
        INCLUDING LOSS OF DATA, PROFITS, OR GOODWILL. OUR TOTAL LIABILITY FOR
        ALL CLAIMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID
        US IN THE TWELVE MONTHS PRECEDING THE CLAIM OR (B) $50 CAD.
      </p>

      <h2>11. Time Limitation on Claims</h2>
      <p>
        Any claim arising out of or relating to these Terms or the app must be
        brought within one (1) year of the date the claim arose. Claims not
        brought within this period are permanently barred.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from any claims, damages,
        losses, and expenses (including reasonable legal fees) arising from
        your use of the app, your content, or your violation of these Terms.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may update these Terms at any time. For material changes, we will
        notify you in-app or by email. Continued use after changes constitutes
        acceptance.
      </p>

      <h2>14. Apple</h2>
      <p>
        These Terms are between you and us, not Apple. Apple is not a party to
        these Terms and bears no responsibility for the app or its content.
        Apple has no obligation to provide maintenance or support services.
      </p>
      <p>
        In the event the app fails to conform to any applicable warranty, you
        may notify Apple and Apple will refund the purchase price (if any). To
        the maximum extent permitted by law, Apple has no other warranty
        obligation with respect to the app.
      </p>
      <p>
        We, not Apple, are solely responsible for addressing claims relating to
        the app, including product liability claims, regulatory compliance
        claims, and consumer protection claims.
      </p>
      <p>
        Apple and its subsidiaries are third-party beneficiaries of these Terms
        and have the right to enforce them against you. You represent you are
        not located in an embargoed country and are not on any U.S. Government
        prohibited or restricted parties list.
      </p>

      <h2>15. Severability</h2>
      <p>
        If any provision of these Terms is found invalid or unenforceable, it
        will be modified to the minimum extent necessary, and the remaining
        provisions will remain in full force and effect.
      </p>

      <h2>16. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Province of New Brunswick
        and the federal laws of Canada applicable therein. Any disputes will be
        subject to the exclusive jurisdiction of the courts of New Brunswick,
        Canada.
      </p>

      <h2>17. Contact</h2>
      <p>
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

    </LegalPage>
  );
}
