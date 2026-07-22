import Link from "next/link";
import { site, navLinks } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-trace-dim bg-board/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            aria-hidden
            className="inline-block w-3 h-3 rounded-full bg-trace shadow-[0_0_8px_2px_rgba(0,166,81,0.5)] group-hover:shadow-[0_0_12px_4px_rgba(0,166,81,0.7)] transition-shadow"
          />
          <span className="font-bold text-lg tracking-tight text-silk">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-sm text-muted hover:text-trace transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
