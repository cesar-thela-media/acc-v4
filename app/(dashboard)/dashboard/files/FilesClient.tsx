"use client";

import { Badge } from "@/components/ui/Badge";
import { Button, buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EVENTS } from "@/lib/events";

export function FilesClient({ hasCertificates }: { hasCertificates: boolean }) {
  const ceuEvents = EVENTS.filter((ev) => ev.ceus);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-eyebrow">Files</p>
        <h1 className="text-page-title">CEU certificates</h1>
      </div>

      {!hasCertificates && (
        <Card className="flex flex-col gap-1">
          <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
            Certificate generation isn&apos;t configured yet.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
            Once the certificate template is connected, downloads will appear here for every CEU-eligible session.
          </p>
        </Card>
      )}

      {ceuEvents.length === 0 ? (
        <Card className="py-14 text-center">
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            No CEU sessions yet.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {ceuEvents.map((ev) => (
            <Card key={ev.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-sage-100)", color: "var(--color-sage-600)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                    {ev.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="success">{ev.ceus} CEU{ev.ceus !== 1 ? "s" : ""}</Badge>
                    <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
                      {ev.date}
                    </span>
                  </div>
                </div>
              </div>
              {hasCertificates ? (
                <a
                  href={`/api/certificate?workshop=${encodeURIComponent(ev.title)}&ceus=${ev.ceus}`}
                  className={`sm:shrink-0 ${buttonClasses("secondary", "sm")}`}
                >
                  Download certificate
                </a>
              ) : (
                <Button variant="secondary" size="sm" disabled className="sm:shrink-0" title="Certificate generation isn't configured yet.">
                  Download certificate
                </Button>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
