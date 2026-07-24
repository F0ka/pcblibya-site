import Link from "next/link";
import Tag from "@/components/Tag";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="panel-glow group relative flex flex-col overflow-hidden rounded-sm border border-trace-dim bg-panel"
    >
      {/* fiducial */}
      <span aria-hidden className="fiducial end-2 top-2 z-10" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt={project.title}
        className="aspect-[16/9] w-full border-b border-trace-dim object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-silk transition-colors group-hover:text-trace">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
            {project.status}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-2 border-t border-trace-dim pt-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {project.date}
          </span>
          <span className="h-px flex-1 bg-trace-dim" aria-hidden />
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
