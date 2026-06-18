import Link from "next/link";
import { ConsultationScheduler } from "@/components/ConsultationScheduler";

/* ── Design tokens ─────────────────────────────────────── */
const FOREST  = "#1C2B21";   // hero + final CTA
const FOREST2 = "#222F28";   // why acc section (slightly lighter)
const AMBER   = "#C8921E";   // darker amber for buttons — matches reference closer
const CREAM   = "#F4F1EB";   // warm off-white for testimonials bg

/* ── Testimonial data ──────────────────────────────────── */
const testimonials = [
  {
    quote: "I went three years without a single peer consultation. I didn't realize how much I was carrying until I talked to another clinician.",
    author: "Anonymous, LPC-S",
    location: "Austin, TX",
  },
  {
    quote: "I started dreading Mondays. Not because of my clients — because I was completely alone with the weight of it.",
    author: "Anonymous, PhD",
    location: "Austin, TX",
  },
  {
    quote: "I didn't need more CEUs. I needed someone who understood what this work actually costs.",
    author: "Anonymous, LMFT",
    location: "Cedar Park, TX",
  },
  {
    quote: "The first consultation group felt like exhaling for the first time in years.",
    author: "Anonymous, LPC",
    location: "Austin, TX",
  },
  {
    quote: "The agency had built-in support I never appreciated until it was gone. Private practice felt like flying blind.",
    author: "Anonymous, LCSW",
    location: "Round Rock, TX",
  },
];

/* ── Benefit icons ─────────────────────────────────────── */
const ICON_COLOR = "var(--color-sage-600)";
const ICON_BG    = "var(--color-cream-200)";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-xl"
      style={{ width: 40, height: 40, background: ICON_BG, color: ICON_COLOR }}
    >
      {children}
    </div>
  );
}

const benefits = [
  {
    label: "Monthly Case\nConsultation",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="6" r="3" />
          <path d="M2 18c0-3.31 2.69-6 6-6" />
          <circle cx="14.5" cy="9" r="2.5" opacity=".55" />
          <path d="M10.5 17.5c0-2.5 1.8-4.6 4-5.5" opacity=".55" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Curated\nResource Library",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="14" height="16" rx="2" />
          <path d="M7 7h6M7 10.5h6M7 14h3.5" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Referral\nNetwork",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="4" cy="10" r="2" />
          <circle cx="16" cy="4.5" r="2" />
          <circle cx="16" cy="15.5" r="2" />
          <path d="M6 10h3.5l4-4.5M9.5 10l4 4.5" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Continuing\nEducation",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2.5 1.5 7.5l8.5 5 8.5-5-8.5-5z" />
          <path d="M1.5 7.5v5c3.5 2.5 5.5 3 8.5 3s5-.5 8.5-3v-5" />
          <path d="M18.5 7.5v6" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Public Directory\nListing",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="16" height="16" rx="2" />
          <circle cx="10" cy="8.5" r="2.5" />
          <path d="M5 18c0-2.76 2.24-5 5-5s5 2.24 5 5" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Practice\nCoaching",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2C5.58 2 2 5.13 2 9c0 2.08 1.04 3.96 2.7 5.25L4 17.5l3.9-1.56A10.4 10.4 0 0 0 10 16c4.42 0 8-3.13 8-7s-3.58-7-8-7z" />
          <path d="M7 9h.01M10 9h.01M13 9h.01" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Professional Will\nDesignation",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-4-4z" />
          <path d="M13 2v4h4M7 9h6M7 12h6M7 15h3" />
        </svg>
      </Icon>
    ),
  },
  {
    label: "Private Online\nCommunity",
    svg: (
      <Icon>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 12.5a2 2 0 0 1-2 2H6l-4 4V3.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
        </svg>
      </Icon>
    ),
  },
];

/* ── Pricing feature list ──────────────────────────────── */
const pricingLeft  = [
  "Monthly case consultation",
  "Full access to resource library",
  "Referral network connection",
  "Continuing education discounts",
];
const pricingRight = [
  "Public directory listing",
  "Practice coaching support",
  "Professional will designation",
  "Private online community",
];

