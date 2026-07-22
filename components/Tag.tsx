export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-trace-dim bg-panel px-2.5 py-0.5 text-xs font-medium text-trace">
      {label}
    </span>
  );
}
