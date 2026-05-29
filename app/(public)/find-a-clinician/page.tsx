"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const MEMBERS = [
  { name: "Dr. Maya Okonkwo", credentials: "LCSW", specialties: ["Trauma", "Grief", "EMDR"], city: "Austin, TX", format: "Virtual", accepting: true, bio: "Trauma-informed care for adults navigating complex grief and loss." },
  { name: "James Whitfield", credentials: "LPC", specialties: ["Couples", "Attachment", "Gottman"], city: "Austin, TX", format: "Hybrid", accepting: false, bio: "Helping couples and individuals rebuild trust after relational rupture." },
  { name: "Sofia Reyes", credentials: "LMFT", specialties: ["Family", "Bilingual", "Anxiety"], city: "Austin, TX", format: "Hybrid", accepting: true, bio: "Culturally responsive family therapy for first-generation and bilingual families." },
  { name: "Dr. Claire Hutchinson", credentials: "PhD", specialties: ["OCD", "Anxiety", "ERP"], city: "Austin, TX", format: "Virtual", accepting: true, bio: "Evidence-based treatment for OCD, anxiety disorders, and related conditions." },
  { name: "Marcus Lee", credentials: "LPC", specialties: ["Somatic", "Burnout", "Mindfulness"], city: "Austin, TX", format: "In-person", accepting: true, bio: "Somatic therapy for burnout, chronic stress, and mind-body integration." },
  { name: "Priya Nair", credentials: "LCSW", specialties: ["Perinatal", "Postpartum", "Women"], city: "Austin, TX", format: "Hybrid", accepting: false, bio: "Perinatal and postpartum mental health support for new and expecting mothers." },
  { name: "Thomas Garza", credentials: "LMFT", specialties: ["LGBTQ+", "Couples", "Identity"], city: "Austin, TX", format: "Virtual", accepting: true, bio: "Affirming therapy for LGBTQ+ individuals and couples exploring identity." },
  { name: "Rachel Bloom", credentials: "LPC", specialties: ["Adolescents", "Young Adults", "Transitions"], city: "Austin, TX", format: "Hybrid", accepting: true, bio: "Supporting teens and young adults through life transitions and identity development." },
  { name: "Dr. Ade Kolade", credentials: "PsyD", specialties: ["Cultural Identity", "Men", "Workplace"], city: "Austin, TX", format: "Virtual", accepting: true, bio: "Culturally grounded therapy for Black men, workplace stress, and racial identity." },
];

const ALL_SPECIALTIES = Array.from(new Set(MEMBERS.flatMap((m) => m.specialties))).sort();

export default function FindAClinicianPage() {
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filtered = useMemo(() => {
    return MEMBERS.filter((m) => {
      if (search && !`${m.name} ${m.bio} ${m.specialties.join(" ")}`.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedSpecialty !== "All" && !m.specialties.includes(selectedSpecialty)) return false;
      return true;
    });
  }, [search, selectedSpecialty]);

  return (
    <>
      {/* HERO */}
      <section
        className="pt-28 md:pt-32 pb-16 md:pb-20"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--color-sage-600)" }}
          >
            Find a clinician
          </p>
          <h1
            className="leading-tight mb-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-serif), Manrope, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Browse our trusted network of clinicians.
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Every therapist in The Circle is vetted, licensed, and committed to
            excellent clinical care. Search by name, specialty, or clinical focus.
          </p>
        </div>
      </section>

      {/* DIRECTORY */}
      <section
        className="pb-20 md:pb-28"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, specialty, or focus..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-cream-300)",
                  color: "var(--color-text-primary)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-sage-500)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(107,133,114,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-cream-300)"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
              style={{
                background: "#fff",
                border: "1px solid var(--color-cream-300)",
                color: "var(--color-text-primary)",
              }}
            >
              <option value="All">All specialties</option>
              {ALL_SPECIALTIES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-3" style={{ color: "var(--color-text-tertiary)" }}>
              <span className="text-3xl" style={{ opacity: 0.3 }}>◎</span>
              <p className="text-sm">No clinicians match your search.</p>
              <button
                onClick={() => { setSearch(""); setSelectedSpecialty("All"); }}
                className="text-xs font-medium underline"
                style={{ color: "var(--color-sage-700)", textUnderlineOffset: "3px" }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs mb-6" style={{ color: "var(--color-text-tertiary)" }}>
                {filtered.length} clinician{filtered.length !== 1 ? "s" : ""} found
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      border: "1px solid rgba(197,200,190,0.5)",
                      boxShadow: "0 2px 16px rgba(74,93,78,0.07)",
                      borderLeft: member.accepting
                        ? "4px solid var(--color-success)"
                        : "4px solid var(--color-cream-300)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-base font-medium shrink-0"
                        style={{ background: "var(--color-sage-100)", color: "var(--color-sage-600)" }}
                      >
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                            {member.name}, {member.credentials}
                          </p>
                          {member.accepting && (
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-success)" }} />
                          )}
                        </div>
                        <p className="text-xs mt-0.5" style={{ color: "var(--color-text-tertiary)" }}>
                          {member.city} · {member.format}
                        </p>
                        {member.accepting && (
                          <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium" style={{ color: "var(--color-success)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-success)" }} />
                            Accepting new clients
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium"
                          style={{ background: "rgba(228,235,230,0.7)", color: "var(--color-sage-700)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
              Are you a licensed therapist? Join The Circle and get listed in the directory.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Apply for membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
