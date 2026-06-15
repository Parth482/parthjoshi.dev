const STACK = [
  "TYPESCRIPT", "REACT", "NEXT.JS", "NODE.JS", "REACT NATIVE", "PYTHON",
  "MONGODB", "POSTGRES", "REDIS", "SUPABASE", "DOCKER", "AWS", "WEB3", "SOLIDITY",
];

export function HazardTicker() {
  const line = STACK.join(" // ") + " //";
  return (
    <div className="hazard-stripe h-12 border-y-2 border-ink flex items-center overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="text-ink font-heading font-bold text-xs px-8 tracking-tight">{line}</span>
        <span className="text-ink font-heading font-bold text-xs px-8 tracking-tight">{line}</span>
        <span className="text-ink font-heading font-bold text-xs px-8 tracking-tight">{line}</span>
      </div>
    </div>
  );
}
