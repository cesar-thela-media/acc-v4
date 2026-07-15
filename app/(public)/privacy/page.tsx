import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Circle",
  description: "Privacy policy for The Circle.",
};

export default function PrivacyPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-6"
      style={{ background: "#2D3B2C", paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <p className="font-medium uppercase tracking-[0.28em] text-[11px] mb-6" style={{ color: "#C2963A" }}>
        Legal
      </p>
      <h1
        className="leading-tight mb-5"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 400,
          color: "#fff",
        }}
      >
        Privacy Policy
      </h1>
      <p className="text-base leading-relaxed max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
        We take your privacy seriously. This policy will be published before we collect any personal information from members. The Circle does not sell, share, or monetize clinician data.
      </p>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
        For questions, contact sarah@restoredfamily.com
      </p>
    </section>
  );
}
