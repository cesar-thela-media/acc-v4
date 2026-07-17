import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { hasClerkCredentials, hasDatabaseConfig } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { type, memberName, note } = (await req.json().catch(() => ({}))) as {
    type?: "refer" | "message";
    memberName?: string;
    note?: string;
  };

  if (type !== "refer" && type !== "message") {
    return NextResponse.json({ error: "Invalid action type." }, { status: 400 });
  }
  if (!memberName?.trim()) {
    return NextResponse.json({ error: "Missing target member." }, { status: 400 });
  }

  // Best-effort, same pattern as /api/certificate: record the action when a
  // database is configured, but never block the UI's success state on it —
  // there's nothing else the client needs to wait on here.
  if (hasDatabaseConfig) {
    try {
      let fromUserId: string | undefined;
      if (hasClerkCredentials) {
        const { userId } = await auth();
        fromUserId = userId ?? undefined;
      }
      await prisma.networkAction.create({
        data: { type, toMemberName: memberName.trim(), fromUserId, note },
      });
    } catch (err) {
      console.error("[network/action] failed to record action (continuing anyway):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
