import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { currentUser } from "@clerk/nextjs/server";
import { hasClerkCredentials, hasRobollyConfig } from "@/lib/env";
import { renderCertificatePdf } from "@/lib/robolly";

// Next.js App Router default runtime is Node.js and required for fetch → Buffer here
export const runtime = "nodejs";

async function resolveMemberName(): Promise<string> {
  if (hasClerkCredentials) {
    const user = await currentUser();
    const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim();
    if (fullName) return fullName;
  }

  const jar = await cookies();
  const demoName = jar.get("acc_demo_name")?.value?.trim();
  return demoName || "Member";
}

export async function GET() {
  if (!hasRobollyConfig) {
    return NextResponse.json(
      { error: "Certificate template isn't configured yet. Set ROBOLLY_API_KEY and ROBOLLY_TEMPLATE_ID." },
      { status: 503 }
    );
  }

  const name = await resolveMemberName();

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await renderCertificatePdf({ name });
  } catch (err) {
    console.error("[certificate] Robolly render failed:", err);
    return NextResponse.json({ error: "Failed to generate certificate. Please try again." }, { status: 502 });
  }

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="austin-clinician-circle-certificate.pdf"`,
    },
  });
}
