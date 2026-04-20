"use client";

import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // TODO: wire to email service (Resend)
    console.log("Captured email:", email);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-cream-100)" }}>
      {/* NAV */}
      <header className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="text-lg font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--color-sage-800)" }}
        >
          Austin Clinician Circle
        </span>
        <span
          className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full border"
          style={{ color: "var(--color-sage-700)", borderColor: "var(--color-cream-400)", background: "var(--color-sage-50)" }}
        >
          Coming Soon
        </span>
      </header>

      {/* HERO */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="text-sm font-medium uppercase tracking-widest mb-6"
            style={{ color: "var(--color-sage-600)" }}
          >
            A Virtual Support Network for Therapists
          </p>

          {/* Headline */}
          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Deepen your work.
            <br />
            Find your community.
          </h1>

          {/* Sub */}
          <p
            className="text-lg leading-relaxed mb-10 mx-auto max-w-xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            The Austin Clinician Circle is a membership network for licensed
            therapists — built to combat the isolation of private practice with
            clinical consultation, CEUs, a referral network, and more.
          </p>

          {/* Email capture */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center items-start sm:items-center"
            >
              <div className="flex flex-col w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full sm:w-72 px-4 py-3 text-sm rounded-full border outline-none transition-colors duration-150"
                  style={{
                    borderColor: error ? "var(--color-error)" : "var(--color-cream-400)",
                    background: "#fff",
                    color: "var(--color-text-primary)",
                  }}
                />
                {error && (
                  <span className="text-xs mt-1 ml-4" style={{ color: "var(--color-error)" }}>
                    {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="px-7 py-3 text-sm font-medium rounded-full transition-colors duration-150 whitespace-nowrap"
                style={{ background: "var(--color-sage-700)", color: "#fff" }}
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              style={{
                background: "var(--color-sage-50)",
                color: "var(--color-sage-700)",
                border: "1px solid var(--color-sage-100)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8l3.5 3.5L13 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              You&apos;re on the list — we&apos;ll be in touch soon.
            </div>
          )}

          {/* Divider */}
          <div className="my-12 h-px w-24 mx-auto" style={{ background: "var(--color-cream-300)" }} />

          {/* Value pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: "◎",
                title: "Clinical Focus",
                body: "Monthly case consultation, CEUs, and a curated resource library.",
              },
              {
                icon: "◈",
                title: "Professional Growth",
                body: "A trusted referral network, directory listing, and business guidance.",
              },
              {
                icon: "◇",
                title: "Custom Support",
                body: "Mindfulness for burnout prevention and discounted coaching with Sarah.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl"
                style={{ background: "#fff", border: "1px solid var(--color-cream-300)" }}
              >
                <span className="text-xl mb-3 block" style={{ color: "var(--color-sage-500)" }}>
                  {item.icon}
                </span>
                <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--color-sage-800)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full px-6 py-8 text-center text-xs" style={{ color: "var(--color-text-tertiary)" }}>
        <p>
          Austin Clinician Circle &mdash; by{" "}
          <a
            href="https://www.restoredfamily.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--color-sage-600)" }}
          >
            Restored Family Counseling
          </a>
        </p>
        <p className="mt-1">Austin, TX &mdash; Virtual Network</p>
      </footer>
    </div>
  );
}
