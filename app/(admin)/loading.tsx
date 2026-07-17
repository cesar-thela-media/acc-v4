import { StatSkeleton, CardSkeleton } from "@/components/ui/Skeleton";

export default function AdminLoading() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="w-16 h-3 rounded mb-2 animate-pulse" style={{ background: "var(--color-cream-200)" }} />
        <div className="w-36 h-8 rounded animate-pulse" style={{ background: "var(--color-cream-200)" }} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
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
