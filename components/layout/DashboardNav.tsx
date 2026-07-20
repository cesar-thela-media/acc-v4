"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileSidePanel } from "@/components/layout/MobileSidePanel";
import { SignOutAction } from "@/components/auth/SignOutAction";
import {
  isExactOrChildPath,
  isFreeTierPath,
  partitionShellLinks,
  shellActiveStyle,
} from "@/lib/navShell";

const icons: Record<string, React.ReactNode> = {
  Overview:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Resources:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  Files:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  Events:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Network:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="M8 17h8"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><path d="M6.5 8.5 9 10"/><path d="M15 10l2.5-1.5"/></svg>,
  Profile:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  Billing:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
};

const featureLinks = [
  { href: "/dashboard", label: "Overview", icon: icons.Overview },
  { href: "/dashboard/resources", label: "Resources", icon: icons.Resources },
  { href: "/dashboard/files", label: "Files", icon: icons.Files },
  { href: "/dashboard/events", label: "Events", icon: icons.Events },
  { href: "/dashboard/network", label: "Network", icon: icons.Network },
];

const settingsLinks = [
  { href: "/dashboard/profile", label: "Profile", icon: icons.Profile },
  { href: "/dashboard/billing", label: "Billing", icon: icons.Billing },
];

const freeFeatureLinks = [
  { href: "/dashboard/free", label: "Overview", icon: icons.Overview },
];

const SETTINGS_HREFS = settingsLinks.map((l) => l.href);

export function DashboardNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isFreeTier = isFreeTierPath(pathname);
  const homeHref = isFreeTier ? "/dashboard/free" : "/dashboard";
  const sidebarFeatures = isFreeTier ? freeFeatureLinks : featureLinks;
  const { features: mobileFeatures, settings: mobileSettings } = partitionShellLinks(
    isFreeTier ? freeFeatureLinks : [...featureLinks, ...settingsLinks],
    SETTINGS_HREFS,
  );

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProfileOpen(false);
  }

  return (
    <>
      {/* Top app bar — brand logo lives here (not in the sidebar) */}
      <header
        className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between gap-3 px-4"
        style={{
          background: "rgba(45,59,44,0.97)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <Link href={homeHref} className="shrink-0 flex items-center gap-2" aria-label="The Circle">
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
          Member dashboard
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
              aria-label="Account menu"
            >
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-semibold"
                style={{ background: "rgba(194,150,58,0.35)", color: "#fff" }}
              >
                ME
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
                {(isFreeTier ? [] : settingsLinks).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setProfileOpen(false)}
                    className="block px-3 py-2 text-sm hover:bg-white/10"
                    style={{ color: isExactOrChildPath(pathname, link.href) ? "#fff" : "rgba(255,255,255,0.78)" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-1 py-1" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                  <SignOutAction
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
            aria-label="Open dashboard menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Feature sidebar — offerings only; logo is on the top navbar */}
      <aside
        className="hidden md:flex fixed top-14 left-0 bottom-0 w-56 z-30 flex-col py-4 px-3"
        style={{
          background: "var(--color-sage-800)",
          borderRight: "1px solid rgba(255, 255, 255, 0.10)",
        }}
      >
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Features
        </p>
        <nav className="flex flex-col gap-0.5">
          {sidebarFeatures.map((link) => {
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

      {/* Spacer so main content clears fixed sidebar on desktop */}
      <div className="hidden md:block w-56 shrink-0" aria-hidden="true" />

      <MobileSidePanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        background="var(--color-sage-800)"
        borderColor="rgba(255,255,255,0.10)"
        title={<Image src="/logo-mark.png" alt="The Circle" width={160} height={58} className="h-12 w-auto object-contain" />}
      >
        <p className="px-4 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Features
        </p>
        <nav className="flex flex-col gap-1">
          {mobileFeatures.map((link) => {
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
        {mobileSettings.length > 0 && (
          <>
            <p className="px-4 mt-6 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Account
            </p>
            <nav className="flex flex-col gap-1">
              {mobileSettings.map((link) => {
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
          </>
        )}
        <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <SignOutAction
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors duration-150 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.72)" }}
            onSignedOut={() => setMobileOpen(false)}
          />
        </div>
      </MobileSidePanel>
    </>
  );
}
