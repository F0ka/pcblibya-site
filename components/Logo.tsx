import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Logo: small square board outline with a mono "PB" glyph
 * plus the PCB LIBYA wordmark.
 */
export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span
        aria-hidden
        className="relative flex h-8 w-8 items-center justify-center rounded-sm border border-trace bg-panel font-mono text-[11px] font-medium text-trace transition-shadow group-hover:shadow-[0_0_10px_2px_rgba(0,166,81,0.35)]"
      >
        PB
        {/* fiducial dot on the board corner */}
        <span className="absolute -end-0.5 -top-0.5 h-1.5 w-1.5 rounded-full border border-copper bg-board" />
      </span>
      <span className="font-display text-base font-bold tracking-[0.14em] text-silk">
        PCB<span className="text-trace">·</span>LIBYA
      </span>
    </Link>
  );
}
