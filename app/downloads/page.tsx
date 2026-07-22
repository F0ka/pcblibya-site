import type { Metadata } from "next";
import { hostedDownloads, thirdPartySoftware } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "Project files, Gerbers and recommended PCB design software downloads.",
};

export default function DownloadsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-silk">Download Center</h1>
        <p className="mt-2 text-muted">
          Hosted project files and the third-party tools I recommend for PCB
          design.
        </p>
      </div>

      {/* Hosted downloads */}
      <section>
        <h2 className="text-2xl font-bold text-silk">Hosted Downloads</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-trace-dim">
          <table className="w-full text-left text-sm">
            <thead className="bg-panel text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">File</th>
                <th className="hidden px-4 py-3 md:table-cell">Category</th>
                <th className="hidden px-4 py-3 sm:table-cell">Version</th>
                <th className="hidden px-4 py-3 sm:table-cell">Size</th>
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
                  <td className="hidden px-4 py-3 text-muted md:table-cell">
                    {item.category}
                  </td>
                  <td className="hidden px-4 py-3 text-muted sm:table-cell">
                    v{item.version}
                  </td>
                  <td className="hidden px-4 py-3 text-muted sm:table-cell">
                    {item.size}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={item.href}
                      className="inline-block rounded-md border border-trace px-3 py-1.5 text-xs font-semibold text-trace transition-colors hover:bg-trace hover:text-board"
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
        <h2 className="text-2xl font-bold text-silk">Third-Party Software</h2>
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
              className="group flex flex-col gap-2 rounded-lg border border-trace-dim bg-panel p-5 transition-colors hover:border-trace"
            >
              <span className="text-xs text-muted">{tool.category}</span>
              <h3 className="font-semibold text-silk group-hover:text-trace transition-colors">
                {tool.name} ↗
              </h3>
              <p className="flex-1 text-sm text-muted">{tool.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
