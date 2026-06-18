import Link from "next/link";

const quickLinks = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-offer", label: "Membership" },
  { href: "/coming-soon", label: "Community" },
  { href: "/coming-soon", label: "Resources" },
  { href: "/coming-soon", label: "Events" },
];

const insideLinks = [
  { href: "/find-a-clinician", label: "Member Directory" },
  { href: "/coming-soon", label: "Consultation Groups" },
  { href: "/dashboard/resources", label: "Resource Library" },
  { href: "/coming-soon", label: "Continuing Education" },
  { href: "/coming-soon", label: "FAQs" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1C2B21" }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.6fr,1fr,1fr,1fr] gap-10 mb-12">
          {/* Brand col */}
          <div>
            <p
              className="text-base font-medium mb-1"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                color: "#fff",
              }}
            >
              Austin Clinician Circle
            </p>
            <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.52)" }}>
              Connection. Consultation. Community.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.6)" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@austincliniciancircle.org"
                aria-label="Email"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Quick Links
            </p>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Inside ACC */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Inside ACC
            </p>
            <nav className="flex flex-col gap-2.5">
              {insideLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Community */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Community
            </p>
            <div className="flex flex-col gap-2.5">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
                Austin, Texas
              </p>
              <a
                href="mailto:hello@austincliniciancircle.org"
                className="text-sm transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                hello@austincliniciancircle.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Austin Clinician Circle. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/coming-soon"
              className="text-xs transition-colors duration-150 hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Privacy
            </Link>
            <Link
              href="/coming-soon"
              className="text-xs transition-colors duration-150 hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
