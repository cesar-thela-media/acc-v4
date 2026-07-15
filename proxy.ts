import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextMiddleware } from "next/server";
import { hasClerkCredentials } from "@/lib/env";

// When Clerk isn't configured, gate /dashboard routes behind the demo-auth
// cookie instead, so unauthenticated visitors (e.g. clicking a footer link)
// land on /sign-in rather than straight into the dashboard.
// /dashboard/free is an intentionally public preview tier and stays open.
const demoAuthProxy: NextMiddleware = (req) => {
  const { pathname } = req.nextUrl;
  const isProtectedDashboardRoute =
    pathname.startsWith("/dashboard") && pathname !== "/dashboard/free";

  if (isProtectedDashboardRoute && !req.cookies.get("acc_demo_email")?.value) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
};

export default hasClerkCredentials ? clerkMiddleware() : demoAuthProxy;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
