import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Sasha+.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="May 9, 2026">

      <p>
        <strong>Operator:</strong> Alexander Tabachnik (sole proprietor), New
        Brunswick, Canada.
        Contact:{" "}
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
        You are responsible for keeping your login credentials secure and for
        all activity under your account. Notify us immediately if you suspect
        unauthorized access.
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
          plan unless cancelled at least 24 hours before the trial ends. Any
          unused portion of a free trial is forfeited upon purchase.
        </li>
        <li>
          <strong>Cancellation:</strong> Cancellation takes effect at the end
          of the paid period — you are not refunded for the remaining time.
        </li>
        <li>
          <strong>Refunds:</strong> All billing is handled by Apple. For
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

      <h2>5. Restore Purchases</h2>
      <p>
        If you reinstall the app or change devices, restore your active
        subscription using the Restore Purchases option within the app.
      </p>

      <h2>6. Your Content</h2>
      <p>
        You own the recordings and content you create in the app. By using the
        app, you grant us a non-exclusive licence to store and process your
        content solely to provide the app's features to you. We do not use
        your content for any purpose other than operating the service.
      </p>

      <h2>7. AI Feedback Disclaimer</h2>
      <p>
        AI-generated feedback is for informational and educational purposes
        only. It is not a substitute for professional instruction, medical
        advice, or physical therapy, and does not represent the opinion of a
        qualified professional. We are not responsible for any injury or
        loss resulting from reliance on AI-generated feedback.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>
        You agree to use the app lawfully and not to misuse, reverse engineer,
        or attempt to circumvent any security features of the app. We may
        suspend or terminate accounts that violate these Terms.
      </p>

      <h2>9. Termination</h2>
      <p>
        You can delete your account at any time from within the app. Deleting
        your account does not automatically cancel your subscription — cancel
        separately in iOS Settings.
      </p>

      <h2>10. Disclaimers and Liability</h2>
      <p>
        The app is provided "as is" and "as available" without warranties of
        any kind. To the fullest extent permitted by law, we disclaim all
        warranties and limit liability for indirect or consequential damages.
        Our total liability for any claim shall not exceed the amount you paid
        us in the 12 months prior to the claim.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these Terms at any time. For material changes, we will
        notify you in-app or by email. Continued use after changes constitutes
        acceptance.
      </p>

      <h2>12. Apple</h2>
      <p>
        These Terms are between you and us, not Apple. Apple is not a party to
        these Terms and is not responsible for the app or its content. Apple has
        no obligation to furnish any maintenance or support services for the app.
      </p>
      <p>
        In the event of any failure of the app to conform to any applicable
        warranty, you may notify Apple and Apple will refund the purchase price
        (if any) to you. To the maximum extent permitted by applicable law,
        Apple has no other warranty obligation with respect to the app.
      </p>
      <p>
        We, not Apple, are responsible for addressing any claims by you or any
        third party relating to the app, including: (a) product liability
        claims; (b) any claim that the app fails to conform to any applicable
        legal or regulatory requirement; and (c) consumer protection or similar
        claims.
      </p>
      <p>
        In the event of any third-party claim that the app or your possession
        and use of it infringes that third party's intellectual property rights,
        we, not Apple, are solely responsible for the investigation, defense,
        settlement, and discharge of that claim.
      </p>
      <p>
        Apple and its subsidiaries are third-party beneficiaries of these Terms
        and, upon your acceptance, Apple has the right to enforce these Terms
        against you as a third-party beneficiary. You confirm you are not
        located in a country subject to a U.S. Government embargo or designated
        as a terrorist-supporting country, and you are not listed on any U.S.
        Government prohibited or restricted parties list.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of New Brunswick, Canada. Venue
        and jurisdiction lie in New Brunswick.
      </p>

      <h2>14. Contact</h2>
      <p>
        <a href="mailto:support@sashaplus.app">support@sashaplus.app</a>
      </p>

    </LegalPage>
  );
}
