import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { setCurrentMemberName } from "@/lib/auth";
import { hasClerkCredentials, hasDatabaseConfig } from "@/lib/env";
import { prisma } from "@/lib/prisma";

type ProfilePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  licenseType?: string;
  licenseNumber?: string;
  supervisor?: string;
  bio?: string;
  specialties?: string[];
  format?: string;
  officeLocation?: string;
  accepting?: boolean;
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as ProfilePayload;
  const { firstName, lastName } = body;

  if (!firstName?.trim()) {
    return NextResponse.json({ error: "First name is required." }, { status: 400 });
  }

  try {
    await setCurrentMemberName({
      firstName: firstName.trim().slice(0, 80),
      lastName: (lastName ?? "").trim().slice(0, 80),
    });
  } catch (err) {
    console.error("[profile] failed to update name:", err);
    return NextResponse.json({ error: "Failed to save profile." }, { status: 500 });
  }

  // Full practice-profile fields (bio, specialties, format, etc.) need a real
  // signed-in User row to attach to — only possible once Clerk + a live
  // Postgres database are both configured. Until then this is a no-op so the
  // route behaves identically in demo mode; once both are live, no further
  // code changes are needed here.
  if (hasClerkCredentials && hasDatabaseConfig) {
    try {
      const { userId } = await auth();
      if (userId) {
        const displayName = `${firstName.trim()} ${(lastName ?? "").trim()}`.trim();
        await prisma.clinicianProfile.upsert({
          where: { userId },
          create: {
            userId,
            slug: userId,
            displayName,
            credentials: body.licenseType ?? "",
            bio: body.bio,
            emailPublic: body.email,
            city: body.city,
            licenseNumber: body.licenseNumber,
            supervisorName: body.supervisor,
            formats: body.format ? [body.format] : [],
            officeLocation: body.officeLocation,
            acceptingClients: body.accepting ?? true,
          },
          update: {
            displayName,
            credentials: body.licenseType ?? "",
            bio: body.bio,
            emailPublic: body.email,
            city: body.city,
            licenseNumber: body.licenseNumber,
            supervisorName: body.supervisor,
            formats: body.format ? [body.format] : [],
            officeLocation: body.officeLocation,
            acceptingClients: body.accepting ?? true,
          },
        });
      }
    } catch (err) {
      console.error("[profile] failed to persist practice profile (continuing anyway):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
