import type { Metadata } from "next";
import { site } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Component Library",
  description:
    "Open-source KiCad and Altium component libraries: symbols, footprints and 3D models.",
};

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <SectionHeader index="01" label="Component Library" />
        <h1 className="-mt-4 font-display text-3xl font-bold tracking-tight text-silk">
          Open Component Library
        </h1>
        <p className="mt-2 text-muted">
          Every symbol, footprint and 3D model I create for my projects is
          published open-source. Use them in your own designs — commercial or
          personal.
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-sm bg-trace px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-board transition-opacity hover:opacity-85"
        >
          View on GitHub →
        </a>
      </div>

      {/* KiCad */}
      <section className="relative rounded-sm border border-trace-dim bg-panel p-6">
        <h2 className="font-display text-xl font-bold text-silk">KiCad Libraries</h2>
        <p className="mt-2 text-sm text-muted">
          The repository contains three folders per KiCad conventions:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
          <li>
            <code className="text-trace">symbols/</code> —{" "}
            <code className="text-trace">.kicad_sym</code> schematic symbol
            libraries
          </li>
          <li>
            <code className="text-trace">footprints/</code> —{" "}
            <code className="text-trace">.kicad_mod</code> footprint libraries
            (as <code className="text-trace">.pretty</code> folders)
          </li>
          <li>
            <code className="text-trace">3dmodels/</code> — STEP and WRL 3D
            models
          </li>
        </ul>
        <h3 className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-trace">Installation</h3>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>
            Clone or download the repository:
            <pre className="mt-2 overflow-x-auto rounded-sm border border-trace-dim bg-board p-3 font-mono text-xs text-silk">
              git clone {site.github}.git
            </pre>
          </li>
          <li>
            In KiCad, go to{" "}
            <strong className="text-silk">
              Preferences → Manage Symbol Libraries…
            </strong>{" "}
            and add the <code className="text-trace">.kicad_sym</code> files
            (global or project scope).
          </li>
          <li>
            Go to{" "}
            <strong className="text-silk">
              Preferences → Manage Footprint Libraries…
            </strong>{" "}
            and add the <code className="text-trace">.pretty</code> folders.
          </li>
          <li>
            Optionally set the <code className="text-trace">PCBLIBYA_3D</code>{" "}
            path variable to the <code className="text-trace">3dmodels/</code>{" "}
            folder so footprints find their 3D models.
          </li>
        </ol>
      </section>

      {/* Altium */}
      <section className="relative rounded-sm border border-trace-dim bg-panel p-6">
        <h2 className="font-display text-xl font-bold text-silk">Altium Libraries</h2>
        <p className="mt-2 text-sm text-muted">
          For Altium Designer users the same components are provided as
          compiled libraries:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
          <li>
            <code className="text-trace">.SchLib</code> — schematic symbol
            libraries
          </li>
          <li>
            <code className="text-trace">.PcbLib</code> — PCB footprint
            libraries
          </li>
        </ul>
        <h3 className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-trace">Installation</h3>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>Download or clone the repository from GitHub.</li>
          <li>
            In Altium Designer, open the{" "}
            <strong className="text-silk">Components</strong> panel → menu →{" "}
            <strong className="text-silk">File-based Libraries…</strong>
          </li>
          <li>
            Click <strong className="text-silk">Install</strong> and select the{" "}
            <code className="text-trace">.SchLib</code> and{" "}
            <code className="text-trace">.PcbLib</code> files.
          </li>
        </ol>
      </section>

      {/* License */}
      <section className="relative rounded-sm border border-trace-dim bg-panel p-6">
        <h2 className="font-display text-xl font-bold text-silk">License</h2>
        <p className="mt-2 text-sm text-muted">
          All libraries are released under the{" "}
          <strong className="text-silk">{site.license}</strong> (CERN Open
          Hardware Licence, strongly reciprocal). You may use, study, modify
          and redistribute them; derivatives must be shared under the same
          license with attribution.
        </p>
      </section>
    </div>
  );
}
