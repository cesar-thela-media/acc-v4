"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/admin", label: "Overview", icon: "⊞" },
  { href: "/admin/members", label: "Members", icon: "◉" },
  { href: "/admin/resources", label: "Resources", icon: "◫" },
  { href: "/admin/applications", label: "Applications", icon: "◈" },
  { href: "/admin/events", label: "Events", icon: "◷" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside
      className="w-56 shrink-0 min-h-screen flex flex-col py-8 px-4"
      style={{
        background: "var(--color-sage-900)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-3 mb-8">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-1"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Admin
        </p>
        <span
          className="text-sm font-semibold"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            color: "#fff",
          }}
        >
          Austin Clinician Circle
        </span>
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
                background: active ? "rgba(255,255,255,0.1)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.6)",
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
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <span>⇤</span> Back to site
        </Link>
      </div>
    </aside>
  );
}
