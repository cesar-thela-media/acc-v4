import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 md:px-6"
      style={{ background: "var(--color-cream-100)" }}
    >
      <div className="max-w-md text-center">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-6"
          style={{ color: "var(--color-sage-600)" }}
        >
          Error 404
        </p>
        <h1
          className="section-title-strong mb-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--color-sage-900)",
          }}
        >
          Page not found.
        </h1>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          This page doesn&apos;t exist or has been moved. The Circle is still
          growing, and some pages may have shifted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "var(--color-sage-700)", color: "#fff" }}
          >
            Back to home
          </Link>
          <Link
            href="/what-we-offer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium transition-colors hover:bg-white"
            style={{
              color: "var(--color-sage-700)",
              border: "1px solid var(--color-cream-300)",
              background: "transparent",
            }}
          >
            Explore membership
          </Link>
        </div>
      </div>
    </div>
  );
}
