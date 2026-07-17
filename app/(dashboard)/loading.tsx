import { CardSkeleton, StatSkeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="w-24 h-3 rounded mb-2 animate-pulse" style={{ background: "var(--color-cream-200)" }} />
        <div className="w-48 h-8 rounded animate-pulse" style={{ background: "var(--color-cream-200)" }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <StatSkeleton key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
