import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Circle",
  description: "Terms of service for The Circle membership.",
};

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p className="text-base leading-relaxed max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
        Membership is month-to-month with no long-term contract. Cancel anytime from your billing settings. Full terms will be published before member onboarding begins.
      </p>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
        For questions, contact sarah@restoredfamily.com
      </p>
    </section>
  );
}
