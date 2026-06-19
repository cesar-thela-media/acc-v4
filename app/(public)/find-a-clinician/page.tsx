"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ClinicianCard } from "@/components/cards/ClinicianCard";

const MEMBERS = [
  { name: "Dr. Maya Okonkwo", credentials: "LCSW", specialties: ["Trauma", "Grief", "EMDR"], format: "Virtual only", accepting: true, tagline: "Complex trauma, grief, and identity transitions — warm, evidence-based care." },
  { name: "James Whitfield", credentials: "LPC", specialties: ["Couples", "Attachment", "Gottman"], format: "Hybrid", accepting: false, tagline: "Couples therapy and relational repair grounded in Gottman Method." },
  { name: "Sofia Reyes", credentials: "LMFT", specialties: ["Family", "Bilingual", "Anxiety"], format: "Hybrid", accepting: true, tagline: "Family systems and bilingual care for Spanish-speaking families." },
  { name: "Dr. Claire Hutchinson", credentials: "PhD", specialties: ["OCD", "Anxiety", "ERP"], format: "Virtual only", accepting: true, tagline: "OCD, anxiety disorders, and ERP — specialized, compassionate treatment." },
  { name: "Marcus Lee", credentials: "LPC", specialties: ["Somatic", "Burnout", "Mindfulness"], format: "In-person only", accepting: true, tagline: "Burnout, chronic stress, and somatic work for high-achieving professionals." },
  { name: "Priya Nair", credentials: "LCSW", specialties: ["Perinatal", "Postpartum", "Women"], format: "Hybrid", accepting: false, tagline: "Perinatal and postpartum mental health — culturally attuned care." },
  { name: "Thomas Garza", credentials: "LMFT", specialties: ["LGBTQ+", "Couples", "Identity"], format: "Virtual only", accepting: true, tagline: "LGBTQ+ identity exploration and affirming couples therapy." },
  { name: "Rachel Bloom", credentials: "LPC", specialties: ["Adolescents", "Young Adults", "Transitions"], format: "Hybrid", accepting: true, tagline: "Teens, emerging adults, and life transitions — relational, strengths-based." },
  { name: "Dr. Ade Kolade", credentials: "PsyD", specialties: ["Cultural Identity", "Men", "Workplace"], format: "Virtual only", accepting: true, tagline: "Black men, workplace stress, and racial identity — culturally grounded care." },
];

const specialties = ["All", ...Array.from(new Set(MEMBERS.flatMap((m) => m.specialties))).sort()];

export default function FindAClinicianPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [acceptingOnly, setAcceptingOnly] = useState(false);

  const filtered = useMemo(() => {
    return MEMBERS.filter((m) => {
      if (search && !`${m.name} ${m.tagline} ${m.specialties.join(" ")}`.toLowerCase().includes(search.toLowerCase())) return false;
      if (specialty !== "All" && !m.specialties.includes(specialty)) return false;
      if (acceptingOnly && !m.accepting) return false;
      return true;
    });
  }, [search, specialty, acceptingOnly]);

  const acceptingCount = MEMBERS.filter((m) => m.accepting).length;

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden text-center"
        style={{ background: "#2D3B2C", minHeight: "50vh", paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(194,150,58,0.07) 0%, transparent 65%)" }}
        />
        {[50, 35, 22].map((size) => (
          <div key={size} aria-hidden className="absolute rounded-full pointer-events-none"
            style={{ width: `${size}vw`, height: `${size}vw`, border: "1px solid rgba(255,255,255,0.05)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        ))}
        <div className="relative z-10 px-5 md:px-6 max-w-2xl">
          <p className="font-medium uppercase tracking-[0.28em] text-[11px] mb-5" style={{ color: "#C2963A" }}>
            Member Directory
          </p>
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400, color: "#fff" }}
          >
            Find your people in Austin.
          </h1>
          <p className="text-base leading-relaxed mx-auto" style={{ color: "rgba(255,255,255,0.62)", maxWidth: 560 }}>
            A curated directory of licensed clinicians who share a commitment to community and clinical excellence.
          </p>
        </div>
      </section>

      {/* Directory */}
      <section style={{ background: "#F0EDE6", padding: "clamp(2.5rem,5vw,4rem) 0" }}>
        <div className="container-fluid">
          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#2D3B2C" }}>{MEMBERS.length}</span>
              <span className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>clinicians listed</span>
            </div>
            <div className="w-px h-5" style={{ background: "rgba(194,150,58,0.2)" }} />
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#2D3B2C" }}>{acceptingCount}</span>
              <span className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>accepting new clients</span>
            </div>
          </div>

          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, specialty, or keywords…"
              className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{ border: "1px solid rgba(194,150,58,0.22)", background: "#fff", color: "var(--color-text-primary)" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#C2963A"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(194,150,58,0.22)"; }}
            />
            <div className="flex flex-wrap gap-2 items-center">
              {specialties.map((s) => {
                const active = specialty === s;
                return (
                  <button key={s} type="button" onClick={() => setSpecialty(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                    style={{ background: active ? "#C2963A" : "#fff", color: active ? "#fff" : "var(--color-sage-700)", border: `1px solid ${active ? "#C2963A" : "rgba(194,150,58,0.18)"}` }}
                  >{s}</button>
                );
              })}
            </div>
          </div>

          {/* Accepting only toggle */}
          <label className="inline-flex items-center gap-2 mb-8 cursor-pointer">
            <input type="checkbox" checked={acceptingOnly} onChange={(e) => setAcceptingOnly(e.target.checked)}
              className="w-4 h-4 rounded"
              style={{ accentColor: "#C2963A" }}
            />
            <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Accepting new clients only</span>
          </label>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-base mb-2" style={{ color: "var(--color-text-secondary)" }}>No clinicians match your filters.</p>
              <button onClick={() => { setSearch(""); setSpecialty("All"); setAcceptingOnly(false); }}
                className="text-sm underline" style={{ color: "#C2963A" }}
              >Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((m) => (
                <ClinicianCard key={m.name} name={m.name} credentials={m.credentials} tagline={m.tagline} specialties={m.specialties} acceptingClients={m.accepting} href="/join" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#2D3B2C", padding: "clamp(3rem,6vw,5rem) 0" }}>
        <div className="mx-auto px-5 md:px-6 text-center" style={{ maxWidth: 680 }}>
          <p className="font-medium uppercase tracking-[0.28em] text-[11px] mb-4" style={{ color: "#C2963A" }}>
            Are you a licensed therapist?
          </p>
          <h2 className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", fontWeight: 400, color: "#fff" }}
          >
            Join The Circle. Get listed in the directory.
          </h2>
          <p className="text-base leading-relaxed mb-8 mx-auto" style={{ color: "rgba(255,255,255,0.62)", maxWidth: 520 }}>
            Members get a public directory listing, referral network access, and a professional home in Austin&rsquo;s clinical community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/join"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "#C2963A", color: "#fff" }}
            >Apply for membership</Link>
            <Link href="/what-we-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.88)" }}
            >Learn what&rsquo;s included →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
