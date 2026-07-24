import Link from "next/link";

interface SectionHeaderProps {
  /** mono index, e.g. "01" */
  index: string;
  /** silkscreen label, e.g. "PROJECTS" */
  label: string;
  href?: string;
  linkText?: string;
}

/**
 * Section header styled as a silkscreen label:
 * mono uppercase text with a trace line extending to a via dot.
 */
export default function SectionHeader({
  index,
  label,
  href,
  linkText,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <span className="silk-label shrink-0">
          &#8212;&#9702; {label} / {index}
        </span>
        <span className="relative h-px flex-1 bg-trace-dim" aria-hidden>
          <span className="absolute end-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full border border-trace bg-board" />
        </span>
        {href && linkText && (
          <Link
            href={href}
            className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-trace"
          >
            {linkText} -&gt;
          </Link>
        )}
      </div>
    </div>
  );
}
