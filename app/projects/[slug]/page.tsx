import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllProjects, getProject } from "@/lib/content";
import Tag from "@/components/Tag";
import { formatDate } from "@/components/PostCard";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article
      className="mx-auto max-w-3xl"
      dir={project.dir}
      lang={project.dir === "rtl" ? "ar" : undefined}
    >
      <Link
        href="/projects"
        className="text-sm text-trace hover:underline"
      >
        ← All projects
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-silk sm:text-4xl">
        {project.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
        <time>{formatDate(project.date)}</time>
        <span>·</span>
        <span>{project.status}</span>
        <span className="flex gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt={project.title}
        className="mt-6 w-full rounded-lg border border-trace-dim"
      />
      <div className="prose prose-invert mt-8 max-w-none prose-a:text-trace prose-headings:text-silk prose-strong:text-silk prose-code:text-trace prose-pre:border prose-pre:border-trace-dim prose-pre:bg-panel">
        <MDXRemote
          source={project.body}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {project.downloads && project.downloads.length > 0 && (
        <section className="mt-12 rounded-lg border border-trace-dim bg-panel p-6">
          <h2 className="text-xl font-bold text-silk">Downloads</h2>
          <ul className="mt-4 space-y-3">
            {project.downloads.map((download) => (
              <li key={download.file}>
                <a
                  href={download.file}
                  className="flex items-center justify-between rounded-md border border-trace-dim px-4 py-3 text-sm text-silk transition-colors hover:border-trace hover:text-trace"
                >
                  <span>{download.label}</span>
                  <span aria-hidden className="font-mono text-trace">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
