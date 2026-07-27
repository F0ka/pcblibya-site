"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkBase =
  "font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors sm:text-xs";

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`relative whitespace-nowrap px-2 py-1.5 ${linkBase} ${
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

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-trace-dim text-muted transition-colors hover:border-trace hover:text-trace lg:hidden"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          {open ? (
            <path d="M3 3l10 10M13 3L3 13" />
          ) : (
            <path d="M2 4h12M2 8h12M2 12h12" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <nav className="absolute inset-x-0 top-16 border-b border-trace-dim bg-board lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 border-l-2 py-2.5 pl-3 ${linkBase} ${
                      active
                        ? "border-trace text-trace"
                        : "border-transparent text-muted hover:text-silk"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
