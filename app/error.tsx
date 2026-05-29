"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 md:px-6"
      style={{ background: "var(--color-cream-100)" }}
    >
      <div className="max-w-md text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl"
          style={{ background: "rgba(181,75,75,0.12)", color: "var(--color-error)" }}
        >
          ◈
        </div>
        <p
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{ color: "var(--color-sage-600)" }}
        >
          Something went wrong
        </p>
        <h1
          className="section-title-strong mb-5"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--color-sage-900)",
          }}
        >
          This page couldn&apos;t load.
        </h1>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A temporary error occurred. This is likely a network issue or a
          momentary glitch. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
          style={{ background: "var(--color-sage-700)", color: "#fff" }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
