import Link from "next/link";

/* ── Reference design tokens ───────────────────────────────── */
const HERO_BG   = "#2D3B2C";   // deep forest sage — hero, CTA band, footer
const SECTION2  = "#FFFFFF";   // white — why acc exists
const PARCHMENT = "#F0EDE6";   // warm parchment — sections 4-5
const AMBER     = "#C2963A";   // muted warm amber — accents, CTAs

/* ── Pricing features ─────────────────────────────────────── */
const pricingFeatures = [
  ["Monthly case consultation",       "Public directory listing"],
  ["Full access to resource library", "Practice coaching support"],
  ["Referral network connection",     "Professional will designation"],
  ["Continuing education discounts",  "Private online community"],
];

/* ── Shared components ────────────────────────────────────── */
function AmberCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="8" cy="8" r="8" fill={AMBER} />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: HERO_BG, minHeight: "100svh", paddingTop: 80, paddingBottom: 100 }}
      >
        {/* 5 concentric rings — innermost brightest (8%), outermost most faded (3%).
            vw-relative so they span ~75% viewport at any desktop size (1440–1920px). */}
        {["75vw","58vw","43vw","28vw","15vw"].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size, height: size,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              border: `1px solid rgba(255,255,255,${(0.03 + i * 0.013).toFixed(3)})`,
            }}
          />
        ))}

        {/* Crosshair mark — upper right */}
        <div className="absolute pointer-events-none" style={{ top: 28, right: 28, opacity: 0.18 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="9" y1="0" x2="9" y2="18" stroke="white" strokeWidth="0.6" />
            <line x1="0" y1="9" x2="18" y2="9" stroke="white" strokeWidth="0.6" />
          </svg>
        </div>

        {/* Three thin horizontal hairlines */}
        {[
          { top: "22%", left: "8%",  width: "55%" },
          { top: "58%", left: "22%", width: "40%" },
          { top: "80%", left: "12%", width: "62%" },
        ].map((h, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{ top: h.top, left: h.left, width: h.width, height: "0.5px", background: "rgba(255,255,255,0.04)" }}
          />
        ))}

        {/* Warm amber glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 55% 48% at 50% 48%, rgba(194,150,58,0.07) 0%, transparent 65%)` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center" style={{ maxWidth: 1100, padding: "0 1.5rem", width: "100%", margin: "0 auto" }}>
          {/* Eyebrow */}
          <p
            className="uppercase tracking-[0.28em] font-medium mb-8 text-xs"
            style={{
              color: `rgba(194,150,58,0.78)`,
              animation: "fadeInUp 0.55s 0.1s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            For licensed clinicians in Austin, TX
          </p>

          {/* Headline — Playfair Display 400 (closest free match to Tiempos Fine / Freight Display Light) */}
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(3rem, 7.2vw, 6rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              marginBottom: "2.75rem",
              animation: "fadeInUp 0.75s 0.2s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <span style={{ color: "#fff", display: "block" }}>Deepen your work.</span>
            <em style={{ color: AMBER, fontStyle: "italic", display: "block" }}>Find your community.</em>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.55)", animation: "fadeInUp 0.75s 0.28s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            A membership network for licensed therapists who want to do deeper work, together.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animation: "fadeInUp 0.75s 0.36s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{ background: AMBER, color: "#fff", padding: "0.8rem 2.1rem" }}
            >
              Apply for membership
            </Link>
            <Link
              href="/what-we-offer"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.88)", padding: "0.8rem 2.1rem" }}
            >
              See what&apos;s included →
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.6)", padding: "0.8rem 2.1rem" }}
            >
              Sign In →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY ACC EXISTS ══════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: SECTION2, padding: "clamp(3rem,6vw,5.5rem) 0" }}
      >
        <div className="container-fluid text-center relative z-10" style={{ maxWidth: 900 }}>
          {/* Eyebrow */}
          <p className="uppercase tracking-[0.28em] font-medium text-[11px] mb-5" data-aos="fade-in" style={{ color: `rgba(194,150,58,0.85)` }}>
            Why The Circle exists
          </p>

          {/* Heading */}
          <h2
            data-aos="fade-in-up" data-delay="80"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.1rem, 5.5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#1A1A1A",
              marginBottom: "1.75rem",
            }}
          >
            <span style={{ display: "block" }}>Private practice can feel isolating.</span>
            <em style={{ color: AMBER, fontStyle: "italic", display: "block" }}>You don&apos;t have to do this alone.</em>
          </h2>

          {/* Body */}
          <p className="text-sm leading-[1.7] max-w-[600px] mx-auto mb-4" data-aos="fade-in" data-delay="160" style={{ color: "#3D4A3B" }}>
            When you leave an agency, you gain autonomy and lose the built-in support from colleagues that keeps your clinical work sharp. Most private practitioners never fully replace it.
          </p>
          <p className="text-sm font-semibold mb-14" data-aos="fade-in" data-delay="220" style={{ color: "#1A1A1A" }}>
            The Circle is here to change that.
          </p>

          {/* Founder pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5" data-aos="fade-in" data-delay="300">
            {["Founded by Sarah Arnold, LPC-S", "Austin, Texas"].map((txt) => (
              <span
                key={txt}
                className="inline-flex items-center rounded-full text-xs"
                style={{ border: "1px solid rgba(194,150,58,0.25)", color: "#5A7060", padding: "0.45rem 1.15rem" }}
              >
                {txt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MEMBERSHIP INCLUDES ══════════════════════════════ */}
      <section style={{ background: "#4A5E48", padding: "clamp(2.5rem,5vw,4rem) 0" }}>
        <div className="container-fluid">
          <div className="text-center mb-10" data-aos="fade-in-up">
            <p className="uppercase tracking-[0.28em] font-medium text-[11px] mb-4" style={{ color: AMBER }}>
              Membership includes
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.018em",
                lineHeight: 1.18,
                color: "#fff",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Everything you need to thrive in private practice.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { title: "Monthly case consultation", body: "A structured consultation group led by Sarah Arnold, LPC-S. Bring a real case, get real support from peers who understand the clinical realities of your work." },
              { title: "Curated resource library", body: "Clinical tools, handouts, and business guides, organized, downloadable, and built for active private practice." },
              { title: "Referral network", body: "A trusted, vetted circle of clinicians. Get referred, refer with confidence. Build relationships that last longer than a single consult." },
              { title: "Continuing education", body: "CEU trainings each month on clinical and business topics, all virtual, all archived, and all included in your membership." },
              { title: "Public directory listing", body: "A professionally crafted listing in our public clinician directory, searchable by specialty, format, and availability. Clients find you here." },
              { title: "Practice coaching access", body: "Discounted one-on-one practice-building sessions with Sarah Arnold, LPC-S on fees, marketing, burnout, and long-term sustainability." },
              { title: "Professional Will designation", body: "Guidance and structure for putting a professional will in place so your practice is cared for responsibly." },
              { title: "Private online community", body: "A private online community for real-time support, connection, and steady encouragement between meetings." },
            ].map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-in-up"
                data-delay={String((i + 1) * 60)}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: "#fff", border: "1px solid rgba(194,150,58,0.18)" }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(194,150,58,0.12)" }}>
                  <span className="w-1.5 h-1.5 rounded-full block" style={{ background: AMBER }} />
                </span>
                <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--color-sage-800)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══════════════════════════════════════════ */}
      <section style={{ background: PARCHMENT, padding: "clamp(2.5rem,5vw,4rem) 0", borderTop: `1px solid rgba(194,150,58,0.12)` }}>
        <div className="container-fluid">
          {/* Centered header */}
          <div className="text-center mb-8" data-aos="fade-in-up">
            <p className="uppercase tracking-[0.28em] font-medium text-[11px] mb-3" style={{ color: AMBER }}>
              Membership
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.018em",
                lineHeight: 1.18,
                color: "#1A1A1A",
              }}
            >
              Simple, all-inclusive pricing.
            </h2>
          </div>

          {/* Pricing card */}
          <div
            data-aos="scale-in"
            data-delay="80"
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid rgba(194,150,58,0.22)" }}
          >
              <div className="grid grid-cols-1 md:grid-cols-[190px,1fr]">
                {/* Price */}
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "2.5rem 1.5rem", borderRight: "1px solid rgba(194,150,58,0.12)" }}
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "clamp(3rem, 7vw, 5rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "#1A1A1A",
                      }}
                    >
                      $79
                    </span>
                    <span style={{ fontSize: 13, color: "#7A7A6E", alignSelf: "flex-end", paddingBottom: 4 }}>/month</span>
                  </div>
                </div>

                {/* Features */}
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {/* Amber hairline */}
                  <div className="md:hidden" style={{ height: "0.5px", background: `rgba(194,150,58,0.3)`, marginBottom: "1.5rem", width: "100%" }} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5" style={{ marginBottom: "1.75rem", width: "100%", maxWidth: 480 }}>
                    {pricingFeatures.map(([left, right], i) => (
                      <div key={i} className="contents">
                        <div className="flex items-start gap-2">
                          <AmberCheck />
                          <span style={{ fontSize: 13, color: "#3D4A3B" }}>{left}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <AmberCheck />
                          <span style={{ fontSize: 13, color: "#3D4A3B" }}>{right}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/join"
                    className="block text-center w-full rounded-full text-sm font-medium"
                    style={{ background: AMBER, color: "#fff", padding: "0.85rem 1.5rem" }}
                  >
                    Apply for membership
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* ══ FINAL CTA BAND ═══════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-center"
        style={{ background: HERO_BG, padding: "clamp(5rem,10vw,9rem) 1.5rem" }}
      >
        {/* Rings */}
        {[480, 320].map((d) => (
          <div key={d} className="absolute rounded-full pointer-events-none"
            style={{ width: d, height: d, top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1px solid rgba(255,255,255,0.04)" }}
          />
        ))}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(194,150,58,0.07) 0%, transparent 65%)` }}
        />
        <div className="relative z-10">
          <h2
            data-aos="fade-in-up"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: "2.25rem",
            }}
          >
            You&apos;ve been doing this alone
            <br />
            <em style={{ color: AMBER, fontStyle: "italic" }}>long enough.</em>
          </h2>
          <Link
            href="/join"
            data-aos="fade-in-up"
            data-delay="100"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium"
            style={{ background: AMBER, color: "#fff", padding: "0.85rem 2.5rem" }}
          >
            Join the Circle
          </Link>
        </div>
      </section>
    </>
  );
}
