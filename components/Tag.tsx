/**
 * NET-like label: mono uppercase, sharp corners, trace-dim border.
 */
export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-sm border border-trace-dim bg-panel px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-trace">
      {label}
    </span>
  );
}
