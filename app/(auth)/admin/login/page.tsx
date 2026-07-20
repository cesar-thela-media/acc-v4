import { SignIn } from "@clerk/nextjs";
import { MockSignIn } from "@/components/auth/MockSignIn";
import { hasClerkCredentials } from "@/lib/env";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Log In | The Circle",
  description: "Log in to the Austin Clinician Circle admin dashboard.",
};

/**
 * Dedicated admin auth surface — distinct from member `/sign-in`.
 * Demo/mock mode posts cookies then routes to `/admin`.
 */
export default function AdminLoginPage() {
  if (!hasClerkCredentials) {
    return (
      <MockSignIn
        redirectTo="/admin"
        title="Admin log in"
        description="Owner access for members, applications, events, and resources. Clerk isn’t configured — enter any name and email to open the admin dashboard."
        showFreePreview={false}
        showJoinLink={false}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#F0EDE6" }}>
      <SignIn
        path="/admin/login"
        routing="path"
        signUpUrl="/join"
        fallbackRedirectUrl="/admin"
        forceRedirectUrl="/admin"
        appearance={{
          variables: {
            colorPrimary: "#C2963A",
            colorBackground: "#F0EDE6",
            colorInputBackground: "#ffffff",
            colorInputText: "#1A1A1A",
            borderRadius: "10px",
            fontFamily: "inherit",
          },
          elements: {
            card: { boxShadow: "0 4px 24px rgba(45,59,44,0.10)", border: "1px solid rgba(194,150,58,0.15)" },
            formButtonPrimary: { backgroundColor: "#C2963A" },
            footerActionLink: { color: "#C2963A" },
          },
        }}
      />
    </div>
  );
}
