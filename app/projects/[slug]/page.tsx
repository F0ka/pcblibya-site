import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeBidi from "@/lib/rehype-bidi";
import { getAllProjects, getProject } from "@/lib/content";
import { site } from "@/lib/site";
import ShareButtons from "@/components/ShareButtons";
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
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
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
        className="font-mono text-[11px] uppercase tracking-[0.16em] text-trace hover:underline"
      >
        &#8212;&#9702; All projects
      </Link>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-silk sm:text-4xl">
        {project.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        <time>{formatDate(project.date)}</time>
        <span className="h-px w-8 bg-trace-dim" aria-hidden />
        <span className="text-copper">{project.status}</span>
        <span className="h-px w-8 bg-trace-dim" aria-hidden />
        <span className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt={project.title}
        className="mt-6 w-full rounded-sm border border-trace-dim"
      />
      <div className="prose prose-invert mt-8 max-w-none prose-a:text-trace prose-headings:text-silk prose-strong:text-silk prose-code:text-trace prose-pre:border prose-pre:border-trace-dim prose-pre:bg-panel">
        <MDXRemote
          source={project.body}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: project.dir === "rtl" ? [rehypeBidi] : [],
            },
          }}
        />
      </div>

      {project.downloads && project.downloads.length > 0 && (
        <section className="mt-12 rounded-sm border border-trace-dim bg-panel p-6">
          <h2 className="font-display text-xl font-bold text-silk">Downloads</h2>
          <ul className="mt-4 space-y-3">
            {project.downloads.map((download) => (
              <li key={download.file}>
                <a
                  href={download.file}
                  className="flex items-center justify-between rounded-sm border border-trace-dim px-4 py-3 font-mono text-xs tracking-wider text-silk transition-colors hover:border-trace hover:text-trace"
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
      <div className="mt-10 border-t border-trace-dim pt-6">
        <ShareButtons
          url={`${site.url}/projects/${project.slug}`}
          title={project.title}
        />
      </div>
    </article>
  );
}
