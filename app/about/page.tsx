import type { Metadata } from "next";
import { site } from "@/lib/site";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "About",
  description: "About the designer behind PCB Libya.",
};

const skills = [
  "Altium Designer",
  "KiCad",
  "RF Design",
  "Power Electronics",
  "Embedded Systems",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-silk">About</h1>
        <p className="mt-4 text-muted">
          I&apos;m a PCB designer based in Libya, passionate about open
          hardware. I design circuit boards for a living — from simple
          microcontroller breakouts to multi-layer RF and power designs — and I
          believe the tools and building blocks of electronics should be
          accessible to everyone in the region.
        </p>
        <p className="mt-3 text-muted">
          This site is where I publish my project files, my open-source
          component libraries, and tutorials that document what I learn along
          the way — mostly in KiCad and Altium Designer.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-silk">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-trace-dim bg-panel p-6">
        <h2 className="text-xl font-bold text-silk">Community &amp; Mission</h2>
        <p className="mt-2 text-sm text-muted">
          PCB Libya is more than a personal portfolio — the goal is to make
          PCB design knowledge accessible to Libyan and Arabic-speaking
          engineers and students. That means tutorials in both Arabic and
          English, open-source component libraries under {site.license}, and
          complete project files you can manufacture yourself.
        </p>
        <p className="mt-3 text-sm text-muted">
          Follow the community on Facebook and get involved: ask questions,
          share your own boards, or contribute symbols and footprints to the
          open library.
        </p>
        <a
          href={site.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-trace px-5 py-2.5 text-sm font-semibold text-trace transition-colors hover:bg-trace hover:text-board"
        >
          PCB Libya on Facebook ↗
        </a>
      </section>

      <section className="rounded-lg border border-trace-dim bg-panel p-6">
        <h2 className="text-xl font-bold text-silk">Contact</h2>
        <p className="mt-2 text-sm text-muted">
          Questions, collaboration ideas or custom board design requests —
          get in touch.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-trace px-5 py-2.5 text-sm font-semibold text-board transition-opacity hover:opacity-85"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-trace px-5 py-2.5 text-sm font-semibold text-trace transition-colors hover:bg-trace hover:text-board"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
