import type { Metadata } from "next";
import { hostedDownloads, thirdPartySoftware } from "@/lib/downloads";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "Project files, Gerbers and recommended PCB design software downloads.",
};

export default function DownloadsPage() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeader index="01" label="Download Center" />
        <p className="-mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Hosted project files and the third-party tools I recommend for PCB
          design.
        </p>
      </div>

      {/* Hosted downloads */}
      <section>
        <h2 className="font-display text-2xl font-bold text-silk">
          Hosted Downloads
        </h2>
        <div className="mt-6 overflow-x-auto rounded-sm border border-trace-dim">
          <table className="w-full text-left text-sm">
            <thead className="bg-panel font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">File</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">
                  Category
                </th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  Version
                </th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  Size
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-trace-dim">
              {hostedDownloads.map((item) => (
                <tr key={item.href} className="bg-board/40">
                  <td className="px-4 py-3">
                    <p className="font-medium text-silk">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {item.description}
                    </p>
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-muted md:table-cell">
                    {item.category}
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-muted sm:table-cell">
                    v{item.version}
                  </td>
                  <td className="hidden px-4 py-3 font-mono text-xs text-muted sm:table-cell">
                    {item.size}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={item.href}
                      className="inline-block rounded-sm border border-trace px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-trace transition-colors hover:bg-trace hover:text-board"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Third-party software */}
      <section>
        <h2 className="font-display text-2xl font-bold text-silk">
          Third-Party Software
        </h2>
        <p className="mt-2 text-sm text-muted">
          External tools — these links take you to the official sites.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {thirdPartySoftware.map((tool) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-glow group relative flex flex-col gap-2 rounded-sm border border-trace-dim bg-panel p-5"
            >
              <span aria-hidden className="fiducial end-2 top-2" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                {tool.category}
              </span>
              <h3 className="font-display text-lg font-bold text-silk transition-colors group-hover:text-trace">
                {tool.name} &#8599;
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
