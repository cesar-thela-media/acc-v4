import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Spectral, DM_Sans } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/AosInit";
import { hasClerkCredentials } from "@/lib/env";

/* Spectral — ultra-thin high-contrast editorial serif by Production Type.
   Weight 300 = Light with hairline strokes and dramatic thick-thin contrast,
   closest free Google match to Tiempos Fine / Freight Display Light style. */
const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* DM Sans — clean humanist sans for body & UI */
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Austin Clinician Circle",
  description:
    "Austin Clinician Circle — a membership community for licensed clinicians in Austin, TX. Deepen your work. Find your people.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const appShell = (
    <>
      <AosInit />
      {children}
    </>
  );

  return (
    <html
      lang="en"
      className={`${spectral.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {hasClerkCredentials ? <ClerkProvider>{appShell}</ClerkProvider> : appShell}
      </body>
    </html>
  );
}
