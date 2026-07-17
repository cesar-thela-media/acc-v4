"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { EVENTS } from "@/lib/events";
import { downloadIcsEvent } from "@/lib/ics";

const categoryColor: Record<string, "default" | "success" | "warning" | "accent" | "highlight"> = {
  Consultation: "default",
  Workshop: "accent",
  CEU: "success",
  "Self-Care": "highlight",
};

export function EventsClient({ hasCertificates }: { hasCertificates: boolean }) {
  const [rsvpd, setRsvpd] = useState<Set<number>>(new Set([1]));
  const [expanded, setExpanded] = useState<number | null>(null);

  function toggleRsvp(id: number) {
    setRsvpd((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-eyebrow">Events</p>
        <h1 className="text-page-title">Upcoming events</h1>
      </div>

      <div className="flex flex-col gap-4">
        {EVENTS.map((ev) => {
          const isRsvpd = rsvpd.has(ev.id);
          const isExpanded = expanded === ev.id;
          return (
            <div
              key={ev.id}
              className="bg-white rounded-2xl border overflow-hidden transition-shadow hover:shadow-md"
              style={{ borderColor: "rgba(194,150,58,0.12)" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                onClick={() => setExpanded(isExpanded ? null : ev.id)}
              >
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant={categoryColor[ev.category] ?? "default"}>{ev.category}</Badge>
                    {ev.ceus && <Badge variant="success">{ev.ceus} CEU{ev.ceus !== 1 ? "s" : ""}</Badge>}
                    {isRsvpd && <Badge variant="success">RSVP&apos;d</Badge>}
                  </div>
                  <p className="text-base font-semibold mt-1" style={{ color: "var(--color-sage-800)" }}>{ev.title}</p>
                  <p className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>
                    {ev.date} · {ev.time} · {ev.format}
                  </p>
                </div>
                <span
                  className="text-lg mt-1 shrink-0 transition-transform"
                  style={{
                    color: "var(--color-text-tertiary)",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ⌄
                </span>
              </button>

              {isExpanded && (
                <div
                  className="px-6 pb-6 border-t pt-4 flex flex-col gap-4"
                  style={{ borderColor: "rgba(194,150,58,0.10)" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {ev.description}
                  </p>
                  {ev.spots && (
                    <p className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
                      {ev.spots} spots available
                    </p>
                  )}
                  <div className="flex gap-3 items-center flex-wrap">
                    <Button
                      variant={isRsvpd ? "secondary" : "primary"}
                      size="sm"
                      onClick={() => toggleRsvp(ev.id)}
                    >
                      {isRsvpd ? "Cancel RSVP" : "RSVP"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        downloadIcsEvent({
                          title: ev.title,
                          description: ev.description,
                          dateLabel: ev.date,
                          startHour: ev.startHour,
                          durationMinutes: ev.durationMinutes,
                        })
                      }
                    >
                      Add to calendar
                    </Button>
                    {hasCertificates && isRsvpd && ev.ceus && (
                      <a
                        href={`/api/certificate?workshop=${encodeURIComponent(ev.title)}&ceus=${ev.ceus}`}
                        className="text-xs font-medium underline"
                        style={{ color: "var(--color-sage-700)", textUnderlineOffset: "3px" }}
                      >
                        Download certificate →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── 1-on-1 Coaching ─────────────────────────────────────────────── */}
      <div>
        <div className="mb-5">
          <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-sage-600)" }}>Practice coaching</p>
          <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "var(--color-sage-900)" }}>
            Book a session with Sarah
          </h2>
        </div>
        <CalendlyEmbed />
      </div>
    </div>
  );
}
