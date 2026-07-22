import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-trace-dim mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name} · Hardware designs released
          under {site.license}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-trace transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-trace transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
