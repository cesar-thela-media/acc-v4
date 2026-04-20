import Link from "next/link";
import { ClinicianCard } from "@/components/cards/ClinicianCard";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const stats = [
  { value: "24", label: "Active members" },
  { value: "48", label: "Clinical resources" },
  { value: "3", label: "CEU events / month" },
  { value: "100%", label: "Licensed clinicians" },
];

const benefits = [
  {
    icon: "◉",
    title: "Monthly case consultation",
    body: "A structured group consultation led by Sarah Arnold, LPC-S. Bring a real case, get real support from peers who understand the clinical realities of your work.",
    accent: "var(--color-sage-600)",
  },
  {
    icon: "◫",
    title: "Curated resource library",
    body: "48+ clinical tools, handouts, worksheets, and business guides — organized, downloadable, and built for active private practice.",
    accent: "var(--color-gold)",
  },
  {
    icon: "◎",
    title: "Referral network",
    body: "A trusted, vetted circle of Austin-area clinicians. Refer with confidence. Get referred. Build relationships that last longer than a single consult.",
    accent: "var(--color-terracotta)",
  },
  {
    icon: "◈",
    title: "Continuing education",
    body: "2–3 CEU trainings per month on clinical and business topics. All virtual, all archived, all included in your membership.",
    accent: "var(--color-sage-600)",
  },
  {
    icon: "◷",
    title: "Public directory listing",
    body: "A professionally crafted listing in our public clinician directory — searchable by specialty, format, and availability. Clients find you here.",
    accent: "var(--color-gold)",
  },
  {
    icon: "◇",
    title: "Practice coaching access",
    body: "Discounted one-on-one practice-building sessions with Sarah Arnold, LPC-S — on fees, marketing, burnout, and long-term sustainability.",
    accent: "var(--color-terracotta)",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    body: "Submit a short application sharing your background, specialties, and what you're looking for in a clinical community.",
  },
  {
    num: "02",
    title: "Get approved",
    body: "Applications are reviewed within 5 business days. We admit licensed clinicians who are committed to growth and peer support.",
  },
  {
    num: "03",
    title: "Join the circle",
    body: "Access the full resource library, RSVP to your first case consultation, and introduce yourself to the network.",
  },
];

const testimonials = [
  {
    quote:
      "I've been in private practice for six years and I'd never had a real peer community until ACC. The consultation group alone is worth the membership.",
    name: "Dr. Maya Okonkwo",
    credentials: "LCSW, Austin TX",
  },
  {
    quote:
      "The resource library saved me hours every week. And finding referral partners I actually trust? That's been priceless for my practice.",
    name: "James Whitfield",
    credentials: "LPC, Austin TX",
  },
  {
    quote:
      "Sarah has built something rare here — a community that takes the clinical work seriously and doesn't make you feel alone in it.",
    name: "Sofia Reyes",
    credentials: "LMFT, Austin TX",
  },
];

