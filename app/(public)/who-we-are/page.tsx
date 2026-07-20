import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, MapPin, Building2, ArrowUpRight } from "lucide-react";

/** Page color language: lighter mid-sage (matches founder block), not deep charcoal. */
const PAGE_SAGE = "#4A5E48";
const PAGE_SAGE_SOFT = "#5A6E58";
const PAGE_CREAM = "#E8EDE4";
const AMBER = "#C2963A";
const SAGE_800 = "#2D3B2C";

const values = [
  {
    title: "Clinical excellence",
    body: "We believe therapists do their best work when they are connected to other skilled clinicians who challenge and support them. Case consultation isn't optional. It's foundational.",
    img: "/believe-clinical.jpg",
  },
  {
    title: "Sustainable practice",
    body: "Burnout is not inevitable. With the right structures, community, supervision, and personal care, therapists can build careers that last and practices that thrive.",
    img: "/believe-sustainable.jpg",
  },
  {
    title: "Professional identity",
    body: "Beyond your solo brand, there is a professional community you belong to. The Circle gives you a home, a directory listing, and colleagues who understand the work.",
    img: "/believe-professional.jpg",
  },
];

export const metadata: Metadata = {
  title: "Who We Are | The Circle",
  description:
    "Learn the story behind The Circle. Founded by Sarah Arnold, LPC-S, The Circle is a professional home and community for licensed therapists in Austin, TX.",
};

