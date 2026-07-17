import { PrismaClient } from "@prisma/client";

// Standard Next.js/Prisma singleton: reuses one client per warm serverless
// instance (Vercel) or process (Railway) instead of opening a new Postgres
// connection on every request, and survives dev-mode hot reload.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
