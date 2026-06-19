import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Clinician | The Circle",
  description:
    "Browse our curated directory of licensed clinicians in Austin, TX. Search by specialty and find the right therapist for your referral needs.",
};

export default function FindAClinicianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