export default function WhoWeArePage() {
  return (
    <>
      {/* Founder — feature-21's 6-1-5 split-with-floating-card layout. Now the
          first section on the page (moved ahead of Origin). Page heading folded
          into the top of this section instead of its own separate block. */}
      <section style={{ background: PAGE_SAGE, padding: "clamp(4rem,8vw,6rem) 0" }}>
        <div className="container-fluid">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] mb-5" style={{ color: AMBER }}>
              Who we are
            </p>
            <h1
              className="leading-tight"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "#fff",
              }}
            >
              A professional home and community for therapists.
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left: content */}
            <div className="md:col-span-6 col-span-12 flex flex-col gap-8">
              <div>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.28em] mb-4"
                  style={{ color: `rgba(194,150,58,0.85)` }}
                >
                  The founder
                </p>
                <h2
                  className="mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    color: "#fff",
                  }}
                >
                  Sarah Arnold, LPC-S
                </h2>
                <div className="flex flex-col gap-5 text-lg leading-[1.6]" style={{ color: "rgba(255,255,255,0.78)" }}>
                  <p>
                    Sarah is a Licensed Professional Counselor and Supervisor based
                    in Austin, Texas, and the founder of Restored Family
                    Counseling. She has spent her career working with individuals
                    and couples doing the deeper work, exploring the parts of
                    themselves that have been running the show, releasing what no
                    longer serves them, and stepping into a life that feels in
                    alignment with who they truly desire to be.
                  </p>
                  <p>
                    As she built her group practice and supervised pre-licensed
                    associates, she noticed a pattern: once therapists became fully
                    licensed and launched their own practices, they lost the
                    built-in community they had during training. Supervision groups
                    ended. Colleagues scattered. What had once felt like a team
                    became, almost overnight, a practice of one.
                  </p>
                  <p>
                    The Circle is Sarah&apos;s answer to that problem.
                    It is not a supervision group, a continuing education provider,
                    or a therapist directory, though it includes elements of all
                    three. It is a membership network: a professional community for
                    therapists who want to keep growing, stay connected, and do
                    excellent work over the long term.
                  </p>
                </div>
              </div>

              {/* 3 real credential facts, in place of feature-21's icon-benefit row */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl p-3 shrink-0" style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
                    <Award className="size-5" style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-2 text-base" style={{ color: "rgba(255,255,255,0.78)" }}>Licensed Professional Counselor and Supervisor</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl p-3 shrink-0" style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
                    <MapPin className="size-5" style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-2 text-base" style={{ color: "rgba(255,255,255,0.78)" }}>Austin, Texas</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl p-3 shrink-0" style={{ border: "1px solid rgba(255,255,255,0.18)" }}>
                    <Building2 className="size-5" style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-2 text-base" style={{ color: "rgba(255,255,255,0.78)" }}>Founder, Restored Family Counseling</p>
                </div>
              </div>
            </div>

            {/* Spacer column */}
            <div className="lg:col-span-1 lg:block hidden" />

            {/* Right: photo (9:16 portrait crop) + floating link card (no invented stat) */}
            <div className="lg:col-span-5 md:col-span-6 col-span-12 relative">
              <div
                className="relative w-full rounded-2xl overflow-hidden mx-auto"
                style={{ aspectRatio: "9 / 16", maxWidth: 420 }}
              >
                <Image
                  src="/sarah-arnold.jpeg"
                  alt="Sarah Arnold, LPC-S"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <a
                href="https://www.restoredfamily.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-2xl shadow-lg px-5 py-4 flex items-center gap-2 max-w-3xs hover:opacity-90 transition-opacity"
                style={{ background: "#fff" }}
              >
                <span className="text-sm font-medium" style={{ color: SAGE_800 }}>
                  Visit Restored Family Counseling
                </span>
                <ArrowUpRight size={16} style={{ color: SAGE_800, flexShrink: 0 }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Origin — wider measure so body reads ~3–4 lines at desktop (not over-narrow). */}
      <section style={{ background: PAGE_CREAM, padding: "clamp(4.5rem,9vw,7rem) 1.5rem" }}>
        <div className="container-fluid max-w-4xl mx-auto">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.28em] mb-5 text-center"
            style={{ color: AMBER }}
          >
            The origin
          </p>
          <h2
            className="mb-8 leading-tight text-center"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: SAGE_800,
            }}
          >
            Why The Circle exists.
          </h2>
          <div
            className="flex flex-col gap-6 text-lg leading-[1.65] text-center px-2 sm:px-4"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48rem", margin: "0 auto" }}
          >
            <p>
              Most of us didn&apos;t fully anticipate how solo private practice would
              feel. You&apos;re doing meaningful work, but there may not be a team
              down the hall, no built-in debrief, and some days that absence is
              more noticeable than others.
            </p>
            <p>
              The Circle was designed to address that gap: a small network of
              clinicians who meet regularly, share resources, make referrals to
              each other, and show up for one another professionally and in real
              community.
            </p>
            <p>
              Founding members are therapists who have been part of Sarah&apos;s
              professional circle, former associates, trusted colleagues, and
              clinicians she has supervised. As The Circle grows, membership is
              open to any licensed therapist who shares this commitment to
              ongoing clinical growth and community.
            </p>
          </div>
        </div>
      </section>

      {/* Values — full-bleed image cards; text floats on blurred/softened image region (no hard divider). */}
      <section style={{ background: PAGE_SAGE_SOFT, padding: "clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="container-fluid">
          <div className="max-w-lg mx-auto text-center mb-10 flex flex-col items-center gap-4">
            <span
              className="text-sm px-3 py-1 rounded-full h-auto w-fit"
              style={{ border: "1px solid rgba(194,150,58,0.55)", color: AMBER }}
            >
              What we believe
            </span>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.2vw, 3rem)",
                color: "#fff",
              }}
            >
              The values that shape The Circle.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <article
                key={value.title}
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ minHeight: 420, aspectRatio: "3 / 4" }}
              >
                <Image
                  src={value.img}
                  alt={value.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {/* Softened lower region so text stays readable over the full image */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: "58%",
                    background:
                      "linear-gradient(to top, rgba(45,59,44,0.92) 0%, rgba(45,59,44,0.55) 55%, transparent 100%)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 pt-16 z-10">
                  <h3 className="text-lg font-semibold leading-snug" style={{ color: "#fff" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm font-medium mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                    {value.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image-forward CTA — photo clearly visible (soft center scrim), unique asset /cta-3.jpg */}
      <section
        className="relative overflow-hidden flex items-center justify-center text-center"
        style={{ minHeight: "clamp(24rem, 52vw, 32rem)" }}
      >
        <Image
          src="/cta-3.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        {/* Light overall dim + soft center vignette so faces stay visible (not solid green wash). */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,28,20,0.35) 0%, rgba(20,28,20,0.28) 40%, rgba(20,28,20,0.5) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(20,28,20,0.42) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6" style={{ padding: "clamp(3rem,6vw,5.5rem) 1.5rem" }}>
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              color: "#fff",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            This is the community you&apos;ve been looking for.
          </h2>
          <Link
            href="/join"
            className="relative text-sm font-medium rounded-xl h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden inline-flex items-center mx-auto"
            style={{ background: AMBER, color: "#fff" }}
          >
            <span className="relative z-10 transition-all duration-500">
              Apply for membership
            </span>
            <span
              className="absolute right-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45"
              style={{ background: "#fff", color: AMBER }}
            >
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
