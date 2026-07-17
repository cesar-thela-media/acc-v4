import type { Metadata } from "next";
import Link from "next/link";
import { Award, MapPin, Building2, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/shadcn/card";

const PARCHMENT = "#F0EDE6";
const SAGE_800 = "#2D3B2C";
const SAGE_600 = "#4A5E48";
const AMBER = "#C2963A";

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
      {/* Page heading — client's exact requested heading, no sub-text beneath it */}
      <section style={{ background: "#fff", padding: "clamp(3rem,6vw,4.5rem) 1.5rem 0" }}>
        <div className="container-fluid max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] mb-5" style={{ color: AMBER }}>
            Who we are
          </p>
          <h1
            className="leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: SAGE_800,
            }}
          >
            A professional home and community for therapists.
          </h1>
        </div>
      </section>

      {/* Founder — feature-21's 6-1-5 split-with-floating-card layout. Now the
          first section on the page (moved ahead of Origin). */}
      <section style={{ background: SAGE_600, padding: "clamp(4rem,8vw,6rem) 0" }}>
        <div className="container-fluid">
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
              <img
                src="/sarah-arnold.jpeg"
                alt="Sarah Arnold, LPC-S"
                className="w-full h-auto object-cover rounded-2xl mx-auto"
                style={{ aspectRatio: "9 / 16", objectPosition: "center top", maxWidth: 420 }}
              />
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

      {/* Origin — restyled per the Restored Family "Our Story"/"The Beginning" reference:
          larger serif heading, more generous body type. Title (eyebrow + heading)
          is centered; body copy stays left-aligned for readability. */}
      <section style={{ background: "#fff", padding: "clamp(4.5rem,9vw,7rem) 1.5rem" }}>
        <div className="container-fluid max-w-3xl mx-auto">
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
            className="flex flex-col gap-6 text-lg leading-[1.6] text-center"
            style={{ color: "var(--color-text-secondary)" }}
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

      {/* Values ("What we believe") — feature-02 header + card-01 cards */}
      <section style={{ background: PARCHMENT, padding: "clamp(2.5rem,5vw,4.5rem) 0" }}>
        <div className="container-fluid">
          <div className="max-w-lg mx-auto text-center mb-10 flex flex-col items-center gap-4">
            <span
              className="text-sm px-3 py-1 rounded-full h-auto w-fit"
              style={{ border: "1px solid rgba(194,150,58,0.4)", color: AMBER }}
            >
              What we believe
            </span>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.2vw, 3rem)",
                color: SAGE_800,
              }}
            >
              The values that shape The Circle.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-0 w-full gap-0 border-0 overflow-hidden" style={{ background: "#fff" }}>
                <img src={value.img} alt="" width={500} height={220} className="w-full object-cover" style={{ aspectRatio: "500 / 220" }} />
                <CardContent className="p-6 pt-5">
                  <h3 className="text-lg font-semibold leading-snug" style={{ color: SAGE_800 }}>{value.title}</h3>
                  <p className="text-sm font-medium mt-2" style={{ color: "var(--color-text-secondary)" }}>{value.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — cta-07's centered heading + slide-reveal button */}
      <section
        className="text-center relative overflow-hidden"
        style={{ background: SAGE_800, padding: "clamp(3rem,6vw,5.5rem) 1.5rem" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(194,150,58,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              color: "#fff",
            }}
          >
            This is the community you&apos;ve been looking for.
          </h2>
          <Link
            href="/join"
            className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden inline-flex items-center mx-auto"
            style={{ background: AMBER, color: "#fff" }}
          >
            <span className="relative z-10 transition-all duration-500">
              Apply for membership
            </span>
            <span
              className="absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45"
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
