"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/shadcn/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/shadcn/field";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { UserRound } from "lucide-react";

const SAGE_800 = "#2D3B2C";
const AMBER = "#C2963A";

type Props = {
  redirectTo?: string;
};

export function MockSignIn({ redirectTo = "/dashboard" }: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await signIn(name, email);
  }

  async function signIn(nameVal: string, emailVal: string) {
    if (!nameVal.trim() || !emailVal.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/mock-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameVal.trim(), email: emailVal.trim() }),
      });
      if (res.ok) {
        router.push(redirectTo);
        router.refresh();
      } else {
        setError("Sign in failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function demoLogin() {
    setError("");
    setName("Sarah Arnold");
    setEmail("sarah@restoredfamily.com");
    await signIn("Sarah Arnold", "sarah@restoredfamily.com");
  }

  return (
    <section className="relative min-h-screen">
      <img src="/signin-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(45,59,44,0.75) 0%, rgba(45,59,44,0.35) 55%, rgba(45,59,44,0.15) 100%)" }}
      />
      <div className="relative flex items-end sm:items-center justify-center lg:justify-start min-h-screen">
        <div className="max-w-7xl p-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8 mx-auto w-full">
          <Card className="w-full h-full max-w-md px-6 py-8 sm:px-8 sm:py-12 border-none shadow-xl gap-8 rounded-3xl" style={{ background: "#fff" }}>
            <CardHeader className="p-0 flex gap-6 flex-col">
              <Link href="/" aria-label="The Circle">
                <img src="/logo-mark.png" alt="" className="h-10 w-10 object-contain" />
              </Link>
              <div className="flex gap-2 flex-col">
                <CardTitle className="text-2xl font-semibold" style={{ color: SAGE_800 }}>
                  Sign in to The Circle
                </CardTitle>
                <CardDescription className="text-sm font-normal">
                  Clerk auth isn&apos;t configured. Enter any name and email to access the member dashboard.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                <FieldGroup className="gap-6">
                  <div className="flex flex-col gap-4">
                    <Field className="gap-1.5">
                      <FieldLabel htmlFor="name" className="text-sm font-normal" style={{ color: "var(--color-text-secondary)" }}>
                        Full name
                      </FieldLabel>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        required
                        className="h-9 shadow-xs"
                      />
                    </Field>
                    <Field className="gap-1.5">
                      <FieldLabel htmlFor="email" className="text-sm font-normal" style={{ color: "var(--color-text-secondary)" }}>
                        Email address
                      </FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        required
                        className="h-9 shadow-xs"
                      />
                    </Field>
                  </div>

                  {error && <p className="text-sm" style={{ color: "var(--color-error)" }}>{error}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-lg h-10 cursor-pointer"
                    style={{ background: AMBER, color: "#fff" }}
                  >
                    {loading ? "Signing in…" : "Sign in"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    disabled={loading}
                    onClick={demoLogin}
                    className="w-full rounded-lg h-9 gap-2 cursor-pointer"
                  >
                    <UserRound className="size-4" />
                    {loading ? "Signing you in…" : "Log in as Demo User"}
                  </Button>

                  <Link
                    href="/dashboard/free"
                    className="text-center text-sm font-medium"
                    style={{ color: SAGE_800 }}
                  >
                    Preview free tier →
                  </Link>
                </FieldGroup>
              </form>
              <p className="text-center text-sm mt-6" style={{ color: "var(--color-text-secondary)" }}>
                Don&apos;t have an account?{" "}
                <Link href="/join" className="font-medium underline" style={{ color: AMBER }}>
                  Join The Circle
                </Link>
              </p>
              <p className="text-xs text-center mt-4" style={{ color: "var(--color-text-tertiary)" }}>
                To enable real auth, add <code className="font-mono">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and{" "}
                <code className="font-mono">CLERK_SECRET_KEY</code> to your environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
