"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";
import { SignOutAction } from "@/components/auth/SignOutAction";
import { isExactOrChildPath, shellActiveStyle } from "@/lib/navShell";

const icons: Record<string, React.ReactNode> = {
  Overview:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Members:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6"/><circle cx="16" cy="7" r="2"/><path d="M13 18c0-2 1.3-3.6 3-4.5"/></svg>,
  Resources:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  Applications: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>,
  Events:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

/** Platform feature navigation only — account/settings live in the top profile menu. */
const featureLinks = [
  { href: "/admin", label: "Overview", icon: icons.Overview },
  { href: "/admin/members", label: "Members", icon: icons.Members },
  { href: "/admin/applications", label: "Applications", icon: icons.Applications },
  { href: "/admin/resources", label: "Resources", icon: icons.Resources },
  { href: "/admin/events", label: "Events", icon: icons.Events },
];

export function AdminNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProfileOpen(false);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between gap-3 px-4"
        style={{
          background: "rgba(45,59,44,0.97)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <Link href="/admin" className="shrink-0 flex items-center gap-2" aria-label="The Circle">
          <Image
            src="/logo-mark.png"
            alt=""
            width={160}
            height={58}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <p className="hidden md:block text-sm font-medium mr-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
          Admin
        </p>

        <div className="flex items-center gap-2 ml-auto">
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((o) => !o)}
              className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm"
              style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              aria-label="Admin account menu"
            >
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-semibold"
                style={{ background: "rgba(194,150,58,0.35)", color: "#fff" }}
              >
                AD
              </span>
              <span className="hidden sm:inline">Account</span>
            </button>
            {profileOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 rounded-xl py-1 z-50"
                style={{
                  background: "#2D3B2C",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                }}
              >
                <Link
                  href="/dashboard"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                  className="block px-3 py-2 text-sm hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Member view
                </Link>
                <Link
                  href="/admin/login"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                  className="block px-3 py-2 text-sm hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Admin log in
                </Link>
                <div className="px-1 py-1" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                  <SignOutAction
                    label="Log out"
                    className="flex w-full items-center gap-2 px-2 py-2 rounded-lg text-sm hover:bg-white/10"
                    style={{ color: "rgba(255,255,255,0.68)" }}
                    onSignedOut={() => setProfileOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            aria-label="Open admin menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <aside
        className="hidden md:flex fixed top-14 left-0 bottom-0 w-56 z-30 flex-col py-4 px-3"
        style={{
          background: "#2D3B2C",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Features
        </p>
        <nav className="flex flex-col gap-0.5">
          {featureLinks.map((link) => {
            const active = isExactOrChildPath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={shellActiveStyle(active)}
              >
                <span className="text-base leading-none">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="hidden md:block w-56 shrink-0" aria-hidden="true" />

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        background="#2D3B2C"
        borderColor="rgba(255,255,255,0.08)"
        closeColor="rgba(255,255,255,0.72)"
        title={<Image src="/logo-mark.png" alt="The Circle" width={160} height={58} className="h-12 w-auto object-contain" />}
      >
        <p className="px-4 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Features
        </p>
        <nav className="flex flex-col gap-1">
          {featureLinks.map((link) => {
            const active = isExactOrChildPath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150"
                style={shellActiveStyle(active)}
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
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.52)" }}
          />
        </div>
      </MobileSidePanel>
    </>
  );
}
