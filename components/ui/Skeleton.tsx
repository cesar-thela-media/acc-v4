interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

const radiusMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function Skeleton({
  className = "",
  width,
  height,
  rounded = "lg",
}: SkeletonProps) {
  return (
    <div
      className={`animate-pulse ${radiusMap[rounded]} ${className}`}
      style={{
        background: "var(--color-cream-200)",
        width: width ?? "100%",
        height: height ?? "1rem",
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl p-6 flex flex-col gap-4"
      style={{ border: "1px solid rgba(197,200,190,0.5)" }}
    >
      <div className="flex items-center gap-3">
        <Skeleton width="2.75rem" height="2.75rem" rounded="full" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton width="60%" height="0.875rem" />
          <Skeleton width="40%" height="0.75rem" />
        </div>
      </div>
      <Skeleton width="100%" height="0.75rem" />
      <Skeleton width="90%" height="0.75rem" />
      <div className="flex gap-2 mt-1">
        <Skeleton width="4rem" height="1.5rem" rounded="full" />
        <Skeleton width="3rem" height="1.5rem" rounded="full" />
      </div>
    </div>
  );
}

export function StatSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl p-6 flex flex-col gap-2"
      style={{ border: "1px solid rgba(197,200,190,0.5)" }}
    >
      <Skeleton width="3rem" height="2rem" />
      <Skeleton width="80%" height="0.75rem" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(197,200,190,0.5)" }}
    >
      {/* Header */}
      <div className="flex gap-4 px-5 py-3" style={{ background: "var(--color-cream-100)" }}>
        <Skeleton width="30%" height="0.75rem" />
        <Skeleton width="20%" height="0.75rem" />
        <Skeleton width="15%" height="0.75rem" />
        <Skeleton width="15%" height="0.75rem" />
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 px-5 py-3.5"
          style={{ borderBottom: i < rows - 1 ? "1px solid var(--color-cream-200)" : "none" }}
        >
          <Skeleton width="30%" height="0.875rem" />
          <Skeleton width="20%" height="0.875rem" />
          <Skeleton width="15%" height="0.875rem" />
          <Skeleton width="15%" height="0.875rem" />
        </div>
      ))}
    </div>
  );
}
