"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = ["All", "Trauma", "Anxiety", "Couples", "ADHD", "Grief"];

const GROUPS = [
  { lead: "Maya R.",    credentials: "LCSW-S", next: "May 16  9:00 AM",  size: "5/6", enrollment: "Open", specialties: ["Trauma", "All"] },
  { lead: "Kevin D.",  credentials: "PhD",    next: "May 16  12:00 PM", size: "4/6", enrollment: "Open", specialties: ["Trauma", "Anxiety", "All"] },
  { lead: "Sarah J.",  credentials: "LPC-S",  next: "May 17  10:00 AM", size: "5/6", enrollment: "Open", specialties: ["Trauma", "All"] },
  { lead: "Amanda T.", credentials: "LCSW",   next: "May 20  1:00 PM",  size: "3/6", enrollment: "Open", specialties: ["Trauma", "Couples", "All"] },
];

export function ConsultationScheduler() {
  const [active, setActive] = useState("Trauma");

  const filtered = GROUPS.filter((g) => g.specialties.includes(active));

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--color-cream-300)",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(27,27,27,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--color-cream-200)" }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--color-sage-800)" }}
        >
          Consultation Scheduler
        </span>
      </div>

      {/* Tabs */}
      <div
        className="px-6 py-3 flex items-center gap-2 flex-wrap"
        style={{ borderBottom: "1px solid var(--color-cream-200)" }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            style={
              active === tab
                ? {
                    background: "var(--color-accent-highlight)",
                    color: "#1B1B1B",
                  }
                : {
                    background: "transparent",
                    color: "var(--color-text-tertiary)",
                  }
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-cream-200)" }}>
              {["Group Lead", "Credentials", "Next Available", "Group Size", "Enrollment", "Join"].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-8 text-center text-sm"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  No groups currently available in this specialty.
                </td>
              </tr>
            ) : (
              filtered.map((g, i) => (
                <tr
                  key={g.lead}
                  style={{
                    borderBottom: i < filtered.length - 1 ? "1px solid var(--color-cream-200)" : "none",
                  }}
                >
                  <td className="px-6 py-4 font-medium" style={{ color: "var(--color-sage-800)" }}>
                    {g.lead}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--color-text-secondary)" }}>
                    {g.credentials}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--color-text-secondary)" }}>
                    {g.next}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--color-text-secondary)" }}>
                    {g.size}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-success)" }}
                    >
                      {g.enrollment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href="/join"
                      className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80"
                      style={{
                        border: "1px solid var(--color-cream-300)",
                        color: "var(--color-sage-700)",
                        background: "var(--color-cream-100)",
                      }}
                    >
                      Join
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="px-6 py-4 flex items-center justify-between flex-wrap gap-3"
        style={{ borderTop: "1px solid var(--color-cream-200)" }}
      >
        <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
          All times CT &nbsp;·&nbsp; Groups meet monthly &nbsp;·&nbsp; 90 minutes
        </span>
        <Link
          href="/join"
          className="text-xs font-medium transition-colors duration-200 hover:underline"
          style={{ color: "var(--color-sage-600)" }}
        >
          View all groups →
        </Link>
      </div>
    </div>
  );
}
