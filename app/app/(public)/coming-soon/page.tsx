import Link from "next/link";

export const metadata = {
  title: "Coming Soon — Austin Clinician Circle",
};

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--color-sage-900)" }}
    >
      <p
        className="text-xs font-medium uppercase tracking-widest mb-8"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Austin Clinician Circle
      </p>
      <h1
        className="mb-6 leading-tight"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 400,
          color: "#fff",
        }}
      >
        Something is coming.
      </h1>
      <p
        className="text-lg max-w-md leading-relaxed mb-10"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        A virtual membership network for licensed therapists in Austin — built
        to end the isolation of private practice. Launching soon.
      </p>
      <Link
        href="/join"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
        style={{ background: "#fff", color: "var(--color-sage-700)" }}
      >
        Join the waitlist
      </Link>
      <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
        Founded by Sarah Arnold, LPC-S · Restored Family Counseling · Austin, TX
      </p>
    </div>
  );
}
