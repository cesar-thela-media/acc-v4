"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";
import { SignOutAction } from "@/components/auth/SignOutAction";

const icons: Record<string, React.ReactNode> = {
  Overview:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Resources:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  Files:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  Events:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Network:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="M8 17h8"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><path d="M6.5 8.5 9 10"/><path d="M15 10l2.5-1.5"/></svg>,
  Profile:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  Billing:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
};

const navLinks = [
  { href: "/dashboard", label: "Overview", icon: icons.Overview },
  { href: "/dashboard/resources", label: "Resources", icon: icons.Resources },
  { href: "/dashboard/files", label: "Files", icon: icons.Files },
  { href: "/dashboard/events", label: "Events", icon: icons.Events },
  { href: "/dashboard/network", label: "Network", icon: icons.Network },
  { href: "/dashboard/profile", label: "Profile", icon: icons.Profile },
  { href: "/dashboard/billing", label: "Billing", icon: icons.Billing },
];

export function DashboardNav() {
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
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Link
          href="/dashboard"
          className="shrink-0"
          aria-label="Austin Clinician Circle"
        >
          <img
            src="/logo.png"
            alt="Austin Clinician Circle"
            className="h-14 w-auto"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          aria-label="Open dashboard menu"
        >
          ☰
        </button>
      </div>

      <aside
        className="hidden md:flex w-56 shrink-0 h-screen overflow-hidden flex-col py-6 px-3"
        style={{
          background: "var(--color-sage-800)",
          borderRight: "1px solid rgba(255, 255, 255, 0.10)",
        }}
      >
        <Link
          href="/dashboard"
          className="px-1 mb-6 block"
          aria-label="Austin Clinician Circle"
        >
          <img
            src="/logo.png"
            alt="Austin Clinician Circle"
            className="h-16 w-auto"
          />
        </Link>

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
                  color: active ? "#C2963A" : "rgba(255,255,255,0.78)",
                  borderLeft: active ? "3px solid #C2963A" : "3px solid transparent",
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
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}
        >
          <SignOutAction
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full transition-all duration-300 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.68)" }}
          />
        </div>
      </aside>

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        background="var(--color-sage-800)"
        borderColor="rgba(255,255,255,0.10)"
        title={
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] mb-2" style={{ color: "rgba(255,255,255,0.48)" }}>
              Member dashboard
            </p>
            <span className="text-base font-semibold" style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#fff" }}>
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
                  color: active ? "#C2963A" : "rgba(255,255,255,0.78)",
                  borderLeft: active ? "3px solid #C2963A" : "3px solid transparent",
                }}
              >
                <span className="text-base leading-none">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <SignOutAction
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium w-full transition-all duration-300 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.72)" }}
            onSignedOut={() => setMobileOpen(false)}
          />
        </div>
      </MobileSidePanel>
    </>
  );
}