/* ── Amber filled check circle ─────────────────────────── */
function Checkmark() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8.5" cy="8.5" r="8.5" fill={AMBER} />
      <path
        d="M5 8.5l2.5 2.5 4.5-5"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: FOREST,
          minHeight: "100svh",
          paddingTop: "80px",
          paddingBottom: "96px",
        }}
      >
        {/* Concentric rings */}
        {[680, 500, 340].map((d, i) => (
          <div
            key={d}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: d,
              height: d,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              border: `1px solid rgba(255,255,255,${0.06 - i * 0.015})`,
            }}
          />
        ))}

        {/* Warm glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 48%, rgba(200,146,30,0.08) 0%, transparent 65%)",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center w-full"
          style={{ maxWidth: 900, padding: "0 1.5rem" }}
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-medium uppercase tracking-[0.28em] mb-8"
            style={{
              color: "rgba(200,146,30,0.8)",
              animation: "fadeInUp 0.55s 0.1s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            For licensed clinicians in Austin, TX
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(3.25rem, 9vw, 7rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.0,
              marginBottom: "2.75rem",
              animation: "fadeInUp 0.75s 0.2s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <span style={{ color: "#fff", display: "block", marginBottom: "0.08em" }}>
              Deepen your work.
            </span>
            <em
              style={{
                color: "#C8921E",
                fontStyle: "italic",
                display: "block",
              }}
            >
              Find your people.
            </em>
          </h1>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{ animation: "fadeInUp 0.75s 0.36s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{
                background: AMBER,
                color: "#fff",
                padding: "0.75rem 2rem",
                transition: "filter 0.25s, transform 0.25s",
              }}
              onMouseEnter={undefined}
            >
              Apply for membership
            </Link>
            <Link
              href="/what-we-offer"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.88)",
                padding: "0.75rem 2rem",
              }}
            >
              See what&apos;s included →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY ACC EXISTS
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: FOREST2, padding: "clamp(4rem,8vw,7rem) 0" }}
      >
        {/* Faint glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 28%, rgba(200,146,30,0.06) 0%, transparent 65%)",
          }}
        />

        <div
          className="relative z-10 container-fluid text-center"
          style={{ maxWidth: 760 }}
        >
          {/* Eyebrow */}
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
            data-aos="fade-in"
            style={{ color: "rgba(200,146,30,0.75)" }}
          >
            Why ACC exists
          </p>

          {/* Heading */}
          <h2
            data-aos="fade-in-up"
            data-delay="80"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.018em",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            Private practice can feel isolating.
            <br />
            <em style={{ color: "#C8921E", fontStyle: "italic" }}>
              You don&apos;t have to do this alone.
            </em>
          </h2>

          {/* Body copy */}
          <p
            className="text-sm leading-[1.8] max-w-lg mx-auto mb-4"
            data-aos="fade-in"
            data-delay="160"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            When you leave an agency or group practice, you gain autonomy and
            lose the built-in consultation, community, and support from colleagues
            that keep your clinical work sharp. Most therapists in private practice
            never fully replace it.
          </p>

          <p
            className="text-sm font-semibold mb-14"
            data-aos="fade-in"
            data-delay="220"
            style={{ color: "#fff" }}
          >
            Austin Clinician Circle is here to change that.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 mb-12"
            data-aos="fade-in-up"
            data-delay="160"
          >
            {[
              { stat: "67%",    sub: "feel isolated in\nprivate practice" },
              { stat: "3 years", sub: "average without formal\npeer consultation" },
              { stat: "89%",    sub: "say peer support improved\ntheir confidence" },
            ].map((item, i) => (
              <div
                key={item.stat}
                className="flex flex-col items-center py-5 px-2 md:px-4"
                style={
                  i === 1
                    ? {
                        borderLeft: "1px solid rgba(255,255,255,0.1)",
                        borderRight: "1px solid rgba(255,255,255,0.1)",
                      }
                    : {}
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.stat}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.48)",
                    whiteSpace: "pre-line",
                    maxWidth: 120,
                    display: "block",
                  }}
                >
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Founder pills */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5"
            data-aos="fade-in"
            data-delay="340"
          >
            {["Founded by [Clinical Founder], LPC-S", "Austin, Texas"].map((txt) => (
              <span
                key={txt}
                className="inline-flex items-center rounded-full text-xs"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.62)",
                  padding: "0.45rem 1.1rem",
                }}
              >
                {txt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: CREAM,
          padding: "clamp(4rem,8vw,7rem) 0",
        }}
      >
        <div className="container-fluid">
          {/* Eyebrow */}
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
            data-aos="fade-in"
            style={{ color: "#C8921E" }}
          >
            What members say before they join
          </p>

          {/* 3-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            {/* Col 1 — heading + large card */}
            <div className="flex flex-col gap-5">
              <div data-aos="fade-in-up">
                <h2
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.12,
                    color: "var(--color-sage-900)",
                    marginBottom: "0.45rem",
                  }}
                >
                  Recognition is the first thing.
                </h2>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                  You don&apos;t have to carry it all alone.
                </p>
              </div>

              {/* Large card */}
              <QuoteCard quote={testimonials[0]} delay={80} />
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-5">
              <QuoteCard quote={testimonials[1]} delay={140} />
              <QuoteCard quote={testimonials[2]} delay={200} />
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-5">
              <QuoteCard quote={testimonials[3]} delay={200} />
              <QuoteCard quote={testimonials[4]} delay={260} />
            </div>
          </div>

          {/* Footer note */}
          <p
            className="text-center text-sm font-medium mt-12"
            data-aos="fade-in"
            data-delay="180"
            style={{ color: "var(--color-sage-700)" }}
          >
            Austin Clinician Circle was built for this moment.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MEMBERSHIP INCLUDES
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#fff",
          padding: "clamp(4rem,8vw,7rem) 0",
        }}
      >
        <div className="container-fluid">
          {/* Heading left + icon grid right */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-10 xl:gap-16 items-start"
            style={{ marginBottom: "3.5rem" }}
          >
            {/* Left heading */}
            <div data-aos="fade-in-up">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-4"
                style={{ color: "#C8921E" }}
              >
                Membership includes
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.18,
                  color: "var(--color-sage-900)",
                }}
              >
                Everything you need to thrive in private practice.
              </h2>
            </div>

            {/* 5-col icon grid at xl, 2-col on mobile */}
            <div
              className="grid gap-x-4 gap-y-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              }}
            >
              {benefits.map((b, i) => (
                <div
                  key={b.label}
                  className="flex flex-col gap-2.5"
                  data-aos="fade-in-up"
                  data-delay={String(((i % 5) + 1) * 60)}
                >
                  {b.svg}
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: 1.45,
                      color: "var(--color-sage-800)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Scheduler */}
          <div data-aos="fade-in-up" data-delay="80">
            <ConsultationScheduler />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--color-cream-100)",
          padding: "clamp(4rem,8vw,7rem) 0",
        }}
      >
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-10 xl:gap-16 items-center">
            {/* Left text */}
            <div data-aos="fade-in-up">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-4"
                style={{ color: "#C8921E" }}
              >
                Membership
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.18,
                  color: "var(--color-sage-900)",
                }}
              >
                Simple,<br />
                all-inclusive<br />
                pricing.
              </h2>
            </div>

            {/* Card */}
            <div
              data-aos="scale-in"
              data-delay="80"
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--color-cream-300)",
                boxShadow: "0 4px 30px rgba(27,27,27,0.06)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[180px,1fr]">
                {/* Price */}
                <div
                  className="flex flex-col items-center justify-center"
                  style={{
                    padding: "2.5rem 1.5rem",
                    borderRight: "1px solid var(--color-cream-200)",
                  }}
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "clamp(3rem, 7vw, 5.25rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "var(--color-sage-800)",
                      }}
                    >
                      $79
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--color-text-tertiary)",
                        alignSelf: "flex-end",
                        paddingBottom: "4px",
                      }}
                    >
                      /month
                    </span>
                  </div>
                </div>

                {/* Features + CTA */}
                <div style={{ padding: "2rem 2rem" }}>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5"
                    style={{ marginBottom: "1.75rem" }}
                  >
                    {[...pricingLeft.map((f, i) => [f, pricingRight[i]])].map(
                      ([left, right], i) => (
                        <div key={i} className="contents">
                          <div className="flex items-center gap-2">
                            <Checkmark />
                            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                              {left}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkmark />
                            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                              {right}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <Link
                    href="/join"
                    className="block text-center w-full rounded-full text-sm font-medium"
                    style={{
                      background: AMBER,
                      color: "#fff",
                      padding: "0.85rem 1.5rem",
                    }}
                  >
                    Apply for membership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          background: FOREST,
          padding: "clamp(5rem,10vw,8rem) 1.5rem",
        }}
      >
        {/* Rings */}
        {[500, 340].map((d) => (
          <div
            key={d}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: d,
              height: d,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        ))}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(200,146,30,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10">
          <h2
            data-aos="fade-in-up"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.018em",
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: "2.25rem",
            }}
          >
            You&apos;ve been doing this alone
            <br />
            <em style={{ color: "#C8921E", fontStyle: "italic" }}>long enough.</em>
          </h2>

          <Link
            href="/join"
            data-aos="fade-in-up"
            data-delay="100"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium"
            style={{
              background: AMBER,
              color: "#fff",
              padding: "0.85rem 2.5rem",
            }}
          >
            Join the Circle
          </Link>
        </div>
      </section>
    </>
  );
}

/* ── Shared quote card ─────────────────────────────────── */
function QuoteCard({
  quote,
  delay,
}: {
  quote: { quote: string; author: string; location: string };
  delay: number;
}) {
  return (
    <div
      data-aos="fade-in-up"
      data-delay={String(delay)}
      style={{
        background: "#fff",
        border: "1px solid #E8E3DA",
        borderRadius: "14px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(0.9rem, 1.15vw, 1.05rem)",
          fontStyle: "italic",
          lineHeight: 1.65,
          color: "var(--color-sage-800)",
        }}
      >
        &ldquo;{quote.quote}&rdquo;
      </p>
      <div>
        <p
          style={{
            fontSize: "11.5px",
            fontWeight: 500,
            color: "var(--color-sage-600)",
          }}
        >
          — {quote.author}
        </p>
        <p style={{ fontSize: "11px", color: "var(--color-text-tertiary)", marginTop: "1px" }}>
          {quote.location}
        </p>
      </div>
    </div>
  );
}
