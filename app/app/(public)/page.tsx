import Link from "next/link";
import { ClinicianCard } from "@/components/cards/ClinicianCard";
import { VideoPlayer } from "@/components/VideoPlayer";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const stats = [
  { value: "24", label: "Active members" },
  { value: "48+", label: "Clinical resources" },
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
    initials: "MO",
  },
  {
    quote:
      "The resource library saved me hours every week. And finding referral partners I actually trust? That's been priceless for my practice.",
    name: "James Whitfield",
    credentials: "LPC, Austin TX",
    initials: "JW",
  },
  {
    quote:
      "Sarah has built something rare here — a community that takes the clinical work seriously and doesn't make you feel alone in it.",
    name: "Sofia Reyes",
    credentials: "LMFT, Austin TX",
    initials: "SR",
  },
];

const memberPreview = [
  {
    name: "Dr. Maya Okonkwo",
    credentials: "LCSW",
    tagline: "Trauma-informed care for adults navigating complex grief and loss.",
    specialties: ["Trauma", "Grief", "EMDR"],
    acceptingClients: true,
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80&auto=format",
  },
  {
    name: "James Whitfield",
    credentials: "LPC",
    tagline: "Helping couples and individuals rebuild trust after relational rupture.",
    specialties: ["Couples", "Attachment", "Gottman"],
    acceptingClients: false,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format",
  },
  {
    name: "Sofia Reyes",
    credentials: "LMFT",
    tagline: "Culturally responsive family therapy for first-generation and bilingual families.",
    specialties: ["Family", "Bilingual", "Anxiety"],
    acceptingClients: true,
    photo:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&auto=format",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden"
        style={{ background: "var(--color-sage-900)" }}
      >
        {/* Ambient background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60&auto=format"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.07, mixBlendMode: "luminosity" }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,62,51,0.98) 0%, rgba(47,62,51,0.93) 100%)",
          }}
        />

        {/* Gold radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 72% 38%, rgba(201,169,110,0.08) 0%, transparent 55%)",
          }}
        />

        {/* Decorative rings */}
        <div
          className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.09)" }}
        />
        <div
          className="absolute top-16 right-24 w-64 h-64 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.06)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.05)" }}
        />

        {/* Floating event badge */}
        <div
          className="absolute top-28 right-10 hidden xl:flex items-center gap-3 px-5 py-3.5 rounded-2xl animate-float z-10"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse-dot"
            style={{ background: "var(--color-terracotta)" }}
          />
          <div>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Next consultation
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Thursday, May 7 · 12:00 PM CT
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
            <div className="max-w-3xl">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-8 inline-flex items-center gap-2"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  animation:
                    "fadeInUp 0.6s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
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
                  animation:
                    "fadeInUp 0.8s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                Deepen your work.
                <br />
                <em
                  style={{
                    color: "var(--color-gold)",
                    fontStyle: "italic",
                  }}
                >
                  Find your community.
                </em>
              </h1>

              <p
                className="text-lg leading-relaxed mb-12 max-w-xl"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  animation:
                    "fadeInUp 0.8s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                Austin Clinician Circle is a curated membership network for
                licensed therapists — built to end the isolation of private
                practice and deepen the clinical work you do every day.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  animation:
                    "fadeInUp 0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-xl"
                  style={{ background: "#fff", color: "var(--color-sage-800)" }}
                >
                  Apply for membership
                </Link>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10"
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
        <div
          className="relative z-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="px-6 py-7"
                  data-aos="fade-in"
                  data-delay={String((i + 1) * 100)}
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
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
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-36 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
          style={{ animation: "fadeIn 1s 1.3s both" }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Scroll
          </span>
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            style={{
              color: "rgba(255,255,255,0.2)",
              animation: "float 2.5s ease-in-out infinite",
            }}
          >
            <path
              d="M8 2v14M3 12l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── FOUNDING MEMBER BLUSH BANNER ─────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--color-blush)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ background: "#755754" }}
            />
            <p className="text-sm font-medium" style={{ color: "#755754" }}>
              Now accepting founding members —{" "}
              <strong>24 of 40 spots filled.</strong> Applications reviewed weekly.
            </p>
          </div>
          <Link
            href="/join"
            className="text-xs font-semibold underline shrink-0"
            style={{ color: "#755754", textUnderlineOffset: "3px" }}
          >
            Apply now →
          </Link>
        </div>
      </div>

      {/* ── PROBLEM / PROMISE ─────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-6"
            data-aos="fade-in"
            style={{ color: "var(--color-terracotta)" }}
          >
            Why ACC exists
          </p>
          <h2
            className="mb-8 leading-tight"
            data-aos="fade-in-up"
            data-delay="100"
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
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto mb-5"
            data-aos="fade-in"
            data-delay="200"
            style={{ color: "var(--color-text-secondary)" }}
          >
            When you leave an agency or group practice, you gain autonomy — and
            lose the built-in consultation, community, and collegial feedback that
            kept your clinical work sharp. Most therapists in private practice
            never fully replace it.
          </p>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto mb-12"
            data-aos="fade-in"
            data-delay="300"
            style={{ color: "var(--color-text-secondary)" }}
          >
            ACC exists to change that. We&apos;re a curated circle of licensed
            Austin-area clinicians who meet regularly, share resources, and hold
            each other accountable to doing their best work.
          </p>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            data-aos="fade-in"
            data-delay="400"
            style={{ background: "var(--color-cream-300)" }}
          >
            <span
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Founded by
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-sage-800)" }}
            >
              Sarah Arnold, LPC-S
            </span>
            <span
              className="w-px h-4"
              style={{ background: "var(--color-cream-400)" }}
            />
            <span
              className="text-sm"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              Restored Family Counseling · Austin, TX
            </span>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16" data-aos="fade-in-up">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
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
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group flex flex-col gap-4 p-8 transition-colors duration-300 hover:bg-white"
                data-aos="fade-in-up"
                data-delay={String(((i % 3) + 1) * 100)}
                style={{ background: "var(--color-cream-100)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-colors duration-300"
                  style={{
                    background: `color-mix(in srgb, ${b.accent} 12%, transparent)`,
                    color: b.accent,
                  }}
                >
                  {b.icon}
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-sage-800)" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-sage-900)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative max-w-sm w-full" data-aos="slide-left">
            <div className="aspect-[4/5] rounded-2xl w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format"
                alt="Sarah Arnold, LPC-S — founder of Austin Clinician Circle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating quote badge */}
            <div
              className="absolute -bottom-5 -right-5 px-5 py-4 rounded-xl max-w-[260px]"
              style={{ background: "var(--color-terracotta)" }}
            >
              <p
                className="text-sm font-medium leading-snug"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  color: "#fff",
                  fontSize: "1rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;You deserve a community that takes your work as seriously
                as you do.&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div data-aos="slide-right" data-delay="150">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
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
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Sarah is a licensed professional counselor supervisor and the
              founder of Restored Family Counseling in Austin, TX. After years
              of supervising associates and building a group practice, she saw
              firsthand how isolated licensed therapists can become once they
              leave structured settings and enter solo private practice.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              She built ACC to recreate the collegial depth of a group practice
              — the regular consultation, the trusted referrals, the shared
              resources — without requiring anyone to give up their independence.
            </p>
            <Link
              href="/who-we-are"
              className="inline-flex items-center text-sm font-medium underline transition-opacity hover:opacity-70"
              style={{
                color: "var(--color-gold)",
                textUnderlineOffset: "4px",
              }}
            >
              Read Sarah&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center" data-aos="fade-in-up">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
              Hear from the founder
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--color-sage-900)",
              }}
            >
              A message from Sarah.
            </h2>
          </div>
          <div data-aos="scale-in" data-delay="150">
            <VideoPlayer />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-200)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            data-aos="fade-in"
            style={{ color: "var(--color-sage-600)" }}
          >
            From the community
          </p>
          <h2
            className="mb-16 max-w-lg"
            data-aos="fade-in-up"
            data-delay="100"
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
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 p-8 rounded-2xl"
                data-aos="fade-in-up"
                data-delay={String((i + 1) * 150)}
                style={{
                  background: "#fff",
                  borderLeft: "3px solid var(--color-terracotta)",
                  boxShadow: "0 4px 20px rgba(47,62,51,0.06)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className="text-sm"
                      style={{ color: "var(--color-gold)" }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Large opening quote */}
                <p
                  className="text-4xl leading-none -mb-2"
                  style={{
                    color: "var(--color-terracotta)",
                    fontFamily: "Georgia, serif",
                    opacity: 0.5,
                  }}
                >
                  &ldquo;
                </p>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4 border-t"
                  style={{ borderColor: "var(--color-cream-300)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: "var(--color-sage-100)",
                      color: "var(--color-sage-700)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-sage-800)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--color-text-tertiary)" }}
                    >
                      {t.credentials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center" data-aos="fade-in-up">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting dashed line (desktop) */}
            <div
              className="absolute top-8 left-[16.67%] right-[16.67%] h-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, var(--color-cream-300) 15%, var(--color-cream-300) 85%, transparent 100%)",
              }}
            />

            {steps.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-col gap-4"
                data-aos="fade-in-up"
                data-delay={String((i + 1) * 150)}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 mb-2"
                  style={{
                    background: "var(--color-cream-200)",
                    border: "1px solid var(--color-cream-300)",
                  }}
                >
                  <span
                    className="text-2xl font-light"
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      color: "var(--color-gold)",
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-sage-800)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-14 text-center"
            data-aos="fade-in"
            data-delay="400"
          >
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
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
          <div
            className="flex items-end justify-between mb-14 gap-6 flex-wrap"
            data-aos="fade-in-up"
          >
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--color-sage-600)" }}
              >
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
              style={{
                color: "var(--color-sage-700)",
                textUnderlineOffset: "4px",
              }}
            >
              Browse the full directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {memberPreview.map((m, i) => (
              <div
                key={m.name}
                data-aos="fade-in-up"
                data-delay={String((i + 1) * 100)}
              >
                <ClinicianCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--color-cream-100)" }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            data-aos="fade-in"
            style={{ color: "var(--color-sage-600)" }}
          >
            Membership
          </p>
          <h2
            className="mb-12"
            data-aos="fade-in-up"
            data-delay="100"
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
            data-aos="scale-in"
            data-delay="150"
            style={{
              background: "#fff",
              borderColor: "var(--color-cream-300)",
              boxShadow: "0 8px 48px rgba(47,62,51,0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-baseline gap-2">
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
                <span
                  className="text-sm"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  / month
                </span>
              </div>
              <span
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-sage-100)",
                  color: "var(--color-sage-700)",
                }}
              >
                8 benefits included
              </span>
            </div>

            <p
              className="text-sm mb-8"
              style={{ color: "var(--color-text-tertiary)" }}
            >
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
                  <span
                    className="mt-0.5 shrink-0 text-xs"
                    style={{ color: "var(--color-sage-600)" }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/join"
              className="block text-center w-full py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--color-sage-700)", color: "#fff" }}
            >
              Apply for membership
            </Link>
          </div>

          <p
            className="mt-4 text-xs"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            By application only. Austin-area licensed clinicians only.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "var(--color-sage-900)" }}
      >
        {/* Terracotta radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 28% 60%, rgba(192,122,90,0.09) 0%, transparent 52%)",
          }}
        />

        {/* Decorative rings */}
        <div
          className="absolute top-8 right-8 w-80 h-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        />
        <div
          className="absolute -bottom-24 left-16 w-[26rem] h-[26rem] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.04)" }}
        />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          {/* Pulsing badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            data-aos="fade-in"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ background: "var(--color-terracotta)" }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Applications currently open
            </span>
          </div>

          <h2
            className="mb-8 leading-tight"
            data-aos="fade-in-up"
            data-delay="100"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Ready to stop doing
            <br />
            <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>
              this alone?
            </em>
          </h2>

          <p
            className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
            data-aos="fade-in"
            data-delay="200"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Applications are reviewed individually. Membership is limited to
            licensed clinicians practicing in the Austin area. We&apos;re
            building something small and serious.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-aos="fade-in"
            data-delay="300"
          >
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-xl"
              style={{ background: "#fff", color: "var(--color-sage-800)" }}
            >
              Apply for membership
            </Link>
            <Link
              href="/find-a-clinician"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Browse the directory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

