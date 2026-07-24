import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Projects",
  description: "PCB design portfolio — boards designed in Altium Designer and KiCad.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <SectionHeader index="01" label="Projects" />
      <p className="-mt-4 mb-8 max-w-2xl text-sm leading-relaxed text-muted">
        A selection of boards designed here in Libya — from prototype to
        production, with complete open project files.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
