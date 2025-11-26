
interface ProgressBarProps {
  value: number; // 0-100
}

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full rounded-full bg-[#E5E7EB] h-1.5 overflow-hidden">
      <div
        className="h-full bg-[#111827] transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
