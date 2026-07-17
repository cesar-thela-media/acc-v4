import { NextRequest, NextResponse } from "next/server";
import { hasRobollyConfig } from "@/lib/env";
import { getCurrentMemberName, getCurrentViewer } from "@/lib/auth";
import { renderCertificatePdf } from "@/lib/robolly";
import { prisma } from "@/lib/prisma";

// Next.js App Router default runtime is Node.js and required for fetch → Buffer here
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  if (!hasRobollyConfig) {
    return NextResponse.json(
      { error: "Certificate template isn't configured yet. Set ROBOLLY_API_KEY and ROBOLLY_TEMPLATE_ID." },
      { status: 503 }
    );
  }

  const { firstName, lastName } = await getCurrentMemberName();
  const name = [firstName, lastName].filter(Boolean).join(" ") || "Member";

  const workshop = req.nextUrl.searchParams.get("workshop") || undefined;
  const ceHours = req.nextUrl.searchParams.get("ceus") || undefined;

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await renderCertificatePdf({ name, date: new Date(), workshop, ceHours });
  } catch (err) {
    console.error("[certificate] Robolly render failed:", err);
    return NextResponse.json({ error: "Failed to generate certificate. Please try again." }, { status: 502 });
  }

  // Record that this certificate was issued. Best-effort: no DATABASE_URL is
  // configured yet in most environments, and the PDF is the actual deliverable
  // either way, so a DB failure here must never block the download.
  try {
    const { user, primaryEmail } = await getCurrentViewer();
    await prisma.certificate.create({
      data: {
        userId: user?.id,
        recipientName: name,
        recipientEmail: primaryEmail ?? undefined,
        workshop,
        ceHours,
      },
    });
  } catch (err) {
    console.error("[certificate] Failed to record issuance (continuing anyway):", err);
  }

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="the-circle-certificate.pdf"`,
    },
  });
}
