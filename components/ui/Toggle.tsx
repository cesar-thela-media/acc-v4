interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function Toggle({ checked, onChange, label, className = "" }: ToggleProps) {
  const track = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative w-10 h-6 rounded-full shrink-0 transition-colors"
      style={{ background: checked ? "var(--color-accent-highlight)" : "var(--color-cream-400)" }}
    >
      <span
        className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform"
        style={{ transform: checked ? "translateX(16px)" : "translateX(0)" }}
      />
    </button>
  );

  if (!label) return <div className={className}>{track}</div>;

  return (
    <label className={`flex items-center justify-between gap-3 cursor-pointer ${className}`}>
      <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{label}</span>
      {track}
    </label>
  );
}
