import Link from "next/link";
import { site } from "@/lib/site";
import { getAllProjects, getAllPosts } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";
import SectionHeader from "@/components/SectionHeader";
import TraceDivider from "@/components/TraceDivider";
import HeroArt from "@/components/HeroArt";

const stats = [
  ["EDA", "KICAD + ALTIUM"],
  ["LANG", "AR + EN"],
  ["LIBS", "CERN-OHL-S-2.0"],
  ["FILES", "OPEN / FREE"],
] as const;

export default function Home() {
  const projects = getAllProjects().slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero — asymmetric editorial layout */}
      <section className="hero-glow relative">
        <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.15fr_1fr] lg:py-16">
          <div>
            <p className="silk-label">
              &#8212;&#9702; {site.url.replace("https://", "")} — OPEN HARDWARE
              / LIBYA
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-silk sm:text-5xl lg:text-6xl">
              The home of
              <br />
              Libyan <span className="text-trace">PCB</span> geeks
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              Open hardware designs, shared knowledge and hands-on tutorials
              in Arabic and English — routed with KiCad and Altium Designer,
              by and for Libya&apos;s electronics community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-sm bg-trace px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-board transition-opacity hover:opacity-85"
              >
                Browse tutorials
              </Link>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-trace px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-trace transition-colors hover:bg-trace hover:text-board"
              >
                Follow the community
              </a>
            </div>
          </div>
          <div className="relative rounded-sm border border-trace-dim bg-panel/60 p-4">
            <span aria-hidden className="fiducial end-2 top-2 z-10" />
            <HeroArt />
          </div>
        </div>

        {/* capability ticker */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-trace-dim py-3">
          {stats.map(([key, value], i) => (
            <p
              key={key}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
            >
              <span className="text-copper">{key}:</span> {value}
              {i < stats.length - 1 && (
                <span className="ms-6 hidden text-trace-dim sm:inline">/</span>
              )}
            </p>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mt-20">
        <SectionHeader
          index="01"
          label="Featured Projects"
          href="/projects"
          linkText="All projects"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <TraceDivider className="my-16" />

      {/* Library & download center link panels */}
      <section>
        <SectionHeader index="02" label="Resources" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/library"
            className="panel-glow group relative rounded-sm border border-trace-dim bg-panel p-6"
          >
            <span aria-hidden className="fiducial end-2 top-2" />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
              LIB / SYMBOLS / FOOTPRINTS / 3D
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-silk transition-colors group-hover:text-trace">
              Open Component Library
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Open-source KiCad and Altium component libraries — symbols,
              footprints and 3D models, released under {site.license}.
            </p>
          </Link>
          <Link
            href="/downloads"
            className="panel-glow group relative rounded-sm border border-trace-dim bg-panel p-6"
          >
            <span aria-hidden className="fiducial end-2 top-2" />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
              FAB / GERBERS / TOOLS
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-silk transition-colors group-hover:text-trace">
              Download Center
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Project files, Gerbers and a curated list of the EDA tools I use
              every day.
            </p>
          </Link>
        </div>
      </section>

      <TraceDivider flip className="my-16" />

      {/* Latest posts */}
      <section>
        <SectionHeader
          index="03"
          label="Latest Tutorials"
          href="/blog"
          linkText="All tutorials"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
