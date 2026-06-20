"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";
import { SignOutAction } from "@/components/auth/SignOutAction";

const icons: Record<string, React.ReactNode> = {
  Overview:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Members:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6"/><circle cx="16" cy="7" r="2"/><path d="M13 18c0-2 1.3-3.6 3-4.5"/></svg>,
  Resources:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  Applications: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>,
  Events:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

const navLinks = [
  { href: "/admin", label: "Overview", icon: icons.Overview },
  { href: "/admin/members", label: "Members", icon: icons.Members },
  { href: "/admin/resources", label: "Resources", icon: icons.Resources },
  { href: "/admin/applications", label: "Applications", icon: icons.Applications },
  { href: "/admin/events", label: "Events", icon: icons.Events },
];

export function AdminNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 py-3 px-4 flex items-center justify-between"
        style={{
          background: "rgba(45,59,44,0.96)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em]" style={{ color: "rgba(255,255,255,0.48)" }}>
            ACC Admin
          </p>
          <Link href="/admin" aria-label="Austin Clinician Circle">
            <img
              src="/logo.png"
              alt="Austin Clinician Circle"
              className="h-14 w-auto mt-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          aria-label="Open admin menu"
        >
          ☰
        </button>
      </div>

      <aside
        className="hidden md:flex w-56 shrink-0 h-screen overflow-hidden flex-col py-6 px-3"
        style={{
          background: "#2D3B2C",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="px-1 mb-6">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.24em] mb-1"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            ACC Admin
          </p>
          <Link href="/admin" aria-label="Austin Clinician Circle">
            <img
              src="/logo.png"
              alt="Austin Clinician Circle"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: active ? "rgba(194,150,58,0.18)" : "transparent",
                  color: active ? "#C2963A" : "rgba(255,255,255,0.72)",
                  borderLeft: active ? "2px solid #C2963A" : "2px solid transparent",
                }}
              >
                <span className="text-base leading-none">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div
          className="mt-auto pt-6"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <SignOutAction
            label="Log out"
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.52)" }}
          />
        </div>
      </aside>

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        background="#2D3B2C"
        borderColor="rgba(255,255,255,0.08)"
        closeColor="rgba(255,255,255,0.72)"
        title={
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] mb-2" style={{ color: "rgba(255,255,255,0.40)" }}>
              ACC Admin
            </p>
            <span
              className="text-base"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, color: "#fff" }}
            >
              Austin Clinician Circle
            </span>
          </div>
        }
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
                style={{
                  background: active ? "rgba(194,150,58,0.18)" : "transparent",
                  color: active ? "#C2963A" : "rgba(255,255,255,0.82)",
                  borderLeft: active ? "2px solid #C2963A" : "2px solid transparent",
                }}
              >
                <span className="text-base leading-none">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <SignOutAction
            label="Log out"
            onSignedOut={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.52)" }}
          />
        </div>
      </MobileSidePanel>
    </>
  );
}
