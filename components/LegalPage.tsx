// Shared layout wrapper for all legal pages (Privacy, Terms, Support).
// Usage: wrap page content in <LegalPage title="..." updated="...">
// The prose styling lives here — update once, applies everywhere.

interface LegalPageProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 pb-28">
      {/* Header */}
      <div className="mb-12 border-b border-white/[0.07] pb-8">
        <h1 className="mb-3 text-[32px] font-bold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-[13px] text-white/35">
          Last updated: {updated}
        </p>
      </div>

      {/* Content — prose styles applied via className on children */}
      <div className="legal-content">{children}</div>

      <style>{`
        .legal-content h2 {
          font-size: 18px;
          font-weight: 600;
          color: rgba(255,255,255,0.90);
          margin-top: 40px;
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }
        .legal-content h3 {
          font-size: 15px;
          font-weight: 600;
          color: rgba(255,255,255,0.70);
          margin-top: 24px;
          margin-bottom: 8px;
        }
        .legal-content p {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.60);
          margin-bottom: 14px;
        }
        .legal-content a {
          color: #e8952a;
          text-decoration: none;
        }
        .legal-content a:hover {
          text-decoration: underline;
        }
        .legal-content ul, .legal-content ol {
          padding-left: 20px;
          margin-bottom: 14px;
        }
        .legal-content li {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.60);
          margin-bottom: 4px;
        }
        .legal-content strong {
          color: rgba(255,255,255,0.80);
          font-weight: 600;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          margin: 16px 0 20px;
        }
        .legal-content th {
          text-align: left;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: rgba(255,255,255,0.35);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .legal-content td {
          padding: 10px 12px;
          color: rgba(255,255,255,0.55);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          vertical-align: top;
        }
        .legal-content tr:last-child td {
          border-bottom: none;
        }
        .legal-content .callout {
          background: rgba(232,149,42,0.07);
          border: 1px solid rgba(232,149,42,0.22);
          border-radius: 10px;
          padding: 14px 18px;
          margin: 16px 0;
        }
        .legal-content .callout p {
          margin-bottom: 0;
          color: rgba(255,255,255,0.65);
        }
        .legal-content .callout strong {
          color: #e8952a;
        }
      `}</style>
    </div>
  );
}
