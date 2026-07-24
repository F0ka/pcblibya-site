"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 overflow-x-auto sm:gap-2">
      {navLinks.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative whitespace-nowrap px-2 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors sm:text-xs ${
              active ? "text-trace" : "text-muted hover:text-silk"
            }`}
          >
            {link.label}
            {active && (
              <span
                aria-hidden
                className="absolute inset-x-2 -bottom-0.5 flex items-center"
              >
                <span className="h-0.5 flex-1 bg-trace" />
                <span className="h-1.5 w-1.5 rounded-full border border-trace bg-board" />
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
