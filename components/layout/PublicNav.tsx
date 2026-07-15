"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";

const navLinks = [
  { href: "/who-we-are",   label: "Who We Are" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/find-a-clinician",  label: "Find a Clinician" },
];

export function PublicNav() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className={`${isHome ? "absolute" : "sticky"} top-0 left-0 right-0 z-50`}>
        <div
          className="transition-all duration-300"
          style={{
            background: transparent ? "transparent" : "rgba(45,59,44,0.96)",
            backdropFilter: transparent ? "none" : "blur(20px)",
            WebkitBackdropFilter: transparent ? "none" : "blur(20px)",
            borderBottom: transparent ? "none" : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="max-w-[90rem] mx-auto px-6 py-2 grid grid-cols-[1fr_auto_1fr] items-center gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0 justify-self-start" aria-label="The Circle">
              <img
                src="/logo.png"
                alt="The Circle"
                width={2000}
                height={1549}
                className="block transition-all duration-300"
                style={{
                  width: isHome ? "9rem" : "6.75rem",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>

            {/* Desktop nav with dot separators, true-centered */}
            <nav className="hidden lg:flex items-center gap-0 justify-self-center">
              {navLinks.map((link, i) => (
                <span key={link.href + link.label} className="flex items-center">
                  {i > 0 && (
                    <span
                      className="mx-3 select-none text-xs"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >·</span>
                  )}
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-5 shrink-0 justify-self-end">
              <Link
                href="/sign-in"
                className="text-sm transition-colors duration-300 hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Login
              </Link>
              <Link
                href="/join"
                className="text-sm px-5 py-2 rounded-full transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "#fff",
                  background: "transparent",
                  fontWeight: 500,
                }}
              >
                Join the Circle
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto col-start-3 justify-self-end"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((n) => (
                <span key={n} className="block w-5 h-0.5" style={{ background: "#fff" }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        background="rgba(45,59,44,0.98)"
        borderColor="rgba(255,255,255,0.08)"
        title={
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] mb-2" style={{ color: "rgba(255,255,255,0.38)" }}>Navigate</p>
            <span className="text-base" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, color: "#fff" }}>
              The Circle
            </span>
          </div>
        }
      >
        <nav className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-base transition-all duration-200"
              style={{
                background: pathname === link.href ? "rgba(194,150,58,0.18)" : "transparent",
                color: pathname === link.href ? "#C2963A" : "rgba(255,255,255,0.8)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 pt-6 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="text-center py-3 rounded-full text-sm border transition-all duration-200" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
            Login
          </Link>
          <Link href="/join" onClick={() => setMobileOpen(false)} className="text-center py-3 rounded-full text-sm font-medium transition-all duration-200" style={{ border: "1px solid #C2963A", color: "#C2963A", background: "transparent" }}>
            Join the Circle
          </Link>
        </div>
      </MobileSidePanel>
    </>
  );
}
