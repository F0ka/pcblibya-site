import Link from "next/link";
import { site } from "@/lib/site";
import { getAllProjects, getAllPosts } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";

export default function Home() {
  const projects = getAllProjects().slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="rounded-xl border border-trace-dim bg-panel px-6 py-14 text-center sm:px-12">
        <p className="font-mono text-sm text-trace">// {site.url}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-silk sm:text-5xl">
          The home of Libyan PCB geeks
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Open hardware designs, shared knowledge and hands-on tutorials in
          Arabic and English — built with KiCad and Altium Designer, by and
          for Libya&apos;s electronics community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/blog"
            className="rounded-md bg-trace px-5 py-2.5 text-sm font-semibold text-board transition-opacity hover:opacity-85"
          >
            Browse tutorials
          </Link>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-trace px-5 py-2.5 text-sm font-semibold text-trace transition-colors hover:bg-trace hover:text-board"
          >
            Follow the community ↗
          </a>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-silk">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-trace hover:underline"
          >
            All projects →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Library & download center link cards */}
      <section className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/library"
          className="group rounded-lg border border-trace-dim bg-panel p-6 transition-colors hover:border-trace"
        >
          <h3 className="text-lg font-semibold text-silk group-hover:text-trace transition-colors">
            Open Component Library
          </h3>
          <p className="mt-2 text-sm text-muted">
            Open-source KiCad and Altium component libraries — symbols,
            footprints and 3D models, released under {site.license}.
          </p>
        </Link>
        <Link
          href="/downloads"
          className="group rounded-lg border border-trace-dim bg-panel p-6 transition-colors hover:border-trace"
        >
          <h3 className="text-lg font-semibold text-silk group-hover:text-trace transition-colors">
            Download Center
          </h3>
          <p className="mt-2 text-sm text-muted">
            Project files, Gerbers and a curated list of the EDA tools I use
            every day.
          </p>
        </Link>
      </section>

      {/* Latest posts */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-silk">Latest Tutorials</h2>
          <Link href="/blog" className="text-sm text-trace hover:underline">
            All tutorials →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
