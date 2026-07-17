import type { MetadataRoute } from "next";
import { appUrl } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/admin", "/api", "/sign-in", "/sign-up", "/coming-soon"],
    },
    sitemap: `${appUrl}/sitemap.xml`,
  };
}
