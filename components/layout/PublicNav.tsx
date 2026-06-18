"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";

const navLinks = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-offer", label: "Membership" },
  { href: "/coming-soon", label: "Community" },
  { href: "/coming-soon", label: "Resources" },
];

export function PublicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";
  const onDark = (isHomepage && !scrolled) || false;

  useEffect(() => {
    if (!isHomepage) return;
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHomepage]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="transition-all duration-300"
          style={{
            background: onDark ? "transparent" : "rgba(248,250,243,0.94)",
            backdropFilter: onDark ? "none" : "blur(20px)",
            WebkitBackdropFilter: onDark ? "none" : "blur(20px)",
            borderBottom: onDark ? "none" : "1px solid rgba(223,227,218,0.6)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm font-medium shrink-0 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                color: onDark ? "#fff" : "var(--color-sage-900)",
                letterSpacing: "0.01em",
              }}
            >
              Austin Clinician Circle
            </Link>

            {/* Desktop nav — centered with dot separators */}
            <nav className="hidden md:flex items-center gap-0">
              {navLinks.map((link, i) => (
                <span key={link.href + link.label} className="flex items-center">
                  {i > 0 && (
                    <span
                      className="mx-3 text-xs select-none"
                      style={{ color: onDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)" }}
                    >
                      ·
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:opacity-80"
                    style={{
                      color: onDark ? "rgba(255,255,255,0.82)" : "var(--color-text-secondary)",
                      fontWeight: 400,
                    }}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <Link
                href="/sign-in"
                className="text-sm transition-colors duration-300 hover:opacity-70"
                style={{ color: onDark ? "rgba(255,255,255,0.82)" : "var(--color-text-secondary)" }}
              >
                Sign In
              </Link>
              <Link
                href="/join"
                className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:bg-opacity-90"
                style={{
                  border: onDark ? "1px solid rgba(255,255,255,0.55)" : "1px solid var(--color-sage-700)",
                  color: onDark ? "#fff" : "var(--color-sage-700)",
                  background: "transparent",
                }}
              >
                Join the Circle
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((n) => (
                <span
                  key={n}
                  className="block w-5 h-0.5 transition-colors duration-300"
                  style={{ background: onDark ? "#fff" : "var(--color-sage-800)" }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        background="rgba(28,43,33,0.98)"
        borderColor="rgba(255,255,255,0.08)"
        title={
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.24em] mb-2"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Navigate
            </p>
            <span
              className="text-base font-medium"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#fff" }}
            >
              Austin Clinician Circle
            </span>
          </div>
        }
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300"
              style={{
                background: pathname === link.href ? "rgba(74,93,78,0.24)" : "transparent",
                color: pathname === link.href ? "#fff" : "rgba(255,255,255,0.84)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="mt-8 pt-6 flex flex-col gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Link
            href="/sign-in"
            onClick={() => setMobileOpen(false)}
            className="text-center py-3 rounded-full text-sm font-medium border transition-all duration-300"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
          >
            Sign In
          </Link>
          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="text-center py-3 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.55)",
              color: "#fff",
              background: "transparent",
            }}
          >
            Join the Circle
          </Link>
        </div>
      </MobileSidePanel>
    </>
  );
}
