import Image from "next/image";
import Link from "next/link";

/**
 * Focused funnel chrome: logo only (no full public nav) so applicants stay on-task.
 * Used by /join (and any future single-purpose conversion routes).
 */
export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-0 right-0 z-40 p-4 sm:p-6">
        <Link href="/" aria-label="The Circle home" className="inline-flex items-center">
          <Image
            src="/logo-mark.png"
            alt=""
            width={2000}
            height={732}
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
            priority
          />
        </Link>
      </div>
      <main className="flex-1 min-h-screen">{children}</main>
    </>
  );
}
