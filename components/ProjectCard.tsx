import Link from "next/link";
import Tag from "@/components/Tag";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-trace-dim bg-panel transition-colors hover:border-trace"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt={project.title}
        className="aspect-[16/9] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-silk group-hover:text-trace transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.status}</span>
        </div>
        <p className="flex-1 text-sm text-muted">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
