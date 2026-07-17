import { NextRequest, NextResponse } from "next/server";
import { hasDatabaseConfig } from "@/lib/env";
import { prisma } from "@/lib/prisma";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const { email } = (await req.json().catch(() => ({}))) as { email?: string };

  if (!email?.trim() || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  if (!hasDatabaseConfig) {
    // No database configured yet — acknowledge the signup without pretending
    // it was stored anywhere (mirrors the RESEND_API_KEY dev-mode fallback in
    // /api/leads and /api/application).
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    await prisma.lead.upsert({
      where: { email: email.trim().toLowerCase() },
      create: { email: email.trim().toLowerCase(), source: "newsletter" },
      update: {},
    });
  } catch (err) {
    console.error("[newsletter] failed to record signup:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
