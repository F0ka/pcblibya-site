import { site } from "@/lib/site";

const nets = [
  { label: "NET/GITHUB", href: site.github },
  { label: "NET/FACEBOOK", href: site.facebook },
  { label: "NET/MAIL", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* castellated board edge */}
      <div aria-hidden className="castellated border-t border-trace-dim" />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-trace">
              {site.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {site.tagline} — open designs, shared knowledge, tutorials in
              Arabic and English.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="silk-label">Nets</p>
            {nets.map((net) => (
              <a
                key={net.label}
                href={net.href}
                target={net.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  net.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="font-mono text-xs tracking-widest text-muted transition-colors hover:text-trace"
              >
                &#9702; {net.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="silk-label">Fab notes</p>
            <p className="font-mono text-xs leading-relaxed tracking-wider text-muted">
              REV A · 2 LAYER · 1 OZ CU
              <br />
              HARDWARE: {site.license}
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-trace-dim pt-6 font-mono text-[11px] tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &#8212;&#9702; DESIGNED &amp; FABRICATED IN LIBYA &#183;{" "}
            {new Date().getFullYear()}
          </p>
          <p>PCB-LY-001 / MASK: BLACK / SILK: GREEN</p>
        </div>
      </div>
    </footer>
  );
}
