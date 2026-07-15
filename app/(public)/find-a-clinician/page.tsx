import Link from "next/link";

const SAGE_800 = "#2D3B2C";
const AMBER = "#C2963A";

export default function FindAClinicianPage() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: SAGE_800, minHeight: "80vh", padding: "clamp(4rem,8vw,6rem) 1.5rem" }}
    >
      {/* Decorative rings, consistent with hero/CTA sections elsewhere on the site */}
      {["48vw", "30vw"].map((size) => (
        <div
          key={size}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />
      ))}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(194,150,58,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10" style={{ maxWidth: 640 }}>
        <p className="font-medium uppercase tracking-[0.28em] text-[11px] mb-6" style={{ color: AMBER }}>
          Community
        </p>
        <h1
          className="leading-tight mb-6"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            fontWeight: 400,
            color: "#fff",
          }}
        >
          Therapist directory
          <br />
          <em style={{ color: AMBER, fontStyle: "italic" }}>coming soon.</em>
        </h1>
        <p className="text-base leading-relaxed mx-auto mb-10" style={{ color: "rgba(255,255,255,0.62)", maxWidth: 480 }}>
          We&apos;re building a curated directory of licensed clinician members so clients and colleagues can find the right fit faster. Founding members will be the first ones listed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/join"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: AMBER, color: "#fff" }}
          >
            Apply for membership
          </Link>
          <Link
            href="/what-we-offer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.88)" }}
          >
            Learn what&apos;s included →
          </Link>
        </div>
      </div>
    </section>
  );
}