const memberPreview = [
  {
    name: "Dr. Maya Okonkwo",
    credentials: "LCSW",
    tagline: "Trauma-informed care for adults navigating complex grief and loss.",
    specialties: ["Trauma", "Grief", "EMDR"],
    acceptingClients: true,
  },
  {
    name: "James Whitfield",
    credentials: "LPC",
    tagline: "Helping couples and individuals rebuild trust after relational rupture.",
    specialties: ["Couples", "Attachment", "Gottman"],
    acceptingClients: false,
  },
  {
    name: "Sofia Reyes",
    credentials: "LMFT",
    tagline: "Culturally responsive family therapy for first-generation and bilingual families.",
    specialties: ["Family", "Bilingual", "Anxiety"],
    acceptingClients: true,
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-between pt-16"
        style={{ background: "var(--color-sage-900)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, rgba(201,169,110,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
            <div className="max-w-3xl">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-8 inline-flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <span
                  className="inline-block w-6 h-px"
                  style={{ background: "var(--color-terracotta)" }}
                />
                For licensed therapists in Austin, TX
              </p>
              <h1
                className="leading-[1.05] mb-8"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(3.25rem, 8vw, 6rem)",
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                Deepen your work.
                <br />
                <span style={{ color: "var(--color-gold)" }}>
                  Find your community.
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-12 max-w-xl"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Austin Clinician Circle is a curated membership network for licensed
                therapists — built to end the isolation of private practice and
                deepen the clinical work you do every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all duration-150 hover:opacity-90"
                  style={{ background: "#fff", color: "var(--color-sage-800)" }}
                >
                  Apply for membership
                </Link>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-all duration-150"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  See what&apos;s included →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="px-6 py-7"
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    paddingLeft: i === 0 ? 0 : undefined,
                  }}
                >
                  <p
                    className="text-3xl font-light mb-1"
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      color: "var(--color-gold)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / PROMISE ─────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: "var(--color-terracotta)" }}
          >
            Why ACC exists
          </p>
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Private practice can feel isolating.
            <br />
            <span style={{ color: "var(--color-sage-600)" }}>
              You don&apos;t have to do this alone.
            </span>
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-5" style={{ color: "var(--color-text-secondary)" }}>
            When you leave an agency or group practice, you gain autonomy — and lose the built-in consultation,
            community, and collegial feedback that kept your clinical work sharp. Most therapists in private
            practice never fully replace it.
          </p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "var(--color-text-secondary)" }}>
            ACC exists to change that. We&apos;re a curated circle of licensed Austin-area clinicians who meet
            regularly, share resources, and hold each other accountable to doing their best work.
          </p>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: "var(--color-cream-300)" }}
          >
            <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Founded by</span>
            <span className="text-sm font-semibold" style={{ color: "var(--color-sage-800)" }}>Sarah Arnold, LPC-S</span>
            <span className="w-px h-4" style={{ background: "var(--color-cream-400)" }} />
            <span className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>Restored Family Counseling · Austin, TX</span>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
              Membership includes
            </p>
            <h2
              className="max-w-xl"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: "var(--color-sage-900)",
              }}
            >
              Everything you need to thrive in private practice.
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "var(--color-cream-300)" }}
          >
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-4 p-8" style={{ background: "var(--color-cream-100)" }}>
                <span className="text-2xl" style={{ color: b.accent }}>{b.icon}</span>
                <h3 className="text-base font-semibold" style={{ color: "var(--color-sage-800)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-sage-900)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative max-w-sm w-full">
            <div
              className="aspect-[4/5] rounded-2xl w-full"
              style={{ background: "var(--color-sage-800)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 px-5 py-4 rounded-xl max-w-xs"
              style={{ background: "var(--color-terracotta)" }}
            >
              <p
                className="text-sm font-medium leading-snug"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#fff", fontSize: "1rem" }}
              >
                &ldquo;You deserve a community that takes your work as seriously as you do.&rdquo;
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founded by
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Sarah Arnold, LPC-S
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Sarah is a licensed professional counselor supervisor and the founder of Restored Family
              Counseling in Austin, TX. After years of supervising associates and building a group practice,
              she saw firsthand how isolated licensed therapists can become once they leave structured settings
              and enter solo private practice.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              She built ACC to recreate the collegial depth of a group practice — the regular consultation,
              the trusted referrals, the shared resources — without requiring anyone to give up their independence.
            </p>
            <Link
              href="/who-we-are"
              className="inline-flex items-center text-sm font-medium underline"
              style={{ color: "var(--color-gold)", textUnderlineOffset: "4px" }}
            >
              Read Sarah&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
            From the community
          </p>
          <h2
            className="mb-16 max-w-lg"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            What ACC members are saying.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 p-8 rounded-2xl"
                style={{ background: "#fff", borderLeft: "3px solid var(--color-terracotta)" }}
              >
                <p
                  className="text-4xl leading-none -mb-2"
                  style={{ color: "var(--color-terracotta)", fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
                  {t.quote}
                </p>
                <div className="pt-4 border-t" style={{ borderColor: "var(--color-cream-300)" }}>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-sage-800)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-text-tertiary)" }}>{t.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
              Getting started
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--color-sage-900)",
              }}
            >
              How membership works.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col gap-4">
                <span
                  className="text-5xl font-light leading-none"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--color-gold)" }}
                >
                  {s.num}
                </span>
                <h3 className="text-base font-semibold" style={{ color: "var(--color-sage-800)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Start your application →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECTORY PREVIEW ────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
                Member directory
              </p>
              <h2
                className="max-w-sm"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "var(--color-sage-900)",
                }}
              >
                A network of clinicians you can trust.
              </h2>
            </div>
            <Link
              href="/find-a-clinician"
              className="text-sm font-medium underline shrink-0"
              style={{ color: "var(--color-sage-700)", textUnderlineOffset: "4px" }}
            >
              Browse the full directory →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {memberPreview.map((m) => (
              <ClinicianCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
            Membership
          </p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Simple, all-inclusive pricing.
          </h2>
          <div
            className="rounded-2xl border p-10 text-left"
            style={{
              background: "#fff",
              borderColor: "var(--color-cream-300)",
              boxShadow: "0 8px 40px rgba(47,62,51,0.08)",
            }}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="font-light"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "3.5rem",
                  color: "var(--color-sage-700)",
                  lineHeight: 1,
                }}
              >
                $129
              </span>
              <span className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>/ month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--color-text-tertiary)" }}>
              Save 15% with annual billing ($109/month)
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Monthly case consultation group",
                "Continuing education access (2–3 CEUs/month)",
                "48+ resource library (clinical tools, handouts, guides)",
                "Public clinician directory listing",
                "Vetted referral network access",
                "Practice marketing & business guidance",
                "Mindfulness and burnout prevention resources",
                "Discounted coaching with Sarah Arnold, LPC-S",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs" style={{ color: "var(--color-sage-600)" }}>✓</span>
                  <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/join"
              className="block text-center w-full py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Apply for membership
            </Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--color-text-tertiary)" }}>
            By application only. Austin-area licensed clinicians only.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "var(--color-sage-900)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 60%, rgba(192,122,90,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            Applications open
          </p>
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Ready to stop doing
            <br />this alone?
          </h2>
          <p
            className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Applications are reviewed individually. Membership is limited to licensed clinicians
            practicing in the Austin area. We&apos;re building something small and serious.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "#fff", color: "var(--color-sage-800)" }}
            >
              Apply for membership
            </Link>
            <Link
              href="/find-a-clinician"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              Browse the directory
            </Link>
          </divk
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Start your application →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECTORY PREVIEW ────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
                Member directory
              </p>
              <h2
                className="max-w-sm"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "var(--color-sage-900)",
                }}
              >
                A network of clinicians you can trust.
              </h2>
            </div>
            <Link
              href="/find-a-clinician"
              className="text-sm font-medium underline shrink-0"
              style={{ color: "var(--color-sage-700)", textUnderlineOffset: "4px" }}
            >
              Browse the full directory →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {memberPreview.map((m) => (
              <ClinicianCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--color-sage-600)" }}>
            Membership
          </p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Simple, all-inclusive pricing.
          </h2>
          <div
            className="rounded-2xl border p-10 text-left"
            style={{
              background: "#fff",
              borderColor: "var(--color-cream-300)",
              boxShadow: "0 8px 40px rgba(47,62,51,0.08)",
            }}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="font-light"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "3.5rem",
                  color: "var(--color-sage-700)",
                  lineHeight: 1,
                }}
              >
                $129
              </span>
              <span className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>/ month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--color-text-tertiary)" }}>
              Save 15% with annual billing ($109/month)
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Monthly case consultation group",
                "Continuing education access (2–3 CEUs/month)",
                "48+ resource library (clinical tools, handouts, guides)",
                "Public clinician directory listing",
                "Vetted referral network access",
                "Practice marketing & business guidance",
                "Mindfulness and burnout prevention resources",
                "Discounted coaching with Sarah Arnold, LPC-S",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs" style={{ color: "var(--color-sage-600)" }}>✓</span>
                  <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/join"
              className="block text-center w-full py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Apply for membership
            </Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--color-text-tertiary)" }}>
            By application only. Austin-area licensed clinicians only.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "var(--color-sage-900)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 60%, rgba(192,122,90,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            Applications open
          </p>
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Ready to stop doing
            <br />this alone?
          </h2>
          <p
            className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Applications are reviewed individually. Membership is limited to licensed clinicians
            practicing in the Austin area. We&apos;re building something small and serious.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "#fff", color: "var(--color-sage-800)" }}
            >
              Apply for membership
            </Link>
            <Link
              href="/find-a-clinician"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              Browse the directory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
